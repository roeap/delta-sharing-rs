use axum::{
    body::Body,
    extract::Request,
    http::header::CONTENT_TYPE,
    response::{IntoResponse, Response},
};
use futures::{future::BoxFuture, ready};
use hyper::body::Body as HyperBody;
use hyper::body::Incoming;
use std::{
    convert::Infallible,
    task::{Context, Poll},
};
use tonic::body::BoxBody;
use tower::Service;

pub struct MultiplexService<A, B> {
    rest: A,
    rest_ready: bool,
    grpc: B,
    grpc_ready: bool,
}

impl<A, B> MultiplexService<A, B> {
    pub fn new(rest: A, grpc: B) -> Self {
        Self {
            rest,
            rest_ready: false,
            grpc,
            grpc_ready: false,
        }
    }
}

impl<A, B> Clone for MultiplexService<A, B>
where
    A: Clone,
    B: Clone,
{
    fn clone(&self) -> Self {
        Self {
            rest: self.rest.clone(),
            grpc: self.grpc.clone(),
            // the cloned services probably won't be ready
            rest_ready: false,
            grpc_ready: false,
        }
    }
}

impl<A, B> Service<Request<Incoming>> for MultiplexService<A, B>
where
    A: Service<Request<Incoming>, Error = Infallible>,
    A::Response: IntoResponse,
    A::Future: Send + 'static,
    B: Service<Request<Incoming>, Error = Infallible>,
    B::Response: IntoResponse,
    B::Future: Send + 'static,
{
    type Response = Response;
    type Error = B::Error;
    type Future = BoxFuture<'static, Result<Self::Response, Self::Error>>;

    fn poll_ready(&mut self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        // drive readiness for each inner service and record which is ready
        loop {
            match (self.rest_ready, self.grpc_ready) {
                (true, true) => {
                    return Ok(()).into();
                }
                (false, _) => {
                    ready!(self.rest.poll_ready(cx))?;
                    self.rest_ready = true;
                }
                (_, false) => {
                    ready!(self.grpc.poll_ready(cx))?;
                    self.grpc_ready = true;
                }
            }
        }
    }

    fn call(&mut self, req: Request<Incoming>) -> Self::Future {
        // require users to call `poll_ready` first, if they don't we're allowed to panic
        // as per the `tower::Service` contract
        assert!(
            self.grpc_ready,
            "grpc service not ready. Did you forget to call `poll_ready`?"
        );
        assert!(
            self.rest_ready,
            "rest service not ready. Did you forget to call `poll_ready`?"
        );

        // if we get a grpc request call the grpc service, otherwise call the rest service
        // when calling a service it becomes not-ready so we have drive readiness again
        if is_grpc_request(&req) {
            self.grpc_ready = false;
            // let mut req = req.map(tonic::body::boxed);
            let future = self.grpc.call(req);
            Box::pin(async move {
                let res = future.await?;
                Ok(res.into_response())
            })
        } else {
            self.rest_ready = false;
            let future = self.rest.call(req);
            Box::pin(async move {
                let res = future.await?;
                Ok(res.into_response())
            })
        }
    }
}

fn is_grpc_request<B>(req: &Request<B>) -> bool {
    req.headers()
        .get(CONTENT_TYPE)
        .map(|content_type| content_type.as_bytes())
        .filter(|content_type| content_type.starts_with(b"application/grpc"))
        .is_some()
}

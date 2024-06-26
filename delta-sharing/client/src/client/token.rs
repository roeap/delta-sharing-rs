use std::future::Future;
use std::time::{Duration, Instant};
use tokio::sync::Mutex;

/// A temporary authentication token with an associated expiry
#[derive(Debug, Clone)]
pub struct TemporaryToken<T> {
    /// The temporary credential
    pub token: T,
    /// The instant at which this credential is no longer valid
    /// None means the credential does not expire
    pub expiry: Option<Instant>,
}

/// Provides [`TokenCache::get_or_insert_with`] which can be used to cache a
/// [`TemporaryToken`] based on its expiry
#[derive(Debug)]
pub struct TokenCache<T> {
    cache: Mutex<Option<TemporaryToken<T>>>,
    min_ttl: Duration,
}

impl<T> Default for TokenCache<T> {
    fn default() -> Self {
        Self {
            cache: Default::default(),
            min_ttl: Duration::from_secs(300),
        }
    }
}

impl<T: Clone + Send> TokenCache<T> {
    /// Override the minimum remaining TTL for a cached token to be used
    #[cfg(feature = "aws")]
    pub fn with_min_ttl(self, min_ttl: Duration) -> Self {
        Self { min_ttl, ..self }
    }

    pub async fn get_or_insert_with<F, Fut, E>(&self, f: F) -> Result<T, E>
    where
        F: FnOnce() -> Fut + Send,
        Fut: Future<Output = Result<TemporaryToken<T>, E>> + Send,
    {
        let now = Instant::now();
        let mut locked = self.cache.lock().await;

        if let Some(cached) = locked.as_ref() {
            match cached.expiry {
                Some(ttl) if ttl.checked_duration_since(now).unwrap_or_default() > self.min_ttl => {
                    return Ok(cached.token.clone());
                }
                None => return Ok(cached.token.clone()),
                _ => (),
            }
        }

        let cached = f().await?;
        let token = cached.token.clone();
        *locked = Some(cached);

        Ok(token)
    }
}

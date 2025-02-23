pub(crate) mod catalog;
pub(crate) mod credentials;
pub(crate) mod sharing;

pub use catalog::CatalogHandler;
pub use credentials::CredentialsHandler;
pub use sharing::{SharingDiscoveryHandler, SharingExtensionHandler, SharingQueryHandler};

use crate::{Permission, Recipient, ResourceIdent};

pub struct RequestContext {
    pub recipient: Recipient,
}

impl RequestContext {
    pub fn recipient(&self) -> &Recipient {
        &self.recipient
    }
}

impl AsRef<Recipient> for RequestContext {
    fn as_ref(&self) -> &Recipient {
        &self.recipient
    }
}

pub trait SecuredAction: Send + Sync {
    /// The resource that the action is performed on.
    fn resource(&self) -> ResourceIdent;

    /// The permission required to perform the action.
    fn permission(&self) -> &'static Permission;
}

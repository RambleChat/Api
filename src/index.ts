import * as PortalApi from "./portal";
import * as PortalApi12 from "./portal/1.2";
import * as PortalApi13 from "./portal/1.3";
import * as VisitorApi from "./visitor";
import * as VisitorApi11 from "./visitor/1.1";
import * as VisitorApi12 from "./visitor/1.2";

// Common stuff
export * from "./common";

// Export last portal and visitor api
export { PortalApi };
export { VisitorApi };

// Export specific versions
export { PortalApi12 };
export { PortalApi13 };
export { VisitorApi11 };
export { VisitorApi12 };

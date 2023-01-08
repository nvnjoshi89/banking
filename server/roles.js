const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("applicant").readOwn("profile");

  ac.grant("data-entry")
    .extend("applicant")
    .updateOwn("profile")
    .readAny("profile");

  ac.grant("branch-admin").extend("data-entry").updateAny("profile");

  ac.grant("admin").extend("branch-admin").deleteAny("profile");

  return ac;
})();

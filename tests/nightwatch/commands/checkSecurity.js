exports.command = function (
  allowAnonAccess,
  allowUserAccess,
  allowFellowCollaboratorAccess,
  rootUrl,
  route,
  elementName,
  userSecurityLevel
) {

  this.url(rootUrl + route).pause(500).sectionBreak(route);

  // ug.  this isn't particularly great code.
  // it barely does the job, but it's better than nothing
  if (allowAnonAccess) {
    this.verify.elementPresent(elementName);
  } else {
    if (allowUserAccess && ((userSecurityLevel === "signedInUser") || (userSecurityLevel === "collaborator"))) {
      this.verify.elementPresent(elementName);
    } else if (allowFellowCollaboratorAccess && (userSecurityLevel === "collaborator")) {
      this.verify.elementPresent(elementName);
    } else if (allowFellowCollaboratorAccess && (userSecurityLevel !== "collaborator")) {
      this.verify.elementNotPresent(elementName)
        .verify.elementPresent('#needCollaborationPriviledgesPage');
    } else {
      this.verify.elementNotPresent(elementName)
        .verify.elementPresent('#pleaseSignInPage');
    }
  }



  // if (userSecurityLevel === "anonymous") {
  //   if (allowAnonAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName);
  //   }
  // }
  //
  // if (userSecurityLevel === "signedInUser") {
  //   if (allowFellowCollaboratorAccess) {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#needCollaborationPriviledgesPage');
  //   } else {
  //     if (allowUserAccess) {
  //       this.verify.elementPresent(elementName);
  //     } else {
  //       this.verify.elementNotPresent(elementName)
  //         .verify.elementPresent('#pleaseSignInPage');
  //     }
  //   }
  // }
  //
  // if (userSecurityLevel === "collaborator") {
  //   if (allowFellowCollaboratorAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#needCollaborationPriviledgesPage');
  //   }
  // }
  //
  // if (userSecurityLevel === "self") {
  //   if (allowSelfAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName);
  //   }
  // }

}

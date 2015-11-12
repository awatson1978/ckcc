exports.command = function(formName) {
  this
    .verify.elementPresent("#navbarTitle")
    .click("#navbarTitle").pause(500)

    .verify.elementPresent("#navbarTitle")
    .click("#navbarTitle").pause(500)

    .verify.elementPresent("#metadataTile")
    .click("#metadataTile").pause(500)

    .verify.elementPresent("#metadataSearchInput")
    .clearValue('#metadataSearchInput')
    .setValue('#metadataSearchInput', formName)
    .click("#metadatasList .metadataItem:nth-child(1) .newLink").pause(500);

  return this;
};

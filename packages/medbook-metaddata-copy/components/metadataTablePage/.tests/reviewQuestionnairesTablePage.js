exports.command = function() {
  this
    .verify.elementPresent("#metadatasTablePage")
    .verify.elementPresent("#metadataSearchInput")
    .verify.elementPresent("#metadatasTable")
  return this;
};

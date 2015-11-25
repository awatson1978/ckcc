exports.command = function() {
  this
    .verify.elementPresent("#metadataTablePage")
    .verify.elementPresent("#metadataSearchInput")
    .verify.elementPresent("#metadataTable")
  return this;
};

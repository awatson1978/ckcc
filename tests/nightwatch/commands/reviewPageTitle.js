exports.command = function(formName) {
  this
    .verify.elementPresent("#metadataUpsertPage")
    .verify.elementPresent("#metadataUpsertPage .recordHeader")
    .verify.elementPresent("#metadataUpsertPage .recordHeader .recordTitle");

    .verify.containsText("#metadataUpsertPage .recordHeader ,recordTitle", formName);

  return this;
};

exports.command = function (metadata) {

  // first we test that default elements are there
  this
    .verify.elementPresent("#metadataUpsertPage")
    .verify.elementPresent("#metadataUpsertPage .recordHeader")
    .verify.elementPresent("#metadataUpsertCard")
    // .verify.elementPresent("#metadataMetaData")
    // .verify.elementPresent("#metadataMetaInputs")
    .verify.elementPresent('input[name="metadataName"]')
    .verify.elementPresent('input[name="institutionName"]')
    .verify.elementPresent('input[name="institutionId"]')
    .verify.elementPresent('input[name="collaborationName"]')
    .verify.elementPresent('input[name="collaborationId"]')
    .verify.elementPresent('input[name="slug"]');

  // if the field was specified, lets check it's set in its corresponding input
  if (metadata) {
    if (metadata.metadataName) {
      this.verify.attributeEquals('input[name="metadataName"]', "value", metadata.metadataName);
    }
    if (metadata.institutionName) {
      this.verify.attributeEquals('input[name="institutionName"]', "value", metadata.institutionName);
    }
    if (metadata.institutionId) {
      this.verify.attributeEquals('input[name="institutionId"]', "value", metadata.institutionId);
    }
    if (metadata.collaborationName) {
      this.verify.attributeEquals('input[name="collaborationName"]', "value", metadata.collaborationName);
    }
    if (metadata.collaborationId) {
      this.verify.attributeEquals('input[name="collaborationId"]', "value", metadata.collaborationId);
    }
    if (metadata.slug) {
      this.verify.attributeEquals('input[name="slug"]', "value", metadata.slug);
    }
  }


  this
    .verify.elementPresent("#metadataUpsertPage .recordFooter")
    .verify.elementPresent("#saveQuestionnaireButton");

  return this;
};

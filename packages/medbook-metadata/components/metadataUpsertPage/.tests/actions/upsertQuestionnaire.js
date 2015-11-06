exports.command = function (metadata) {

  // first we test that default elements are there
  this
    .verify.elementPresent("#metadataUpsertPage")
    .verify.elementPresent("#metadataUpsertPage .recordHeader")
    .verify.elementPresent("#metadataUpsertCard")

    .verify.elementPresent('input[name="metadataName"]')
    .verify.elementPresent('input[name="institutionName"]')
    .verify.elementPresent('input[name="institutionId"]')
    .verify.elementPresent('input[name="collaborationName"]')
    .verify.elementPresent('input[name="collaborationId"]')
    .verify.elementPresent('input[name="slug"]');

  // if the field was specified, lets check it's set in its corresponding input
  if (metadata) {
    if (metadata.metadataName) {
      this
        .verify.elementPresent('input[name="metadataName"]')
        .clearValue('input[name="metadataName"]')
        .setValue('input[name="metadataName"]', metadata.metadataName);
    }
    if (metadata.institutionName) {
      this
        .verify.elementPresent('input[name="institutionName"]')
        .clearValue('input[name="institutionName"]')
        .setValue('input[name="institutionName"]', metadata.institutionName);
    }
    if (metadata.institutionId) {
      this
        .verify.elementPresent('input[name="institutionId"]')
        .clearValue('input[name="institutionId"]')
        .setValue('input[name="institutionId"]', metadata.institutionId);
    }
    if (metadata.collaborationName) {
      this
        .verify.elementPresent('input[name="collaborationName"]')
        .clearValue('input[name="collaborationName"]')
        .setValue('input[name="collaborationName"]', metadata.collaborationName);
    }
    if (metadata.collaborationId) {
      this
        .verify.elementPresent('input[name="collaborationId"]')
        .clearValue('input[name="collaborationId"]')
        .setValue('input[name="collaborationId"]', metadata.collaborationId);
    }
    if (metadata.slug) {
      this
        .verify.elementPresent('input[name="slug"]')
        .clearValue('input[name="slug"]')
        .setValue('input[name="slug"]', metadata.slug);
    }
  }


  this
    .verify.elementPresent("#metadataUpsertPage .recordFooter")
    .verify.elementPresent("#saveQuestionnaireButton")
    .click("#saveQuestionnaireButton").pause(500);

  return this;
};

exports.command = function (questionnaire) {

  // first we test that default elements are there
  this
    .verify.elementPresent("#questionnaireUpsertPage")
    .verify.elementPresent("#questionnaireUpsertPage .recordHeader")
    .verify.elementPresent("#questionnaireUpsertCard")
    // .verify.elementPresent("#questionnaireMetaData")
    // .verify.elementPresent("#questionnaireMetaInputs")
    .verify.elementPresent('input[name="questionnaireName"]')
    .verify.elementPresent('input[name="institutionName"]')
    .verify.elementPresent('input[name="institutionId"]')
    .verify.elementPresent('input[name="collaborationName"]')
    .verify.elementPresent('input[name="collaborationId"]')
    .verify.elementPresent('input[name="slug"]');


  // if the field was specified, lets check it's set in its corresponding input
  if (questionnaire) {
    if (questionnaire.questionnaireName) {
      this.verify.attributeEquals('input[name="questionnaireName"]', "value", questionnaire.questionnaireName);
    }
    if (questionnaire.institutionName) {
      this.verify.attributeEquals('input[name="institutionName"]', "value", questionnaire.institutionName);
    }
    if (questionnaire.institutionId) {
      this.verify.attributeEquals('input[name="institutionId"]', "value", questionnaire.institutionId);
    }
    if (questionnaire.collaborationName) {
      this.verify.attributeEquals('input[name="collaborationName"]', "value", questionnaire.collaborationName);
    }
    if (questionnaire.collaborationId) {
      this.verify.attributeEquals('input[name="collaborationId"]', "value", questionnaire.collaborationId);
    }
    if (questionnaire.slug) {
      this.verify.attributeEquals('input[name="slug"]', "value", questionnaire.slug);
    }
  }


  this
    .verify.elementPresent("#questionnaireUpsertPage .recordFooter")
    .verify.elementPresent("#saveQuestionnaireButton");

  return this;
};

exports.command = function (intakeQuestionnaire) {
  this
    .verify.elementPresent('#recordUpsertPage');

  if (intakeQuestionnaire) {
    if (intakeQuestionnaire.instititionName) {
      this
        .verify.elementPresent('input[name="institutionName"]')
        .clearValue('input[name="institutionName"]')
        .setValue('input[name="institutionName"]', intakeQuestionnaire.institutionName);
    }

    if (intakeQuestionnaire.studyName) {
      this
        .verify.elementPresent('input[name="studyName"]')
        .clearValue('input[name="studyName"]')
        .setValue('input[name="studyName"]', intakeQuestionnaire.studyName);
    }

    if (intakeQuestionnaire.patientId) {
      this
        .verify.elementPresent('input[name="patientId"]')
        .clearValue('input[name="patientId"]')
        .setValue('input[name="patientId"]', intakeQuestionnaire.patientId);
    }

    if (intakeQuestionnaire.patientAge) {
      this
        .verify.elementPresent('input[name="patientAge"]')
        .clearValue('input[name="patientAge"]')
        .setValue('input[name="patientAge"]', intakeQuestionnaire.patientAge);
    }

    if (intakeQuestionnaire.patientGender) {
      this
        .verify.elementPresent('input[name="patientGender"]')
        .clearValue('input[name="patientGender"]')
        .setValue('input[name="patientGender"]', intakeQuestionnaire.patientGender);
    }

    if (intakeQuestionnaire.diagnosis) {
      this
        .verify.elementPresent('input[name="diagnosis"]')
        .clearValue('input[name="diagnosis"]')
        .setValue('input[name="diagnosis"]', intakeQuestionnaire.diagnosis);
    }
  }

  this.verify.elementPresent("#saveRecordButton");

  return this;
};

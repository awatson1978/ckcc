exports.command = function (intakeQuestionnaire) {
  this
    .verify.elementPresent('#metadataUpsertPage');

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

    if (intakeQuestionnaire.participantId) {
      this
        .verify.elementPresent('input[name="participantId"]')
        .clearValue('input[name="participantId"]')
        .setValue('input[name="participantId"]', intakeQuestionnaire.participantId);
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

    if (intakeQuestionnaire.diagnosisDescription) {
      this
        .verify.elementPresent('textarea[name="diagnosisDescription"]')
        .clearValue('textarea[name="diagnosisDescription"]')
        .setValue('textarea[name="diagnosisDescription"]', intakeQuestionnaire.diagnosisDescription);
    }
  }

  this.verify.elementPresent("#saveDataButton")
    .click("#saveDataButton").pause(500);

  return this;
};

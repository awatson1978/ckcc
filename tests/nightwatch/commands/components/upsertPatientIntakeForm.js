exports.command = function (institutionName, studyName, patientId, patientAge, patientGender, diagnosis) {
  this
    .verify.elementPresent('#recordUpsertPage');

  if (instititionName) {
    this
      .verify.elementPresent('input[name="institutionName"]')
      .clearValue('input[name="institutionName"]')
      .setValue('input[name="institutionName"]', institutionName);
  }

  if (studyName) {
    this
      .verify.elementPresent('input[name="studyName"]')
      .clearValue('input[name="studyName"]')
      .setValue('input[name="studyName"]', studyName);
  }

  if (patientId) {
    this
      .verify.elementPresent('input[name="patientId"]')
      .clearValue('input[name="patientId"]')
      .setValue('input[name="patientId"]', patientId);
  }

  if (patientAge) {
    this
      .verify.elementPresent('input[name="patientAge"]')
      .clearValue('input[name="patientAge"]')
      .setValue('input[name="patientAge"]', patientAge);
  }

  if (patientGender) {
    this
      .verify.elementPresent('input[name="patientGender"]')
      .clearValue('input[name="patientGender"]')
      .setValue('input[name="patientGender"]', patientGender);
  }

  if (diagnosis) {
    this
      .verify.elementPresent('input[name="diagnosis"]')
      .clearValue('input[name="diagnosis"]')
      .setValue('input[name="diagnosis"]', diagnosis);
  }

  this.verify.elementPresent("#saveRecordButton");

  return this;
};

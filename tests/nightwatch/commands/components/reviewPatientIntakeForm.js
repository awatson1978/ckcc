exports.command = function () {
  this
    .verify.elementPresent('#recordUpsertPage')

    .verify.elementPresent('input[name="institutionName"]')
    .verify.elementPresent('input[name="institutionId"]')
    .verify.elementPresent('input[name="participantId"]')
    .verify.elementPresent('input[name="physicianName"]')
    .verify.elementPresent('input[name="studyName"]')
    .verify.elementPresent('input[name="studyId"]')
    .verify.elementPresent('input[name="patientAge"]')
    .verify.elementPresent('input[name="patientGender"]')
    .verify.elementPresent('input[name="diagnosisCode"]')
    .verify.elementPresent('input[name="diseaseSubtype"]')
    .verify.elementPresent('input[name="lastFollowUpDate"]')

    .verify.elementPresent('textarea[name="diagnosisDescription"]')
    .verify.elementPresent('textarea[name="priorTreatmentHistory"]')
    .verify.elementPresent('textarea[name="complicatingConditions"]')
    .verify.elementPresent('textarea[name="currentStatus"]')
    .verify.elementPresent('textarea[name="familyHistory"]')
    .verify.elementPresent('textarea[name="molecularTesting"]')
    .verify.elementPresent('textarea[name="actionableFindings"]')
    .verify.elementPresent('textarea[name="genomicAnalysis"]')
    .verify.elementPresent('textarea[name="biopsySource"]')
    .verify.elementPresent('textarea[name="tumorCellFraction"]')
    .verify.elementPresent('textarea[name="otherStudies"]')

    .verify.elementPresent("#saveRecordButton");
  return this;
};

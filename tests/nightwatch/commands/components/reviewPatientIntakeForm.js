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
    .verify.elementPresent('input[name="diagnosisDescription"]')
    .verify.elementPresent('input[name="diagnosisCode"]')
    .verify.elementPresent('input[name="diseaseSubtype"]')
    .verify.elementPresent('input[name="priorTreatmentHistory"]')
    .verify.elementPresent('input[name="complicatingConditions"]')
    .verify.elementPresent('input[name="currentStatus"]')
    .verify.elementPresent('input[name="lastFollowUpDate"]')
    .verify.elementPresent('input[name="familyHistory"]')
    .verify.elementPresent('input[name="molecularTesting"]')
    .verify.elementPresent('input[name="actionableFindings"]')
    .verify.elementPresent('input[name="genomicAnalysis"]')
    .verify.elementPresent('input[name="biopsySource"]')
    .verify.elementPresent('input[name="tumorCellFraction"]')
    .verify.elementPresent('input[name="otherStudies"]')

    .verify.elementPresent("#saveRecordButton");
  return this;
};

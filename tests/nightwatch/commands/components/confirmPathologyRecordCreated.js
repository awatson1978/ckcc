exports.command = function (pathologyRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      .setValue('#recordSearchInput', 'Path')
      // .setValue('#recordSearchInput', pathologyRecord.patientId)
      // .verify.attributeEquals('#recordSearchInput', 'value', pathologyRecord.patientId)

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", pathologyRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)
    .verify.elementPresent('#recordUpsertCard input[name="Sample_ID"]')
    .verify.attributeEquals('#recordUpsertCard input[name="Sample_ID"]', "value", pathologyRecord.sampleId)
    // .verify.attributeEquals('input[name="Baseline_Sample_ID"]', "value", pathologyRecord.baselineSampleId)
    // .verify.attributeEquals('input[name="Progression_Sample_ID"]', "value", pathologyRecord.progressionSampleId)

    // .verify.attributeEquals('select[name="institution"]', "value", pathologyRecord.institution)
    // .verify.attributeEquals('select[name="Baseline_Biopsy_Site"]', "value", pathologyRecord.baselineBiopsySite)
    // .verify.attributeEquals('select[name="Progression_Biopsy_Site"]', "value", pathologyRecord.progressionBiopsySite);

  return this;
};

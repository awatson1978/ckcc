exports.command = function (rnaSequenceRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      .setValue('#recordSearchInput', 'RNA')

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", rnaSequenceRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)

    .verify.attributeEquals('input[name="Patient_ID"]', "value", rnaSequenceRecord.patientId )
    .verify.attributeEquals('input[name="QC_reports"]', "value", rnaSequenceRecord.qcReports )
    .verify.attributeEquals('input[name="RIN_score_from_UCSF"]', "value", rnaSequenceRecord.rinScoreFromUcsf )
    .verify.attributeEquals('input[name="date_completed"]', "value", rnaSequenceRecord.dateCompletedOutput )
    .verify.attributeEquals('input[name="date_received"]', "value", rnaSequenceRecord.dateReceivedOutput )
    .verify.attributeEquals('select[name="library_prep_used"]', "value", rnaSequenceRecord.libraryPrepUsed )
    .verify.attributeEquals('input[name="library_prep_notes"]', "value", rnaSequenceRecord.libraryPrepNotes )
    .verify.attributeEquals('input[name="location_of_fastq_file"]', "value", rnaSequenceRecord.locationOfFastqFile );

  return this;
};

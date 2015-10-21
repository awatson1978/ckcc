/*var pathology = {
  sampleId: "",
  tumorContent: "",
  preliminaryHistology: "",
  finalHistology: "",
  arFishIhc: "",
  psaIhc: "",
  chgaIhc: "",
  arFishPerformed: "",
  arChromosomeXRatio: "",
  ionTorrentTestPerformed: "",
  ptenIhc: "",
  ptenTestPerformed: ""
}*/

exports.command = function (pathology) {
  this
    .verify.elementPresent("form")

  .verify.elementPresent('input[name="title"]')
    .verify.elementPresent('select[name="Tumor_Content"]')
    .verify.elementPresent('select[name="Preliminary_Histology"]')
    .verify.elementPresent('select[name="Final_Histology"]')
    .verify.elementPresent('select[name="AR-FISH_IHC"]')
    .verify.elementPresent('select[name="PSA_IHC"]')
    .verify.elementPresent('select[name="CHGA_IHC"]')
    .verify.elementPresent('select[name="AR-FISH_test_performed"]')
    .verify.elementPresent('input[name="AR_chromosomeX_ratio"]')
    .verify.elementPresent('select[name="ION_Torrent_test_performed"]')
    .verify.elementPresent('select[name="PTEN_IHC"]')
    .verify.elementPresent('select[name="PTEN_test_performed"]')

    .verify.elementPresent("#saveRecordButton");

  // if (pathology) {
  //   this
  //     .clearValue('input[name="title"]')
  //     .clearValue('input[name="description"]')
  //
  //     .setValue('input[name="title"]', pathology.sampleId)
  //     .setValue('input[name="description"]', pathology.institution)
  //     .setValue('select[name="Tumor_Content"]', pathology.tumorContent)
  //     .setValue('select[name="Preliminary_Histology"]', pathology.preliminaryHistology)
  //     .setValue('select[name="Final_Histology"]', pathology.finalHistology)
  //     .setValue('select[name="AR-FISH_IHC"]', pathology.arFishIhc)
  //     .setValue('select[name="PSA_IHC"]', pathology.psaIhc)
  //     .setValue('select[name="CHGA_IHC"]', pathology.chgaIhc)
  //     .setValue('select[name="CHGA_IHC"]', pathology.chgaTestPerformed)
  //     .setValue('select[name="AR-FISH_test_performed"]', pathology.arFishPerformed)
  //     .setValue('input[name="AR_chromosomeX_ratio"]', pathology.arChromosomeXRatio)
  //     .setValue('select[name="ION_Torrent_test_performed"]', pathology.ionTorrentTestPerformed)
  //     .setValue('select[name="PTEN_IHC"]', pathology.ptenIhc)
  //     .setValue('select[name="PTEN_test_performed"]', pathology.ptenTestPerformed)
  //
  //   // .verify.elementPresent('button[type="submit"]')
  //   //   .click('button[type="submit"]').pause(500)
  //   .verify.elementPresent('#saveRecordButton')
  //     .click('#saveRecordButton').pause(500);
  // };


  return this;
};

exports.command = function (dataSample) {
  this
    .sectionBreak(".reviewSamplesList()")

    .verify.elementPresent("#samplesListPage")
    .verify.elementPresent("#samplesListPage .recordHeader")
    .verify.elementPresent("#sampleSearchInput")
    .verify.elementPresent("#samplesList")
    .verify.elementPresent("#samplesListPage .recordFooter");

  if (dataSample){
    this
      .clearValue("#sampleSearchInput")
      .setValue("#sampleSearchInput", dataSample.slug).pause(5000)
      .verify.elementPresent("#samplesList .sampleItem:nth-child(1)")
      .verify.elementPresent("#samplesList .sampleItem:nth-child(1) article")
      .verify.elementPresent("#samplesList .sampleItem:nth-child(1) article h2")
      .verify.containsText("#samplesList .sampleItem:nth-child(1) article h2", dataSample.name);      
  };

  return this;
};

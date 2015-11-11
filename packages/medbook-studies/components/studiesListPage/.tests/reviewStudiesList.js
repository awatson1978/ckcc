exports.command = function (dataStudy) {
  this
    .sectionBreak(".reviewStudiesList()")

    .verify.elementPresent("#studiesListPage")
    .verify.elementPresent("#studiesListPage .recordHeader")
    .verify.elementPresent("#studySearchInput")
    .verify.elementPresent("#studiesList")
    .verify.elementPresent("#studiesListPage .recordFooter");

  if (dataStudy){
    this
      .clearValue("#studySearchInput")
      .setValue("#studySearchInput", dataStudy.slug).pause(5000)
      .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
      .verify.elementPresent("#studiesList .studyItem:nth-child(1) article")
      .verify.elementPresent("#studiesList .studyItem:nth-child(1) article h2")
      .verify.containsText("#studiesList .studyItem:nth-child(1) article h2", dataStudy.name);      
  };

  return this;
};

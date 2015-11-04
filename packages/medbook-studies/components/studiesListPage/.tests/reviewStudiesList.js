exports.command = function (dataStudy) {
  this
    .verify.elementPresent("#studiesListPage")
    .verify.elementPresent("#studiesListPage .recordHeader")
    .verify.elementPresent("#studySearchInput")
    .verify.elementPresent("#studiesList")
    .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
    .verify.elementPresent("#studiesList .studyItem:nth-child(1) article")
    .verify.elementPresent("#studiesListPage .recordFooter");

  if (dataStudy){
    this
      .clearValue("#studySearchInput")
      .setValue("#studySearchInput", dataStudy.collaborationSearch).pause(5000)
      .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
      .verify.elementPresent("#studiesList .studyItem:nth-child(1) article")
      .verify.elementPresent("#studiesList .studyItem:nth-child(1) article .rightSubtitle")
      .verify.containsText("#studiesList .studyItem:nth-child(1) article .rightSubtitle", dataStudy.questionnaireName);
  };

  return this;
};


//
// exports.command = function (title, barcode, description, isNew) {
//   this
//     .verify.elementPresent("#studiesListPage")
//     .verify.elementPresent("#studiesListPage .recordHeader")
//     .verify.elementPresent("#studySearchInput")
//     .verify.elementPresent("#studiesList")
//     .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
//     .verify.elementPresent("#studiesList .studyItem:nth-child(1) article")
//     .verify.elementPresent("#studiesListPage .recordFooter");
//
//   if (isNew) {
//     this
//       .verify.elementPresent("#studiesList #noResultsMessage")
//       .verify.elementPresent("#studiesList .addStudyItem")
//       .verify.elementNotPresent("#studiesList .studyItem:nth-child(2)")
//       .verify.elementNotPresent("#studiesList .studyItem:nth-child(2) article");
//   }
//
//   if (title) {
//     this
//       .clearValue('#studySearchInput')
//       .setValue('#studySearchInput', title).pause(300)
//       .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
//       .verify.elementPresent("#studiesList .studyItem:nth-child(1) article")
//       .verify.elementPresent("#studiesList .studyItem:nth-child(1) .barcode")
//       .verify.elementPresent("#studiesList .studyItem:nth-child(1) .titleText")
//       .verify.elementPresent("#studiesList .studyItem:nth-child(1) .descriptionText")
//       .verify.containsText("#studiesList .studyItem:nth-child(1) .titleText", title);
//
//     if (description) {
//       this.verify.containsText("#studiesList .studyItem:nth-child(1) .descriptionText", description);
//     }
//     if (barcode) {
//       this.verify.containsText("#studiesList .studyItem:nth-child(1) .barcode", barcode);
//     }
//   }
//
//   return this;
// };

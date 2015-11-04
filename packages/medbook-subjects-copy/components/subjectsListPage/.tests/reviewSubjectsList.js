exports.command = function (dataSubject) {
  this
    .verify.elementPresent("#subjectsListPage")
    .verify.elementPresent("#subjectsListPage .recordHeader")
    .verify.elementPresent("#subjectSearchInput")
    .verify.elementPresent("#subjectsList")
    .verify.elementPresent("#subjectsList .subjectItem:nth-child(1)")
    .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) article")
    .verify.elementPresent("#subjectsListPage .recordFooter");

  if (dataSubject){
    this
      .clearValue("#subjectSearchInput")
      .setValue("#subjectSearchInput", dataSubject.collaborationSearch).pause(5000)
      .verify.elementPresent("#subjectsList .subjectItem:nth-child(1)")
      .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) article")
      .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) article .rightSubtitle")
      .verify.containsText("#subjectsList .subjectItem:nth-child(1) article .rightSubtitle", dataSubject.questionnaireName);
  };

  return this;
};


//
// exports.command = function (title, barcode, description, isNew) {
//   this
//     .verify.elementPresent("#subjectsListPage")
//     .verify.elementPresent("#subjectsListPage .recordHeader")
//     .verify.elementPresent("#subjectSearchInput")
//     .verify.elementPresent("#subjectsList")
//     .verify.elementPresent("#subjectsList .subjectItem:nth-child(1)")
//     .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) article")
//     .verify.elementPresent("#subjectsListPage .recordFooter");
//
//   if (isNew) {
//     this
//       .verify.elementPresent("#subjectsList #noResultsMessage")
//       .verify.elementPresent("#subjectsList .addSubjectItem")
//       .verify.elementNotPresent("#subjectsList .subjectItem:nth-child(2)")
//       .verify.elementNotPresent("#subjectsList .subjectItem:nth-child(2) article");
//   }
//
//   if (title) {
//     this
//       .clearValue('#subjectSearchInput')
//       .setValue('#subjectSearchInput', title).pause(300)
//       .verify.elementPresent("#subjectsList .subjectItem:nth-child(1)")
//       .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) article")
//       .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) .barcode")
//       .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) .titleText")
//       .verify.elementPresent("#subjectsList .subjectItem:nth-child(1) .descriptionText")
//       .verify.containsText("#subjectsList .subjectItem:nth-child(1) .titleText", title);
//
//     if (description) {
//       this.verify.containsText("#subjectsList .subjectItem:nth-child(1) .descriptionText", description);
//     }
//     if (barcode) {
//       this.verify.containsText("#subjectsList .subjectItem:nth-child(1) .barcode", barcode);
//     }
//   }
//
//   return this;
// };

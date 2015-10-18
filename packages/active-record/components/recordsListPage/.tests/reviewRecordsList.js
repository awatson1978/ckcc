exports.command = function (dataRecord) {
  this
    .verify.elementPresent("#recordsListPage")
    .verify.elementPresent("#recordsListPage .recordHeader")
    .verify.elementPresent("#recordSearchInput")
    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) article")
    .verify.elementPresent("#recordsListPage .recordFooter");

  if (dataRecord){
    this
      .clearValue("#recordSearchInput")
      .setValue("#recordSearchInput", dataRecord.collaborationSearch).pause(5000)
      .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
      .verify.elementPresent("#recordsList .recordItem:nth-child(1) article")
      .verify.elementPresent("#recordsList .recordItem:nth-child(1) article .rightSubtitle")
      .verify.containsText("#recordsList .recordItem:nth-child(1) article .rightSubtitle", dataRecord.questionnaireName);
  };

  return this;
};


//
// exports.command = function (title, barcode, description, isNew) {
//   this
//     .verify.elementPresent("#recordsListPage")
//     .verify.elementPresent("#recordsListPage .recordHeader")
//     .verify.elementPresent("#recordSearchInput")
//     .verify.elementPresent("#recordsList")
//     .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
//     .verify.elementPresent("#recordsList .recordItem:nth-child(1) article")
//     .verify.elementPresent("#recordsListPage .recordFooter");
//
//   if (isNew) {
//     this
//       .verify.elementPresent("#recordsList #noResultsMessage")
//       .verify.elementPresent("#recordsList .addFooItem")
//       .verify.elementNotPresent("#recordsList .recordItem:nth-child(2)")
//       .verify.elementNotPresent("#recordsList .recordItem:nth-child(2) article");
//   }
//
//   if (title) {
//     this
//       .clearValue('#recordSearchInput')
//       .setValue('#recordSearchInput', title).pause(300)
//       .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
//       .verify.elementPresent("#recordsList .recordItem:nth-child(1) article")
//       .verify.elementPresent("#recordsList .recordItem:nth-child(1) .barcode")
//       .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")
//       .verify.elementPresent("#recordsList .recordItem:nth-child(1) .descriptionText")
//       .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", title);
//
//     if (description) {
//       this.verify.containsText("#recordsList .recordItem:nth-child(1) .descriptionText", description);
//     }
//     if (barcode) {
//       this.verify.containsText("#recordsList .recordItem:nth-child(1) .barcode", barcode);
//     }
//   }
//
//   return this;
// };

exports.command = function (title, barcode, description, isNew) {
  this
    .verify.elementPresent("#recordsListPage")
    .verify.elementPresent("#recordsListPage .recordHeader")
    .verify.elementPresent("#recordSearchInput")
    .verify.elementPresent("#unorderedList")
    .verify.elementPresent("#unorderedList li:nth-child(1)")
    .verify.elementPresent("#unorderedList li:nth-child(1) article")
    .verify.elementPresent("#recordsListPage .recordFooter")

  if (isNew) {
    this
      .verify.elementPresent("#unorderedList #noResultsMessage")
      .verify.elementPresent("#unorderedList .addRecordItem")
      // .verify.elementNotPresent("#unorderedList li:nth-child(2)")
      // .verify.elementNotPresent("#unorderedList li:nth-child(2) article");
  }

  if (title) {
    this
      .clearValue('#recordSearchInput')
      .setValue('#recordSearchInput', title).pause(300)
      .verify.elementPresent("#unorderedList .recordItem:nth-child(1)")
      .verify.elementPresent("#unorderedList .recordItem:nth-child(1) article")
      .verify.elementPresent("#unorderedList .recordItem:nth-child(1) article .barcode")
      .verify.elementPresent("#unorderedList .recordItem:nth-child(1) article .titleText")
      .verify.elementPresent("#unorderedList .recordItem:nth-child(1) article .descriptionText")
      .verify.containsText("#unorderedList .recordItem:nth-child(1) article .titleText", title);

    if (description) {
      this.verify.containsText("#unorderedList .recordItem:nth-child(1) article .descriptionText", description);
    }
    if (barcode) {
      this.verify.containsText("#unorderedList .recordItem:nth-child(1) article .barcode", barcode)
    }
  }

  return this;
};

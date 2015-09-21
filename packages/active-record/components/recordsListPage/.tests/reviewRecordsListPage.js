exports.command = function(title, barcode, description, isNew) {
  this
    .verify.elementPresent("#recordsListPage")
    .verify.elementPresent("#recordsListPage .recordHeader")
    .verify.elementPresent("#recordSearchInput")
    .verify.elementPresent("#unorderedList")
    .verify.elementPresent("#unorderedList li:nth-child(1)")
    .verify.elementPresent("#unorderedList li:nth-child(1) article")
    .verify.elementPresent("#recordsListPage .recordFooter")

  if(isNew){
    this
      .verify.elementPresent("#unorderedList #noResultsMessage")
      .verify.elementPresent("#unorderedList .addFooItem")
      .verify.elementNotPresent("#unorderedList li:nth-child(2)")
      .verify.elementNotPresent("#unorderedList li:nth-child(2) article")
  }

  if(title){
    this
      .clearValue('#recordSearchInput')
      .setValue('#recordSearchInput', title).pause(300)
      .verify.elementPresent("#unorderedList li:nth-child(1)")
      .verify.elementPresent("#unorderedList li:nth-child(1) article")
      .verify.elementPresent("#unorderedList li:nth-child(1) .barcode")
      .verify.elementPresent("#unorderedList li:nth-child(1) .titleText")
      .verify.elementPresent("#unorderedList li:nth-child(1) .descriptionText")
      .verify.containsText("#unorderedList li:nth-child(1) .titleText", title)

      if(description){
        this.verify.containsText("#unorderedList li:nth-child(1) .descriptionText", description)
      }
      if(barcode){
        this.verify.containsText("#unorderedList li:nth-child(1) .barcode", barcode)
      }
  }

  return this;
};

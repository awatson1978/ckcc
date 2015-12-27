exports.command = function () {
  this
    .verify.elementPresent("#recordPreviewPage")
    .verify.elementPresent("#recordPreviewCard")
    .verify.elementPresent("#recordTitleText")
    .verify.elementPresent("#notesText");
  return this;
};

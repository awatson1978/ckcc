exports.command = function() {
  this
    .verify.elementPresent("#studiesTablePage")
    .verify.elementPresent("#studySearchInput")
    .verify.elementPresent("#studiesTable")
  return this;
};

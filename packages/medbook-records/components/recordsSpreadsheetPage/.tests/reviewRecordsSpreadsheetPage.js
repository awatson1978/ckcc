exports.command = function() {
  this
    .verify.elementPresent("#recordsTablePage")
    .verify.elementPresent("#recordSearchInput")
    .verify.elementPresent("#recordsTable")
  return this;
};

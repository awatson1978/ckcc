exports.command = function() {
  this
    .verify.elementPresent("#subjectsTablePage")
    .verify.elementPresent("#subjectSearchInput")
    .verify.elementPresent("#subjectsTable")
  return this;
};

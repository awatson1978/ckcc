exports.command = function() {
  this
    .verify.elementPresent("#studyImageGridPage")
    .verify.elementPresent("#studySearchInput")
    .verify.elementPresent("#studyImageGrid")
    .verify.elementPresent("#addNewStudy")
  return this;
};

exports.command = function() {
  this
    .verify.elementPresent("#samplesTablePage")
    .verify.elementPresent("#sampleSearchInput")
    .verify.elementPresent("#samplesTable")
  return this;
};

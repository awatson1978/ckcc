exports.command = function() {
  this
    .verify.elementPresent("#patientsTablePage")
    .verify.elementPresent("#patientSearchInput")
    .verify.elementPresent("#patientsTable")
  return this;
};

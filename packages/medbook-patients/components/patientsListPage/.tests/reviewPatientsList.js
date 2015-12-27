exports.command = function (dataPatient) {
  this
    .sectionBreak(".reviewPatientsList()")

    .verify.elementPresent("#patientsListPage")
    .verify.elementPresent("#patientsListPage .recordHeader")
    .verify.elementPresent("#patientSearchInput")
    .verify.elementPresent("#patientsList")
    .verify.elementPresent("#patientsListPage .recordFooter");

  if (dataPatient){
    this
      .clearValue("#patientSearchInput")
      .setValue("#patientSearchInput", dataPatient.slug).pause(5000)
      .verify.elementPresent("#patientsList .patientItem:nth-child(1)")
      .verify.elementPresent("#patientsList .patientItem:nth-child(1) article")
      .verify.elementPresent("#patientsList .patientItem:nth-child(1) article h2")
      .verify.containsText("#patientsList .patientItem:nth-child(1) article h2", dataPatient.name);      
  };

  return this;
};

exports.command = function (patient) {
  this.sectionBreak(".reviewUpsertPatient()");

  // first we test that default elements are there
  this
    .verify.elementPresent("#patientUpsertPage")
    .verify.elementPresent("#patientUpsertPage .recordHeader")
    .verify.elementPresent("#patientUpsertCard")


  // if the field was specified, lets check it's set in its corresponding input

  if (patient) {
    var self = this;
    Object.keys(patient).forEach(function (key){
      if (typeof patient[key] === "string") {
        self.verify.attributeEquals('input[name="' + key + '"]', "value", patient[key]);
      }
      if (typeof patient[key] === "boolean") {
        // self.verify.attributeEquals('input[name="' + key + '"]', "value", patient[key]);
      }
    });
  }

  this
    .verify.elementPresent("#patientUpsertPage .recordFooter")
    .verify.elementPresent("#savePatientButton");

  return this;
};

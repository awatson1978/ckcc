exports.command = function (patient, action) {
  var self = this;
  this.sectionBreak(".upsertPatient()");

  if (action === "update") {
    this
      .verify.elementPresent("#patientUpsertPage .barcode")
      .click("#patientUpsertPage .barcode").pause(300);
  }

  if (patient) {
    // this is a rather clever way to iterate through all the fields
    // and set the necessary inputs
    Object.keys(patient).forEach(function (key){
      // but it only works on fields that contain plain text strings

      if (typeof patient[key] === "string") {
        self
          .verify.elementPresent('input[name="' + key + '"]')
          .clearValue('input[name="' + key + '"]')
          .setValue('input[name="' + key + '"]', patient[key]);
      }
    });
  }


  this
    // .verify.elementPresent("#savePatientButton")
    // .moveToElement('#savePatientButton', 10, 10)
    // .verify.visible('#savePatientButton')
    .verify.elementPresent("#savePatientLink")
    .click("#savePatientLink").pause(1000);

  return this;
};

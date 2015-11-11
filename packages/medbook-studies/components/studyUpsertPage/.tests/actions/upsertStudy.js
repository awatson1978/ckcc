exports.command = function (study, action) {
  var self = this;
  this.sectionBreak(".upsertStudy()");

  if (action === "update") {
    this
      .verify.elementPresent("#studyUpsertPage .barcode")
      .click("#studyUpsertPage .barcode").pause(300);
  }

  if (study) {
    // this is a rather clever way to iterate through all the fields
    // and set the necessary inputs
    Object.keys(study).forEach(function (key){
      // but it only works on fields that contain plain text strings

      if (typeof study[key] === "string") {
        self
          .verify.elementPresent('input[name="' + key + '"]')
          .clearValue('input[name="' + key + '"]')
          .setValue('input[name="' + key + '"]', study[key]);
      }
    });
  }


  this
    // .verify.elementPresent("#saveStudyButton")
    // .moveToElement('#saveStudyButton', 10, 10)
    // .verify.visible('#saveStudyButton')
    .verify.elementPresent("#saveStudyLink")
    .click("#saveStudyLink").pause(1000);

  return this;
};

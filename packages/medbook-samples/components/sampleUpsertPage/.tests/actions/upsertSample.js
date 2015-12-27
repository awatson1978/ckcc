exports.command = function (sample, action) {
  var self = this;
  this.sectionBreak(".upsertSample()");

  if (action === "update") {
    this
      .verify.elementPresent("#sampleUpsertPage .barcode")
      .click("#sampleUpsertPage .barcode").pause(300);
  }

  if (sample) {
    // this is a rather clever way to iterate through all the fields
    // and set the necessary inputs
    Object.keys(sample).forEach(function (key){
      // but it only works on fields that contain plain text strings

      if (typeof sample[key] === "string") {
        self
          .verify.elementPresent('input[name="' + key + '"]')
          .clearValue('input[name="' + key + '"]')
          .setValue('input[name="' + key + '"]', sample[key]);
      }
    });
  }


  this
    // .verify.elementPresent("#saveSampleButton")
    // .moveToElement('#saveSampleButton', 10, 10)
    // .verify.visible('#saveSampleButton')
    .verify.elementPresent("#saveSampleLink")
    .click("#saveSampleLink").pause(1000);

  return this;
};

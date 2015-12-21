exports.command = function (sample) {
  this.sectionBreak(".reviewUpsertSample()");

  // first we test that default elements are there
  this
    .verify.elementPresent("#sampleUpsertPage")
    .verify.elementPresent("#sampleUpsertPage .recordHeader")
    .verify.elementPresent("#sampleUpsertCard")


  // if the field was specified, lets check it's set in its corresponding input

  if (sample) {
    var self = this;
    Object.keys(sample).forEach(function (key){
      if (typeof sample[key] === "string") {
        self.verify.attributeEquals('input[name="' + key + '"]', "value", sample[key]);
      }
      if (typeof sample[key] === "boolean") {
        // self.verify.attributeEquals('input[name="' + key + '"]', "value", sample[key]);
      }
    });
  }

  this
    .verify.elementPresent("#sampleUpsertPage .recordFooter")
    .verify.elementPresent("#saveSampleButton");

  return this;
};

exports.command = function (study) {
  this.sectionBreak(".reviewUpsertStudy()");

  // first we test that default elements are there
  this
    .verify.elementPresent("#studyUpsertPage")
    .verify.elementPresent("#studyUpsertPage .recordHeader")
    .verify.elementPresent("#studyUpsertCard")


  // if the field was specified, lets check it's set in its corresponding input

  if (study) {
    var self = this;
    Object.keys(study).forEach(function (key){
      if (typeof study[key] === "string") {
        self.verify.attributeEquals('input[name="' + key + '"]', "value", study[key]);
      }
      if (typeof study[key] === "boolean") {
        // self.verify.attributeEquals('input[name="' + key + '"]', "value", study[key]);
      }
    });
  }

  this
    .verify.elementPresent("#studyUpsertPage .recordFooter")
    .verify.elementPresent("#saveStudyButton");

  return this;
};

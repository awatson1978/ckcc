exports.command = function (study, title, url, imageUrl, description) {

  // first we test that default elements are there
  this
    .verify.elementPresent("#studyUpsertPage")
    .verify.elementPresent("#studyUpsertPage .pageHeader")
    .verify.elementPresent("#studyUpsertCard")
    .verify.elementPresent("#studyMetaData")
    .verify.elementPresent("#studyMetaInputs")
    .verify.elementPresent('input[name="title"]')
    .verify.elementPresent('input[name="url"]')
    .verify.elementPresent('input[name="imageUrl"]')
    .verify.elementPresent("#studyImage")
    .verify.elementPresent('input[name="description"]');


  // then we check whether we received an entire study to parse
  // if so, set the fields we're goint to test for accordingly
  if (study) {
    if (study.title) {
      title = study.title;
    }
    if (study.url) {
      url = study.url;
    }
    if (study.imageUrl) {
      imageUrl = study.imageUrl;
    }
    if (study.description) {
      description = study.description;
    }
  }

  // if the field was specified, lets check it's set in its corresponding input
  if (title) {
    this.verify.attributeEquals('input[name="title"]', "value", title);
  }
  if (url) {
    this.verify.attributeEquals('input[name="url"]', "value", url);
  }
  if (imageUrl) {
    this.verify.attributeEquals('input[name="imageUrl"]', "value", imageUrl);
  }
  if (description) {
    this.verify.attributeEquals('input[name="description"]', "value", description);
  }

  this
    .verify.elementPresent("#studyUpsertPage .pageFooter")
    .verify.elementPresent("#saveStudyButton");

  return this;
};

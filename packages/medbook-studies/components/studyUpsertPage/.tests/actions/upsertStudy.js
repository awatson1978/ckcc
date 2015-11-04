exports.command = function (action, study, title, url, imageUrl, description) {

  if (action === "update") {
    this
      .verify.elementPresent("#studyUpsertPage .barcode")
      .click("#studyUpsertPage .barcode").pause(300);
  }


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

  if (title) {
    this
      .clearValue('input[name="title"]')
      .setValue('input[name="title"]', title);
  }
  if (url) {
    this
      .clearValue('input[name="url"]')
      .setValue('input[name="url"]', url);
  }
  if (imageUrl) {
    this
      .clearValue('input[name="imageUrl"]')
      .setValue('input[name="imageUrl"]', imageUrl);
  }
  if (description) {
    this
      .clearValue('input[name="description"]')
      .setValue('input[name="description"]', description);
  }


  this
    .verify.elementPresent("#saveStudyButton")
    .moveToElement('#saveStudyButton', 10, 10)
    .verify.visible('#saveStudyButton')

  .click("#saveStudyButton").pause(300);

  return this;
};

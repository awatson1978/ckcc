exports.command = function (action, subject, title, url, imageUrl, description) {

  if (action === "update") {
    this
      .verify.elementPresent("#subjectUpsertPage .barcode")
      .click("#subjectUpsertPage .barcode").pause(300);
  }


  // then we check whether we received an entire subject to parse
  // if so, set the fields we're goint to test for accordingly
  if (subject) {
    if (subject.title) {
      title = subject.title;
    }
    if (subject.url) {
      url = subject.url;
    }
    if (subject.imageUrl) {
      imageUrl = subject.imageUrl;
    }
    if (subject.description) {
      description = subject.description;
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
    .verify.elementPresent("#saveSubjectButton")
    .moveToElement('#saveSubjectButton', 10, 10)
    .verify.visible('#saveSubjectButton')

  .click("#saveSubjectButton").pause(300);

  return this;
};

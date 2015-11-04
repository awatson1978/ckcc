exports.command = function (subject, title, url, imageUrl, description) {

  // first we test that default elements are there
  this
    .verify.elementPresent("#subjectUpsertPage")
    .verify.elementPresent("#subjectUpsertPage .pageHeader")
    .verify.elementPresent("#subjectUpsertCard")
    .verify.elementPresent("#subjectMetaData")
    .verify.elementPresent("#subjectMetaInputs")
    .verify.elementPresent('input[name="title"]')
    .verify.elementPresent('input[name="url"]')
    .verify.elementPresent('input[name="imageUrl"]')
    .verify.elementPresent("#subjectImage")
    .verify.elementPresent('input[name="description"]');


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
    .verify.elementPresent("#subjectUpsertPage .pageFooter")
    .verify.elementPresent("#saveSubjectButton");

  return this;
};

exports.command = function () {
  this
    .sectionBreak(".reviewFormDesigner()")

    .verify.elementPresent("#builderPage")
      .verify.elementPresent("#sortableListPanel")
      .verify.elementPresent("#formTitleInput")
      .verify.elementPresent("#questionnaireDesigner")

    .verify.elementPresent("#formBuilderPanel")
      .verify.elementPresent("#addNewFieldPanel")
      .verify.elementPresent("#addNewFieldPanel .list-group")
        .verify.elementPresent("#textInputBlock")
        .verify.elementPresent("#textareaInputBlock")
        .verify.elementPresent("#numericInputBlock");

  return this;
};

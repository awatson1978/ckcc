exports.command = function (newQuestionnaire) {
  var self = this;

  this
    .sectionBreak(".buildForm()")

    .verify.elementPresent("#builderPage")
    .verify.elementPresent("#formBuilderPanel")
    .verify.elementPresent("#questionnaireDesigner");



        var count = 0;
        if (newQuestionnaire.inputs) {
          Object.keys(newQuestionnaire.inputs).forEach(function (key){
            count = count + 1;
            console.log('key', key);
            self
              .verify.elementPresent("#addNewFieldTab")
              .click("#addNewFieldTab").pause(500)

              .verify.elementPresent("#textInputBlock")
              .click("#textInputBlock").pause(500)

              .click('#scrollFormLink').pause(500)

              .verify.elementPresent("#questionnaireDesigner .item:nth-child(" + count + ")")
              .verify.elementPresent("#questionnaireDesigner .item:nth-child(" + count + ") .textInputBlock")

              .click("#questionnaireDesigner .item:nth-child(" + count + ")").pause(500)
              .verify.elementPresent("#editFieldPanel")

              .verify.elementPresent("#keyNameInput")
                .clearValue("#keyNameInput")
                .setValue("#keyNameInput", key)

              .verify.elementPresent("#questionInput")
                .clearValue("#questionInput")
                .setValue("#questionInput", newQuestionnaire.inputs[key])

              .verify.elementPresent("#saveFormBlockParamsButton")
              .click("#saveFormBlockParamsButton").pause(500);
          });
        };

        if (newQuestionnaire.textareas) {
          Object.keys(newQuestionnaire.textareas).forEach(function(key){
            count = count + 1;
            console.log('key', key);
            self
              .verify.elementPresent("#addNewFieldTab")
              .click("#addNewFieldTab").pause(500)

              .verify.elementPresent("#textareaInputBlock")
              .click("#textareaInputBlock").pause(500)

              .click('#scrollFormLink').pause(500)

              .verify.elementPresent("#questionnaireDesigner .item:nth-child(" + count + ")")
              .verify.elementPresent("#questionnaireDesigner .item:nth-child(" + count + ") .textareaBlock")

              .click("#questionnaireDesigner .item:nth-child(" + count + ")").pause(500)
              .verify.elementPresent("#editFieldPanel")

              .verify.elementPresent("#keyNameInput")
                .clearValue("#keyNameInput")
                .setValue("#keyNameInput", key)

              .verify.elementPresent("#questionInput")
                .clearValue("#questionInput")
                .setValue("#questionInput", newQuestionnaire.textareas[key])

              .verify.elementPresent("#saveFormBlockParamsButton")
              .click("#saveFormBlockParamsButton").pause(500);
          });
        };


      this
        .verify.elementPresent("#formTitleInput")
          .clearValue('#formTitleInput')
          .setValue('#formTitleInput', newQuestionnaire.questionnaireName)

        .verify.elementPresent("#publishFormLink")
        .click("#publishFormLink").pause(500);

  return this;
};

FormBuilder = {
  add: function (blockType, question) {
    Session.set('selectedBlockType', blockType);
    Session.set('selectedFormElementId', blockType);
    Session.set('selectedBlockItem', FormBuilder.addQuestion(question));
    Session.set('selectedBuilderTab', 'editFieldTab');
  },
  addQuestion: function (question) {
    Session.set('selectedBuilderTab', 'addNewFieldTab');

    var formElementRecord;

    if (Session.get('selectedFormElementId') === "textInputBlock") {
      formElementRecord = {
        formElementId: "textInputBlock",
        elementType: "text",
        keyName: "textInputBlock" + Items.find().count(),
        rank: Items.find().count(),
        schemaTemplate: {
          type: "String",
          optional: true,
          label: "Q: Lorem textum...",
          autoforms: {
            afFieldInput: {
              type: "text",
              placeholder: "Lorem ipsum..."
            }
          }
        }
      };

    };
    if (Session.get('selectedFormElementId') === "textareaInputBlock") {
      formElementRecord = {
        formElementId: "textareaInputBlock",
        elementType: "textarea",
        keyName: "textareaInputBlock" + Items.find().count(),
        rank: Items.find().count(),
        schemaTemplate: {
          type: "String",
          optional: true,
          label: "Q: Lorem textum...",
          autoforms: {
            afFieldInput: {
              type: "textarea",
              rows: 5,
              placeholder: "Lorem ipsum..."
            }
          }
        }
      };
    };

    if (Session.get('selectedFormElementId') === "sectionTitleBlock") {
      formElementRecord = {
        formElementId: "sectionTitleBlock",
        keyName: "sectionTitleBlock" + Items.find().count(),
        rank: Items.find().count(),
        schemaTemplate: {
          type: "String",
          optional: true,
          label: "Section ipsum...",
          defaultValue: "",
          autoforms: {
            afFieldInput: {
              type: "textarea",
              rows: 5,
              placeholder: "Lorem ipsum..."
            }
          }
        }
      };
    };

    // if (Session.get('selectedFormElementId') === "spacerBlock") {
    //   formElementRecord.autoforms = {
    //     elementType: "spacer",
    //     afFieldInput: {
    //       type: "spacer"
    //     }
    //   };
    // };

    // if (Session.get('selectedFormElementId') === "paragraphBlock") {
    //   formElementRecord.label = "Lorem ipsum dolar sit amet...";
    //   formElementRecord.autoforms = {
    //     elementType: "paragraph",
    //     afFieldInput: {
    //       type: "paragraph",
    //       value: "Lorem ipsum dolar sit amet..."
    //     }
    //   };
    // };
    // if (Session.get('selectedFormElementId') === "colorInputBlock") {
    //   inputType = "color";
    //   elementType = "color";
    //   defaultValue = "";
    // };
    // if (Session.get('selectedFormElementId') === "numericInputBlock") {
    //   label = "Q: Lorem numberum...";
    //   inputType = "number";
    //   elementType = "input";
    //   defaultValue = "";
    // };

    // if (Session.get('selectedFormElementId') === "yesNoInputBlock") {
    //   elementType = "yesno";
    //   inputType = "yesno";
    //   label = "Lorum yesno...";
    //   defaultValue = "";
    // };
    // if (Session.get('selectedFormElementId') === "radioInputBlock") {
    //   elementType = "radio";
    //   inputType = "radio";
    //   label = "Lorum datum...";
    //   defaultValue = "";
    //   defaultValue1 = defaultValue1;
    //   defaultValue2 = defaultValue2;
    //   defaultValue3 = defaultValue3;
    //   defaultValue4 = defaultValue4;
    //   defaultValue5 = defaultValue5;
    // };
    // if (Session.get('selectedFormElementId') === "dateTimeInputBlock") {
    //   label = "Lorum datum...";
    //   inputType = "datetime";
    //   elementType = "datetime";
    //   defaultValue = "";
    // };
    // if (Session.get('selectedFormElementId') === "timeInputBlock") {
    //   label = "Lorum datum...";
    //   inputType = "time";
    //   elementType = "time";
    //   defaultValue = "";
    // };
    // if (Session.get('selectedFormElementId') === "multiSelectInputBlock") {
    //   label = "Lorum datum...";
    //   inputType = "text";
    //   elementType = "multiselect";
    //   defaultValue = "";
    // };

    // if (seed) {
    //   var defaultValue1 = seed.defaultValue1;
    //   var defaultValue2 = seed.defaultValue2;
    //   var defaultValue3 = seed.defaultValue3;
    //   var defaultValue4 = seed.defaultValue4;
    //   var defaultValue5 = seed.defaultValue5;
    // } else {
    //   var defaultValue1 = "1";
    //   var defaultValue2 = "2";
    //   var defaultValue3 = "3";
    //   var defaultValue4 = "4";
    //   var defaultValue5 = "4";
    // }
    // if (Session.get('selectedFormElementId') === "radioInputBlock") {
    //   formElementRecord.defaultValue1 = defaultValue1;
    //   formElementRecord.defaultValue2 = defaultValue2;
    //   formElementRecord.defaultValue3 = defaultValue3;
    //   formElementRecord.defaultValue4 = defaultValue4;
    //   formElementRecord.defaultValue5 = defaultValue5;
    // }
    // console.log('formElementRecord', formElementRecord);

    // did we get a question object?
    // if so, override the defualt values
    if (question) {
      if (question.key) {
        formElementRecord.keyName = question.key;
      }
      if (question.label) {
        formElementRecord.partialSchema.label = question.label;
      }
      if (question.placeholder) {
        formElementRecord.partialSchema.autoforms.afFieldInput.placeholder = question.placeholder;
      }
    }

    console.log('formElementRecord', formElementRecord);
    return Items.insert(formElementRecord);
    // var schema = Session.get('formDesignerSchema');
    // schema["foo"] = formElementRecord;
    // Session.set('formDesignerSchema', schema);
  },
  save: function () {
    // var blockItems = Items.find({}, {
    //   sort: {
    //     rank: 1
    //   }
    // }).map(function (record){
    //   delete record._id;
    //   if (record.type === "String") {
    //     record.type = String;
    //   }
    //   return record;
    // });

    var blockItems = Items.find({}, {
      sort: {
        rank: 1
      }
    }).fetch();

    blockItems.forEach(function (formElement){
      console.log('formElement', formElement);
      formElement.type = String;
      delete formElement._id;
    });

    var blockItemFoo = {
      type: String,
      optional: true,
      defaultValue: "",
      label: "Owner"
    };
    // console.log("blockItems", blockItems[0]);
    console.log("blockItems", blockItemFoo);

    var fooSchema = new SimpleSchema({"fooSchema": blockItemFoo});
    console.log("fooSchema: ", fooSchema);

    var newQuestionnaire = {
      questionnaireName: $('#formTitleInput').val(),
      starred: false,
      active: true,
      ownerId: Meteor.userId(),
      owner: Meteor.user().defaultEmail(),
      collaborationId: $('input[name="collaborationId"]').val(),
      collaborationName: $('input[name="collaborationName"]').val(),
      slug: $('input[name="slug"]').val(),
      schema: fooSchema,
      numBlocks: blockItems.length
    };
    console.log('newQuestionnaire', newQuestionnaire);

    if (Session.get('currentForm')) {
      Questionnaires.update({
        _id: Session.get('currentForm')
      }, {
        $set: {
          questionnaireName: newQuestionnaire.formName,
          starred: newQuestionnaire.starred,
          active: newQuestionnaire.active,
          ownerId: newQuestionnaire.owner,
          owner: newQuestionnaire.ownerUsername,
          collaborationId: newQuestionnaire.collaborationId,
          collaborationName: newQuestionnaire.collaborationName,
          slug: newQuestionnaire.slug,
          schema: fooSchema,
          // schema: new SimpleSchema(Items.find({}, {
          //   sort: {
          //     rank: 1
          //   }
          // }).fetch()),
          numBlocks: newQuestionnaire.numBlocks
        }
      }, {validate: false}, function (error, result) {
        if (error) {
          console.log(error);
          Session.set('errorMessage', error);
        }
      });
    } else {
      Questionnaires.insert(newQuestionnaire, function (error, result) {
        if (error) {
          Session.set('errorMessage', error);
          HipaaLogger.logEvent("error", Meteor.userId(), "Questionnaires", null, error,
            null, null);
        }
        if (result) {
          HipaaLogger.logEvent("create", Meteor.userId(), "Questionnaires", result, null,
            null, null);
        }
      });
    }
    Router.go('/list/questionnaires');
  }
};

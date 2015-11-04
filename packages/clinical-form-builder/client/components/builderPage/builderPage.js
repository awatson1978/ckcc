

Meteor.startup(function () {
  Session.setDefault('selectedBlockItem', false);
});



Router.route('/builder/:questionnaireId', {
  name: 'builderPageWithId',
  template: 'builderPage',
  data: function () {
    return Questionnaires.findOne({
      _id: this.params.questionnaireId
    });
  },
  onAfterAction: function () {
    //WestPanel.show();
    Session.set('activeQuestionnaireId', this.params.questionnaireId);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'builderActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/builder', {
  name: 'builderPage',
  template: 'builderPage',
  data: function () {
    return {};
  },
  onAfterAction: function () {
    WestPanel.show();
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'builderActionButtons': {
      to: 'footerActionElements'
    }
  }
});



Template.builderPage.events({
  'click .close': function () {
    Items.remove(this._id);
  },
  'click .item': function () {
    //Session.set('errorMessage', this.name);
    Session.set('selectedQuestionField', this.name);

    Session.set('selectedBuilderTab', 'editFieldTab');
  },
  'click .yes-button': function () {
    Session.set('selectedBlockItem', this._id);
    Session.set('errorMessage', 'Form not activated yet.');
    // alert('yes: ' + this._id);
  },
  'click .no-button': function () {
    Session.set('selectedBlockItem', this._id);
    // alert('no: ' + this._id);
    // alert('Form not activated yet.');
    Session.set('errorMessage', 'Form not activated yet.');
  }

});

Template.builderPage.onRendered(function (){
  $('#newFormElementsList').sortable({ // uses the 'sortable' interaction from jquery ui
    stop: function (event, ui) { // fired when an item is dropped
      var el = ui.item.get(0);
      var before = ui.item.prev().get(0);
      var after = ui.item.next().get(0);

      var newRank;
      if (!before) { // moving to the top of the list
        newRank = SimpleRationalRanks.beforeFirst(UI.getElementData(after).rank);

      } else if (!after) { // moving to the bottom of the list
        newRank = SimpleRationalRanks.afterLast(UI.getElementData(before).rank);

      } else {
        newRank = SimpleRationalRanks.between(
          UI.getElementData(before).rank,
          UI.getElementData(after).rank);
      }
      Items.update(UI.getElementData(el)._id, {
        $set: {
          rank: newRank
        }
      });
    },
    start: function (event, ui){
      console.log('sortable.start()');
    }
  });

  $('#sortableDropZone').droppable({
    accept: ".dragDropBlock",
    activeClass: 'visible',
    drop: function () {
      FormBuilder.addQuestion();
      setTimeout(function () {
        Session.clear('selectedFormElementId');
      }, 100);
    },
    drag: function () {
      console.log('sortable.drag()');
    }
  });
});


Template.builderPage._originalSchema = function (){
  return {
    fullName: {
      type: String,
      optional: true,
      defaultValue: "Full Name...",
      label: "Full Name",
      autoform: {
        afFieldInput:{
          type: "text",
          placeholder: "Full Name...",
          class: "question"
        }
      }
    },
    medicalHistory: {
      type: String,
      optional: true,
      defaultValue: "Foo...",
      label: "Please list your medical history...",
      autoform: {
        afFieldInput:{
          type: "textarea",
          rows: 10,
          placeholder: "Bar...",
          class: "question"
        }
      }
    }
  };
};

Template.builderPage._schema = function (){
  return Session.get('formDesignerSchema');
};

Session.setDefault('formDesignerSchema', Template.builderPage._originalSchema());

Template.builderPage.helpers({
  getThisId: function (){
    return Random.id();
  },
  getThisSchema: function (){
    var formDesignerSchema = Session.get('formDesignerSchema');
    console.log('formDesignerSchema[this]', formDesignerSchema[this]);
    return formDesignerSchema[this];
  },
  schemaFieldNames: function (){
    var result = [];
    var formDesignerSchema = Session.get('formDesignerSchema');
    Object.keys(formDesignerSchema).forEach(function (key){
      result.push(key);
    });
    return result;
  },
  getOriginalSchema: function (){
    return Session.get('formDesignerSchema');
  },
  getBasicSchema: function (){
    Meteor.autorun(function (){
      var desginerSchema = new SimpleSchema(Session.get('formDesignerSchema'));
    });
    return desginerSchema;
  },
  isInput: function (fieldName){
    console.log('fieldName', fieldName);

    var designerSchema = Session.get('formDesignerSchema');
    if (designerSchema[fieldName].autoform.afFieldInput.type === "text") {
      return true;
    } else {
      return false;
    }
  },
  isTextarea: function (fieldName){
    console.log('fieldName', fieldName);

    var designerSchema = Session.get('formDesignerSchema');
    if (designerSchema[fieldName].autoform.afFieldInput.type === "textarea") {
      return true;
    } else {
      return false;
    }
  },
  items: function () {
    return Items.find({}, {
      sort: {
        rank: 1
      }
    });
  },
  formName: function () {
    var activeQuestionnaire = Questionnaires.findOne(Session.get('activeQuestionnaireId'));

    if (activeQuestionnaire) {
      console.log('activeQuestionnaire', activeQuestionnaire);
      return activeQuestionnaire.formName;
    } else {
      return "";
    }
  },
  isSelected: function (blockType) {
    if (Session.get('selectedBlockType') === blockType) {
      return "selected";
    }
  },
  getLabelText: function (fieldName) {
    var designerSchema = Session.get('formDesignerSchema');
    return designerSchema[fieldName].label;
  },
  getInputType: function () {
    return this.inputType;
  },
  // getInputPlaceholder: function () {
  //   if (this.autoforms.afFieldInput.placeholder) {
  //     return this.inputPlaceholder;
  //   } else {
  //     return "...";
  //   }
  // },
  getInputValue: function () {
    return this.inputValue;
  },

  // getValue1: function () {
  //   if (this.defaultValue1) {
  //     return this.defaultValue1;
  //   } else {
  //     return "1";
  //   }
  // },
  // getValue2: function () {
  //   if (this.defaultValue2) {
  //     return this.defaultValue2;
  //   } else {
  //     return "2";
  //   }
  // },
  // getValue3: function () {
  //   if (this.defaultValue3) {
  //     return this.defaultValue3;
  //   } else {
  //     return "3";
  //   }
  // },
  // getValue4: function () {
  //   if (this.defaultValue4) {
  //     return this.defaultValue4;
  //   } else {
  //     return "4";
  //   }
  // },
  // getValue5: function () {
  //   if (this.defaultValue5) {
  //     return this.defaultValue5;
  //   } else {
  //     return "5";
  //   }
  // }
});

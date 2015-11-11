var seed = new Meteor.Collection.ObjectID();

Session.setDefault("formBuilderPanelVisible", false);

Session.setDefault('selectedBuilderTab', 'addNewFieldTab');
Session.setDefault('seed', new Meteor.Collection.ObjectID());
Session.setDefault('multiSelectValues', {
  values: [{
    _id: seed._str,
    value: 'foo'
  }]
});

Template.formBuilderPanel.events({
  'click #deleteBlockButton': function (){
    Items.remove({_id: this._id});
  },
  'click #textInputBlock': function () {
    console.log('click #textInputBlock');
    Session.set('selectedBlockType', 'textInputBlock');
    FormBuilder.add('textInputBlock');
  },
  'click #textareaInputBlock': function () {
    Session.set('selectedBlockType', 'textareaInputBlock');
    FormBuilder.add('textareaInputBlock');
  },
  'click #numericInputBlock': function () {
    Session.set('selectedBlockType', 'numericInputBlock');
    FormBuilder.add('numericInputBlock');
  },
  'click #spacerBlock': function () {
    Session.set('selectedBlockType', 'spacerBlock');
    FormBuilder.add('spacerBlock');
  },
  'click #sectionTitleBlock': function () {
    Session.set('selectedBlockType', 'sectionTitleBlock');
    FormBuilder.add('sectionTitleBlock');
  },
  'click #paragraphBlock': function () {
    Session.set('selectedBlockType', 'paragraphBlock');
    FormBuilder.add('paragraphBlock');
  },
  'click #yesNoInputBlock': function () {
    Session.set('selectedBlockType', 'yesNoInputBlock');
    FormBuilder.add('yesNoInputBlock');
  },
  'click #dateTimeInputBlock': function () {
    Session.set('selectedBlockType', 'dateTimeInputBlock');
    FormBuilder.add('dateTimeInputBlock');
  },
  'click #timeInputBlock': function () {
    Session.set('selectedBlockType', 'timeInputBlock');
    FormBuilder.add('timeInputBlock');
  },
  'click #radioInputBlock': function () {
    Session.set('selectedBlockType', 'radioInputBlock');
    FormBuilder.add('radioInputBlock');
  },
  'click #multiSelectInputBlock': function () {
    Session.set('selectedBlockType', 'multiSelectInputBlock');
    FormBuilder.add('multiSelectInputBlock');

    var pseudoObject = new Meteor.Collection.ObjectID();
    Session.set('multiSelectValues', {
      values: [{
        _id: pseudoObject._str,
        value: 'foo'
      }]
    });
  },
  'click #addNewFieldTab': function () {
    Session.set('selectedBuilderTab', 'addNewFieldTab');
    console.log(Session.get('selectedBuilderTab'));
  },
  'click #editFieldTab': function () {
    if (Session.get('selectedBlockItem')) {
      Session.set('selectedBuilderTab', 'editFieldTab');
      console.log(Session.get('selectedBuilderTab'));
    }
  },

  // 'keyup .multiselectInput': function (event) {
  //   // get the values from our sidebarB
  //   var array = Session.get('multiSelectValues');
  //
  //   // update our array
  //   for (var i = 0; i < array.values.length; i++) {
  //     if (event.currentTarget.id.indexOf(array.values[i]._id) > -1) {
  //       array.values[i].value = $("#" + event.currentTarget.id).val();
  //     }
  //   }
  //
  //   // update our sidebar with the new array
  //   Session.set('multiSelectValues', array);
  //
  //   // update the selected block item with the new array
  //   Items.update({
  //     _id: Session.get('selectedBlockItem')
  //   }, {
  //     $set: {
  //       values: array.values
  //     }
  //   });
  //
  // },
  // 'click .multiselectRemove': function () {
  //   var array = Session.get('multiSelectValues');
  //   //var index = array.values.indexOf(this);
  //   var index = false;
  //
  //   for (var i = 0; i < array.values.length; i++) {
  //     //var object = array.values[i];
  //     if (array.values[i]._id === this._id) {
  //       index = i;
  //     }
  //   }
  //
  //   console.log('this ', this);
  //   console.log('index ', index);
  //   array.values.splice(index, 1);
  //   Session.set('multiSelectValues', array);
  //
  //   Items.update({
  //     _id: Session.get('selectedBlockItem')
  //   }, {
  //     $set: {
  //       values: array.values
  //     }
  //   });
  // },
  // 'click #addSelectItemButton': function () {
  //   var array = Session.get('multiSelectValues');
  //   if (array === undefined) {
  //     array = [];
  //   }
  //   var object = new Meteor.Collection.ObjectID();
  //   console.log('adding select item', object._str);
  //   array.values.push({
  //     _id: object._str,
  //     value: ''
  //   });
  //   console.log('array', array);
  //
  //   Session.set('multiSelectValues', array);
  //   Items.update({
  //     _id: Session.get('selectedBlockItem')
  //   }, {
  //     $set: {
  //       values: array.values
  //     }
  //   });
  // },
  // 'click #deleteBlockButton': function () {
  //   Items.remove(Session.get('selectedBlockItem'));
  //   Session.set('selectedBuilderTab', 'addNewFieldTab');
  //   Session.set('selectedBlockItem', false);
  // },
  'click #saveFormBlockParamsButton': function () {
    // var newObject = {
    //   label: $('#questionInput').val(),
    //   inputValue: $('#defaultValueInput').val(),
    // };
    // if (Session.get('selectedBlockType') === 'radioInputBlock') {
    //   newObject.defaultValue1 = $('#defaultValueInput1').val();
    //   newObject.defaultValue2 = $('#defaultValueInput2').val();
    //   newObject.defaultValue3 = $('#defaultValueInput3').val();
    //   newObject.defaultValue4 = $('#defaultValueInput4').val();
    //   newObject.defaultValue5 = $('#defaultValueInput5').val();
    // }
    Items.update({
      _id: Session.get('selectedItemId')
    }, {
      $set: {
        'keyName': $('#keyNameInput').val(),
        'schemaTemplate.label': $('#questionInput').val(),
        'schemaTemplate.defaultValue': $('#defaultValueInput').val(),
        'schemaTemplate.autoforms.afFieldInput.placeholder': $('#placeholderInput').val()
      }
    });
  },
  // 'click #duplicateFormBlockButton': function () {
  //   Session.set('selectedBlockType', this.blockType);
  //   Session.set('selectedFormElementId', this.blockType);
  //   Session.set('selectedBlockItem', FormBuilder.addQuestion(this));
  //   Session.set('selectedBuilderTab', 'editFieldTab');
  // },


});


Template.formBuilderPanel.helpers({
  getLabelText: function (){
    return this.keyName;
  },
  getWestPanelStyle: function (){
    if (Session.get("formBuilderPanelVisible")) {
      return "visibility: visible; left: 0px;";
    } else {
      return "visibility: hidden; left: -300px;";
    }
  },
  getMultiSelectValue: function () {
    return this.value;
  },
  getMultiSelectId: function () {
    return this._id;
  },
  selectItems: function () {
    var record = Items.findOne({
      _id: Session.get('selectedBlockItem')
    });
    if (record && record.values) {
      return record.values;
    } else {
      return [];
    }
  },
  selectedFormBlock: function () {
    return Items.findOne(Session.get('selectedItemId'));
  },
  getQuestionText: function () {
    return this.label;
  },
  getDefaultValue: function () {
    return this.inputValue;
  },


  // getValue1: function () {
  //   return this.defaultValue1;
  // },
  // getValue2: function () {
  //   return this.defaultValue2;
  // },
  // getValue3: function () {
  //   return this.defaultValue3;
  // },
  // getValue4: function () {
  //   return this.defaultValue4;
  // },
  // getValue5: function () {
  //   return this.defaultValue5;
  // },


  addNewFieldTabActive: function () {
    if (Session.equals('selectedBuilderTab', 'addNewFieldTab')) {
      return "active";
    } else {
      return "";
    }
  },
  editFieldTabActive: function () {
    if (Session.equals('selectedBuilderTab', 'editFieldTab')) {
      return "active";
    } else {
      return "";
    }
  },
  isAddNewFieldTab: function () {
    if (Session.get('selectedBuilderTab') === 'addNewFieldTab') {
      return true;
    } else {
      return false;
    }
  },
  // hasDefaultValue: function () {
  //   if (Session.get('selectedBlockType') === 'paragraphBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'radioInputBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'multiSelectInputBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'sectionTitleBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'spacerBlock') {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // },
  // hasRadioValues: function () {
  //   if (Session.get('selectedBlockType') === 'paragraphBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'radioInputBlock') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },
  // hasMultipleValues: function () {
  //   if (Session.get('selectedBlockType') === 'paragraphBlock') {
  //     return false;
  //   } else if (Session.get('selectedBlockType') === 'multiSelectInputBlock') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
});



// //=============================================
//
// initiateAddingBlock = function (blockType) {
//   Session.set('selectedBlockType', blockType);
//   Session.set('selectedFormElementId', blockType);
//   Session.set('selectedBlockItem', FormBuilder.addQuestion());
//   Session.set('selectedBuilderTab', 'editFieldTab');
// };

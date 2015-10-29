var seed = new Meteor.Collection.ObjectID();

Session.setDefault("builderPanelVisible", false);

Session.setDefault('selectedBuilderTab', 'addNewFieldTab');
Session.setDefault('seed', new Meteor.Collection.ObjectID());
Session.setDefault('multiSelectValues', {
  values: [{
    _id: seed._str,
    value: 'foo'
  }]
});

Template.builderPanel.events({
  'keyup .multiselectInput': function (event) {
    // get the values from our sidebarB
    var array = Session.get('multiSelectValues');

    // update our array
    for (var i = 0; i < array.values.length; i++) {
      if (event.currentTarget.id.indexOf(array.values[i]._id) > -1) {
        array.values[i].value = $("#" + event.currentTarget.id).val();
      }
    }

    // update our sidebar with the new array
    Session.set('multiSelectValues', array);

    // update the selected block item with the new array
    Items.update({
      _id: Session.get('selectedBlockItem')
    }, {
      $set: {
        values: array.values
      }
    });

  },
  'click .multiselectRemove': function () {
    var array = Session.get('multiSelectValues');
    //var index = array.values.indexOf(this);
    var index = false;

    for (var i = 0; i < array.values.length; i++) {
      //var object = array.values[i];
      if (array.values[i]._id === this._id) {
        index = i;
      }
    }

    console.log('this ', this);
    console.log('index ', index);
    array.values.splice(index, 1);
    Session.set('multiSelectValues', array);

    Items.update({
      _id: Session.get('selectedBlockItem')
    }, {
      $set: {
        values: array.values
      }
    });
  },
  'click #addSelectItemButton': function () {
    var array = Session.get('multiSelectValues');
    if (array === undefined) {
      array = [];
    }
    var object = new Meteor.Collection.ObjectID();
    console.log('adding select item', object._str);
    array.values.push({
      _id: object._str,
      value: ''
    });
    console.log('array', array);

    Session.set('multiSelectValues', array);
    Items.update({
      _id: Session.get('selectedBlockItem')
    }, {
      $set: {
        values: array.values
      }
    });
  },
  'click #deleteBlockButton': function () {
    Items.remove(Session.get('selectedBlockItem'));
    Session.set('selectedBuilderTab', 'addNewFieldTab');
    Session.set('selectedBlockItem', false);
  },
  'click #saveFormBlockParamsButton': function () {
    var newObject = {
      labelText: $('#questionInput').val(),
      inputValue: $('#defaultValueInput').val(),
    };
    if (Session.get('selectedBlockType') === 'radioInputBlock') {
      newObject.defaultValue1 = $('#defaultValueInput1').val();
      newObject.defaultValue2 = $('#defaultValueInput2').val();
      newObject.defaultValue3 = $('#defaultValueInput3').val();
      newObject.defaultValue4 = $('#defaultValueInput4').val();
      newObject.defaultValue5 = $('#defaultValueInput5').val();
    }
    Items.update({
      _id: Session.get('selectedBlockItem')
    }, {
      $set: newObject
    });
  },
  'click #duplicateFormBlockButton': function () {
    Session.set('selectedBlockType', this.block_type);
    Session.set('movedElementId', this.block_type);
    Session.set('selectedBlockItem', addBlockToForm(this));
    Session.set('selectedBuilderTab', 'editFieldTab');
  },

  'click #plainTextBlock': function () {
    initiateAddingBlock('plainTextBlock');
  },
  'click #textInputBlock': function () {
    initiateAddingBlock('textInputBlock');
  },
  'click #textareaInputBlock': function () {
    initiateAddingBlock('textareaInputBlock');
  },
  'click #numericInputBlock': function () {
    initiateAddingBlock('numericInputBlock');
  },
  'click #spacerBlock': function () {
    initiateAddingBlock('spacerBlock');
  },
  'click #sectionTitleBlock': function () {
    initiateAddingBlock('sectionTitleBlock');
  },
  'click #yesNoInputBlock': function () {
    initiateAddingBlock('yesNoInputBlock');
  },
  'click #dateTimeInputBlock': function () {
    initiateAddingBlock('dateTimeInputBlock');
  },
  'click #timeInputBlock': function () {
    initiateAddingBlock('timeInputBlock');
  },
  'click #radioInputBlock': function () {
    initiateAddingBlock('radioInputBlock');
  },
  'click #multiSelectInputBlock': function () {
    initiateAddingBlock('multiSelectInputBlock');

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
  }
});


Template.builderPanel.helpers({
  getWestPanelStyle: function (){
    if (Session.get("builderPanelVisible")) {
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
    return Items.findOne(Session.get('selectedBlockItem'));
  },
  getQuestionText: function () {
    return this.labelText;
  },
  getDefaultValue: function () {
    return this.inputValue;
  },


  getValue1: function () {
    return this.defaultValue1;
  },
  getValue2: function () {
    return this.defaultValue2;
  },
  getValue3: function () {
    return this.defaultValue3;
  },
  getValue4: function () {
    return this.defaultValue4;
  },
  getValue5: function () {
    return this.defaultValue5;
  },


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
  hasDefaultValue: function () {
    if (Session.get('selectedBlockType') === 'plainTextBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'radioInputBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'multiSelectInputBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'sectionTitleBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'spacerBlock') {
      return false;
    } else {
      return true;
    }
  },
  hasRadioValues: function () {
    if (Session.get('selectedBlockType') === 'plainTextBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'radioInputBlock') {
      return true;
    } else {
      return false;
    }
  },
  hasMultipleValues: function () {
    if (Session.get('selectedBlockType') === 'plainTextBlock') {
      return false;
    } else if (Session.get('selectedBlockType') === 'multiSelectInputBlock') {
      return true;
    } else {
      return false;
    }
  }
});



//=============================================

initiateAddingBlock = function (blockType) {
  Session.set('selectedBlockType', blockType);
  Session.set('movedElementId', blockType);
  Session.set('selectedBlockItem', addBlockToForm());
  Session.set('selectedBuilderTab', 'editFieldTab');
};

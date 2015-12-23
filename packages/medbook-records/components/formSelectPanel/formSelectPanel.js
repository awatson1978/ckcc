var seed = new Meteor.Collection.ObjectID();

Session.setDefault("formSelectPanelVisible", false);

Session.setDefault('selectedBuilderTab', 'addNewFieldTab');
Session.setDefault('seed', new Meteor.Collection.ObjectID());
Session.setDefault('multiSelectValues', {
  values: [{
    _id: seed._str,
    value: 'foo'
  }]
});

Template.formSelectPanel.events({
  'click li': function (){
    Session.set('activeMetadataId', this._id);
  }
});


Template.formSelectPanel.helpers({
  isSelected: function (){
    if (this._id === Session.get('activeMetadataId')) {
      return "selected";
    } else {
      return "";
    }
  },
  metadataList: function (){
    return Metadata.find();
  },
  getLabelText: function (){
    return this.keyName;
  },
  getWestPanelStyle: function (){
    if (Session.get("formSelectPanelVisible")) {
      return "visibility: visible; left: 0px;";
    } else {
      return "visibility: hidden; left: -300px;";
    }
  }
});

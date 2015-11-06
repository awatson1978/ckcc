Meteor.startup(function () {
  Session.setDefault('showMetadataPicklist', false);
  Session.setDefault('metadataModalSearchFilter', "");
  Session.setDefault('selectedMetadataId', null);
});


Template.metadataPicklistModal.events({
  'click #metadataPicklistCancelButton': function (){
    Session.set('showMetadataPicklist', false);
    Session.set('show_reactive_overlay', false);
  },
  'change #metadataModalSearchInput': function (){
    Session.set('metadataModalSearchFilter', $('#metadataModalSearchInput').val());
  },
  'keyup #metadataSearchInput': function (){
    Session.set('metadataSearchFilter', $('#metadataSearchInput').val());
  },
  "click #metadataPicklistOkButton": function (event, template) {
    Session.set('showMetadataPicklist', false);
    Session.set('show_reactive_overlay', false);
  },
  'click .metadataRow': function (){
    Session.set("selectedMetadataId", this._id);
    Session.set("metadataSearchFilter", this.name);
    Session.set('showMetadataPicklist', false);
    Session.set('show_reactive_overlay', false);

    $('input[name="metadataId"]').val(this._id);
    $('input[name="metadataName"]').val(this.name);
  }
});


Template.metadataPicklistModal.helpers({
  getCurrentSearchFilter: function (){
    return Session.get('metadataModalSearchFilter');
  },
  metadataList: function () {
    return Metadata.find({$or:[
      {
        _id: {
          $regex: Session.get('metadataSearchFilter'),
          $options: 'i'
        }
      },
      {
        'name': {
          $regex: Session.get('metadataSearchFilter'),
          $options: 'i'
        }
      }
    ]});
  },
  getVisibility: function () {
    if (Session.get('showMetadataPicklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});

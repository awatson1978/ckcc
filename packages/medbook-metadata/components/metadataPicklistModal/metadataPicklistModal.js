Meteor.startup(function () {
  Session.setDefault('showMetadataPicklist', false);
  Session.setDefault('selectedInputNameForMetadataPicklist', null);
  Session.setDefault('selectedInputIdForMetadataPicklist', null);
  Session.setDefault('metadataModalSearchFilter', "");
  Session.setDefault('selectedMetadataId', null);

});


Template.metadataPicklistModal.events({
  'click #metadataPicklistCancelButton': function (){
    Session.set('metadataSearchFilter', "");
    Session.set('showMetadataPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'change #metadataModalSearchInput': function (){
    Session.set('metadataModalSearchFilter', $('#metadataModalSearchInput').val());
  },
  'keyup #metadataSearchInput': function (){
    Session.set('metadataSearchFilter', $('#metadataSearchInput').val());
  },
  "click #metadataPicklistOkButton": function (event, template) {
    Session.set('metadataSearchFilter', "");
    Session.set('showMetadataPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'click .metadataRow': function (){
    Session.set("selectedMetadataId", this._id);
    Session.set("metadataSearchFilter", this.name);
    Session.set('showMetadataPicklist', false);

    console.log('click .metadataRow', this._id);

    var selectedInputId = Session.get('selectedInputIdForMetadataPicklist');

    if (selectedInputId) {
      console.log('#' + selectedInputId);

      $('#' + selectedInputId).val(this._id);
    }


    Session.set('selectedInputNameForMetadataPicklist', null);
    Session.set('selectedInputIdForMetadataPicklist', null);

    Session.set('showReactiveOverlay', false);
    Session.set('metadataSearchFilter', "");

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

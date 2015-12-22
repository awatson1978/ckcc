Meteor.startup(function () {
  Session.setDefault('showSamplePicklist', false);
  Session.setDefault('sampleModalSearchFilter', "");
  Session.setDefault('selectedSampleId', null);
});


Template.samplesPicklistModal.events({
  'click #samplePicklistCancelButton': function (){
    Session.set('showSamplePicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'change #sampleModalSearchInput': function (){
    Session.set('sampleModalSearchFilter', $('#sampleModalSearchInput').val());
  },
  'keyup #sampleModalSearchInput': function (){
    Session.set('sampleModalSearchFilter', $('#sampleModalSearchInput').val());
  },
  "click #samplePicklistOkButton": function (event, template) {
    Session.set('showSamplePicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'click .sampleRow': function (){
    Session.set("selectedSampleId", this._id);
    Session.set("sampleSearchFilter", this.name);
    Session.set('showSamplePicklist', false);
    Session.set('showReactiveOverlay', false);

    $('input[name="sampleId"]').val(this._id);
    $('input[name="Sample_ID"]').val(this._id);
    $('input[name="sampleName"]').val(this.name);
  }
});


Template.samplesPicklistModal.helpers({
  getCurrentSearchFilter: function (){
    return Session.get('sampleModalSearchFilter');
  },
  samplesList: function () {
    return Samples.find({$or:[
      {
        _id: {
          $regex: Session.get('sampleModalSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Sample_ID': {
          $regex: Session.get('sampleModalSearchFilter'),
          $options: 'i'
        }
      }
    ]});
  },
  getVisibility: function () {
    if (Session.get('showSamplePicklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});

Meteor.startup(function () {
  Session.setDefault('showStudyPicklist', false);
  Session.setDefault('studyModalSearchFilter', "");
  Session.setDefault('selectedStudyId', null);
});


Template.studiesPicklistModal.events({
  'click #studyPicklistCancelButton': function (){
    Session.set('showStudyPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'change #studyModalSearchInput': function (){
    Session.set('studyModalSearchFilter', $('#studyModalSearchInput').val());
  },
  'keyup #studySearchInput': function (){
    Session.set('studySearchFilter', $('#studySearchInput').val());
  },
  "click #studyPicklistOkButton": function (event, template) {
    Session.set('showStudyPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'click .studyRow': function (){
    Session.set("selectedStudyId", this._id);
    Session.set("studySearchFilter", this.name);
    Session.set('showStudyPicklist', false);
    Session.set('showReactiveOverlay', false);

    $('input[name="studyId"]').val(this._id);
    $('input[name="studyName"]').val(this.name);
  }
});


Template.studiesPicklistModal.helpers({
  getCurrentSearchFilter: function (){
    return Session.get('studyModalSearchFilter');
  },
  studiesList: function () {
    return Studies.find({$or:[
      {
        _id: {
          $regex: Session.get('studySearchFilter'),
          $options: 'i'
        }
      },
      {
        'name': {
          $regex: Session.get('studySearchFilter'),
          $options: 'i'
        }
      }
    ]});
  },
  getVisibility: function () {
    if (Session.get('showStudyPicklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});

Meteor.startup(function () {
  Session.setDefault('showPatientPicklist', false);
  Session.setDefault('patientModalSearchFilter', "");
  Session.setDefault('selectedPatientId', null);
});


Template.patientsPicklistModal.events({
  'click #patientPicklistCancelButton': function (){
    Session.set('showPatientPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'change #patientModalSearchInput': function (){
    Session.set('patientModalSearchFilter', $('#patientModalSearchInput').val());
  },
  'keyup #patientModalSearchInput': function (){
    Session.set('patientModalSearchFilter', $('#patientModalSearchInput').val());
  },
  "click #patientPicklistOkButton": function (event, template) {
    Session.set('showPatientPicklist', false);
    Session.set('showReactiveOverlay', false);
  },
  'click .patientRow': function (){
    Session.set("selectedPatientId", this._id);
    Session.set("patientSearchFilter", this.name);
    Session.set('showPatientPicklist', false);
    Session.set('showReactiveOverlay', false);

    $('input[name="patientId"]').val(this._id);
    $('input[name="Patient_ID"]').val(this._id);
    $('input[name="patientName"]').val(this.name);
  }
});


Template.patientsPicklistModal.helpers({
  getCurrentSearchFilter: function (){
    return Session.get('patientModalSearchFilter');
  },
  patientsList: function () {
    return Patients.find({$or:[
      {
        _id: {
          $regex: Session.get('patientModalSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Patient_ID': {
          $regex: Session.get('patientModalSearchFilter'),
          $options: 'i'
        }
      }
    ]});
  },
  getVisibility: function () {
    if (Session.get('showPatientPicklist')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});

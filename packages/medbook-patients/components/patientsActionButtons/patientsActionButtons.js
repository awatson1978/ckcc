


Template.patientsActionButtons.helpers({

});

Template.patientsActionButtons.events({
  'click #newPatientLink': function () {
    Router.go('/insert/patient');
  }
});
Template.insertPatientActionButtons.events({
  'click #savePatientLink': function () {
    // $('#savePatientButton').click();
    Template.patientUpsertPage.savePatient(Session.get('activePatientId'));
  },
  'click #scrollPatientsLink': function (){
    $('html, body').animate({
      // scrollTop: $("#" + event.currentTarget.attributes["target"].value).offset().top - 50
      scrollTop: $("input[name='Questionnaires.0']").offset().top - 50
    }, 500);
  }
});

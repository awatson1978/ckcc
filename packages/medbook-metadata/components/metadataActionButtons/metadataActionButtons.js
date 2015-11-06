


Template.metadataActionButtons.helpers({

});

Template.metadataActionButtons.events({
  'click #saveDataButton': function (){
    $('#saveRecordButton').click();
  },
  "click #newQuestionnaireBtn": function (event, template) {
    Router.go('/build/questionnaire');
  },
});

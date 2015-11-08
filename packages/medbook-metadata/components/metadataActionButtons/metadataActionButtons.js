


Template.metadataActionButtons.helpers({

});

Template.metadataActionButtons.events({
  'click #saveDataButton': function (){
    $('#saveRecordButton').click();
  },
  "click #newQuestionnaireButton": function (event, template) {
    Router.go('/build/questionnaire');
  },
});

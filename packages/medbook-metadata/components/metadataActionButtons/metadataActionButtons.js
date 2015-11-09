


Template.metadataActionButtons.helpers({

});

Template.metadataActionButtons.events({
  'click #saveDataButton': function (){
    Template.metadataUpsertPage.saveQuestionnaire(Session.get('activeMetadataId'), false);
  },
  "click #newQuestionnaireButton": function (event, template) {
    Router.go('/build/questionnaire');
  },
});




Template.metadataActionButtons.helpers({

});

Template.metadataActionButtons.events({
  'click #removeQuestionnaireButton': function (){
    Metadata.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/metadatas');
      }
    });
  },
  "click #saveQuestionnaireButton": function (event, template){
    event.preventDefault();
    Template.metadataUpsertPage.saveQuestionnaireData(this, false);
    Session.set('metadataReadOnly', true);
  },
  'click #saveDataButton': function (){
    Template.metadataUpsertPage.saveQuestionnaireData(Session.get('activeMetadata'), false);
  },
  "click #newQuestionnaireButton": function (event, template) {
    Router.go('/build/questionnaire');
  },
});

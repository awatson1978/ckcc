


Template.recordActionButtons.helpers({

});

Template.recordActionButtons.events({
  'click #saveDataButton': function (){
    Template.metadataUpsertPage.saveQuestionnaireData(Session.get('activeMetadata'), false);
  }
});
Template.recordListActionButtons.events({
  'click #newRecordButton': function (){
    if (Session.get('activeMetadataId')) {
      Router.go("/view/metadata/" + Session.get('activeMetadataId'));
    } else {
      Router.go("/list/metadata/");
    }
  },
  'click #toggleSidebarButton': function (){
    Session.toggle("westPanelVisible");
  }
});

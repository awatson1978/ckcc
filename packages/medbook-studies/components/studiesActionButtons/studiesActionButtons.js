


Template.studiesActionButtons.helpers({

});

Template.studiesActionButtons.events({
  'click #newStudyLink': function () {
    Router.go('/insert/study');
  }
});
Template.insertStudyActionButtons.events({
  'click #saveStudyLink': function () {
    // $('#saveStudyButton').click();
    Template.studyUpsertPage.saveStudy(Session.get('activeStudyId'));
  }
});

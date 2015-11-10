


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
  },
  'click #scrollStudiesLink': function (){
    $('html, body').animate({
      // scrollTop: $("#" + event.currentTarget.attributes["target"].value).offset().top - 50
      scrollTop: $("input[name='Questionnaires.0']").offset().top - 50
    }, 500);
  }
});

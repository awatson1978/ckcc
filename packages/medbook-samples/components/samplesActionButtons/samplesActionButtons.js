


Template.samplesActionButtons.helpers({

});

Template.samplesActionButtons.events({
  'click #newSampleLink': function () {
    Router.go('/insert/sample');
  }
});
Template.insertSampleActionButtons.events({
  'click #saveSampleLink': function () {
    // $('#saveSampleButton').click();
    Template.sampleUpsertPage.saveSample(Session.get('activeSampleId'));
  },
  'click #scrollSamplesLink': function (){
    $('html, body').animate({
      // scrollTop: $("#" + event.currentTarget.attributes["target"].value).offset().top - 50
      scrollTop: $("input[name='Questionnaires.0']").offset().top - 50
    }, 500);
  }
});

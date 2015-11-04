Meteor.startup(function () {
  Env.allow({
    DEBUG: true
  });

  // we can run the following to prevent initialization
  // INITIALIZE=false meteor
  if (process.env.INITIALIZE !== false) {

    console.log('Initializing collections....');

    if (Oncore.find().count() === 0) {
      //Meteor.call('initializeOncoreSample');
    }

    if (Metadata.find().count() === 0) {
      //Meteor.call('initializeMetadata');
    }

    if (Patients.find().count() === 0) {
      console.log('initializePatients');
      Meteor.call("initializePatients");
    }
    if (Collaborations.find().count() === 0) {
      Meteor.call('initializeCollaborations');
    }
    if (Records.find().count() === 0) {
      Meteor.call("initializeDataRecord");
    }
    if (PublicStats.find().count() === 0) {
      Meteor.call("initializePublicStats");
    }
    if (Studies.find().count() === 0) {
      Meteor.call("initializeStudies");
    }
    if (Questionnaires.find().count() === 0) {
      Meteor.call("initializeQuestionnaires");
    }
  };

});

Meteor.startup(function () {
  Env.allow({
    DEBUG: true,
    PROCESS_ENV: true
  });

  // we can run the following to prevent initialization
  // INITIALIZE=false meteor
  if ((typeof process.env.INITIALIZE === "boolean") && process.env.INITIALIZE) {

    console.log('Initializing collections....');


    if (Metadata.find().count() === 0) {
      //Meteor.call('initializeMetadata');
    }

    // if (Patients.find().count() === 0) {
    //   //console.log('initializePatients');
    //   Meteor.call("initializePatients");
    // }
    if (Collaborations.find().count() === 0) {
      Meteor.call('initializeDefaultCollaborations');
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
    if (Meteor.users.find().count() === 0) {
      Meteor.call("iniitalizeUsers");
    }
  };

  Migrations.migrateTo('latest');
});

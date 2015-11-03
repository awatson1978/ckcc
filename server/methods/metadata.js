Meteor.methods({
  initializeMetadata: function (){
    console.log('initializeMetadata');

    Object.keys(Initialization).forEach( function (key){

      var newQuestionnaire = {
        commonName: Initialization[key].commonName,
        version: Initialization[key].version,
      };
      newQuestionnaire.schema = Initialization[key];

      Metadata.insert(newQuestionnaire);
    });

  }
});

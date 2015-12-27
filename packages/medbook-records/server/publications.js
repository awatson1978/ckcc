Meteor.publish("records", function (activeMetadataId) {
  if (activeMetadataId) {
    console.log('Subscribing to questionnaire ' + activeMetadataId);

    return Records.find({
      questionnaireId: activeMetadataId
    });
  } else {
    return Records.find();
  }
});

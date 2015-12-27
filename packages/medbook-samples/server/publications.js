Meteor.publish("samples", function (sampleId) {
  if (sampleId) {
    return Samples.findOne({
      _id: sampleId
    });
  } else {
    return Samples.find();
  }
});

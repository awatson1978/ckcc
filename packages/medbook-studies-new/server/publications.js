Meteor.publish("studies", function (studyId) {
  if (studyId) {
    return Studies.findOne({
      _id: studyId
    });
  } else {
    return Studies.find();
  }
});

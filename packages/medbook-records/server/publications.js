Meteor.publish("records", function (recordId) {
  if (recordId) {
    return Records.findOne({
      _id: recordId
    });
  } else {
    return Records.find();
  }
});

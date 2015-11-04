Meteor.publish("subjects", function () {
  return Subjects.find();
});

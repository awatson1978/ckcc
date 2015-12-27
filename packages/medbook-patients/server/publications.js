Meteor.publish("patients", function (patientId) {
  if (patientId) {
    return Patients.findOne({
      _id: patientId
    });
  } else {
    return Patients.find();
  }
});

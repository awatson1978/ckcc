Patients = new Mongo.Collection('patients');

Patients.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

// PatientSchema = new SimpleSchema();
// Patients.attachSchema(PatientSchema);

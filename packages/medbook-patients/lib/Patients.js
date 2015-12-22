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

PatientSchema = new SimpleSchema({
  "_id": {
    type: String,
    optional: true
  },
  "resourceType": {
    type: String,
    optional: true,
    defaultValue: "Patient",
    label: "Resource Type"
  },
  "meta.versionId": {
    type: Number,
    optional: true
  },
  "meta.lastUpdated": {
    type: Date,
    optional: true
  },
  "extension.$.url": {
    type: String,
    optional: true
  },
  "extension.$.valueCode": {
    type: String,
    optional: true
  },
  "identifier.$.use": {
    type: String,
    optional: true
  },
  "identifier.$.label": {
    type: String,
    optional: true
  },
  "identifier.$.system": {
    type: String,
    optional: true
  },
  "identifier.$.value": {
    type: String,
    optional: true
  },

  "name.$.family": {
    type: [String],
    optional: true
  },
  "name.$.given": {
    type: [String],
    optional: true
  },
  "name.$.suffix": {
    type: [String],
    optional: true
  },

  "gender.text": {
    type: String,
    optional: true
  },
  "birthDate": {
    type: String,
    optional: true
  },
  "active": {
    type: Boolean,
    optional: true
  }
});
Patients.attachSchema(PatientSchema);

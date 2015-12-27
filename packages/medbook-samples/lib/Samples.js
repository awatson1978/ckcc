Samples = new Meteor.Collection('samples');

Samples.allow({
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

SampleSchema = new SimpleSchema({
  "_id": {
    type: String,
    optional: true
  },
  "Patient_ID": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Patient ID"
  },
  "Sample_ID": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Sample ID"
  },
  "Site": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Site"
  },
  "Date_of_Procedure": {
    type: Date,
    optional: true,
    defaultValue: "",
    label: "Date of Procedure"
  },
  "Visit_Date": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Visit Date"
  },
  "Was_it_a_Tapered_Dose": {
    type: Boolean,
    optional: true,
    defaultValue: true,
    label: "Was it a Tapered Dose?"
  },
  "Day": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Day"
  },
  "Phase": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Phase"
  },
  "Segment": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Segment"
  },
  "Arm": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Arm"
  },
  "questionnaireId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire ID"
  },
  "questionnaireName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire Name"
  }

});
Samples.attachSchema(SampleSchema);

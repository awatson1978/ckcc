Studies = new Meteor.Collection('studies');

Studies.allow({
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

StudySchema = new SimpleSchema({
  "name": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Name"
  },
  "short_name": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Short Name"
  },
  "description": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Description"
  },
  "id": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Study Slug"
  },
  "cbio_id": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "CBIO"
  },
  "type_of_cancer_id": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Type of Cancer"
  },
  "public": {
    type: Boolean,
    optional: true,
    defaultValue: true,
    label: "Public"
  },
  "pmid": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "PMID"
  },
  "citation": {
    type: String,
    optional: true,
    defaultValue: "unpublished",
    label: "Citation"
  },
  "tables": {
    type: [String],
    optional: true,
    defaultValue: [],
    label: "Tables",
    autoform: {
      afArrayField: {
        template: "photonic"
      }
    }
  },
  "Sample_IDs": {
    type: [String],
    optional: true,
    defaultValue: [],
    label: "Sample IDs",
    autoform: {
      afArrayField: {
        template: "photonic"
      }
    }
  },
  "Patient_IDs": {
    type: [String],
    optional: true,
    defaultValue: [],
    label: "Patient IDs",
    autoform: {
      afArrayField: {
        template: "photonic"
      }
    }
  },
  "Questionnaires": {
    type: [String],
    optional: true,
    defaultValue: [],
    label: "Questionnaires",
    autoform: {
      afArrayField: {
        class: "questionnaires",
        template: "photonic"
      }
    }
  }

});
Studies.attachSchema(StudySchema);

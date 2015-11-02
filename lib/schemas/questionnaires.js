QuestionnaireSchema = new SimpleSchema({
  "questionnaireName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire Name"
  },
  // "createdAt": {
  //   type: Date,
  //   optional: true,
  //   defaultValue: new Date(),
  //   label: "Created At"
  // },
  "starred": {
    type: Boolean,
    optional: true,
    defaultValue: false,
    label: "Starred"
  },
  "active": {
    type: Boolean,
    optional: true,
    defaultValue: true,
    label: "Active"
  },

  "ownerId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Owner Id"
  },
  "owner": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Owner"
  },

  "collaborationName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Collaboration Name"
  },
  "collaborationId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Collaboration ID"
  },
  "slug": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Slug/Code"
  },

  "schema": {
    type: Object,
    optional: true,
    blackbox: true,
    label: "Schema"
  },
  "numBlocks": {
    type: Number,
    optional: true,
    label: "Number of Form Elements"
  }
});
Questionnaires.attachSchema(QuestionnaireSchema);

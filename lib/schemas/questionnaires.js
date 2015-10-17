QuestionnaireSchema = new SimpleSchema({
  "questionnaireName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire Name"
  },
  "institutionName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Institution Name"
  },
  "institutionId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Institution ID"
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
  }
});
Questionnaires.attachSchema(QuestionnaireSchema);

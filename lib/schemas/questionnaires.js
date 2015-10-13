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
  }
});
Questionnaires.attachSchema(QuestionnaireSchema);

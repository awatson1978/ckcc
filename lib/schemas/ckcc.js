CkccSchema = new SimpleSchema({
  "questionnaireName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire Name"
  },
  "questionnaireId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Questionnaire Id"
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
  "participantId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Participant Id"
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
    label: "Collaboration Id"
  },
  "physicianName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Physician Name"
  },
  "studyName": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Study Name/Description"
  },
  "studyId": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Study Id"
  },
  "patientAge": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Patient Age"
  },
  "patientGender": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Patient Gender"
  },
  "diagnosisDescription": {
    type: String,
    optional: true,
    label: "What is the Diagnosis?",
    defaultValue: "",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "diagnosisCode": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Diagnosis Code"
  },
  "diseaseSubtype": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What is the disease subtype (if applicable)"
  },
  "priorTreatmentHistory": {
    type: String,
    optional: true,
    label: "What prior treatment has the patient received?",
    defaultValue: "",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "complicatingConditions": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What complicating conditions doess the patient have?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "currentStatus": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What is the current status of the patient?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "lastFollowUpDate": {
    type: Date,
    optional: true,
    defaultValue: new Date(),
    blackbox: true,
    label: "What is the last date of follow up?"
  },
  "familyHistory": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What is the family history of cancer and related disease?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "molecularTesting": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What molecular Testing has been performed including genomic testing, FISH testing or other assays?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "actionableFindings": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What are the actionable findings from prior genomic analysis?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "genomicAnalysis": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Did genomic analysis affect subsequent treatment? If so, how?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "biopsySource": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments.",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "tumorCellFraction": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments.",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "otherStudies": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "What other pathology or radiology studies have been performed and what were the findings?",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  },
  "createdAt": {
    type: Date,
    optional: true,
    defaultValue: new Date(),
    label: "Created At"
  }
});

Records.attachSchema(CkccSchema);

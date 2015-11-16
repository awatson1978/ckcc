Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "CkccPediatricIntake"})) {
      Meteor.call("initializeCkccPediatricIntakeForm");
    }
  }
});


Meteor.methods({
  initializeCkccPediatricIntakeForm:function (){
    Metadata.upsert({"_id": "CkccPediatricIntake"}, {$set:{
      name : "CkccPediatricIntake",
      commonName : "Pediatric Intake",
      version : "V2",
      schema : {
          CreatedAt : {
              label : "Created At",
              type : "Date"
          },
          Patient_ID : {
              label : "Patient ID",
              type : "String"
          },
          questionnaireName: {
            label : "Questionnaire Name",
            type : "String",
            optional: true
          },
          questionnaireId: {
            label : "Questionnaire ID",
            type : "String",
            optional: true
          },
          institutionId: {
            label : "Institution ID",
            type : "String",
            optional: true
          },
          participantId: {
            label : "Participant ID",
            type : "String",
            optional: true
          },

          collaborationName: {
            label : "Collaboration Name",
            type : "String",
            optional: true
          },
          collaborationId: {
            label : "Collaboration ID",
            type : "String",
            optional: true
          },
          physicianName: {
            label : "Physician Name",
            type : "String",
            optional: true
          },
          studyName: {
            label : "Study Name",
            type : "String",
            optional: true
          },
          studyId: {
            label : "Study ID",
            type : "String",
            optional: true
          },
          patientAge: {
            label : "Age",
            type : "String",
            optional: true
          },
          patientGender: {
            label : "Gender",
            type : "String",
            optional: true
          },
          diagnosisDescription: {
            label : "What is the Diagnosis?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          diagnosisCode: {
            label : "Diagnosis Code",
            type : "String",
            optional: true
          },
          diseaseSubtype: {
            label : "What is the disease subtype (if applicable)",
            type : "String",
            optional: true
          },

          priorTreatmentHistory: {
            label : "What prior treatment has the patient received?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          complicatingConditions: {
            label : "What complicating conditions doess the patient have?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },

          currentStatus: {
            label : "What is the current status of the patient?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          lastFollowUpDate: {
            label : "What is the last date of follow up?",
            type : "Date"
            // optional: true
          },
          familyHistory: {
            label : "What is the family history of cancer and related disease?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },

          molecularTesting: {
            label : "What molecular Testing has been performed including genomic testing, FISH testing or other assays?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          actionableFindings: {
            label : "What are the actionable findings from prior genomic analysis?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          genomicAnalysis: {
            label : "Did genomic analysis affect subsequent treatment? If so, how?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          biopsySource: {
            label : "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments.",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          tumorCellFraction: {
            label : "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments.",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          },
          otherStudies: {
            label : "What other pathology or radiology studies have been performed and what were the findings?",
            type : "String",
            optional: true,
            autoform: {
              afFieldInput: {
                type: "textarea",
                rows: 10,
                placeholder: "Lorem ipsum..."
              }
            }
          }
      },
      fieldOrder : [
          "CreatedAt",
          "Patient_ID",
          "questionnaireName",
          "questionnaireId",
          "institutionId",
          "participantId",
          "collaborationName",
          "collaborationId",
          "physicianName",
          "studyName",
          "studyId",
          "patientAge",
          "patientGender",
          "diagnosisDescription",
          "diagnosisCode",
          "diseaseSubtype",
          "priorTreatmentHistory",
          "complicatingConditions",
          "currentStatus",
          "lastFollowUpDate",
          "familyHistory",
          "molecularTesting",
          "actionableFindings",
          "genomicAnalysis",
          "biopsySource",
          "tumorCellFraction",
          "otherStudies"
      ],
      study : "ckcc"
    }});
  }
});

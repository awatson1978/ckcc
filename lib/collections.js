// Foo = new Meteor.Collection('foo');
//
// Foo.allow({
//   insert: function () {
//     return true;
//   },
//   update: function () {
//     return true;
//   },
//   remove: function () {
//     return true;
//   }
// });
//





// PathologyReportSchema = new SimpleSchema({
//   'title': {
//     type: String,
//     optional: true,
//     label: "Sample ID"
//   },
//   'description': {
//     type: String,
//     optional: true,
//     label: "Institution"
//   },
//   'url': {
//     type: String,
//     optional: true
//   },
//   'imageUrl': {
//     type: String,
//     optional: true
//   },
//   "AR_chromosomeX_ratio": {
//     type: Number,
//     decimal: true,
//     optional: true
//   },
//   "AR-FISH_IHC": {
//     "allowedValues": [
//         "Positive",
//         "Focal Positive",
//         "Negative",
//         "Weak",
//         "Failed",
//         "Not Performed"
//       ],
//     "label": "AR Immunohistochemistry",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "AR-FISH_test_performed": {
//     "allowedValues": [
//         "Performed",
//         "Not Performed"
//       ],
//     "label": "AR-FISH test performed",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "PSA_IHC": {
//     "allowedValues": [
//         "Positive",
//         "Focal Positive",
//         "Negative",
//         "Weak",
//         "Failed",
//         "Not Performed"
//       ],
//     "label": "PSA Immunohistochemistry",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "CHGA_IHC": {
//     "allowedValues": [
//         "Positive",
//         "Focal Positive",
//         "Negative",
//         "Weak",
//         "Failed",
//         "Not Performed"
//       ],
//     "label": "CHGA Immunohistochemistry",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "CHGA_test_performed": {
//     "allowedValues": [
//         "Performed",
//         "Not Performed"
//       ],
//     "label": "CHGA test performed",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "ION_Torrent_test_performed": {
//     "allowedValues": [
//         "Yes",
//         "No"
//       ],
//     "label": "ION Torrent test performed",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "PTEN_IHC": {
//     "allowedValues": [
//         "Positive",
//         "Negative",
//         "Weak",
//         "N/A"
//       ],
//     "label": "PTEN Immunohistochemistry",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "PTEN_test_performed": {
//     "allowedValues": [
//         "Performed",
//         "Not Performed"
//       ],
//     "label": "PTEN test performed",
//     "max": 200,
//     type: String,
//     optional: true
//   },
//   "Tumor_Content": {
//     "label": "Tumor Content",
//     type: String,
//     "allowedValues": [
//         "None",
//         "<5%",
//         "5%",
//         "10%",
//         "20%",
//         "30%",
//         "40%",
//         "50%",
//         "60%",
//         "70%",
//         "80%",
//         "90%",
//         "100%"
//       ]
//   },
//   "Preliminary_Histology": {
//     "allowedValues": [
//         "Adenocarcinoma",
//         "Possible SC",
//         "Small Cell",
//         "ANPC",
//         "Mixed",
//         "N/A"
//       ],
//     "label": "Preliminary Histology",
//     "max": 200,
//     type: String
//   },
//   "Final_Histology": {
//     "allowedValues": [
//         "Adenocarcinoma",
//         "Small Cell",
//         "ANPC",
//         "Indeterminate",
//         "Atypical with Adeno Architecture",
//         "Adeno+ANPC",
//         "Adeno+SC",
//         "ANPC+SC",
//         "N/A"
//       ],
//     "label": "Final Histology Call",
//     "max": 200,
//     type: String,
//     optional: true
//   }
// });


CkccSchema = new SimpleSchema({
  "institutionName": {
    type: String,
    optional: true,
    label: "Institution Name"
  },
  "institutionId": {
    type: String,
    optional: true,
    label: "Institution ID"
  },
  "physicianName": {
    type: String,
    optional: true,
    label: "Physician Name"
  },
  "studyName": {
    type: String,
    optional: true,
    label: "Study Name/Description"
  },
  "studyId": {
    type: String,
    optional: true,
    label: "Study Id"
  },
  "patientAge": {
    type: String,
    optional: true,
    label: "Patient Age"
  },
  "patientGender": {
    type: String,
    optional: true,
    label: "Patient Gender"
  },
  "diagnosisDescription": {
    type: String,
    optional: true,
    label: "What is the Diagnosis?"
  },
  "diagnosisCode": {
    type: String,
    optional: true,
    label: "Diagnosis Code"
  },
  "diseaseSubtype": {
    type: String,
    optional: true,
    label: "What is the disease subtype (if applicable)"
  },
  "priorTreatmentHistory": {
    type: String,
    optional: true,
    label: "What prior treatment has the patient received?"
  },
  "complicatingConditions": {
    type: String,
    optional: true,
    label: "What complicating conditions doess the patient have?"
  },
  "currentStatus": {
    type: String,
    optional: true,
    label: "What is the current status of the patient?",
    placeholder: "lorem ipsum...",
    inputType: "textarea"
  },
  "lastFollowUpDate": {
    type: Date,
    optional: true,
    label: "What is the last date of follow up?"
  },
  "familyHistory": {
    type: String,
    optional: true,
    label: "What is the family history of cancer and related disease?"
  },
  "molecularTesting": {
    type: String,
    optional: true,
    label: "What molecular Testing has been performed including genomic testing, FISH testing or other assays?"
  },
  "actionableFindings": {
    type: String,
    optional: true,
    label: "What are the actionable findings from prior genomic analysis?"
  },
  "genomicAnalysis": {
    type: String,
    optional: true,
    label: "Did genomic analysis affect subsequent treatment? If so, how?"
  },
  "biopsySource": {
    type: String,
    optional: true,
    label: "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments."
  },
  "tumorCellFraction": {
    type: String,
    optional: true,
    label: "What is the source of the material used for sequencing? Please include biopsy location, type, size, comments."
  },
  "otherStudies": {
    type: String,
    optional: true,
    label: "What other pathology or radiology studies have been performed and what were the findings?"
  }
});

Foo.attachSchema(CkccSchema);

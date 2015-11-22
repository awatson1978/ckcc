// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

var userA = {
  fullName: "Gregory House",
  email: "house@test.org",
  username: "house",
  password: "house",
};
var userB = {
  fullName: "Allison Camron",
  email: "camron@test.org",
  username: "camron",
  password: "camron",
};
var userC = {
  fullName: "James Wilson",
  email: "wilson@test.org",
  username: "wilson",
  password: "wilson",
};
var userD = {
  fullName: "Lisa Cuddy",
  email: "cuddy@test.org",
  username: "cuddy",
  password: "cuddy",
};
var testUser = {
  fullName: "Test User",
  email: "test@test.org",
  username: "test",
  password: "test",
};

// var ckccCollaboration = {
//   _id: "ckcc",
//   collaborationName: "California Kids Cancer Comparison (Private)",
//   description: "Lorem ipsum...",
//   slug: "CKCC",
//   administrators: [userA.email],
//   collaborators: [userA.email, userB.email],
//   isUnlisted: false,
//   requiresAdmin: true
// };
// var ckccCollaboration = {
//   _id: "ckcc",
//   collaborationName: "California Kids Cancer Comparison (Private)",
//   description: "Lorem ipsum...",
//   slug: "CKCC",
//   administrators: [userA.email],
//   collaborators: [userA.email, userB.email],
//   isUnlisted: false,
//   requiresAdmin: true
// };


// var ckccStudy = {
//   name: "California Kids Cancer Comparison",
//   short_name: "CKCC",
//   public: true,
//   slug: "CKCC",
//   Questionnaires: []
// };


// // questionnaire
// var intakeQuestionnaire = {
//   questionnaireName: "CKCC Patient Intake",
//   questionnaireSearch: "Int",
//   inputs: {
//     institutionName: "Institution Name",
//     institutionId: "Institution Id",
//     participantId: "Participant ID",
//     Patient_ID: "Patient ID",
//     physicianName: "Physician Name",
//     studyName: "Study Name",
//     studyId: "Study ID",
//     patientAge: "Age",
//     patientGender: "Gender",
//     diagnosisCode: "Diagnosis Code",
//     diseaseSubtype: "Disease Subtype",
//     lastFollowUpDate: "Last Followup Date",
//   },
//   textareas: {
//     diagnosisDescription: "Diagnosis Description",
//     priorTreatmentHistory: "Prior Treatment History",
//     complicatingConditions: "Complicating Conditions",
//     currentStatus: "Current Status",
//     familyHistory: "Family History",
//     molecularTesting: "Molecular Testing",
//     actionableFindings: "Actionable Findings",
//     genomicAnalysis: "Genomic Anslysis",
//     biopsySource: "Biopsy Source",
//     tumorCellFraction: "Tumor Cell Fraction",
//     otherStudies: "Other Studies"
//   }
// };

// var intakeQuestionnaireAnswers = {
//   questionnaireName: "CKCC Patient Intake",
//   questionnaireSearch: "Int",
//   inputs: {
//     institutionName: "U.C. Santa Cruz",
//     institutionId: "UCSC",
//     participantId: "",
//     // Patient_ID: "DTB-99999",
//     physicianName: "",
//     studyName: "",
//     studyId: "",
//     patientAge: "",
//     patientGender: "",
//     diagnosisCode: "",
//     diseaseSubtype: "",
//     lastFollowUpDate: "",
//   },
//   textareas: {
//     diagnosisDescription: "",
//     priorTreatmentHistory: "",
//     complicatingConditions: "",
//     currentStatus: "",
//     familyHistory: "",
//     molecularTesting: "",
//     actionableFindings: "",
//     genomicAnalysis: "",
//     biopsySource: "",
//     tumorCellFraction: "",
//     otherStudies: ""
//   }
// };

// // patient enrollment form (new clinical data point)
// var newPatientEnrollment = {
//   questionnaireName: "CKCC Patient Intake",
//   collaborationSearch: "Int",
//   institutionName: "U.C. Santa Cruz",
//   participantId: "abc",
//   Patient_ID: "DTB-99999",
//   studyName: "CKCC",
//   patientAge: "17",
//   patientGender: "Female",
//   diagnosisDescription: "Lorem ipsum..."
// };

var rootUrl = "http://localhost:3000";

module.exports = {
  tags: ['security'],
  before: function (client){
    client
      .url("http://localhost:3000").pause(1000)
        // .callMeteorMethod('dropClinicalFormCollections')
        // .callMeteorMethod('dropUsers')
        // .callMeteorMethod('initializeUsers')
        // .callMeteorMethod('initializeSecurityScenario');
      .dropClinicalFormCollections()
      .dropUsers()
      //.initializeUsers()
      .initializeSecurityScenario();
  },
  "Anonymous User": function (client){
    var userSecurityLevel = "anonymous";

    client
      //.checkSecurity( anon,  user,  colla, rootUrl, '/route', "#elementId", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/marketing', "#marketingPage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/terms-of-use', "#termsOfUsePage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/', "#menuPage", userSecurityLevel)

        .checkSecurity( false, true,  true,  rootUrl, '/grid/collaborations', "#collaborationGrid", userSecurityLevel)
        .checkSecurity( false, true,  true,  rootUrl, '/new/collaboration', "#upsertCollaborationForm", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/studies', "#studiesListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/insert/study', "#studyUpsertPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/studies', "#studiesTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/builder', "#builderPage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/metadata', "#metadatasListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/metadata', "#metadataSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/metadata', "#metadatasTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/records', "#recordsListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/grid/records', "#recordImageGridPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/records', "#recordsSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/records', "#recordsTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/metadata/ckcc_patient_intake/new', "#metadataUpsertPage", userSecurityLevel);

      // .checkSecurity( false, false, true,  true,  rootUrl, '/user/profile', "#homePage", userSecurityLevel)
      // .checkSecurity( false, true,  true,  true,  rootUrl, '/users/list', "#homePage", userSecurityLevel)
      // .checkSecurity( false, true,  true,  true,  rootUrl, '/users/table', "#homePage", userSecurityLevel)
      // .checkSecurity( false, true,  true,  true,  rootUrl, '/users/upsert', "#homePage", userSecurityLevel)

      // .checkSecurity( false, false, false, true,  rootUrl, '/table/collaborations', "#homePage", userSecurityLevel)

      // .checkSecurity( false, false, false, true,  rootUrl, '/upsert/metadata', "#homePage", userSecurityLevel)
      //.checkSecurity( false, false, false, true,  rootUrl, '/metadata/library', "#homePage", userSecurityLevel)
      // .checkSecurity( false, false, false, true,  rootUrl, '/grid/metadata', "#metadataImageGridPage", userSecurityLevel)

      // .checkSecurity( false, false, false, true,  rootUrl, '/list/questionnaires', "#questionnairesListPage", userSecurityLevel)
      // //.checkSecurity( false, false, false, true,  rootUrl, '/questionnaires/library', "#homePage", userSecurityLevel)
      // .checkSecurity( false, false, false, true,  rootUrl, '/spreadsheet/questionnaires', "#homePage", userSecurityLevel)
      // .checkSecurity( false, false, false, true,  rootUrl, '/grid/questionnaires', "#questionnaireImageGridPage", userSecurityLevel)
      // .checkSecurity( false, false, false, true,  rootUrl, '/table/questionnaires', "#questionnairesTablePage", userSecurityLevel)
      // .checkSecurity( false, false, false, true,  rootUrl, '/upsert/questionnaire', "#homePage", userSecurityLevel)

      // .checkSecurity( false, false, false, true,  rootUrl, '/upsert/record', "#recordUpsertPage", userSecurityLevel);

  },
  "Logged In User (Test User)": function (client){
    var userSecurityLevel = "signedInUser";
    client
      .url("http://localhost:3000/entrySignIn").pause(1000)
      .signIn(testUser.email, testUser.password)

      //.checkSecurity( anon,  user,  colla, rootUrl, '/route', "#elementId", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/marketing', "#marketingPage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/terms-of-use', "#termsOfUsePage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/', "#menuPage", userSecurityLevel)

        .checkSecurity( false, true,  true,  rootUrl, '/grid/collaborations', "#collaborationGrid", userSecurityLevel)
        .checkSecurity( false, true,  true,  rootUrl, '/new/collaboration', "#upsertCollaborationForm", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/studies', "#studiesListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/insert/study', "#studyUpsertPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/studies', "#studiesTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/builder', "#builderPage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/metadata', "#metadatasListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/metadata', "#metadataSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/metadata', "#metadatasTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/records', "#recordsListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/grid/records', "#recordImageGridPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/records', "#recordsSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/records', "#recordsTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/metadata/ckcc_patient_intake/new', "#metadataUpsertPage", userSecurityLevel)

      .signOut(testUser.fullName);
  },
  "Collaborator": function (client){
    var userSecurityLevel = "collaborator";
    client
      .url("http://localhost:3000/entrySignIn").pause(1000)
      .signIn(userC.email, userC.password)

      //.checkSecurity( anon,  user,  colla, rootUrl, '/route', "#elementId", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/marketing', "#marketingPage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/terms-of-use', "#termsOfUsePage", userSecurityLevel)
        .checkSecurity( true,  true,  true,  rootUrl, '/', "#menuPage", userSecurityLevel)

        .checkSecurity( false, true,  true,  rootUrl, '/grid/collaborations', "#collaborationGrid", userSecurityLevel)
        .checkSecurity( false, true,  true,  rootUrl, '/new/collaboration', "#upsertCollaborationForm", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/studies/', "#studiesListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/insert/study', "#studyUpsertPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/studies', "#studiesTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/builder', "#builderPage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/metadata', "#metadatasListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/metadata', "#metadataSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/metadata', "#metadatasTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/list/records', "#recordsListPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/grid/records', "#recordImageGridPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/spreadsheet/records', "#recordsSpreadsheetPage", userSecurityLevel)
        .checkSecurity( false, false, true,  rootUrl, '/table/records', "#recordsTablePage", userSecurityLevel)

        .checkSecurity( false, false, true,  rootUrl, '/metadata/ckcc_patient_intake/new', "#metadataUpsertPage", userSecurityLevel)

      .signOut(userC.fullName);
  },

  "M. End": function (client){
    client.end();
  }
};
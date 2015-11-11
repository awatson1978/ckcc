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
  email: "allison@test.org",
  username: "allison",
  password: "allison",
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


var ckccCollaboration = {
  collaborationName: "California Kids Cancer Comparison (Private)",
  description: "Lorem ipsum...",
  slug: "CKCC",
  administrators: [userA.email],
  collaborators: [userA.email, userB.email],
  isUnlisted: false,
  requiresAdmin: true
};

var ckccStudy = {
  name: "California Kids Cancer Comparison",
  short_name: "ckcc",
  description: "California Kids Cancer Comparison",
  public: true,
  slug: "CKCC",
  Questionnaires: []
};


// questionnaire
var intakeQuestionnaire = {
  questionnaireName: "CKCC Patient Intake",
  questionnaireSearch: "Int",
  inputs: {
    institutionName: "Institution Name",
    institutionId: "Institution Id",
    participantId: "Participant ID",
    Patient_ID: "Patient ID",
    physicianName: "Physician Name",
    studyName: "Study Name",
    studyId: "Study ID",
    patientAge: "Age",
    patientGender: "Gender",
    diagnosisCode: "Diagnosis Code",
    diseaseSubtype: "Disease Subtype",
    lastFollowUpDate: "Last Followup Date",
  },
  textareas: {
    diagnosisDescription: "Diagnosis Description",
    priorTreatmentHistory: "Prior Treatment History",
    complicatingConditions: "Complicating Conditions",
    currentStatus: "Current Status",
    familyHistory: "Family History",
    molecularTesting: "Molecular Testing",
    actionableFindings: "Actionable Findings",
    genomicAnalysis: "Genomic Anslysis",
    biopsySource: "Biopsy Source",
    tumorCellFraction: "Tumor Cell Fraction",
    otherStudies: "Other Studies"
  }
};

var intakeQuestionnaireAnswers = {
  questionnaireName: "CKCC Patient Intake",
  questionnaireSearch: "Int",
  inputs: {
    institutionName: "U.C. Santa Cruz",
    institutionId: "UCSC",
    participantId: "",
    // Patient_ID: "DTB-99999",
    physicianName: "",
    studyName: "",
    studyId: "",
    patientAge: "",
    patientGender: "",
    diagnosisCode: "",
    diseaseSubtype: "",
    lastFollowUpDate: "",
  },
  textareas: {
    diagnosisDescription: "",
    priorTreatmentHistory: "",
    complicatingConditions: "",
    currentStatus: "",
    familyHistory: "",
    molecularTesting: "",
    actionableFindings: "",
    genomicAnalysis: "",
    biopsySource: "",
    tumorCellFraction: "",
    otherStudies: ""
  }
};

// patient enrollment form (new clinical data point)
var newPatientEnrollment = {
  questionnaireName: "CKCC Patient Intake",
  collaborationSearch: "Int",
  institutionName: "U.C. Santa Cruz",
  participantId: "abc",
  Patient_ID: "DTB-99999",
  studyName: "CKCC",
  patientAge: "17",
  patientGender: "Female",
  diagnosisDescription: "Lorem ipsum..."
};

module.exports = {
  tags: ['collaborations'],
  before: function (client){
    client
      .url("http://localhost:3000").pause(1000)
      .dropCollaborations();
  },
  "A. Signing In UserA": function (client) {

    client
      .url("http://localhost:3000")
      .resizeWindow(1200, 1024)

    .verify.elementPresent("#usernameLink")
      .click("#usernameLink").pause(1000)
      .signIn(userA.email, userA.password)
      .verify.elementPresent("#collaborationsTile")
      .click("#collaborationsTile").pause(3000);
  },
  "B. UserA Can Review Collaborations": function (client) {
    client
      .reviewCollaborationGrid();
  },
  "C. UserA Can Add a Collaboration": function (client) {
    client
      .click("#addCollaborationButton").pause(1000)
      .reviewUpsertCollaboration()
      .upsertCollaboration(ckccCollaboration)
      .pause(1000)
      .reviewCollaborationGrid(ckccCollaboration)
      .verify.elementPresent("#globalSearchBar")
        .clearValue('#globalSearchBar')
        .setValue('#globalSearchBar', ckccCollaboration.slug)
        .click("#collaborationGridElements .collaboration:nth-child(1)")
      .reviewUpsertCollaboration(ckccCollaboration);
  },
  "D. UserA Can Add a Study": function (client) {
    client
      .click("#navbarTitle").pause(500)
      .click("#studiesTile").pause(500)
      .reviewStudiesList()
      .click("#newStudyLink").pause(500)
      .reviewUpsertStudy()
      .upsertStudy(ckccStudy)
      .reviewStudiesList(ckccStudy)
      .click("#studiesListPage #studiesList .studyItem:nth-child(1)").pause(500)
      .reviewUpsertStudy(ckccStudy);

      //// need to add these back in and test for study editing
      // .upsertStudy(ckccStudy)
      // .reviewStudiesList(ckccStudy)
  },

  "E. UserA Can Design a Questionnaire and Add it to a Study": function (client) {
    client
      .click("#navbarTitle").pause(500)
      .click("#formBuilderTile").pause(500)
      .reviewFormDesigner()
      .buildForm(intakeQuestionnaire)

      .verify.elementPresent("#navbarTitle")
      .click("#navbarTitle").pause(500)

      .verify.elementPresent("#studiesTile")
      .click("#studiesTile").pause(500)

      .verify.elementPresent("#studiesList .studyItem:nth-child(1)")
      .click("#studiesList .studyItem:nth-child(1)").pause(500)

      .verify.elementPresent("#scrollStudiesLink")
        .click("#scrollStudiesLink").pause(300)

      .verify.elementPresent("input[name='Questionnaires.0']")
        .click("input[name='Questionnaires.0']").pause(500)

      .verify.elementPresent("#metadataModalSearchInput")
      .verify.visible("#metadataModalSearchInput")
        .clearValue('#metadataModalSearchInput')
        .setValue('#metadataModalSearchInput', intakeQuestionnaire.questionnaireSearch)

        .verify.elementPresent("#metadataPicklistModal .metadataPicklist .metadataRow:nth-child(1)")
        .verify.visible("#metadataPicklistModal .metadataPicklist .metadataRow:nth-child(1)")
        .verify.containsText("#metadataPicklistModal .metadataPicklist .metadataRow:nth-child(1) .commonNameText", intakeQuestionnaire.questionnaireName)
        .click("#metadataPicklistModal .metadataPicklist .metadataRow:nth-child(1)").pause(500)

        //.verify.elementPresent("input[name='Questionnaires.0']")
        //  .verify.attributeEquals("input[name='Questionnaires.0']", "value", intakeQuestionnaire.questionnaireName)

        .verify.elementPresent("#saveStudyLink")
        .click("#saveStudyLink").pause(500);

  },

  "F. UserA Can complete the Study Questionnaire": function (client) {
    client
      .click("#navbarTitle").pause(500)
      .click("#metadataTile").pause(500)

      .verify.elementPresent("#metadataSearchInput")
      .clearValue('#metadataSearchInput')
      .setValue('#metadataSearchInput', intakeQuestionnaireAnswers.questionnaireSearch)
      .click("#metadatasList .metadataItem:nth-child(1) .newLink").pause(500)

      .reviewPatientIntakeForm()
      .upsertPatientIntakeForm(newPatientEnrollment)
      .pause(3000);
  },
  "G. View Questionnaires associated with a Collaboration": function (client) {
    client
      .reviewRecordsList(newPatientEnrollment)
      .click("#recordsList .recordItem:nth-child(1)")
      .reviewPatientIntakeForm(newPatientEnrollment)
      .signOut(userA.fullName);
  },
  "H. UserC Requests To Join Collaboration": function (client) {
    client
      .signIn(userC.email, userC.password)
      .verify.containsText("#usernameLink", userC.fullName)
      .click("#collaborationsTile").pause(1000)
      .canSeeCollaborationInList(userC, ckccCollaboration)

      .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h6")
      .verify.containsText("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h6", "Users require administrator approval")

      .canNotAccessCollaboration(userC, ckccCollaboration)
      .requestAccessToPrivateCollaboration(userC, ckccCollaboration)
      .signOut(userC.fullName);
  },
  "I. UserA Grants Access to UserC": function (client) {
    client
      .signIn(userA.email, userA.password)
      .verify.containsText("#usernameLink", userA.fullName)
      .click("#collaborationsTile").pause(1000)
      .canGrantCollaborationAccess()
      .grantsCollaboration(userC.email)
      .signOut(userA.fullName).pause(1000);
  },
  "J. UserC Can Access Collaboration": function (client) {
    client
      .signIn(userC.email, userC.password)
      .verify.containsText("#usernameLink", userC.fullName)
      .click("#collaborationsTile").pause(1000)

      .canAccessCollaboration(userC.email, ckccCollaboration)
      .signOut(userC.fullName);
  },
  "K. UserA Denies Access To UserB": function (client) {
    client
      .signIn(userA.email, userA.password)
      .verify.containsText("#usernameLink", userA.fullName)
      .click("#collaborationsTile").pause(1000)

      .click("#collaborationGrid .collaboration:nth-child(1)").pause(1000)
      //.removeNthCollaborator(userB.email, 3)
      .clearValue('#addCollaborationForm input[name="collaborators"]')
      .setValue('#addCollaborationForm input[name="collaborators"]', ckccCollaboration.collaborators)

      .verify.elementPresent("#saveCollaborationButton")
      .click("#saveCollaborationButton").pause(1000)

      .signOut(userA.fullName);
  },
  "L. UserC Cant See Collaboration": function (client) {
    client
      .signIn(userC.email, userC.password)
      .verify.containsText("#usernameLink", userC.fullName)
      .click("#collaborationsTile").pause(1000)

      .canNotAccessCollaboration(userC, ckccCollaboration)

      .signOut(userC.fullName);
  },
  "M. End": function (client){
    client.end();
  }
};

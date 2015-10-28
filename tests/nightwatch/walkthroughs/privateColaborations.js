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

// collaboration
var ckccCollaboration = {
  collaborationName: "California Kids Cancer Comparison (Private)",
  description: "Lorem ipsum...",
  slug: "CKCC",
  administrators: [userA.email],
  collaborators: [userA.email, userB.email],
  isUnlisted: false,
  requiresAdmin: true
};

// questionnaire
var intakeQuestionnaire = {
  questionnaireName: "CKCC Patient Intake",
  questionnaireSearch: "Int",
  institutionName: "U.C. Santa Cruz",
  institutionId: "UCSC",
  collaborationId: "CKCC",
  collaborationName: "CKCC"
};

// patient enrollment form (new clinical data point)
var newPatientEnrollment = {
  questionnaireName: "CKCC Patient Intake",
  collaborationSearch: "Int",
  institutionName: "U.C. Santa Cruz",
  participantId: "abc",
  studyName: "CKCC",
  patientAge: "17",
  patientGender: "Female",
  diagnosisDescription: "Lorem ipsum..."
};

module.exports = {
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
  "D. UserA Can Add a Questionnaire": function (client) {
    client
      .click("#newQuestionnaireBtn").pause(1000)
      .reviewUpsertQuestionnare()
      .upsertQuestionnaire(intakeQuestionnaire)
      .pause(1000)
      .reviewQuestionnairesList(intakeQuestionnaire, true);
  },
  "E. UserA Can complete a Questionnaire": function (client) {
    client
      .reviewPatientIntakeForm()
      .upsertPatientIntakeForm(newPatientEnrollment)
      .pause(3000);
  },
  "F. View Questionnaires associated with a Collaboration": function (client) {
    client
      .reviewRecordsList(newPatientEnrollment)
      .click("#recordsList .recordItem:nth-child(1)")
      .reviewPatientIntakeForm(newPatientEnrollment)
      .signOut(userA.fullName);
  },
  "G. UserC Requests To Join Collaboration": function (client) {
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
  "H. UserA Grants Access to UserC": function (client) {
    client
      .signIn(userA.email, userA.password)
      .verify.containsText("#usernameLink", userA.fullName)
      .click("#collaborationsTile").pause(1000)
      .canGrantCollaborationAccess()
      .grantsCollaboration(userC.email)
      .signOut(userA.fullName).pause(1000);
  },
  "I. UserC Can Access Collaboration": function (client) {
    client
      .signIn(userC.email, userC.password)
      .verify.containsText("#usernameLink", userC.fullName)
      .click("#collaborationsTile").pause(1000)

      .canAccessCollaboration(userC.email, ckccCollaboration)
      .signOut(userC.fullName);
  },
  "J. UserA Denies Access To UserB": function (client) {
    client
      .signIn(userA.email, userA.password)
      .verify.containsText("#usernameLink", userA.fullName)
      .click("#collaborationsTile").pause(1000)

      .click("#collaborationGrid .collaboration:nth-child(1)").pause(1000)
      //.removeNthCollaborator(userB.email, 3)
      .clearValue('#addCollaborationForm input[name="collaborators"]')
      .setValue('#addCollaborationForm input[name="collaborators"]', ckccCollaboration.collaborators)

      .verify.elementPresent("#saveFormButton")
      .click("#saveFormButton").pause(1000)

      .signOut(userA.fullName);
  },
  "K. UserC Cant See Collaboration": function (client) {
    client
      .signIn(userC.email, userC.password)
      .verify.containsText("#usernameLink", userC.fullName)
      .click("#collaborationsTile").pause(1000)

      .canNotAccessCollaboration(userC, ckccCollaboration)

      .signOut(userC.fullName);
  },
  "End": function (client){
    client.end();
  }
};

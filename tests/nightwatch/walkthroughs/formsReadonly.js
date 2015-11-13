var userA = {
  fullName: "Gregory House",
  email: "house@test.org",
  username: "house",
  password: "house",
};


module.exports = {
  tags: ['forms', 'wcdt'],
  before: function (client){
    client
      .url("http://localhost:3000").pause(1000)
      //.dropCollaborations();
  },
  "SignIn" : function (client) {
    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 1200)
      .reviewMainLayout()

      .verify.elementPresent("#usernameLink")
        .click("#usernameLink").pause(1000)
        .signIn(userA.email, userA.password);
  },
  "Clinical Info Form" : function (client) {
      client
        .navigateToForm('Cli')
        .reviewPageTitle("Clinical Info")
        .reviewClinicalInfoForm();
  },
  "Biopsy Form" : function (client) {
    client
      .navigateToForm('C B')
      .reviewPageTitle("SU2C Biopsy")
      .reviewBiopsyForm();
  },
  "Followup" : function (client) {
    client
      .navigateToForm('Fol')
      .reviewPageTitle("Followup")
      .reviewFollowUpForm();
  },
  "Subsequent Treatment" : function (client) {
    client
      .navigateToForm('Sub')
      .reviewPageTitle("SU2C Subsequent Treatment")
      .reviewSubsequentTreatmentForm();
  },
  "Prior Treatment" : function (client) {
    client
      .navigateToForm('C Pr')
      .reviewPageTitle("SU2C Prior Treatment")
      .reviewPriorTreatmentForm();
  },
  "Prostate Diagnosis" : function (client) {
    client
      .navigateToForm('Pros')
      .reviewPageTitle("Prostate Diagnosis")
      .reviewProstateDiagnosisForm();
  },


  "Blood Labs" : function (client) {
    client
      .navigateToForm('d L')
      .reviewPageTitle("Blood Labs")
      .reviewBloodLabsForm();
  },
  "Demographics" : function (client) {
    client
      .navigateToForm('Dem')
      .reviewPageTitle("Demographics")
      .reviewDemographicsForm();
  },
  "Weight" : function (client) {
    client
      .navigateToForm('Wei')
      .reviewPageTitle("Weight")
      .reviewWeightForm();
  },
  "GU Disease Assessment" : function (client) {
    client
      .navigateToForm('GU ')
      .reviewPageTitle("GU Disease Assessment")
      .reviewDiseaseAssessmentForm();
  },
  "Specimen" : function (client) {
    client
      .navigateToForm('C S')
      .reviewPageTitle("SU2C Specimen")
      .reviewSpecimenForm();
  },
  "Patient Enrollment" : function (client) {
    client
      .navigateToForm('Enr')
      .reviewPageTitle("Patient Enrollement")
      .reviewPatientEnrollmentForm();
  },
  "Histological Research" : function (client) {
    client
      .navigateToForm('l R')
      .reviewPageTitle("Histological Research")
      .reviewHistologyResearchForm();
  },
  // "Tissue Specimen" : function (client) {
  //   client
  //     .navigateToForm('Tis')
  //     .reviewPageTitle("Tissue Specimen")
  //     .reviewTissueSpecimenForm();
  // },
  "Blood Specimen" : function (client) {
    client
      .navigateToForm('d S')
      .reviewPageTitle("Blood Specimen Form")
      .reviewBloodSpecimenForm();
  },
  // "Histology Assessment" : function (client) {
  //   client
  //     .navigateToForm('His')
  //     .reviewPageTitle("Histological Assessment")
  //     .reviewHistologyAssessmentForm();
  // },
  "Laser Capture Microdissection" : function (client) {
    client
      .navigateToForm('Las')
      .reviewPageTitle("Laser Capture Microdissection")
      .reviewLaserCaptureForm();
  },
  "RNA Sequence Completion" : function (client) {
    client
      .navigateToForm('RNA')
      .reviewPageTitle("RNA Sequence Completion")
      .reviewRnaSequenceForm();
  },
  "Pathology Form" : function (client) {
    client
      .navigateToForm('Path')
      .reviewPageTitle("Pathology Report")
      .reviewPathologyForm();
  },
  "SignOut" : function (client) {
    client
      .signOut(userA.fullName)
      .end();
  }
};

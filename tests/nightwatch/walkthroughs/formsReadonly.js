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
        .sectionBreak("Clinical Info")
        .navigateToForm('Clinical Info')
        .reviewPageTitle("Clinical Info")
        .reviewClinicalInfoForm()

      // .sectionBreak("Biopsy")
      // .navigateToForm('#SU2C_Biopsy_V3Button')
      // .reviewPageTitle("SU2C_Biopsy_V3")
      // .reviewBiopsyForm()
      //
      // .sectionBreak("Follow Up")
      // .navigateToForm('#FollowupButton')
      // .reviewPageTitle("Followup")
      // .reviewFollowUpForm()
      //
      // .sectionBreak("Subsequent Treatment")
      // .navigateToForm('#SU2C_Subsequent_Treatment_V1Button')
      // .reviewPageTitle("SU2C_Subsequent_Treatment_V1")
      // .reviewSubsequentTreatmentForm()
      //
      // .sectionBreak("Prior Treatment")
      // .navigateToForm('#SU2C_Prior_TX_V3Button')
      // .reviewPageTitle("SU2C_Prior_TX_V3")
      // .reviewPriorTreatmentForm()
      //
      // .sectionBreak("Prostate Diagnosis")
      // .navigateToForm('#Prostate_Diagnosis_V4Button')
      // .reviewPageTitle("Prostate_Diagnosis_V4")
      // .reviewProstateDiagnosisForm()
      //
      // .sectionBreak("Blood Labs")
      // .navigateToForm('#Blood_Labs_V2Button')
      // .reviewPageTitle("Blood_Labs_V2")
      // .reviewBloodLabsForm()
      //
      // .sectionBreak("Demographics")
      // .navigateToForm('#DemographicsButton')
      // .reviewPageTitle("Demographics")
      // .reviewDemographicsForm()
      //
      // .sectionBreak("Weight")
      // .navigateToForm('#ECOG_Weight_V3Button')
      // .reviewPageTitle("ECOG_Weight_V3")
      // .reviewWeightForm()
      //
      // .sectionBreak("Disease Assessment")
      // .navigateToForm('#GU_Disease_Assessment_V3Button')
      // .reviewPageTitle("GU_Disease_Assessment_V3")
      // .reviewDiseaseAssessmentForm()
      //
      // .sectionBreak("Prior Ca Treatment")
      // .sectionBreak("Biopsy AE")
      // .navigateToForm('#SU2C_Biopsy_AE_V1Button')
      // .reviewPageTitle("SU2C_Biopsy_AE_V1")
      // .reviewBiopsyAeForm()
      //
      // .sectionBreak("Prior Ca Treatment")
      // .navigateToForm('#SU2C_Pr_Ca_Tx_Sumry_V2Button')
      // .reviewPageTitle("SU2C_Pr_Ca_Tx_Sumry_V2")
      // .reviewPriorCaTreatmentForm()
      //
      // .sectionBreak("Specimen")
      // .navigateToForm('#SU2C_Specimen_V1Button')
      // .reviewPageTitle("SU2C_Specimen_V1")
      // .reviewSpecimenForm()
      //
      // .sectionBreak("Patient Enrollment")
      // .navigateToForm('#Patient_Enrollment_formButton')
      // .reviewPageTitle("Patient_Enrollment_form")
      // .reviewPatientEnrollmentForm()
      //
      // .sectionBreak("Histology Research")
      // .navigateToForm('#Histology_ResearchButton')
      // .reviewPageTitle("Histology_Research")
      // .reviewHistologyResearchForm()
      //
      // .sectionBreak("Tissue Specimen")
      // .navigateToForm('#Tissue_Specimen_formButton')
      // .reviewPageTitle("Tissue_Specimen_form")
      // .reviewTissueSpecimenForm()
      //
      // .sectionBreak("Blood Specimen")
      // .navigateToForm('#Blood_Specimen_formButton')
      // .reviewPageTitle("Blood_Specimen_form")
      // .reviewBloodSpecimenForm()
      //
      // .sectionBreak("Histology Assessment")
      // .navigateToForm('#Histological_Assessment_formButton')
      // .reviewPageTitle("Histological_Assessment_form")
      // .reviewHistologyAssessmentForm()
      //
      // .sectionBreak("Laser Capture Microdissection")
      // .navigateToForm('#Laser_Capture_MicrodissectionButton')
      // .reviewPageTitle("Laser_Capture_Microdissection")
      // .reviewLaserCaptureForm()
      //
      // .sectionBreak("RNA Sequence Completion")
      // .navigateToForm('#RNASeq_completion_formButton')
      // .reviewPageTitle("RNASeq_completion_form")
      // .reviewRnaSequenceForm()
      //
      // .sectionBreak("Pathology")
      // .navigateToForm('#Pathology_formButton')
      // .reviewPageTitle("Pathology_form")
      // .reviewPathologyForm()
      //
      // .signOut()
      // .reviewSignInPage()
      .end();
  }
};

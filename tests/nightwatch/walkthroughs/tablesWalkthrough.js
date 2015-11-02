
module.exports = {
  "Tables Walkthrough" : function (client) {
    client
      .url("http://localhost:3000/CRF")
      .resizeWindow(1024, 1200)
      .reviewMainLayout()
      .reviewSignInPage()
      .signIn("house@test.org","house")

      .sectionBreak("Clinical Info")
      .selectFromSidebar('#Clinical_InfoButton')
      .reviewPageTitle("Clinical_Info")
      .reviewClinicalInfoTable()

      .sectionBreak("Biopsy")
      .selectFromSidebar('#SU2C_Biopsy_V3Button')
      .reviewPageTitle("SU2C_Biopsy_V3")
      .reviewBiopsyTable()

      .sectionBreak("Follow Up")
      .selectFromSidebar('#FollowupButton')
      .reviewPageTitle("Followup")
      .reviewFollowUpTable()

      .sectionBreak("Subsequent Treatment")
      .selectFromSidebar('#SU2C_Subsequent_Treatment_V1Button')
      .reviewPageTitle("SU2C_Subsequent_Treatment_V1")
      .reviewSubsequentTreatmentTable()

      .sectionBreak("Prior Treatment")
      .selectFromSidebar('#SU2C_Prior_TX_V3Button')
      .reviewPageTitle("SU2C_Prior_TX_V3")
      .reviewPriorTreatmentTable()

      .sectionBreak("Prostate Diagnosis")
      .selectFromSidebar('#Prostate_Diagnosis_V4Button')
      .reviewPageTitle("Prostate_Diagnosis_V4")
      .reviewProstateDiagnosisTable()

      .sectionBreak("Blood Labs")
      .selectFromSidebar('#Blood_Labs_V2Button')
      .reviewPageTitle("Blood_Labs_V2")
      .reviewBloodLabsTable()

      .sectionBreak("Demographics")
      .selectFromSidebar('#DemographicsButton')
      .reviewPageTitle("Demographics")
      .reviewDemographicsTable()

      .sectionBreak("Weight")
      .selectFromSidebar('#ECOG_Weight_V3Button')
      .reviewPageTitle("ECOG_Weight_V3")
      .reviewWeightTable()

      .sectionBreak("Disease Assessment")
      .selectFromSidebar('#GU_Disease_Assessment_V3Button')
      .reviewPageTitle("GU_Disease_Assessment_V3")
      .reviewDiseaseAssessmentTable()

      .sectionBreak("Biopsy AE")
      .selectFromSidebar('#SU2C_Biopsy_AE_V1Button')
      .reviewPageTitle("SU2C_Biopsy_AE_V1")
      .reviewBiopsyAeTable()

      .sectionBreak("Prior Ca Treatment")
      .selectFromSidebar('#SU2C_Pr_Ca_Tx_Sumry_V2Button')
      .reviewPageTitle("SU2C_Pr_Ca_Tx_Sumry_V2")
      .reviewPriorCaTreatmentTable()

      .sectionBreak("Specimen")
      .selectFromSidebar('#SU2C_Specimen_V1Button')
      .reviewPageTitle("SU2C_Specimen_V1")
      .reviewSpecimenTable()

      .sectionBreak("Patient Enrollment")
      .selectFromSidebar('#Patient_Enrollment_formButton')
      .reviewPageTitle("Patient_Enrollment_form")
      .reviewPatientEnrollmentTable()

      .sectionBreak("Histology Research")
      .selectFromSidebar('#Histology_ResearchButton')
      .reviewPageTitle("Histology_Research")
      .reviewHistologyResearchTable()

      .sectionBreak("Tissue Specimen")
      .selectFromSidebar('#Tissue_Specimen_formButton')
      .reviewPageTitle("Tissue_Specimen_form")
      .reviewTissueSpecimenTable()

      .sectionBreak("Blood Specimen")
      .selectFromSidebar('#Blood_Specimen_formButton')
      .reviewPageTitle("Blood_Specimen_form")
      .reviewBloodSpecimenTable()

      .sectionBreak("Histology Assessment")
      .selectFromSidebar('#Histological_Assessment_formButton')
      .reviewPageTitle("Histological_Assessment_form")
      .reviewHistologyAssessmentTable()

      .sectionBreak("Laser Capture Microdissection")
      .selectFromSidebar('#Laser_Capture_MicrodissectionButton')
      .reviewPageTitle("Laser_Capture_Microdissection")
      .reviewLaserCaptureTable()

      .sectionBreak("RNA Sequence Completion")
      .selectFromSidebar('#RNASeq_completion_formButton')
      .reviewPageTitle("RNASeq_completion_form")
      .reviewRnaSequenceTable()

      .sectionBreak("Pathology")
      .selectFromSidebar('#Pathology_formButton')
      .reviewPageTitle("Pathology_form")
      .reviewPathologyTable()

      .signOut()
      .reviewSignInPage()
      .end();
  }
};

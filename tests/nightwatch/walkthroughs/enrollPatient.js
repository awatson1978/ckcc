var patientEnrollmentRecord = {
  patientId: 'DTB-123',
  institution: "OHSU",
  baselineSampleId: "123A",
  baselineBiopsyDate: "01/01/2015",
  baselineBiopsySite: "Bone",
  progressionSampleId: "123B",
  progressionBiopsyDate: "01/06/2015",
  progressionBiopsySite: "Bone"
}

var screenshotDir = "tests/nightwatch/screenshots/desktop/interactiveForms/";


module.exports = {
  "Patient Enrollment Form" : function (client) {
    client
      .url("http://localhost:3000/CRF")
      .resizeWindow(1024, 1200)
      .reviewMainLayout()
      .saveScreenshot(screenshotDir + "A-MainLayout.png")
      .reviewSignInPage()
      .saveScreenshot(screenshotDir + "B-SignIn.png")
      .signIn("house@test.org","house")
      .saveScreenshot(screenshotDir + "C-HomePage.png")

      .selectFromSidebar('#Patient_Enrollment_formButton')
      .reviewPageTitle("Patient_Enrollment_form")
      .saveScreenshot(screenshotDir + "D-PatientEnrollmentForm.png")
      .reviewPatientEnrollmentForm()
      .completePatientEnrollmentForm(patientEnrollmentRecord)
      .reviewPatientEnrollmentRow(patientEnrollmentRecord, 1)

      .signOut()
      .reviewSignInPage()
      .end();
  }
};

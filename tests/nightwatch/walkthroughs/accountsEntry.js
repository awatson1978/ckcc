var screenshotDir = "tests/nightwatch/screenshots/desktop/accountsEntry/";


module.exports = {
  "Accounts Entry" : function (client) {
    client
      .url("http://localhost:3000/CRF")
      .resizeWindow(1024, 768)
      .reviewMainLayout()
      .saveScreenshot(screenshotDir + "A-LandingPage.png")

      .reviewSignInPage()
      .saveScreenshot(screenshotDir + "B-SignInPage.png")
      .signIn("house@test.org","house")

      .saveScreenshot(screenshotDir + "C-CohortOverview.png")
      .verify.elementPresent(".title")
      .verify.containsText(".title", "Cohort Overview")

      .signOut()
      .saveScreenshot(screenshotDir + "D-SignedOut.png")
      .reviewSignInPage()
      .end();
  },
  "Ingest Oncore Datafiles" : function (client) {
    client
      .url("http://localhost:3000/CRF")
      .resizeWindow(1024, 768)
      .reviewMainLayout()
      .reviewSignInPage()
      .signIn("house@test.org","house")

      .verify.elementPresent(".title")
      .verify.containsText(".title", "Cohort Overview")

      .verify.elementPresent("#dashboard")
      .verify.elementPresent("#dashboard svg")
      .verify.elementNotPresent("#dashboard svg text")
      .verify.elementNotPresent("#dashboard svg rect")


      .url("http://localhost:3000/CRF/ingestOncore").pause(2000)
      .verify.elementPresent("body")
      .verify.containsText("body", "Ingesting Oncore Finished")

      .url("http://localhost:3000/CRF").pause(1000)
      .verify.elementPresent("#dashboard")
      .verify.elementPresent("#dashboard svg text")
      .verify.elementPresent("#dashboard svg rect")

      .signOut()
      .reviewSignInPage()
      .end();
  }
};

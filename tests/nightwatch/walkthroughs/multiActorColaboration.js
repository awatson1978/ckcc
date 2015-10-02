// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api


module.exports = {
  "MultiActor Collaboration" : function (client) {

    var usernameA = "house";
    var usernameB = "camron";

    var emailA = "house@test.org";
    var emailB = "camron@test.org";

    var passwordA = "house";
    var passwordB = "camron";

    var collaborationName = "My Foo Collaboration";
    var collaborationDescription = "Lorem Ipsum...";

    var newPostTitle = "This Be a Post";
    var newPostDescription = "Words, words, words...";
    var newPostUrl = "http://www.wikipedia.com";

    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)

      .sectionBreak("A. Signing In UserA")
      .verify.elementPresent("#signInLink")
      .signIn(usernameA, usernameA)
      .verify.elementPresent("#collaborationListButton")
      .click("#collaborationListButton").pause(3000)



      .sectionBreak("B. UserA Can Review Collaborations")
      .reviewCollaborationListPage(collaborationName)



      .sectionBreak("C. UserA Can Add a Collaboration")
        .click("#addCollaborationButton").pause(500)
        .reviewAddCollaborationPage(false, false, false, false, false, false, false)
        .addCollaboration(collaborationName, collaborationDescription, false, emailA, emailA, true, "")
        .pause(1000)
      .listOfCollaborationsContains(collaborationName, collaborationDescription)



      .sectionBreak("D. UserA Can Post To Collaboration")
        .verify.elementPresent("#newPostLink")
        .click("#newPostLink").pause(1000)
        .waitForElementVisible("#postSubmitPage", 3000)
        .reviewPostSubmitPage()
        .submitPost(newPostTitle, newPostDescription, newPostUrl, collaborationName)
        .pause(3000)



      .sectionBreak("E. View Collaboration Posts")
        .click("#collaborationListButton").pause(500)
        .verify.elementPresent("#collaborationListPage")
        .verify.elementPresent("#collaborationsList")
        .click("#collaborationsList .collaboration:nth-child(1)").pause(300)
        .collaborationHasPost(collaborationName, newPostTitle)
        .canSeePost(newPostTitle)
      .signOut(usernameA)



      .sectionBreak("F. UserB Requests To Join Collaboration")
        .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(500)
        .canNotSeeCollaboration()
        .canRequestCollaboration(usernameB)
        .requestsCollaboration()
      .signOut(usernameB)



      .sectionBreak("G. UserA Grants Access to UserB")
      .signIn(usernameA, passwordA)
        .confirmUserIs(usernameA)
        .click("#collaborationListButton").pause(500)
        .canGrantCollaborationAccess()
        .grantsCollaboration(emailB)
      .signOut(usernameA).pause(500)


      //============================================================================================


      .sectionBreak("H. UserB Can Access Collaboration")
      .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(500)
        .canNotGrantCollaborationAccess()
        .click("#collaborationsList .collaboration:nth-child(1)").pause(1000)
        .acceptAlert().pause(500)
        .canSeePost(newPostTitle)
      .signOut(usernameB)



      .sectionBreak("I. UserA Denies Access To UserB")
      .signIn(usernameA, passwordA)
        .confirmUserIs(usernameA)
        .click("#collaborationListButton").pause(500)
        .click("#collaborationsList .collaboration:nth-child(1) .editCollaborationButton").pause(500)
        .removeNthCollaborator(emailB, 3)
        .click("#collaborationsList .collaboration:nth-child(1) .editCollaborationButton").pause(500)
        .removeNthCollaborator(usernameB, 2)
      .signOut(usernameA)



      .sectionBreak("J. UserB Cant See Collaboration")
      .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(1000)
        .canNotSeeCollaboration(usernameB)
        .acceptAlert().pause(1000)
      .signOut(usernameB)


      .end();
  }
};

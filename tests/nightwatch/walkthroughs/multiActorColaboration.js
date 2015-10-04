// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

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


module.exports = {
  "A. Signing In UserA" : function (client) {

    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)

      .verify.elementPresent("#signInLink")
      .signIn(usernameA, usernameA)
      .verify.elementPresent("#collaborationListButton")
      .click("#collaborationListButton").pause(3000)

  },
  "B. UserA Can Review Collaborations" : function (client) {

      .sectionBreak("")
      .reviewCollaborationListPage(collaborationName)

  },
  "C. UserA Can Add a Collaboration" : function (client) {

        .click("#addCollaborationButton").pause(500)
        .reviewAddCollaborationPage(false, false, false, false, false, false, false)
        .addCollaboration(collaborationName, collaborationDescription, false, emailA, emailA, true, "")
        .pause(1000)
      .listOfCollaborationsContains(collaborationName, collaborationDescription)


  },
  "D. UserA Can Post To Collaboration" : function (client) {

        .verify.elementPresent("#newPostLink")
        .click("#newPostLink").pause(1000)
        .waitForElementVisible("#postSubmitPage", 3000)
        .reviewPostSubmitPage()
        .submitPost(newPostTitle, newPostDescription, newPostUrl, collaborationName)
        .pause(3000)


  },
  "E. View Collaboration Posts" : function (client) {

        .click("#collaborationListButton").pause(500)
        .verify.elementPresent("#collaborationListPage")
        .verify.elementPresent("#collaborationsList")
        .click("#collaborationsList .collaboration:nth-child(1)").pause(300)
        .collaborationHasPost(collaborationName, newPostTitle)
        .canSeePost(newPostTitle)
      .signOut(usernameA)

  },
  "F. UserB Requests To Join Collaboration" : function (client) {

        .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(500)
        .canNotSeeCollaboration()
        .canRequestCollaboration(usernameB)
        .requestsCollaboration()
      .signOut(usernameB)


  },
  "G. UserA Grants Access to UserB" : function (client) {

      .signIn(usernameA, passwordA)
        .confirmUserIs(usernameA)
        .click("#collaborationListButton").pause(500)
        .canGrantCollaborationAccess()
        .grantsCollaboration(emailB)
      .signOut(usernameA).pause(500)

  },
  "H. UserB Can Access Collaboration" : function (client) {

      .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(500)
        .canNotGrantCollaborationAccess()
        .click("#collaborationsList .collaboration:nth-child(1)").pause(1000)
        .acceptAlert().pause(500)
        .canSeePost(newPostTitle)
      .signOut(usernameB)


  },
  "I. UserA Denies Access To UserB" : function (client) {

      .signIn(usernameA, passwordA)
        .confirmUserIs(usernameA)
        .click("#collaborationListButton").pause(500)
        .click("#collaborationsList .collaboration:nth-child(1) .editCollaborationButton").pause(500)
        .removeNthCollaborator(emailB, 3)
        .click("#collaborationsList .collaboration:nth-child(1) .editCollaborationButton").pause(500)
        .removeNthCollaborator(usernameB, 2)
      .signOut(usernameA)


  },
  "J. UserB Cant See Collaboration" : function (client) {

      .signIn(usernameB, passwordB)
        .confirmUserIs(usernameB)
        .click("#collaborationListButton").pause(1000)
        .canNotSeeCollaboration(usernameB)
        .acceptAlert().pause(1000)
      .signOut(usernameB)


      .end();
  }
};

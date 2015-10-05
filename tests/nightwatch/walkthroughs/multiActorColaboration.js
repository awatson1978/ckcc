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









// -------------------------------------
// BASIC SCRIPT

// Signing In UserA
// UserA Can Review Collaborations
// UserA Can Add a Collaboration
// UserA Can Post To Collaboration
// View Collaboration Posts
// UserB Requests To Join Collaboration
// UserA Grants Access to UserB
// UserB Can Access Collaboration
// UserA Denies Access To UserB
// UserB Cant See Collaboration


// -------------------------------------
// VERIFICATION SCRIPT


// When Not Signed In, UserA
  // can List and View Public Collaborations 
  // can List Private Collaborations
  // can't View a Private Collaboration
  // can't Add, Update or Delete any Collaborations

  // can List and View the Foos of a Public Collaboration
  // can't Add, Update, or Delete the Foos of a Public Collaboration
  // can't List, View, Add, Delete the Foos of a Private Collaboration


// When Signed In, UserA
  // can List and View Public Collaborations 
  // can List Private Collaborations
  // can View, Upsert, and Delete Private Collaboration they Own
  // can't View, Upsert, and Delete Private Collaboration they don't Own

  // can List and View the Foos of a Public Collaboration
  // can't Add, Update, or Delete the Foos of a Public Collaboration they're not Members Of
  // can List, View, Add, Update, and Delete the Foos of a Collaboration they're Members Of
  // can't List, View, Add, Update, or Delete the Foos of a Private Collaboration they're not Members Of


// -------------------------------------
// VALIDATION COMMANDS


  // {{User}} Has Default Public Access to Collaborations 
    // User Can List All Collaborations 
    // User Can List Private Collaborations 
    // User Can List Public Collaborations 
    // User Can View Details of Public Collaborations 

  // {{User}} Has SignedOut Access to Collaborations 
    // User Can't Add, Update, or Delete Any Collaborations
    // User Can't View Details of Any Private Collaborations
    // User Can List and View Foos of Public Collaborations
    // User Can't Upsert or Delete Foos of Public Collaborations
    // User Can't List, View Details, Upsert, Or Delete Foos of Any Private Collaborations


  // {{User}} Has SignedIn Access to Collaborations 
    // User Can't Add, Update, or Delete Collaborations
    // User Can't View Details of Private Collaborations they're not Members Of 
    // User Can View Private Collaborations they're Members Of 

    // User Can List and View Foos of Public Collaborations
    // User Can List, View, Upsert and Delete Foos of Collaborations they're Members Of
    // User Can't List, View, Upsert or Delete Foos of Collaborations they're not Members Of

// -------------------------------------
// VALIDATION SCRIPT


// Begin

  // UserA Has Default Public Access to Collaborations 
  // UserA Has SignedOut Access to Collaborations 


   // Sign In UserA

    // UserA Has Default Public Access to Collaborations 

    // UserA creates Public Collaboration "AwesomeArdvaarks"
    // UserA creates Public Collaboration "BusyBees"

    // UserA Has SignedIn Public Access to AwesomeArdvaarks 
    // UserA Has SignedIn Private Access to BusyBees 

    // UserB can View Details of AwesomeArdvarks
    // UserB can View Details of BusyBees

    // UserB Has SignedOut Public Access to AwesomeArdvarks 
    // UserB Has SignedOut Private Access to BusyBees

    // UserB Requests To Join Collaboration

      // UserB Grants Access to UserB
      // UserB signs in

      // UserB Has Default Public Access to Collaborations 
      // UserB Has SignedIn Public Access to AwesomeArdvarks 
      // UserB Has SignedIn Private Access to BusyBees 
    

    // UserA Revokes Access To UserB

      // UserB Has SignedOut Public Access to AwesomeArdvarks 
      // UserB Has SignedOut Private Access to BusyBees

    // UserB signs out

      // UserB Has SignedOut Public Access to AwesomeArdvarks 
      // UserB Has SignedOut Private Access to BusyBees
  
    // UserA signs out

    // UserA Has Default Public Access to Collaborations 
    // UserA Has SignedOut Access to AwesomeArdvarks 
    // UserA Has SignedOut Access to BusyBees 

    // UserB Has SignedOut Access to AwesomeArdvarks 
    // UserB Has SignedOut Access to BusyBees 



// -------------------------------------
// VALIDATION SCRIPT

 

  
   
  


describe('Multiactor Collaboration', function() {

  describe('User B ', function() {

    it('public user access to default when logged out', function(client) {
      client
        .assert.hasDefaultPublicAccess()
        .assert.hasSignedOutAccess('PrivatePanda')
    });


    it('signed in user can manage collaborations they own', function(client) {
      client
        .signIn('userA')
        .assert.hasDefaultPublicAccess()
        .assert.hasSignedOutAccess('PrivatePanda')

        .createCollaboration('AwesomeArdvarks', 'public')
        .createCollaboration('BusyBees', 'public')

        .assert.hasSignedInPublicAccess('AwesomeArdvaarks')
        .assert.hasSignedInPrivateAccess('BusyBees')
    });

    it('signed in user can request to join collaborations they don't own', function(client) {
      client
        .switchWindow(2)
        .assert.hasDefaultPublicAccess()
        .signIn('userB')
          .viewDetails('AwesomeArdvarks')
          .viewDetails('BusyBees')

          .assert.hasSignedInPublicAccess('AwesomeArdvaarks')
          .assert.hasSignedInPrivateAccess('BusyBees')

          .requestToJoinCollaboration('BusyBees')
    });

    it('can grant access to collaborations', function(client) {
      client
        .switchWindow(1)
          .grantsAccessToCollaboration('userA','BusyBees')
    });

    it('can grant access to collaborations', function(client) {
      client
        .switchWindow(2)
          .assert.hasDefaultPublicAccess()
          .assert.hasSignedInPublicAccess('AwesomeArdvaarks')
          .assert.hasSignedInPrivateAccess('BusyBees')
    });


    it('can revoke access to collaborations', function(client) {
      client
        .switchWindow(1)
          .revokesAccessToCollaboration('userA','BusyBees')
    });


    // UserA Revokes Access To UserB

      // UserB Has SignedOut Public Access to AwesomeArdvarks 
      // UserB Has SignedOut Private Access to BusyBees

    // UserB signs out

      // UserB Has SignedOut Public Access to AwesomeArdvarks 
      // UserB Has SignedOut Private Access to BusyBees



    it('signed out user reverts to public access', function(client) {
      client
        .signOut()
        .assert.hasDefaultPublicAccess()
        .assert.hasSignedOutAccess('AwesomeArdvarks')
        .assert.hasSignedOutAccess('BusyBees')
    });
  });
});

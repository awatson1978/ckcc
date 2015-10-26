
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



// describe('Multiactor Collaboration', function() {
//
//   describe('User A', function() {
//     before(function(client, done) {
//       client.signIn('userA','userA.password');
//       done();
//     });
//
//     it('public user access to default when logged out', function(client) {
//       client
//         .hasDefaultPublicAccess()
//         .hasSignedOutAccess('PrivatePanda')
//     });
//
//
//     it('signed in user can manage collaborations they own', function(client) {
//       client
//         .signIn('userA')
//         .hasDefaultPublicAccess()
//         .hasSignedOutAccess('PrivatePanda')
//
//         .createCollaboration('AwesomeArdvarks', 'public')
//         .createCollaboration('BusyBees', 'public')
//
//         .hasSignedInPublicAccess('AwesomeArdvaarks')
//         .hasSignedInPrivateAccess('BusyBees')
//     });
//
//     after(function(client, done) {
//       client.signOut('userA','userA.password');
//       client.end(function() {
//         done();
//       });
//     });
//   });
//   describe('User B', function() {
//     before(function(client, done) {
//       client.signIn('userB','userB.password');
//       done();
//     });
//
//     it('signed in user can request to join collaborations they dont own', function(client) {
//       client
//         .switchWindow(2)
//         .assert.hasDefaultPublicAccess()
//         .signIn('userB')
//           .viewDetails('AwesomeArdvarks')
//           .viewDetails('BusyBees')
//
//           .hasSignedInPublicAccess('AwesomeArdvaarks')
//           .hasSignedInPrivateAccess('BusyBees')
//
//           .requestToJoinCollaboration('BusyBees')
//     });
//     after(function(client, done) {
//       client.signOut('userB','userB.password');
//       client.end(function() {
//         done();
//       });
//     });
//   });
//   describe('User A', function() {
//     before(function(client, done) {
//       client.signIn('userA','userA.password');
//       done();
//     });
//
//     it('can grant access to collaborations', function(client) {
//       client
//         .switchWindow(1)
//           .grantsAccessToCollaboration('userA','BusyBees')
//     });
//     after(function(client, done) {
//       client.signOut('userA','userA.password');
//       client.end(function() {
//         done();
//       });
//     });
//   });
//   describe('User B', function() {
//     before(function(client, done) {
//       client.signIn('userB','userB.password');
//       done();
//     });
//     it('can grant access to collaborations', function(client) {
//       client
//         .switchWindow(2)
//           .hasDefaultPublicAccess()
//           .hasSignedInPublicAccess('AwesomeArdvaarks')
//           .hasSignedInPrivateAccess('BusyBees')
//     });
//     after(function(client, done) {
//       client.signOut('userB','userB.password');
//       client.end(function() {
//         done();
//       });
//     });
//
//
//   });
//   describe('User A', function() {
//     before(function(client, done) {
//       client.signIn('userA','userA.password');
//       done();
//     });
//     it('can revoke access to collaborations', function(client) {
//       client
//         .switchWindow(1)
//           .revokesAccessToCollaboration('userB','BusyBees')
//           .signsOut()
//           .hasDefaultPublicAccess()
//           .hasSignedOutAccess('AwesomeArdvarks')
//           .hasSignedOutAccess('BusyBees')
//     });
//
//   });
//   describe('User B', function() {
//     before(function(client, done) {
//       client.signIn('userB','userB.password');
//       done();
//     });
//
//     it('signed out user reverts to public access', function(client) {
//       client
//         .isDeniedAccess('BusyBees')
//         .signOut()
//         .hasDefaultPublicAccess()
//         .hasSignedOutAccess('AwesomeArdvarks')
//         .hasSignedOutAccess('BusyBees')
//     });
//   });
// });

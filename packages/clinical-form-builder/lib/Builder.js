//
// Builder = {};
//
// //=====================================================
// // LEGACY CODE
// saveForm = function (scope) {
//   var blockItems = Items.find({}, {
//     sort: {
//       rank: 1
//     }
//   }).fetch();
//   console.log("Saving  Schema: ", JSON.stringify(blockItems));
//   console.log('_id', scope._id);
//
//
//   var newForm = {
//     createdAt: new Date(),
//     stared: false,
//     active: true,
//     formName: $('#formTitleInput').val(),
//     owner: Meteor.userId(),
//     ownerUsername: Meteor.user().username,
//     schema: blockItems,
//     numBlocks: blockItems.length
//   };
//   if (Session.get('currentForm')) {
//     Forms.update({
//       _id: Session.get('currentForm')
//     }, {
//       $set: {
//         formName: newForm.formName,
//         owner: newForm.owner,
//         ownerUsername: newForm.ownerUsername,
//         schema: Items.find({}, {
//           sort: {
//             rank: 1
//           }
//         }).fetch(),
//         numBlocks: newForm.numBlocks
//       }
//     });
//   } else {
//     Forms.insert(newForm, function (error, result) {
//       if (error) {
//         HipaaLogger.logEvent("error", Meteor.userId(), "Forms", null, error, null, null);
//       }
//       if (result) {
//         HipaaLogger.logEvent("create", Meteor.userId(), "Forms", result, null, null, null);
//       }
//     });
//   }
//   Router.go('/forms');
// };

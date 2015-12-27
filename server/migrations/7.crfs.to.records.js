// // Migrate the Metadata collection to Questionnaires
//
// //if (process.env.MIGRATE) {
//   Migrations.add({
//     version: 7,
//     up: function () {
//
//       CRFs.find().forEach(function (record) {
//         delete record._id;
//         Records.insert(record);
//       }, function (error, result){
//         CRFs.remove({});
//       });
//     }
//   });
//
// //}

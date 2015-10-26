Meteor.publish("publicStats", function (argument) {
  return PublicStats.find().forEach(function (record) {
    record.userCount = Meteor.users.find().count();
  });
});



// Meteor.publish("CRFs", function (studies, crfs){
//   var userRecord = Meteor.users.findOne(
//     {_id: this.userId},
//     {fields: {'profile.collaborations': true}}
//   );
//   var collaborations = collaborations.concat(userRecord.profile.collaborations)
//   collaborations = _.union(collaborations, "user:" + userRecord.username);
//
//   var study_ids = Collactions.studies.find({
//     id: {$in: studies},
//     collaborations: {$in: collaborations}
//   }, {fields: {id: true}}).map(function(doc){ return doc.id});
//
//   var cursor = Collections.CRFs.find({
//     CRF: {$in: crfs},
//     Study_ID: {$in: study_ids}
//   }, {sort: {name: true}})
//
//   console.log("CRFs publish", crfs, studies, cursor.count());
//   return cursor;
//
// });

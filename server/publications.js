Meteor.publish("publicStats", function (argument) {
  console.log('Publishing publicStats...');
  return PublicStats.find().forEach(function (record) {
    record.userCount = Meteor.users.find().count();
  });
});
Meteor.publish("usersList", function (argument) {
  return Meteor.users.find();
});


Meteor.publish("metadata", function() {
  console.log('=====================================');
  console.log('Publishing metadata...');

  return Metadata.find();

  // var userRecord = Meteor.users.findOne({_id:this.userId}, {fields: {'profile.collaborators':true}});
  // var collaborations = collaborations.concat(user_record.profile.collaborations);
  // collaborations = _.union(collaborations, "user:" + user_record.username);

  // var studyIds = Studies.find({
  //         id: {$in: studies},
  //         collaborations: {$in: collaborations}
  //     },{fields:{id:1}}
  // ).map(function(doc){ return doc.id});

  // var studyIds = Studies.find({
  //       id: {$in: studies},
  //       collaborations: {$in: collaborations}
  //   },{fields:{id:1}}
  // ).map(function(doc){ return doc.id});


  // in the future,
  // it would be great if the users were available in Redis
  var userRecord = Meteor.users.findOne({_id:this.userId});
  console.log('userRecord', userRecord.defaultEmail());

  if (userRecord) {
    var collaborationsArray = Collaborations.find({
      collaborators: userRecord.defaultEmail()
    }).map(function (record){
      return record._id;
    });

    console.log('collaborationsArray.length', collaborationsArray.length);
    console.log('collaborationsArray', collaborationsArray);

    var metadataRecords =  Metadata.find({
        collaborations: {$in: collaborationsArray}
    }, { sort: {"name":1}}).fetch();

    //console.log("CRFs publish", crfs, studies, cursor.count());

    console.log('metadataRecords', metadataRecords);
    return metadataRecords;
  }
});






// Meteor.publish("CRFs", function (studies, crfs) {
//   var userRecord = Meteor.users.findOne({
//     _id: this.userId
//   }, {
//     fields: {
//       'profile.collaborations': true
//     }
//   });
//
//   var studyIds = Studies.find({
//     id: {
//       $in: studies
//     },
//     collaborations: {
//       $in: userRecord.getAllCollaborations()
//     }
//   }).map(function (doc) {
//     return doc.id;
//   });
//
//   var cursor = Questionnaires.find({
//     CRF: {
//       $in: crfs
//     },
//     Study_ID: {
//       $in: studyIds
//     }
//   }, {
//     sort: {
//       name: true
//     }
//   });
//
//   console.log("CRFs publish", crfs, studies, cursor.count());
//   return cursor;
// });

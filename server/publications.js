Meteor.publish("publicStats", function (argument) {
  return PublicStats.find().forEach(function (record) {
    record.userCount = Meteor.users.find().count();
  });
});



Meteor.publish("CRFs", function (studies, crfs) {
  var userRecord = Meteor.users.findOne({
    _id: this.userId
  }, {
    fields: {
      'profile.collaborations': true
    }
  });

  var studyIds = Studies.find({
    id: {
      $in: studies
    },
    collaborations: {
      $in: userRecord.getAllCollaborations()
    }
  }).map(function (doc) {
    return doc.id;
  });

  var cursor = Questionnaires.find({
    CRF: {
      $in: crfs
    },
    Study_ID: {
      $in: studyIds
    }
  }, {
    sort: {
      name: true
    }
  });

  console.log("CRFs publish", crfs, studies, cursor.count());
  return cursor;
});

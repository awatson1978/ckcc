Records = new Meteor.Collection('records');

Records.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Records.getFilteredData = function (){
  return Records.find({
    $or: [
      {
        "Patient_ID": {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        MedicalRecordNumber: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },      {
        institutionId: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        participantId: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        _id: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        physicianName: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        questionnaireName: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      },
      {
        collaborationName: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      }
    ]
  }, {
    sort: {
      createdAt: -1
    },
    limit: 100
  });
};

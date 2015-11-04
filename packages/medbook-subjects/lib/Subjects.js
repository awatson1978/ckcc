Subjects = new Meteor.Collection('subjects');

Subjects.allow({
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

Subjects.getFilteredData = function (){
  return Subjects.find({
    $or: [
      {
        institutionId: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      },
      {
        participantId: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      },
      {
        _id: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      },
      {
        physicianName: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      },
      {
        questionnaireName: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      },
      {
        collaborationName: {
          $regex: Session.get('subjectSearchFilter'),
          $options: 'i'
        }
      }
  ]
  }, {
    sort: {
      createdAt: -1
    }
  });
};

Meteor.subscribe("patients");

Template.registerHelper("getPatientSite", function (argument){
  if (this && this.attributes && this.attributes.Demographics && this.attributes.Demographics["Patient Site"]) {
    return this.attributes.Demographics["Patient Site"];
  } else {
    return "";
  }
});

Template.registerHelper("patientsList", function (argument){
  return Patients.find({
    $or: [
      {
        'Patient_ID': {
          $regex: Session.get('patientSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Patient_ID': {
          $regex: Session.get('patientSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Site': {
          $regex: Session.get('patientSearchFilter'),
          $options: 'i'
        }
      },
      {
        _id: {
          $regex: Session.get('patientSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Segment': {
          $regex: Session.get('patientSearchFilter'),
          $options: 'i'
        }
      }
  ]
  }, {
    sort: {
      createdAt: -1
    }
  });
});


Session.setDefault('showMongoIds', false);
Template.registerHelper("showMongoIds", function (argument){
  return Session.get('showMongoIds');
});

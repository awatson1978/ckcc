Meteor.subscribe("samples");

Template.registerHelper("getSampleSite", function (argument){
  if (this && this.attributes && this.attributes.Demographics && this.attributes.Demographics["Sample Site"]) {
    return this.attributes.Demographics["Sample Site"];
  } else {
    return "";
  }
});

Template.registerHelper("samplesList", function (argument){
  return Samples.find({
    $or: [
      {
        'Sample_ID': {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Patient_ID': {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Site': {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        _id: {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        'Segment': {
          $regex: Session.get('sampleSearchFilter'),
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

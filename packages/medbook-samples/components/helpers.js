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
        name: {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        'short_name': {
          $regex: Session.get('sampleSearchFilter'),
          $options: 'i'
        }
      },
      {
        'slug': {
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
        id: {
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

Template.registerHelper("getStudySite", function (argument){
  if (this && this.attributes && this.attributes.Demographics && this.attributes.Demographics["Study Site"]) {
    return this.attributes.Demographics["Study Site"];
  } else {
    return "";
  }
});

Template.registerHelper("studiesList", function (argument){
  return Studies.find({
    $or: [
      {
        name: {
          $regex: Session.get('studySearchFilter'),
          $options: 'i'
        }
      },
      {
        'short_name': {
          $regex: Session.get('studySearchFilter'),
          $options: 'i'
        }
      },
      {
        _id: {
          $regex: Session.get('studySearchFilter'),
          $options: 'i'
        }
      },
      {
        id: {
          $regex: Session.get('studySearchFilter'),
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

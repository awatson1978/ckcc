Meteor.startup(function () {
  if (PublicStats.find().count() === 0) {
    PublicStats.insert({
      userCount: 0
    });
  }
});

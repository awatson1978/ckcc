Meteor.methods({
  initializePublicStats:function (){
    PublicStats.insert({
      userCount: 0
    });
  }
});

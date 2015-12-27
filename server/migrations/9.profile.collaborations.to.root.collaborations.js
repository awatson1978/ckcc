// Migrate the Metadata collection to Questionnaires

//if (process.env.MIGRATE) {
  Migrations.add({
    version: 9,
    up: function () {
      Meteor.users.find().forEach(function (user) {
        if (user && user.profile && user.profile.collaborators) {
          Meteor.users.update({_id: user._id}, {$set:{
            collaborators: user.profile.collaborators
          }});
        }
      });
    }
  });
//}

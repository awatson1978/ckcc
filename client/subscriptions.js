Session.setDefault("ActiveRecordId", null);


Tracker.autorun(function (){
  Meteor.subscribe("records", Session.get('activeMetadataId'));
});

Meteor.subscribe("publicStats");

Meteor.subscribe("questionnaires");

Meteor.subscribe("usersList");

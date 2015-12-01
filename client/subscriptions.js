Session.setDefault("ActiveRecordId", null);


Meteor.subscribe("records", Session.get('ActiveRecordId'));

Meteor.subscribe("publicStats");

Meteor.subscribe("questionnaires");

Meteor.subscribe("usersList");

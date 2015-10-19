Session.setDefault("fooId", null);

Meteor.subscribe("foo", Session.get('fooId'));

Meteor.subscribe("publicStats");


Meteor.subscribe("questionnaires");

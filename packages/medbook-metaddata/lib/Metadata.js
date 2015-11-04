Metadata = new Meteor.Collection('metadata');

Metadata.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});


if (Meteor.isClient){
  Meteor.subscribe("metadata");
}

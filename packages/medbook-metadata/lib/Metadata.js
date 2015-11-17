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


Metadata.getFilteredData = function (){
  return Records.find({
    $or: [
      {
        _id: {
          $regex: Session.get('recordSearchFilter'),
          $options: 'i'
        }
      }
    ]
  }, {
    sort: {
      createdAt: -1
    }
  });
};

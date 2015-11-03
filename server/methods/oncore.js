Meteor.methods({
  initializeOncore:function (){
    console.log('initializeOncore');


    Oncore.find().forEach(function (record){
      console.log('record', record);

      Records.insert(record);
    }, function(error, result){
      if (result) {
        Meteor.call('ingestOncore');
      }
    });
  }
});

Meteor.methods({
  initializePatients:function (){
    console.log('Oncore.find().count()', Oncore.find().count());

    Oncore.find().forEach(function (record){
      console.log('record', record);

      Patients.insert(record);

    });

  }
});

Meteor.methods({
  initializePatients:function (){
    console.log('Oncore', Oncore.find().fetch());

    Oncore.find().forEach(function (record){
      console.log('record', record);

      Patients.insert(record);

    });

  }
});

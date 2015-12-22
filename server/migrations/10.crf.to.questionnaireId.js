// Migrate the Metadata collection to Questionnaires

//if (process.env.MIGRATE) {


  Migrations.add({
    version: 10,
    up: function () {

      Collections.CRFs.find().forEach(function(crfRecord){
        delete crfRecord._id;
        Records.insert(crfRecord);
      }, function(){
        Records.find().forEach(function (record) {

          var newCollaboration = "";
          if (record.Study_ID === "prad_wcdt") {
            newCollaboration = ["wcdt"];
          }
          Records.update({_id: record._id}, {$set:{
            questionnaireId: record.CRF,
            collaborations: newCollaboration
          }});
        });
      });
    }
  });
//}

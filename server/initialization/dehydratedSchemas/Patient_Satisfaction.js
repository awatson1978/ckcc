Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Patient_Satisfaction"})) {
      Meteor.call("initializePatientSatisfactionForm");
    }
  }
});


Meteor.methods({
  initializePatientSatisfactionForm:function (){
    Metadata.upsert({"_id": "Patient_Satisfaction"},{$set:{
        "name" : "Patient_Satisfaction",
        "commonName" : "Patient Satisfaction",
        "version" : "V1",
        "n" : 20,
        "incompleteCount" : 0,
        "schema" : {
          "CreatedAt" : {
            "label" : "Created At",
            "type" : "Date"
          },
          "Patient_ID" : {
            "label" : "Patient ID",
            "type" : "String"
          },
          "MedicalRecordNumber" : {
            "label" : "Medical Record Number",
            "type" : "String"
          },
          "StudyName" : {
            "label" : "Study Name",
            "type" : "String"
          }
        },
        "fieldOrder" : [
            "Patient_ID"
        ],
        "study" : "satisfaction"
    }});
  },
  createRandomPatientSatisfaction: function (mrn, studyName) {
    var randomNumber = Random.fraction() * 17;

    var newPatientSatisfactionResponse = {
      "questionnaireId" : "Patient_Satisfaction",
      "questionnaireName" : "Patient Satisfaction",
      "createdAt" : new Date(),
      "Patient_ID" : Random.id(),
      "MedicalRecordNumber": mrn,
      "StudyName": studyName
    }
    Records.insert(newPatientSatisfactionResponse);
  }
});

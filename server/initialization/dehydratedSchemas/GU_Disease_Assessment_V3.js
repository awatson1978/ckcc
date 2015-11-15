Meteor.startup(function () {

  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "GU_Disease_Assessment_V3"})) {
      Meteor.call("initializeGuDiseaseAssessmentForm");
    }
  }
});


Meteor.methods({
  initializeGuDiseaseAssessmentForm:function (){
    Metadata.upsert({"_id": "GU_Disease_Assessment_V3"},{$set:{
      "name" : "GU_Disease_Assessment_V3",
      "commonName" : "GU Disease Assessment",
      "version" : "V3",
      "n" : 8,
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
          "Sample_ID" : {
              "label" : "Sample ID",
              "type" : "String"
          },
          "Are_Lesions_Present?" : {
              "optional" : true,
              "type" : "String"
          },
          "Date_of_Procedure" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Date_of_Procedure_Ext" : {
              "optional" : true,
              "type" : "String"
          },
          "Day" : {
              "optional" : true,
              "type" : "Number"
          },
          "Phase" : {
              "optional" : true,
              "type" : "String"
          },
          "Procedure" : {
              "optional" : true,
              "type" : "String"
          },
          "Segment" : {
              "optional" : true,
              "type" : "String"
          },
          "Visit_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Compared_with_previous_scan" : {
              "optional" : true,
              "type" : "String"
          },
          "Comments" : {
              "optional" : true,
              "type" : "String"
          },
          "Arm" : {
              "optional" : true,
              "type" : "String"
          }
      },
      "fieldOrder" : [
          "Patient_ID",
          "Sample_ID",
          "Are_Lesions_Present?",
          "Date_of_Procedure",
          "Date_of_Procedure_Ext",
          "Day",
          "Phase",
          "Procedure",
          "Segment",
          "Visit_Date",
          "Compared_with_previous_scan",
          "Comments",
          "Arm"
      ],
      "study" : "prad_wcdt"
    }});
  }
});

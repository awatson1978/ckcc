Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "SU2C_Specimen_V1"})) {
      Meteor.call("initializeSpecimenForm");
    }
  }
});


Meteor.methods({
  initializeSpecimenForm:function (){
    Metadata.upsert({"_id": "SU2C_Specimen_V1"}, {$set:{
        "name" : "SU2C_Specimen_V1",
        "commonName" : "SU2C Specimen",
        "version" : "V1",
        "n" : 11,
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
            "Arm" : {
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
            "Were_study_blood_samples_collected_at_this_visit?" : {
                "optional" : true,
                "type" : "String"
            },
            "Notes" : {
                "optional" : true,
                "type" : "String"
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Sample_ID",
            "Arm",
            "Day",
            "Phase",
            "Segment",
            "Visit_Date",
            "Were_study_blood_samples_collected_at_this_visit?",
            "Notes"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

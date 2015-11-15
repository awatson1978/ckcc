Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Blood_Specimen_form"})) {
      Meteor.call("initializeBloodSpecimenForm");
    }
  }
});


Meteor.methods({
  initializeBloodSpecimenForm:function (){
    Metadata.upsert({"_id": "Blood_Specimen_form"},{$set:{
    "name" : "Blood_Specimen_form",
    "commonName" : "Blood Specimen Form",
    "version" : "V1",
    "n" : 17,
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
        "Timepoint" : {
            "allowedValues" : [
                "Baseline",
                "3 Months",
                "Progression",
                "Progression2",
                "Progression3"
            ],
            "label" : "Collection Timepoint",
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Baseline",
                            "value" : "Baseline"
                        },
                        {
                            "label" : "3 Months",
                            "value" : "3 Months"
                        },
                        {
                            "label" : "Progression",
                            "value" : "Progression"
                        },
                        {
                            "label" : "Progression2",
                            "value" : "Progression2"
                        },
                        {
                            "label" : "Progression3",
                            "value" : "Progression3"
                        }
                    ]
                }
            }
        },
        "Draw_Date" : {
            "label" : "Draw Date",
            "type" : "Date",
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            }
        },
        "CRC_at_Collection" : {
            "label" : "CRC at Collection",
            "optional" : true,
            "type" : "String"
        }
    },
    "fieldOrder" : [
        "Patient_ID",
        "Timepoint",
        "Draw_Date",
        "CRC_at_Collection"
    ],
    "study" : "prad_wcdt"
    }});
  }
});

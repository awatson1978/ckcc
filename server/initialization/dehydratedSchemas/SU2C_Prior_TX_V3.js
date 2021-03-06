Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "SU2C_Prior_TX_V3"})) {
      Meteor.call("initializePriorTreatmentForm");
    }
  }
});


Meteor.methods({
  initializePriorTreatmentForm:function (){
    Metadata.upsert({"_id": "SU2C_Prior_TX_V3"},{$set:{
        "name" : "SU2C_Prior_TX_V3",
        "commonName" : "SU2C Prior Treatment",
        "version" : "V3",
        "n" : 3,
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
                "type" : "String",
                "autoform" : {
                    "type" : "text"
                }
            },
            "Drug_Name" : {
                "optional" : true,
                "type" : "String"
            },
            "Treatment_Details" : {
                "optional" : true,
                "type" : "String"
            },
            "BL_PSA" : {
                "optional" : true,
                "type" : "Number"
            },
            "Bone_Response" : {
                "optional" : true,
                "type" : "String"
            },
            "PSA_Response" : {
                "optional" : true,
                "type" : "String"
            },
            "PSA_nadir" : {
                "optional" : true,
                "type" : "Number"
            },
            "PSA_nadir_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "optional" : true,
                "type" : "Date"
            },
            "PSA_nadir_Date_Ext" : {
                "optional" : true,
                "type" : "Number"
            },
            "Progression_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "optional" : true,
                "type" : "Date"
            },
            "Progression_Date_Ext" : {
                "optional" : true,
                "type" : "Number"
            },
            "RECIST_Response" : {
                "optional" : true,
                "type" : "String"
            },
            "Start_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "optional" : true,
                "type" : "Date"
            },
            "Start_Date_Ext" : {
                "optional" : true,
                "type" : "String"
            },
            "Stop_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "optional" : true,
                "type" : "Date"
            },
            "Stop_Date_Ext" : {
                "optional" : true,
                "type" : "String"
            },
            "If_Progressive_Disease__Specify_Type" : {
                "optional" : true,
                "type" : "String"
            },
            "Reason_for_Stopping_Treatment" : {
                "optional" : true,
                "type" : "String"
            },
            "Reason_for_Stopping_Treatment_Details" : {
                "optional" : true,
                "type" : "String"
            },
            "If_other__specify" : {
                "optional" : true,
                "type" : "String"
            },
            "Treatment_Category" : {
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
            "Phase" : {
                "optional" : true,
                "type" : "String"
            },
            "Segment" : {
                "optional" : true,
                "type" : "String"
            },
            "Arm" : {
                "optional" : true,
                "type" : "String"
            },
            "Day" : {
                "optional" : true,
                "type" : "Number"
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Sample_ID",
            "Drug_Name",
            "Treatment_Details",
            "BL_PSA",
            "Bone_Response",
            "PSA_Response",
            "PSA_nadir",
            "PSA_nadir_Date",
            "PSA_nadir_Date_Ext",
            "Progression_Date",
            "Progression_Date_Ext",
            "RECIST_Response",
            "Start_Date",
            "Start_Date_Ext",
            "Stop_Date",
            "Stop_Date_Ext",
            "If_Progressive_Disease__Specify_Type",
            "Reason_for_Stopping_Treatment",
            "Reason_for_Stopping_Treatment_Details",
            "If_other__specify",
            "Treatment_Category",
            "Visit_Date",
            "Phase",
            "Segment",
            "Arm",
            "Day"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

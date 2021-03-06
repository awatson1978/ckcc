Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "SU2C_Biopsy_V3"})) {
      Meteor.call("initializeBiospyForm");
    }
  }
});

Meteor.methods({
  initializeBiospyForm:function (){
    Metadata.upsert({"_id": "SU2C_Biopsy_V3"},{$set:{
        "name" : "SU2C_Biopsy_V3",
        "commonName" : "SU2C Biopsy",
        "version" : "V3",
        "n" : 0,
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
            "Site" : {
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
            "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy" : {
                "optional" : true,
                "type" : "String"
            },
            "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?" : {
                "optional" : true,
                "type" : "String"
            },
            "Was_it_a_Tapered_Dose" : {
                "label" : "Was it a Tapered Dose?",
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
            "Arm" : {
                "optional" : true,
                "type" : "String"
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Sample_ID",
            "Site",
            "Date_of_Procedure",
            "Date_of_Procedure_Ext",
            "Visit_Date",
            "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy",
            "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?",
            "Was_it_a_Tapered_Dose",
            "Day",
            "Phase",
            "Segment",
            "Arm"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

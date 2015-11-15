Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Blood_Labs_V2"})) {
      Meteor.call("initializeBloodLabsForm");
    }
  }
});


Meteor.methods({
  initializeBloodLabsForm:function (){
    Metadata.upsert({"_id": "Blood_Labs_V2"}, {$set:{
    "name" : "Blood_Labs_V2",
    "commonName" : "Blood Labs",
    "version" : "V2",
    "n" : 5,
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
        "PSA__complexed__direct_measurement_" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "TESTOSTERONE__TOTAL" : {
            "optional" : true,
            "type" : "Number"
        },
        "Alkaline_Phosphatase" : {
            "optional" : true,
            "type" : "Number"
        },
        "LDH_" : {
            "optional" : true,
            "type" : "Number"
        },
        "ANC" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "HEMATOCRIT" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Hemoglobin" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Platelets" : {
            "optional" : true,
            "type" : "Number"
        },
        "RBC" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC_Basophils" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC_Eosinophils" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC_Lymphocytes" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC_Monocytes" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "WBC_Neutrophils" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Partial_Thromboplastin_Time____PTT_" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Prothrombin_Time__PT_" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Arm" : {
            "optional" : true,
            "type" : "String"
        },
        "International_Normalized_Ratio__INR_" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Lab_Time" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "Day" : {
            "optional" : true,
            "type" : "Number"
        },
        "Phase" : {
            "optional" : true,
            "type" : "String"
        }
    },
    "fieldOrder" : [
        "Patient_ID",
        "Sample_ID",
        "Segment",
        "Visit_Date",
        "PSA__complexed__direct_measurement_",
        "TESTOSTERONE__TOTAL",
        "Alkaline_Phosphatase",
        "LDH_",
        "ANC",
        "HEMATOCRIT",
        "Hemoglobin",
        "Platelets",
        "RBC",
        "WBC",
        "WBC_Basophils",
        "WBC_Eosinophils",
        "WBC_Lymphocytes",
        "WBC_Monocytes",
        "WBC_Neutrophils",
        "Partial_Thromboplastin_Time____PTT_",
        "Prothrombin_Time__PT_",
        "Arm",
        "International_Normalized_Ratio__INR_",
        "Lab_Time",
        "Day",
        "Phase"
    ],
    "study" : "prad_wcdt"
    }});
  }
});

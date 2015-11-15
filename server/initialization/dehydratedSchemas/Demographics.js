Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Demographics"})) {
      Metadata.insert({
        "_id" : "Demographics",
        "name" : "Demographics",
        "commonName" : "Demographics",
        "version" : "V1",
        "n" : 6,
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
          "Age" : {
              "optional" : true,
              "type" : "Number"
          },
          "Study_Site" : {
              "optional" : true,
              "type" : "String"
          },
          "Current_Status" : {
              "optional" : true,
              "type" : "String"
          },
          "Ethnicity" : {
              "optional" : true,
              "type" : "String"
          },
          "Expired_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Last_Visit" : {
              "optional" : true,
              "type" : "String"
          },
          "Last_Visit_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Off_Study_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Off_Treatment_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "On_Followup_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "On_Study_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "On_Treatment_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Race" : {
              "optional" : true,
              "type" : "String"
          },
          "Eligibility_Status" : {
              "optional" : true,
              "type" : "String"
          },
          "Eligibility_Status_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Eligibility_Version_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Consent_Date" : {
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              },
              "optional" : true,
              "type" : "Date"
          },
          "Arms" : {
              "optional" : true,
              "type" : "Number"
          }
        },        
        "fieldOrder" : [
            "Patient_ID",
            "Age",
            "Study_Site",
            "Current_Status",
            "Ethnicity",
            "Expired_Date",
            "Last_Visit",
            "Last_Visit_Date",
            "Off_Study_Date",
            "Off_Treatment_Date",
            "On_Followup_Date",
            "On_Study_Date",
            "On_Treatment_Date",
            "Race",
            "Eligibility_Status",
            "Eligibility_Status_Date",
            "Eligibility_Version_Date",
            "Consent_Date",
            "Arms"
        ],
        "study" : "prad_wcdt"
    });
    }
  }
});

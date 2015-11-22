Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Followup"})) {
      Meteor.call("initializeFollowupForm");
    }
  }
});


Meteor.methods({
  initializeFollowupForm:function (){
    Metadata.upsert({"_id": "Followup"},{$set:{
    "name" : "Followup",
    "commonName" : "Followup",
    "version" : "V1",
    "n" : 1,
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
        },
        "Followup_Center" : {
            "optional" : true,
            "type" : "String"
        },
        "Last_Known_Survival_Status" : {
            "optional" : true,
            "type" : "String"
        },
        "Last_Date_Known_Alive" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Last_Followup_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
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
        "Date_of_Progression" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Followup_Start_Date" : {
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
        "Off_Treatment_Reason" : {
            "optional" : true,
            "type" : "String"
        },
        "Off_Treatment_Reason_Explain" : {
            "optional" : true,
            "type" : "String"
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
        "Off_Study_Reason" : {
            "optional" : true,
            "type" : "String"
        },
        "Off_Study_Reason_Explain" : {
            "optional" : true,
            "type" : "String"
        },
        "Best_Response" : {
            "optional" : true,
            "type" : "String"
        },
        "Best_Response_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        },
        "Best_Response_Confirm" : {
            "optional" : true,
            "type" : "String"
        },
        "QA_Date" : {
            "autoform" : {
                "afFieldInput" : {
                    "type" : "date",
                    "timezoneId" : "America/Los_Angeles"
                }
            },
            "optional" : true,
            "type" : "Date"
        }
    },
    "fieldOrder" : [
        "Patient_ID",
        "Followup_Center",
        "Last_Known_Survival_Status",
        "Last_Date_Known_Alive",
        "Last_Followup_Date",
        "Expired_Date",
        "Date_of_Progression",
        "Followup_Start_Date",
        "Off_Treatment_Date",
        "Off_Treatment_Reason",
        "Off_Treatment_Reason_Explain",
        "Off_Study_Date",
        "Off_Study_Reason",
        "Off_Study_Reason_Explain",
        "Best_Response",
        "Best_Response_Date",
        "Best_Response_Confirm",
        "QA_Date"
    ],
    "study" : "prad_wcdt"
    }});
  },
  createRandomFollowup: function (mrn, studyName){
    var randomNumber = Random.fraction() * 17;

    var newFollowup = {
      "questionnaireId" : "Followup",
      "questionnaireName" : "Followup",
      "createdAt" : new Date(),
        "Patient_ID" : Random.id(),
        "MedicalRecordNumber": mrn,
        "StudyName": studyName,
        "Followup_Center": faker.lorem.sentence(),
        "Last_Known_Survival_Status": "",
        "Last_Date_Known_Alive": new Date(),
        "Last_Followup_Date": new Date(),
        "Expired_Date": "",
        "Date_of_Progression": "",
        "Followup_Start_Date": new Date(),
        "Off_Treatment_Date": new Date(),
        "Off_Treatment_Reason": faker.lorem.sentence(),
        "Off_Treatment_Reason_Explain": "",
        "Off_Study_Date": new Date(),
        "Off_Study_Reason": faker.lorem.sentence(),
        "Off_Study_Reason_Explain": faker.lorem.paragraph(),
        "Best_Response": faker.lorem.sentence(),
        "Best_Response_Date": new Date(),
        "Best_Response_Confirm": "",
        "QA_Date": new Date()
    };
    Records.insert(newFollowup);
  }
});

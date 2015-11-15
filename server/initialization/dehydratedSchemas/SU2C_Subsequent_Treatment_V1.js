Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {

    if (!Metadata.findOne({_id: "SU2C_Subsequent_Treatment_V1"})) {
      Metadata.insert({
        "_id": "SU2C_Subsequent_Treatment_V1",
        "name": "SU2C_Subsequent_Treatment_V1",
        "commonName": "SU2C Subsequent Treatment",
        "version": "V1",
        "n": 2,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Patient_ID": {
            "label": "Patient ID",
            "type": "String"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String"
          },
          "Drug_Name": {
            "optional": true,
            "type": "String"
          },
          "Reason_for_Stopping_Treatment": {
            "optional": true,
            "type": "String"
          },
          "Start_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Stop_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "BL_PSA": {
            "optional": true,
            "type": "Number"
          },
          "PSA_nadir": {
            "optional": true,
            "type": "Number"
          },
          "PSA_nadir_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "PSA_Response": {
            "optional": true,
            "type": "String"
          },
          "RECIST_Response": {
            "optional": true,
            "type": "String"
          },
          "Bone_Response": {
            "optional": true,
            "type": "String"
          },
          "Progression_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Progression_Date_Ext": {
            "optional": true,
            "type": "String"
          },
          "Resolved_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Responder": {
            "optional": true,
            "type": "String"
          },
          "ResponderEnzalutamide": {
            "optional": true,
            "type": "String"
          },
          "ResponderAbiraterone": {
            "optional": true,
            "type": "String"
          },
          "ResponderOtherTherapy": {
            "optional": true,
            "type": "String"
          },
          "Best_Response": {
            "optional": true,
            "type": "String"
          },
          "If_Progressive_Disease__Specify_Type": {
            "optional": true,
            "type": "String"
          },
          "Treatment_Category": {
            "optional": true,
            "type": "String"
          },
          "Treatment_Details": {
            "optional": true,
            "type": "String"
          },
          "PSA_nadir_Date_Ext": {
            "optional": true,
            "type": "String"
          },
          "Start_Date_Ext": {
            "optional": true,
            "type": "String"
          },
          "Stop_Date_Ext": {
            "optional": true,
            "type": "String"
          },
          "Visit_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Reason_for_Stopping_Treatment_Details": {
            "optional": true,
            "type": "String"
          },
          "If_other__specify": {
            "optional": true,
            "type": "String"
          },
          "Day": {
            "optional": true,
            "type": "Number"
          },
          "Phase": {
            "optional": true,
            "type": "String"
          },
          "Segment": {
            "optional": true,
            "type": "String"
          },
          "Arm": {
            "optional": true,
            "type": "String"
          }
        },
        "fieldOrder": [
              "Patient_ID",
              "Sample_ID",
              "Drug_Name",
              "Reason_for_Stopping_Treatment",
              "Start_Date",
              "Stop_Date",
              "BL_PSA",
              "PSA_nadir",
              "PSA_nadir_Date",
              "PSA_Response",
              "RECIST_Response",
              "Bone_Response",
              "Progression_Date",
              "Progression_Date_Ext",
              "Resolved_Date",
              "Responder",
              "ResponderEnzalutamide",
              "ResponderAbiraterone",
              "ResponderOtherTherapy",
              "Best_Response",
              "If_Progressive_Disease__Specify_Type",
              "Treatment_Category",
              "Treatment_Details",
              "PSA_nadir_Date_Ext",
              "Start_Date_Ext",
              "Stop_Date_Ext",
              "Visit_Date",
              "Reason_for_Stopping_Treatment_Details",
              "If_other__specify",
              "Day",
              "Phase",
              "Segment",
              "Arm"
          ],
        "study": "prad_wcdt"
      });
    }
  }
});

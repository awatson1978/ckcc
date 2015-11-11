Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Prostate_Diagnosis_V4"})) {
      Metadata.insert({
        "_id": "Prostate_Diagnosis_V4",
        "name": "Prostate_Diagnosis_V4",
        "commonName": "Prostate Diagnosis",
        "version": "V1",
        "n": 4,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Patient_ID": {
            "label": "Patient ID",
            "type": "String",
            "autoform": {
              "type": "text"
            }
          },
          "Date_of_CRPC_as_Defined_by_Treating_Physician": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Date_of_CRPC_as_Defined_by_Treating_Physician_Ext": {
            "optional": true,
            "type": "String"
          },
          "Date_of_First_Metastases": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "Date_of_First_Metastases_Ext": {
            "optional": true,
            "type": "String"
          },
          "Disease_state_at_diagnosis": {
            "optional": true,
            "type": "String"
          },
          "PSA_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          },
          "PSA_Date_Ext": {
            "optional": true,
            "type": "String"
          },
          "PSA_Value_at_Diagnosis": {
            "decimal": true,
            "optional": true,
            "type": "Number"
          },
          "Phase": {
            "optional": true,
            "type": "String"
          },
          "Primary_Gleason_Score": {
            "optional": true,
            "type": "Number"
          },
          "Secondary_Gleason_Score": {
            "optional": true,
            "type": "Number"
          },
          "Segment": {
            "optional": true,
            "type": "String"
          },
          "Total_Gleason_Score": {
            "optional": true,
            "type": "Number"
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
          "Day": {
            "optional": true,
            "type": "Number"
          },
          "Date_of_diagnosis": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "optional": true,
            "type": "Date"
          }
        },
        "metadata": {
          "commonName": "Prostate Diagnosis",
          "version": "V1",
          "Form_Name": "Prostate_Diagnosis_V4",
          "Fields": [
            {
              "Field_Name": "Patient_ID",
              "label": "Patient ID",
              "type": "String",
              "autoform": {
                "type": "text"
              }
            },
            {
              "Field_Name": "Date_of_CRPC_as_Defined_by_Treating_Physician",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "optional": true,
              "type": "Date"
            },
            {
              "Field_Name": "Date_of_CRPC_as_Defined_by_Treating_Physician_Ext",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "Date_of_First_Metastases",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "optional": true,
              "type": "Date"
            },
            {
              "Field_Name": "Date_of_First_Metastases_Ext",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "Disease_state_at_diagnosis",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "PSA_Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "optional": true,
              "type": "Date"
            },
            {
              "Field_Name": "PSA_Date_Ext",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "PSA_Value_at_Diagnosis",
              "decimal": true,
              "optional": true,
              "type": "Number"
            },
            {
              "Field_Name": "Phase",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "Primary_Gleason_Score",
              "optional": true,
              "type": "Number"
            },
            {
              "Field_Name": "Secondary_Gleason_Score",
              "optional": true,
              "type": "Number"
            },
            {
              "Field_Name": "Segment",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "Total_Gleason_Score",
              "optional": true,
              "type": "Number"
            },
            {
              "Field_Name": "Visit_Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "optional": true,
              "type": "Date"
            },
            {
              "Field_Name": "Day",
              "optional": true,
              "type": "Number"
            },
            {
              "Field_Name": "Date_of_diagnosis",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "optional": true,
              "type": "Date"
            }
          ]
        },
        "fieldOrder": [
          "Patient_ID",
          "Date_of_CRPC_as_Defined_by_Treating_Physician",
          "Date_of_CRPC_as_Defined_by_Treating_Physician_Ext",
          "Date_of_First_Metastases",
          "Date_of_First_Metastases_Ext",
          "Disease_state_at_diagnosis",
          "PSA_Date",
          "PSA_Date_Ext",
          "PSA_Value_at_Diagnosis",
          "Phase",
          "Primary_Gleason_Score",
          "Secondary_Gleason_Score",
          "Segment",
          "Total_Gleason_Score",
          "Visit_Date",
          "Day",
          "Date_of_diagnosis"
        ],
        "study": "prad_wcdt"
      });
    }
  }
});

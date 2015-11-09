Meteor.startup(function () {

  Initialization.SU2C_Subsequent_Treatment_V1 = {
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
        "type": "String",
        "autoform": {
          "type": "text"
        }
      },
      "Sample_ID": {
        "label": "Sample ID",
        "type": "String",
        "autoform": {
          "type": "text"
        }
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
    "metadata": {
      "commonName": "SU2C Subsequent Treatment",
      "version": "V1",
      "Form_Name": "SU2C_Subsequent_Treatment_V1",
      "Fields": [
        {
          "Field_Name": "Patient_ID",
          "label": "Patient ID",
          "type": "String",
          "autoform": {
            "type": "Patient_ID"
          }
              },
        {
          "Field_Name": "Sample_ID",
          "label": "Sample ID",
          "type": "String",
          "autoform": {
            "type": "Sample_ID"
          }
              },
        {
          "Field_Name": "Drug_Name",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Reason_for_Stopping_Treatment",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Start_Date",
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
          "Field_Name": "Stop_Date",
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
          "Field_Name": "BL_PSA",
          "optional": true,
          "type": "Number"
              },
        {
          "Field_Name": "PSA_nadir",
          "optional": true,
          "type": "Number"
              },
        {
          "Field_Name": "PSA_nadir_Date",
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
          "Field_Name": "PSA_Response",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "RECIST_Response",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Bone_Response",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Progression_Date",
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
          "Field_Name": "Progression_Date_Ext",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Resolved_Date",
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
          "Field_Name": "Responder",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "ResponderEnzalutamide",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "ResponderAbiraterone",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "ResponderOtherTherapy",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Best_Response",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "If_Progressive_Disease__Specify_Type",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Treatment_Category",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Treatment_Details",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "PSA_nadir_Date_Ext",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Start_Date_Ext",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Stop_Date_Ext",
          "optional": true,
          "type": "String"
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
          "Field_Name": "Reason_for_Stopping_Treatment_Details",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "If_other__specify",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Day",
          "optional": true,
          "type": "Number"
              },
        {
          "Field_Name": "Phase",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Segment",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Arm",
          "optional": true,
          "type": "String"
              }
          ]
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
  };

});

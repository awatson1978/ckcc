Meteor.startup(function () {

  Initialization.SU2C_Pr_Ca_Tx_Sumry_V2 = {
    "_id": "SU2C_Pr_Ca_Tx_Sumry_V2",
    "name": "SU2C_Pr_Ca_Tx_Sumry_V2",
    "commonName": null,
    "version": null,
    "n": 10,
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
      "Day": {
        "optional": true,
        "type": "Number"
      },
      "Phase": {
        "optional": true,
        "type": "String"
      },
      "Radiation_Therapy": {
        "optional": true,
        "type": "String"
      },
      "Radical_Prostatectomy": {
        "optional": true,
        "type": "String"
      },
      "Segment": {
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
      "Surgery_Date_Ext": {
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
      "Surgery_Date": {
        "autoform": {
          "afFieldInput": {
            "type": "date",
            "timezoneId": "America/Los_Angeles"
          }
        },
        "optional": true,
        "type": "Date"
      },
      "Arm": {
        "optional": true,
        "type": "String"
      }
    },
    "metadata": {
      "Form_Name": "SU2C_Pr_Ca_Tx_Sumry_V2",
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
          "Field_Name": "Sample_ID",
          "label": "Sample ID",
          "type": "String",
          "autoform": {
            "type": "text"
          }
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
          "Field_Name": "Radiation_Therapy",
          "optional": true,
          "type": "String"
        },
        {
          "Field_Name": "Radical_Prostatectomy",
          "optional": true,
          "type": "String"
        },
        {
          "Field_Name": "Segment",
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
          "Field_Name": "Surgery_Date_Ext",
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
          "Field_Name": "Surgery_Date",
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
          "Field_Name": "Arm",
          "optional": true,
          "type": "String"
          }
      ]
    },
    "fieldOrder": [
          "Patient_ID",
          "Sample_ID",
          "Day",
          "Phase",
          "Radiation_Therapy",
          "Radical_Prostatectomy",
          "Segment",
          "Start_Date_Ext",
          "Stop_Date_Ext",
          "Surgery_Date_Ext",
          "Visit_Date",
          "Start_Date",
          "Stop_Date",
          "Surgery_Date",
          "Arm"
      ],
    "study": "prad_wcdt"
  };

});

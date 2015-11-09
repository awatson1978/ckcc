Meteor.startup(function () {

  Initialization.GU_Disease_Assessment_V3 = {
    "_id": "GU_Disease_Assessment_V3",
    "name": "GU_Disease_Assessment_V3",
    "commonName": "GU Disease Assessment",
    "version": "V3",
    "n": 8,
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
      "Are_Lesions_Present?": {
        "optional": true,
        "type": "String"
      },
      "Date_of_Procedure": {
        "autoform": {
          "afFieldInput": {
            "type": "date",
            "timezoneId": "America/Los_Angeles"
          }
        },
        "optional": true,
        "type": "Date"
      },
      "Date_of_Procedure_Ext": {
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
      "Procedure": {
        "optional": true,
        "type": "String"
      },
      "Segment": {
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
      "Compared_with_previous_scan": {
        "optional": true,
        "type": "String"
      },
      "Comments": {
        "optional": true,
        "type": "String"
      },
      "Arm": {
        "optional": true,
        "type": "String"
      }
    },
    "metadata": {
      "commonName": "GU Disease Assessment",
      "version": "V3",
      "Form_Name": "GU_Disease_Assessment_V3",
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
          "Field_Name": "Are_Lesions_Present?",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Date_of_Procedure",
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
          "Field_Name": "Date_of_Procedure_Ext",
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
          "Field_Name": "Procedure",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Segment",
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
          "Field_Name": "Compared_with_previous_scan",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Comments",
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
          "Are_Lesions_Present?",
          "Date_of_Procedure",
          "Date_of_Procedure_Ext",
          "Day",
          "Phase",
          "Procedure",
          "Segment",
          "Visit_Date",
          "Compared_with_previous_scan",
          "Comments",
          "Arm"
      ],
    "study": "prad_wcdt"
  };

});

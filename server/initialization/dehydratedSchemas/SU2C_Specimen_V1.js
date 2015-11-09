Meteor.startup(function () {

  Initialization.SU2C_Specimen_V1 = {
    "_id": "SU2C_Specimen_V1",
    "name": "SU2C_Specimen_V1",
    "commonName": "SU2C Speciment",
    "version": "V1",
    "n": 11,
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
      "Arm": {
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
      "Were_study_blood_samples_collected_at_this_visit?": {
        "optional": true,
        "type": "String"
      },
      "Notes": {
        "optional": true,
        "type": "String"
      }
    },
    "metadata": {
      "commonName": "SU2C Speciment",
      "version": "V1",
      "Form_Name": "SU2C_Specimen_V1",
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
          "Field_Name": "Arm",
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
          "Field_Name": "Were_study_blood_samples_collected_at_this_visit?",
          "optional": true,
          "type": "String"
        },
        {
          "Field_Name": "Notes",
          "optional": true,
          "type": "String"
          }
      ]
    },
    "fieldOrder": [
            "Patient_ID",
            "Sample_ID",
            "Arm",
            "Day",
            "Phase",
            "Segment",
            "Visit_Date",
            "Were_study_blood_samples_collected_at_this_visit?",
            "Notes"
        ],
    "study": "prad_wcdt"
  };

});

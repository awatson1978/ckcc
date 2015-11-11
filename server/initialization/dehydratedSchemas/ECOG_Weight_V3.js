Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "ECOG_Weight_V3"})) {
      Metadata.insert({
        "_id": "ECOG_Weight_V3",
        "name": "ECOG_Weight_V3",
        "commonName": "ECOG Weight",
        "version": "V3",
        "n": 7,
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
          "BMI": {
            "decimal": true,
            "optional": true,
            "type": "Number"
          },
          "Weight": {
            "decimal": true,
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
          "ECOG_PS": {
            "optional": true,
            "type": "String"
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
          },
          "Day": {
            "optional": true,
            "type": "Number"
          }
        },
        "metadata": {
          "commonName": "ECOG Weight",
          "version": "V3",
          "Form_Name": "ECOG_Weight_V3",
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
              "Field_Name": "BMI",
              "decimal": true,
              "optional": true,
              "type": "Number"
                  },
            {
              "Field_Name": "Weight",
              "decimal": true,
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
              "Field_Name": "ECOG_PS",
              "optional": true,
              "type": "String"
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
                  },
            {
              "Field_Name": "Day",
              "optional": true,
              "type": "Number"
                  }
              ]
        },
        "fieldOrder": [
              "Patient_ID",
              "Sample_ID",
              "BMI",
              "Weight",
              "Visit_Date",
              "ECOG_PS",
              "Phase",
              "Segment",
              "Arm",
              "Day"
          ],
        "study": "prad_wcdt"
      });
    }
  }
});

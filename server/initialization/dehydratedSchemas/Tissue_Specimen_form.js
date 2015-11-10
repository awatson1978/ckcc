Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Tissue_Specimen_form"})) {
      Metadata.insert({
        "_id": "Tissue_Specimen_form",
        "name": "Tissue_Specimen_form",
        "commonName": "Tissue Speciment",
        "version": "V1",
        "n": 14,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String",
            "autoform": {
              "type": "Sample_ID"
            }
          },
          "Timepoint": {
            "allowedValues": [
              "Baseline",
              "Progression",
              "Progression2",
              "Progression3",
              "Progression4"
            ],
            "label": "Timepoint",
            "type": "String"
          },
          "Procedure_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "label": "Procedure Date",
            "type": "Date"
          },
          "Attending_Radiologist": {
            "label": "Attending Radiologist",
            "optional": true,
            "type": "String"
          },
          "CRC_at_Collection": {
            "label": "CRC at Collection",
            "optional": true,
            "type": "String"
          },
          "Number_of_Cores": {
            "decimal": true,
            "label": "Number of Cores Collected",
            "type": "Number"
          },
          "Cores": {
            "optional": true,
            "type": [
              null
            ]
          },
          "Fixed_Core_Ship_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "label": "Fixed Core Ship Date",
            "optional": true,
            "type": "Date"
          },
          "Freezer": {
            "label": "Frozen Core Storage",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "Box_ID": {
            "label": "Box ID",
            "optional": true,
            "type": "String"
          },
          "Core_Notes": {
            "label": "Core Notes",
            "optional": true,
            "type": "String"
          },
          "TimepointNotes": {
            "label": "Timepoint Notes*",
            "max": 2000,
            "optional": true,
            "type": "String"
          }
        },
        "metadata": {
          "commonName": "Tissue Speciment",
          "version": "V1",
          "Form_Name": "Tissue_Specimen_form",
          "Fields": [
            {
              "Field_Name": "Sample_ID",
              "label": "Sample ID",
              "type": "String",
              "autoform": {
                "type": "text"
              }
            },
            {
              "Field_Name": "Timepoint",
              "allowedValues": [
                "Baseline",
                "Progression",
                "Progression2",
                "Progression3",
                "Progression4"
              ],
              "label": "Timepoint",
              "type": "String"
            },
            {
              "Field_Name": "Procedure_Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "label": "Procedure Date",
              "type": "Date"
            },
            {
              "Field_Name": "Attending_Radiologist",
              "label": "Attending Radiologist",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "CRC_at_Collection",
              "label": "CRC at Collection",
              "optional": true,
              "type": "String"
            },
            {
              "Field_Name": "Number_of_Cores",
              "decimal": true,
              "label": "Number of Cores Collected",
              "type": "Number"
            },
            {
              "Field_Name": "Cores",
              "optional": true,
              "type": [
                null
              ]
            },
            {
              "Field_Name": "Fixed_Core_Ship_Date",
              "autoform": {
                "afFieldInput": {
                  "type": "date",
                  "timezoneId": "America/Los_Angeles"
                }
              },
              "label": "Fixed Core Ship Date",
              "optional": true,
              "type": "Date"
                  },
            {
              "Field_Name": "Freezer",
              "label": "Frozen Core Storage",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "Box_ID",
              "label": "Box ID",
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "Core_Notes",
              "label": "Core Notes",
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "TimepointNotes",
              "label": "Timepoint Notes*",
              "max": 2000,
              "optional": true,
              "type": "String"
                  }
              ]
        },
        "fieldOrder": [
              "Sample_ID",
              "Timepoint",
              "Procedure_Date",
              "Attending_Radiologist",
              "CRC_at_Collection",
              "Number_of_Cores",
              "Cores",
              "Fixed_Core_Ship_Date",
              "Freezer",
              "Box_ID",
              "Core_Notes",
              "TimepointNotes"
          ],
        "study": "prad_wcdt"
      });
    }
  }
});

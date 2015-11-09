Meteor.startup(function () {

  Initialization.Patient_Enrollment_form = {
    "_id": "Patient_Enrollment_form",
    "name": "Patient_Enrollment_form",
    "commonName": "Patient Enrollement",
    "version": "V1",
    "n": 15,
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
      "Study_Site": {
        "allowedValues": [
                  "UCSF",
                  "OHSU",
                  "UCLA",
                  "UCD",
                  "UBC",
                  "LAVA"
              ],
        "label": "Institution",
        "max": 200,
        "type": "String"
      },
      "Baseline_Sample_ID": {
        "label": "Baseline Sample ID",
        "type": "String"
      },
      "Baseline_Biopsy_Date": {
        "autoform": {
          "afFieldInput": {
            "type": "date",
            "timezoneId": "America/Los_Angeles"
          }
        },
        "label": "Baseline Biopsy Date",
        "type": "Date"
      },
      "Baseline_Biopsy_Site": {
        "allowedValues": [
                  "Bone",
                  "Liver",
                  "Lymph Node",
                  "Adrenal lesion",
                  "Seminal Vesicle mass",
                  "spinal mass",
                  "Lung",
                  "Bladder mass"
              ],
        "label": "Baseline Biopsy Site",
        "max": 200,
        "type": "String"
      },
      "Progression_Sample_ID": {
        "label": "Progression Sample ID",
        "optional": true,
        "type": "String"
      },
      "Progression_Biopsy_Date": {
        "autoform": {
          "afFieldInput": {
            "type": "date",
            "timezoneId": "America/Los_Angeles"
          }
        },
        "label": "Progression Biopsy Date",
        "optional": true,
        "type": "Date"
      },
      "Progression_Biopsy_Site": {
        "allowedValues": [
                  "Bone",
                  "Liver",
                  "Lymph Node",
                  "Adrenal lesion",
                  "Seminal Vesicle mass",
                  "spinal mass",
                  "Lung",
                  "Bladder mass"
              ],
        "label": "Progression Biopsy Site",
        "max": 200,
        "optional": true,
        "type": "String"
      }
    },
    "metadata": {
      "commonName": "Patient Enrollement",
      "version": "V1",
      "Form_Name": "Patient_Enrollment_form",
      "Fields": [
        {
          "Field_Name": "Patient_ID",
          "label": "Patient ID",
          "type": "String"
              },
        {
          "Field_Name": "Study_Site",
          "allowedValues": [
                      "UCSF",
                      "OHSU",
                      "UCLA",
                      "UCD",
                      "UBC",
                      "LAVA"
                  ],
          "label": "Institution",
          "max": 200,
          "type": "String"
              },
        {
          "Field_Name": "Baseline_Sample_ID",
          "label": "Baseline Sample ID",
          "type": "String"
              },
        {
          "Field_Name": "Baseline_Biopsy_Date",
          "autoform": {
            "afFieldInput": {
              "type": "date",
              "timezoneId": "America/Los_Angeles"
            }
          },
          "label": "Baseline Biopsy Date",
          "type": "Date"
              },
        {
          "Field_Name": "Baseline_Biopsy_Site",
          "allowedValues": [
                      "Bone",
                      "Liver",
                      "Lymph Node",
                      "Adrenal lesion",
                      "Seminal Vesicle mass",
                      "spinal mass",
                      "Lung",
                      "Bladder mass"
                  ],
          "label": "Baseline Biopsy Site",
          "max": 200,
          "type": "String"
              },
        {
          "Field_Name": "Progression_Sample_ID",
          "label": "Progression Sample ID",
          "optional": true,
          "type": "String"
              },
        {
          "Field_Name": "Progression_Biopsy_Date",
          "autoform": {
            "afFieldInput": {
              "type": "date",
              "timezoneId": "America/Los_Angeles"
            }
          },
          "label": "Progression Biopsy Date",
          "optional": true,
          "type": "Date"
              },
        {
          "Field_Name": "Progression_Biopsy_Site",
          "allowedValues": [
                      "Bone",
                      "Liver",
                      "Lymph Node",
                      "Adrenal lesion",
                      "Seminal Vesicle mass",
                      "spinal mass",
                      "Lung",
                      "Bladder mass"
                  ],
          "label": "Progression Biopsy Site",
          "max": 200,
          "optional": true,
          "type": "String"
              }
          ]
    },
    "fieldOrder": [
          "Patient_ID",
          "Study_Site",
          "Baseline_Sample_ID",
          "Baseline_Biopsy_Date",
          "Baseline_Biopsy_Site",
          "Progression_Sample_ID",
          "Progression_Biopsy_Date",
          "Progression_Biopsy_Site"
      ],
    "study": "prad_wcdt"
  };

});

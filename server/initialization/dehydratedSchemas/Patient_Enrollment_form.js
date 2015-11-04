Meteor.startup(function() {

  Initialization.Patient_Enrollment_form = {
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
          "autoform": autoformDate,
          "label": "Baseline Biopsy Date",
          "type": "Date",
          "autoform": autoformDate
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
        "autoform": autoformDate,
        "label": "Progression Biopsy Date",
        "optional": true,
        "type": "Date",
        "autoform": autoformDate
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
  };
});

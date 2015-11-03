Meteor.startup(function () {

  Initialization.Biopsy_Research = {
    "commonName": "Biopsy Research",
    "version": "V1",
    "Form_Name": "Biopsy_Research",
    "Fields": [
      Patient_ID_Type,
      {
        "Field_Name": "Sample_ID",
        "label": "Sample ID",
        "type": "String"
      },
      {
        "Field_Name": "Date_of_Procedure",
        "autoform": autoformDate,
        "optional": true,
        "type": "Date",
        "autoform": autoformDate,
      },
      {
        "Field_Name": "Site",
        "allowedValues": [
          "Bone",
          "Liver",
          "Lymph Node",
          "Adrenal lesion",
          "Seminal Vesicle mass",
          "spinal mass",
          "Lung",
          "Bladder mass",
          "Other"
        ],
        "label": "Biopsy Site",
        "max": 200,
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy",
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?",
        "optional": true,
        "type": "String"
      }
    ]
  };
});

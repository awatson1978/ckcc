Meteor.startup(function() {

  CRFinit.Blood_Labs_V2 = {
    "Form_Name": "Blood_Labs_V2",
    "Fields": [
      Patient_ID_Type,
      Sample_ID_Type,
      {
          "Field_Name": "Segment",
          "optional": true,
          "type": "String"
      },
      {
          "Field_Name": "Visit_Date",
          "autoform": autoformDate,
          "optional": true,
          "type": "Date",
          "autoform": autoformDate,
      },
      {
          "Field_Name": "PSA__complexed__direct_measurement_",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "TESTOSTERONE__TOTAL",
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Alkaline_Phosphatase",
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "LDH_",
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "ANC",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "HEMATOCRIT",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Hemoglobin",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Platelets",
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "RBC",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC_Basophils",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC_Eosinophils",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC_Lymphocytes",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC_Monocytes",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "WBC_Neutrophils",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Partial_Thromboplastin_Time____PTT_",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Prothrombin_Time__PT_",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Arm",
          "optional": true,
          "type": "String"
      },
      {
          "Field_Name": "International_Normalized_Ratio__INR_",
          "decimal": true,
          "optional": true,
          "type": "Number"
      },
      {
          "Field_Name": "Lab_Time",
          "decimal": true,
          "optional": true,
          "type": "Number"
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
      }
    ]
  };
});

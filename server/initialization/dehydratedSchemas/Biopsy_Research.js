Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Biopsy_Research"})) {
      Metadata.insert({
        "_id": "Biopsy_Research",
        "name": "Biopsy_Research",
        "commonName": "Biopsy Research",
        "version": "V1",
        "n": 12,
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
              "type": "Patient_ID"
            }
          },
          "Sample_ID": {
            "label": "Sample ID",
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
          "Site": {
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
          "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy": {
            "optional": true,
            "type": "String"
          },
          "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?": {
            "optional": true,
            "type": "String"
          }
        },
        "metadata": {
          "commonName": "Biopsy Research",
          "version": "V1",
          "Form_Name": "Biopsy_Research",
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
        },
        "fieldOrder": [
              "Patient_ID",
              "Sample_ID",
              "Date_of_Procedure",
              "Site",
              "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy",
              "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?"
          ],
        "study": "prad_wcdt"
      });
    }
  }



});

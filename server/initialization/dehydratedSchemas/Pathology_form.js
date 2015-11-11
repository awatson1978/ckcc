Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Pathology_form"})) {
      Metadata.insert({
        "_id": "Pathology_form",
        "name": "Pathology_form",
        "commonName": "Pathology Report",
        "version": "V1",
        "n": 16,
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
          "Tumor_Content": {
            "allowedValues": [
                      "None",
                      "<5%",
                      "5%",
                      "10%",
                      "20%",
                      "30%",
                      "40%",
                      "50%",
                      "60%",
                      "70%",
                      "80%",
                      "90%",
                      "100%"
                  ],
            "label": "Tumor Content",
            "type": "String"
          },
          "Preliminary_Histology": {
            "allowedValues": [
                      "Adenocarcinoma",
                      "Possible SC",
                      "Small Cell",
                      "ANPC",
                      "Mixed",
                      "N/A"
                  ],
            "label": "Preliminary Histology",
            "max": 200,
            "type": "String"
          },
          "Final_Histology": {
            "allowedValues": [
                      "Adenocarcinoma",
                      "Small Cell",
                      "ANPC",
                      "Indeterminate",
                      "Atypical with Adeno Architecture",
                      "Adeno+ANPC",
                      "Adeno+SC",
                      "ANPC+SC",
                      "N/A"
                  ],
            "label": "Final Histology Call",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "AR-FISH_IHC": {
            "allowedValues": [
                      "Positive",
                      "Focal Positive",
                      "Negative",
                      "Weak",
                      "Failed",
                      "Not Performed"
                  ],
            "label": "AR Immunohistochemistry",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "PSA_IHC": {
            "allowedValues": [
                      "Positive",
                      "Focal Positive",
                      "Negative",
                      "Weak",
                      "Failed",
                      "Not Performed"
                  ],
            "label": "PSA Immunohistochemistry",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "CHGA_IHC": {
            "allowedValues": [
                      "Positive",
                      "Focal Positive",
                      "Negative",
                      "Weak",
                      "Failed",
                      "Not Performed"
                  ],
            "label": "CHGA Immunohistochemistry",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "CHGA_test_performed": {
            "allowedValues": [
                      "Performed",
                      "Not Performed"
                  ],
            "label": "CHGA test performed",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "AR-FISH_test_performed": {
            "allowedValues": [
                      "Performed",
                      "Not Performed"
                  ],
            "label": "AR-FISH test performed",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "AR_chromosomeX_ratio": {
            "decimal": true,
            "optional": true,
            "type": "Number"
          },
          "ION_Torrent_test_performed": {
            "allowedValues": [
                      "Yes",
                      "No"
                  ],
            "label": "ION Torrent test performed",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "PTEN_IHC": {
            "allowedValues": [
                      "Positive",
                      "Negative",
                      "Weak",
                      "N/A"
                  ],
            "label": "PTEN Immunohistochemistry",
            "max": 200,
            "optional": true,
            "type": "String"
          },
          "PTEN_test_performed": {
            "allowedValues": [
                      "Performed",
                      "Not Performed"
                  ],
            "label": "PTEN test performed",
            "max": 200,
            "optional": true,
            "type": "String"
          }
        },
        "metadata": {
          "commonName": "Pathology Report",
          "version": "V1",
          "Form_Name": "Pathology_form",
          "Fields": [
            {
              "Field_Name": "Sample_ID",
              "label": "Sample ID",
              "type": "String",
              "autoform": {
                "type": "Sample_ID"
              }
                  },
            {
              "Field_Name": "Tumor_Content",
              "allowedValues": [
                          "None",
                          "<5%",
                          "5%",
                          "10%",
                          "20%",
                          "30%",
                          "40%",
                          "50%",
                          "60%",
                          "70%",
                          "80%",
                          "90%",
                          "100%"
                      ],
              "label": "Tumor Content",
              "type": "String"
                  },
            {
              "Field_Name": "Preliminary_Histology",
              "allowedValues": [
                          "Adenocarcinoma",
                          "Possible SC",
                          "Small Cell",
                          "ANPC",
                          "Mixed",
                          "N/A"
                      ],
              "label": "Preliminary Histology",
              "max": 200,
              "type": "String"
                  },
            {
              "Field_Name": "Final_Histology",
              "allowedValues": [
                          "Adenocarcinoma",
                          "Small Cell",
                          "ANPC",
                          "Indeterminate",
                          "Atypical with Adeno Architecture",
                          "Adeno+ANPC",
                          "Adeno+SC",
                          "ANPC+SC",
                          "N/A"
                      ],
              "label": "Final Histology Call",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "AR-FISH_IHC",
              "allowedValues": [
                          "Positive",
                          "Focal Positive",
                          "Negative",
                          "Weak",
                          "Failed",
                          "Not Performed"
                      ],
              "label": "AR Immunohistochemistry",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "PSA_IHC",
              "allowedValues": [
                          "Positive",
                          "Focal Positive",
                          "Negative",
                          "Weak",
                          "Failed",
                          "Not Performed"
                      ],
              "label": "PSA Immunohistochemistry",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "CHGA_IHC",
              "allowedValues": [
                          "Positive",
                          "Focal Positive",
                          "Negative",
                          "Weak",
                          "Failed",
                          "Not Performed"
                      ],
              "label": "CHGA Immunohistochemistry",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "CHGA_test_performed",
              "allowedValues": [
                          "Performed",
                          "Not Performed"
                      ],
              "label": "CHGA test performed",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "AR-FISH_test_performed",
              "allowedValues": [
                          "Performed",
                          "Not Performed"
                      ],
              "label": "AR-FISH test performed",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "AR_chromosomeX_ratio",
              "decimal": true,
              "optional": true,
              "type": "Number"
                  },
            {
              "Field_Name": "ION_Torrent_test_performed",
              "allowedValues": [
                          "Yes",
                          "No"
                      ],
              "label": "ION Torrent test performed",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "PTEN_IHC",
              "allowedValues": [
                          "Positive",
                          "Negative",
                          "Weak",
                          "N/A"
                      ],
              "label": "PTEN Immunohistochemistry",
              "max": 200,
              "optional": true,
              "type": "String"
                  },
            {
              "Field_Name": "PTEN_test_performed",
              "allowedValues": [
                          "Performed",
                          "Not Performed"
                      ],
              "label": "PTEN test performed",
              "max": 200,
              "optional": true,
              "type": "String"
                  }
              ]
        },
        "fieldOrder": [
              "Sample_ID",
              "Tumor_Content",
              "Preliminary_Histology",
              "Final_Histology",
              "AR-FISH_IHC",
              "PSA_IHC",
              "CHGA_IHC",
              "CHGA_test_performed",
              "AR-FISH_test_performed",
              "AR_chromosomeX_ratio",
              "ION_Torrent_test_performed",
              "PTEN_IHC",
              "PTEN_test_performed"
          ],
        "study": "prad_wcdt"
      });
    }
  }
});

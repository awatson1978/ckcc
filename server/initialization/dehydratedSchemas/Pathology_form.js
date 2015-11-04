Meteor.startup(function() {

    Initialization.Pathology_form = {
        "commonName": "Pathology Report",
        "version": "V1",
        "Form_Name": "Pathology_form",
        "Fields": [
            Sample_ID_Type,
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
    }

})

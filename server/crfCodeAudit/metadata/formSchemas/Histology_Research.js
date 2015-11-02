Meteor.startup(function() {

    CRFinit.Histology_Research = {
        "Form_Name": "Histology_Research",
        "Fields": [
            Sample_ID_Type,
            {
                "Field_Name": "Histology_Call",
                "allowedValues": [
                    "Adeno",
                    "Small Cell",
                    "IAC/Adeno",
                    "IAC",
                    "Indeterminate",
                    "Intermediate",
                    "IAC/SC",
                    "Adeno/SC",
                    "Unavailable",
                    "QNS"
                ],
                "type": "String"
            },
            {
                "Field_Name": "Adeno",
                "type": "String"
            },
            {
                "Field_Name": "Small_Cell",
                "type": "String"
            },
            {
                "Field_Name": "Trichotomy",
                "type": "String"
            }
        ]
    }
    
})

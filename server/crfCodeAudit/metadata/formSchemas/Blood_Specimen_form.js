Meteor.startup(function() {

    CRFinit.Blood_Specimen_form = {
        "Form_Name": "Blood_Specimen_form",
        "Fields": [
            Patient_ID_Type,
            {
                "Field_Name": "Timepoint",
                "allowedValues": [
                    "Baseline",
                    "3 Months",
                    "Progression",
                    "Progression2",
                    "Progression3"
                ],
                "label": "Collection Timepoint",
                "type": "String"
            },
            {
                "Field_Name": "Draw_Date",
                "label": "Draw Date",
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "CRC_at_Collection",
                "label": "CRC at Collection",
                "optional": true,
                "type": "String"
            }
        ]
    }
    
})

Meteor.startup(function() {

    Initialization.GU_Disease_Assessment_V3 = {
        "commonName": "GU Disease Assessment",
        "version": "V3",
        "Form_Name": "GU_Disease_Assessment_V3",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
            {
                "Field_Name": "Are_Lesions_Present?",
                "optional": true,
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
                "Field_Name": "Date_of_Procedure_Ext",
                "optional": true,
                "type": "String"
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
            },
            {
                "Field_Name": "Procedure",
                "optional": true,
                "type": "String"
            },
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
                "Field_Name": "Compared_with_previous_scan",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Comments",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Arm",
                "optional": true,
                "type": "String"
            }
        ]
    }

})

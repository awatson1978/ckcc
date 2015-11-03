Meteor.startup(function() {

    Initialization.SU2C_Biopsy_AE_V1 = {
        "commonName": "SU2C Biopsy AE",
        "version": "V1",
        "Form_Name": "SU2C_Biopsy_AE_V1",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
            {
                "Field_Name": "Arm",
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
                "Field_Name": "Action",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Adverse_Event_Description",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Attribution",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Grade",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Onset_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Onset_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Outcome",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Serious",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Unexpected?",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Toxicity_Category",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Toxicity_Code",
                "optional": true,
                "type": "String"
            }
        ]
    }

})

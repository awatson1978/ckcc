Meteor.startup(function() {

    Initialization.SU2C_Pr_Ca_Tx_Sumry_V2 = {
        "Form_Name": "SU2C_Pr_Ca_Tx_Sumry_V2",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
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
                "Field_Name": "Radiation_Therapy",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Radical_Prostatectomy",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Segment",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Start_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Stop_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Surgery_Date_Ext",
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
                "Field_Name": "Start_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Stop_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Surgery_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Arm",
                "optional": true,
                "type": "String"
            }
        ]
    }

})

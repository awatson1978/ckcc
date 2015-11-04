Meteor.startup(function() {

    Initialization.ECOG_Weight_V3 = {
        "commonName": "ECOG Weight",
        "version": "V3",
        "Form_Name": "ECOG_Weight_V3",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
            {
                "Field_Name": "BMI",
                "decimal": true,
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Weight",
                "decimal": true,
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Visit_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "ECOG_PS",
                "optional": true,
                "type": "String"
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
                "Field_Name": "Arm",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Day",
                "optional": true,
                "type": "Number"
            }
        ]
    }

})

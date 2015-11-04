Meteor.startup(function() {

    Initialization.SU2C_Specimen_V1 = {
        "commonName": "SU2C Speciment",
        "version": "V1",
        "Form_Name": "SU2C_Specimen_V1",
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
                "Field_Name": "Were_study_blood_samples_collected_at_this_visit?",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Notes",
                "optional": true,
                "type": "String"
            }
        ]
    }

})

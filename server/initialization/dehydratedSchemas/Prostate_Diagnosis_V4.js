Meteor.startup(function() {

    Initialization.Prostate_Diagnosis_V4 = {
        "commonName": "Prostate Diagnosis",
        "version": "V1",
        "Form_Name": "Prostate_Diagnosis_V4",
        "Fields": [
            Patient_ID_Type,
            {
                "Field_Name": "Date_of_CRPC_as_Defined_by_Treating_Physician",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Date_of_CRPC_as_Defined_by_Treating_Physician_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Date_of_First_Metastases",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Date_of_First_Metastases_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Disease_state_at_diagnosis",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "PSA_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "PSA_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "PSA_Value_at_Diagnosis",
                "decimal": true,
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Phase",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Primary_Gleason_Score",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Secondary_Gleason_Score",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Segment",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Total_Gleason_Score",
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
                "Field_Name": "Day",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Date_of_diagnosis",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            }
        ]
    }

})

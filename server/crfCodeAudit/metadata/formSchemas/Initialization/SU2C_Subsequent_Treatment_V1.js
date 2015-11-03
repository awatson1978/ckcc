Meteor.startup(function() {

    Initialization.SU2C_Subsequent_Treatment_V1 = {
        "commonName": "SU2C Subsequent Treatment",
        "version": "V1",
        "Form_Name": "SU2C_Subsequent_Treatment_V1",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
            {
                "Field_Name": "Drug_Name",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Reason_for_Stopping_Treatment",
                "optional": true,
                "type": "String"
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
                "Field_Name": "BL_PSA",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "PSA_nadir",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "PSA_nadir_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "PSA_Response",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "RECIST_Response",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Bone_Response",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Progression_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Progression_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Resolved_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Responder",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "ResponderEnzalutamide",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "ResponderAbiraterone",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "ResponderOtherTherapy",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Best_Response",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "If_Progressive_Disease__Specify_Type",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Treatment_Category",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Treatment_Details",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "PSA_nadir_Date_Ext",
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
                "Field_Name": "Visit_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Reason_for_Stopping_Treatment_Details",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "If_other__specify",
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
                "Field_Name": "Arm",
                "optional": true,
                "type": "String"
            }
        ]
    }

})

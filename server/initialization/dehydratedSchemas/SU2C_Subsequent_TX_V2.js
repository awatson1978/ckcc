Meteor.startup(function() {

    Initialization.SU2C_Subsequent_TX_V2 = {
        "Form_Name": "SU2C_Subsequent_TX_V2",
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
                "Field_Name": "Treatment_Type",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Treatment_Details",
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
                "Field_Name": "Start_Date_Ext",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Stop_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
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

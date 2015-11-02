Meteor.startup(function() {

    CRFinit.Followup = {
        "Form_Name": "Followup",
        "Fields": [
            Patient_ID_Type,
            {
                "Field_Name": "Followup_Center",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Last_Known_Survival_Status",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Last_Date_Known_Alive",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Last_Followup_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Expired_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Date_of_Progression",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Followup_Start_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Off_Treatment_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Off_Treatment_Reason",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Off_Treatment_Reason_Explain",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Off_Study_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Off_Study_Reason",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Off_Study_Reason_Explain",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Best_Response",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Best_Response_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Best_Response_Confirm",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "QA_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            }
        ]
    }
    
})

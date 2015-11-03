Meteor.startup(function() {

    Initialization.Demographics = {
        "commonName": "Demographics",
        "version": "V1",
        "Form_Name": "Demographics",
        "Fields": [
            Patient_ID_Type,
            {
                "Field_Name": "Age",
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "Study_Site",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Current_Status",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Ethnicity",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Expired_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Last_Visit",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Last_Visit_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Off_Study_Date",
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
                "Field_Name": "On_Followup_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "On_Study_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "On_Treatment_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Race",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Eligibility_Status",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Eligibility_Status_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Eligibility_Version_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Consent_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "Arms",
                "optional": true,
                "type": "Number"
            }
        ]
    }

})

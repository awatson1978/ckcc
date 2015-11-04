Meteor.startup(function() {

    Initialization.SU2C_Biopsy_V3 = {
        "commonName": "SU2C Biopsy",
        "version": "V3",
        "Form_Name": "SU2C_Biopsy_V3",
        "Fields": [
            Patient_ID_Type,
            Sample_ID_Type,
            {
                "Field_Name": "Site",
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
                "Field_Name": "Visit_Date",
                "autoform": autoformDate,
                "optional": true,
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "Was_it_a_Tapered_Dose",
                label: "Was it a Tapered Dose?",
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

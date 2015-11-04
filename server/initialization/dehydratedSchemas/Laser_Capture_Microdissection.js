Meteor.startup(function() {

    Initialization.Laser_Capture_Microdissection = {
        "commonName": "Laser Capture Microdissection",
        "version": "V1",
        "Form_Name": "Laser_Capture_Microdissection",
        "Fields": [
            Sample_ID_Type,
            {
                "Field_Name": "Core",
                "allowedValues": CoreAllowedValues,
                "label": "Core",
                "max": 200,
                "type": "String"
            },
            {
                "Field_Name": "Completion_Date",
                "autoform": {
                    "afFieldInput": {
                        "type": "bootstrap-datepicker",
                        "timezoneId": "America/Los_Angeles"
                    }
                },
                "label": "Completion Date",
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "SlideNumber",
                "max": 10,
                "min": 1,
                "type": "Number"
            },
            {
                "Field_Name": "Estimated_total_capture_area",
                "label": "Estimated total capture area: [1-20] (float) mm^2",
                "max": 20,
                "min": 1,
                "type": "Number"
            },
            {
                "Field_Name": "Lysates",
                "label": "Lysates [1-4]",
                "max": 4,
                "min": 1,
                "type": "Number"
            },
            {
                "Field_Name": "Lysates_Volume",
                "label": "Lysate volume: [50-200] microliters",
                "max": 200,
                "min": 50,
                "type": "Number"
            },
            {
                "Field_Name": "Downstream_use",
                "allowedValues": [
                    "RNA analysis",
                    "DNA analysis",
                    "aCGH analysis"
                ],
                "label": "Downstream use",
                "max": 200,
                "type": "String"
            }
        ]
    }

})

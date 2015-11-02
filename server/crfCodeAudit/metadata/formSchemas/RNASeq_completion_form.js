Meteor.startup(function() {

    CRFinit.RNASeq_completion_form = {
        "Form_Name": "RNASeq_completion_form",
        "Fields": [
            Patient_ID_Type,
            {
                "Field_Name": "QC_reports",
                "label": "QC reports",
                "type": "String"
            },
            {
                "Field_Name": "RIN_score_from_UCSF",
                "label": "RIN score from UCSF",
                "type": "Number"
            },
            {
                "Field_Name": "date_completed",
                "label": "date completed",
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "date_received",
                "label": "date received",
                "type": "Date",
		"autoform": autoformDate,
            },
            {
                "Field_Name": "library_prep_used",
                "allowedValues": [
                    "Illumina TruSeq Non-stranded",
                    "Illumina TruSeq stranded",
                    "NuGen non-stranded",
                    "NuGen stranded",
                    "Clone Tech stranded",
                    "Clone Tech non-stranded"
                ],
                "label": "library prep used",
                "max": 200,
                "type": "String"
            },
            {
                "Field_Name": "library_prep_notes",
                "label": "library prep notes",
                "type": "String"
            },
            {
                "Field_Name": "location_of_fastq_file",
                "label": "location of fastq file",
                "type": "String"
            }
        ]
    }
    
})

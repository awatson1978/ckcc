Meteor.startup(function() {

    CRFinit.studies = {
        "Form_Name": "studies",
        "Fields": [
            {
                "Field_Name": "cbio_id",
                "decimal": true,
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "id",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "type_of_cancer_id",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "name",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "short_name",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "description",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "public",
                "decimal": true,
                "optional": true,
                "type": "Number"
            },
            {
                "Field_Name": "pmid",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "citation",
                "optional": true,
                "type": "String"
            },
            {
                "Field_Name": "collaborations",
                "optional": true,
                "type": [
                    null
                ]
            },
            {
                "Field_Name": "tables",
                "optional": true,
                "type": [
                    null
                ]
            }
        ]
    }
    
})

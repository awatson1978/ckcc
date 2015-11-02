Meteor.startup(function() {

    CRFinit.Histological_Assessment_form = {
        "Form_Name": "Histological_Assessment_form",
        "Fields": [
            Sample_ID_Type,
            {
                "Field_Name": "Cores",
                "autoform": {
                    "template": "bootstrap3-horizontal"
                },
                "optional": true,
                "type": "Array"
            }
        ]
    }
    
})

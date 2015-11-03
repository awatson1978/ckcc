Meteor.startup(function () {

  Initialization.Histological_Assessment_form = {
    "commonName": "Histological Assessment",
    "version": "V1",
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
  };

});

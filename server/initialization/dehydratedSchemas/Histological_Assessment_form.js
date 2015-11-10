Meteor.startup(function () {

  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Histological_Assessment_form"})) {
      Metadata.insert({
        "_id": "Histological_Assessment_form",
        "name": "Histological_Assessment_form",
        "commonName": "Histological Assessment",
        "version": "V1",
        "n": 18,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String",
            "autoform": {
              "type": "text"
            }
          },
          "Cores": {
            "autoform": {
              "template": "bootstrap3-horizontal"
            },
            "optional": true,
            "type": "Array"
          }
        },
        "metadata": {
          "commonName": "Histological Assessment",
          "version": "V1",
          "Form_Name": "Histological_Assessment_form",
          "Fields": [
            {
              "Field_Name": "Sample_ID",
              "label": "Sample ID",
              "type": "String",
              "autoform": {
                "type": "text"
              }
                  },
            {
              "Field_Name": "Cores",
              "autoform": {
                "template": "bootstrap3-horizontal"
              },
              "optional": true,
              "type": "Array"
                  }
              ]
        },
        "fieldOrder": [
              "Sample_ID",
              "Cores"
          ],
        "study": "prad_wcdt"
      });
    }
  }
});

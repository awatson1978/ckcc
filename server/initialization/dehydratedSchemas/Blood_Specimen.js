Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Blood_Specimen_form"})) {
      Metadata.insert({
        "_id": "Blood_Specimen_form",
        "name": "Blood_Specimen_form",
        "commonName": "Blood Specimen Form",
        "version": "V1",
        "n": 17,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Patient_ID": {
            "label": "Patient ID",
            "type": "String"
          },
          "Timepoint": {
            "allowedValues": [
                  "Baseline",
                  "3 Months",
                  "Progression",
                  "Progression2",
                  "Progression3"
                ],
            "label": "Collection Timepoint",
            "type": "String"
          },
          "Draw_Date": {
            "label": "Draw Date",
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "CRC_at_Collection": {
            "label": "CRC at Collection",
            "optional": true,
            "type": "String"
          }
        },
        "fieldOrder": [
            "Patient_ID",
            "Timepoint",
            "Draw_Date",
            "CRC_at_Collection"
          ],
        "study": "prad_wcdt"
      });
    }
  }

});

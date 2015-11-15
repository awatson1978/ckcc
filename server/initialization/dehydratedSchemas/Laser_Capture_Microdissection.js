Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Laser_Capture_Microdissection"})) {
      Metadata.insert({
        "_id": "Laser_Capture_Microdissection",
        "name": "Laser_Capture_Microdissection",
        "commonName": "Laser Capture Microdissection",
        "version": "V1",
        "n": 19,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String"
          },
          "Core": {
            "allowedValues": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "N/A"
            ],
            "label": "Core",
            "max": 200,
            "type": "String"
          },
          "Completion_Date": {
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            },
            "label": "Completion Date",
            "type": "Date"
          },
          "SlideNumber": {
            "max": 10,
            "min": 1,
            "type": "Number"
          },
          "Estimated_total_capture_area": {
            "label": "Estimated total capture area: [1-20] (float) mm^2",
            "max": 20,
            "min": 1,
            "type": "Number"
          },
          "Lysates": {
            "label": "Lysates [1-4]",
            "max": 4,
            "min": 1,
            "type": "Number"
          },
          "Lysates_Volume": {
            "label": "Lysate volume: [50-200] microliters",
            "max": 200,
            "min": 50,
            "type": "Number"
          },
          "Downstream_use": {
            "allowedValues": [
              "RNA analysis",
              "DNA analysis",
              "aCGH analysis"
            ],
            "label": "Downstream use",
            "max": 200,
            "type": "String"
          }
        },        
        "fieldOrder": [
          "Sample_ID",
          "Core",
          "Completion_Date",
          "SlideNumber",
          "Estimated_total_capture_area",
          "Lysates",
          "Lysates_Volume",
          "Downstream_use"
        ],
        "study": "prad_wcdt"
      });
    }
  }
});

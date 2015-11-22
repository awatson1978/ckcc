Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Laser_Capture_Microdissection"})) {
      Meteor.call("initializeLaserCaptureForm");
    }
  }
});

Meteor.methods({
  initializeLaserCaptureForm:function (){
    Metadata.upsert({"_id": "Laser_Capture_Microdissection"},{$set:{
        "name" : "Laser_Capture_Microdissection",
        "commonName" : "Laser Capture Microdissection",
        "version" : "V1",
        "n" : 19,
        "incompleteCount" : 0,
        "schema" : {
            "CreatedAt" : {
                "label" : "Created At",
                "type" : "Date"
            },
            "Patient_ID" : {
                "label" : "Patient ID",
                "type" : "String"
            },
            "Sample_ID" : {
                "label" : "Sample ID",
                "type" : "String"
            },
            "Core" : {
                "allowedValues" : [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "N/A"
                ],
                "label" : "Core",
                "max" : 200,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "A",
                                "value" : "A"
                            },
                            {
                                "label" : "B",
                                "value" : "B"
                            },
                            {
                                "label" : "C",
                                "value" : "C"
                            },
                            {
                                "label" : "D",
                                "value" : "D"
                            },
                            {
                                "label" : "E",
                                "value" : "E"
                            },
                            {
                                "label" : "F",
                                "value" : "F"
                            },
                            {
                                "label" : "G",
                                "value" : "G"
                            },
                            {
                                "label" : "N/A",
                                "value" : "N/A"
                            }
                        ]
                    }
                }
            },
            "Completion_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "label" : "Completion Date",
                "type" : "Date"
            },
            "SlideNumber" : {
                "max" : 10,
                "min" : 1,
                "type" : "Number"
            },
            "Estimated_total_capture_area" : {
                "label" : "Estimated total capture area: [1-20] (float) mm^2",
                "max" : 20,
                "min" : 1,
                "type" : "Number"
            },
            "Lysates" : {
                "label" : "Lysates [1-4]",
                "max" : 4,
                "min" : 1,
                "type" : "Number"
            },
            "Lysates_Volume" : {
                "label" : "Lysate volume: [50-200] microliters",
                "max" : 200,
                "min" : 50,
                "type" : "Number"
            },
            "Downstream_use" : {
                "allowedValues" : [
                    "RNA analysis",
                    "DNA analysis",
                    "aCGH analysis"
                ],
                "label" : "Downstream use",
                "max" : 200,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "RNA analysis",
                                "value" : "RNA analysis"
                            },
                            {
                                "label" : "DNA analysis",
                                "value" : "DNA analysis"
                            },
                            {
                                "label" : "aCGH analysis",
                                "value" : "aCGH analysis"
                            }
                        ]
                    }
                }
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Sample_ID",
            "Core",
            "Completion_Date",
            "SlideNumber",
            "Estimated_total_capture_area",
            "Lysates",
            "Lysates_Volume",
            "Downstream_use"
        ],
        "study" : "prad_wcdt"
    }});
  },
  createRandomLaserCaptureMicrodisection: function (){
    var newLaserCapture = {
      "questionnaireId" : "Laser_Capture_Microdissection",
      "questionnaireName" : "Laser Capture Microdissection",
      "createdAt" : new Date(),
        "Patient_ID" : Random.id(),
        "Sample_ID": "",
        "Core": "",
        "Completion_Date": new Date(),
        "SlideNumber": "",
        "Estimated_total_capture_area": "",
        "Lysates": "",
        "Lysates_Volume": "",
        "Downstream_use": ""
    };
    Records.insert(newLaserCapture);
  }
});

Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Tissue_Specimen_form"})) {
      Meteor.call("initializeTissueSpecimenForm");
    }
  }
});


Meteor.methods({
  initializeTissueSpecimenForm:function (){
    Metadata.upsert({"_id" : "Tissue_Specimen_form"},{$set:{
        "name" : "Tissue_Specimen_form",
        "commonName" : "Tissue Specimen",
        "version" : "V1",
        "n" : 14,
        "incompleteCount" : 0,
        "schema" : {
            "CreatedAt" : {
                "label" : "Created At",
                "type" : "Date"
            },
            "Sample_ID" : {
                "label" : "Sample ID",
                "type" : "String"
            },
            "Timepoint" : {
                "allowedValues" : [
                    "Baseline",
                    "Progression",
                    "Progression2",
                    "Progression3",
                    "Progression4"
                ],
                "label" : "Timepoint",
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "Baseline",
                                "value" : "Baseline"
                            },
                            {
                                "label" : "Progression",
                                "value" : "Progression"
                            },
                            {
                                "label" : "Progression2",
                                "value" : "Progression2"
                            },
                            {
                                "label" : "Progression3",
                                "value" : "Progression3"
                            },
                            {
                                "label" : "Progression4",
                                "value" : "Progression4"
                            }
                        ]
                    }
                }
            },
            "Procedure_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "label" : "Procedure Date",
                "type" : "Date"
            },
            "Attending_Radiologist" : {
                "label" : "Attending Radiologist",
                "optional" : true,
                "type" : "String"
            },
            "CRC_at_Collection" : {
                "label" : "CRC at Collection",
                "optional" : true,
                "type" : "String"
            },
            "Number_of_Cores" : {
                "decimal" : true,
                "label" : "Number of Cores Collected",
                "type" : "Number"
            },
            "Cores" : {
                "label" : "Cores",
                "optional" : true,
                "type" : "ObjectArray"
            },
            "Fixed_Core_Ship_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "label" : "Fixed Core Ship Date",
                "optional" : true,
                "type" : "Date"
            },
            "Freezer" : {
                "label" : "Frozen Core Storage",
                "max" : 200,
                "optional" : true,
                "type" : "String"
            },
            "Box_ID" : {
                "label" : "Box ID",
                "optional" : true,
                "type" : "String"
            },
            "Core_Notes" : {
                "label" : "Core Notes",
                "optional" : true,
                "type" : "String"
            },
            "TimepointNotes" : {
                "label" : "Timepoint Notes*",
                "max" : 2000,
                "optional" : true,
                "type" : "String"
            }
        },
        "fieldOrder" : [
            "Sample_ID",
            "Timepoint",
            "Procedure_Date",
            "Attending_Radiologist",
            "CRC_at_Collection",
            "Number_of_Cores",
            "Cores",
            "Fixed_Core_Ship_Date",
            "Freezer",
            "Box_ID",
            "Core_Notes",
            "TimepointNotes"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

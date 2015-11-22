Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "RNASeq_completion_form"})) {
      Meteor.call("initializeRnaSequenceForm");
    }
  }
});


Meteor.methods({
  initializeRnaSequenceForm:function (){
    Metadata.upsert({"_id": "RNASeq_completion_form"},{$set:{
        "name" : "RNASeq_completion_form",
        "commonName" : "RNA Sequence Completion",
        "version" : "V1",
        "n" : 20,
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
            "QC_reports" : {
              "label" : "QC reports",
              "type" : "String"
            },
            "RIN_score_from_UCSF" : {
              "label" : "RIN score from UCSF",
              "type" : "Number"
            },
            "date_completed" : {
              "label" : "date completed",
              "type" : "Date",
              "autoform" : {
                "afFieldInput" : {
                  "type" : "date",
                  "timezoneId" : "America/Los_Angeles"
                }
              }
            },
            "date_received" : {
                "label" : "date received",
                "type" : "Date",
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                }
            },
            "library_prep_used" : {
                "allowedValues" : [
                    "Illumina TruSeq Non-stranded",
                    "Illumina TruSeq stranded",
                    "NuGen non-stranded",
                    "NuGen stranded",
                    "Clone Tech stranded",
                    "Clone Tech non-stranded"
                ],
                "label" : "library prep used",
                "max" : 200,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "Illumina TruSeq Non-stranded",
                                "value" : "Illumina TruSeq Non-stranded"
                            },
                            {
                                "label" : "Illumina TruSeq stranded",
                                "value" : "Illumina TruSeq stranded"
                            },
                            {
                                "label" : "NuGen non-stranded",
                                "value" : "NuGen non-stranded"
                            },
                            {
                                "label" : "NuGen stranded",
                                "value" : "NuGen stranded"
                            },
                            {
                                "label" : "Clone Tech stranded",
                                "value" : "Clone Tech stranded"
                            },
                            {
                                "label" : "Clone Tech non-stranded",
                                "value" : "Clone Tech non-stranded"
                            }
                        ]
                    }
                }
            },
            "library_prep_notes" : {
                "label" : "library prep notes",
                "type" : "String"
            },
            "location_of_fastq_file" : {
                "label" : "location of fastq file",
                "type" : "String"
            }
        },
        "fieldOrder" : [
          "Patient_ID",
          "QC_reports",
          "RIN_score_from_UCSF",
          "date_completed",
          "date_received",
          "library_prep_used",
          "library_prep_notes",
          "location_of_fastq_file"
        ],
        "study" : "prad_wcdt"
    }});
  },
  createRandomRnaSequence: function (){
    var newRnaSequence = {
      "questionnaireId" : "RNASeq_completion_form",
      "questionnaireName" : "RNA Sequence Completion",
      "createdAt" : new Date(),
        "Patient_ID" : Random.id(),
        "QC_reports": "",
        "RIN_score_from_UCSF": "",
        "date_completed": new Date(),
        "date_received": new Date(),
        "library_prep_used": faker.lorem.paragraph(),
        "library_prep_notes": faker.lorem.paragraph(),
        "location_of_fastq_file": ""
    };
    Records.insert(newRnaSequence);

  }
});

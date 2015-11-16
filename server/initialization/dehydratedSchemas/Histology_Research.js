Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Histology_Research"})) {
      Meteor.call("initializeHistologyResearchForm");
    }
  }
});


Meteor.methods({
  initializeHistologyResearchForm:function (){
    Metadata.upsert({"_id": "Histology_Research"},{$set:{
        "name" : "Histology_Research",
        "commonName" : "Histological Research",
        "version" : "V1",
        "n" : 13,
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
            "Histology_Call" : {
                "allowedValues" : [
                    "Adeno",
                    "Small Cell",
                    "IAC/Adeno",
                    "IAC",
                    "Indeterminate",
                    "Intermediate",
                    "IAC/SC",
                    "Adeno/SC",
                    "Unavailable",
                    "QNS"
                ],
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "Adeno",
                                "value" : "Adeno"
                            },
                            {
                                "label" : "Small Cell",
                                "value" : "Small Cell"
                            },
                            {
                                "label" : "IAC/Adeno",
                                "value" : "IAC/Adeno"
                            },
                            {
                                "label" : "IAC",
                                "value" : "IAC"
                            },
                            {
                                "label" : "Indeterminate",
                                "value" : "Indeterminate"
                            },
                            {
                                "label" : "Intermediate",
                                "value" : "Intermediate"
                            },
                            {
                                "label" : "IAC/SC",
                                "value" : "IAC/SC"
                            },
                            {
                                "label" : "Adeno/SC",
                                "value" : "Adeno/SC"
                            },
                            {
                                "label" : "Unavailable",
                                "value" : "Unavailable"
                            },
                            {
                                "label" : "QNS",
                                "value" : "QNS"
                            }
                        ]
                    }
                }
            },
            "Adeno" : {
                "type" : "String"
            },
            "Small_Cell" : {
                "type" : "String"
            },
            "Trichotomy" : {
                "type" : "String"
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Sample_ID",
            "Histology_Call",
            "Adeno",
            "Small_Cell",
            "Trichotomy"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

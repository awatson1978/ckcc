Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Pathology_form"})) {
      Meteor.call("initializePathologyForm");
    }
  }
});


Meteor.methods({
  initializePathologyForm:function (){
    Metadata.upsert({"_id": "Pathology_form"},{$set:{
    "name" : "Pathology_form",
    "commonName" : "Pathology Report",
    "version" : "V1",
    "n" : 16,
    "incompleteCount" : 0,
    "schema" : {
        "CreatedAt" : {
            "label" : "Created At",
            "type" : "Date"
        },
        "Patient_ID" : {
            "label" : "Patient_ID",
            "type" : "String"
        },
        "Sample_ID" : {
            "label" : "Sample ID",
            "type" : "String"
        },
        "Tumor_Content" : {
            "allowedValues" : [
                "None",
                "<5%",
                "5%",
                "10%",
                "20%",
                "30%",
                "40%",
                "50%",
                "60%",
                "70%",
                "80%",
                "90%",
                "100%"
            ],
            "label" : "Tumor Content",
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "None",
                            "value" : "None"
                        },
                        {
                            "label" : "<5%",
                            "value" : "<5%"
                        },
                        {
                            "label" : "5%",
                            "value" : "5%"
                        },
                        {
                            "label" : "10%",
                            "value" : "10%"
                        },
                        {
                            "label" : "20%",
                            "value" : "20%"
                        },
                        {
                            "label" : "30%",
                            "value" : "30%"
                        },
                        {
                            "label" : "40%",
                            "value" : "40%"
                        },
                        {
                            "label" : "50%",
                            "value" : "50%"
                        },
                        {
                            "label" : "60%",
                            "value" : "60%"
                        },
                        {
                            "label" : "70%",
                            "value" : "70%"
                        },
                        {
                            "label" : "80%",
                            "value" : "80%"
                        },
                        {
                            "label" : "90%",
                            "value" : "90%"
                        },
                        {
                            "label" : "100%",
                            "value" : "100%"
                        }
                    ]
                }
            }
        },
        "Preliminary_Histology" : {
            "allowedValues" : [
                "Adenocarcinoma",
                "Possible SC",
                "Small Cell",
                "ANPC",
                "Mixed",
                "N/A"
            ],
            "label" : "Preliminary Histology",
            "max" : 200,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Adenocarcinoma",
                            "value" : "Adenocarcinoma"
                        },
                        {
                            "label" : "Possible SC",
                            "value" : "Possible SC"
                        },
                        {
                            "label" : "Small Cell",
                            "value" : "Small Cell"
                        },
                        {
                            "label" : "ANPC",
                            "value" : "ANPC"
                        },
                        {
                            "label" : "Mixed",
                            "value" : "Mixed"
                        },
                        {
                            "label" : "N/A",
                            "value" : "N/A"
                        }
                    ]
                }
            }
        },
        "Final_Histology" : {
            "allowedValues" : [
                "Adenocarcinoma",
                "Small Cell",
                "ANPC",
                "Indeterminate",
                "Atypical with Adeno Architecture",
                "Adeno+ANPC",
                "Adeno+SC",
                "ANPC+SC",
                "N/A"
            ],
            "label" : "Final Histology Call",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Adenocarcinoma",
                            "value" : "Adenocarcinoma"
                        },
                        {
                            "label" : "Small Cell",
                            "value" : "Small Cell"
                        },
                        {
                            "label" : "ANPC",
                            "value" : "ANPC"
                        },
                        {
                            "label" : "Indeterminate",
                            "value" : "Indeterminate"
                        },
                        {
                            "label" : "Atypical with Adeno Architecture",
                            "value" : "Atypical with Adeno Architecture"
                        },
                        {
                            "label" : "Adeno+ANPC",
                            "value" : "Adeno+ANPC"
                        },
                        {
                            "label" : "Adeno+SC",
                            "value" : "Adeno+SC"
                        },
                        {
                            "label" : "ANPC+SC",
                            "value" : "ANPC+SC"
                        },
                        {
                            "label" : "N/A",
                            "value" : "N/A"
                        }
                    ]
                }
            }
        },
        "AR-FISH_IHC" : {
            "allowedValues" : [
                "Positive",
                "Focal Positive",
                "Negative",
                "Weak",
                "Failed",
                "Not Performed"
            ],
            "label" : "AR Immunohistochemistry",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Positive",
                            "value" : "Positive"
                        },
                        {
                            "label" : "Focal Positive",
                            "value" : "Focal Positive"
                        },
                        {
                            "label" : "Negative",
                            "value" : "Negative"
                        },
                        {
                            "label" : "Weak",
                            "value" : "Weak"
                        },
                        {
                            "label" : "Failed",
                            "value" : "Failed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        },
        "PSA_IHC" : {
            "allowedValues" : [
                "Positive",
                "Focal Positive",
                "Negative",
                "Weak",
                "Failed",
                "Not Performed"
            ],
            "label" : "PSA Immunohistochemistry",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Positive",
                            "value" : "Positive"
                        },
                        {
                            "label" : "Focal Positive",
                            "value" : "Focal Positive"
                        },
                        {
                            "label" : "Negative",
                            "value" : "Negative"
                        },
                        {
                            "label" : "Weak",
                            "value" : "Weak"
                        },
                        {
                            "label" : "Failed",
                            "value" : "Failed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        },
        "CHGA_IHC" : {
            "allowedValues" : [
                "Positive",
                "Focal Positive",
                "Negative",
                "Weak",
                "Failed",
                "Not Performed"
            ],
            "label" : "CHGA Immunohistochemistry",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Positive",
                            "value" : "Positive"
                        },
                        {
                            "label" : "Focal Positive",
                            "value" : "Focal Positive"
                        },
                        {
                            "label" : "Negative",
                            "value" : "Negative"
                        },
                        {
                            "label" : "Weak",
                            "value" : "Weak"
                        },
                        {
                            "label" : "Failed",
                            "value" : "Failed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        },
        "CHGA_test_performed" : {
            "allowedValues" : [
                "Performed",
                "Not Performed"
            ],
            "label" : "CHGA test performed",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Performed",
                            "value" : "Performed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        },
        "AR-FISH_test_performed" : {
            "allowedValues" : [
                "Performed",
                "Not Performed"
            ],
            "label" : "AR-FISH test performed",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Performed",
                            "value" : "Performed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        },
        "AR_chromosomeX_ratio" : {
            "decimal" : true,
            "optional" : true,
            "type" : "Number"
        },
        "ION_Torrent_test_performed" : {
            "allowedValues" : [
                "Yes",
                "No"
            ],
            "label" : "ION Torrent test performed",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Yes",
                            "value" : "Yes"
                        },
                        {
                            "label" : "No",
                            "value" : "No"
                        }
                    ]
                }
            }
        },
        "PTEN_IHC" : {
            "allowedValues" : [
                "Positive",
                "Negative",
                "Weak",
                "N/A"
            ],
            "label" : "PTEN Immunohistochemistry",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Positive",
                            "value" : "Positive"
                        },
                        {
                            "label" : "Negative",
                            "value" : "Negative"
                        },
                        {
                            "label" : "Weak",
                            "value" : "Weak"
                        },
                        {
                            "label" : "N/A",
                            "value" : "N/A"
                        }
                    ]
                }
            }
        },
        "PTEN_test_performed" : {
            "allowedValues" : [
                "Performed",
                "Not Performed"
            ],
            "label" : "PTEN test performed",
            "max" : 200,
            "optional" : true,
            "type" : "String",
            "autoform" : {
                "afFieldInput" : {
                    "options" : [
                        {
                            "label" : "Performed",
                            "value" : "Performed"
                        },
                        {
                            "label" : "Not Performed",
                            "value" : "Not Performed"
                        }
                    ]
                }
            }
        }
    },
    "fieldOrder" : [
        "Patient_ID",
        "Sample_ID",
        "Tumor_Content",
        "Preliminary_Histology",
        "Final_Histology",
        "AR-FISH_IHC",
        "PSA_IHC",
        "CHGA_IHC",
        "CHGA_test_performed",
        "AR-FISH_test_performed",
        "AR_chromosomeX_ratio",
        "ION_Torrent_test_performed",
        "PTEN_IHC",
        "PTEN_test_performed"
    ],
    "study" : "prad_wcdt"
    }});
  }
});

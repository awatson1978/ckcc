Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Patient_Enrollment_form"})) {
      Meteor.call("initializePatientEnrollmentForm");
    }
  }
});


Meteor.methods({
  initializePatientEnrollmentForm:function (){
    Metadata.upsert({"_id": "Patient_Enrollment_form"},{$set:{
        "name" : "Patient_Enrollment_form",
        "commonName" : "Patient Enrollement",
        "version" : "V1",
        "n" : 15,
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
            "Study_Site" : {
                "allowedValues" : [
                    "UCSF",
                    "OHSU",
                    "UCLA",
                    "UCD",
                    "UBC",
                    "LAVA"
                ],
                "label" : "Study Site",
                "max" : 200,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "UCSF",
                                "value" : "UCSF"
                            },
                            {
                                "label" : "OHSU",
                                "value" : "OHSU"
                            },
                            {
                                "label" : "UCLA",
                                "value" : "UCLA"
                            },
                            {
                                "label" : "UCD",
                                "value" : "UCD"
                            },
                            {
                                "label" : "UBC",
                                "value" : "UBC"
                            },
                            {
                                "label" : "LAVA",
                                "value" : "LAVA"
                            }
                        ]
                    }
                }
            },
            "Baseline_Sample_ID" : {
                "label" : "Baseline Sample ID",
                "type" : "String"
            },
            "Baseline_Biopsy_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "label" : "Baseline Biopsy Date",
                "type" : "Date"
            },
            "Baseline_Biopsy_Site" : {
                "allowedValues" : [
                    "Bone",
                    "Liver",
                    "Lymph Node",
                    "Adrenal lesion",
                    "Seminal Vesicle mass",
                    "Spinal Mass",
                    "Lung",
                    "Bladder mass"
                ],
                "label" : "Baseline Biopsy Site",
                "max" : 200,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "Bone",
                                "value" : "Bone"
                            },
                            {
                                "label" : "Liver",
                                "value" : "Liver"
                            },
                            {
                                "label" : "Lymph Node",
                                "value" : "Lymph Node"
                            },
                            {
                                "label" : "Adrenal lesion",
                                "value" : "Adrenal lesion"
                            },
                            {
                                "label" : "Seminal Vesicle mass",
                                "value" : "Seminal Vesicle mass"
                            },
                            {
                                "label" : "Spinal Mass",
                                "value" : "Spinal Mass"
                            },
                            {
                                "label" : "Lung",
                                "value" : "Lung"
                            },
                            {
                                "label" : "Bladder mass",
                                "value" : "Bladder mass"
                            }
                        ]
                    }
                }
            },
            "Progression_Sample_ID" : {
                "label" : "Progression Sample ID",
                "optional" : true,
                "type" : "String"
            },
            "Progression_Biopsy_Date" : {
                "autoform" : {
                    "afFieldInput" : {
                        "type" : "date",
                        "timezoneId" : "America/Los_Angeles"
                    }
                },
                "label" : "Progression Biopsy Date",
                "optional" : true,
                "type" : "Date"
            },
            "Progression_Biopsy_Site" : {
                "allowedValues" : [
                    "Bone",
                    "Liver",
                    "Lymph Node",
                    "Adrenal lesion",
                    "Seminal Vesicle mass",
                    "Spinal Mass",
                    "Lung",
                    "Bladder mass"
                ],
                "label" : "Progression Biopsy Site",
                "max" : 200,
                "optional" : true,
                "type" : "String",
                "autoform" : {
                    "afFieldInput" : {
                        "options" : [
                            {
                                "label" : "Bone",
                                "value" : "Bone"
                            },
                            {
                                "label" : "Liver",
                                "value" : "Liver"
                            },
                            {
                                "label" : "Lymph Node",
                                "value" : "Lymph Node"
                            },
                            {
                                "label" : "Adrenal lesion",
                                "value" : "Adrenal lesion"
                            },
                            {
                                "label" : "Seminal Vesicle mass",
                                "value" : "Seminal Vesicle mass"
                            },
                            {
                                "label" : "Spinal Mass",
                                "value" : "Spinal Mass"
                            },
                            {
                                "label" : "Lung",
                                "value" : "Lung"
                            },
                            {
                                "label" : "Bladder mass",
                                "value" : "Bladder mass"
                            }
                        ]
                    }
                }
            }
        },
        "fieldOrder" : [
            "Patient_ID",
            "Study_Site",
            "Baseline_Sample_ID",
            "Baseline_Biopsy_Date",
            "Baseline_Biopsy_Site",
            "Progression_Sample_ID",
            "Progression_Biopsy_Date",
            "Progression_Biopsy_Site"
        ],
        "study" : "prad_wcdt"
    }});
  }
});

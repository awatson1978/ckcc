Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Clinical_Info"})) {
      Meteor.call("initializeClinicalInfoForm");
    }
  }
});


Meteor.methods({
  initializeClinicalInfoForm:function (){
    Metadata.upsert({"_id": "Clinical_Info"}, {$set: {
      "name" : "Clinical_Info",
      "commonName" : "Clinical Info",
      "version" : "V1",
      "n" : 0,
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
          "prior_txs" : {
              "label" : "Prior Treatments ",
              "optional" : true,
              "type" : "StringArray",
              "autoform" : {
                  "afArrayField" : {
                      "template" : "photonic"
                  }
              }
          },
          "biopsy_date" : {
              "label" : "Biopsy Date",
              "optional" : true,
              "type" : "Date",
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              }
          },
          "subsequent_txs" : {
              "label" : "Subsequent Treatments",
              "optional" : true,
              "type" : "StringArray",
              "autoform" : {
                  "afArrayField" : {
                      "template" : "photonic"
                  }
              }
          },
          "biopsy_site" : {
              "allowedValues" : [
                  "Adrenal",
                  "Bladder",
                  "Bone",
                  "Brain",
                  "Liver",
                  "Lung",
                  "Lymph node",
                  "Soft tissue",
                  "Other"
              ],
              "label" : "Biopsy site",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Adrenal",
                              "value" : "Adrenal"
                          },
                          {
                              "label" : "Bladder",
                              "value" : "Bladder"
                          },
                          {
                              "label" : "Bone",
                              "value" : "Bone"
                          },
                          {
                              "label" : "Brain",
                              "value" : "Brain"
                          },
                          {
                              "label" : "Liver",
                              "value" : "Liver"
                          },
                          {
                              "label" : "Lung",
                              "value" : "Lung"
                          },
                          {
                              "label" : "Lymph node",
                              "value" : "Lymph node"
                          },
                          {
                              "label" : "Soft tissue",
                              "value" : "Soft tissue"
                          },
                          {
                              "label" : "Other",
                              "value" : "Other"
                          }
                      ]
                  }
              }
          },
          "Enzalutamide" : {
              "allowedValues" : [
                  "Naive",
                  "On Tx",
                  "On-Tx",
                  "Resistant",
                  "Unk"
              ],
              "label" : "Enzalutamide",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Naive",
                              "value" : "Naive"
                          },
                          {
                              "label" : "On Tx",
                              "value" : "On Tx"
                          },
                          {
                              "label" : "On-Tx",
                              "value" : "On-Tx"
                          },
                          {
                              "label" : "Resistant",
                              "value" : "Resistant"
                          },
                          {
                              "label" : "Unk",
                              "value" : "Unk"
                          }
                      ]
                  }
              }
          },
          "Abiraterone" : {
              "allowedValues" : [
                  "Exposed",
                  "Naive",
                  "On Tx",
                  "Resistant",
                  "Unk"
              ],
              "label" : "Abiraterone",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Exposed",
                              "value" : "Exposed"
                          },
                          {
                              "label" : "Naive",
                              "value" : "Naive"
                          },
                          {
                              "label" : "On Tx",
                              "value" : "On Tx"
                          },
                          {
                              "label" : "Resistant",
                              "value" : "Resistant"
                          },
                          {
                              "label" : "Unk",
                              "value" : "Unk"
                          }
                      ]
                  }
              }
          },
          "site" : {
              "allowedValues" : [
                  "OHSU",
                  "UBC",
                  "UCD",
                  "UCLA",
                  "UCLA-VA",
                  "UCSF"
              ],
              "label" : "Site",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "OHSU",
                              "value" : "OHSU"
                          },
                          {
                              "label" : "UBC",
                              "value" : "UBC"
                          },
                          {
                              "label" : "UCD",
                              "value" : "UCD"
                          },
                          {
                              "label" : "UCLA",
                              "value" : "UCLA"
                          },
                          {
                              "label" : "UCLA-VA",
                              "value" : "UCLA-VA"
                          },
                          {
                              "label" : "UCSF",
                              "value" : "UCSF"
                          }
                      ]
                  }
              }
          },
          "age" : {
              "label" : "Age",
              "optional" : true,
              "type" : "Number"
          },
          "Reason_for_Stopping_Treatment" : {
              "allowedValues" : [
                  "Adverse Event",
                  "Adverse event (N/V)",
                  "Adverse event (fatigue)",
                  "Adverse event (febrile neutropenia)",
                  "Adverse Event/Side Effects/Complications",
                  "Adverse event - osteonecrosis",
                  "Clinical PD",
                  "Completed Treatment",
                  "Death",
                  "Death on study",
                  "Disease progression, relapse during active treatment",
                  "Lost to followup",
                  "Other",
                  "PD",
                  "PSA + radiographic PD",
                  "PSA PD",
                  "PSA PD, adverse event",
                  "PSA PD + patient withdrawal",
                  "Progressive Disease",
                  "Pt decision",
                  "Physician Discretion",
                  "Radiographic PD",
                  "Patient Choice",
                  "Patient Demise",
                  "Patient withdrawal or refusal after beginning protocol therapy",
                  "Patient withdrawal or refusal prior to beginning protocol therapy",
                  "Treatment completed per protocol criteria",
                  "TBD",
                  "Tx break",
                  "Tx ongoing",
                  "N/A"
              ],
              "label" : "Reason for Stop",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Adverse Event",
                              "value" : "Adverse Event"
                          },
                          {
                              "label" : "Adverse event (N/V)",
                              "value" : "Adverse event (N/V)"
                          },
                          {
                              "label" : "Adverse event (fatigue)",
                              "value" : "Adverse event (fatigue)"
                          },
                          {
                              "label" : "Adverse event (febrile neutropenia)",
                              "value" : "Adverse event (febrile neutropenia)"
                          },
                          {
                              "label" : "Adverse Event/Side Effects/Complications",
                              "value" : "Adverse Event/Side Effects/Complications"
                          },
                          {
                              "label" : "Adverse event - osteonecrosis",
                              "value" : "Adverse event - osteonecrosis"
                          },
                          {
                              "label" : "Clinical PD",
                              "value" : "Clinical PD"
                          },
                          {
                              "label" : "Completed Treatment",
                              "value" : "Completed Treatment"
                          },
                          {
                              "label" : "Death",
                              "value" : "Death"
                          },
                          {
                              "label" : "Death on study",
                              "value" : "Death on study"
                          },
                          {
                              "label" : "Disease progression, relapse during active treatment",
                              "value" : "Disease progression, relapse during active treatment"
                          },
                          {
                              "label" : "Lost to followup",
                              "value" : "Lost to followup"
                          },
                          {
                              "label" : "Other",
                              "value" : "Other"
                          },
                          {
                              "label" : "PD",
                              "value" : "PD"
                          },
                          {
                              "label" : "PSA + radiographic PD",
                              "value" : "PSA + radiographic PD"
                          },
                          {
                              "label" : "PSA PD",
                              "value" : "PSA PD"
                          },
                          {
                              "label" : "PSA PD, adverse event",
                              "value" : "PSA PD, adverse event"
                          },
                          {
                              "label" : "PSA PD + patient withdrawal",
                              "value" : "PSA PD + patient withdrawal"
                          },
                          {
                              "label" : "Progressive Disease",
                              "value" : "Progressive Disease"
                          },
                          {
                              "label" : "Pt decision",
                              "value" : "Pt decision"
                          },
                          {
                              "label" : "Physician Discretion",
                              "value" : "Physician Discretion"
                          },
                          {
                              "label" : "Radiographic PD",
                              "value" : "Radiographic PD"
                          },
                          {
                              "label" : "Patient Choice",
                              "value" : "Patient Choice"
                          },
                          {
                              "label" : "Patient Demise",
                              "value" : "Patient Demise"
                          },
                          {
                              "label" : "Patient withdrawal or refusal after beginning protocol therapy",
                              "value" : "Patient withdrawal or refusal after beginning protocol therapy"
                          },
                          {
                              "label" : "Patient withdrawal or refusal prior to beginning protocol therapy",
                              "value" : "Patient withdrawal or refusal prior to beginning protocol therapy"
                          },
                          {
                              "label" : "Treatment completed per protocol criteria",
                              "value" : "Treatment completed per protocol criteria"
                          },
                          {
                              "label" : "TBD",
                              "value" : "TBD"
                          },
                          {
                              "label" : "Tx break",
                              "value" : "Tx break"
                          },
                          {
                              "label" : "Tx ongoing",
                              "value" : "Tx ongoing"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "AR_Amplification_by_FISH" : {
              "label" : "AR Amplification by FISH",
              "optional" : true,
              "type" : "String"
          },
          "Days_on_Study" : {
              "label" : "Days On Study",
              "optional" : true,
              "type" : "Number"
          },
          "On_Study_Date" : {
              "label" : "On Study Date",
              "optional" : true,
              "type" : "Date",
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              }
          },
          "Off_Study_Date" : {
              "label" : "Off Study Date",
              "optional" : true,
              "type" : "Date",
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              }
          },
          "abi_psa_response" : {
              "allowedValues" : [
                  "No Decline",
                  "0%-30%",
                  "30%-50%",
                  "50%-90%",
                  ">90%",
                  "N/A"
              ],
              "label" : "Abi PSA response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "No Decline",
                              "value" : "No Decline"
                          },
                          {
                              "label" : "0%-30%",
                              "value" : "0%-30%"
                          },
                          {
                              "label" : "30%-50%",
                              "value" : "30%-50%"
                          },
                          {
                              "label" : "50%-90%",
                              "value" : "50%-90%"
                          },
                          {
                              "label" : ">90%",
                              "value" : ">90%"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "abi_radiographic_response" : {
              "allowedValues" : [
                  "None",
                  "Complete response",
                  "Minor response",
                  "Partial response",
                  "Stable disease",
                  "N/A (bone only)",
                  "N/A (no mets at BL)",
                  "NE",
                  "PD",
                  "SD",
                  "N/A"
              ],
              "label" : "Abi radiographic response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "Complete response",
                              "value" : "Complete response"
                          },
                          {
                              "label" : "Minor response",
                              "value" : "Minor response"
                          },
                          {
                              "label" : "Partial response",
                              "value" : "Partial response"
                          },
                          {
                              "label" : "Stable disease",
                              "value" : "Stable disease"
                          },
                          {
                              "label" : "N/A (bone only)",
                              "value" : "N/A (bone only)"
                          },
                          {
                              "label" : "N/A (no mets at BL)",
                              "value" : "N/A (no mets at BL)"
                          },
                          {
                              "label" : "NE",
                              "value" : "NE"
                          },
                          {
                              "label" : "PD",
                              "value" : "PD"
                          },
                          {
                              "label" : "SD",
                              "value" : "SD"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "abi_reason_for_d/c" : {
              "allowedValues" : [
                  "Clinical PD",
                  "PD",
                  "PSA + radiographic PD",
                  "PSA PD",
                  "Radigraphic PD",
                  "Radiographic  PD",
                  "Radiographic + PSA PD",
                  "Radiographic PD",
                  "Tx ongoing",
                  "N/A"
              ],
              "label" : "Abi reason for d/c",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Clinical PD",
                              "value" : "Clinical PD"
                          },
                          {
                              "label" : "PD",
                              "value" : "PD"
                          },
                          {
                              "label" : "PSA + radiographic PD",
                              "value" : "PSA + radiographic PD"
                          },
                          {
                              "label" : "PSA PD",
                              "value" : "PSA PD"
                          },
                          {
                              "label" : "Radigraphic PD",
                              "value" : "Radigraphic PD"
                          },
                          {
                              "label" : "Radiographic  PD",
                              "value" : "Radiographic  PD"
                          },
                          {
                              "label" : "Radiographic + PSA PD",
                              "value" : "Radiographic + PSA PD"
                          },
                          {
                              "label" : "Radiographic PD",
                              "value" : "Radiographic PD"
                          },
                          {
                              "label" : "Tx ongoing",
                              "value" : "Tx ongoing"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "enza_psa_response" : {
              "allowedValues" : [
                  "-",
                  "0-30%",
                  "30-50%",
                  "30-50% decline",
                  "> 50%",
                  "> 90%",
                  "N/A"
              ],
              "label" : "Enza PSA response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "-",
                              "value" : "-"
                          },
                          {
                              "label" : "0-30%",
                              "value" : "0-30%"
                          },
                          {
                              "label" : "30-50%",
                              "value" : "30-50%"
                          },
                          {
                              "label" : "30-50% decline",
                              "value" : "30-50% decline"
                          },
                          {
                              "label" : "> 50%",
                              "value" : "> 50%"
                          },
                          {
                              "label" : "> 90%",
                              "value" : "> 90%"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "enza_radiographic_response" : {
              "allowedValues" : [
                  "None",
                  "BS with progression; CT stable",
                  "CT progression",
                  "NE",
                  "SD",
                  "Stable disease",
                  "Partial response",
                  "N/A"
              ],
              "label" : "Enza radiographic response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "BS with progression; CT stable",
                              "value" : "BS with progression; CT stable"
                          },
                          {
                              "label" : "CT progression",
                              "value" : "CT progression"
                          },
                          {
                              "label" : "NE",
                              "value" : "NE"
                          },
                          {
                              "label" : "SD",
                              "value" : "SD"
                          },
                          {
                              "label" : "Stable disease",
                              "value" : "Stable disease"
                          },
                          {
                              "label" : "Partial response",
                              "value" : "Partial response"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "enza_reason_for_d/c" : {
              "allowedValues" : [
                  "-",
                  "Clinical PD",
                  "PD",
                  "PSA + radiographic PD",
                  "PSA PD",
                  "PSA symptomatic PD",
                  "Radiographic PD",
                  "Tx ongoing",
                  "N/A"
              ],
              "label" : "Enza reason for D/C",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "-",
                              "value" : "-"
                          },
                          {
                              "label" : "Clinical PD",
                              "value" : "Clinical PD"
                          },
                          {
                              "label" : "PD",
                              "value" : "PD"
                          },
                          {
                              "label" : "PSA + radiographic PD",
                              "value" : "PSA + radiographic PD"
                          },
                          {
                              "label" : "PSA PD",
                              "value" : "PSA PD"
                          },
                          {
                              "label" : "PSA symptomatic PD",
                              "value" : "PSA symptomatic PD"
                          },
                          {
                              "label" : "Radiographic PD",
                              "value" : "Radiographic PD"
                          },
                          {
                              "label" : "Tx ongoing",
                              "value" : "Tx ongoing"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "prior_tissue" : {
              "allowedValues" : [
                  "1. Prostate biopsy, 2. Prostate biopsy, 3. TURP",
                  "1. Prostate biopsy, 2. Radical Prostatectomy",
                  "1. Prostate biopsy, 2. Radical prostatectomy",
                  "1",
                  "1. Lung met",
                  "1. Lung nodule core biopsy 2. Lung nodule wedge resection",
                  "1. Prostate biopsy",
                  "1. Prostate biopsy 2.  Liver biopsy",
                  "1. Prostate biopsy 2. L Pelvic node",
                  "1. Prostate biopsy 2. Node biopsy 3. Node biopsy",
                  "1. Prostate biopsy 2. Prostate biopsy 3. Node biopsy",
                  "1. Prostate biopsy 2. Prostatectomy 3. Lymph biopsy",
                  "1. R iliac bone",
                  "1. Radical prostatectomy",
                  "1. SV biopsy",
                  "1. SV biopsy 2. T6 metastasis",
                  "1. TURP",
                  "1. left neck lymph node biopsy",
                  "1. prostate biopsy",
                  "1.Prostate biopsy 2. Prostatectomy 3. Liver biopsy",
                  "None",
                  "Prostate biopsy",
                  "n/a"
              ],
              "label" : "Prior tissue",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "1. Prostate biopsy, 2. Prostate biopsy, 3. TURP",
                              "value" : "1. Prostate biopsy, 2. Prostate biopsy, 3. TURP"
                          },
                          {
                              "label" : "1. Prostate biopsy, 2. Radical Prostatectomy",
                              "value" : "1. Prostate biopsy, 2. Radical Prostatectomy"
                          },
                          {
                              "label" : "1. Prostate biopsy, 2. Radical prostatectomy",
                              "value" : "1. Prostate biopsy, 2. Radical prostatectomy"
                          },
                          {
                              "label" : "1",
                              "value" : "1"
                          },
                          {
                              "label" : "1. Lung met",
                              "value" : "1. Lung met"
                          },
                          {
                              "label" : "1. Lung nodule core biopsy 2. Lung nodule wedge resection",
                              "value" : "1. Lung nodule core biopsy 2. Lung nodule wedge resection"
                          },
                          {
                              "label" : "1. Prostate biopsy",
                              "value" : "1. Prostate biopsy"
                          },
                          {
                              "label" : "1. Prostate biopsy 2.  Liver biopsy",
                              "value" : "1. Prostate biopsy 2.  Liver biopsy"
                          },
                          {
                              "label" : "1. Prostate biopsy 2. L Pelvic node",
                              "value" : "1. Prostate biopsy 2. L Pelvic node"
                          },
                          {
                              "label" : "1. Prostate biopsy 2. Node biopsy 3. Node biopsy",
                              "value" : "1. Prostate biopsy 2. Node biopsy 3. Node biopsy"
                          },
                          {
                              "label" : "1. Prostate biopsy 2. Prostate biopsy 3. Node biopsy",
                              "value" : "1. Prostate biopsy 2. Prostate biopsy 3. Node biopsy"
                          },
                          {
                              "label" : "1. Prostate biopsy 2. Prostatectomy 3. Lymph biopsy",
                              "value" : "1. Prostate biopsy 2. Prostatectomy 3. Lymph biopsy"
                          },
                          {
                              "label" : "1. R iliac bone",
                              "value" : "1. R iliac bone"
                          },
                          {
                              "label" : "1. Radical prostatectomy",
                              "value" : "1. Radical prostatectomy"
                          },
                          {
                              "label" : "1. SV biopsy",
                              "value" : "1. SV biopsy"
                          },
                          {
                              "label" : "1. SV biopsy 2. T6 metastasis",
                              "value" : "1. SV biopsy 2. T6 metastasis"
                          },
                          {
                              "label" : "1. TURP",
                              "value" : "1. TURP"
                          },
                          {
                              "label" : "1. left neck lymph node biopsy",
                              "value" : "1. left neck lymph node biopsy"
                          },
                          {
                              "label" : "1. prostate biopsy",
                              "value" : "1. prostate biopsy"
                          },
                          {
                              "label" : "1.Prostate biopsy 2. Prostatectomy 3. Liver biopsy",
                              "value" : "1.Prostate biopsy 2. Prostatectomy 3. Liver biopsy"
                          },
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "Prostate biopsy",
                              "value" : "Prostate biopsy"
                          },
                          {
                              "label" : "n/a",
                              "value" : "n/a"
                          }
                      ]
                  }
              }
          },
          "when_where_stored" : {
              "label" : "When/where stored?",
              "optional" : true,
              "type" : "Date",
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              }
          },
          "steroid_at_time_of_biopsy" : {
              "allowedValues" : [
                  "yes",
                  "beclomethasone",
                  "dexamethasone",
                  "hydrocortisone",
                  "prednisone",
                  "no",
                  "N/A"
              ],
              "label" : "Steroid at time of biopsy",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "yes",
                              "value" : "yes"
                          },
                          {
                              "label" : "beclomethasone",
                              "value" : "beclomethasone"
                          },
                          {
                              "label" : "dexamethasone",
                              "value" : "dexamethasone"
                          },
                          {
                              "label" : "hydrocortisone",
                              "value" : "hydrocortisone"
                          },
                          {
                              "label" : "prednisone",
                              "value" : "prednisone"
                          },
                          {
                              "label" : "no",
                              "value" : "no"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "steroid_stop_date" : {
              "label" : "Steroid stop date",
              "optional" : true,
              "type" : "Date",
              "autoform" : {
                  "afFieldInput" : {
                      "type" : "date",
                      "timezoneId" : "America/Los_Angeles"
                  }
              }
          },
          "sites_of_metastases_at_time_of_biopsy" : {
              "allowedValues" : [
                  "adrenal",
                  "adrenal gland",
                  "bone",
                  "brain",
                  "liver",
                  "lung",
                  "lymph node",
                  "nodes",
                  "nodes only",
                  "pleura",
                  "soft tissue",
                  "retroperitoneal and l paraaortic ln"
              ],
              "label" : "Sites of Metastases at time of biopsy",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "adrenal",
                              "value" : "adrenal"
                          },
                          {
                              "label" : "adrenal gland",
                              "value" : "adrenal gland"
                          },
                          {
                              "label" : "bone",
                              "value" : "bone"
                          },
                          {
                              "label" : "brain",
                              "value" : "brain"
                          },
                          {
                              "label" : "liver",
                              "value" : "liver"
                          },
                          {
                              "label" : "lung",
                              "value" : "lung"
                          },
                          {
                              "label" : "lymph node",
                              "value" : "lymph node"
                          },
                          {
                              "label" : "nodes",
                              "value" : "nodes"
                          },
                          {
                              "label" : "nodes only",
                              "value" : "nodes only"
                          },
                          {
                              "label" : "pleura",
                              "value" : "pleura"
                          },
                          {
                              "label" : "soft tissue",
                              "value" : "soft tissue"
                          },
                          {
                              "label" : "retroperitoneal and l paraaortic ln",
                              "value" : "retroperitoneal and l paraaortic ln"
                          }
                      ]
                  }
              }
          },
          "psa_at_biopsy" : {
              "decimal" : true,
              "label" : "PSA At Biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "ldh_at_biopsy" : {
              "label" : "LDH at biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "alk_phos_at_biopsy" : {
              "label" : "Alk phos at biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "hemoglobin_at_biopsy" : {
              "decimal" : true,
              "label" : "Hemoglobin at biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "chga_at_biopsy" : {
              "decimal" : true,
              "label" : "CHGA at biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "nse_at_biopsy" : {
              "decimal" : true,
              "label" : "NSE at Biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "ecog_ps_at_biopsy" : {
              "label" : "ECOG PS at biopsy",
              "optional" : true,
              "type" : "Number"
          },
          "gleason_grade" : {
              "allowedValues" : [
                  "3+3",
                  "3+4",
                  "4+3",
                  "4+4",
                  "4+5",
                  "5+4",
                  "5+5",
                  "N/A"
              ],
              "label" : "Gleason Grade",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "3+3",
                              "value" : "3+3"
                          },
                          {
                              "label" : "3+4",
                              "value" : "3+4"
                          },
                          {
                              "label" : "4+3",
                              "value" : "4+3"
                          },
                          {
                              "label" : "4+4",
                              "value" : "4+4"
                          },
                          {
                              "label" : "4+5",
                              "value" : "4+5"
                          },
                          {
                              "label" : "5+4",
                              "value" : "5+4"
                          },
                          {
                              "label" : "5+5",
                              "value" : "5+5"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "orchiectomy" : {
              "allowedValues" : [
                  "No",
                  "Yes",
                  "n/a"
              ],
              "label" : "Orchiectomy",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "No",
                              "value" : "No"
                          },
                          {
                              "label" : "Yes",
                              "value" : "Yes"
                          },
                          {
                              "label" : "n/a",
                              "value" : "n/a"
                          }
                      ]
                  }
              }
          },
          "psa_nadir_on_padt" : {
              "decimal" : true,
              "label" : "PSA Nadir on PADT",
              "optional" : true,
              "type" : "Number"
          },
          "treatment_for_mcrpc_prior_to_biopsy" : {
              "allowedValues" : [
                  "Abiraterone",
                  "Abiraterone + enzalutamide",
                  "Abiraterone + prednisone",
                  "Abiraterone 2k clinical trial",
                  "adi peg (investigational)",
                  "bez235",
                  "Bicalutamide",
                  "Buparlisib",
                  "cabazitaxel + mitoxantrone (camp)",
                  "Cabazitaxel",
                  "Cabozantinib",
                  "camp",
                  "carboplatin + docetaxel",
                  "carboplatin + etoposide",
                  "carboplatin + taxotere",
                  "Carboplatin; Taxol",
                  "Casodex",
                  "cp-751871",
                  "Cixutumumab",
                  "Custirsen",
                  "Cypraterone",
                  "cytoxan + dex",
                  "Dasatinib",
                  "Degarelix",
                  "des",
                  "Dexamethasone",
                  "Docetaxel",
                  "Dutasteride",
                  "Enzalutamide",
                  "Estradiol",
                  "everolimus",
                  "Finasteride",
                  "Flutamide",
                  "gm-csf",
                  "gtx 758",
                  "hd casodex",
                  "imc-a12",
                  "investigational agent nos",
                  "ipi vs placebo",
                  "Ipilimumab",
                  "Ketoconazole",
                  "ketoconazole + prednisone",
                  "lbh589",
                  "Lupron",
                  "midazolam/ptk-787",
                  "Mitoxantrone",
                  "Nilutamide",
                  "Nilandron",
                  "none",
                  "nrx194204",
                  "ogx-427",
                  "Pazopanib",
                  "Panobinostat",
                  "pc-spes",
                  "Prednisone",
                  "Provenge",
                  "psma adc",
                  "px-866",
                  "Radiation",
                  "radium-223",
                  "radium-223 + abiraterone",
                  "Reolysin",
                  "Sipuleucel-t",
                  "Sulfurophane",
                  "Taxotere",
                  "Vandetanib",
                  "Zoladex",
                  "Zoladex;  Casodex",
                  "xl-184",
                  "N/A",
                  "Carboplatin;  Docetaxel",
                  "Carboplatin;  Taxotere",
                  "Carboplatin; Etoposide",
                  "Carboplatin; Taxol",
                  "Casodex;  Lupron",
                  "Docetaxel",
                  "Docetaxel;  Carboplatin",
                  "Estrogen",
                  "Flutamide;  Lupron",
                  "GM-CSF;  Cyclophosphamide",
                  "GM-CSF;  Ketoconazole;  Hydrocortisone Sodium Succinate",
                  "Goserelin",
                  "Hydrocortisone Sodium Succinate;  Ketoconazole",
                  "Ketoconazole",
                  "Leuprolide",
                  "Lupron",
                  "Lupron Depot",
                  "Lupron;  Bicalutamide;  Dutasteride",
                  "Lupron;  Casodex",
                  "Mitoxantrone",
                  "Mitoxantrone;  Cabazitaxel",
                  "NRX 194204",
                  "Nilandron",
                  "Nilutamide",
                  "OGX-427",
                  "PX-866",
                  "Panobinostat",
                  "Panobinostat;  Casodex",
                  "Pazopanib",
                  "Placebo",
                  "Placebo;  Ipilimumab",
                  "Provenge",
                  "RAD001",
                  "Reolysin",
                  "Sipuleucel-T",
                  "Taxotere",
                  "Taxotere;  Carboplatin",
                  "Vandetanib",
                  "Xofigo"
              ],
              "label" : "Treatment for mCRPC Prior to Biopsy",
              "optional" : true,
              "type" : "StringArray",
              "autoform" : {
                  "afArrayField" : {
                      "template" : "photonic"
                  },
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Abiraterone",
                              "value" : "Abiraterone"
                          },
                          {
                              "label" : "Abiraterone + enzalutamide",
                              "value" : "Abiraterone + enzalutamide"
                          },
                          {
                              "label" : "Abiraterone + prednisone",
                              "value" : "Abiraterone + prednisone"
                          },
                          {
                              "label" : "Abiraterone 2k clinical trial",
                              "value" : "Abiraterone 2k clinical trial"
                          },
                          {
                              "label" : "adi peg (investigational)",
                              "value" : "adi peg (investigational)"
                          },
                          {
                              "label" : "bez235",
                              "value" : "bez235"
                          },
                          {
                              "label" : "Bicalutamide",
                              "value" : "Bicalutamide"
                          },
                          {
                              "label" : "Buparlisib",
                              "value" : "Buparlisib"
                          },
                          {
                              "label" : "cabazitaxel + mitoxantrone (camp)",
                              "value" : "cabazitaxel + mitoxantrone (camp)"
                          },
                          {
                              "label" : "Cabazitaxel",
                              "value" : "Cabazitaxel"
                          },
                          {
                              "label" : "Cabozantinib",
                              "value" : "Cabozantinib"
                          },
                          {
                              "label" : "camp",
                              "value" : "camp"
                          },
                          {
                              "label" : "carboplatin + docetaxel",
                              "value" : "carboplatin + docetaxel"
                          },
                          {
                              "label" : "carboplatin + etoposide",
                              "value" : "carboplatin + etoposide"
                          },
                          {
                              "label" : "carboplatin + taxotere",
                              "value" : "carboplatin + taxotere"
                          },
                          {
                              "label" : "Carboplatin; Taxol",
                              "value" : "Carboplatin; Taxol"
                          },
                          {
                              "label" : "Casodex",
                              "value" : "Casodex"
                          },
                          {
                              "label" : "cp-751871",
                              "value" : "cp-751871"
                          },
                          {
                              "label" : "Cixutumumab",
                              "value" : "Cixutumumab"
                          },
                          {
                              "label" : "Custirsen",
                              "value" : "Custirsen"
                          },
                          {
                              "label" : "Cypraterone",
                              "value" : "Cypraterone"
                          },
                          {
                              "label" : "cytoxan + dex",
                              "value" : "cytoxan + dex"
                          },
                          {
                              "label" : "Dasatinib",
                              "value" : "Dasatinib"
                          },
                          {
                              "label" : "Degarelix",
                              "value" : "Degarelix"
                          },
                          {
                              "label" : "des",
                              "value" : "des"
                          },
                          {
                              "label" : "Dexamethasone",
                              "value" : "Dexamethasone"
                          },
                          {
                              "label" : "Docetaxel",
                              "value" : "Docetaxel"
                          },
                          {
                              "label" : "Dutasteride",
                              "value" : "Dutasteride"
                          },
                          {
                              "label" : "Enzalutamide",
                              "value" : "Enzalutamide"
                          },
                          {
                              "label" : "Estradiol",
                              "value" : "Estradiol"
                          },
                          {
                              "label" : "everolimus",
                              "value" : "everolimus"
                          },
                          {
                              "label" : "Finasteride",
                              "value" : "Finasteride"
                          },
                          {
                              "label" : "Flutamide",
                              "value" : "Flutamide"
                          },
                          {
                              "label" : "gm-csf",
                              "value" : "gm-csf"
                          },
                          {
                              "label" : "gtx 758",
                              "value" : "gtx 758"
                          },
                          {
                              "label" : "hd casodex",
                              "value" : "hd casodex"
                          },
                          {
                              "label" : "imc-a12",
                              "value" : "imc-a12"
                          },
                          {
                              "label" : "investigational agent nos",
                              "value" : "investigational agent nos"
                          },
                          {
                              "label" : "ipi vs placebo",
                              "value" : "ipi vs placebo"
                          },
                          {
                              "label" : "Ipilimumab",
                              "value" : "Ipilimumab"
                          },
                          {
                              "label" : "Ketoconazole",
                              "value" : "Ketoconazole"
                          },
                          {
                              "label" : "ketoconazole + prednisone",
                              "value" : "ketoconazole + prednisone"
                          },
                          {
                              "label" : "lbh589",
                              "value" : "lbh589"
                          },
                          {
                              "label" : "Lupron",
                              "value" : "Lupron"
                          },
                          {
                              "label" : "midazolam/ptk-787",
                              "value" : "midazolam/ptk-787"
                          },
                          {
                              "label" : "Mitoxantrone",
                              "value" : "Mitoxantrone"
                          },
                          {
                              "label" : "Nilutamide",
                              "value" : "Nilutamide"
                          },
                          {
                              "label" : "Nilandron",
                              "value" : "Nilandron"
                          },
                          {
                              "label" : "none",
                              "value" : "none"
                          },
                          {
                              "label" : "nrx194204",
                              "value" : "nrx194204"
                          },
                          {
                              "label" : "ogx-427",
                              "value" : "ogx-427"
                          },
                          {
                              "label" : "Pazopanib",
                              "value" : "Pazopanib"
                          },
                          {
                              "label" : "Panobinostat",
                              "value" : "Panobinostat"
                          },
                          {
                              "label" : "pc-spes",
                              "value" : "pc-spes"
                          },
                          {
                              "label" : "Prednisone",
                              "value" : "Prednisone"
                          },
                          {
                              "label" : "Provenge",
                              "value" : "Provenge"
                          },
                          {
                              "label" : "psma adc",
                              "value" : "psma adc"
                          },
                          {
                              "label" : "px-866",
                              "value" : "px-866"
                          },
                          {
                              "label" : "Radiation",
                              "value" : "Radiation"
                          },
                          {
                              "label" : "radium-223",
                              "value" : "radium-223"
                          },
                          {
                              "label" : "radium-223 + abiraterone",
                              "value" : "radium-223 + abiraterone"
                          },
                          {
                              "label" : "Reolysin",
                              "value" : "Reolysin"
                          },
                          {
                              "label" : "Sipuleucel-t",
                              "value" : "Sipuleucel-t"
                          },
                          {
                              "label" : "Sulfurophane",
                              "value" : "Sulfurophane"
                          },
                          {
                              "label" : "Taxotere",
                              "value" : "Taxotere"
                          },
                          {
                              "label" : "Vandetanib",
                              "value" : "Vandetanib"
                          },
                          {
                              "label" : "Zoladex",
                              "value" : "Zoladex"
                          },
                          {
                              "label" : "Zoladex;  Casodex",
                              "value" : "Zoladex;  Casodex"
                          },
                          {
                              "label" : "xl-184",
                              "value" : "xl-184"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          },
                          {
                              "label" : "Carboplatin;  Docetaxel",
                              "value" : "Carboplatin;  Docetaxel"
                          },
                          {
                              "label" : "Carboplatin;  Taxotere",
                              "value" : "Carboplatin;  Taxotere"
                          },
                          {
                              "label" : "Carboplatin; Etoposide",
                              "value" : "Carboplatin; Etoposide"
                          },
                          {
                              "label" : "Carboplatin; Taxol",
                              "value" : "Carboplatin; Taxol"
                          },
                          {
                              "label" : "Casodex;  Lupron",
                              "value" : "Casodex;  Lupron"
                          },
                          {
                              "label" : "Docetaxel",
                              "value" : "Docetaxel"
                          },
                          {
                              "label" : "Docetaxel;  Carboplatin",
                              "value" : "Docetaxel;  Carboplatin"
                          },
                          {
                              "label" : "Estrogen",
                              "value" : "Estrogen"
                          },
                          {
                              "label" : "Flutamide;  Lupron",
                              "value" : "Flutamide;  Lupron"
                          },
                          {
                              "label" : "GM-CSF;  Cyclophosphamide",
                              "value" : "GM-CSF;  Cyclophosphamide"
                          },
                          {
                              "label" : "GM-CSF;  Ketoconazole;  Hydrocortisone Sodium Succinate",
                              "value" : "GM-CSF;  Ketoconazole;  Hydrocortisone Sodium Succinate"
                          },
                          {
                              "label" : "Goserelin",
                              "value" : "Goserelin"
                          },
                          {
                              "label" : "Hydrocortisone Sodium Succinate;  Ketoconazole",
                              "value" : "Hydrocortisone Sodium Succinate;  Ketoconazole"
                          },
                          {
                              "label" : "Ketoconazole",
                              "value" : "Ketoconazole"
                          },
                          {
                              "label" : "Leuprolide",
                              "value" : "Leuprolide"
                          },
                          {
                              "label" : "Lupron",
                              "value" : "Lupron"
                          },
                          {
                              "label" : "Lupron Depot",
                              "value" : "Lupron Depot"
                          },
                          {
                              "label" : "Lupron;  Bicalutamide;  Dutasteride",
                              "value" : "Lupron;  Bicalutamide;  Dutasteride"
                          },
                          {
                              "label" : "Lupron;  Casodex",
                              "value" : "Lupron;  Casodex"
                          },
                          {
                              "label" : "Mitoxantrone",
                              "value" : "Mitoxantrone"
                          },
                          {
                              "label" : "Mitoxantrone;  Cabazitaxel",
                              "value" : "Mitoxantrone;  Cabazitaxel"
                          },
                          {
                              "label" : "NRX 194204",
                              "value" : "NRX 194204"
                          },
                          {
                              "label" : "Nilandron",
                              "value" : "Nilandron"
                          },
                          {
                              "label" : "Nilutamide",
                              "value" : "Nilutamide"
                          },
                          {
                              "label" : "OGX-427",
                              "value" : "OGX-427"
                          },
                          {
                              "label" : "PX-866",
                              "value" : "PX-866"
                          },
                          {
                              "label" : "Panobinostat",
                              "value" : "Panobinostat"
                          },
                          {
                              "label" : "Panobinostat;  Casodex",
                              "value" : "Panobinostat;  Casodex"
                          },
                          {
                              "label" : "Pazopanib",
                              "value" : "Pazopanib"
                          },
                          {
                              "label" : "Placebo",
                              "value" : "Placebo"
                          },
                          {
                              "label" : "Placebo;  Ipilimumab",
                              "value" : "Placebo;  Ipilimumab"
                          },
                          {
                              "label" : "Provenge",
                              "value" : "Provenge"
                          },
                          {
                              "label" : "RAD001",
                              "value" : "RAD001"
                          },
                          {
                              "label" : "Reolysin",
                              "value" : "Reolysin"
                          },
                          {
                              "label" : "Sipuleucel-T",
                              "value" : "Sipuleucel-T"
                          },
                          {
                              "label" : "Taxotere",
                              "value" : "Taxotere"
                          },
                          {
                              "label" : "Taxotere;  Carboplatin",
                              "value" : "Taxotere;  Carboplatin"
                          },
                          {
                              "label" : "Vandetanib",
                              "value" : "Vandetanib"
                          },
                          {
                              "label" : "Xofigo",
                              "value" : "Xofigo"
                          }
                      ]
                  }
              }
          },
          "post-biopsy_treatment" : {
              "allowedValues" : [
                  "Abiraterone",
                  "Abiraterone 2K clinical trial",
                  "BIND-014",
                  "CAMP clinical trial",
                  "CC-115",
                  "Cabazitaxel",
                  "Cabazitaxel + custirsen",
                  "Carbo/taxotere",
                  "Carbo/taxotere phase 3",
                  "Carboplatin + docetaxel",
                  "Carboplatin + Taxotere",
                  "Carboplatin + Taxotere phase 2",
                  "Chemotherapy for colon cancer",
                  "Cisplatin + Etoposide",
                  "Cytoxan + dexamethasone",
                  "Docetaxel",
                  "Docetaxel + radium-223",
                  "Docetaxel + phenelzine",
                  "Doxorubicin + cisplatin + 5-FU + MTX",
                  "Enzalutamide",
                  "Enzalutamide",
                  "Enzalutamide + radium-223",
                  "Hospice",
                  "Ipi + Provenge trial",
                  "Mitoxantrone",
                  "Nilandron",
                  "Radium-223",
                  "Sipuleucel-T",
                  "Taxotere",
                  "Taxotere + MLN8237",
                  "Weekly docetaxel",
                  "Xofigo",
                  "None",
                  "N/A"
              ],
              "label" : "Post-Biopsy treatment",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Abiraterone",
                              "value" : "Abiraterone"
                          },
                          {
                              "label" : "Abiraterone 2K clinical trial",
                              "value" : "Abiraterone 2K clinical trial"
                          },
                          {
                              "label" : "BIND-014",
                              "value" : "BIND-014"
                          },
                          {
                              "label" : "CAMP clinical trial",
                              "value" : "CAMP clinical trial"
                          },
                          {
                              "label" : "CC-115",
                              "value" : "CC-115"
                          },
                          {
                              "label" : "Cabazitaxel",
                              "value" : "Cabazitaxel"
                          },
                          {
                              "label" : "Cabazitaxel + custirsen",
                              "value" : "Cabazitaxel + custirsen"
                          },
                          {
                              "label" : "Carbo/taxotere",
                              "value" : "Carbo/taxotere"
                          },
                          {
                              "label" : "Carbo/taxotere phase 3",
                              "value" : "Carbo/taxotere phase 3"
                          },
                          {
                              "label" : "Carboplatin + docetaxel",
                              "value" : "Carboplatin + docetaxel"
                          },
                          {
                              "label" : "Carboplatin + Taxotere",
                              "value" : "Carboplatin + Taxotere"
                          },
                          {
                              "label" : "Carboplatin + Taxotere phase 2",
                              "value" : "Carboplatin + Taxotere phase 2"
                          },
                          {
                              "label" : "Chemotherapy for colon cancer",
                              "value" : "Chemotherapy for colon cancer"
                          },
                          {
                              "label" : "Cisplatin + Etoposide",
                              "value" : "Cisplatin + Etoposide"
                          },
                          {
                              "label" : "Cytoxan + dexamethasone",
                              "value" : "Cytoxan + dexamethasone"
                          },
                          {
                              "label" : "Docetaxel",
                              "value" : "Docetaxel"
                          },
                          {
                              "label" : "Docetaxel + radium-223",
                              "value" : "Docetaxel + radium-223"
                          },
                          {
                              "label" : "Docetaxel + phenelzine",
                              "value" : "Docetaxel + phenelzine"
                          },
                          {
                              "label" : "Doxorubicin + cisplatin + 5-FU + MTX",
                              "value" : "Doxorubicin + cisplatin + 5-FU + MTX"
                          },
                          {
                              "label" : "Enzalutamide",
                              "value" : "Enzalutamide"
                          },
                          {
                              "label" : "Enzalutamide",
                              "value" : "Enzalutamide"
                          },
                          {
                              "label" : "Enzalutamide + radium-223",
                              "value" : "Enzalutamide + radium-223"
                          },
                          {
                              "label" : "Hospice",
                              "value" : "Hospice"
                          },
                          {
                              "label" : "Ipi + Provenge trial",
                              "value" : "Ipi + Provenge trial"
                          },
                          {
                              "label" : "Mitoxantrone",
                              "value" : "Mitoxantrone"
                          },
                          {
                              "label" : "Nilandron",
                              "value" : "Nilandron"
                          },
                          {
                              "label" : "Radium-223",
                              "value" : "Radium-223"
                          },
                          {
                              "label" : "Sipuleucel-T",
                              "value" : "Sipuleucel-T"
                          },
                          {
                              "label" : "Taxotere",
                              "value" : "Taxotere"
                          },
                          {
                              "label" : "Taxotere + MLN8237",
                              "value" : "Taxotere + MLN8237"
                          },
                          {
                              "label" : "Weekly docetaxel",
                              "value" : "Weekly docetaxel"
                          },
                          {
                              "label" : "Xofigo",
                              "value" : "Xofigo"
                          },
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "psa_response" : {
              "allowedValues" : [
                  "0-30%",
                  "30%-50%",
                  "> 50%",
                  "None",
                  "N/A"
              ],
              "label" : "PSA response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "0-30%",
                              "value" : "0-30%"
                          },
                          {
                              "label" : "30%-50%",
                              "value" : "30%-50%"
                          },
                          {
                              "label" : "> 50%",
                              "value" : "> 50%"
                          },
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "radiographic_response" : {
              "allowedValues" : [
                  "Partial response",
                  "Stable response",
                  "PD",
                  "PR",
                  "SD",
                  "None",
                  "N/A"
              ],
              "label" : "Radiographic Response",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Partial response",
                              "value" : "Partial response"
                          },
                          {
                              "label" : "Stable response",
                              "value" : "Stable response"
                          },
                          {
                              "label" : "PD",
                              "value" : "PD"
                          },
                          {
                              "label" : "PR",
                              "value" : "PR"
                          },
                          {
                              "label" : "SD",
                              "value" : "SD"
                          },
                          {
                              "label" : "None",
                              "value" : "None"
                          },
                          {
                              "label" : "N/A",
                              "value" : "N/A"
                          }
                      ]
                  }
              }
          },
          "death_or_last_contact" : {
              "allowedValues" : [
                  "Death",
                  "Last Contact",
                  "Last contact",
                  "Unk"
              ],
              "label" : "Death or Last Contact",
              "optional" : true,
              "type" : "String",
              "autoform" : {
                  "afFieldInput" : {
                      "options" : [
                          {
                              "label" : "Death",
                              "value" : "Death"
                          },
                          {
                              "label" : "Last Contact",
                              "value" : "Last Contact"
                          },
                          {
                              "label" : "Last contact",
                              "value" : "Last contact"
                          },
                          {
                              "label" : "Unk",
                              "value" : "Unk"
                          }
                      ]
                  }
              }
          },
          "Study_ID" : {
              "type" : "String"
          }
      },
      "fieldOrder" : [
          "Patient_ID",
          "Sample_ID",
          "prior_txs",
          "biopsy_date",
          "subsequent_txs",
          "biopsy_site",
          "Enzalutamide",
          "Abiraterone",
          "site",
          "age",
          "Reason_for_Stopping_Treatment",
          "AR_Amplification_by_FISH",
          "Days_on_Study",
          "On_Study_Date",
          "Off_Study_Date",
          "abi_psa_response",
          "abi_radiographic_response",
          "abi_reason_for_d/c",
          "enza_psa_response",
          "enza_radiographic_response",
          "enza_reason_for_d/c",
          "prior_tissue",
          "when_where_stored",
          "biopsy_date",
          "steroid_at_time_of_biopsy",
          "steroid_stop_date",
          "sites_of_metastases_at_time_of_biopsy",
          "psa_at_biopsy",
          "ldh_at_biopsy",
          "alk_phos_at_biopsy",
          "hemoglobin_at_biopsy",
          "chga_at_biopsy",
          "nse_at_biopsy",
          "ecog_ps_at_biopsy",
          "gleason_grade",
          "orchiectomy",
          "psa_nadir_on_padt",
          "treatment_for_mcrpc_prior_to_biopsy",
          "post-biopsy_treatment",
          "psa_response",
          "radiographic_response",
          "death_or_last_contact",
          "Study_ID"
      ],
      "study" : "common"
    }});
  }
});

Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Clinical_Info"})) {
      Metadata.insert({
        "_id": "Clinical_Info",
        "name": "Clinical_Info",
        "commonName": "Clinical Info",
        "version": "V1",
        "n": 0,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt" : {
              "label" : "Created At",
              "type" : "Date"
          },
          "Patient_ID": {
            "label": "Patient ID",
            "type": "String"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String"
          },
          "prior_txs": {
            "label": "Prior Treatments ",
            "optional": true,
            "type": "StringArray",
            "autoform": {
              "afArrayField": {
                "template": "photonic"
              }
            }
          },
          "biopsy_date": {
            "label": "Biopsy Date",
            "optional": true,
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "subsequent_txs": {
            "label": "Subsequent Treatments",
            "optional": true,
            "type": "StringArray",
            "autoform": {
              "afArrayField": {
                "template": "photonic"
              }
            }
          },
          "biopsy_site": {
            "allowedValues": [
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
            "label": "Biopsy site",
            "optional": true,
            "type": "String"
          },
          "Enzalutamide": {
            "allowedValues": [
                      "Naive",
                      "On Tx",
                      "On-Tx",
                      "Resistant",
                      "Unk"
                  ],
            "label": "Enzalutamide",
            "optional": true,
            "type": "String"
          },
          "Abiraterone": {
            "allowedValues": [
              "Exposed",
              "Naive",
              "On Tx",
              "Resistant",
              "Unk"
            ],
            "label": "Abiraterone",
            "optional": true,
            "type": "String"
          },
          "site": {
            "allowedValues": [
              "OHSU",
              "UBC",
              "UCD",
              "UCLA",
              "UCLA-VA",
              "UCSF"
            ],
            "label": "Site",
            "optional": true,
            "type": "String"
          },
          "age": {
            "label": "Age",
            "optional": true,
            "type": "Number"
          },
          "Reason_for_Stopping_Treatment": {
            "allowedValues": [
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
            "label": "Reason for Stop",
            "optional": true,
            "type": "String"
          },
          "AR_Amplification_by_FISH": {
            "label": "AR Amplification by FISH",
            "optional": true,
            "type": "String"
          },
          "Days_on_Study": {
            "label": "Days On Study",
            "optional": true,
            "type": "Number"
          },
          "On_Study_Date": {
            "label": "On Study Date",
            "optional": true,
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "Off_Study_Date": {
            "label": "Off Study Date",
            "optional": true,
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "abi_psa_response": {
            "allowedValues": [
              "No Decline",
              "0%-30%",
              "30%-50%",
              "50%-90%",
              ">90%",
              "N/A"
            ],
            "label": "Abi PSA response",
            "optional": true,
            "type": "String"
          },
          "abi_radiographic_response": {
          "allowedValues": [
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
            "label": "Abi radiographic response",
            "optional": true,
            "type": "String"
          },
          "abi_reason_for_d/c": {
            "allowedValues": [
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
            "label": "Abi reason for d/c",
            "optional": true,
            "type": "String"
          },
          "enza_psa_response": {
            "allowedValues": [
              "-",
              "0-30%",
              "30-50%",
              "30-50% decline",
              "> 50%",
              "> 90%",
              "N/A"
            ],
            "label": "Enza PSA response",
            "optional": true,
            "type": "String"
          },
          "enza_radiographic_response": {
            "allowedValues": [
              "None",
              "BS with progression; CT stable",
              "CT progression",
              "NE",
              "SD",
              "Stable disease",
              "Partial response",
              "N/A"
            ],
            "label": "Enza radiographic response",
            "optional": true,
            "type": "String"
          },
          "enza_reason_for_d/c": {
            "allowedValues": [
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
            "label": "Enza reason for D/C",
            "optional": true,
            "type": "String"
          },
          "prior_tissue": {
            "allowedValues": [
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
            "label": "Prior tissue",
            "optional": true,
            "type": "String"
          },
          "when_where_stored": {
            "label": "When/where stored?",
            "optional": true,
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "steroid_at_time_of_biopsy": {
            "allowedValues": [
              "yes",
              "beclomethasone",
              "dexamethasone",
              "hydrocortisone",
              "prednisone",
              "no",
              "N/A"
            ],
            "label": "Steroid at time of biopsy",
            "optional": true,
            "type": "String"
          },
          "steroid_stop_date": {
            "label": "Steroid stop date",
            "optional": true,
            "type": "Date",
            "autoform": {
              "afFieldInput": {
                "type": "date",
                "timezoneId": "America/Los_Angeles"
              }
            }
          },
          "sites_of_metastases_at_time_of_biopsy": {
            "allowedValues": [
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
            "label": "Sites of Metastases at time of biopsy",
            "optional": true,
            "type": "String"
          },
          "psa_at_biopsy": {
            "decimal": true,
            "label": "PSA At Biopsy",
            "optional": true,
            "type": "Number"
          },
          "ldh_at_biopsy": {
            "label": "LDH at biopsy",
            "optional": true,
            "type": "Number"
          },
          "alk_phos_at_biopsy": {
            "label": "Alk phos at biopsy",
            "optional": true,
            "type": "Number"
          },
          "hemoglobin_at_biopsy": {
            "decimal": true,
            "label": "Hemoglobin at biopsy",
            "optional": true,
            "type": "Number"
          },
          "chga_at_biopsy": {
            "decimal": true,
            "label": "CHGA at biopsy",
            "optional": true,
            "type": "Number"
          },
          "nse_at_biopsy": {
            "decimal": true,
            "label": "NSE at Biopsy",
            "optional": true,
            "type": "Number"
          },
          "ecog_ps_at_biopsy": {
            "label": "ECOG PS at biopsy",
            "optional": true,
            "type": "Number"
          },
          "gleason_grade": {
            "allowedValues": [
              "3+3",
              "3+4",
              "4+3",
              "4+4",
              "4+5",
              "5+4",
              "5+5",
              "N/A"
            ],
            "label": "Gleason Grade",
            "optional": true,
            "type": "String"
          },
          "orchiectomy": {
            "allowedValues": [
              "No",
              "Yes",
              "n/a"
            ],
            "label": "Orchiectomy",
            "optional": true,
            "type": "String"
          },
          "psa_nadir_on_padt": {
            "decimal": true,
            "label": "PSA Nadir on PADT",
            "optional": true,
            "type": "Number"
          },
          "treatment_for_mcrpc_prior_to_biopsy": {
            "allowedValues": [
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
            "label": "Treatment for mCRPC Prior to Biopsy",
            "optional": true,
            "type": "StringArray",
            "autoform": {
              "afArrayField": {
                "template": "photonic"
              }
            }
          },
          "post-biopsy_treatment": {
            "allowedValues": [
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
            "label": "Post-Biopsy treatment",
            "optional": true,
            "type": "String"
          },
          "psa_response": {
            "allowedValues": [
              "0-30%",
              "30%-50%",
              "> 50%",
              "None",
              "N/A"
            ],
            "label": "PSA response",
            "optional": true,
            "type": "String"
          },
          "radiographic_response": {
            "allowedValues": [
              "Partial response",
              "Stable response",
              "PD",
              "PR",
              "SD",
              "None",
              "N/A"
            ],
            "label": "Radiographic Response",
            "optional": true,
            "type": "String"
          },
          "death_or_last_contact": {
            "allowedValues": [
              "Death",
              "Last Contact",
              "Last contact",
              "Unk"
            ],
            "label": "Death or Last Contact",
            "optional": true,
            "type": "String"
          },
          "Study_ID": {
            "type": "String"
          }
        },        
        "fieldOrder": [
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
        "study": "common"
      });
    }
  }
});

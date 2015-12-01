prad_wcdt_crfs = null;

Meteor.startup(function () {

  // if the database is empty on server start, create some sample data.
  ComplexIDFields = {};

  admin_crfs = [
    "Metadata",
    'studies'
  ];

  common_crfs = [
    'Clinical_Info'
  ];

  prad_wcdt_oncore_crfs = [
    "SU2C_Biopsy_V3",
    "Followup",
    'SU2C_Subsequent_Treatment_V1',
    "SU2C_Prior_TX_V3",
    "Prostate_Diagnosis_V4",
    "Blood_Labs_V2",
    "Demographics",
    "ECOG_Weight_V3",
    "GU_Disease_Assessment_V3",
    "SU2C_Biopsy_AE_V1",
    "SU2C_Pr_Ca_Tx_Sumry_V2",
    "SU2C_Specimen_V1",
  ];


  prad_wcdt_unique_crfs = [
    "Biopsy_Research",
    "Histology_Research",
    "Tissue_Specimen_form",
    "Patient_Enrollment_form",
    'Pathology_form',
    'Blood_Specimen_form',
    'Histological_Assessment_form',
    'Laser_Capture_Microdissection',
    'RNASeq_completion_form'
  ];


  prad_wcdt_crfs = prad_wcdt_oncore_crfs.concat(prad_wcdt_unique_crfs);


  CRFsInfo = [
    "Demographics",
    "Followup",
    "Prostate_Diagnosis_V4",
    "Blood_Labs_V2",
    "ECOG_Weight_V3",
    "GU_Disease_Assessment_V3",
    "SU2C_Biopsy_AE_V1",
    "SU2C_Biopsy_V3",
    "SU2C_Pr_Ca_Tx_Sumry_V2",
    "SU2C_Prior_TX_V3",
    "SU2C_Specimen_V1",
    'SU2C_Subsequent_Treatment_V1',
    "Patient_Enrollment_form",
    "Biopsy_Research",
    // Obsolete: 'Treatment_History',
    'Tissue_Specimen_form',
    'Blood_Specimen_form',
    'Histological_Assessment_form',
    'Laser_Capture_Microdissection',
    'RNASeq_completion_form',
    'Pathology_form',
    'Clinical_Info',
    // Obsolete 'Treatment_Response_form',(if obsolete also remove formSchemas/*.js file)
  ];


  if (true) {
    // this needs to be parameterized by study somehow.
    function crf_ids_potential() {
      var s = [];
      for (var i = 0; i <= 300; i++)
        s.push("DTB-" + ("00" + i).slice(-3))
      return s;
    }

    clinicalReportFormSchemaObject = new SimpleSchema({
      _id: {
        type: String,
        optional: true,
      },
      createdAt: {
        type: Date,
        optional: true,
      },
      updatedAt: {
        type: Date,
        optional: true,
      },
      userId: {
        type: String,
        optional: true,
      }
    });
  }

  OncoreTable_NeedsSample_ID = {
    "Followup": false,
    "Demographics": false,
    "Prostate_Diagnosis_V4": false,

    "Blood_Labs_V2": true,
    "ECOG_Weight_V3": true,
    "GU_Disease_Assessment_V3": true,
    "SU2C_Biopsy_AE_V1": true,
    "SU2C_Biopsy_V3": true,
    "SU2C_Pr_Ca_Tx_Sumry_V2": true,
    "SU2C_Prior_TX_V3": true,
    "SU2C_Specimen_V1": true,
    "SU2C_Subsequent_Treatment_V1": true,
  };
  if (Meteor.isClient)
    window.OncoreTable_NeedsSample_ID = OncoreTable_NeedsSample_ID;

  TableNeedsSample_ID = [
      ["Followup", false, ],
      ["Demographics", false, ],
      ["Prostate_Diagnosis_V4", false, ],

      ["Blood_Labs_V2", true, ],
      ["ECOG_Weight_V3", true, ],
      ["GU_Disease_Assessment_V3", true, ],
      ["SU2C_Biopsy_AE_V1", true, ],
      ["SU2C_Biopsy_V3", true, ],
      ["SU2C_Pr_Ca_Tx_Sumry_V2", true, ],
      ["SU2C_Prior_TX_V3", true, ],
      ["SU2C_Specimen_V1", true, ],
      ["SU2C_Subsequent_Treatment_V1", true, ]
  ]


  OncoreCollections = {};

  function fixDate(row) {
    for (elem in row) {
      var obj = row[elem];

      if (typeof (obj) == "object" && "date" in row[elem] && (row[elem].date instanceof(Date)))
        row[elem] = row[elem].date;
    }
    return row;
  }

  function fixRow(obj) {
    if (obj) {
      Object.keys(obj).map(function (f) {
        var g = f.replace(/[ ,()-]/g, '_');
        if (g != f) {
          obj[g] = obj[f];
          delete obj[f];
        }
      });
    }
  }

  mapIfPossible = function (obj, field, thisMap) {
    if (field in obj) {
      var value = obj[field];
      if (value in thisMap)
        obj[field] = thisMap[value];
    }
  }

  SU2C_Center_map = {
    "Mt. Zion": "UCSF",
    "Knight Cancer Institute": "OHSU",
    "University of California Los Angeles": "UCLA",
    "University of California Davis": "UCD",
    "BC Cancer Agency": "UBC"
  }


  function mapPatient(patient, schemaMap) {
    var Patient_ID = patient.patient;

    var tables = patient.attributes;
    fixRow(tables);
    var biopsies = tables["SU2C_Biopsy_V3"];

    var baseline, pro, pro2;


    if (biopsies) {

      biopsies.map(fixDate);
      biopsies.map(fixRow);

      biopsies.sort(function (a, b) {
        return a.Date_of_Procedure >= b.Date_of_Procedure;
      });


      for (var bi = 0; bi < biopsies.length; bi++) {
        var b = biopsies[bi];
        var d = b.Date_of_Procedure;
        if (d == null || d == "")
          d = b.Visit_Date;
        var segment = b.Segment;

        if (baseline == null) {
          baseline = d;
          continue;
        }

        if (pro == null && d > baseline) {
          pro = d;
          continue;
        }

        if (pro2 == null && d > pro) {
          pro2 = d;
          continue;
        }
      }
    }

    for (var ti = 0; ti < TableNeedsSample_ID.length; ti++) {
      var t = TableNeedsSample_ID[ti][0];
      var n = TableNeedsSample_ID[ti][1];


      if (n) {
        var rows = tables[t];
        if (rows) {
          for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            fixRow(row);
            fixDate(row);

            var d;
            if (t == "SU2C_Biopsy_V3") {
              d = row["Date_of_Procedure"];
              if (d == null || d == "")
                d = row["Visit_Date"];
            } else if (t == "SU2C_Subsequent_Treatment_V1") {
              d = row["Start_Date"];
            } else {
              d = row["Visit_Date"];
            }


            if (t == "SU2C_Subsequent_Treatment_V1") {
              map_Drug_Name(row);
              map_SU2C_Subsequent_Treatment_V1__Responder(row);
            } else if (t == "SU2C_Prior_TX_V3") {
              map_Drug_Name(row);
            }

            var Sample_ID = Patient_ID;

            if (d >= pro)
              Sample_ID += "Pro";
            if (d >= pro2)
              Sample_ID += "2";

            var target = {};
            if ('Patient_ID' in schemaMap[t]) {
              target.Patient_ID = Patient_ID;
              row.Patient_ID = Patient_ID;
            }
            if ('Sample_ID' in schemaMap[t]) {
              row.Sample_ID = Sample_ID;
              target.Sample_ID = Sample_ID;
            }
            row.CRF = t;
            row.Study_ID = "prad_wcdt";

            target.CRF = t;
            target.Study_ID = "prad_wcdt";

            // var ret = Collections.CRFs.upsert(target, row);
            var ret = Collections.CRFs.insert(row);
          }
        }
      } else {
        var obj = patient.attributes[t];

        if (obj) {
          fixRow(obj);
          fixDate(obj);

          if (t === "Followup"){
            mapIfPossible(obj, "Followup_Center", SU2C_Center_map);
          }
          else if (t === "Demographics"){
            mapIfPossible(obj, "Study_Site", SU2C_Center_map);
          }

          var target = {};
          // if ('Patient_ID' in schemaMap[t]) {
          //   target.Patient_ID = Patient_ID;
          //   obj.Patient_ID = Patient_ID;
          // }
          // if ('Sample_ID' in schemaMap[t]) {
          //   obj.Sample_ID = Sample_ID;
          //   target.Sample_ID = Sample_ID;
          // }

          obj.CRF = t;
          obj.Study_ID = "prad_wcdt";
          target.CRF = t;
          target.Study_ID = "prad_wcdt";
          // ret = Collections.CRFs.upsert(target, obj);
          ret = Collections.CRFs.insert(obj);
        }
      }
    };
    //mapClinicalInfo();
  }
  if (Meteor.isClient) {
    window.mapPatient = mapPatient;
  }

  map_SU2C_Subsequent_Treatment_V1__Responder = function (SU2C_Subsequent_Treatment_V1) {
    var bone_response = SU2C_Subsequent_Treatment_V1.Bone_Response;
    var Reason_for_Stopping_Treatment = SU2C_Subsequent_Treatment_V1.Reason_for_Stopping_Treatment;
    var Progression_Date = SU2C_Subsequent_Treatment_V1.Progression_Date;

    TooSoonToAnalyze = false;

    if (SU2C_Subsequent_Treatment_V1.Progression_Date == null)
      SU2C_Subsequent_Treatment_V1.Responder = "Responder";

    else if (["Progressive Disease", "Patient Choice", "Less than Partial Response"].indexOf(
        Reason_for_Stopping_Treatment) >= 0)
      SU2C_Subsequent_Treatment_V1.Responder = "Non Responder";
    else
      TooSoonToAnalyze = true;

    /* Makes the query simpler RDB 03/04/2015
    else
        SU2C_Subsequent_Treatment_V1.Responder = null;
    */

    SU2C_Subsequent_Treatment_V1.ResponderEnzalutamide = null;
    SU2C_Subsequent_Treatment_V1.ResponderAbiraterone = null;
    SU2C_Subsequent_Treatment_V1.ResponderOtherTherapy = null;


    if (!TooSoonToAnalyze && SU2C_Subsequent_Treatment_V1.Responder) {

      if (SU2C_Subsequent_Treatment_V1.Drug_Name)
        SU2C_Subsequent_Treatment_V1.Drug_Name.split("; ").filter(function (d) {
          if (d == "Enzalutamide")
            SU2C_Subsequent_Treatment_V1.ResponderEnzalutamide =
            SU2C_Subsequent_Treatment_V1.Responder;
          else if (d == "Abiraterone")
            SU2C_Subsequent_Treatment_V1.ResponderAbiraterone =
            SU2C_Subsequent_Treatment_V1.Responder;
          else {
            SU2C_Subsequent_Treatment_V1.ResponderOtherTherapy =
              SU2C_Subsequent_Treatment_V1.Responder;
          }
        });
      else
        SU2C_Subsequent_Treatment_V1.ResponderOtherTherapy = SU2C_Subsequent_Treatment_V1.Responder;

    }

  };




  function find(crf) {
    return Collections.CRFs.find({
      Study_ID: "prad_wcdt",
      CRF: crf
    }).fetch();
  }

  ingestClinical = function () {
    var study = Studies.findOne({
      id: "prad_wcdt"
    });

    Collections.CRFs.remove({
      CRF: "Clinical_Info",
      Study_ID: "prad_wcdt"
    });

    var schemas = {};
    Metadata.find({
      study: "prad_wcdt",
      // name: {
      //   $in: study.tables
      // }
    }).forEach(function (crf) {
      schemas[crf.name] = crf.schema;
    });


    console.log("Ingesting Clinical begun, 6 steps");
    var samples = {};

    // ingest Demographics
    console.log("0 Demographics");

    var sample_list = find("Demographics");

    sample_list.forEach(function (sample) {
      var sampleId = sample['Patient_ID']

      if (!samples[sampleId]) {
        samples[sampleId] = {}
      }
      if (sample['Study_Site']) {
        samples[sampleId]['site'] = sample['Study_Site'];

      }
      samples[sampleId]['Patient_ID'] = sampleId;

      if (sample['Age']) {
        samples[sampleId]['age'] = sample['Age'];
      }
      if (sample["On_Study_Date"]) {
        samples[sampleId]["On_Study_Date"] = sample["On_Study_Date"];
      }

      samples[sampleId]["Study_ID"] = 'prad_wcdt';
      samples[sampleId]["CRF"] = 'Clinical_Info';


      try {
        var ret = Collections.CRFs.upsert({
          CRF: "Clinical_Info",
          "Study_ID": "prad_wcdt",
          'Sample_ID': sampleId
        }, {
          $set: samples[sampleId]
        }, {
          upsert: true
        });

        if (ret && ret.numberAffected != 1) console.log('clinical info returns', ret)
      } catch (ex) {
        console.log("update exception", sampleId, samples[sampleId]);
        throw ex
      }
    });

    // ingest Followup
    console.log("1 Followup");

    var sample_list = find("Followup");

    sample_list.forEach(function (sample) {
      var sampleId = sample['Patient_ID'];

      if (!samples[sampleId]) {
        samples[sampleId] = {};
      }
      if (sample["Off_Treatment_Reason"]) {
        samples[sampleId]['Reason_for_Stopping_Treatment'] = sample[
            'Off_Treatment_Reason']
          //console.log('Off_Treatment_Reason', samples[sampleId])
      }
      if (sample["Off_Study_Date"]) {
        samples[sampleId]["Off_Study_Date"] = sample["Off_Study_Date"]
          //console.log('OFF type of date',samples[sampleId]["Off_Study_Date"],samples[sampleId]["Off_Study_Date"] instanceof Date, samples[sampleId]["Off_Study_Date"].valueOf())
        if (samples[sampleId]["On_Study_Date"])
        //console.log('ON type of date',samples[sampleId]["On_Study_Date"],samples[sampleId]["On_Study_Date"] instanceof Date, samples[sampleId]["On_Study_Date"].valueOf())
          samples[sampleId]["Days_on_Study"] = (samples[sampleId]["Off_Study_Date"].valueOf() -
            samples[sampleId]["On_Study_Date"].valueOf()) / 86400000
          //console.log(sampleId,'Days_on_Study',samples[sampleId]["Days_on_Study"] )

      }

    });

    // ingest Biopsy
    console.log("2 Biopsy");

    var sample_list = find("SU2C_Biopsy_V3")

    sample_list.forEach(function (sample) {
      var sampleId = sample['Sample_ID']
        //data = {'Sample_ID':sampleId}
      if (!samples[sampleId]) {
        samples[sampleId] = {}
      }
      if (sample['Site']) {
        samples[sampleId]['biopsy_site'] = sample['Site']
        samples[sampleId]['Patient_ID'] = sample['Patient_ID']
        samples[sampleId]['Study_ID'] = 'prad_wcdt'
        samples[sampleId]['biopsy_date'] = sample.Date_of_Procedure;
        map_biopsy_site(samples[sampleId]);
        try {
          var ret = Collections.CRFs.update({
            CRF: "Clinical_Info",
            Study_ID: "prad_wcdt",
            'Sample_ID': sampleId
          }, {
            $set: samples[sampleId]
          }, {
            upsert: true
          })
          if (ret != 1) console.log('clinical info returns', ret)
        } catch (ex) {
          console.log("update exception", sampleId, samples[sampleId]);
          throw ex
        }
      }
    })

    // ingest Prior Treatment
    console.log("3 Prior Treatment")

    var treatment_list = find("SU2C_Prior_TX_V3");
    var prior = {};

    treatment_list.forEach(function (treatment) {
      var sampleId = treatment['Sample_ID'];
      var patient_id = treatment['Patient_ID'];
      var drug = treatment['Drug_Name'];

      if (drug) {
        if (!(sampleId in prior)) {
          prior[sampleId] = {};
          prior[sampleId][drug] = 'Naive';
        }
        var data = {
          'sample_ID': sampleId
        }
        prior[sampleId][drug] = 'Resistant';
      }
      ret = Collections.CRFs.update({
        CRF: "Clinical_Info",
        Study_ID: "prad_wcdt",
        'Sample_ID': sampleId
      }, {
        $addToSet: {
          prior_txs: summarizeTreatment("SU2C_Prior_TX_V3", treatment)
        }
      });
    })

    console.log("4 Drug State");

    for (var sampleId in prior) {
      if (prior[sampleId]) {
        var abi = prior[sampleId]['Abiraterone'];
        var enza = prior[sampleId]['Enzalutamide'];

        if (abi === undefined) {
          prior[sampleId]['Abiraterone'] = 'Naive';
        }

        if (enza === undefined) {
          prior[sampleId]['Enzalutamide'] = 'Naive';
        }

        var update_j = prior[sampleId];

        if (samples[sampleId] && samples[sampleId] !== undefined) {
          try {
            if (samples[sampleId]['Patient_ID'] == undefined)
              samples[sampleId]['Patient_ID'] = sampleId
            samples[sampleId]['Abiraterone'] = prior[sampleId]['Abiraterone']
            samples[sampleId]['Enzalutamide'] = prior[sampleId]['Enzalutamide']
            var ret = Collections.CRFs.update({
              CRF: "Clinical_Info",
              Study_ID: "prad_wcdt",
              'Sample_ID': sampleId
            }, {
              $set: samples[sampleId]
            }, {
              upsert: true
            });
          } catch (ex) {
            console.log("update exception", ex, update_j);
            throw ex
          }

        }
        /*	try {

  				console.log("update ",sampleId,{ $set: update_j } )
  	 			var ret = Collections.CRFs.update(
                                        {CRF: "Clinical_Info", Study_ID: "prad_wcdt", 'Sample_ID':sampleId},
  					{ $set: update_j },
  					{upsert:true}
  				)
  				console.log('clinical info prior returns', ret)
  			}
          	catch (ex) {
             		console.log("update exception", ex, update_j );
             	 throw ex
          	}*/
      } else {
        console.log('prior', sampleId, 'Naive2')
      }

    }

    // ingest Subsequent Treatment

    console.log("5 Subsequent Treatment State")

    var treatment_list = find("SU2C_Subsequent_Treatment_V1")
    treatment_list.forEach(function (treatment) {
      var patient_id = treatment['Patient_ID']
      var sampleId = treatment['Sample_ID']

      var drug = treatment['Drug_Name']
      var priorAbi = samples[patient_id]['Abiraterone']
      var data = {
        'Study_ID': 'prad_wcdt',
        'Abiraterone': priorAbi,
        'Patient_ID': patient_id
      }
      if (drug == 'Abiraterone') {
        data.abi_psa_response = treatment.PSA_Response
      }

      var ret = Collections.CRFs.update({
        CRF: "Clinical_Info",
        Study_ID: "prad_wcdt",
        'Sample_ID': sampleId
      }, {
        $set: data
      }, {
        upsert: true
      })
      ret = Collections.CRFs.update({
        CRF: "Clinical_Info",
        Study_ID: "prad_wcdt",
        'Sample_ID': sampleId
      }, {
        $addToSet: {
          subsequent_txs: summarizeTreatment("SU2C_Subsequent_Treatment_V1",
            treatment)
        }
      }); // TCG 8/2/2015
    })
    propagateClinical();
  }
  fixSample_IDs = function () {
    console.log("fixSample_IDs")
    var prad = [],
      tcga = [];

    Expression.find({
      gene: "TP53",
      Study_ID: "prad_wcdt"
    }, {
      "samples": 1,
      _id: 0
    }).forEach(function (doc) {
      prad = _.union(prad, Object.keys(doc.samples));
    });
    var ret = Studies.update({
      id: "prad_wcdt"
    }, {
      $set: {
        Sample_IDs: prad.sort()
      }
    });
    console.log("fixSample_IDs, update prad_wcdt", ret)

    Expression.find({
      gene: "TP53",
      Study_ID: "prad_tcga"
    }, {
      "samples": 1,
      _id: 0
    }).forEach(function (doc) {
      tcga = _.union(tcga, Object.keys(doc.samples));
    });
    Studies.update({
      id: "prad_tcga"
    }, {
      $set: {
        Sample_IDs: tcga.sort()
      }
    });
    console.log("fixSample_IDs, update prad_tcga", ret)
  }
  Meteor.startup(fixSample_IDs);

  propagateClinical = function () {

    console.log("6. Propogate all earlier treatments to prior and subsequent collections");
    /* Propogate all earlier treatments whether in the  prior or subsequent collections */
    /* there are many different ways to do this. But I'm trying to make as few changes to the code as possible */
    Collections.CRFs.find({
      CRF: "Clinical_Info",
      Sample_ID: /Pro/
    }).forEach(function (progression) {
      var target = {
        CRF: "Clinical_Info",
        Study_ID: "prad_wcdt",
        'Sample_ID': progression.Sample_ID
      };

      function copyForward(collName) {
        Collections.CRFs.find({
          $and: [
            {
              CRF: collName
              },
            {
              Study_ID: "prad_wcdt"
              },
            {
              Patient_ID: progression.Patient_ID
              },
            {
              Start_Date: {
                $lt: progression.biopsy_date
              }
              }
                    ]
        }).forEach(function (treatment) {
          Collections.CRFs.update(target, {
            $push: {
              prior_txs: summarizeTreatment(collName, treatment)
            }
          }); // TCG 8/2/2015

          if (treatment.Drug_Name == "Abiraterone") {
            ret = Collections.CRFs.update(target, {
              $set: {
                Abiraterone: "Resistant"
              }
            });
          }

          if (treatment.Drug_Name == "Enzalutamide") {
            ret = Collections.CRFs.update(target, {
              $set: {
                Enzalutamide: "Resistant"
              }
            });
          }
        });
      } // copyForward

      Collections.CRFs.update({
        _id: progression._id
      }, {
        $set: {
          Enzalutamide: "Naive",
          Abiraterone: "Naive"
        }
      });

      copyForward("SU2C_Prior_TX_V3");
      copyForward("SU2C_Subsequent_Treatment_V1");
    });
  };


  get_PSA_response = function (sample, date) {
    var blood_lab = Collections['Blood_Labs_V2'];

    psa_list = blood_lab.find({
      "Sample_ID": sample,
      "PSA__complexed__direct_measurement_": {
        $exists: true
      }
    }).fetch();

    var minPSA = 0;
    var maxPSA = 999999999;
    psa_list.forEach(function (psa) {

    });
  };
});


function summarizeTreatment(table, treatment) {

  var s = "<div style='width:300px;'><a href='/CRF/prad_wcdt/" + table + "/?q=" + treatment.Patient_ID +
    "'>";
  var dn = treatment.Drug_Name;
  if (dn === null) {
    dn = treatment.Treatment_Details;
  }
  s += dn + ": ";
  s += moment(new Date(treatment.Start_Date)).utc().format("MM/DD/YYYY")
  s += '-';
  if (treatment.Stop_Date)
    s += moment(new Date(treatment.Stop_Date)).utc().format("MM/DD/YYYY")
  else if (treatment.Stop_Date_Ext)
    s += treatment.Stop_Date_Ext;
  s += "</a></div>";
  return s;
}

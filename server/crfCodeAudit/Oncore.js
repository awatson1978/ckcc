Oncore = new Meteor.Collection("clinical_oncore");


ingestOncore = function () {
  var study = Studies.findOne({
    id: "prad_wcdt"
  });

  if (study) {
    var schemaMap = {};
    Questionnaires.find({
      study: "prad_wcdt",
      name: {
        $in: study.tables
      }
    }).forEach(function (crf) {
      schemaMap[crf.name] = crf.schema;
    });

    // We re-import these CRFs every time
    prad_wcdt_oncore_crfs.map(function (oncore_crf) {
      console.log("Removing CRFs", oncore_crf);

      Collections.CRFs.remove({
        CRF: oncore_crf
      });
    });

    Oncore.find({}, {
      sort: {
        patient: 1
      }
    }).forEach(function (patient) {
      console.log("Mapping Patient", patient.patient);
      mapPatient(patient, schemaMap);
    });
    
    console.log("Ingesting finished");

    console.log("ingestClinical- Starting Cohort Level Analysis");

    ingestClinical();

    console.log("ingestClinical- Finished ");
  }
};



Oncore.ingest = function (){
  process.env.DEBUG && console.log("Oncore.ingest()");

  var study = Studies.findOne({
    id: "prad_wcdt"
  });
  Oncore.parseQuestionnaires(study);
};


Oncore.parseQuestionnaires = function (study){
  if (study) {
    var schemaMap = {};

    Questionnaires.find({
      study: "prad_wcdt",
      name: {
        $in: study.tables
      }
    }).forEach(function (questionnaire) {
      schemaMap[questionnaire.name] = questionnaire.schema;
    });

    process.env.DEBUG && console.log("Finished parsing Oncore questionnaires.");

    return schemaMap;
  }
};
Oncore.parseQuestionnaires = function (study){
  if (study) {
    var schemaMap = {};


    // // We re-import these CRFs every time
    // prad_wcdt_oncore_crfs.map(function (oncoreRecord) {
    //   console.log("Removing CRFs", oncoreRecord);
    //
    //   Collections.CRFs.remove({
    //     CRF: oncoreRecord
    //   });
    // });

    // Oncore.find({}, {
    //   sort: {
    //     patient: 1
    //   }
    // }).forEach(function (patient) {
    //   console.log("Mapping Patient", patient.patient);
    //   mapPatient(patient, schemaMap);
    // });

    process.env.DEBUG && console.log("Finished parsing Oncore questionnaires.");
    // console.log("ingestClinical- Starting Cohort Level Analysis");

    // ingestClinical();
    //
    // console.log("ingestClinical- Finished ");
  }
};



HTTP.methods({
  ingestOncore: function () {
    Meteor.call("ingestOncore");
    return "Ingesting Oncore Finished";
  },
  ingestClinical: function () {
    Meteor.call("ingestClinical");
    return "ingestingClinical";
  },
  propagateClinical: function () {
    Meteor.call("propagateClinical");
    return "propgatingClinical";
  }
});

Meteor.methods({
  ingestOncore: function () {
    ingestOncore();
  },
  ingestClinical: function () {
    ingestClinical();
  },

  propagateClinical: function () {
    propagateClinical();
  }
});

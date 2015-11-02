Meteor.startup(function () {

  Studies.upsert({
    id: "prad_wcdt"
  }, {
    $set: {
      "cbio_id": "112",
      "id": "prad_wcdt",
      "type_of_cancer_id": "prad",
      "name": "West Coast Prostate Cancer Dream Team",
      "short_name": "WCDT",
      "description": "Castration Resistant Prostate Cancer",
      "public": false,
      "pmid": "NULL",
      "citation": "unpublished",
      "collaborations": ["WCDT"],
      "tables": [],
      /*
      "Sample_IDs": [],
      "Patient_IDs": [],
      */
    }
  });

  Studies.upsert({
    id: "prad_tcga"
  }, {
    $set: {
      "cbio_id": "?",
      "id": "prad_tcga",
      "type_of_cancer_id": "prad",
      "name": "NIH TCGA Prostate Cancer",
      "short_name": "Prad TCGA",
      "description": "Large NIH study of Prostate Cancer",
      "public": true,
      "pmid": "NULL",
      "citation": "Schultz 2015",
      "collaborations": ["public"],
      "tables": [],
      "Sample_IDs": [],
      "Patient_IDs": [],
    }
  });

  Studies.upsert({
    id: "ckcc"
  }, {
    $set: {
      "cbio_id": "?",
      "id": "ckcc",
      "type_of_cancer_id": "many",
      "name": "Califoria Kids Cancer Comparison",
      "short_name": "CKCC",
      "description": "",
      "public": false,
      "pmid": "NULL",
      "citation": "unpublished",
      "collaborations": ["ckcc"],
      "tables": [],
      "Sample_IDs": [],
      "Patient_IDs": [],
    }
  });

  Studies.upsert({
    id: "treehouse"
  }, {
    $set: {
      "cbio_id": "?",
      "id": "treehouse",
      "type_of_cancer_id": "many",
      "name": "Treehouseproject",
      "short_name": "treehouse",
      "description": "",
      "public": false,
      "pmid": "NULL",
      "citation": "unpublished",
      "collaborations": ["treehouse"],
      "tables": [],
      "Sample_IDs": [],
      "Patient_IDs": []
    }
  });


  //  function maintainReferentialIntegrity () {
  //    Metadata.find({
  //      study: {
  //        $exists: 1
  //      }
  //    }).forEach(function (table) {
  //      if (table.study && table.study.length > 0) {
  //        var n = Studies.update({
  //          id: table.study
  //        }, {
  //          $addToSet: {
  //            tables: table.name
  //          }
  //        });
  //        //  console.log("maintainReferentialIntegrity", table.study, table.name, n);
  //      }
  //    });
  //  }
  //  maintainReferentialIntegrity();
});

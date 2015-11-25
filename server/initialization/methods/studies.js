Meteor.methods({
  initializeStudies:function (){

    Studies.upsert({
      _id: "prad_tcga"
    }, {
      $set: {
        "cbio_id": "?",
        // "id": "prad_tcga",
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
      _id: "ckcc"
    }, {
      $set: {
        "cbio_id": "?",
        // "id": "ckcc",
        "name": "California Kids Cancer Comparison",
        "description": "California Kids Cancer Comparison",
        "short_name": "CKCC",
        "slug": "CKCC",
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
      _id: "prad_wcdt"
    }, {
      $set: {
        "cbio_id": "112",
        // "id": "prad_wcdt",
        "name": "West Coast Prostate Cancer Dream Team",
        "short_name": "WCDT",
        "description": "Castration Resistant Prostate Cancer",
        "public": false,
        "pmid": "NULL",
        "citation": "unpublished",
        "collaborations": ["WCDT"],
        "tables": [],
      }
    });


    Studies.upsert({
      _id: "treehouse"
    }, {
      $set: {
        "cbio_id": "?",
        // "id": "treehouse",
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
  }
});

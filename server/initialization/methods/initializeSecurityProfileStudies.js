// neuroblastoma study
// lymphoma study
// melanoma study
// carcinoma study
// granuloma study
// sarcoma study
// patient satisfaction study


Meteor.methods({
  initializeSecurityProfileStudies : function(){

    Studies.upsert({
      _id: "neuroblastoma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Nifty Neuroblastoma Study",
        "short_name": "neuroblastoma",
        "description": "Nifty Neuroblastoma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "Patient_Enrollment_form",
          "RNASeq_completion_form",
          "Followup"
        ]
      }
    });
    Studies.upsert({
      _id: "lymphoma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Lazy Lymphoma Study",
        "short_name": "lymphoma",
        "description": "Lazy Lymphoma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "Demographics",
          "Followup"
        ]
      }
    });
    Studies.upsert({
      _id: "granuloma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Grumpy Granuloma Study",
        "short_name": "granuloma",
        "description": "Grumpy Granuloma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "Patient_Enrollment_form",
          "Blood_Labs_V2",
          "Followup"
        ]
      }
    });


    Studies.upsert({
      _id: "carcinoma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Cranky Carcinoma Study",
        "short_name": "carcinoma",
        "description": "Cranky Carcinoma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "RNASeq_completion_form",
          "Followup"
        ]
      }
    });
    Studies.upsert({
      _id: "melanoma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Meloncholy Melanoma Study",
        "short_name": "melanoma",
        "description": "Meloncholy Melanoma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "RNASeq_completion_form",
          "Followup"
        ]
      }
    });
    Studies.upsert({
      _id: "sarcoma"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Sappy Sarcoma Study",
        "short_name": "sarcoma",
        "description": "Sappy Sarcoma Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "Laser_Capture_Microdissection",
          "Followup"
        ]
      }
    });

    Studies.upsert({
      _id: "satisfaction"
    }, {
      $set: {
        "cbio_id": "112",
        "name": "Patient Satisfaction Study",
        "short_name": "satisfaction",
        "description": "Patient Satisfaction Study",
        "public": false,
        "citation": "unpublished",
        "collaborations": [],
        "tables": [],
        "Questionnaires": [
          "Patient_Satisfaction"
        ]
      }
    });


  }
});

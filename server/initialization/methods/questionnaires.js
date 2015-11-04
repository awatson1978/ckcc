Meteor.methods({
  initializeQuestionnaires:function (){
    if (Questionnaires && Questionnaires.find().count() === 0) {

      var pathologyQuestionnaire = {
        institutionName: "UCSC",
        institutionId: "UCSC",
        participantId: "",
        questionnaireName: "WCDT Pathology Report",
        createdAt: new Date(),
        schema: dehydratedPathologySchema
      };
      var ckccQuestionnaire = {
        institutionName: "UCSC",
        institutionId: "UCSC",
        participantId: "",
        questionnaireName: "California Kids Cancer Comparison",
        createdAt: new Date(),
        schema: CkccSchema
      };

      var patientSatisfactionQuestionnaire = {
        institutionName: "AsiaPacificCo",
        institutionId: "apc",
        participantId: "",
        questionnaireName: "Patient Satisfaction Survey",
        createdAt: new Date(),
        schema: CkccSchema
      };


      console.log('PathologyQuestionnaire', pathologyQuestionnaire);
      console.log('hydratedBasicSchema', hydratedBasicSchema);

      //var dehydratedBrasicSchema = SchemaHydrator.dehydrate(hydratedBasicSchema);
      //console.log('dehydratedBasicSchema', dehydratedBrasicSchema);

      var hydrationTestQuestionnaire = {
        questionnaireName: "Hydration Test",
        createdAt: new Date(),
        schema: hydratedBasicSchema
      };

      console.log('hydrationTestQuestionnaire', hydrationTestQuestionnaire);

      Questionnaires.insert(pathologyQuestionnaire, {validate: false});
      Questionnaires.insert(ckccQuestionnaire, {validate: false});
      Questionnaires.insert(patientSatisfactionQuestionnaire, {validate: false});
      Questionnaires.insert(hydrationTestQuestionnaire, {validate: false}, function (error, result){
        if (error) {
          console.log(error);
        }
      });
    }
  }
});


var hydratedBasicSchema = {
  title: {
    type: "String",
    optional: true,
    label: "Full Name"
  },
  description: {
    type: "Number",
    optional: true,
    label: "Count"
  },
};

var dehydratedPathologySchema = {
  title: {
    type: String,
    optional: true,
    label: "Sample ID"
  },
  description: {
    type: String,
    optional: true,
    label: "Institution"
  },
  url: {
    type: String,
    optional: true
  },
  imageUrl: {
    type: String,
    optional: true
  },
  'AR_chromosomeX_ratio': {
    type: Number,
    decimal: true,
    optional: true
  },
  "AR-FISH_IHC": {
    "allowedValues": [
        "Positive",
        "Focal Positive",
        "Negative",
        "Weak",
        "Failed",
        "Not Performed"
      ],
    "label": "AR Immunohistochemistry",
    "max": 200,
    type: String,
    optional: true
  },
  "AR-FISH_test_performed": {
    "allowedValues": [
        "Performed",
        "Not Performed"
      ],
    "label": "AR-FISH test performed",
    "max": 200,
    type: String,
    optional: true
  },
  "PSA_IHC": {
    "allowedValues": [
        "Positive",
        "Focal Positive",
        "Negative",
        "Weak",
        "Failed",
        "Not Performed"
      ],
    "label": "PSA Immunohistochemistry",
    "max": 200,
    type: String,
    optional: true
  },
  "CHGA_IHC": {
    "allowedValues": [
        "Positive",
        "Focal Positive",
        "Negative",
        "Weak",
        "Failed",
        "Not Performed"
      ],
    "label": "CHGA Immunohistochemistry",
    "max": 200,
    type: String,
    optional: true
  },
  "CHGA_test_performed": {
    "allowedValues": [
        "Performed",
        "Not Performed"
      ],
    "label": "CHGA test performed",
    "max": 200,
    type: String,
    optional: true
  },
  "ION_Torrent_test_performed": {
    "allowedValues": [
        "Yes",
        "No"
      ],
    "label": "ION Torrent test performed",
    "max": 200,
    type: String,
    optional: true
  },
  "PTEN_IHC": {
    "allowedValues": [
        "Positive",
        "Negative",
        "Weak",
        "N/A"
      ],
    "label": "PTEN Immunohistochemistry",
    "max": 200,
    type: String,
    optional: true
  },
  "PTEN_test_performed": {
    "allowedValues": [
        "Performed",
        "Not Performed"
      ],
    "label": "PTEN test performed",
    "max": 200,
    type: String,
    optional: true
  },
  "Tumor_Content": {
    "label": "Tumor Content",
    type: String,
    "allowedValues": [
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
      ]
  },
  "Preliminary_Histology": {
    "allowedValues": [
        "Adenocarcinoma",
        "Possible SC",
        "Small Cell",
        "ANPC",
        "Mixed",
        "N/A"
      ],
    "label": "Preliminary Histology",
    "max": 200,
    type: String
  },
  "Final_Histology": {
    "allowedValues": [
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
    "label": "Final Histology Call",
    "max": 200,
    "type": String,
    "optional": true
  }
};

PathologySchema = new SimpleSchema(dehydratedPathologySchema);

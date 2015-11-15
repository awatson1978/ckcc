Meteor.startup(function () {
  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Histology_Research"})) {
      Metadata.insert({
        "_id": "Histology_Research",
        "name": "Histology_Research",
        "commonName": "Histological Research",
        "version": "V1",
        "n": 13,
        "incompleteCount": 0,
        "schema": {
          "CreatedAt": {
            "label": "Created At",
            "type": "Date"
          },
          "Sample_ID": {
            "label": "Sample ID",
            "type": "String"
          },
          "Histology_Call": {
            "allowedValues": [
              "Adeno",
              "Small Cell",
              "IAC/Adeno",
              "IAC",
              "Indeterminate",
              "Intermediate",
              "IAC/SC",
              "Adeno/SC",
              "Unavailable",
              "QNS"
            ],
            "type": "String"
          },
          "Adeno": {
            "type": "String"
          },
          "Small_Cell": {
            "type": "String"
          },
          "Trichotomy": {
            "type": "String"
          }
        },        
        "fieldOrder": [
          "Sample_ID",
          "Histology_Call",
          "Adeno",
          "Small_Cell",
          "Trichotomy"
        ],
        "study": "prad_wcdt"
      });
    }
  }
});

Meteor.startup(function () {

  if (process.env.INITIALIZE !== false) {
    if (!Metadata.findOne({_id: "Histological_Assessment_form"})) {
      Metadata.insert({
          "_id" : "Histological_Assessment_form",
          "name" : "Histological_Assessment_form",
          "commonName" : "Histological Assessment",
          "version" : "V1",
          "n" : 18,
          "incompleteCount" : 0,
          "schema" : {
              "CreatedAt" : {
                  "label" : "Created At",
                  "type" : "Date"
              },
              "Sample_ID" : {
                  "label" : "Sample ID",
                  "type" : "String"
              },
              "Cores" : {
                  "autoform" : {
                      "template" : "bootstrap3-horizontal"
                  },
                  "optional" : true,
                  "type" : "ObjectArray"
              }
          },
          "fieldOrder" : [
              "Sample_ID",
              "Cores"
          ],
          "study" : "prad_wcdt"
      });
    }
  }
});

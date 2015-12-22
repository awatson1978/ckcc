Meteor.methods({
  initializeDataRecord: function () {
    console.log('initializeDataRecord');

    // scan our environment, and figure out which steps we want to ingest
    var importSubjects = false;
    var importRecords = false;

    if (Subjects.find().count() === 0) {
      importSubjects = true;
    }
    if (Records.find().count() === 0) {
      importRecords = true;
    }

    // iterate through the Oncore records
    Oncore.find().forEach(function (record) {
      console.log("===================================");
      console.log('record', record);

      // import subjects, as needed
      if (importSubjects) {
        var newSubject = {
          participantId: record.patient,
          attributes: record.attributes
        };
        Subjects.insert(newSubject);
      }

      //import data files, as needed
      if (importRecords) {
        Object.keys(record.attributes).forEach(function (key) {
          var existingAttributes = record.attributes[key];
          var existingRecord = existingAttributes[0];

          console.log("---------------------------------");
          console.log('existingRecord', existingRecord);

          var newRecord = {};
          if (typeof existingRecord === 'object') {
            Object.keys(existingRecord).forEach( function (field) {
              var fieldWithUnderscores = addUnderscores(field);
              newRecord[fieldWithUnderscores] = existingRecord[field];
            });
          }

          newRecord.participantId = record.patient;
          newRecord.commonName = key;
          newRecord.formName = addUnderscores(key);

          Records.insert(newRecord);
        });
      }

    });
  }
});

addUnderscores = function (term) {
  return term.replace(/ /g, "_");
};

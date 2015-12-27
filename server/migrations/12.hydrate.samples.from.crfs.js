// Migrate the Metadata collection to Questionnaires

//if (process.env.MIGRATE) {
  Migrations.add({
    version: 12,
    up: function () {
      Records.find().forEach(function (record) {
        if (record.questionnaireId === "SU2C_Biopsy_V3") {
          delete record._id;
          delete record.questionnaireName;
          delete record.questionnaireId;

          Samples.insert(record);
        }
      });
    }
  });
//}



// db.records.find().forEach(function (record) {
//   if (record.questionnaireId === "SU2C_Biopsy_V3") {
//     delete record._id;
//     delete record.questionnaireName;
//     delete record.questionnaireId;
//
//     db.samples.insert(record);
//   }
// });

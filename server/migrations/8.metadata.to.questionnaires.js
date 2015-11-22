// Migrate the Metadata collection to Questionnaires

if (process.env.MIGRATE) {
  Migrations.add({
    version: 8,
    up: function () {
      Metadata.find().forEach(function (record) {
        delete record._id;
        Questionnaires.insert(record);
      }, function (error, result){
        Metadata.remove({});
      });
    }
  });
}

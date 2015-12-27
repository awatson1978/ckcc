
//if (process.env.MIGRATE) {
  Migrations.add({
    version: 6,
    up: function () {
      Metadata.find().forEach(function (record) {
        if (record.metadata) {
          console.log('record.metadata', record.metadata);
          delete record.metadata;
          // do we need to write it back to the database?
        }
      });
    }
  });

//}

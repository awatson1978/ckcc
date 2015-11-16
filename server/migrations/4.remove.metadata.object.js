Migrations.add({
  version: 2,
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

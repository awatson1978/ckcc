

if (process.env.MIGRATE) {
  // Migrations.add({
  //   version: 3,
  //   up: function () {
  //     Metadata.find().forEach(function (record) {
  //       if (record.schema) {
  //         Object.keys(record.schema).forEach(function (schemaKey) {
  //           if (record.schema[schemaKey].autoform.type === "Sample_ID") {
  //             record.schema[schemaKey].autoform.type = "text";
  //             // do we need to write it back to the database?
  //           }
  //           if (record.schema[schemaKey].autoform.type === "Patient_ID") {
  //             record.schema[schemaKey].autoform.type = "text";
  //             // do we need to write it back to the database?
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
}

Migrations.add({
  version: 1,
  up: function () {

    Metadata.find().forEach(function (record) {
      console.log('==========================================================');
      console.log('record.commonName', record.commonName);

      if (record.schema) {
        //console.log('record.schema.length', record.schema.length);

        Object.keys(record.schema).forEach(function (schemaKey) {

          if (record.schema[schemaKey].allowedValues) {
            //console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
            //console.log('schemaKey', schemaKey);
            //console.log('record.schema[schemaKey].allowedValues', record.schema[schemaKey].allowedValues);

            var queryKeyString = "schema." + schemaKey + ".autoform.afFieldInput.options";

            var queryUpdate = {};
            queryUpdate[queryKeyString] = [];

            Metadata.update({
              _id: record._id
            }, {
              $set: queryUpdate
            }, function (error, result) {
              if (result) {

                record.schema[schemaKey].allowedValues.forEach(function (
                  allowedValue) {
                  //console.log('-----------------------------------------------------------');
                  //console.log('schemaKey.autoform.afFieldInput.options', allowedValue);

                  var pushQueryUpdate = {};
                  pushQueryUpdate[queryKeyString] = {
                    'label': allowedValue,
                    'value': allowedValue
                  }

                  Metadata.update({
                    _id: record._id
                  }, {
                    $push: pushQueryUpdate
                  });
                });

              }
            });

          }
        });
      }
    });
  }
});

SchemaHydrator = {
  hydrate: function (meta){

    // if (process.env.DEBUG) {
    //   console.log('meta', meta);
    // }
    console.debug('meta', meta);

    if (meta) {
      Object.keys(meta.schema).map(function (fn) {
        var f = meta.schema[fn];

        if (f.autoform == null){
          f.autoform = {};
        }

        if (f.allowedValues){
          f.allowedValues = _.union(f.allowedValues);
        }
      });

      return new SimpleSchema(meta.schema);

    } else {
      return null;
    }
  },
  osmosis: function (dehydratedSchema){
    console.log('dehydratedSchema', dehydratedSchema);
    console.log('dehydratedSchema.fieldOrder.length', dehydratedSchema.fieldOrder.length);

    var hydratedObject = {};
    if (dehydratedSchema.fieldOrder) {
      for (var i = 0; i < dehydratedSchema.fieldOrder.length; i++) {

        var schemaKey = dehydratedSchema.fieldOrder[i];
        console.log('schemaKey', schemaKey);

        if (schemaKey) {
          hydratedObject[schemaKey] = {};

          if (dehydratedSchema.schema[schemaKey].label) {
            hydratedObject[schemaKey].label = dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].label;
          }
          if (dehydratedSchema.schema[schemaKey].optional) {
            hydratedObject[schemaKey].optional = dehydratedSchema.schema[schemaKey].optional;
          }
          if (dehydratedSchema.schema[schemaKey].autoform) {
            hydratedObject[schemaKey].autoform = dehydratedSchema.schema[schemaKey].autoform;
          }


          if (dehydratedSchema.schema[schemaKey].type === "String") {
            hydratedObject[schemaKey].type = String;
          }
          if (dehydratedSchema.schema[schemaKey].type === "Number") {
            hydratedObject[schemaKey].type = Number;
          }
          if (dehydratedSchema.schema[schemaKey].type === "Date") {
            hydratedObject[schemaKey].type = Date;
          }
          if (dehydratedSchema.schema[schemaKey].type === "Object") {
            hydratedObject[schemaKey].type = Object;
          }
        }

      }
    }
    console.log('osmosisSchema', hydratedObject);
    return new SimpleSchema(hydratedObject);
  },
  dehydrate: function (schema){
    if (process.env.DEBUG) {
      console.log('dehydrating schema...', schema);
    }

    Object.keys(schema).forEach(function(key){
      // console.log('hydrating schema key ', key);
      // console.log('hydrating schema key.type ', schema[key].type);
      if (schema[key].type === "String") {
        schema[key].type = String;
      }
      if (schema[key].type === "Number") {
        schema[key].type = Number;
      }
    });
    if (process.env.DEBUG) {
      console.log('dehydrated schema: ', schema);
    }
    return schema;
  }
};

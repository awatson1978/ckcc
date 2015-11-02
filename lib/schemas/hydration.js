SchemaHydrator = {
  hydrate: function (meta){

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

    var hydratedObject = {};

    for (var i = 0; i < dehydratedSchema.fieldOrder.length; i++) {
      hydratedObject.label = dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].label;
      hydratedObject.optional = dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].optional;

      if (dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].type === "String") {
        hydratedObject.type = String;
      }

      if (dehydratedSchema.schema[dehydratedSchema.fieldOrder[i]].type === "Number") {
        hydratedObject.type = Number;
      }
    }

    return hydratedObject;
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

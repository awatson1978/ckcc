SchemaHydrator = {
  hydrate: function (schema){
    if (process.env.DEBUG) {
      console.log('hydrating schema...', schema);
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
      console.log('hydrated schema: ', schema);
    }
    return schema;
  },
  dehydrate: function (schema){

  },
  scopeTest: function (){
    console.log('SchemaHydrator exists...');
  }
};

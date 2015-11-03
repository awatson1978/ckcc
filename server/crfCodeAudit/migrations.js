// Initialize and migrate data
initializeMetadata = function () {
  console.log("initializeMetadata");

  _.each(admin_crfs, Migrator.initializeCollectionCRF, {
    study: 'admin'
  });
  _.each(prad_wcdt_crfs, Migrator.initializeCollectionCRF, {
    study: 'prad_wcdt'
  });
  _.each(common_crfs, Migrator.initializeCollectionCRF, {
    study: 'common'
  });

  if (!('DataMigrations' in Collections)) {
    Collections.DataMigrations = new Meteor.Collection("DataMigrations");
  }

  Migration = function (migrationName, func) {
    var migration = Collections.DataMigrations.findOne({
      name: migrationName
    });
    if (migration == null) {
      console.log("migrating", migrationName);
      func();
      Collections.DataMigrations.insert({
        name: migrationName
      });
    }
  };

  console.log("before");

  Migration('CRFunification 20151023-D', function () {
    Collections.CRFs.remove({});

    console.log("Migration before CRFs", Collections.CRFs.find().count());

    for (var i = 0; i < prad_wcdt_unique_crfs.length; i++) {
      Migrator.migrateCollection(prad_wcdt_unique_crfs[i]);
    }

    Migrator.migrateCollection("Clinical_Info", {
      Study_ID: "prad_tcga"
    });

    console.log("Migration after CRFs", Collections.CRFs.find().count());

    ingestOncore();
  });

  console.log("after");


  Migrator.maintain_prad_wcdt("Patient_ID");
  Migrator.maintain_prad_wcdt("Sample_ID");

};
Meteor.startup(initializeMetadata);



Migrator = {
  initializeCollectionCRF: function (collectionName, nthCollection) {

    if (Initialization[collectionName]) {
      var fo = _.pluck(Initialization[collectionName].Fields, "Field_Name");
      var fs = _.clone(Initialization[collectionName]);
      var schema = {};


      fs.Fields.map(function (field) {
        field = _.clone(field);
        var name = field["Field_Name"];
        delete field["Field_Name"];
        schema[name] = field;
      });


      var n = Metadata.update({
        _id: collectionName
      }, {
        _id: collectionName,
        name: collectionName,
        commonName: Initialization[collectionName].commonName,
        version: Initialization[collectionName].version,
        n: nthCollection,
        incompleteCount: 0,
        schema: schema,
        metadata: Initialization[collectionName],
        fieldOrder: fo,
        study: this.study,
      }, {
        upsert: true
      });


      console.log("before", this.study, collectionName);
      Studies.update({
        name: this.study
      }, {
        $addToSet: {
          tables: collectionName
        }
      });
    }
  },
  migrateCollection: function (collName, query) {

    var count = 0;
    var countInserted = 0;
    var coll = new Meteor.Collection(collName);

    Collections[collName] = coll;

    if (query === null) {
      query = {};
    }

    coll.find().forEach(function (doc) {
      count++;

      doc.Study_ID = query.Study_ID ? query.Study_ID : 'prad_wcdt'; // needs both
      doc.CRF = collName;
      delete doc["_id"];

      if (Collections.CRFs.findOne({
          Patient_ID: doc.Patient_ID,
          Sample_ID: doc.Sample_ID,
          CRF: doc.CRF
        }) === null) {
        var ret = Collections.CRFs.insert(doc);
        if (ret) {
          countInserted++;
        }
      }

    });
    console.log("migration", collName, count, countInserted, query);
  },
  maintain_prad_wcdt: function(field) {
    var fields = {};
    fields[field] = 1;
    var objectList = Collections.CRFs.find({
      CRF: {
        $in: ["SU2C_Biopsy_V3", "Biopsy_Research", "Clinical_Info"]
      }
    }, {
      fields: fields
    }).fetch();

    var aList = objectList.map(function (object) {
      return object[field];
    }).filter(function (element) {
      return element != null;
    });

    var sortedSet = _.union(aList).sort();

    var updateClause = {};
    updateClause[field + 's'] = {
      $each: sortedSet
    };

    var updateResult = Studies.update({
      id: "prad_wcdt"
    }, {
      $addToSet: updateClause
    });

    var final = Studies.findOne({
      id: "prad_wcdt"
    });
  }
};

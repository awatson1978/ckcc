##clinical:active-record  

An ActiveRecord pattern that provides CRUDL templates, using AutoForms and SimpleSchema.

===============================
#### Installation  

````bash
meteor add clinical:active-record
````

===============================
#### Usage  

1.  Define your schema...

```js
SampleSchema = new SimpleSchema({
  "name": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Name"
  },
  "description": {
    type: String,
    optional: true,
    defaultValue: "",
    label: "Description",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo",
        placeholder: "Lorem ipsum..."
      }
    }
  }
});
Records.attachSchema(SampleSchema);
```

2.  Set up your publications and subscriptions....

```js
// client/subscriptions.js
Meteor.subscribe("records");

// server/publications.js
Meteor.publish("records", function (recordId) {
  if (recordId) {
    // if (User.collaborationsContain(

    return Records.findOne({
      _id: recordId,
      collaborations: {
        $in: User.getCollaborations()
      }
    });
  } else
    return Records.find({
      collaborations: {
        $in: User.getCollaborations()
      }
  });
});
```

3.  Then use the default routes...
````js
Router.go('/insert/record');
Router.go('/upsert/record/:id');
Router.go('/view/record/:id');
Router.go('/list/records');
Router.go('/grid/records');
Router.go('/record/:id');
````

4.  Or add templates directly to your application...

````html
<!-- basic upsert/list pattern -->
{{> recordsUpsertPage }}
{{> recordsListPage }}

<!-- additional views -->
{{> recordImageGridPage }}
{{> recordImageGridPage }}
{{> recordsTablePage }}
````


===============================
#### Cloning/Forking  

While ActiveRecord works fine if there's a single schema that you want to create some basic CRUDL user interface for; it's quite likely that you'll want to have multiple schemas, or simply want to modify the default templates somehow.  

The recommended approach for using ActiveRecord is to clone it into your application's ``/packages`` directory, and to then refactor all the references of ``Record`` to the name of whatever you're modeling.  You'll want to be sure to rename both the capitalized and non-capitalized versions.  Back up your files before doing this refactor!    

```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-record
cd clinical-active-record
find . -tyope f -print0 | xargs -0 sed -i 's/Record/Foo/g'
find . -tyope f -print0 | xargs -0 sed -i 's/record/foo/g'
```


===============================
#### Licensing  

MIT.  Use as you will.

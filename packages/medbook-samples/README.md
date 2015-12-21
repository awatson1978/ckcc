##medbook:samples

An ActiveSample pattern that provides CRUDL templates, using AutoForms and SimpleSchema.

===============================
#### Installation  

````bash
meteor add medbook:samples
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
Samples.attachSchema(SampleSchema);
```

2.  Set up your publications and subscriptions....

```js
// client/subscriptions.js
Meteor.subscribe("samples");

// server/publications.js
Meteor.publish("samples", function (sampleId) {
  if (sampleId) {
    // if (User.samplesContain(

    return Samples.findOne({
      _id: sampleId,
      samples: {
        $in: User.getSamples()
      }
    });
  } else
    return Samples.find({
      samples: {
        $in: User.getSamples()
      }
  });
});
```

3.  Then use the default routes...
````js
Router.go('/insert/sample');
Router.go('/upsert/sample/:id');
Router.go('/view/sample/:id');
Router.go('/list/samples');
Router.go('/grid/samples');
Router.go('/sample/:id');
````

4.  Or add templates directly to your application...

````html
<!-- basic upsert/list pattern -->
{{> samplesUpsertPage }}
{{> samplesListPage }}

<!-- additional views -->
{{> sampleImageGridPage }}
{{> sampleImageGridPage }}
{{> samplesTablePage }}
````


===============================
#### Cloning/Forking  

While ActiveSample works fine if there's a single schema that you want to create some basic CRUDL user interface for; it's quite likely that you'll want to have multiple schemas, or simply want to modify the default templates somehow.  

The recommended approach for using ActiveSample is to clone it into your application's ``/packages`` directory, and to then refactor all the references of ``Sample`` to the name of whatever you're modeling.  You'll want to be sure to rename both the capitalized and non-capitalized versions.  Back up your files before doing this refactor!    

```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-sample
cd clinical-active-sample
find . -tyope f -print0 | xargs -0 sed -i 's/Sample/Foo/g'
find . -tyope f -print0 | xargs -0 sed -i 's/sample/foo/g'
```

Alternatively, you may find the StarryNight commands useful...
```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-sample
cd clinical-active-sample
starrynight rename --from 'Sample' --to 'Foo' --root
starrynight rename --from 'sample' --to 'foo' --root
starrynight rename --from 'sample' --to 'foo' --root
starrynight rename --from 'sample' --to 'foo' --root
```


===============================
#### Licensing  

MIT.  Use as you will.

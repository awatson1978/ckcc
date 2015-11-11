##clinical:active-study  

An ActiveStudy pattern that provides CRUDL templates, using AutoForms and SimpleSchema.

===============================
#### Installation  

````bash
meteor add clinical:active-study
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
Studies.attachSchema(SampleSchema);
```

2.  Set up your publications and subscriptions....

```js
// client/subscriptions.js
Meteor.subscribe("studies");

// server/publications.js
Meteor.publish("studies", function (studyId) {
  if (studyId) {
    // if (User.studiesContain(

    return Studies.findOne({
      _id: studyId,
      studies: {
        $in: User.getStudies()
      }
    });
  } else
    return Studies.find({
      studies: {
        $in: User.getStudies()
      }
  });
});
```

3.  Then use the default routes...
````js
Router.go('/insert/study');
Router.go('/upsert/study/:id');
Router.go('/view/study/:id');
Router.go('/list/studies');
Router.go('/grid/studies');
Router.go('/study/:id');
````

4.  Or add templates directly to your application...

````html
<!-- basic upsert/list pattern -->
{{> studiesUpsertPage }}
{{> studiesListPage }}

<!-- additional views -->
{{> studyImageGridPage }}
{{> studyImageGridPage }}
{{> studiesTablePage }}
````


===============================
#### Cloning/Forking  

While ActiveStudy works fine if there's a single schema that you want to create some basic CRUDL user interface for; it's quite likely that you'll want to have multiple schemas, or simply want to modify the default templates somehow.  

The recommended approach for using ActiveStudy is to clone it into your application's ``/packages`` directory, and to then refactor all the references of ``Study`` to the name of whatever you're modeling.  You'll want to be sure to rename both the capitalized and non-capitalized versions.  Back up your files before doing this refactor!    

```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-study
cd clinical-active-study
find . -tyope f -print0 | xargs -0 sed -i 's/Study/Foo/g'
find . -tyope f -print0 | xargs -0 sed -i 's/study/foo/g'
```

Alternatively, you may find the StarryNight commands useful...
```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-study
cd clinical-active-study
starrynight rename --from 'Study' --to 'Foo' --root
starrynight rename --from 'study' --to 'foo' --root
starrynight rename --from 'study' --to 'foo' --root
starrynight rename --from 'study' --to 'foo' --root
```


===============================
#### Licensing  

MIT.  Use as you will.

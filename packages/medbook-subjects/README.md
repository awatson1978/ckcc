##clinical:active-subject  

An ActiveSubject pattern that provides CRUDL templates, using AutoForms and SimpleSchema.

===============================
#### Installation  

````bash
meteor add clinical:active-subject
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
Subjects.attachSchema(SampleSchema);
```

2.  Set up your publications and subscriptions....

```js
// client/subscriptions.js
Meteor.subscribe("subjects");

// server/publications.js
Meteor.publish("subjects", function (subjectId) {
  if (subjectId) {
    // if (User.collaborationsContain(

    return Subjects.findOne({
      _id: subjectId,
      collaborations: {
        $in: User.getCollaborations()
      }
    });
  } else
    return Subjects.find({
      collaborations: {
        $in: User.getCollaborations()
      }
  });
});
```

3.  Then use the default routes...
````js
Router.go('/insert/subject');
Router.go('/upsert/subject/:id');
Router.go('/view/subject/:id');
Router.go('/list/subjects');
Router.go('/grid/subjects');
Router.go('/subject/:id');
````

4.  Or add templates directly to your application...

````html
<!-- basic upsert/list pattern -->
{{> subjectsUpsertPage }}
{{> subjectsListPage }}

<!-- additional views -->
{{> subjectImageGridPage }}
{{> subjectImageGridPage }}
{{> subjectsTablePage }}
````


===============================
#### Cloning/Forking  

While ActiveSubject works fine if there's a single schema that you want to create some basic CRUDL user interface for; it's quite likely that you'll want to have multiple schemas, or simply want to modify the default templates somehow.  

The recommended approach for using ActiveSubject is to clone it into your application's ``/packages`` directory, and to then refactor all the references of ``Subject`` to the name of whatever you're modeling.  You'll want to be sure to rename both the capitalized and non-capitalized versions.  Back up your files before doing this refactor!    

```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-subject
cd clinical-active-subject
find . -tyope f -print0 | xargs -0 sed -i 's/Subject/Foo/g'
find . -tyope f -print0 | xargs -0 sed -i 's/subject/foo/g'
```


===============================
#### Licensing  

MIT.  Use as you will.

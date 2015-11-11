##medbook:subject  

UI components for listing subjects and patients.

===============================
#### Installation  

````bash
meteor add medbook:subject
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
#### Licensing  

MIT.  Use as you will.

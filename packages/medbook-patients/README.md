##medbook:patients

An ActivePatient pattern that provides CRUDL templates, using AutoForms and SimpleSchema.

===============================
#### Installation  

````bash
meteor add medbook:patients
````

===============================
#### Usage  

1.  Define your schema...

```js
PatientSchema = new SimpleSchema({
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
Patients.attachSchema(PatientSchema);
```

2.  Set up your publications and subscriptions....

```js
// client/subscriptions.js
Meteor.subscribe("patients");

// server/publications.js
Meteor.publish("patients", function (patientId) {
  if (patientId) {
    // if (User.patientsContain(

    return Patients.findOne({
      _id: patientId,
      patients: {
        $in: User.getPatients()
      }
    });
  } else
    return Patients.find({
      patients: {
        $in: User.getPatients()
      }
  });
});
```

3.  Then use the default routes...
````js
Router.go('/insert/patient');
Router.go('/upsert/patient/:id');
Router.go('/view/patient/:id');
Router.go('/list/patients');
Router.go('/grid/patients');
Router.go('/patient/:id');
````

4.  Or add templates directly to your application...

````html
<!-- basic upsert/list pattern -->
{{> patientsUpsertPage }}
{{> patientsListPage }}

<!-- additional views -->
{{> patientImageGridPage }}
{{> patientImageGridPage }}
{{> patientsTablePage }}
````


===============================
#### Cloning/Forking  

While ActivePatient works fine if there's a single schema that you want to create some basic CRUDL user interface for; it's quite likely that you'll want to have multiple schemas, or simply want to modify the default templates somehow.  

The recommended approach for using ActivePatient is to clone it into your application's ``/packages`` directory, and to then refactor all the references of ``Patient`` to the name of whatever you're modeling.  You'll want to be sure to rename both the capitalized and non-capitalized versions.  Back up your files before doing this refactor!    

```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-patient
cd clinical-active-patient
find . -tyope f -print0 | xargs -0 sed -i 's/Patient/Foo/g'
find . -tyope f -print0 | xargs -0 sed -i 's/patient/foo/g'
```

Alternatively, you may find the StarryNight commands useful...
```bash
cd myapp/packages
git clone http://github.com/clinical-meteor/clinical-active-patient
cd clinical-active-patient
starrynight rename --from 'Patient' --to 'Foo' --root
starrynight rename --from 'patient' --to 'foo' --root
starrynight rename --from 'patient' --to 'foo' --root
starrynight rename --from 'patient' --to 'foo' --root
```


===============================
#### Licensing  

MIT.  Use as you will.

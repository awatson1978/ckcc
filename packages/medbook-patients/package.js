Package.describe({
  name: 'medbook:patients',
  version: '1.0.13',
  summary: 'Patients functionality for the ClinicalFramework; provides an ActiveRecord pattern tailored to Patients.',
  git: 'http://github.com/clinical-meteor/clinical-patients/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');

  api.use('aldeed:simple-schema@1.3.3');
  api.use('grove:less@0.1.1');
  
  api.use('clinical:schema-hydrator');
  api.use('clinical:glass-ui@1.3.1');
  api.use('clinical:router@2.0.17');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    'lib/ActivePatient.js',
    'lib/Patients.js'
  ]);

  api.addFiles([
    'components/helpers.js',

    'components/patientsListPage/patientsListPage.html',
    'components/patientsListPage/patientsListPage.js',
    'components/patientsListPage/patientsListPage.less',

    'components/patientsImageGridPage/patientsImageGridPage.html',
    'components/patientsImageGridPage/patientsImageGridPage.js',
    'components/patientsImageGridPage/patientsImageGridPage.less',

    'components/patientsTablePage/patientsTablePage.html',
    'components/patientsTablePage/patientsTablePage.js',
    'components/patientsTablePage/patientsTablePage.less',

    'components/patientUpsertPage/patientUpsertPage.html',
    'components/patientUpsertPage/patientUpsertPage.js',
    'components/patientUpsertPage/patientUpsertPage.less',

    'components/patientsPicklistModal/patientsPicklistModal.html',
    'components/patientsPicklistModal/patientsPicklistModal.js',
    'components/patientsPicklistModal/patientsPicklistModal.less',

    'components/patientsActionButtons/patientsActionButtons.html',
    'components/patientsActionButtons/patientsActionButtons.js',
    'components/patientsActionButtons/patientsActionButtons.less'

  ], ['client']);


  api.addFiles(['server/publications.js'], 'server');

  // api.export("ActivePatient");
  api.export("Patients");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('medbook:patients');
  api.use('clinical:verification');

  api.addFiles('tests/active-patient.js');
});

Package.describe({
  name: 'medbook:subjects',
  version: '1.0.13',
  summary: 'ActiveSubject component for the ClinicalFramework; provides CRUD pattern using Autoform.',
  git: 'http://github.com/UCSC-MedBook/medbook-active-subject/',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');

  api.use('clinical:schema-hydrator');

  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');

  api.use('photonic:active-record-core@0.0.2');
  api.use('photonic:active-record-header@0.0.4');
  api.use('photonic:active-record-footer@0.0.4');

  api.use('clinical:router@2.0.13');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    'lib/Subjects.js'
  ]);

  api.addFiles([
    'components/helpers.js',

    'components/subjectsListPage/subjectsListPage.html',
    'components/subjectsListPage/subjectsListPage.js',
    'components/subjectsListPage/subjectsListPage.less',

    'components/subjectsTablePage/subjectsTablePage.html',
    'components/subjectsTablePage/subjectsTablePage.js',
    'components/subjectsTablePage/subjectsTablePage.less',

    'components/subjectUpsertPage/subjectUpsertPage.html',
    'components/subjectUpsertPage/subjectUpsertPage.js',
    'components/subjectUpsertPage/subjectUpsertPage.less',
  ], ['client']);


  api.addFiles(['server/publications.js'], 'server');

  api.export("Subjects");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('clinical:active-subject');
  api.use('clinical:verification');

  api.addFiles('tests/active-subject.js');
});

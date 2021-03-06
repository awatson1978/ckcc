Package.describe({
  name: 'medbook:studies',
  version: '1.0.13',
  summary: 'Studies functionality for the ClinicalFramework; provides an ActiveRecord pattern tailored to Studies.',
  git: 'http://github.com/clinical-meteor/clinical-studies/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');

  api.use('clinical:schema-hydrator');

  api.use('grove:less@0.1.1');

  api.use('aldeed:simple-schema@1.3.3');

  api.use('clinical:glass-ui@1.3.1');
  api.use('clinical:router@2.0.17');


  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    'lib/ActiveStudy.js',
    'lib/Studies.js'
  ]);

  api.addFiles([
    'components/helpers.js',

    'components/studiesListPage/studiesListPage.html',
    'components/studiesListPage/studiesListPage.js',
    'components/studiesListPage/studiesListPage.less',

    'components/studiesImageGridPage/studiesImageGridPage.html',
    'components/studiesImageGridPage/studiesImageGridPage.js',
    'components/studiesImageGridPage/studiesImageGridPage.less',

    'components/studiesTablePage/studiesTablePage.html',
    'components/studiesTablePage/studiesTablePage.js',
    'components/studiesTablePage/studiesTablePage.less',

    'components/studyUpsertPage/studyUpsertPage.html',
    'components/studyUpsertPage/studyUpsertPage.js',
    'components/studyUpsertPage/studyUpsertPage.less',

    'components/studiesPicklistModal/studiesPicklistModal.html',
    'components/studiesPicklistModal/studiesPicklistModal.js',
    'components/studiesPicklistModal/studiesPicklistModal.less',

    'components/studiesActionButtons/studiesActionButtons.html',
    'components/studiesActionButtons/studiesActionButtons.js',
    'components/studiesActionButtons/studiesActionButtons.less'

  ], ['client']);


  api.addFiles(['server/publications.js'], 'server');

  // api.export("ActiveStudy");
  api.export("Studies");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('medbook:studies');
  api.use('clinical:verification');

  api.addFiles('tests/active-study.js');
});

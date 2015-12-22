Package.describe({
  name: 'medbook:samples',
  version: '1.0.13',
  summary: 'Samples functionality for the ClinicalFramework; provides an ActiveRecord pattern tailored to Samples.',
  git: 'http://github.com/clinical-meteor/clinical-samples/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');

  api.use('clinical:schema-hydrator');
  api.use('aldeed:simple-schema@1.3.3');

  api.use('grove:less@0.1.1');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.use('clinical:glass-ui@1.3.1');
  api.use('clinical:router@2.0.17');

  api.addFiles([
    'lib/ActiveSample.js',
    'lib/Samples.js'
  ]);

  api.addFiles([
    'components/helpers.js',

    'components/samplesListPage/samplesListPage.html',
    'components/samplesListPage/samplesListPage.js',
    'components/samplesListPage/samplesListPage.less',

    'components/samplesImageGridPage/samplesImageGridPage.html',
    'components/samplesImageGridPage/samplesImageGridPage.js',
    'components/samplesImageGridPage/samplesImageGridPage.less',

    'components/samplesTablePage/samplesTablePage.html',
    'components/samplesTablePage/samplesTablePage.js',
    'components/samplesTablePage/samplesTablePage.less',

    'components/sampleUpsertPage/sampleUpsertPage.html',
    'components/sampleUpsertPage/sampleUpsertPage.js',
    'components/sampleUpsertPage/sampleUpsertPage.less',

    'components/samplesPicklistModal/samplesPicklistModal.html',
    'components/samplesPicklistModal/samplesPicklistModal.js',
    'components/samplesPicklistModal/samplesPicklistModal.less',

    'components/samplesActionButtons/samplesActionButtons.html',
    'components/samplesActionButtons/samplesActionButtons.js',
    'components/samplesActionButtons/samplesActionButtons.less'

  ], ['client']);


  api.addFiles(['server/publications.js'], 'server');

  // api.export("ActiveSample");
  api.export("Samples");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('medbook:samples');
  api.use('clinical:verification');

  api.addFiles('tests/active-sample.js');
});

Package.describe({
  name: 'medbook:metadata',
  version: '1.0.8',
  summary: 'ActiveQuestionnaire component for the ClinicalFramework; provides CRUD pattern using Autoform.',
  git: 'http://github.com/clinical-meteor/active-metadata',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');

  api.use('photonic:active-record-core@0.0.2');
  api.use('photonic:active-record-header@0.0.4');
  api.use('photonic:active-record-footer@0.0.4');

  api.use('clinical:router@2.0.13');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    'components/metadataListPage/metadataListPage.html',
    'components/metadataListPage/metadataListPage.js',
    'components/metadataListPage/metadataListPage.less',

    'components/metadataTablePage/metadataTablePage.html',
    'components/metadataTablePage/metadataTablePage.js',
    'components/metadataTablePage/metadataTablePage.less',

    'components/metadataUpsertPage/metadataUpsertPage.html',
    'components/metadataUpsertPage/metadataUpsertPage.js',
    'components/metadataUpsertPage/metadataUpsertPage.less',

    'components/metadataPicklistModal/metadataPicklistModal.html',
    'components/metadataPicklistModal/metadataPicklistModal.js',
    'components/metadataPicklistModal/metadataPicklistModal.less',

    'components/metadataActionButtons/metadataActionButtons.html',
    'components/metadataActionButtons/metadataActionButtons.js',
    'components/metadataActionButtons/metadataActionButtons.less',

  ], ['client']);

  api.addFiles([
    'lib/Metadata.js'

  ], ['client', 'server']);

  api.addFiles(['server/publications.js'], 'server');

  api.export("Metadata");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('medbook:metadata-crud');
  api.use('clinical:verification');

  api.addFiles('tests/active-metadata.js');
});

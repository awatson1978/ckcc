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

  api.use('clinical:glass-ui@1.3.1');
  api.use('clinical:router@2.0.17');

  api.use('awsp:handsontable@0.11.0');

  api.use('clinical:schema-hydrator');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles('lib/Metadata.js');

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

    'components/metadataSpreadsheetPage/metadataSpreadsheetPage.html',
    'components/metadataSpreadsheetPage/metadataSpreadsheetPage.js',
    'components/metadataSpreadsheetPage/metadataSpreadsheetPage.less'

  ], ['client']);

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

Package.describe({
  name: 'glass:active-record',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('iron:router');
  api.use('less');

  api.use('glass:active-record-core');
  api.use('glass:active-record-edit');
  api.use('glass:active-record-imagegrid');
  api.use('glass:active-record-list');
  api.use('glass:active-record-new');
  api.use('glass:active-record-preview');
  api.use('glass:active-record-table');
  api.use('glass:active-record-upsert');

  api.imply('aldeed:simple-schema');
  api.imply('aldeed:collection2');

  api.addFiles('active-record.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('glass:active-record');
  api.addFiles('active-record-tests.js');
});

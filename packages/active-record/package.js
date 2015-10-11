Package.describe({
  name: 'clinical:active-record',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'ActiveRecord component for the ClinicalFramework; provides CRUD pattern using Autoform.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/active-record/packages/active-record',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');
  //api.use('session');

  api.use('photonic:active-record-core@0.0.2');
  api.use('photonic:active-record-header@0.0.4');
  api.use('photonic:active-record-footer@0.0.4');

  // api.use('photonic:active-record-imagegrid@0.0.1');
  // api.use('photonic:active-record-list@0.0.1');
  //api.use('photonic:active-record-preview@0.0.1');
  // api.use('photonic:active-record-table@0.0.1');
  //api.use('photonic:active-form-upsert@0.0.1');

  // api.use('photonic:active-record-edit@0.0.1');
  // api.use('photonic:active-record-new@0.0.1');

  api.imply('aldeed:simple-schema@1.3.3');
  api.imply('aldeed:collection2@2.3.3');

  api.addFiles([
    'components/recordsListPage/recordsListPage.html',
    'components/recordsListPage/recordsListPage.js',
    'components/recordsListPage/recordsListPage.less',

    'components/recordImageGridPage/recordImageGridPage.html',
    'components/recordImageGridPage/recordImageGridPage.js',
    'components/recordImageGridPage/recordImageGridPage.less',
    //
    // 'components/recordPreviewPage/recordPreviewPage.html',
    // 'components/recordPreviewPage/recordPreviewPage.js',
    // 'components/recordPreviewPage/recordPreviewPage.less',
    //
    'components/recordsTablePage/recordsTablePage.html',
    'components/recordsTablePage/recordsTablePage.js',
    'components/recordsTablePage/recordsTablePage.less',
    //
    'components/recordUpsertPage/recordUpsertPage.html',
    'components/recordUpsertPage/recordUpsertPage.js',
    'components/recordUpsertPage/recordUpsertPage.less',
  ], ['client']);

  api.addFiles([
    'lib/ActiveRecord.js',
    'lib/Foo.js'

  ], ['client', 'server']);

  api.addFiles(['server/publications.js'], 'server');

  //api.addFiles('active-record.js');

  api.export("ActiveRecord");
  api.export("Foo");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('clinical:active-record');
  api.use('clinical:verification');

  api.addFiles('tests/active-record.js');
});

Package.describe({
  name: 'medbook:active-record',
  version: '1.1.7',
  summary: 'ActiveRecord component for the ClinicalFramework; provides CRUD pattern using Autoform.',
  git: 'http://github.com/UCSC-MedBook/medbook-active-record/',
  documentation: 'README.md'
});

// Npm.depends({
//   "oauth2orize":"1.0.1"
// });

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('clinical:glass-ui@1.3.0');

  api.use('awsp:handsontable@0.11.0');
  api.use('clinical:autoform@6.7.3');

  api.use('clinical:router@2.0.17');

  api.addFiles([
    'lib/ActiveRecord.js',
    'lib/Records.js'
  ]);

  api.addFiles([
    'components/helpers.js',

    'components/recordsListPage/recordsListPage.html',
    'components/recordsListPage/recordsListPage.js',
    'components/recordsListPage/recordsListPage.less',

    'components/recordImageGridPage/recordImageGridPage.html',
    'components/recordImageGridPage/recordImageGridPage.js',
    'components/recordImageGridPage/recordImageGridPage.less',

    'components/recordsTablePage/recordsTablePage.html',
    'components/recordsTablePage/recordsTablePage.js',
    'components/recordsTablePage/recordsTablePage.less',

    'components/recordsSpreadsheetPage/recordsSpreadsheetPage.html',
    'components/recordsSpreadsheetPage/recordsSpreadsheetPage.js',
    'components/recordsSpreadsheetPage/recordsSpreadsheetPage.less',

    'components/recordActionButtons/recordActionButtons.html',
    'components/recordActionButtons/recordActionButtons.js',
    'components/recordActionButtons/recordActionButtons.less',

    'components/recordUpsertPage/recordUpsertPage.html',
    'components/recordUpsertPage/recordUpsertPage.js',
    'components/recordUpsertPage/recordUpsertPage.less',

    'components/formSelectPanel/formSelectPanel.html',
    'components/formSelectPanel/formSelectPanel.js',
    'components/formSelectPanel/formSelectPanel.less'

  ], ['client']);


  api.addFiles(['server/publications.js'], 'server');

  api.export("ActiveRecord");
  api.export("Records");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('meteor-platform');
  api.use('session');

  api.use('clinical:active-record');
  api.use('clinical:verification');

  api.addFiles('tests/active-record.js');
});

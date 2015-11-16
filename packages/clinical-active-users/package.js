Package.describe({
  name:'clinical:active-users',
  version: '0.0.1',
  summary: 'ActiveUsers package with user tables, thumbnail page, basic profiles, etc.',
  git: 'https://github.com/clinical-meteor/clinical-active-users',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('grove:less@0.1.1');

  api.use('clinical:router@2.0.13');

  api.addFiles('users-core.js', 'client');

  api.addFiles('components/userUpsertPage/userUpsertPage.html', ['client']);
  api.addFiles('components/userUpsertPage/userUpsertPage.js', ['client']);
  api.addFiles('components/userUpsertPage/userUpsertPage.less', ['client']);

  api.addFiles('components/usersTablePage/usersTablePage.html', ['client']);
  api.addFiles('components/usersTablePage/usersTablePage.js', ['client']);
  api.addFiles('components/usersTablePage/usersTablePage.less', ['client']);
  api.addFiles('components/usersTablePage/jquery.tablesorter.js', ['client']);

  api.addFiles('components/userPreviewPage/userPreviewPage.html', ['client']);
  api.addFiles('components/userPreviewPage/userPreviewPage.js', ['client']);
  api.addFiles('components/userPreviewPage/userPreviewPage.less', ['client']);

  api.addFiles('components/userImageGridPage/userImageGridPage.html', ['client']);
  api.addFiles('components/userImageGridPage/userImageGridPage.js', ['client']);
  api.addFiles('components/userImageGridPage/userImageGridPage.less', ['client']);

  api.addFiles('components/userEditPage/userEditPage.html', ['client']);
  api.addFiles('components/userEditPage/userEditPage.js', ['client']);
  api.addFiles('components/userEditPage/userEditPage.less', ['client']);

  api.export('userUpsertPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('clinical:active-users');

  api.addFiles('tests/users-core-tests.js');
  api.addFiles('tests/users-edit-tests.js');
  api.addFiles('tests/users-image-grid-tests.js');
  api.addFiles('tests/users-list-tests.js');
  api.addFiles('tests/users-preview-tests.js');
  api.addFiles('tests/users-table-tests.js');
  api.addFiles('tests/users-upsert-tests.js');
});

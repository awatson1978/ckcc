Package.describe({
  name:'glass:active-record-new',
  version: '0.0.1',
  sumary: '',
  git: '',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');
  api.use('aldeed:autoform@5.3.2');

  api.use('meteor-platform');
  api.use('iron:router');
  api.use('less');

  api.addFiles('components/recordNewPage/recordNewPage.html', ['client']);
  api.addFiles('components/recordNewPage/recordNewPage.js', ['client']);
  api.addFiles('components/recordNewPage/recordNewPage.less', ['client']);

  api.export('recordNewPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('glass:active-record-new');
  api.addFiles('active-record-new-tests.js');
});

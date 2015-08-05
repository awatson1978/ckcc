Package.describe({
  name:'glass:active-record-preview',
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

  api.addFiles('components/recordPreviewPage/recordPreviewPage.html', ['client']);
  api.addFiles('components/recordPreviewPage/recordPreviewPage.js', ['client']);
  api.addFiles('components/recordPreviewPage/recordPreviewPage.less', ['client']);

  api.export('recordPreviewPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('glass:active-record-preview');
  api.addFiles('active-record-preview-tests.js');
});

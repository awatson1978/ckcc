Package.describe({
  name:'photonic:active-record-header',
  version: '0.0.5',
  summary: 'Photonic::ActiveRecord::recordHeader',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-header',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');

  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');

  api.use('clinical:router@2.0.13');

  api.addFiles('components/recordHeader/recordHeader.html', ['client']);
  api.addFiles('components/recordHeader/recordHeader.js', ['client']);
  api.addFiles('components/recordHeader/recordHeader.less', ['client']);

  api.export('recordHeader');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-header');
  api.use('practicalmeteor:mocha');

  api.addFiles('active-record-header-tests.js');
});

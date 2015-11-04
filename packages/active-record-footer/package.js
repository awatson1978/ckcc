Package.describe({
  name:'photonic:active-record-footer',
  version: '0.0.5',
  summary: 'Photonic::ActiveRecord::recordFooter',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-footer',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');

  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');

  api.use('clinical:router@2.0.13');

  api.addFiles('components/recordFooter/recordFooter.html', ['client']);
  api.addFiles('components/recordFooter/recordFooter.js', ['client']);
  api.addFiles('components/recordFooter/recordFooter.less', ['client']);

  api.export('recordFooter');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-footer');
  api.use('practicalmeteor:mocha');

  api.addFiles('active-record-footer-tests.js');
});

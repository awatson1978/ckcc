Package.describe({
  name:'photonic:active-record-footer',
  version: '0.0.4',
  summary: 'Photonic::ActiveRecord::recordFooter',
  git: 'http://github.com/awatson1978/active-record/packages/active-record-footer',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('grove:less@0.1.1');
  api.use('photonic:glass-ui@0.2.4');

  api.addFiles('components/recordFooter/recordFooter.html', ['client']);
  api.addFiles('components/recordFooter/recordFooter.js', ['client']);
  api.addFiles('components/recordFooter/recordFooter.less', ['client']);

  api.export('recordFooter');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-record-footer');
  api.addFiles('active-record-footer-tests.js');
});

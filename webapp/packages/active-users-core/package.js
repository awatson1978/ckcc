Package.describe({
  name: 'photonic:active-users-core',
  version: '0.0.2',
  summary: 'ActiveUsers::Core',
  git: 'https://github.com/awatson1978/photonic/tree/master/packages/active-users-core',
  documentation: 'README.md'
});

Package.onUse( function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');

  api.addFiles('users-core.js', 'client');
});

Package.onTest( function (api) {
  api.use('tinytest');
  api.use('clinical:verification');

  api.use('photonic:active-users-core');
  api.addFiles('users-core-tests.js');
});

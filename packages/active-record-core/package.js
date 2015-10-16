Package.describe({
  name: 'photonic:active-record-core',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Photonic::ActiveRecord::Core',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/awatson1978/active-record/packages/active-record-core',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');
  api.use('aldeed:autoform@5.3.2');
  api.use('grove:less@0.1.1');

  api.imply('aldeed:simple-schema');
  api.imply('aldeed:collection2');

  api.export("Autoform");

  api.addFiles('active-record-core.js');
  api.addFiles('active-record-core.less');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('photonic:active-record-core');
  api.addFiles('active-record-core-tests.js');
});

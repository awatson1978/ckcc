Package.describe({
  name: 'clinical:json2json',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'JSON transformation library for data pipelines using the json2json library.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awatson1978/clinical-json2json',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "node-json2json": "0.0.3"
});

Package.onUse( function (api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('json2json.js', 'server');
  api.export('json2json');
});

Package.onTest( function (api) {
  api.use('tinytest');
  api.use('clinical:json2json');
  api.addFiles('tests/json2json.js');
});

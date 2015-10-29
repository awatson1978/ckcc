Package.describe({
  name: 'clinical:form-builder',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('jquery');
  api.use('session@1.1.0');
  api.use('iron:router@1.0.7');
  api.use('grove:less@0.1.1');

  api.addFiles('client/jquery-ui-sortable.js', 'client');

  api.addFiles('lib/Builder.js');
  api.addFiles('lib/FormBuilder.js');
  api.addFiles('lib/WestPanel.js', 'client');

  api.addFiles('client/components/builderPage/builderPage.html', 'client');
  api.addFiles('client/components/builderPage/builderPage.js', 'client');
  api.addFiles('client/components/builderPage/builderPage.less', 'client');

  api.addFiles('client/components/builderPanel/builderPanel.html', 'client');
  api.addFiles('client/components/builderPanel/builderPanel.js', 'client');
  api.addFiles('client/components/builderPanel/builderPanel.less', 'client');

  api.addFiles('client/components/formBlock/formBlock.html', 'client');
  api.addFiles('client/components/formBlock/formBlock.js', 'client');
  api.addFiles('client/components/formBlock/formBlock.less', 'client');

  api.export('WestPanel');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:form-builder');
  api.addFiles('tests/form-builder-tests.js');
});

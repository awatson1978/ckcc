Package.describe({
  name: 'clinical:form-builder',
  version: '0.0.1',
  summary: 'Form builder that creates storable dehyrated schemas that can be rehydrated and used with Autoforms.',
  git: 'https://github.com/clinical-meteor/clinical-form-builder',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('jquery');
  api.use('session@1.1.0');
  api.use('grove:less@0.1.1');

  api.use('clinical:router@2.0.13');

  api.addFiles('client/jquery-ui-sortable.js', 'client');
  api.addFiles('client/helpers.js', 'client');

  api.addFiles('lib/SimpleRationalRanks.js');
  api.addFiles('lib/Items.js');
  api.addFiles('lib/FormBuilder.js');
  api.addFiles('lib/WestPanel.js', 'client');

  api.addFiles('client/components/formBuilderPanel/formBuilderPanel.html', 'client');
  api.addFiles('client/components/formBuilderPanel/formBuilderPanel.js', 'client');
  api.addFiles('client/components/formBuilderPanel/formBuilderPanel.less', 'client');

  api.addFiles('client/components/builderActionButtons/builderActionButtons.html', 'client');
  api.addFiles('client/components/builderActionButtons/builderActionButtons.js', 'client');
  api.addFiles('client/components/builderActionButtons/builderActionButtons.less', 'client');

  api.addFiles('client/components/builderPage/builderPage.html', 'client');
  api.addFiles('client/components/builderPage/builderPage.js', 'client');
  api.addFiles('client/components/builderPage/builderPage.less', 'client');

  api.export('WestPanel');
  api.export('Items');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:form-builder');
  api.addFiles('tests/form-builder-tests.js');
});

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
  api.use('iron:router@1.0.7');
  api.use('grove:less@0.1.1');

  api.use('jquery');


  api.addFiles('client/jquery-ui-sortable.js');

  api.addFiles('lib/Builder.js');
  api.addFiles('lib/FormBuilder.js');

  api.addFiles('client/components/builderPage/builderPage.html');
  api.addFiles('client/components/builderPage/builderPage.js');
  api.addFiles('client/components/builderPage/builderPage.less');

  api.addFiles('client/components/formBlock/formBlock.html');
  api.addFiles('client/components/formBlock/formBlock.js');


});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:form-builder');
  api.addFiles('tests/form-builder-tests.js');
});

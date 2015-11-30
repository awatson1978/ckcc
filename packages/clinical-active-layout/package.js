Package.describe({
  name: 'clinical:active-layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Layout templates with keybindings and animations.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/clinical-meteor/clinical-active-layout',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('meteor-platform');
  api.use('grove:less@0.1.1');

  api.use('clinical:router@2.0.13');

  api.addFiles('client/ui.helpers.js', 'client');
  api.addFiles('client/cardDocks.less', 'client');

  api.addFiles('client/layouts/appLayout/appLayout.html', 'client');
  api.addFiles('client/layouts/appLayout/appLayout.js', 'client');
  api.addFiles('client/layouts/appLayout/appLayout.less', 'client');

  api.addFiles('client/components/errorPanel/errorPanel.html', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.js', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.less', 'client');

  // api.addFiles('client/components/navbarFooter/navbarFooter.html', 'client');
  api.addFiles('client/components/navbarFooter/navbarFooter.js', 'client');
  api.addFiles('client/components/navbarFooter/navbarFooter.less', 'client');

  api.addFiles('client/components/navbarHeader/navbarHeader.html', 'client');
  api.addFiles('client/components/navbarHeader/navbarHeader.js', 'client');
  api.addFiles('client/components/navbarHeader/navbarHeader.less', 'client');

  api.export('appLayout');
  api.export('navbarHeader');
  api.export('navbarFooter');
  api.export('errorPanel');

});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:active-layout');
  api.addFiles('active-layout-tests.js');
});

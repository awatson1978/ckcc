Package.describe({
  name: 'clinical:active-layout',
  version: '0.3.8',
  summary: 'Layout templates with keybindings and animations.',
  git: 'http://github.com/clinical-meteor/clinical-active-layout',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('templating');
  api.use('session');

  api.use('grove:less@0.1.1');
  api.use('clinical:router@2.0.13');

  api.use('clinical:extended-api@2.1.0');
  api.use('clinical:user-model@1.3.1');
  api.use('clinical:keybindings@1.2.0');
  api.use('clinical:overlays@2.1.8');

  api.imply('clinical:router');
  api.imply('clinical:extended-api');
  api.imply('clinical:keybindings');
  api.imply('clinical:overlays');
  api.imply('clinical:user-model');

  api.addFiles('client/template.helpers.js', 'client');
  api.addFiles('client/cardDocks.less', 'client');
  api.addFiles('client/objects/Layout.Header.js', 'client');

  api.addFiles('client/layouts/appLayout/appLayout.html', 'client');

  api.addFiles('client/layouts/appLayout/navbarFooter.js', 'client');
  api.addFiles('client/layouts/appLayout/navbarFooter.less', 'client');
  api.addFiles('client/layouts/appLayout/navbarHeader.js', 'client');
  api.addFiles('client/layouts/appLayout/navbarHeader.less', 'client');

  api.addFiles('client/layouts/appLayout/appLayout.js', 'client');
  api.addFiles('client/layouts/appLayout/appLayout.less', 'client');

  api.addFiles('client/components/errorPanel/errorPanel.html', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.js', 'client');
  api.addFiles('client/components/errorPanel/errorPanel.less', 'client');

  api.export('appLayout');
  api.export('errorPanel');
  api.export('keybindingsModal');

  api.export('Header');

});


Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:active-layout');
  api.addFiles('active-layout-tests.js');
});

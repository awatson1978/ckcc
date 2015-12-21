

// since the navbarFooter can't support {{> yield }} blocks
// we need to move the footer into the appLayout
// so we're attaching those events and footers to the appLayout Template
// but storing them here for organizational sake

Template.appLayout.helpers({
  showHelp: function (){
    var headerConfig = Session.get('HeaderConfig');
    if (headerConfig && (typeof headerConfig.showHelp === "boolean")) {
      return headerConfig.showHelp;
    } else {
      return true;
    }
  },
  getFooterHeight: function (){
    console.log('getFooterHeight', Session.get('showNavbars'));
    if (Session.get('showNavbars')) {
      return "height: 50px;";
    } else {
      return "height: 0px;";
    }
  }
});

// most of these items need to be refactored away into actionBarHelperBlocks

Template.appLayout.events({
  'click #saveFormButton': function (){
    $('#saveRecordButton').click();
    //$('input[type="submit"]').click();
  },
  'click #keybindingsBtn': function (){
    Session.toggle('showReactiveOverlay');
    Session.toggle('show_keybindings');
  },
  'click #overlayBtn': function (){
    Session.toggle('showReactiveOverlay');
  },
  "click #homeBtn": function (event, template) {
    Router.go('/');
  },
  "click #listBtn": function (event, template) {
    Router.go('/list/records');
  },
  "click #imageGridBtn": function (event, template) {
    Router.go('/grid/records');
  },
  "click #tableBtn": function (event, template) {
    Router.go('/table/records');
  },
  "click #initializeBtn": function (event, template) {
    console.log('initializing database');
    Meteor.call("initializeDefaultCollaborations");
  },
  "click #dropBtn": function (event, template) {
    console.log('dropping database');
    Meteor.call('dropDatabase');
  }
});

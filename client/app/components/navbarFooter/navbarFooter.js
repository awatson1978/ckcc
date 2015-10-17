


Template.navbarFooter.helpers({
  isVisible: function (){
    if (Session.get('showNavbars')) {
      return "height: 50px;";
    } else {
      return "height: 0px;";
    }
  }
});

Template.navbarFooter.events({
  'click #saveFormButton': function (){
    $('#upsertCollaborationButton').click();
  },
  'click #collaborationPickListBtn': function (){
    Session.toggle('show_reactive_overlay');
    Session.toggle('showCollaborationPicklist');
  },
  'click #studyPickListBtn': function (){
    Session.toggle('show_reactive_overlay');
    Session.toggle('show_study_picklist');
  },
  'click #userPickListBtn': function (){
    Session.toggle('show_reactive_overlay');
    Session.toggle('show_users_picklist');
  },
  'click #keybindingsBtn': function (){
    Session.toggle('show_reactive_overlay');
    Session.toggle('show_keybindings');
  },
  'click #overlayBtn': function (){
    Session.toggle('show_reactive_overlay');
  },
  'click #addCollaborationButton': function (){
    Router.go('/new/collaboration');
  },
  'click #collaborationsBtn': function (){
    Router.go('/grid/collaborations');
  },
  "click #homeBtn": function (event, template) {
    Router.go('/');
  },
  "click #listBtn": function (event, template) {
    Router.go('/list/foos');
  },
  "click #imageGridBtn": function (event, template) {
    Router.go('/grid/foos');
  },
  "click #tableBtn": function (event, template) {
    Router.go('/table/foos');
  },
  "click #newQuestionnaireBtn": function (event, template) {
    Router.go('/build/questionnaire');
  },
  "click #initializeBtn": function (event, template) {
    console.log('initializing database');
    Meteor.call("initializeDatabase");
  },
  "click #dropBtn": function (event, template) {
    console.log('dropping database');
    Meteor.call('dropDatabase');
  },
  // 'click #scrollTopBtn': function (event, template) {
  //   $('html, body').animate({
  //       scrollTop: 0
  //   }, 500);
  // },
  // 'click #scrollBottomBtn': function (event, template) {
  //   $('html, body').animate({
  //       scrollTop: $('.recordFooter').offset().top
  //   }, 500);
  // }
});

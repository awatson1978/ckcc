




Template.navbarFooter.events({

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
  'click #newCollaborationBtn': function (){
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
  "click #newBtn": function (event, template) {
    Router.go('/insert/foo');
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

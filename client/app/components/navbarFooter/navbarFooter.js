

Session.setDefault("show_background", false);
Session.setDefault("is_opaque", false);


Template.navbarFooter.events({
  'click #backgroundBtn': function (){
    Session.toggle('show_background');
  },
  'click #opacityBtn': function (){
    if(Session.get('is_opaque')){
      Session.set("glassOpacity", 0.9);
      Session.set('is_opaque', false);
    } else {
      Session.set("glassOpacity", 1);
      Session.set('is_opaque', true);
    }
  },
  'click #keybindingsBtn': function (){
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



Template.navbarFooter.helpers({
  rendered: function () {

  }
});

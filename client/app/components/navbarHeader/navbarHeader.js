Session.setDefault("show_background", false);
Session.setDefault("is_opaque", false);





Template.navbarHeader.events({
  'click #logoutLink': function () {
    Meteor.logout();
    Router.go('/entrySignIn');
  }
});


Template.navbarHeader.helpers({
  isVisible: function (){
    if (Session.get('showNavbars')) {
      return "height: 50px; top: 0px";
    } else {
      return "height: 0px; top: -50px;";
    }
  },
  getTitleText: function () {
    var headerConfig = Session.get('HeaderConfig');
    if (headerConfig && headerConfig.text) {
      return headerConfig.text.title;
    } else {
      return "---";
    }
  },
  getUserName: function () {
    if (Meteor.userId()) {
      return User.getName();
    } else {
      return "LogIn";
    }
  },
  getUsernameLink: function () {
    if (Meteor.userId()) {
      return "";
    } else {
      return "/entrySignIn";
    }
  },
  status: function () {
    return Meteor.status().status;
    return JSON.stringify(Meteor.status());
  }
});

Session.setDefault("show_background", false);
Session.setDefault("is_opaque", false);





Template.navbarHeader.events({
  'click #logoutLink': function () {
    Meteor.logout();
    Router.go('/entrySignIn');
  }
});


Template.navbarHeader.helpers({
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

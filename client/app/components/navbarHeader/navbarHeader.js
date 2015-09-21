Template.navbarHeader.events({
  'click #logoutLink': function (){
    Meteor.logout();
    Router.go('/entrySignIn');
  }
});


Template.navbarHeader.helpers({
  getUserName: function (){
    if (Meteor.userId()){
      return User.getName();
    } else {
      return "LogIn";
    }
  },
  getUsernameLink: function (){
    if (Meteor.userId()){
      return "";
    } else {
      return "/entrySignIn";
    }
  }
});

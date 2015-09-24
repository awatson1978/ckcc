
Session.setDefault('accountCardOpen', false);


Template.navbarHeader.events({
  'click #logoutLink': function (){
    Meteor.logout();
    Router.go('/entrySignIn');
  },
  'click #accountCardHandle': function (){
    Session.toggle('accountCardOpen');
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
  },
  status: function (){
    return Meteor.status().status;
    return JSON.stringify(Meteor.status());
  },
  accountCardStyle: function (){
    return "background: linear-gradient(45deg, transparent 16px, rgba(255,255,255," + Session.get("glassOpacity") + ") 0) bottom right;";
  },
  cardVisibility: function (){
    if (Session.get("accountCardOpen")) {
      return "right: 0px;";
    } else {
      return "right: -310px;";
    }
  }
});

Template.registerHelper('isLoggedIn', function() {
  if(Meteor.userId()){
    return true;
  }else{
    return false;
  }
});
Template.registerHelper('fullName', function() {
  return User.fullName();
});

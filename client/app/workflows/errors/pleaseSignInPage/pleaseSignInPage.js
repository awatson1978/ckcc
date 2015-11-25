
Router.route('/please-sign-in', {
  template: "pleaseSignInPage",
  name: "pleaseSignInRoute"
});

Template.pleaseSignInPage.events({
  'click #pleaseSignInMessage' : function (){
    Router.go('/');
  }
});

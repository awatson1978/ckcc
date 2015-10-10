Meteor.startup(function (){
  if (Meteor.isClient){
    // AccountsEntry.config({
    // });
    ActiveEntry.configure({
      passwordSignupFields: 'EMAIL_ONLY',
      logo: {
        url: "/mini-circles.png",
        displayed: true
      },
      signIn: {
        displayFullName: true,
        destination: "/"
      },
      signUp: {
        destination: "/"
      },
      themeColors: {
        primary: ""
      }
    });
  };
});

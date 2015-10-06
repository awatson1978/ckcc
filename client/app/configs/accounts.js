if(Meteor.isClient){
  ActiveEntry.configure({
    logo: {
      url: "/mini-circles.png",
      displayed: true
    },
    signIn: {
      displayFullName: true,
      destination: "/list/foos"
    },
    signUp: {
      destination: "/table/users"
    },
    themeColors: {
      primary: ""
    }
  });
}

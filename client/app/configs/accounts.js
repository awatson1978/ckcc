if(Meteor.isClient){
  ActiveEntry.configure({
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
}

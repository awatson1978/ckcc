Header = {};

if (Meteor.isClient) {
  Session.setDefault('HeaderConfig', {
    classes: {
      header: "",
      title: "",
      links: ""
    },
    text: {
      title: "Sample Title",
      logout: "Logout"
    }
  });
}


Header.configure = function (configObject) {
  if (Meteor.isClient) {
    Session.set('HeaderConfig', configObject);
  }
};

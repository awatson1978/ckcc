Header = {};

if (Meteor.isClient) {
  Session.setDefault('HeaderConfig', {
    hasEntryControls: true,
    showHelp: true,
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


if (Meteor.isClient) {
  Header.configure = function (configObject) {
    Session.set('HeaderConfig', configObject);
  };
}

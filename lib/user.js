User = {
  fullName: function () {
    if (Meteor.userId()) {
      if (Meteor.user()) {
        if (Meteor.user().profile && Meteor.user().profile.fullName) {
          return Meteor.user().profile.fullName;
        } else {
          return Meteor.user().fullName;
        }
      } else {
        return "---";
      }
    } else {
      return "Sign In";
    }
  }
};

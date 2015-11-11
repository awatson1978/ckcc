Template.registerHelper("getNavWidth", function (argument) {
  var width = Session.get('appWidth') - (Session.get('westRule') + Session.get('eastRule'));
  if (Session.get('navIsFullscreen')) {
    return "left: 0px; width: 100%;";
  } else {
    return "left: " + Session.get('westRule') + "px; width: " + width + "px;";
  }
});

//---------------------------------------------------------
// RECORD ACTIVE PATTERN

Template.registerHelper('getStatusLabelText', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "active";
  } else {
    return "Inactive";
  }
});
Template.registerHelper('getStatusLabelColor', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "label-success";
  } else {
    return "label-default";
  }
});

Template.registerHelper('isAdmin', function () {
  // this is a small security hole that a user can exploit
  // by setting their role to something else
  // TODO:  set user role permissions on data publications so it doesnt matter if they spoof it or not

  if (Meteor.user()) {
    if (Meteor.user().profile) {
      // these comparisons should be soft comparisons with == rather than ===
      // because we're comparing strings to array values, and there is a cast involved
      if ((Meteor.user().profile.roles[0] === "Admin") || (Meteor.user().profile.roles[0] === "SysAdmin")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return null;
  }
});

Template.registerHelper('isRole', function (role) {
  if (Meteor.user()) {
    var profileRole = Meteor.user().profile.role;

    if (profileRole) {
      if (profileRole.indexOf(role) > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
Template.registerHelper('getCreatedAt', function () {
  return moment(this.createdAt).format("YYYY-MM-DD hh:mm a");
});

Template.registerHelper('isLoggedIn', function () {
  if (Meteor.userId()) {
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('getApprovalIcon', function () {
  if (this.approved) {
    return 'fa-check';
  } else {
    return 'fa-inbox';
  }
});

Template.registerHelper('getDeleteIcon', function () {
  if (!this.deleted) {
    return 'fa-trash-o';
  }
});

Template.registerHelper('getLockedIcon', function () {
  if (this.locked) {
    return 'fa-lock';
  } else {
    return 'fa-unlock';
  }
});

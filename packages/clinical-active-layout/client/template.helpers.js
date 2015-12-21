
/**
 * @summary Get the application title.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getAppTitle}}
 * @returns {String}
 * @version 1.2.3
 * @example
 * ```html
 * <h1>{{getAppTitle}}</h1>
 * ```
 */

Template.registerHelper("getAppTitle", function (argument){
  return ActiveLayout.getAppTitle();
});


/**
 * @summary Get the calculated width of the navbar.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getNavWidth}}
 * @returns {Style}
 * @version 1.2.3
 * @example
 * ```html
 * <nav style="{{getNavWidth}}"></nav>
 * ```
 */
Template.registerHelper("getNavWidth", function (argument) {
  return ActiveLayout.getPageWidth();
});

Template.registerHelper("getPageWidth", function (argument) {
  return ActiveLayout.getPageWidth();
});


/**
 * @summary Display the connection status of the Meteor app.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getConnection}}
 * @link The quick brown fox.
 * @returns {String}
 * @version 1.2.3
 * @example
 * ```html
 * <div>{{getStatusLabelText}}</div>
 * ```
 */


Template.registerHelper('getStatusLabelText', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "active";
  } else {
    return "Inactive";
  }
});

/**
 * @summary Returns a color, based on the connection status of the Meteor app.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getStatusLabelColor}}
 * @returns {String}
 * @todo: Upgrade from {String} to {Hex}
 * @version 1.2.3
 * @since 1.2.3
 * @see 'foo'
 * @example
 * ```html
 * <div>{{getStatusLabelText}}</div>
 * ```
 */
Template.registerHelper('getStatusLabelColor', function () {
  if (this.active || (this.profile && this.profile.active)) {
    return "label-success";
  } else {
    return "label-default";
  }
});


/**
 * @summary Checks the Roles package to see if user is an Admin.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isAdmin}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isAdmin}}<div><!-- privat content --></div>{{/if}}
 * ```
 */

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

/**
 * @summary Checks that the user has the specified type of role.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isRole}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isRole 'secretary'}}<div><!-- secretary content --></div>{{/if}}
 * ```
 */

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

/**
 * @summary Gets the timestamp of when the record was created, returned as a text string.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{getCreatedAt}}
 * @returns {DateString}
 * @version 1.2.3
 * @example
 * ```html
 * <div>{{getCreatedAt}}</div>
 * ```
 */
Template.registerHelper('getCreatedAt', function () {
  return moment(this.createdAt).format("YYYY-MM-DD hh:mm a");
});

/**
 * @summary Syntactic sugar for determining if the user is logged in.
 * @locus Client, Blaze Template
 * @memberOf ActiveLayout
 * @name {{isLoggedIn}}
 * @returns {Boolean}
 * @version 1.2.3
 * @example
 * ```html
 * {{#if isRole 'secretary'}}<div><!-- secretary content --></div>{{/if}}
 * ```
 */
Template.registerHelper('isLoggedIn', function () {
  if (Meteor.userId()) {
    return true;
  } else {
    return false;
  }
});

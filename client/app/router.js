

//--------------------------------------------------------------
// Security Sign In

Router.onBeforeAction(function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    this.redirect('/please-sign-in');
  } else {
    // BUG:  in firefox, if this console.log() isn't present, Meteor.user() won't hydrate in time
    // and it will think there are no collaborators, and bump the user to the security page
    // the console.log forces the function to wait while it's accessess the console
    // which gives Meteor.user() just enough time to hydrate
    console.log('Meteor.user()', Meteor.user());
    console.log('Meteor.user().isMemberOfAnyCollaboration()', Meteor.user().isMemberOfAnyCollaboration());
    if (Meteor.user() && Meteor.user().isMemberOfAnyCollaboration()) {
      this.next();
    } else if (Meteor.user() && Meteor.user().hasNoCollaborations()) {
      this.next();
    } else {
      this.redirect('/need-collaboration');
    }
  }
},{
  except: [
    'homeRoute',
    'dashboardRoute',

    //errors
    'browserNotSupportedRoute',
    'pageNotFoundRoute',
    'loadingPageRoute',
    'pleaseSignInRoute',
    'needCollaborationPriviledgesRoute',

    // static pages
    'appMenuRoute',
    'termsOfUseRoute',
    'marketingRoute',
    'aboutRoute',
    'landingRoute',
    'privacyRoute',
    'supportRoute',
    'infoRoute',

    'themingPage',

    // entry pages
    // TODO: move these exclusions into clinical:entry
    'entrySignUp',
    'entrySignIn',
    'forgotPassword'
    // 'entrySignOutRoute',
    // 'entryResetPasswordRoute'
  ]
});



// Router.onBeforeAction(function() {
//   if (Meteor.user()) {
//     if (!Meteor.user().profile.employer_id) {
//       this.render("noEmployerSetPageErrorPage");
//
//       this.render("navbarHeader", {to: 'header'});
//       this.render("sidebarTemplate",{to: 'aside'});
//     } else {
//       this.render("navbarHeader", {to: 'header'});
//       this.render("sidebarTemplate",{to: 'aside'});
//     }
//   }else{
//     return {};
//   }
// });



//--------------------------------------------------------------
// Yield Templates and Layouts

getYieldTemplates = function () {
  if (Meteor.userId()) {
    return {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'footer'
      }
    };
  } else {
    return {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'footer'
      }
    };
  }
};

//--------------------------------------------------------------
// Error Routes

Router.map(function () {
  this.route("browserNotSupportedRoute", {
    path: "/notsupported",
    template: "browserNotSupportedPage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      Session.set('entryError', void 0);
      setPageTitle("Browser Not Supported");
    }
  });
  this.route("pageNotFoundRoute", {
    path: "/notfound",
    template: "notFoundPage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      Session.set('entryError', void 0);
      setPageTitle("Not Found Page");
    }
  });
  this.route("loadingPageRoute", {
    path: "/loading",
    template: "loadingPage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      Session.set('entryError', void 0);
      setPageTitle("Loading");
    }
  });

});



//--------------------------------------------------------------
// Routes




Router.map(function () {
  this.route('/dashboard', {
    name: 'dashboardRoute',
    template: "homePage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      console.log('routing to: /dashboard');
      setPageTitle("Welcome");
    }
  });
});

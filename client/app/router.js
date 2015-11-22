

//--------------------------------------------------------------
// Security Sign In

Router.onBeforeAction(function () {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    this.redirect('/please-sign-in');
  } else {
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
      //'sidebarTemplate': {to: 'aside'}
    };
  } else {
    return {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'footer'
      }

      //'sidebarTemplate': {to: 'aside'}
    };
    //return {};
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

  // this.route('homePage', {
  //   path: '/',
  //   template: 'homePage',
  //   yieldTemplates: getYieldTemplates(),
  //   onBeforeAction: function () {
  //     console.log('routing to: /');
  //   },
  //   onAfterAction: function () {
  //     if (Meteor.userId()) {
  //       this.render("homePage");
  //       // this.render("navbarHeader", {
  //       //   to: 'header'
  //       // });
  //       //this.render("sidebarTemplate",{to: 'aside'});
  //     } else {
  //       this.render("landingPage");
  //       // this.render("navbarHeader", {
  //       //   to: 'header'
  //       // });
  //       //this.render("sidebarTemplate",{to: 'aside'});
  //     }
  //     setPageTitle("Landing Page");
  //
  //     // the home page route is a hacky way to simulate an onLogin Hook
  //     Session.set('defaultUserProfileCard', 'basicInfoCard');
  //     Session.set('updatePasswordIsSuccessful', false);
  //   }
  // });

  this.route('/dashboard', {
    name: 'dashboardRoute',
    template: "homePage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      console.log('routing to: /dashboard');
      setPageTitle("Welcome");
    }
  });
  // this.route('eulaRoute', {
  //   path: '/eula',
  //   template: 'termsOfUsePage',
  //   yieldTemplates: getYieldTemplates(),
  //   onBeforeAction: function () {
  //     setPageTitle("End User License Agreement");
  //   }
  // });
  // this.route('privacyRoute', {
  //   path: '/privacy',
  //   template: 'privacyPage',
  //   yieldTemplates: getYieldTemplates(),
  //   onBeforeAction: function () {
  //     setPageTitle("Privacy Policy");
  //   }
  // });
  // this.route('glossaryRoute', {
  //   path: '/glossary',
  //   template: 'glossaryPage',
  //   yieldTemplates: getYieldTemplates(),
  //   onBeforeAction: function () {
  //     setPageTitle("Glossary");
  //   }
  // });
  // this.route('aboutRoute', {
  //   path: '/about',
  //   template: 'aboutPage',
  //   yieldTemplates: getYieldTemplates(),
  //   onBeforeAction: function () {
  //     setPageTitle("About");
  //   }
  // });



});

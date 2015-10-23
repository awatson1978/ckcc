renderHomePage = function (scope) {

};

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

  this.route('dashboardRoute', {
    path: '/dashboard',
    template: "homePage",
    yieldTemplates: getYieldTemplates(),
    onBeforeAction: function () {
      console.log('routing to: /dashboard');
      setPageTitle("Welcome");
    }
  });
  // this.route('eulaRoute', {
  //   path: '/eula',
  //   template: 'eulaPage',
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


//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {to: 'header'},
    'navbarFooter': {to: 'footer'},
    'mainSidebar': {to: 'sidebar'},
    'secondPage': {to: 'secondPage'},
  }
});


Router.route('/info', {
  template: "infoPage",
  name: "infoPage"
});
Router.route('/', {
  template: "menuPage",
  name: "menuPage",
  // onAfterAction: function () {
  //   if (Meteor.userId()) {
  //     this.render("homePage");
  //   } else {
  //     this.render("landingPage");
  //   }
  //   setPageTitle("Landing Page");
  // }
});
Router.route('/new/questionnaire', {
  template: "recordUpsertPage",
  name: "newQuestionnaireRoute"
});

Router.route('/landing', {
  template: "landingPage",
  name: "landingPage"
});

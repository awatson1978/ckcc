
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
  name: "menuPage"
});
Router.route('/new/questionnaire', {
  template: "recordUpsertPage",
  name: "newQuestionnaireRoute"
});

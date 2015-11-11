//--------------------------------------------------------------
// Global Configuration

Router.configure({
  layoutTemplate: 'appLayout',
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    }
  }
});

Router.route('/', {
  route: 'dashboardPageRoute',
  template: 'menuPage',
  waitOn: function () {
    Meteor.subscribe('interactionsDaily');
  },
  onAfterAction: function () {
    Graphs.renderDailyInteractionsDailyStats();
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    'dashboardSecondPage': {
      to: 'secondPage'
    }
  }
});

Router.route('/info', {
  template: "infoPage",
  name: "infoPage"
});
Router.route('/new/questionnaire', {
  template: "recordUpsertPage",
  name: "newQuestionnaireRoute"
});

Router.route('/landing', {
  template: "landingPage",
  name: "landingPage"
});


//--------------------------------------------------------------
// Global Configuration

Router.onBeforeAction(function (){
  WestPanel.hide();
  this.next();
});

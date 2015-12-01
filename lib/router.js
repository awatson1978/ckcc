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
    },
    'leftDock': {
      to: 'leftDock'
    },
    'rightDock': {
      to: 'rightDock'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },

    // ISSUE #1 - Find a better way to attach modal dialogs that can scale.
    'keybindingsModal': {
      to: 'keybindingsModal'
    },
    'userPicklistModal': {
      to: 'userPicklistModal'
    },
    'studyPicklistModal': {
      to: 'studyPicklistModal'
    },
    'collaborationPicklistModal': {
      to: 'collaborationPicklistModal'
    },
    'studiesPicklistModal': {
      to: 'studiesPicklistModal'
    },
    'metadataPicklistModal': {
      to: 'metadataPicklistModal'
    }
  }
});

Router.route('/', {
  name: 'homeRoute',
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
  name: "infoRoute"
});
Router.route('/new/questionnaire', {
  template: "recordUpsertPage",
  name: "newQuestionnaireRoute"
});




//--------------------------------------------------------------
// Global Configuration

Router.onBeforeAction(function (){
  Session.set('pageTitle', '');
  WestPanel.hide();
  this.next();
});

//--------------------------------------------------------------
// Global Configuration


Router.configure({
  layoutTemplate: 'appLayout',
  //yieldTemplates: Layout.generateYieldTemplates()

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
    'themingCard': {
      to: 'rightDock'
    },
    'accountCard': {
      to: 'accountCard'
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
    'samplesPicklistModal': {
      to: 'samplesPicklistModal'
    },
    'metadataPicklistModal': {
      to: 'metadataPicklistModal'
    },
    'dashboardSecondPage': {
      to: 'secondPage'
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
  // yieldTemplates: Layout.generateYieldTemplates({
  //   'dashboardSecondPage': {
  //     to: 'secondPage'
  //   }
  // })
  //}
});


Router.route('/info', {
  template: "infoPage",
  name: "infoRoute",
  // yieldTemplates: Layout.generateYieldTemplates({
  //   'dashboardSecondPage': {
  //     to: 'secondPage'
  //   }
  // })
});
Router.route('/new/questionnaire', {
  template: "recordUpsertPage",
  name: "newQuestionnaireRoute",
  // yieldTemplates: Layout.generateYieldTemplates()
});




//--------------------------------------------------------------
// Global Configuration

Router.onBeforeAction(function (){
  Session.set('pageTitle', '');
  WestPanel.hide();
  this.next();
});

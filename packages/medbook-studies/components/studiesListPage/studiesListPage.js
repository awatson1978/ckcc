Session.setDefault('studySearchFilter', "");
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function () {
  this.route('studiesListPage', {
    path: '/list/studies/',
    template: 'studiesListPage',
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'studyter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'studyUpsertPage': {
        to: 'secondPage'
      },
      'studiesActionButtons': {
        to: 'footerActionElements'
      }
    },
    data: function () {
      if (Session.get('activeStudy')) {
        return Studies.findOne(Session.get('activeStudy'));
      }
    },
    // onAfterAction: function (){
    //   Session.set('cardTitle', 'list/studies');
    // }
  });
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.studiesListPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/studies');
  },

  'change #studySearchInput': function () {
    Session.set('studySearchFilter', $('#studySearchInput').val());
  },
  'click .addStudyItem': function () {
    Router.go('/insert/study');
  },
  'click .studyItem': function (event, template) {
    event.preventDefault();

    if (Session.get('appWidth') > 1900) {
      Session.set('activeStudy', this._id);
    } else {
      Router.go('/view/study/' + this._id);
    }
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #studySearchInput': function () {
    Session.set('studySearchFilter', $('#studySearchInput').val());
  }
});



//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.studiesListPage.rendered = function () {
  console.log("trying to update layout...");

  Template.appLayout.delayedLayout(20);
};


Template.studiesListPage.helpers({
  getStudySearchFilter: function () {
    return Session.get('studySearchFilter');
  },
  hasNoContent: function () {
    if (Studies.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  }
});

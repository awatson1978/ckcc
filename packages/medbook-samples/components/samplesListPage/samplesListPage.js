Session.setDefault('sampleSearchFilter', "");
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function () {
  this.route('samplesListPage', {
    path: '/list/samples/',
    template: 'samplesListPage',
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'sampleter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'sampleUpsertPage': {
        to: 'secondPage'
      },
      'samplesActionButtons': {
        to: 'footerActionElements'
      },
      'metadataPicklistModal': {
        to: 'metadataPicklistModal'
      }
    },
    data: function () {
      if (Session.get('activeSample')) {
        return Samples.findOne(Session.get('activeSample'));
      }
    },
    // onAfterAction: function (){
    //   Session.set('cardTitle', 'list/samples');
    // }
  });
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.samplesListPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/samples');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/samples');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/samples');
  },

  'change #sampleSearchInput': function () {
    Session.set('sampleSearchFilter', $('#sampleSearchInput').val());
  },
  'click .addSampleItem': function () {
    Router.go('/insert/sample');
  },
  'click .sampleItem': function (event, template) {
    event.preventDefault();

    if (Session.get('appWidth') > 1900) {
      Session.set('activeSample', this._id);
    } else {
      Router.go('/view/sample/' + this._id);
    }
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #sampleSearchInput': function () {
    Session.set('sampleSearchFilter', $('#sampleSearchInput').val());
  }
});



//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.samplesListPage.rendered = function () {
  console.log("trying to update layout...");

  Template.appLayout.delayedLayout(20);
};


Template.samplesListPage.helpers({
  getSampleSearchFilter: function () {
    return Session.get('sampleSearchFilter');
  },
  hasNoContent: function () {
    if (Samples.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  }
});

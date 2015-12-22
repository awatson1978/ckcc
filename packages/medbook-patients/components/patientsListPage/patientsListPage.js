Session.setDefault('patientSearchFilter', "");
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function () {
  this.route('patientsListPage', {
    path: '/list/patients/',
    template: 'patientsListPage',
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'patientter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'patientUpsertPage': {
        to: 'secondPage'
      },
      'patientsActionButtons': {
        to: 'footerActionElements'
      },
      'metadataPicklistModal': {
        to: 'metadataPicklistModal'
      }
    },
    data: function () {
      if (Session.get('activePatient')) {
        return Patients.findOne(Session.get('activePatient'));
      }
    },
    // onAfterAction: function (){
    //   Session.set('cardTitle', 'list/patients');
    // }
  });
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.patientsListPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/patients');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/patients');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/patients');
  },

  'change #patientSearchInput': function () {
    Session.set('patientSearchFilter', $('#patientSearchInput').val());
  },
  'click .addPatientItem': function () {
    Router.go('/insert/patient');
  },
  'click .patientItem': function (event, template) {
    event.preventDefault();

    if (Session.get('appWidth') > 1900) {
      Session.set('activePatient', this._id);
    } else {
      Router.go('/view/patient/' + this._id);
    }
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #patientSearchInput': function () {
    Session.set('patientSearchFilter', $('#patientSearchInput').val());
  }
});



//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.patientsListPage.rendered = function () {
  console.log("trying to update layout...");

  Template.appLayout.delayedLayout(20);
};


Template.patientsListPage.helpers({
  getPatientSearchFilter: function () {
    return Session.get('patientSearchFilter');
  },
  hasNoContent: function () {
    if (Patients.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  }
});

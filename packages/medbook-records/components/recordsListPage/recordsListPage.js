Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function () {
  this.route('recordsListPage', {
    path: '/list/records/',
    template: 'recordsListPage',
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'recordter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'recordUpsertPage': {
        to: 'secondPage'
      },
      'recordListActionButtons': {
        to: 'footerActionElements'
      },
      'formSelectPanel': {
        to: 'westPanel'
      }
    },
    data: function () {
      if (Session.get('activeRecord')) {
        return Records.findOne(Session.get('activeRecord'));
      }
    }
  });
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.recordsListPage.events({
  'change #recordSearchInput': function () {
    Session.set('recordSearchFilter', $('#recordSearchInput').val());
  },
  'keyup #recordSearchInput': function () {
    Session.set('recordSearchFilter', $('#recordSearchInput').val());
  },
  'click .addRecordItem': function () {
    Router.go('/insert/record');
  },
  'click .recordItem': function (event, template) {
    event.preventDefault();

    if (Session.get('appWidth') > 1900) {
      Session.set('activeRecord', this._id);
    } else {
      Router.go('/view/record/' + this._id);
    }
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #recordSearchInput': function () {
    Session.set('recordSearchFilter', $('#recordSearchInput').val());
  }
});



//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


Template.recordsListPage.helpers({
  getQuestionnaireName: function () {
    return this.questionnaireName;
  },
  getRecordSearchFilter: function () {
    return Session.get('recordSearchFilter');
  },
  hasNoContent: function () {
    if (Records.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  }
});

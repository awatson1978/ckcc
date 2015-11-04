Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function () {
  this.route('subjectsListPage', {
    path: '/list/subjects/',
    template: 'subjectsListPage',
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'subjectter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'subjectUpsertPage': {
        to: 'secondPage'
      },
    },
    data: function () {
      if (Session.get('activeSubject')) {
        return Subjects.findOne(Session.get('activeSubject'));
      }
    }
  });
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.subjectsListPage.events({
  'change #subjectSearchInput': function () {
    Session.set('subjectSearchFilter', $('#subjectSearchInput').val());
  },
  'click .addSubjectItem': function () {
    Router.go('/insert/subject');
  },
  'click .subjectItem': function (event, template) {
    event.preventDefault();

    if (Session.get('appWidth') > 1900) {
      Session.set('activeSubject', this._id);
    } else {
      Router.go('/view/subject/' + this._id);
    }
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #subjectSearchInput': function () {
    Session.set('subjectSearchFilter', $('#subjectSearchInput').val());
  }
});



//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.subjectsListPage.rendered = function () {
  console.log("trying to update layout...");

  Template.appLayout.delayedLayout(20);
};


Template.subjectsListPage.helpers({
  getSubjectSearchFilter: function () {
    return Session.get('subjectSearchFilter');
  },
  hasNoContent: function () {
    if (Subjects.find().count() === 0) {
      return true;
    } else {
      return false;
    }
  }
});

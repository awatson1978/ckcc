Session.setDefault('hasPageBorder', false);
Session.setDefault('hasPagePadding', false);
Session.setDefault('pageBackgroundIsWhite', false);

Template.menuPage.helpers({
  getBackground: function (){
    if (Session.get('pageBackgroundIsWhite')) {
      return "background-color: white;";
    } else {
      return "background-color: inherit";
    }
  },
  getPagePadding: function (){
    if (Session.get('hasPagePadding')) {
      return "padding: 40px;";
    } else {
      return "padding: 0px;";
    }
  },
  getPageBorder: function (){
    if (Session.get('hasPageBorder')) {
      return "border: 5px dashed darkgray;";
    } else {
      return "border: 0px none;";
    }
  },
  getTileTheme: function (){
    if (Session.equals('foregroundTheme', 'light')) {
      return "lightTheme";
    } else {
      return "darkTheme";
    }
  },
  getMenuWidth: function () {
    if (Session.get('appWidth') > 768) {
      return "width: 180px;";
    } else {
      return "width: " + ($('#menuPage').width() - 40) + "px;";
    }
  },
  getStudiesCount: function () {
    return 0;
  },
  getCollaborationsCount: function () {
    return Collaborations.find().count();
  },
  getQuestionsCount: function () {
    return Questionnaires.find().count() + "*";
  },
  getClinicalDataCount: function () {
    return Foo.find().count();
  },
  getUsersCount: function () {
    return Meteor.users.find().count();
  }
});

Template.menuPage.events({
  "click #collaborationsTile": function (event, template) {
    Router.go('/grid/collaborations');
  },
  "click #questionnairesTile": function (event, template) {
    Router.go('/list/questionnaires/');
  },
  "click #clinicalDataTile": function (event, template) {
    Router.go('/list/foos');
  }
});


Template.menuPage.onCreated(function () {

});

Template.menuPage.onRendered(function () {

});

Template.menuPage.onDestroyed(function () {

});

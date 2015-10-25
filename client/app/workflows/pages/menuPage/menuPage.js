Session.setDefault('hasPageBorder', false);
Session.setDefault('hasPagePadding', false);
Session.setDefault('pageBackgroundIsWhite', false);

Template.menuPage.helpers({
  getNullCount: function (){
    return 0;
  },
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
      if ($('#menuPage').width() > 100) {
        var gridWidth = (($("#menuItems").width() - 40) / 3) - 10;
        return "min-width: 180px; width: " + gridWidth + "px;";
      } else {
        return "min-width: 180px; width: 210px;";
      }
    } else {
      if ($('#menuPage').width() > 100) {
        return "min-width: 180px; width: " + $('#menuItems').width() + "px;";
      } else {
        return "min-width: 180px; width: 180px;";
      }
    }
  },
  getStudiesCount: function () {
    return Studies.find().count();
  },
  getCollaborationsCount: function () {
    return Collaborations.find().count();
  },
  getQuestionsCount: function () {
    return Questionnaires.find().count() + "*";
  },
  getClinicalDataCount: function () {
    return Records.find().count();
  },
  getUsersCount: function () {
    return Meteor.users.find().count();
  },
  getHipaaCount: function () {
    return Hipaa.find().count();
  }
});

Template.menuPage.events({
  'click #auditTile': function (){
    Router.go('/audit');
  },
  'click #studiesTile': function (){
    Router.go('/list/studies/');
  },
  "click #collaborationsTile": function (event, template) {
    Router.go('/grid/collaborations');
  },
  "click #questionnairesTile": function (event, template) {
    Router.go('/list/questionnaires/');
  },
  "click #clinicalDataTile": function (event, template) {
    Router.go('/list/records');
  }
});


Template.menuPage.onCreated(function () {

});

Template.menuPage.onRendered(function () {

});

Template.menuPage.onDestroyed(function () {

});

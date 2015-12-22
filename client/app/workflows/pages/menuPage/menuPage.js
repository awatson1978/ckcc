Session.setDefault('hasPageBorder', false);
Session.setDefault('hasPagePadding', false);
Session.setDefault('pageBackgroundIsWhite', false);
Session.setDefault('showItemsInDevelopment', false);

Meteor.startup(function (){
  Session.set('hasPagePadding', false);
});

Template.menuPage.helpers({
  showItemsInDevelopment: function (){
    return Session.get('showItemsInDevelopment');
  },
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
    //return "padding: 0px;";
    if (Session.get('hasPagePadding')) {
      return "padding-right: 40px; padding-left: 40px;";
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
    var newWidth = 180;

    if (Session.get('appWidth') > 768) {
      newWidth = (($("#menuItems").width() - 10) / 3) - 20;
    } else {
      newWidth = $('#menuItems').width() - 20;
    }

    if ($('#menuItems').width() < 180) {

    }
    if (newWidth < 0) {
      newWidth = 212;
    }

    return "min-width: 180px; width: " + newWidth + "px;";
  },
  getRootUrlPrefix: function () {
    return "";
  },
  getPatientsCount: function (){
    return Patients.find().count();
  },
  getSamplesCount: function () {
    return Samples.find().count();
  },
  getSubjectsCount: function () {
    return Subjects.find().count();
  },
  getMetadataCount: function () {
    return Metadata.find().count();
  },
  getStudiesCount: function () {
    return Studies.find().count();
  },
  getCollaborationsCount: function () {
    return Collaborations.find().count();
  },
  getQuestionsCount: function () {
    return "---";
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
  'click #patientsTile': function (){
    Router.go('/list/patients');
  },
  'click #subjectsTile': function (){
    Router.go('/list/subjects');
  },
  'click #metadataTile': function (){
    Router.go('/list/metadata');
  },
  'click #formBuilderTile': function (){
    Router.go('/builder');
  },
  'click #auditTile': function (){
    Router.go('/audit');
  },
  'click #studiesTile': function (){
    Router.go('/list/studies/');
  },
  'click #samplesTile': function (){
    Router.go('/list/samples/');
  },
  'click #usersTile': function (){
    Router.go('/table/users/');
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





Template.menuPage.helpers ({
  getCollaborationsCount: function () {
    return Collaborations.find().count();
  },
  getQuestionsCount: function () {
    return 1;
  },
  getClinicalDataCount: function () {
    return Foo.find().count();
  },
  getUsersCount: function () {
    return Meteor.users.find().count();
  }
});

Template.menuPage.events({
  "click #collaborationsTile": function (event, template){
    Router.go('/grid/collaborations');
  },
  "click #questionairesTile": function (event, template){
    Router.go('/insert/foo');
  },
  "click #clinicalDataTile": function (event, template){
    Router.go('/list/foos');
  }
});


Template.menuPage.onCreated( function (){

});

Template.menuPage.onRendered( function (){

});

Template.menuPage.onDestroyed( function (){

});

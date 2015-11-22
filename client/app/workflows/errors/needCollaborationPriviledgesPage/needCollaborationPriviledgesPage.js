
Router.route('/need-collaboration', {
  template: "needCollaborationPriviledgesPage",
  name: "needCollaborationPriviledgesRoute"
});

Template.needCollaborationPriviledgesPage.events({
  'click #needCollaborationPriviledgesMessage' : function (){
    Router.go('/');
  }
});

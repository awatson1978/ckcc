Session.setDefault("errorMessage", false);

Template.errorPanel.helpers({
  alertPanelVisibility: function (){
    if (Session.get('errorMessage')){
      return "opacity: 1; z-index: 1000; top: 0px;";
    } else {
      return "opacity: 0; z-index: -1; top: -50px;";
    }
  },
  getErrorMessage: function (){
    return Session.get('errorMessage');
  },
  hasErrorMessage: function (){
    if (Session.get('errorMessage')) {
      return true;
    } else {
      return false;
    }
  }
});


Template.errorPanel.events({
  "click #errorPanel": function (event, template){
    Session.set('errorMessage', false);
  }
});

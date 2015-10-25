Session.setDefault("errorMessage", "Danger, Will Robinson....");

Template.errorPanel.helpers({
  alertPanelVisibility: function (){
    if (Session.get('errorMessage')){
      return "opacity: 1;";
    } else {
      return "opacity: 0;";
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

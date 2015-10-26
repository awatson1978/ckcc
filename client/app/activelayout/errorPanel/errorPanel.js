Session.setDefault("errorMessage", false);
Session.setDefault("successMessage", false);

Template.errorPanel.helpers({
  successPanelVisibility: function (){
    if (Session.get('successMessage')){
      Meteor.setTimeout(function (){
        Session.set("successMessage", false);
      }, 3000);
      return "opacity: 1; z-index: 1000; top: 0px;";
    } else {
      return "opacity: 0; z-index: -1; top: -50px;";
    }
  },
  errorPanelVisibility: function (){
    if (Session.get('errorMessage')){
      Meteor.setTimeout(function (){
        Session.set("errorMessage", false);
      }, 3000);
      return "opacity: 1; z-index: 1000; top: 0px;";
    } else {
      return "opacity: 0; z-index: -1; top: -50px;";
    }
  },
  getSuccessMessage: function (){
    return Session.get('successMessage');
  },
  getErrorMessage: function (){
    return Session.get('errorMessage');
  },
  hasSuccessMessage: function (){
    if (Session.get('successMessage')) {
      return true;
    } else {
      return false;
    }
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
  "click #successPanel": function (event, template){
    Session.set('successMessage', false);
  },
  "click #errorPanel": function (event, template){
    Session.set('errorMessage', false);
  }
});

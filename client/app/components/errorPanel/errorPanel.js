Session.setDefault("errorMessage", "Danger, Will Robinson....");


Template.errorPanel.helpers({
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

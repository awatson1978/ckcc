
Session.setDefault('inboxCardOpen', false);
Session.setDefault('outboxCardOpen', false);
Session.setDefault('formBuilderCardOpen', false);

Session.setDefault('showInboxCard', false);
Session.setDefault('showOutboxCard', true);
Session.setDefault('showFormBuilderCard', true);


Template.leftDock.events({
  'click #firstDocument': function () {
    Session.set('inboxCardOpen', false);
    Router.go('/new/questionnaire');
  },
  'click #inboxCard .cardHandle': function () {
    Session.toggle('inboxCardOpen');
  },
  'click #outboxCard .cardHandle': function () {
    Session.toggle('outboxCardOpen');
  },
  'click #formBuilderCard .cardHandle': function () {
    Session.toggle('formBuilderCardOpen');
  }
});

Template.leftDock.helpers({
  showFormBuilder: function (){
    return Session.get('showFormBuilderCard');
  },
  showInbox: function () {
    return true;
    //return Session.get('showInboxCard');
  },
  showOutbox: function () {
    return Session.get('showOutboxCard');
  },
  leftCardVisibility: function (selectedCard) {
    if (Session.get(selectedCard)) {
      return "left: 0px;";
    } else {
      return "left: -310px;";
    }
  },
  leftCardStyle: function () {
    return "background: linear-gradient(315deg, transparent 16px, rgba(255,255,255," +
      Session.get("glassOpacity") + ") 0) bottom right;";
  },
  formBuilderHeight: function (){
    // return "height: 500px;";
    return "height: " + (parseInt(Session.get("appHeight")) - 550) + "px !important;";
  }
});

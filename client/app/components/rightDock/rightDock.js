
Session.setDefault('accountCardOpen', false);
Session.setDefault('profileCardOpen', false);

Session.setDefault('showAccountCard', false);
Session.setDefault('showThemeCard', false);
Session.setDefault('showProfileCard', false);


Template.rightDock.events({
  'click #backgroundBtn': function () {
    //Session.toggle('show_background');
    if (Session.get('show_background')) {
      // $('body').addClass('forestBackground');
      // $('body').removeClass('greenBackground');
      $('body').attr('style', "background-color: #AEC9A8;  ");
    } else {
      // $('body').addClass('greenBackground');
      // $('body').removeClass('forestBackground');
      $('body').attr('style', "background: url('/forest1.jpg') no-repeat center center fixed; background-color: none;");
    }
    Session.toggle("show_background");
  },
  'click #opacityBtn': function () {
    if (Session.get('is_opaque')) {
      Session.set("glassOpacity", 0.9);
      Session.set('is_opaque', false);
    } else {
      Session.set("glassOpacity", 1);
      Session.set('is_opaque', true);
    }
  },
  'click #accountCard .cardHandle': function () {
    Session.toggle('accountCardOpen');
  },
  'click #profileCard .cardHandle': function () {
    Session.toggle('profileCardOpen');
  },
});


Template.rightDock.helpers({
  showAccount: function () {
    return Session.get('showAccountCard');
  },
  showTheme: function () {
    return Session.get('showThemeCard');
  },
  showProfile: function () {
    return Session.get('showProfileCard');
  },
  rightCardStyle: function () {
    return "background: linear-gradient(45deg, transparent 16px, rgba(255,255,255," + Session
      .get("glassOpacity") + ") 0) bottom right;";
  },
  cardVisibility: function (selectedCard) {
    if (Session.get(selectedCard)) {
      return "right: 0px;";
    } else {
      return "right: -310px;";
    }
  }
});

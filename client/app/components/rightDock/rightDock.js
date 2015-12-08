
Session.setDefault('accountCardOpen', false);
Session.setDefault('profileCardOpen', false);

Session.setDefault('showAccountCard', false);
Session.setDefault('showThemeCard', false);
Session.setDefault('showProfileCard', false);

Session.setDefault('backgroundColor', 'green');
Session.setDefault("avatarImgSrc", 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfa1/v/t1.0-9/10959424_1048857758463899_5840518008623403253_n.jpg?oh=9e5f381178590a5a67ff82f5e5dc37aa&oe=56D11A43');
Session.setDefault("backgroundImgSrc", 'forest1.jpg');

Session.setDefault('isOpaque', 'opaque');
Session.setDefault('foregroundTheme', 'light');

Session.setDefault('appTitle', 'California Kids Cancer Comparison');

Template.rightDock.events({
  'click .cardWidthBtn': function (){
    Session.set('pageIsWide', false);
    Session.set('pageLeftToWestRule', false);
  },
  'click .pageWidthBtn': function (){
    Session.set('pageIsWide', true);
    Session.set('pageLeftToWestRule', true);
  },
  'keyup #appTitleInput': function (){
    Session.set('appTitle', $('#appTitleInput').val());
  },
  'change #appTitleInput': function (){
    Session.set('appTitle', $('#appTitleInput').val());
  },
  'click .fullNavBtn': function (){
    Session.set('navIsFullscreen', false);
  },
  'click .narrowNavBtn': function (){
    Session.set('navIsFullscreen', true);
  },
  'change #backgroundImgSrcInput': function (){
    Session.set('backgroundImgSrc', $('#backgroundImgSrcInput').val());
  },
  'change #avatarImgSrcInput': function (){
    Session.set('avatarImgSrc', $('#avatarImgSrcInput').val());
  },
  'click #lightBtn': function (){
    Session.set('foregroundTheme', 'light');
  },
  'click #darkBtn': function (){
    Session.set('foregroundTheme', 'dark');
  },
  'click #redBtn': function (){
    //Session.set('backgroundColor', 'red');
    $('body').attr('style', "background-color: #A64C4C;  ");
  },
  'click #blueBtn': function (){
    //Session.set('backgroundColor', 'blue');
    $('body').attr('style', "background-color: #89cff0;  ");
  },
  'click #greenBtn': function (){
    $('body').attr('style', "background-color: #AEC9A8;  ");
    //Session.set('backgroundColor', 'green');
  },
  'click #whiteBtn': function (){
    $('body').attr('style', "background-color: #ffffff;  ");
    //Session.set('backgroundColor', 'white');
  },
  'click #grayBtn': function (){
    $('body').attr('style', "background-color: #999999;  ");
    //Session.set('backgroundColor', 'white');
  },
  'click #lightGrayBtn': function (){
    $('body').attr('style', "background-color: #cccccc;  ");
    //Session.set('backgroundColor', 'white');
  },
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
    if (Session.equals('isOpaque', 'opaque')) {
      Session.set("glassOpacity", 1);
      Session.set('isOpaque', 'high');
    } else if (Session.equals('isOpaque', 'high')) {
      Session.set("glassOpacity", 0.8);
      Session.set('isOpaque', 'low');
    } else if (Session.equals('isOpaque', 'low')) {
      Session.set("glassOpacity", 0.3);
      Session.set('isOpaque', 'opaque');
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
  getAvatarImgSrc: function (){
    return Session.get('avatarImgSrc');
  },
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

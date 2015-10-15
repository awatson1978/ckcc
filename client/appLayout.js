Session.set("resize", null);
Session.setDefault('appHeight', $(window).height());
Session.setDefault('appWidth', $(window).width());
Session.setDefault("glassOpacity", .95);
Session.setDefault("backgroundColorA", '#456ad7');


Meteor.startup(function () {
  window.addEventListener('resize', function () {
    Session.set("resize", new Date());
    Session.set("appHeight", $(window).height());
    Session.set("appWidth", $(window).width());
  });
});


Session.setDefault('transparencyDivHeight', 100);
Session.setDefault('mainPanelLeft', 0);


Meteor.startup(function () {
  Template.appLayout.layout();
});




//==================================================================================================



Template.appLayout.onRendered(function () {
  Template.appLayout.layout();
  $('body').addClass('greenBackground');
});

Template.appLayout.helpers({
  resized: function () {
    Template.appLayout.layout();
  },
  getSecondPanelStyle: function (){
    return Style.parse(generateStylesheet(true));
  },
  getStyle: function () {
    return Style.parse(generateStylesheet());
  }
});

generateStylesheet = function (secondPanel){
  var stylesheet = {};


  if (secondPanel) {
    if (Session.get('appWidth') > 2076) {
      var halfDiff = (Session.get('appWidth') - 1856) * 0.5;
      stylesheet.left = (halfDiff + 938) + "px;";
    } else {
      stylesheet.left = Session.get('mainPanelLeft') + "px;";
      stylesheet.visibility = "hidden;";
    }
  } else {
    stylesheet.left = Session.get('mainPanelLeft') + "px;";
  };

  if (Session.get('showNavbars')) {
    stylesheet["margin-bottom"] = "50px;";
  } else {
    stylesheet["margin-bottom"] = "0px;";
  }

  return stylesheet;
};


Template.appLayout.layout = function () {
  Session.set('transparencyDivHeight', $('#innerPanel').height() + 80);


  // two-page with sidebar
  // 2076 = 2 (768px panels) + 100px spacer + 2 margins at least 220px wide
  if (Session.get('appWidth') > 2096) {
    Session.set('sidebarLeft', (100 + (Session.get('appWidth') - 1876) * 0.5) - 240);
    Session.set('mainPanelLeft', (100 + (Session.get('appWidth') - 1856) * 0.5));
    Session.set("sidebarVisible", true);

  // one-page with sidebar
  // 1208 =  single 768px panel + 2 margins at least 220px wide + 20px sidebar spacer
  } else if (Session.get('appWidth') > 1228) {
    Session.set('mainPanelLeft', (Session.get('appWidth') - 768) * 0.5);
    Session.set('sidebarLeft', (Session.get('appWidth') - 1228) * 0.5);
    Session.set("sidebarVisible", true);

  // one-page
  // 768 =  single 768px panel
  } else if (Session.get('appWidth') > 768) {
    Session.set('mainPanelLeft', (Session.get('appWidth') - 768) * 0.5);
    Session.set("sidebarLeft", -200);
    Session.set("sidebarVisible", false);

  // mobile
  } else {
    Session.set('mainPanelLeft', 0);
    Session.set("sidebarLeft", -200);
    Session.set("sidebarVisible", false);
  }
};

Template.appLayout.delayedLayout = function (timeout) {
  Meteor.setTimeout(function () {
    Template.appLayout.layout();
  }, timeout);
};

//==================================================================================================


Template.registerHelper("getOpacityWithCorner", function (){
  if (Session.get('appWidth') > 768) {
    if (Session.get('mainPanelIsCard')) {
      return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," + Session.get("glassOpacity") + ") 0) top right;";
    } else {
      return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + "); top: 50px;";
    }
  } else {
    return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + "); top: 50px;";
  }
});
Template.registerHelper("getOpacity", function (){
  return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + ");";
});
Template.registerHelper("btnPrimary", function () {
  return "background-color: " + Session.get('backgroundColorA') + "; color: #ffffff;";
});

Template.registerHelper("getNorthRule", function (argument){
  var topDistance = 0;

  if (Session.get('showNavbars')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('showSearchbar')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('mainPanelIsCard')) {
    topDistance = topDistance + 50;
  }

  return "top: " + topDistance + "px;";
});

//==================================================================================================

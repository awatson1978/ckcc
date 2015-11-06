Meteor.startup(function () {
  Session.set("resize", null);
  Session.setDefault('appHeight', $(window).height());
  Session.setDefault('appWidth', $(window).width());
  Session.setDefault("glassOpacity", .95);
  Session.setDefault("backgroundColorA", '#456ad7');

  Session.setDefault("eastRule", 200);
  Session.setDefault("westRule", 200);
  Session.setDefault("northRule", 100);
  Session.setDefault("southRule", 100);

  Session.setDefault('activeRecord', null);

  Session.setDefault('navIsFullscreen', true);
  Session.setDefault('pageIsWide', false);
  Session.setDefault('pageLeftToWestRule', false);

  Session.set("eastRule", 200);
  Session.set("westRule", 200);
  Session.set('appWidth', $(window).width());
  // Session.set("appWidth", 1024);
  Session.set('pageLeftToWestRule', false);

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
  $('body').addClass('grayBackground');
});

Template.appLayout.helpers({
  resized: function () {
    Template.appLayout.layout();
  },
  getSecondPanelStyle: function () {
    if (Session.get('pageIsWide')) {
      return "visibility: hidden; left: " + (Session.get('appWidth') + 1024) + "px;";
    } else {
      return Style.parse(generateStylesheet(true));
    }
  },
  getStyle: function () {
    return Style.parse(generateStylesheet());
  }
});



generateStylesheet = function (secondPanel) {
  var stylesheet = {};


  if (secondPanel) {
    if (Session.get('appWidth') > 2076) {
      var halfDiff = (Session.get('appWidth') - 1856) * 0.5;
      if (Session.get('formBuilderPanelVisible')) {
        halfDiff = halfDiff + 300;
      }
      stylesheet.left = (halfDiff + 938) + "px;";
    } else {
      var leftPosition = Session.get('mainPanelLeft');
      if (Session.get('formBuilderPanelVisible')) {
        leftPosition = leftPosition + 300;
      }
      stylesheet.left = leftPosition + "px;";
      stylesheet.visibility = "hidden;";
    }
  } else {
    var leftPosition = Session.get('mainPanelLeft');
    if (Session.get('formBuilderPanelVisible')) {
      //leftPosition = leftPosition + 300;
      leftPosition = 440;
    };
    stylesheet.left = leftPosition + "px;";
  };



  if (Session.get('pageIsWide')) {
    stylesheet.width = (Session.get('appWidth') - 400) + "px;";
    stylesheet["max-width"] = (Session.get('appWidth') - 400) + "px;";
  } else {
    stylesheet.width = "100%;";
    stylesheet["max-width"] = "768px;";
  }


  var marginBottom = 0;

  if (Session.get('mainPanelIsCard')) {
    marginBottom = marginBottom + 50;
  } else {
    marginBottom = marginBottom;
  }

  if (Session.get('showNavbars')) {
    marginBottom = marginBottom + 50;
  } else {
    marginBottom = marginBottom;
  }

  stylesheet["margin-bottom"] = marginBottom + "px;";

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
    Session.set('sidebarLeft', (Session.get('appWidth') - 1228) * 0.5);
    Session.set("sidebarVisible", true);
    Session.set('mainPanelLeft', (Session.get('appWidth') - 768) * 0.5);

    if (Session.get('pageLeftToWestRule')) {
      Session.set('mainPanelLeft', 200);
    } else {
      Session.set('mainPanelLeft', (Session.get('appWidth') - 768) * 0.5);
    }

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


Template.registerHelper("getOpacityWithCorner", function () {
  if (Session.get('appWidth') > 768) {
    if (Session.get('mainPanelIsCard')) {
      return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," +
        Session.get("glassOpacity") + ") 0) top right;";
    } else {
      return "background-color: rgba(255,255,255," + Session.get("glassOpacity") +
        "); top: 50px;";
    }
  } else {
    return "background-color: rgba(255,255,255," + Session.get("glassOpacity") +
      "); top: 50px;";
  }
});
Template.registerHelper("getOpacity", function () {
  return "background-color: rgba(255,255,255," + Session.get("glassOpacity") + ");";
});
Template.registerHelper("btnPrimary", function () {
  return "background-color: " + Session.get('backgroundColorA') + "; color: #ffffff;";
});

Template.registerHelper("getNorthRule", function (argument) {
  var topDistance = 0;

  if (Session.get('showNavbars')) {
    topDistance = topDistance + 50;
  }

  if (Session.get('showSearchbar')) {
    topDistance = topDistance + 50;
  }

  // we should add spacing if the app is in card mode and in landscape mode of some sort
  // otherwise, if it's in portrait or phone mode, we want it flush with the header
  if (Session.get('mainPanelIsCard')) {
    if (Session.get('appWidth') > 768) {
      topDistance = topDistance + 50;
    }
  }

  return "top: " + topDistance + "px;";
});

//==================================================================================================

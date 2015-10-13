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
Session.setDefault('transparencyDivLeft', 0);


Meteor.startup(function () {
  Template.appLayout.layout();
});




//==================================================================================================



Template.appLayout.rendered = function () {
  Template.appLayout.layout();
  $('body').addClass('greenBackground');
};

Template.appLayout.helpers({
  resized: function () {
    Template.appLayout.layout();
  },
  getStyle: function () {
    var style = {
      left: Session.get('transparencyDivLeft') + "px;"
    };

    if (Session.get('mainPanelIsCard')) {
      if (Session.get('showNavbars')) {
        style.top = "100px;";
        style["margin-bottom"] = "100px;";
      } else {
        style.top = "50px;";
        style["margin-bottom"] = "50px;";
      }
    } else {
      if (Session.get('showNavbars')) {
        style.top = "50px;";
        style["margin-bottom"] = "50px;";
      } else {
        style.top = "0px;";
        style["margin-bottom"] = "0px;";
      }
    }
    return parseStyle(style);
  }
});


Template.appLayout.layout = function () {
  Session.set('transparencyDivHeight', $('#innerPanel').height() + 40);
  if (Session.get('appWidth') > 768) {
    Session.set('transparencyDivLeft', (Session.get('appWidth') - 768) * 0.5);
  } else {
    Session.set('transparencyDivLeft', 0);
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

//==================================================================================================



parseStyle = function (json) {
  var result = "";
  $.each(json, function (i, val) {
    result = result + i + ":" + val + " ";
  });
  return result;
};

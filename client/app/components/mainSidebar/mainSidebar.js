Template.mainSidebar.helpers({
  getLeft: function () {
    return "left: " + Session.get('sidebarLeft') + "px;";
  },
  isVisible: function (){
    if (Session.get('showSidebar')) {
      return "visibility: visible";
    } else {
      return "visibility: hidden";
    }
  }
});

Template.mainSidebar.events({
  "click li": function (event, template) {
    console.log("event", event.currentTarget.attributes["target"].value);

    $('html, body').animate({
      scrollTop: $("#" + event.currentTarget.attributes["target"].value).offset().top - 50
    }, 500);
  }
});

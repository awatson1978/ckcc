WestPanel = {
  toggle: function () {
    if ($('body').hasClass('leftSidebar')) {
      hideWestPanel();
    } else {
      showWestPanel();
    }
  },
  show: function () {
    $('body').addClass('leftSidebar');
    $('#builderPanel').addClass('active');
  },
  hide: function () {
    $('body').removeClass('leftSidebar');
    $('#builderPanel').removeClass('active');
  }
};

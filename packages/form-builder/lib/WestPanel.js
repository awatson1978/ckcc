WestPanel = {
  toggle: function () {
    if (Session.get('formBuilderPanelVisible')) {
      Session.set('formBuilderPanelVisible', false);
    } else {
      Session.set('formBuilderPanelVisible', true);
    }
  },
  show: function () {
    Session.set('formBuilderPanelVisible', true);
  },
  hide: function () {
    Session.set('formBuilderPanelVisible', false);
  }
};

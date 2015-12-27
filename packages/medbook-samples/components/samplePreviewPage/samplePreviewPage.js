Router.map(function () {
  this.route('samplePreviewPage', {
    path: '/sample/:id',
    template: 'samplePreviewPage',
    data: function () {
      return Samples.findOne({
        _id: this.params.id
      });
    },
    onAfterAction: function () {
      Template.appLayout.layout();
    }
  });
});


Template.samplePreviewPage.rendered = function () {
  Template.appLayout.layout();
};



Template.samplePreviewPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/samples');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/samples');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/samples');
  },

  "click .listButton": function (event, template) {
    Router.go('/list/samples');
  },
  "click .imageGridButton": function (event, template) {
    Router.go('/grid/samples');
  },
  "click .tableButton": function (event, template) {
    Router.go('/table/samples');
  },
  "click .indexButton": function (event, template) {
    Router.go('/list/samples');
  },
  "click .sampleId": function () {
    Router.go('/upsert/sample/' + this._id);
  }
});

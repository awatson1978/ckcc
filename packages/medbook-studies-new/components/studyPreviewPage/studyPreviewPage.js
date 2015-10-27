Router.map(function () {
  this.route('studyPreviewPage', {
    path: '/study/:id',
    template: 'studyPreviewPage',
    data: function () {
      return Studies.findOne({
        _id: this.params.id
      });
    },
    onAfterAction: function () {
      Template.appLayout.layout();
    }
  });
});


Template.studyPreviewPage.rendered = function () {
  Template.appLayout.layout();
};



Template.studyPreviewPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/studies');
  },

  "click .listButton": function (event, template) {
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template) {
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template) {
    Router.go('/table/studies');
  },
  "click .indexButton": function (event, template) {
    Router.go('/list/studies');
  },
  "click .studyId": function () {
    Router.go('/upsert/study/' + this._id);
  }
});

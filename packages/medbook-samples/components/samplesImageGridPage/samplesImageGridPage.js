Router.route("/grid/samples", {
  template: "sampleImageGridPage",
  name: "sampleImageGridPage"
});


Template.sampleImageGridPage.rendered = function () {
  Template.appLayout.delayedLayout(10);
};

Template.sampleImageGridPage.helpers({
  lists: function () {
    return Samples.find({
      title: {
        $regex: Session.get('sampleSearchFilter'),
        $options: 'i'
      }
    });
  }
});

Template.sampleImageGridPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/samples');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/samples');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/samples');
  },

  'keyup #sampleSearchInput': function () {
    Session.set('sampleSearchFilter', $('#sampleSearchInput').val());
  },
  "click .sampleImage": function (event, template) {
    Router.go('/upsert/sample/' + this._id);
  },
  "click .addNewSample": function (event, template) {
    Router.go('/insert/sample');
  }
});

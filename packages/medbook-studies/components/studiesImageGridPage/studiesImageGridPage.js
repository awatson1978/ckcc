Router.route("/grid/studies", {
  template: "studyImageGridPage",
  name: "studyImageGridPage"
});


Template.studyImageGridPage.rendered = function () {
  Template.appLayout.delayedLayout(10);
};

Template.studyImageGridPage.helpers({
  lists: function () {
    return Studies.find({
      title: {
        $regex: Session.get('studySearchFilter'),
        $options: 'i'
      }
    });
  }
});

Template.studyImageGridPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/studies');
  },

  'keyup #studySearchInput': function () {
    Session.set('studySearchFilter', $('#studySearchInput').val());
  },
  "click .studyImage": function (event, template) {
    Router.go('/upsert/study/' + this._id);
  },
  "click .addNewStudy": function (event, template) {
    Router.go('/insert/study');
  }
});

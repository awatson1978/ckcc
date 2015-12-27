Router.route("/grid/patients", {
  template: "patientImageGridPage",
  name: "patientImageGridPage"
});


Template.patientImageGridPage.rendered = function () {
  Template.appLayout.delayedLayout(10);
};

Template.patientImageGridPage.helpers({
  lists: function () {
    return Patients.find({
      title: {
        $regex: Session.get('patientSearchFilter'),
        $options: 'i'
      }
    });
  }
});

Template.patientImageGridPage.events({
  "click .listButton": function (event, template){
    Router.go('/list/patients');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/patients');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/patients');
  },

  'keyup #patientSearchInput': function () {
    Session.set('patientSearchFilter', $('#patientSearchInput').val());
  },
  "click .patientImage": function (event, template) {
    Router.go('/upsert/patient/' + this._id);
  },
  "click .addNewPatient": function (event, template) {
    Router.go('/insert/patient');
  }
});

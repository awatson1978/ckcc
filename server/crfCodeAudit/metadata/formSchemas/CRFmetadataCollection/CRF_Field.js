if (Meteor.isClient) {

  Template.CRF_Field.helpers({
    atts: function addFormControlAtts() {

      var atts = _.clone(this.atts);

      // Add bootstrap class
      atts = AutoForm.Utility.addClass(atts, "form-control");
      delete atts.datePickerOptions;

      return atts;
    },

    crf: function () {
      var crf = Session.get("CurrentDoc");
      console.log("crf", crf);
      return crf;
    }
  });

  Template.CRF_Field.onRendered( function () {
    Tracker.autorun(function () {
      var crf = Session.get("CurrentDoc");
    });
  });
}

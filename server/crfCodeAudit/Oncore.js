Oncore = new Meteor.Collection("clinical_oncore");


HTTP.methods({
  ingestOncore: function () {
    Meteor.call("ingestOncore");
    return "Ingesting Oncore Finished";
  },
  ingestClinical: function () {
    Meteor.call("ingestClinical");
    return "ingestingClinical";
  },
  propagateClinical: function () {
    Meteor.call("propagateClinical");
    return "propgatingClinical";
  }
});

Meteor.methods({
  ingestOncore: function () {
    ingestOncore();
  },
  ingestClinical: function () {
    ingestClinical();
  },

  propagateClinical: function () {
    propagateClinical();
  }
});



/**
 * @summary A very preliminary attempt to specify Clinical Meteor documentation using the Meteor JsDocs utility.
 * @locus Anywhere
 * @instancename collection
 * @class
 * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
 * @param {Object} [options]
 * @param {String} options.create Create a new patient by passing in the `patientKey`
 * @param {String} options.config Specify a config object for the patient.
 * @param {Function} options.onPublish A callback to be run when a patient is published.
 * @param {Function} options.report Publish a function.
 */

ActivePatient = function (input) {
  if (typeof input === "object") {
    this.config = input;
  } else {
    this.patientKey = input;
  }
};


ActivePatient.prototype.patientKey = undefined;
ActivePatient.prototype.config = {};
ActivePatient.prototype.state = {
  visible: false
};
ActivePatient.prototype.security = function (){};


ActivePatient.prototype.create = function (input) {
  this.patientKey = input;
  return;
};
ActivePatient.prototype.config = function (config) {
  this.config = config;
  return;
};
ActivePatient.prototype.report = function () {
  return this;
};

ActivePatient.prototype.onPublish = function (callback) {
  this.security = callback;
};
ActivePatient.prototype.publish = function () {
  return this.security();
};

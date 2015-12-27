

/**
 * @summary A very preliminary attempt to specify Clinical Meteor documentation using the Meteor JsDocs utility.
 * @locus Anywhere
 * @instancename collection
 * @class
 * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
 * @param {Object} [options]
 * @param {String} options.create Create a new sample by passing in the `sampleKey`
 * @param {String} options.config Specify a config object for the sample.
 * @param {Function} options.onPublish A callback to be run when a sample is published.
 * @param {Function} options.report Publish a function.
 */

ActiveSample = function (input) {
  if (typeof input === "object") {
    this.config = input;
  } else {
    this.sampleKey = input;
  }
};


ActiveSample.prototype.sampleKey = undefined;
ActiveSample.prototype.config = {};
ActiveSample.prototype.state = {
  visible: false
};
ActiveSample.prototype.security = function (){};


ActiveSample.prototype.create = function (input) {
  this.sampleKey = input;
  return;
};
ActiveSample.prototype.config = function (config) {
  this.config = config;
  return;
};
ActiveSample.prototype.report = function () {
  return this;
};

ActiveSample.prototype.onPublish = function (callback) {
  this.security = callback;
};
ActiveSample.prototype.publish = function () {
  return this.security();
};

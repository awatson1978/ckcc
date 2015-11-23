

/**
 * @summary A very preliminary attempt to specify Clinical Meteor documentation using the Meteor JsDocs utility.
 * @locus Anywhere
 * @instancename collection
 * @class
 * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
 * @param {Object} [options]
 * @param {String} options.create Create a new study by passing in the `studyKey`
 * @param {String} options.config Specify a config object for the study.
 * @param {Function} options.onPublish A callback to be run when a study is published.
 * @param {Function} options.report Publish a function.
 */

ActiveStudy = function (input) {
  if (typeof input === "object") {
    this.config = input;
  } else {
    this.studyKey = input;
  }
};


ActiveStudy.prototype.studyKey = undefined;
ActiveStudy.prototype.config = {};
ActiveStudy.prototype.state = {
  visible: false
};
ActiveStudy.prototype.security = function (){};


ActiveStudy.prototype.create = function (input) {
  this.studyKey = input;
  return;
};
ActiveStudy.prototype.config = function (config) {
  this.config = config;
  return;
};
ActiveStudy.prototype.report = function () {
  return this;
};

ActiveStudy.prototype.onPublish = function (callback) {
  this.security = callback;
};
ActiveStudy.prototype.publish = function () {
  return this.security();
};

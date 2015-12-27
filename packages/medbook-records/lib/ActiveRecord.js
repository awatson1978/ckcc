// ActiveRecord = {
//   recordKey: undefined,
//   config: {},
//   state: {
//     visible: false
//   }
// };


/**
 * @summary An active-record object.
 * @locus Client
 * @memberOf ActiveRecord
 * @name ActiveRecord
 * @version 1.2.3
 * @class
 * @example
 * ```html
 * ActiveLayout.getPageWidth();
 * ```
 */
ActiveRecord = function (input) {
  if (typeof input === "object") {
    this.config = input;
  } else {
    this.recordKey = input;
  }
};

ActiveRecord.prototype.recordKey = undefined;
ActiveRecord.prototype.config = {};
ActiveRecord.prototype.state = {
  visible: true
};
ActiveRecord.prototype.security = function (){};


ActiveRecord.prototype.create = function (input) {
  this.recordKey = input;
  return;
};
ActiveRecord.prototype.config = function (config) {
  this.config = config;
  return;
};
ActiveRecord.prototype.report = function () {
  return this;
};

ActiveRecord.prototype.onPublish = function (callback) {
  this.security = callback;
};
ActiveRecord.prototype.publish = function () {
  return this.security();
};

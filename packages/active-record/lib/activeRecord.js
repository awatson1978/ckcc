
// ActiveRecord = {
//   recordKey: undefined,
//   config: {},
//   state: {
//     visible: false
//   }
// };

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
  visible: false
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

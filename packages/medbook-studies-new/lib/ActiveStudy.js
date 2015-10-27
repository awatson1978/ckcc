// ActiveStudy = {
//   studyKey: undefined,
//   config: {},
//   state: {
//     visible: false
//   }
// };

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

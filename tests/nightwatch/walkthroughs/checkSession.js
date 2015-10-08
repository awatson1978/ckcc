
var sessionBar = false;
var glassOpacity = 0;
var fooVal = false;

//var expect = require('chai').expect;

module.exports = {
  "Check Session" : function (client) {
    client
      .url("http://localhost:3000")
      .resizeWindow(1024, 768)
      .pause(1000)
      .checkSession('appWidth', 1024, 5000)
      .end();
  }
};

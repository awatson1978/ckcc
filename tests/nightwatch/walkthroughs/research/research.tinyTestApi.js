var expect = require('chai').expect;


module.exports = {
  "TinyTestApi::equal()" : function (client) {
    client.url("http://localhost:3000/list/records")
      .execute( function (data){
        return TinyTestWidget.yellow();
      }, [], function (result){
        client.verify.equal(result.value, "zzz");
      });
  },
  "TinyTestApi::isTrue()" : function (client) {
    client.execute( function (data){
        return TinyTestWidget.maroon(data);
      }, [''], function (result){
        expect(result.value).to.be.true;
        expect(result.value).to.not.be.false;
        //verify.isTrue(true);
        // verify.isTrue(result.value);
      });
  },
  "TinyTestApi::isFalse()" : function (client) {
    client
      .execute(function (data){
        return TinyTestWidget.teal(data);
      }, [''], function (result){
        expect(result.value).to.be.false;
        expect(result.value).to.not.be.true;
        // verify.isFalse(result.value);
      });
  }
};

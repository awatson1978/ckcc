describe('photonic:active-record', function () {


  describe('ActiveRecord - constructor', function () {
    it.client('instantiates on client', function () {
      expect(Meteor.isClient).to.be.true;
    });
    it.server('instantiates on server', function () {
      expect(Meteor.isServer).to.be.true;
    });
  });


  describe('ActiveRecord - create', function () {
    it.client('runs only in client', function () {
      expect(Meteor.isClient).to.be.true;
    });
    it.server('runs only in server', function () {
      expect(Meteor.isServer).to.be.true;
    });
  });


  describe('ActiveRecord - report', function () {
    it.client('runs only in client', function () {
      expect(Meteor.isClient).to.be.true;
    });
    it.server('runs only in server', function () {
      expect(Meteor.isServer).to.be.true;
    });
  });


  describe('ActiveRecord - publish', function () {
    it.server('can set security function', function () {
      expect(Meteor.isServer).to.be.true;
    });
    it.server('publish runs with security function', function () {
      expect(Meteor.isServer).to.be.true;
    });
  });


});

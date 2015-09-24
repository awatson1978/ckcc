describe('clinical:json2json', function () {
  it.client('runs only in client', function () {
    expect(Meteor.isClient).to.be.true;
  });
  it.server('runs only in server', function () {
    expect(Meteor.isServer).to.be.true;
  });
});

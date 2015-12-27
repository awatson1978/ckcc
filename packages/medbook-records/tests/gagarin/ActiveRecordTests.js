
describe('clinical:active-record', function () {
  var server = meteor();
  var client = browser(server);

  before (function (){
    server.execute(function (){
      SampleSchema = new SimpleSchema({
        "name": {
          type: String,
          optional: true,
          defaultValue: "",
          label: "Name"
        },
        "description": {
          type: String,
          optional: true,
          defaultValue: "",
          label: "Description",
          autoform: {
            afFieldInput: {
              type: "textarea",
              rows: 10,
              class: "foo",
              placeholder: "Lorem ipsum..."
            }
          }
        }
      });
      Records.attachSchema(SampleSchema);
    });
  });

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('ActiveRecord should exist on the client', function () {
    return client.execute(function () {
      expect(ActiveRecord).to.exist;
    });
  });

  it('ActiveRecord should exist on the server', function () {
    return server.execute(function () {
      expect(ActiveRecord).to.exist;
    });
  });

  it("ActiveRecord is visible by default.", function () {
    return client.execute(function () {
      var activeRecord = new ActiveRecord("test");
      expect(activeRecord.recordKey).to.equal("test");
      expect(activeRecord.state.visible).to.be.true;
    });
  });

});

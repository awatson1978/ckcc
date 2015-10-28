describe('Google demo test for Mocha', function () {

  describe('with Nightwatch', function () {

    // before(function (client, done) {
    //   done();
    // });
    //
    // after(function (client, done) {
    //   client.end(function () {
    //     done();
    //   });
    // });
    //
    // afterEach(function (client, done) {
    //   done();
    // });
    //
    // beforeEach(function (client, done) {
    //   done();
    // });

    it('uses BDD to run the Google simple test', function (client) {
      client
        .url('http://localhost')
        // .verify.elementPresent("#navbarHeader")
        // .verify.elementPresent("#leftDock")
        // .verify.elementPresent("#mainPanel")
        // .verify.elementPresent("#rightDock")
        // .verify.elementPresent("#navbarFooter")
        // .verify.elementPresent("#keybindingsModal")
        // .verify.elementPresent("#userPicklistModal")
        // .verify.elementPresent("#studyPicklistModal")

        .expect.element('#mainPanel').to.be.present;
      // client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      //   .pause(1000)
      //   .assert.containsText('#main', 'Night Watch');
    });
  });
});

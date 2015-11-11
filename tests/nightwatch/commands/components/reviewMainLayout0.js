exports.command = function(username, password) {
  this
      .verify.elementPresent("body").pause(1000)

      .verify.elementPresent("#container")
      .verify.elementPresent("#sidebarMenu")

      .verify.elementPresent("#content-container")

  return this;
};

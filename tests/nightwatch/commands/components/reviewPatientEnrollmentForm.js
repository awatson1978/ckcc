exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('select[name="Study_Site"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};

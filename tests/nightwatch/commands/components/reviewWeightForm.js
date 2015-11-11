exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('select[name="Patient_ID"]')
    .verify.elementPresent('select[name="Sample_ID"]')

    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="ECOG_PS"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Weight"]')
    .verify.elementPresent('input[name="Arm"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};

/**
 * @summary An attempt to document a StarryNight helper function.  This should be .reviewPatientsImageGridPage()
 * @locus Testing
 * @function
 * @namespace ActivePatient
 * @memberOf ActivePatient
 * @name .reviewPatientImageGridPage
 * @param {string} searchString - An term to search for using the search bar.
 * @since clinical:METEOR@1.1.3
 */


exports.command = function() {
  this
    .verify.elementPresent("#patientImageGridPage")
    .verify.elementPresent("#patientSearchInput")
    .verify.elementPresent("#patientImageGrid")
    .verify.elementPresent("#addNewPatient")
  return this;
};

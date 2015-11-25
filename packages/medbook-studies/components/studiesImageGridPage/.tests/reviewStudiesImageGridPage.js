/**
 * @summary An attempt to document a StarryNight helper function.  This should be .reviewStudiesImageGridPage()
 * @locus Testing
 * @function
 * @namespace ActiveStudy
 * @memberOf ActiveStudy
 * @name .reviewStudyImageGridPage
 * @param {string} searchString - An term to search for using the search bar.
 * @since clinical:METEOR@1.1.3
 */


exports.command = function() {
  this
    .verify.elementPresent("#studyImageGridPage")
    .verify.elementPresent("#studySearchInput")
    .verify.elementPresent("#studyImageGrid")
    .verify.elementPresent("#addNewStudy")
  return this;
};

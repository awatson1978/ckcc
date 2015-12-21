/**
 * @summary An attempt to document a StarryNight helper function.  This should be .reviewSamplesImageGridPage()
 * @locus Testing
 * @function
 * @namespace ActiveSample
 * @memberOf ActiveSample
 * @name .reviewSampleImageGridPage
 * @param {string} searchString - An term to search for using the search bar.
 * @since clinical:METEOR@1.1.3
 */


exports.command = function() {
  this
    .verify.elementPresent("#sampleImageGridPage")
    .verify.elementPresent("#sampleSearchInput")
    .verify.elementPresent("#sampleImageGrid")
    .verify.elementPresent("#addNewSample")
  return this;
};

// // note: this hack will cause issues if any of your routes are expected to contain
// // the same string used in your ROOT_URL_PATH_PREFIX, e.g. if you
// // have the url http://yoursite.com/prefix/url/that/repeats/prefix/
// (function () {
//   Iron.Url._oldParse = Iron.Url.parse;
//   Iron.Url.parse = function (url) {
//     if (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX) {
//       url = url.replace(__meteor_runtime_config__.ROOT_URL_PATH_PREFIX, "");
//     }
//     return Iron.Url._oldParse(url);
//   };
// })();

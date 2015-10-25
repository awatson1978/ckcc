// // EXAMPLE 1 - registerHelper <tab>
// Template.registerHelper("getNavWidth", function (argument) {
//
// });
//
// // EXAMPLE 2 - Ctrl-D
//
// // EXAMPLE 3 - Format JS
//
//
// //---------------------------------------------------------
// // RECORD ACTIVE PATTERN
//
// Template.registerHelper('getStatusLabelText', function () {
//   if (this.active || (this.profile && this.profile.active)) {
//     return "active";
//   } else {
//     return "Inactive";
//   }
// });
// Template.registerHelper('getStatusLabelColor', function () {
//   if (this.active || (this.profile && this.profile.active)) {
//     return "label-success";
//   } else {
//     return "label-default";
//   }
// });
//
// Template.registerHelper('isAdmin', function () {
//   // this is a small security hole that a user can exploit
//   // by setting their role to something else
//   // TODO:  set user role permissions on data publications so it doesnt matter if they spoof it or not
//
//   if (Meteor.user()) {
//     if (Meteor.user().profile) {
//       // these comparisons should be soft comparisons with == rather than ===
//       // because we're comparing strings to array values, and there is a cast involved
//       if ((Meteor.user().profile.roles[0] == "Admin") || (Meteor.user().profile.roles[0] ==
//           "SysAdmin")) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return null;
//   }
// });
//
// Template.registerHelper('isRole', function (role) {
//   if (Meteor.user()) {
//     var profileRole = Meteor.user().profile.role;
//
//     if (profileRole) {
//       if (profileRole.indexOf(role) > -1) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('getCreatedAt', function () {
//   return moment(this.createdAt).format("YYYY-MM-DD hh:mm a");
// });
//
// Template.registerHelper('isLoggedIn', function () {
//   if (Meteor.userId()) {
//     return true;
//   } else {
//     return false;
//   }
// });
//
// Template.registerHelper('getApprovalIcon', function () {
//   if (this.approved) {
//     return 'fa-check';
//   } else {
//     return 'fa-inbox';
//   }
// });
//
// Template.registerHelper('getDeleteIcon', function () {
//   if (!this.deleted) {
//     return 'fa-trash-o';
//   }
// });
//
// Template.registerHelper('getLockedIcon', function () {
//   if (this.locked) {
//     return 'fa-lock';
//   } else {
//     return 'fa-unlock';
//   }
// });
//
// //===================================================
//
// Template.registerHelper('isTextBlock', function () {
//   if (this.elementType === "plaintext") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isRadioBlock', function () {
//   if (this.elementType === "radio") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isInput', function () {
//   if (this.elementType === "input") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isTextarea', function () {
//   if (this.elementType === "textarea") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isSpacer', function () {
//   if (this.elementType === "spacer") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isYesNoBlock', function () {
//   if (this.elementType === "yesno") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isSectionTitle', function () {
//   if (this.elementType === "section") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isDateTimeBlock', function () {
//   if (this.elementType === "datetime") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isTimeBlock', function () {
//   if (this.elementType === "time") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isSectionTitle', function () {
//   if (this.elementType === "section") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isMultiSelectBlock', function () {
//   if (this.elementType === "multiselect") {
//     return true;
//   } else {
//     return false;
//   }
// });
//
//
// Template.registerHelper('getSelectedActive', function () {
//   if (Session.get('item-' + this.question_id + '-multi')) {
//     if (Session.get('item-' + this.question_id + '-multi') == this.value) {
//       return "btn-info";
//     } else {
//       return "btn-default";
//     }
//   } else {
//     return "btn-default";
//   }
// });
//
// Template.registerHelper('getSelectItemValue', function () {
//   return this.value;
// });
// Template.registerHelper('getMultiSelectId', function () {
//   return this._id;
// });
// Template.registerHelper('selectItems', function () {
//   var self = this;
//   if (this.values) {
//     console.log('this.values', this.values);
//     var array = [];
//     this.values.forEach(function (object) {
//       object.question_id = self._id;
//       array.push(object);
//     });
//     return array;
//   }
// });

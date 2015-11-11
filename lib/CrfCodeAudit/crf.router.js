// Router.onBeforeAction(function () {
//   if(!Meteor.user()){
//     this.render('signin');
//   }else{
//     this.next();
//   }
//
// });
//
// Router.configure({
//   layoutTemplate: 'appBody',
//   notFoundTemplate: 'appNotFound',
//   loadingTemplate: 'appLoading',
//   waitOn: function() {
//     return [
//       Meteor.subscribe('metadata'),
//       Meteor.subscribe('studies'),
//     ];
//   }
// });
//
//
//
// Router.map(function() {
//   this.route('signin');
//
//   this.route('CRFsShow', {
//     path: '/CRF/:_study/:_crfName/',
//     onBeforeAction: function() {
//       Session.set("CurrentStudy", this.params._study);
//       Session.set("currentForm", this.params._crfName);
//       Session.set("PreferredTableOrder", personalPreferredTableOrder());
//
//       console.log("query params", this.params.query);
//       if (this.params.query && 'q' in this.params.query)
//           Session.set("CRF_filter", this.params.query.q)
//
//       if (Meteor.userId()) {
//         var data = Iron.Location.get().path;
//         if (data)
//             Meteor.users.update(Meteor.userId(), {$set: {"profile.lastCRFroute": data}});
//       }
//       this.next();
//     },
//     waitOn: function() {
//       return [
// 	  Meteor.subscribe('metadata'),
// 	  Meteor.subscribe('studies'),
// 	  Meteor.subscribe('myForms', this.params._crfName, currentStudy())
//       ];
//     },
//     data: function() {
//       return this.params;
//     }
//   });
//
//   this.route('pleaseSelectStudy', {
//     path: '/CRF/',
//     onBeforeAction: function() {
//        var lastCRFroute = Meteor.user().profile.lastCRFroute;
//        if (lastCRFroute)
//           Router.go(lastCRFroute);
//       this.next();
//
//     }
//   });
//
//   this.route('dashboard', {
//     path: '/CRF/:_study',
//     onBeforeAction: function() {
//       Session.set("CurrentStudy", this.params._study);
//       this.next();
//     },
//   });
// });
//
// if (Meteor.isClient) {
//   Router.onBeforeAction('loading', {except: ['join', 'signin']});
//   Router.onBeforeAction('dataNotFound', {except: ['join', 'signin']});
// }

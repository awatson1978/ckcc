

Router.route("/myprofile", {
  name:"userProfileRoute",
  template:"userProfile"
});

Template.userProfile.helpers({
  'change #avatarImgSrcInput': function (){
    Session.set('avatarImgSrc', $('#avatarImgSrcInput').val());
  },
});

Template.userProfile.events({
  "click #elementId": function (event, template){

  }
});

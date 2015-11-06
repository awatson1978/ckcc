Session.setDefault('studyReadOnly', true);


Router.map(function (){
  this.route('newStudies.Route', {
    path: '/insert/study',
    template: 'studyUpsertPage',
    onAfterAction: function (){
      Session.set('studyReadOnly', false);
    },
    yieldTemplates: {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'studyter'
      },
      'mainSidebar': {
        to: 'sidebar'
      },
      'studyUpsertPage': {
        to: 'secondPage'
      },
      'insertStudyActionButtons': {
        to: 'footerActionElements'
      }
    }
  });

});


Router.route('/upsert/study/:id', {
  name: 'upsertStudies.Route',
  template: 'studyUpsertPage',
  data: function (){
    return Studies.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('studyReadOnly', false);
  }
});
Router.route('/view/study/:id', {
  name: 'viewStudies.Route',
  template: 'studyUpsertPage',
  data: function (){
    return Studies.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('studyReadOnly', true);
  }
});


//-------------------------------------------------------------


Template.studyUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.studyUpsertPage.helpers({
  isNewStudy: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('studyReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('studyReadOnly')){
      return "readonly";
    }
  },
  getStudyId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.studyUpsertPage.events({
  'click input': function (event, template){
    console.log('event.currentTarget', event.currentTarget);
    console.log('event.currentTarget.name', event.currentTarget.name);
    console.log('event.currentTarget.name.indexOf("Questionnaires")', event.currentTarget.name.indexOf("Questionnaires"));

    // This may seem hacky, but we need to do it to handle array inputs
    // I wouldn't go so far as to say it's elegant, but don't mistake it for a kludge or a hack.
    // It's actualy doing pretty much exactly what it needs to do
    // in about as concise a way possible, given the constraints of the array inputs
    if (event.currentTarget.name.indexOf("Questionnaires") > -1) {
      //console.log('event.currentTarget.name.indexOf("Questionnaires")', event.currentTarget.name.indexOf("Questionnaires"));

      Session.set('selectedInputNameForMetadataPicklist', event.currentTarget.name);
      Session.set('selectedInputIdForMetadataPicklist', event.currentTarget.id);
      Session.set('metadataModalSearchFilter', "");
      Session.get('selectedMetadataId', null);

      Session.set('showReactiveOverlay', true);
      Session.set('showMetadataPicklist', true);
    }
  },
  'click #removeStudyButton': function (){
    Studies.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/studies');
      }
    });
  },
  "click #saveStudyButton": function (event, template){
    event.preventDefault();
    Template.studyUpsertPage.saveStudy(false, this);
    Session.set('studyReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('studyReadOnly')
    if (Session.equals('studyReadOnly', true)){
      Session.set('studyReadOnly', false);
    } else {
      Session.set('studyReadOnly', true);
      console.log('Locking the study...');
      Template.studyUpsertPage.saveStudy(false, this);
    }
  },
  "click #lockStudies.Button": function (){
    console.log("click #lockStudies.Button");

    if (Session.equals('studyReadOnly', true)){
      Session.set('studyReadOnly', false);
    } else {
      Session.set('studyReadOnly', true);
    }
  },
  "click .listButton": function (event, template){
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/studies');
  },
  'click #previewStudies.Button':function (){
    Router.go('/customer/' + this._id);
  }
  // 'submit #saveStudyButton': function () {
  //   console.log('creating new study...');
  //   Template.studyUpsertPage.saveStudies.(false, this);
  // }
});


Template.studyUpsertPage.saveStudy = function (study, questionnaire){

  console.log("Template.studyUpsertPage.saveStudies.", questionnaire);
  // TODO:  add validation functions

  var newStudy = {};
  var inputElements = $('#studyUpsertPage input');
  var textareaElements = $('#studyUpsertPage textarea');

  console.log('inputElements', inputElements);
  console.log('textareaElements', textareaElements);

  for (var i = 0; i < inputElements.length; i++) {
    newStudy[inputElements[i].name] = inputElements[i].value;
  }
  for (var i = 0; i < textareaElements.length; i++) {
    newStudy[textareaElements[i].name] = textareaElements[i].value;
  }

  newStudy.createdAt = new Date();
  newStudy.questionnaireId = questionnaire._id;

  console.log ("newStudy", newStudy);


  if (study._id){
    Studies.update({_id: study._id}, {$set: newStudy }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/study/' + study._id);
    });
  } else {
    Studies.insert(newStudy, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/list/studies');
      //Router.go('/view/study/' + result);
    });
  }
};

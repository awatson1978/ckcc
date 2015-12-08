Session.setDefault('studyReadOnly', true);
Session.setDefault('activeStudyId', false);

Router.route('/insert/study', {
  name: 'newStudyRoute',
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
    '': {
      to: 'secondPage'
    },
    'insertStudyActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/upsert/study/:studyId', {
  name: 'upsertStudyRoute',
  template: 'studyUpsertPage',
  data: function (){
    var activeStudy = Studies.findOne(this.params.studyId);
    Session.set('activeStudyId', activeStudy._id);
    return activeStudy;
  },
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
    '': {
      to: 'secondPage'
    },
    'insertStudyActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/view/study/:studyId', {
  name: 'viewStudies.Route',
  template: 'studyUpsertPage',
  data: function (){
    var activeStudy = Studies.findOne(this.params.studyId);
    Session.set('activeStudyId', activeStudy._id);
    return activeStudy;
  },
  onAfterAction: function (){
    Session.set('studyReadOnly', true);
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
    '': {
      to: 'secondPage'
    },
    'insertStudyActionButtons': {
      to: 'footerActionElements'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'metadataPicklistModal': {
      to: 'metadataPicklistModal'
    }
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
    Template.studyUpsertPage.saveStudy(this, false);
    Session.set('studyReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('studyReadOnly')
    if (Session.equals('studyReadOnly', true)){
      Session.set('studyReadOnly', false);
    } else {
      Session.set('studyReadOnly', true);
      console.log('Locking the study...');
      Template.studyUpsertPage.saveStudy(this, false);
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


Template.studyUpsertPage.saveStudy = function (activeStudyId){
  console.log("Template.studyUpsertPage.saveStudies()", activeStudyId);

  var newStudy = {};

  var inputElements = $('#studyUpsertPage .form-group input');
  for (var i = 0; i < inputElements.length; i++) {
    //console.log('inputElements[i]', inputElements[i]);
    // console.log("inputElements[i].id", inputElements[i].id);
    //console.log("inputElements[i].value", inputElements[i].value);

    // don't use the input's name as it's data-schema-key if it's using dotted notation
    if (inputElements[i].name.indexOf('.') === -1) {
      newStudy[inputElements[i].name] = inputElements[i].value;
    } else {
      // drat, it's in dotted notation, so it's going to be a pain

      // lets start by grabbing the fieldname
      var fieldName = inputElements[i].name.split('.')[0];
      console.log('fieldName', fieldName);

      // it's an array, so if the fieldName doesn't exist, create an empty array
      if (newStudy[fieldName]) {
        newStudy[fieldName].push(inputElements[i].value);
      } else {
        newStudy[fieldName] = [];
        newStudy[fieldName].push(inputElements[i].value);
      }

      // and now we have to push the new values onto the stack
    }
  }
  console.log ("newStudy", newStudy);

  var textareaElements = $('#studyUpsertPage .form-group textarea');
  for (var i = 0; i < textareaElements.length; i++) {
    newStudy[textareaElements[i].name] = textareaElements[i].value;
  }

  // the initial parse of the checkboxes is going to put text strings where a boolean should be
  // so we need to make sure we rescan the checkboxes and put proper booleans in place
  var checkboxElements = $('#studyUpsertPage .form-group input[type="checkbox"]');
  for (var i = 0; i < checkboxElements.length; i++) {
    newStudy[checkboxElements[i].name] = checkboxElements[i].checked;
  }

  // // // we now need to get the array items
  // var inputElements = $('#studyUpsertPage .form-group input');
  // var
  // for (var i = 0; i < inputElements.length; i++) {
  //   // check if the name is using dotted notation, indicating that it's storing a value that should go into an array
  //   if (inputElements[i].name.indexOf('.') > -1) {
  //
  //     // grab the fieldName
  //     var fieldName = inputElements[i].name.split('.')[0];
  //
  //     // if the fieldName is undefined, create a default array
  //     if (typeof newStudy[fieldName] === undefined) {
  //       newStudy[fieldName] = [];
  //     }
  //
  //     // push the new value onto the array
  //     newStudy[fieldName].push(inputElements[i].value);
  //     // newStudy[fieldName].push(inputElements[i].name.split('.')[1])
  //
  //   }
  // }

  console.log('inputElements', inputElements);
  // console.log('textareaElements', textareaElements);
  // console.log('checkboxElements', checkboxElements);



  newStudy.createdAt = new Date();
  //newStudy.questionnaireId = questionnaire._id;

  console.log ("newStudy", newStudy);


  if (activeStudyId){
    Studies.update({_id: activeStudyId}, {$set: newStudy }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/study/' + activeStudyId);
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

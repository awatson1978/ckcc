Session.setDefault('sampleReadOnly', true);
Session.setDefault('activeSampleId', false);

Router.route('/insert/sample', {
  name: 'newSampleRoute',
  template: 'sampleUpsertPage',
  onAfterAction: function (){
    Session.set('sampleReadOnly', false);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'sampleter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertSampleActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/upsert/sample/:sampleId', {
  name: 'upsertSampleRoute',
  template: 'sampleUpsertPage',
  data: function (){
    var activeSample = Samples.findOne(this.params.sampleId);
    Session.set('activeSampleId', activeSample._id);
    return activeSample;
  },
  onAfterAction: function (){
    Session.set('sampleReadOnly', false);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'sampleter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertSampleActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/view/sample/:sampleId', {
  name: 'viewSamples.Route',
  template: 'sampleUpsertPage',
  data: function (){
    var activeSample = Samples.findOne(this.params.sampleId);
    Session.set('activeSampleId', activeSample._id);
    return activeSample;
  },
  onAfterAction: function (){
    Session.set('sampleReadOnly', true);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'sampleter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertSampleActionButtons': {
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


Template.sampleUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.sampleUpsertPage.helpers({
  isNewSample: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('sampleReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('sampleReadOnly')){
      return "readonly";
    }
  },
  getSampleId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.sampleUpsertPage.events({
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
  'click #removeSampleButton': function (){
    Samples.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/samples');
      }
    });
  },
  "click #saveSampleButton": function (event, template){
    event.preventDefault();
    Template.sampleUpsertPage.saveSample(this, false);
    Session.set('sampleReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('sampleReadOnly')
    if (Session.equals('sampleReadOnly', true)){
      Session.set('sampleReadOnly', false);
    } else {
      Session.set('sampleReadOnly', true);
      console.log('Locking the sample...');
      Template.sampleUpsertPage.saveSample(this, false);
    }
  },
  "click #lockSamples.Button": function (){
    console.log("click #lockSamples.Button");

    if (Session.equals('sampleReadOnly', true)){
      Session.set('sampleReadOnly', false);
    } else {
      Session.set('sampleReadOnly', true);
    }
  },
  "click .listButton": function (event, template){
    Router.go('/list/samples');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/samples');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/samples');
  },
  'click #previewSamples.Button':function (){
    Router.go('/customer/' + this._id);
  }
  // 'submit #saveSampleButton': function () {
  //   console.log('creating new sample...');
  //   Template.sampleUpsertPage.saveSamples.(false, this);
  // }
});


Template.sampleUpsertPage.saveSample = function (activeSampleId){
  console.log("Template.sampleUpsertPage.saveSamples()", activeSampleId);

  var newSample = {};

  var inputElements = $('#sampleUpsertPage .form-group input');
  for (var i = 0; i < inputElements.length; i++) {
    //console.log('inputElements[i]', inputElements[i]);
    // console.log("inputElements[i].id", inputElements[i].id);
    //console.log("inputElements[i].value", inputElements[i].value);

    // don't use the input's name as it's data-schema-key if it's using dotted notation
    if (inputElements[i].name.indexOf('.') === -1) {
      newSample[inputElements[i].name] = inputElements[i].value;
    } else {
      // drat, it's in dotted notation, so it's going to be a pain

      // lets start by grabbing the fieldname
      var fieldName = inputElements[i].name.split('.')[0];
      console.log('fieldName', fieldName);

      // it's an array, so if the fieldName doesn't exist, create an empty array
      if (newSample[fieldName]) {
        newSample[fieldName].push(inputElements[i].value);
      } else {
        newSample[fieldName] = [];
        newSample[fieldName].push(inputElements[i].value);
      }

      // and now we have to push the new values onto the stack
    }
  }
  console.log ("newSample", newSample);

  var textareaElements = $('#sampleUpsertPage .form-group textarea');
  for (var i = 0; i < textareaElements.length; i++) {
    newSample[textareaElements[i].name] = textareaElements[i].value;
  }

  // the initial parse of the checkboxes is going to put text strings where a boolean should be
  // so we need to make sure we rescan the checkboxes and put proper booleans in place
  var checkboxElements = $('#sampleUpsertPage .form-group input[type="checkbox"]');
  for (var i = 0; i < checkboxElements.length; i++) {
    newSample[checkboxElements[i].name] = checkboxElements[i].checked;
  }

  // // // we now need to get the array items
  // var inputElements = $('#sampleUpsertPage .form-group input');
  // var
  // for (var i = 0; i < inputElements.length; i++) {
  //   // check if the name is using dotted notation, indicating that it's storing a value that should go into an array
  //   if (inputElements[i].name.indexOf('.') > -1) {
  //
  //     // grab the fieldName
  //     var fieldName = inputElements[i].name.split('.')[0];
  //
  //     // if the fieldName is undefined, create a default array
  //     if (typeof newSample[fieldName] === undefined) {
  //       newSample[fieldName] = [];
  //     }
  //
  //     // push the new value onto the array
  //     newSample[fieldName].push(inputElements[i].value);
  //     // newSample[fieldName].push(inputElements[i].name.split('.')[1])
  //
  //   }
  // }

  console.log('inputElements', inputElements);
  // console.log('textareaElements', textareaElements);
  // console.log('checkboxElements', checkboxElements);



  newSample.createdAt = new Date();
  //newSample.questionnaireId = questionnaire._id;

  console.log ("newSample", newSample);


  if (activeSampleId){
    Samples.update({_id: activeSampleId}, {$set: newSample }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/sample/' + activeSampleId);
    });
  } else {
    Samples.insert(newSample, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/list/samples');
      //Router.go('/view/sample/' + result);
    });
  }
};

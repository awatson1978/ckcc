Session.setDefault('patientReadOnly', true);
Session.setDefault('activePatientId', false);

Router.route('/insert/patient', {
  name: 'newPatientRoute',
  template: 'patientUpsertPage',
  onAfterAction: function (){
    Session.set('patientReadOnly', false);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'patientter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertPatientActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/upsert/patient/:patientId', {
  name: 'upsertPatientRoute',
  template: 'patientUpsertPage',
  data: function (){
    var activePatient = Patients.findOne(this.params.patientId);
    Session.set('activePatientId', activePatient._id);
    return activePatient;
  },
  onAfterAction: function (){
    Session.set('patientReadOnly', false);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'patientter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertPatientActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/view/patient/:patientId', {
  name: 'viewPatients.Route',
  template: 'patientUpsertPage',
  data: function (){
    var activePatient = Patients.findOne(this.params.patientId);
    Session.set('activePatientId', activePatient._id);
    return activePatient;
  },
  onAfterAction: function (){
    Session.set('patientReadOnly', true);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'patientter'
    },
    'mainSidebar': {
      to: 'sidebar'
    },
    '': {
      to: 'secondPage'
    },
    'insertPatientActionButtons': {
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


Template.patientUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.patientUpsertPage.helpers({
  isNewPatient: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('patientReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('patientReadOnly')){
      return "readonly";
    }
  },
  getPatientId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.patientUpsertPage.events({
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
  'click #removePatientButton': function (){
    Patients.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/patients');
      }
    });
  },
  "click #savePatientButton": function (event, template){
    event.preventDefault();
    Template.patientUpsertPage.savePatient(this, false);
    Session.set('patientReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('patientReadOnly')
    if (Session.equals('patientReadOnly', true)){
      Session.set('patientReadOnly', false);
    } else {
      Session.set('patientReadOnly', true);
      console.log('Locking the patient...');
      Template.patientUpsertPage.savePatient(this, false);
    }
  },
  "click #lockPatients.Button": function (){
    console.log("click #lockPatients.Button");

    if (Session.equals('patientReadOnly', true)){
      Session.set('patientReadOnly', false);
    } else {
      Session.set('patientReadOnly', true);
    }
  },
  "click .listButton": function (event, template){
    Router.go('/list/patients');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/patients');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/patients');
  },
  'click #previewPatients.Button':function (){
    Router.go('/customer/' + this._id);
  }
  // 'submit #savePatientButton': function () {
  //   console.log('creating new patient...');
  //   Template.patientUpsertPage.savePatients.(false, this);
  // }
});


Template.patientUpsertPage.savePatient = function (activePatientId){
  console.log("Template.patientUpsertPage.savePatients()", activePatientId);

  var newPatient = {};

  var inputElements = $('#patientUpsertPage .form-group input');
  for (var i = 0; i < inputElements.length; i++) {
    //console.log('inputElements[i]', inputElements[i]);
    // console.log("inputElements[i].id", inputElements[i].id);
    //console.log("inputElements[i].value", inputElements[i].value);

    // don't use the input's name as it's data-schema-key if it's using dotted notation
    if (inputElements[i].name.indexOf('.') === -1) {
      newPatient[inputElements[i].name] = inputElements[i].value;
    } else {
      // drat, it's in dotted notation, so it's going to be a pain

      // lets start by grabbing the fieldname
      var fieldName = inputElements[i].name.split('.')[0];
      console.log('fieldName', fieldName);

      // it's an array, so if the fieldName doesn't exist, create an empty array
      if (newPatient[fieldName]) {
        newPatient[fieldName].push(inputElements[i].value);
      } else {
        newPatient[fieldName] = [];
        newPatient[fieldName].push(inputElements[i].value);
      }

      // and now we have to push the new values onto the stack
    }
  }
  console.log ("newPatient", newPatient);

  var textareaElements = $('#patientUpsertPage .form-group textarea');
  for (var i = 0; i < textareaElements.length; i++) {
    newPatient[textareaElements[i].name] = textareaElements[i].value;
  }

  // the initial parse of the checkboxes is going to put text strings where a boolean should be
  // so we need to make sure we rescan the checkboxes and put proper booleans in place
  var checkboxElements = $('#patientUpsertPage .form-group input[type="checkbox"]');
  for (var i = 0; i < checkboxElements.length; i++) {
    newPatient[checkboxElements[i].name] = checkboxElements[i].checked;
  }

  // // // we now need to get the array items
  // var inputElements = $('#patientUpsertPage .form-group input');
  // var
  // for (var i = 0; i < inputElements.length; i++) {
  //   // check if the name is using dotted notation, indicating that it's storing a value that should go into an array
  //   if (inputElements[i].name.indexOf('.') > -1) {
  //
  //     // grab the fieldName
  //     var fieldName = inputElements[i].name.split('.')[0];
  //
  //     // if the fieldName is undefined, create a default array
  //     if (typeof newPatient[fieldName] === undefined) {
  //       newPatient[fieldName] = [];
  //     }
  //
  //     // push the new value onto the array
  //     newPatient[fieldName].push(inputElements[i].value);
  //     // newPatient[fieldName].push(inputElements[i].name.split('.')[1])
  //
  //   }
  // }

  console.log('inputElements', inputElements);
  // console.log('textareaElements', textareaElements);
  // console.log('checkboxElements', checkboxElements);



  newPatient.createdAt = new Date();
  //newPatient.questionnaireId = questionnaire._id;

  console.log ("newPatient", newPatient);


  if (activePatientId){
    Patients.update({_id: activePatientId}, {$set: newPatient }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/patient/' + activePatientId);
    });
  } else {
    Patients.insert(newPatient, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/list/patients');
      //Router.go('/view/patient/' + result);
    });
  }
};

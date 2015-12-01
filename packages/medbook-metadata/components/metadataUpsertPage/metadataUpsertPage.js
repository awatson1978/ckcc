Session.setDefault('metadataReadOnly', true);
Session.setDefault('activeMetadataId', false);


Router.route('/build/metadata', {
  name: 'buildMetadataRoute',
  template: 'metadataUpsertPage'
});

Router.route('/insert/metadata', {
  name: 'insertMetadataRoute',
  template: 'metadataUpsertPage'
});

Router.route('/upsert/metadata/:metadataId', {
  name: 'upsertMetadataRoute',
  template: 'metadataUpsertPage',
  data: function (){
    var formSchema = Metadata.findOne({_id: this.params.metadataId});
    if (formSchema) {
      Session.set('activeMetadataId', formSchema._id);
      Session.set('activeMetadata', formSchema);
      Session.set('pageTitle', formSchema.commonName);
      return formSchema;
    }
  },
  onAfterAction: function (){
    Session.set('metadataReadOnly', false);
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'metadataActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/view/metadata/:metadataId', {
  name: 'viewMetadataRoute',
  template: 'metadataUpsertPage',
  data: function (){
    var formSchema = Metadata.findOne({_id: this.params.metadataId});
    if (formSchema) {
      Session.set('activeMetadataId', formSchema._id);
      Session.set('activeMetadata', formSchema);
      Session.set('pageTitle', formSchema.commonName);
      return formSchema;
    }
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'metadataActionButtons': {
      to: 'footerActionElements'
    }
  }
});

Router.route('/metadata/:metadataId/new', {
  name: 'metadataUpsertForTemplate',
  template: 'metadataUpsertPage',
  data: function (){
    var formSchema = Metadata.findOne({_id: this.params.metadataId});
    if (formSchema) {
      Session.set('activeMetadataId', formSchema._id);
      Session.set('activeMetadata', formSchema);
      Session.set('pageTitle', formSchema.commonName);
      return formSchema;
    }
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'navbarFooter': {
      to: 'footer'
    },
    'metadataActionButtons': {
      to: 'footerActionElements'
    }
  }
});


//-------------------------------------------------------------


Template.metadataUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.metadataUpsertPage.helpers({
  getSelectButtonOptions: function (){
    console.log('getSelectButtonOptions', this);
    return this.allowedValues;
  },
  getCurrentSchema: function (){
    console.log('Template.metadataUpsertPage.getCurrentSchema', this);

    if (this) {
      console.log('currentRecord', this);

      var questionnaireMetadata = Metadata.findOne({_id: this._id});
      console.log('currentDehydratedSchema', questionnaireMetadata);

      if (questionnaireMetadata) {
        if (questionnaireMetadata) {
          console.log('SchemaHydrator.hydrate(questionnaireMetadata.schema)', SchemaHydrator.hydrate(questionnaireMetadata));
          return SchemaHydrator.hydrate(questionnaireMetadata);
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  isNewQuestionnaire: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('metadataReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('metadataReadOnly')){
      return "readonly";
    }
  },
  getQuestionnaireId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.metadataUpsertPage.events({
  'click input[name="Patient_ID"]': function (){
    //Session.set('errorMessage', "Patient picklist not implemented yet.");
    //Session.set('showPatientPicklist', true);
    Session.set('showReactiveOverlay', true);
    Session.set('show_users_picklist', true);
  },
  'click input[name="collaborationName"]': function (){
    Session.set('showReactiveOverlay', true);
    Session.set('showCollaborationPicklist', true);
  },
  'click input[name="collaborationId"]': function (){
    Session.set('showReactiveOverlay', true);
    Session.set('showCollaborationPicklist', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('metadataReadOnly')
    if (Session.equals('metadataReadOnly', true)){
      Session.set('metadataReadOnly', false);
    } else {
      Session.set('metadataReadOnly', true);
      console.log('Locking the metadata...');
      Template.metadataUpsertPage.saveQuestionnaireData(this, false);
    }
  },
  "click #lockQuestionnaireButton": function (){
    console.log("click #lockQuestionnaireButton");

    if (Session.equals('metadataReadOnly', true)){
      Session.set('metadataReadOnly', false);
    } else {
      Session.set('metadataReadOnly', true);
    }
  },
  "click .listButton": function (event, template){
    Router.go('/list/metadatas');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/metadatas');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/metadatas');
  },
  'click #previewQuestionnaireButton':function (){
    Router.go('/customer/' + this._id);
  },
  'submit #upsertQuestionnaireForm': function () {
    console.log('creating new metadata...');
    //Template.metadataUpsertPage.saveQuestionnaireData(this);
  }
});


Template.metadataUpsertPage.saveQuestionnaireData = function (metadata, record){
  console.log('Template.metadataUpsertPage.saveQuestionnaireData', metadata);

  var newRecord = {};
  var inputElements = $('#newQuestionnaireForm input');
  var textareaElements = $('#newQuestionnaireForm textarea');
  var selectElements = $('#newQuestionnaireForm select');

  console.log('inputElements', inputElements);
  console.log('textareaElements', textareaElements);
  console.log('selectElements', selectElements);

  for (var i = 0; i < inputElements.length; i++) {
    newRecord[inputElements[i].name] = inputElements[i].value;
  }
  for (var i = 0; i < textareaElements.length; i++) {
    newRecord[textareaElements[i].name] = textareaElements[i].value;
  }
  for (var i = 0; i < selectElements.length; i++) {
    newRecord[selectElements[i].name] = selectElements[i].value;
  }

  newRecord.createdAt = new Date();

  if (metadata) {
    newRecord.questionnaireId = metadata._id;
    newRecord.questionnaireName = metadata.commonName;
  }

  console.log ("newRecord", newRecord);


  if (record._id){
    Records.update({_id: record._id}, {$set: newRecord }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/record/' + record._id);
    });
  } else {
    Records.insert(newRecord, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/list/records');
    });
  }
};

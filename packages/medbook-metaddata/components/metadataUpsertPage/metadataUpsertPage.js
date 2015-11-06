Session.setDefault('metadataReadOnly', true);



Router.route('/build/metadata', {
  name: 'buildMetadataRoute',
  template: 'metadataUpsertPage'
});

Router.route('/insert/metadata', {
  name: 'insertMetadataRoute',
  template: 'metadataUpsertPage'
});

Router.route('/upsert/metadata/:id', {
  name: 'upsertMetadataRoute',
  template: 'metadataUpsertPage',
  data: function (){
    return Metadata.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('metadataReadOnly', false);
  }
});
Router.route('/view/metadata/:id', {
  name: 'viewMetadataRoute',
  template: 'metadataUpsertPage',
  data: function (){
    return Metadata.findOne(this.params.id);
  }
});

//-------------------------------------------------------------


Template.metadataUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.metadataUpsertPage.helpers({

  getCurrentSchema: function (){
    console.log('Template.metadataUpsertPage.getCurrentSchema');

    if (this) {
      console.log('currentRecord', this);

      var questionnaireMetadata = Metadata.findOne({_id: this.name});
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
    Session.set('show_reactive_overlay', true);
    Session.set('show_users_picklist', true);
  },
  'click input[name="collaborationName"]': function (){
    Session.set('show_reactive_overlay', true);
    Session.set('showCollaborationPicklist', true);
  },
  'click input[name="collaborationId"]': function (){
    Session.set('show_reactive_overlay', true);
    Session.set('showCollaborationPicklist', true);
  },
  'click #removeQuestionnaireButton': function (){
    Metadata.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/metadatas');
      }
    });
  },
  "click #saveQuestionnaireButton": function (event, template){
    event.preventDefault();
    Template.metadataUpsertPage.saveQuestionnaire(this, false);
    Session.set('metadataReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('metadataReadOnly')
    if (Session.equals('metadataReadOnly', true)){
      Session.set('metadataReadOnly', false);
    } else {
      Session.set('metadataReadOnly', true);
      console.log('Locking the metadata...');
      Template.metadataUpsertPage.saveQuestionnaire(this, false);
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
    //Template.metadataUpsertPage.saveQuestionnaire(this);
  }
});


Template.metadataUpsertPage.saveQuestionnaire = function (metadata, record){
  console.log('Template.metadataUpsertPage.saveQuestionnaire', metadata);

  var newRecord = {};
  var inputElements = $('#newQuestionnaireForm input');
  var textareaElements = $('#newQuestionnaireForm textarea');

  console.log('inputElements', inputElements);
  console.log('textareaElements', textareaElements);

  for (var i = 0; i < inputElements.length; i++) {
    newRecord[inputElements[i].name] = inputElements[i].value;
  }
  for (var i = 0; i < textareaElements.length; i++) {
    newRecord[textareaElements[i].name] = textareaElements[i].value;
  }

  newRecord.createdAt = new Date();
  newRecord.questionnaireId = metadata._id;

  console.log ("newRecord", newRecord);


  if (record._id){
    Records.update({_id: record._id}, {$set: newRecord }, function (error, result){
      if (error) console.log(error);
      Router.go('/view/record/' + record._id);
    });
  } else {
    Records.insert(newRecord, function (error, result){
      if (error) console.log(error);
      Router.go('/list/records');
    });
  }


  // var newQuestionnaire = {
  //   metadataName: $('input[name="metadataName"]').val(),
  //   institutionName: $('input[name="institutionName"]').val(),
  //   institutionId: $('input[name="institutionId"]').val(),
  //   collaborationName: $('input[name="collaborationName"]').val(),
  //   collaborationId: $('input[name="collaborationId"]').val(),
  //   slug: $('input[name="slug"]').val()
  // };
  //
  // var inputElements = $('input');
  //
  // var newRecord = {};
  //
  // inputElements.forEach(function (input){
  //
  // });
  //
  // //process.env.DEBUG && console.log ("newQuestionnaire", newQuestionnaire);
  //
  // if (metadata._id){
  //   Metadata.update({_id: metadata._id}, {$set: newQuestionnaire }, function (error, result){
  //     if (error) console.log(error);
  //     Router.go('/view/metadata/' + metadata._id);
  //   });
  // } else {
  //   Metadata.insert(newQuestionnaire, function (error, result){
  //     if (error) console.log(error);
  //     Router.go('/list/metadatas/');
  //     //Router.go('/view/metadata/' + result);
  //   });
  // }
};

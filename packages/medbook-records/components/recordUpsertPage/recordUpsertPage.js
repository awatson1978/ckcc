Session.setDefault('recordReadOnly', true);



Router.route('/insert/record', {
  name: 'newRecordsRoute',
  template: 'recordUpsertPage',
  data: function (){
    return Records.findOne(this.params.id);
  }
});
Router.route('/upsert/record/:id', {
  name: 'upsertRecordsRoute',
  template: 'recordUpsertPage',
  data: function (){
    return Records.findOne(this.params.id);
  }
});
Router.route('/view/record/:id', {
  name: 'viewRecordsRoute',
  template: 'recordUpsertPage',
  data: function (){
    return Records.findOne(this.params.id);
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


Template.recordUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.recordUpsertPage.helpers({
  getCurrentSchema: function (){
    console.log('Template.recordUpsertPage.getCurrentSchema');

    if (this && this.questionnaireId) {
      console.log('this.questionnaireId', this.questionnaireId);

      var questionnaireMetadata = Metadata.findOne({_id: this.questionnaireId});
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
  getFormName: function () {
    return this.CRF;
  },
  // getCurrentSchema: function (){
  //   console.log('Template.recordUpsertPage.getCurrentSchema');
  //
  //   if (this) {
  //     console.log('currentRecord', this);
  //
  //     var questionnaireMetadata = Metadata.findOne({_id: this.CRF});
  //     console.log('currentDehydratedSchema', questionnaireMetadata);
  //
  //     if (questionnaireMetadata) {
  //       if (questionnaireMetadata) {
  //         console.log('SchemaHydrator.hydrate(questionnaireMetadata.schema)', SchemaHydrator.hydrate(questionnaireMetadata));
  //         return SchemaHydrator.hydrate(questionnaireMetadata);
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // },
  isNewRecord: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('recordReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('recordReadOnly')){
      return "readonly";
    }
  },
  getRecordId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.recordUpsertPage.events({
  'click #removeRecordButton': function (){
    Records.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/records');
      }
    });
  },
  "click #saveRecordButton": function (event, template){
    event.preventDefault();
    Template.recordUpsertPage.saveRecord(false, this);
    Session.set('recordReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('recordReadOnly')
    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
      console.log('Locking the record...');
      Template.recordUpsertPage.saveRecord(false, this);
    }
  },
  "click #lockRecords.Button": function (){
    console.log("click #lockRecords.Button");

    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
    }
  },
});


Template.recordUpsertPage.saveRecord = function (record, metadata){

  console.log("Template.recordUpsertPage.saveRecords.", metadata);
  // TODO:  add validation functions

  var newRecord = {};
  var inputElements = $('#recordUpsertPage input');
  var textareaElements = $('#recordUpsertPage textarea');

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
  newRecord.questionnaireName = metadata.commonName;

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

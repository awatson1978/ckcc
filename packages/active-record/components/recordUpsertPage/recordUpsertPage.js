Session.setDefault('recordReadOnly', true);


Router.map(function (){
  this.route('newFooRoute', {
    path: '/insert/foo',
    template: 'recordUpsertPage',
    onAfterAction: function (){
      Session.set('recordReadOnly', false);
    }
  });

});
Router.route('/upsert/foo/:id', {
  name: 'upsertFooRoute',
  template: 'recordUpsertPage',
  data: function (){
    return Foo.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('recordReadOnly', false);
  }
});
Router.route('/view/foo/:id', {
  name: 'viewFooRoute',
  template: 'recordUpsertPage',
  data: function (){
    return Foo.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('recordReadOnly', true);
  }
});


//-------------------------------------------------------------


Template.recordUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.recordUpsertPage.helpers({
  isNewFoo: function (){
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
    Foo.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/foos');
      }
    });
  },
  "click #saveRecordButton": function (event, template){
    event.preventDefault();
    Template.recordUpsertPage.saveFoo(this);
    Session.set('recordReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('recordReadOnly')
    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
      console.log('Locking the record...');
      Template.recordUpsertPage.saveFoo(this);
    }
  },
  "click #lockFooButton": function (){
    console.log("click #lockFooButton");

    if (Session.equals('recordReadOnly', true)){
      Session.set('recordReadOnly', false);
    } else {
      Session.set('recordReadOnly', true);
    }
  },
  "click .listButton": function (event, template){
    Router.go('/list/foos');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/foos');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/foos');
  },
  'click #previewFooButton':function (){
    Router.go('/customer/' + this._id);
  },
  'submit #upsertFooForm': function () {
    console.log('creating new foo...');
    //Template.recordUpsertPage.saveFoo(this);
  }
});


Template.recordUpsertPage.saveFoo = function (record){
  // TODO:  add validation functions

  // var newRecord = {
  //   title: $('input[name="title"]').val(),
  //   description: $('input[name="description"]').val(),
  //   imageUrl: $('input[name="imageUrl"]').val(),
  //   url: $('input[name="url"]').val()
  // };

  var newRecord = {
    institutionName: $('input[name="institutionName"]').val(),
    institutionId: $('input[name="institutionId"]').val(),
    physicianName: $('input[name="physicianName"]').val(),
    studyName: $('input[name="studyName"]').val(),
    studyId: $('input[name="studyId"]').val(),
    patientAge: $('input[name="patientAge"]').val(),
    patientGender: $('input[name="patientGender"]').val(),
    diagnosisDescription: $('input[name="diagnosisDescription"]').val(),
    diagnosisCode: $('input[name="diagnosisCode"]').val(),
    diseaseSubtype: $('input[name="diseaseSubtype"]').val(),
    priorTreatmentHistory: $('input[name="priorTreatmentHistory"]').val(),
    complicatingConditions: $('input[name="complicatingConditions"]').val(),
    currentStatus: $('input[name="currentStatus"]').val(),
    lastFollowUpDate: $('input[name="lastFollowUpDate"]').val(),
    familyHistory: $('input[name="familyHistory"]').val(),
    molecularTesting: $('input[name="molecularTesting"]').val(),
    actionableFindings: $('input[name="actionableFindings"]').val(),
    genomicAnalysis: $('input[name="genomicAnalysis"]').val(),
    biopsySource: $('input[name="biopsySource"]').val(),
    tumorCellFraction: $('input[name="tumorCellFraction"]').val(),
    otherStudies: $('input[name="otherStudies"]').val()
  };

  // var inputElements = $('input');
  // var newRecord = {};
  // inputElements.forEach(function(input){
  //   newRecord[input.name] = input.val();
  // });



  console.log ("newRecord", newRecord);


  if (record._id){
    Foo.update({_id: record._id}, {$set: newRecord }, function (error, result){
      if (error) console.log(error);
      Router.go('/view/foo/' + record._id);
    });
  } else {
    Foo.insert(newRecord, function (error, result){
      if (error) console.log(error);
      Router.go('/view/foo/' + result);
    });
  }
};

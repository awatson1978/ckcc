Session.setDefault('subjectReadOnly', true);


Router.map(function (){
  this.route('newSubjects.Route', {
    path: '/insert/subject',
    template: 'subjectUpsertPage',
    onAfterAction: function (){
      Session.set('subjectReadOnly', false);
    }
  });

});


Router.route('/upsert/subject/:id', {
  name: 'upsertSubjects.Route',
  template: 'subjectUpsertPage',
  data: function (){
    return Subjects.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('subjectReadOnly', false);
  }
});
Router.route('/view/subject/:id', {
  name: 'viewSubjects.Route',
  template: 'subjectUpsertPage',
  data: function (){
    return Subjects.findOne(this.params.id);
  },
  onAfterAction: function (){
    Session.set('subjectReadOnly', true);
  }
});


//-------------------------------------------------------------


Template.subjectUpsertPage.rendered = function (){
  Template.appLayout.layout();
};


Template.subjectUpsertPage.helpers({
  getCurrentSchema: function (){
    if (this) {
      console.log('getCurrentSchema', this);

      console.log('hydratedSchema', SchemaHydrator.hydrate(this));
      return SchemaHydrator.hydrate(this);
    } else {
      return false;
    }
  },
  isNewSubject: function (){
    if (this._id){
      return false;
    } else {
      return true;
    }
  },
  getLockIcon: function (){
    if (Session.get('subjectReadOnly')){
      return "fa-lock";
    } else {
      return "fa-unlock";
    }
  },
  isReadOnly: function (){
    if (Session.get('subjectReadOnly')){
      return "readonly";
    }
  },
  getSubjectId: function () {
    if ( this._id ) {
      return this._id;
    } else {
      return "---";
    }
  }
});

Template.subjectUpsertPage.events({
  'click #removeSubjectButton': function (){
    Subjects.remove(this._id, function (error, result){
      if (result){
        Router.go('/list/subjects');
      }
    });
  },
  "click #saveSubjectButton": function (event, template){
    event.preventDefault();
    Template.subjectUpsertPage.saveSubject(false, this);
    Session.set('subjectReadOnly', true);
  },
  "click .barcode": function (){
    // TODO:  refactor to Session.toggle('subjectReadOnly')
    if (Session.equals('subjectReadOnly', true)){
      Session.set('subjectReadOnly', false);
    } else {
      Session.set('subjectReadOnly', true);
      console.log('Locking the subject...');
      Template.subjectUpsertPage.saveSubject(false, this);
    }
  },
  "click #lockSubjects.Button": function (){
    console.log("click #lockSubjects.Button");

    if (Session.equals('subjectReadOnly', true)){
      Session.set('subjectReadOnly', false);
    } else {
      Session.set('subjectReadOnly', true);
    }
  },
});


Template.subjectUpsertPage.saveSubject = function (subject, questionnaire){

  console.log("Template.subjectUpsertPage.saveSubjects.", questionnaire);
  // TODO:  add validation functions

  var newSubject = {};
  var inputElements = $('#subjectUpsertPage input');
  var textareaElements = $('#subjectUpsertPage textarea');

  console.log('inputElements', inputElements);
  console.log('textareaElements', textareaElements);

  for (var i = 0; i < inputElements.length; i++) {
    newSubject[inputElements[i].name] = inputElements[i].value;
  }
  for (var i = 0; i < textareaElements.length; i++) {
    newSubject[textareaElements[i].name] = textareaElements[i].value;
  }

  newSubject.createdAt = new Date();
  newSubject.questionnaireId = questionnaire._id;

  console.log ("newSubject", newSubject);


  if (subject._id){
    Subjects.update({_id: subject._id}, {$set: newSubject }, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/view/subject/' + subject._id);
    });
  } else {
    Subjects.insert(newSubject, function (error, result){
      if (error) {
        console.log(error);
        Session.set('errorMessage', error);
      }
      Router.go('/list/subjects');
    });
  }
};

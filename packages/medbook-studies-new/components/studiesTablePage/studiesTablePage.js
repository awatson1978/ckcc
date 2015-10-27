Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function(){
  this.route('studiesTablePage', {
    path: '/table/studies',
    template: 'studiesTablePage'
  });
});


//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.studiesTablePage.events({
  "click .listButton": function (event, template){
    Router.go('/list/studies');
  },
  "click .imageGridButton": function (event, template){
    Router.go('/grid/studies');
  },
  "click .tableButton": function (event, template){
    Router.go('/table/studies');
  },

  'click .starA': function(event, template){
    event.stopPropagation();
    Studies.update({_id: this._id}, {$set: {stars: 1}});
  },
  'click .starB': function(event, template){
    event.stopPropagation();
    Studies.update({_id: this._id}, {$set: {stars: 2}});
  },
  'click .starC': function(event, template){
    event.stopPropagation();
    Studies.update({_id: this._id}, {$set: {stars: 3}});
  },
  'click .starD': function(event, template){
    event.stopPropagation();
    Studies.update({_id: this._id}, {$set: {stars: 4}});
  },
  'click .starE': function(event, template){
    event.stopPropagation();
    Studies.update({_id: this._id}, {$set: {stars: 5}});
  },
  'click .checkbox': function(event, template){
    event.stopPropagation();
    if(this.checked){
      Studies.update({_id: this._id}, {$set: {checked: false}});
    }else{
      Studies.update({_id: this._id}, {$set: {checked: true}});
    }
  },
  'click .flag': function(event, template){
    event.stopPropagation();
    if(this.flagged){
      Studies.update({_id: this._id}, {$set: {flagged: false}});
    }else{
      Studies.update({_id: this._id}, {$set: {flagged: true}});
    }
  },
  'click .addUserIcon': function(){
    Router.go('/insert/study');
  },
  'click .delete': function(){
    Studies.remove(this._id);
  },
  'click tr': function(){
    Router.go('/view/study/' + this._id);
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #studySearchInput': function() {
    Session.set('studySearchFilter', $('#studySearchInput').val());
  }
});


//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS

Template.studiesTablePage.helpers({
  isGrayedOut: function(){
    if(this.checked){
      return "gray";
    }else{
      return "";
    }
  },
  starA: function(){
    if(this.stars >= 1){
      return "fa-star";
    }else{
      return "fa-star-o"
    }
  },
  starB: function(){
    if(this.stars >= 2){
      return "fa-star";
    }else{
      return "fa-star-o"
    }
  },
  starC: function(){
    if(this.stars >= 3){
      return "fa-star";
    }else{
      return "fa-star-o"
    }
  },
  starD: function(){
    if(this.stars >= 4){
      return "fa-star";
    }else{
      return "fa-star-o"
    }
  },
  starE: function(){
    if(this.stars == 5){
      return "fa-star";
    }else{
      return "fa-star-o"
    }
  },
  checkedIcon: function(){
    if(this.checked){
      return "fa-check";
    }else{
      return "fa-square-o";
    }
  },
  flaggedIcon: function(){
    if(this.flagged){
      return "fa-flag";
    }else{
      return "fa-flag-o";
    }
  }
});


Template.studiesTablePage.rendered = function(){
  Template.appLayout.layout();

  // step A:  initialize the table sorting functionality
  $(this.find('#studiesTable')).tablesorter();

  // the Tracker API watches Collection and Session objects
  // so what we're doing here is registering a Tracker to watch the
  // Session.get('receivedData') variable.  When it changes, everything
  // in the autorun() clause will get rerun

  // step B:  register a tracker to add the tablesorting functionality back
  // after we update data
  Tracker.autorun(function() {

    // step D: register that the recevedData variable has been changed
    // and rerun the Tracker clause
    // step E: actually log the new value in receivedData
    console.log(Session.get('receivedData'))
    setTimeout(function() {
      // step F:  update the tablesorting library 200ms after receiving data
      // and Blaze has had a change to rerender the table
      $("#studiesTable").trigger("update");
    }, 200);
  });

};

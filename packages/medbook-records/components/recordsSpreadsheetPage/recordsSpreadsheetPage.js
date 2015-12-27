
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.map(function (){
  this.route('recordsSpreadsheetPage', {
    path: '/spreadsheet/records',
    template: 'recordsSpreadsheetPage'
  });
});


//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.recordsSpreadsheetPage.events({

  // 'click .checkbox': function (event, template){
  //   event.stopPropagation();
  //   if (this.checked){
  //     Records.update({_id: this._id}, {$set: {checked: false}});
  //   } else {
  //     Records.update({_id: this._id}, {$set: {checked: true}});
  //   }
  // },
  // 'click .flag': function (event, template){
  //   event.stopPropagation();
  //   if (this.flagged){
  //     Records.update({_id: this._id}, {$set: {flagged: false}});
  //   } else {
  //     Records.update({_id: this._id}, {$set: {flagged: true}});
  //   }
  // },
  // 'click .addUserIcon': function (){
  //   Router.go('/insert/record');
  // },
  // 'click .delete': function (){
  //   Records.remove(this._id);
  // },
  // 'click tr': function (){
  //   Router.go('/view/record/' + this._id);
  // },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #recordSearchInput': function () {
    Session.set('recordSearchFilter', $('#recordSearchInput').val());
  }
});


//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS

Template.recordsSpreadsheetPage.helpers({
  isGrayedOut: function (){
    if (this.checked){
      return "gray";
    } else {
      return "";
    }
  },
  checkedIcon: function (){
    if (this.checked){
      return "fa-check";
    } else {
      return "fa-square-o";
    }
  },
  flaggedIcon: function (){
    if (this.flagged){
      return "fa-flag";
    } else {
      return "fa-flag-o";
    }
  }
});


Template.recordsSpreadsheetPage.rendered = function (){
  Template.appLayout.layout();

  if (Records.getFilteredData().count() > 0) {
    // step A:  initialize the table sorting functionality
    $(this.find('#recordsSpreadsheet')).handsontable({
      formulas: false, // Add this line to enable formulas support
      data: Records.getFilteredData().fetch(),
      minSpareRows: 1,
      colHeaders: true,
      columnSorting: true,
      rowHeaders: true,
      contextMenu: true,
      afterChange: function (change, source) {
        if (source === 'loadData') {
          return; //don't save this change
        }
        console.log('change', change);
        // if (!autosave.checked) {
        //   return;
        // }
        // clearTimeout(autosaveNotification);
        // ajax('scripts/json/save.json', 'GET', JSON.stringify({data: change}), function (data) {
        //   exampleConsole.innerText  = 'Autosaved (' + change.length + ' ' + 'cell' + (change.length > 1 ? 's' : '') + ')';
        //   autosaveNotification = setTimeout(function() {
        //     exampleConsole.innerText ='Changes will be autosaved';
        //   }, 1000);
        // });
      }
    });

  }

  // the Tracker API watches Collection and Session objects
  // so what we're doing here is registering a Tracker to watch the
  // Session.get('receivedData') variable.  When it changes, everything
  // in the autorun() clause will get rerun

  // step B:  register a tracker to add the tablesorting functionality back
  // after we update data
  Tracker.autorun(function () {

    // step D: register that the recevedData variable has been changed
    // and rerun the Tracker clause
    // step E: actually log the new value in receivedData
    //console.log(Session.get('receivedData'));
    setTimeout(function () {
      // step F:  update the tablesorting library 200ms after receiving data
      // and Blaze has had a change to rerender the table
      // $("#recordsTable").trigger("update");
      $('#recordsSpreadsheet').handsontable({
        formulas: true, // Add this line to enable formulas support
        data: Records.getFilteredData().fetch(),
        minSpareRows: 1,
        colHeaders: true,
        columnSorting: true,
        rowHeaders: true,
        contextMenu: true,
        afterChange: function (change, source) {
          if (source === 'loadData') {
            return; //don't save this change
          }
          console.log('change', change);
          // if (!autosave.checked) {
          //   return;
          // }
          // clearTimeout(autosaveNotification);
          // ajax('scripts/json/save.json', 'GET', JSON.stringify({data: change}), function (data) {
          //   exampleConsole.innerText  = 'Autosaved (' + change.length + ' ' + 'cell' + (change.length > 1 ? 's' : '') + ')';
          //   autosaveNotification = setTimeout(function() {
          //     exampleConsole.innerText ='Changes will be autosaved';
          //   }, 1000);
          // });
        },
        colHeaders: ['Apple', 'Banana', 'Coconut']
      });
    }, 200);
  });

};

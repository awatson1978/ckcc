
Session.setDefault('metadataSearchFilter', '');
Session.setDefault('tableLimit', 20);
Session.setDefault('paginationCount', 1);
Session.setDefault('selectedPagination', 0);
Session.setDefault('skipCount', 0);



//------------------------------------------------------------------------------
// ROUTING

Router.route('/spreadsheet/metadata', {
  name: 'metadataSpreadsheetPage',
  template: 'metadataSpreadsheetPage'
});

//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.metadataSpreadsheetPage.events({
  'keyup #metadataSearchInput': function () {
    Session.set('metadataSearchFilter', $('#metadataSearchInput').val());
  }
});


//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS

Template.metadataSpreadsheetPage.helpers({
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

Template.metadataSpreadsheetPage.onRendered(function (){
  Template.appLayout.layout();

  if (Records.getFilteredData().count() > 0) {
    // step A:  initialize the table sorting functionality
    $(this.find('#metadataSpreadsheet')).handsontable({
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
      // $("#metadataTable").trigger("update");
      $('#metadataSpreadsheet').handsontable({
        formulas: true, // Add this line to enable formulas support
        data: Metadata.find().fetch(),
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
    }, 200);
  });
});

Session.setDefault('cardTitle', '');

Template.recordHeader.helpers({
  getCardTitle: function (){
    return Session.get('cardTitle');
  },
  hasTitle: function (){
    if (this.title) {
      return true;
    } else {
      return false;
    }
  },
  isRecord: function () {
    process.env.TRACE && console.log('Template.recordHeader.isRecord', this);

    if (this.type === "record") {
      return true;
    } else {
      return false;
    }
  },
  hasListButton: function (){
    if (this.list === false) {
      return false;
    } else {
      return true;
    }
  },
  hasSpreadsheetButton: function (){
    if (this.spreadsheet === false) {
      return false;
    } else {
      return true;
    }
  },
  hasTableButton: function (){
    if (this.table === false) {
      return false;
    } else {
      return true;
    }
  },
  hasImageGridButton: function (){
    if (this.imageGrid === false) {
      return false;
    } else {
      return true;
    }
  },
  getHeaderOpacity: function (){
    return "background: linear-gradient(225deg, transparent 28.28px, rgba(255,255,255," + Session.get("glassOpacity") + ") 0) top right;";
  }
});

Template.recordHeader.events({
  "click .listButton": function (event, template) {
    if (this.url){
      Router.go('/list/' + this.url);
    } else {
      Router.go('/list/records');
    }
  },
  "click .imageGridButton": function (event, template) {
    if (this.url){
      Router.go('/grid/' + this.url);
    } else {
      Router.go('/grid/records');
    }
  },
  "click .tableButton": function (event, template) {
    if (this.url){
      Router.go('/table/' + this.url);
    } else {
      Router.go('/table/records');
    }
  },
  "click .spreadsheetButton": function (event, template) {
    if (this.url){
      Router.go('/spreadsheet/' + this.url);
    } else {
      Router.go('/spreadsheet/records');
    }
  }
});

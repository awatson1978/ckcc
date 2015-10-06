Template.recordFooter.helpers({
  isUpsert: function () {
    if (this.type === "upsert") {
      return true;
    } else {
      return false;
    }
  },
  hasId: function () {
    if (this.doc && this.doc._id) {
      return true;
    } else {
      return false;
    }
  }
});

Template.recordFooter.events({
  'click #removeRecordButton': function () {
    var docId = null;
    if (this.doc) {
      docId = this.doc._id;
    } else {
      docId = this._id;
    }

    Foo.remove(docId, function (error, result) {
      if (result) {
        Router.go('/list/foos');
      }
    });
  },
  "click #saveRecordButton": function () {
    if (this.doc) {
      Template.recordUpsertPage.saveFoo(this.doc);
    } else {
      Template.recordUpsertPage.saveFoo(this);
    }
    Session.set('recordReadOnly', true);
  }
});




Template.builderActionButtons.helpers({

});

Template.builderActionButtons.events({
  // TODO refactor #saveFormLink to #saveBuilderLink
  'click #saveFormLink': function () {
    console.log('click #saveFormLink', this);
    FormBuilder.save(this);
  },
  // TODO refactor #clearFormLink to #clearBuilderLink
  'click #clearFormLink': function () {
    Meteor.call('dropForm');
    Session.set('selectedBuilderTab', 'addNewFieldTab');
  }

});




Template.builderActionButtons.helpers({

});

Template.builderActionButtons.events({
  // TODO refactor #publishFormLink to #saveBuilderLink
  'click #publishFormLink': function () {
    console.log('click #publishFormLink', this);
    FormBuilder.save(this);
  },
  // TODO refactor #clearFormLink to #clearBuilderLink
  'click #clearFormLink': function () {
    Meteor.call('dropForm');
    Session.set('selectedBuilderTab', 'addNewFieldTab');
  }

});

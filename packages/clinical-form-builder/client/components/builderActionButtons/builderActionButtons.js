


Template.builderActionButtons.helpers({

});


Template.builderActionButtons.events({
  'click #scrollFormLink': function () {
    var inputCount = $('#questionnaireDesigner .item').length;

    $('html, body').animate({
        scrollTop: $("#questionnaireDesigner .item:nth-child(" + inputCount + ")").offset().top + 200
    }, 500);
  },
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

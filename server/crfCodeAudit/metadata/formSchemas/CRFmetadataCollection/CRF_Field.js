    if (Meteor.isClient)  {

	Template.CRF_Field.helpers({
	  atts: function addFormControlAtts() {
	    debugger
	    var atts = _.clone(this.atts);
	    // Add bootstrap class
	    atts = AutoForm.Utility.addClass(atts, "form-control");
	    delete atts.datePickerOptions;
	    return atts;
	  },

	  crf: function() {
	     var crf =  Session.get("CurrentDoc");
	     console.log("crf", crf);
	     return crf;
	  }

	});

	Template.CRF_Field.rendered = function () {
	    Tracker.autorun(function() {
	       var crf = Session.get("CurrentDoc");
	    });
	};

	Template.CRF_Field.destroyed = function () {
	  debugger
	};

    }

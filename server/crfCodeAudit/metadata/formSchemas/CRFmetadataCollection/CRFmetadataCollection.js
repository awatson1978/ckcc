Meteor.startup(function() {

    CRFinit.Metadata = {
        "Form_Name": "String",
        "Fields": [
	    { "Field_Name": "Form_Name", "type": "String", },

		{
			"Field_Name": "Fields",
			"autoform": {
			    afFieldInput: {
				type: 'CRF_Field'
				//,  timezoneId: 'America/Los_Angeles'
			    },
			},
			"optional": true,
			"type": "Object"
		}

/* ,
	    
	    { "Field_Name": "Fields", "type":  [
		{ 
		    "Field_Name": {
			type: "CRF_Field",

			autoform: {
			  template: 'autoformDate'
			/*
			 afFieldInput: {
			     type: 'CRF_Field'
			 }
			* /
			}

		    }
		}], 
	    },
*/
	    
	    
	    
	],
    };
    

    if (Meteor.isClient)  {
/*
	    autoform: {
	     afFieldInput: {
		 type: 'CRF_Field'
	     }
	    }
*/

	AutoForm.addInputType("CRF_Field", {
	  template: "CRF_Field",
	  valueOut: function () {
	    if (this.val()) {
	      debugger;
	      return this.val();
	    }
	  },
	  valueConverters: {
	    "string": function (val) {
	      debugger;
	      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
	    },
	    "stringArray": function (val) {
	      debugger;
	      return val;
	    },
	    "number": function (val) {
	      debugger;
	      return (val instanceof Date) ? val.getTime() : val;
	    },
	  }
	});

    }
});

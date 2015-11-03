Meteor.startup( function () {


  if (Meteor.isClient)  {
    AutoForm.addInputType("CRF_Field", {
      template: "CRF_Field",
      valueOut: function () {
        if (this.val()) {
          return this.val();
        }
      },
      valueConverters: {
        "string": function (val) {
          if (process.env.DEBUG) {
            debugger;
          }
          return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;
        },
        "stringArray": function (val) {
          if (process.env.DEBUG) {
            debugger;
          }
          return val;
        },
        "number": function (val) {
          if (process.env.DEBUG) {
            debugger;
          }
          return (val instanceof Date) ? val.getTime() : val;
        }
      }
    });

  }
});

Meteor.startup(function () {
  DailyStats.configure({
    dailyTotal: {
      color: "#45b76f",
      key: "Total"
    },
    bucketA: {
      color: "#E68A2E",
      key: "Foo"
    },
    bucketB: {
      color: "#80B2FF",
      key: "Bar"
    },
    bucketC: {
      color: "#DB4D4D",
      key: "Squee"
    }
  });
});

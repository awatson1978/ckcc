// Write your package code here!

// TODO:  refactor Items to FormItems
Items = new Meteor.Collection("items");
Items.allow({
  update: function () {
    return true;
  },
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});


if (Meteor.isClient) {
  Meteor.subscribe('items');
}

if (Meteor.isServer) {
  Meteor.publish('items', function () {
    return Items.find();
  });

  if (Items.find().count() === 0) {
    //var items = ["penecillin", "vitamin d", "tetracycline", "epinephrine", "peptol bismol", "claritin", "dihydrogen monoxide", "asprin"];

    // items.forEach(function (text, index) {
    //   Items.insert({
    //     text: text,
    //     rank: index,
    //     labelText: text,
    //     inputValue: "",
    //     inputType: "text",
    //     inputPlaceholder: "...",
    //     elementType: 'input'
    //   });
    // });
  }

  Meteor.methods({
    updateItem: function (data) {
      console.log('updating item ' + data.id);
      console.log(data);

      var result = Items.update({
        _id: data.id
      }, {
        $set: {
          labelText: data.labelText,
          inputValue: data.inputValue
        }
      });
      console.log('result: ' + result);
      return result;
    }
  });
}

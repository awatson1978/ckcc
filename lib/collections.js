PublicStats = new Mongo.Collection("publicStats");
PublicStats.allow({
  insert: function (){
    return true;
  },
  update: function (){
    return true;
  },
  remove: function (){
    return true;
  }
});








//   "AR-FISH_IHC": {
//     "allowedValues": [
//         "Positive",
//         "Focal Positive",
//         "Negative",
//         "Weak",
//         "Failed",
//         "Not Performed"
//       ],
//     "label": "AR Immunohistochemistry",
//     "max": 200,
//     type: String,
//     optional: true
//   },

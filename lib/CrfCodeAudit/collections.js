Collections = {};

Collections.CRFs = new Meteor.Collection("CRFs");
//Metadata = new Meteor.Collection("Metadata");

if (Meteor.isClient){
  Template.registerHelper("Collections", Collections);

  // Collections.Blobs = new FS.Collection("blobs", {
  //   stores: [Stores.blobs],
  //   chunkSize: 4 * 1024 * 1024
  // });
}

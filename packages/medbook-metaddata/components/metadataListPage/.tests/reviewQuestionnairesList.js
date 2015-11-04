exports.command = function (metadata, next) {
  this
    .verify.elementPresent("#metadatasListPage")
    .verify.elementPresent("#metadatasListPage .recordHeader")
    .verify.elementPresent("#metadataSearchInput")
    .verify.elementPresent("#metadatasList")
    .verify.elementPresent("#metadatasList .metadataItem:nth-child(1)")
    .verify.elementPresent("#metadatasList .metadataItem:nth-child(1) article")
    .verify.elementPresent("#metadatasListPage .recordFooter");

  if (metadata) {
    this
      .verify.elementPresent("#metadataSearchInput")
      .clearValue("#metadataSearchInput").pause(300)
      .setValue("#metadataSearchInput", metadata.metadataSearch).pause(500)
      .verify.elementPresent("#metadatasList .metadataItem:nth-child(1)")
      .verify.elementPresent("#metadatasList .metadataItem:nth-child(1) article")
      .verify.elementPresent("#metadatasList .metadataItem:nth-child(1) article h2")
      .verify.containsText("#metadatasList .metadataItem:nth-child(1) article h2",
        metadata.metadataName);

    if (next) {
      this
        .verify.elementPresent(
          "#metadatasList .metadataItem:nth-child(1) article .newLink")
        .click("#metadatasList .metadataItem:nth-child(1) article .newLink").pause(500);
    }
  } else {
    this
      .verify.elementPresent("#metadatasList #noResultsMessage")
      .verify.elementPresent("#metadatasList .addFooItem")
      .verify.elementNotPresent("#metadatasList .metadataItem:nth-child(2)")
      .verify.elementNotPresent("#metadatasList .metadataItem:nth-child(2) article");
  }

  return this;
};

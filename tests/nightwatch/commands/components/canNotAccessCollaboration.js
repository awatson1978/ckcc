exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canNotAccessCollaboration()")

    .waitForElementPresent('#collaborationGrid', 1000)
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaborationLink:nth-child(1)")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaborationLink:nth-child(1) .cardBody h2", collaboration.collaborationName)
    .click("#collaborationGrid #collaborationGridElements .collaborationLink:nth-child(1)").pause(1000)

    .verify.elementNotPresent("#upsertCollaborationForm")
    .verify.elementPresent("#collaborationGrid");

  return this;
};

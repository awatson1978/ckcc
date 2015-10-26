exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canNotAccessCollaboration()")

    .waitForElementPresent('#collaborationGrid', 1000)
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h2", collaboration.collaborationName)
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)").pause(500)

    .verify.elementNotPresent("#upsertCollaborationForm")
    .verify.elementPresent("#collaborationGrid");

  return this;
};

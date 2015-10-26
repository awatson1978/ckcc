exports.command = function (user, collaboration) {
  this
    .sectionBreak("requestsCollaboration")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) input[name='join']")
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) input[name='join']").pause(500);

  return this;
};

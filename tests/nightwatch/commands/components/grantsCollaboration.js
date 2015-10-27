exports.command = function (email) {
  this
    .sectionBreak(".grantsCollaboration()")

    .verify.elementPresent("#collaborationGrid #collaborationGridElements")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody .review")

    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody .review").pause(500)

    .verify.elementPresent("#collaborationReview")
    .verify.elementPresent("#collaborationReview .basicPanel")

    .verify.elementPresent("#collaborationReview .basicPanel table")
    .verify.elementPresent("#collaborationReview .basicPanel table tr:nth-child(1)")
    .verify.elementPresent("#collaborationReview .basicPanel table tr:nth-child(1) th:nth-child(1)")
    .verify.containsText("#collaborationReview .basicPanel table tr:nth-child(1) th:nth-child(1)", email)

    .verify.elementPresent("#doneReviewingBtn")
    .verify.elementPresent("#cancelReviewBtn")

    .click('#collaborationReview input[name="' + email + '"][value="approved"]').pause(500)

    .click("#doneReviewingBtn").pause(500)

    .verify.elementPresent("#collaborationGrid");

  return this;
};


Template.registerHelper('getApprovalIcon', function () {
  if (this.approved) {
    return 'fa-check';
  } else {
    return 'fa-inbox';
  }
});

Template.registerHelper('getDeleteIcon', function () {
  if (!this.deleted) {
    return 'fa-trash-o';
  }
});

Template.registerHelper('getLockedIcon', function () {
  if (this.locked) {
    return 'fa-lock';
  } else {
    return 'fa-unlock';
  }
});

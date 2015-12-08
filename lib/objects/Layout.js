Layout = {
  generateYieldTemplates: function( pageYields ){
    var resultYields = {
      'navbarHeader': {
        to: 'header'
      },
      'navbarFooter': {
        to: 'footer'
      },
      'leftDock': {
        to: 'leftDock'
      },
      'rightDock': {
        to: 'rightDock'
      },
      'reactiveOverlaysTemplate': {
        to: 'overlays'
      },

      // ISSUE #1 - Find a better way to attach modal dialogs that can scale.
      'keybindingsModal': {
        to: 'keybindingsModal'
      },
      'userPicklistModal': {
        to: 'userPicklistModal'
      },
      'studyPicklistModal': {
        to: 'studyPicklistModal'
      },
      'collaborationPicklistModal': {
        to: 'collaborationPicklistModal'
      },
      'studiesPicklistModal': {
        to: 'studiesPicklistModal'
      },
      'metadataPicklistModal': {
        to: 'metadataPicklistModal'
      }
    }

    if (pageYields) {
      Object.keys(pageYields).forEach(function(key){
        resultYields[key] = pageYields[key];
      });
    }

    return resultYields;
  }
}

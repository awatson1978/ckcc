//===================================================
// Template.registerHelper('isInput', function (fieldName) {
//   console.log('fieldName', fieldName);
//   // console.log('schema', schema);
//   // console.log('schema[fieldName]', schema[fieldName]);
//   // console.log('schema[fieldName].autoform.afFieldInput.type', schema[fieldName].autoform.afFieldInput.type);
//
//   //console.log('formDesignerSchema', Session.get('formDesignerSchema'));
//   //console.log('Template.builderPage._schema[fieldName]', Template.builderPage._schema());
//
//   var designerSchema = Session.get('formDesignerSchema');
//   if (designerSchema[fieldName].autoform.afFieldInput.type === "text") {
//     return true;
//   } else if (this.autoform.type === "text") {
//     return true;
//   } else if (this.type === "text") {
//     return true;
//   } else {
//     return false;
//   }
// });
// Template.registerHelper('isTextarea', function (fieldName) {
//   console.log('fieldName', fieldName);
//
//   var designerSchema = Session.get('formDesignerSchema');
//   if (designerSchema[fieldName].autoform.afFieldInput.type === "textarea") {
//     return true;
//   } else if (this.autoform.type === "textarea") {
//     return true;
//   } else if (this.type === "textarea") {
//     return true;
//   } else {
//     return false;
//   }
// });


Template.registerHelper('isTextBlock', function () {
  if (this.autoform.elementType === "paragraph") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isRadioBlock', function () {
  if (this.autoform.elementType === "radio") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isSpacer', function () {
  if (this.autoform.elementType === "spacer") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isYesNoBlock', function () {
  if (this.autoform.elementType === "yesno") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isSectionTitle', function () {
  if (this.autoform.elementType === "section") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isDateTimeBlock', function () {
  if (this.autoform.elementType === "datetime") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isTimeBlock', function () {
  if (this.autoform.elementType === "time") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isSectionTitle', function () {
  if (this.autoform.elementType === "section") {
    return true;
  } else {
    return false;
  }
});
Template.registerHelper('isMultiSelectBlock', function () {
  if (this.autoform.elementType === "multiselect") {
    return true;
  } else {
    return false;
  }
});


Template.registerHelper('getSelectedActive', function () {
  if (Session.get('item-' + this.question_id + '-multi')) {
    if (Session.get('item-' + this.question_id + '-multi') === this.value) {
      return "btn-info";
    } else {
      return "btn-default";
    }
  } else {
    return "btn-default";
  }
});

Template.registerHelper('getSelectItemValue', function () {
  return this.value;
});
Template.registerHelper('getMultiSelectId', function () {
  return this._id;
});
Template.registerHelper('selectItems', function () {
  var self = this;
  if (this.values) {
    console.log('this.values', this.values);
    var array = [];
    this.values.forEach(function (object) {
      object.question_id = self._id;
      array.push(object);
    });
    return array;
  }
});

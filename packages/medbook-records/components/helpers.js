Session.setDefault('recordSearchFilter', '');



Template.registerHelper("recordsList", function (){
  return Records.getFilteredData();
});


Template.registerHelper("getMrn", function (argument){
  if (this.MedicalRecordNumber) {
    return this.MedicalRecordNumber;
  } else {
    return this["Patient_ID"];
  }
});

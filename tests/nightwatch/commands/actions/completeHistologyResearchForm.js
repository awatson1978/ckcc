/*
var histologyResearchRecord = {
  sampleId: "",
  mutatedGenes: "",
  immunohistochemistry: "",
  histologyCall: "",
  adeno: "",
  smallCell: "",
  trichotomy: ""
}*/



exports.command = function(histologyResearchRecord) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('select[name="Sample_ID"]')
    .verify.elementPresent('select[name="Histology_Call"]')
    .verify.elementPresent('input[name="Adeno"]')
    .verify.elementPresent('input[name="Small_Cell"]')
    .verify.elementPresent('input[name="Trichotomy"]')

    if(histologyResearchRecord){
      this
        .clearValue('select[name="Sample_ID"]')
        .clearValue('select[name="Histology_Call"]')
        .clearValue('input[name="Adeno"]')
        .clearValue('input[name="Small_Cell"]')
        .clearValue('input[name="Trichotomy"]')
        .pause(500)


        .setValue('select[name="Sample_ID"]', histologyResearchRecord.sampleId)
        .setValue('select[name="Histology_Call"]', histologyResearchRecord.histologyCall).pause(1000)

        // these should be autopopulated
        //.verify.attributeEquals('select[name="Sample_ID"]', 'value', histologyResearchRecord.sampleId)
        .verify.attributeEquals('select[name="Histology_Call"]', 'value', histologyResearchRecord.histologyCall)
        .verify.attributeEquals('input[name="Adeno"]', 'value', histologyResearchRecord.adeno)
        .verify.attributeEquals('input[name="Small_Cell"]', 'value', histologyResearchRecord.smallCell)
        .verify.attributeEquals('input[name="Trichotomy"]', 'value', histologyResearchRecord.trichotomy)

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
      }


  return this;
};

    /*var bloodSpecimenRecord = {
      patientId: "",
      timepoint: "",
      drawDate: "",
      crcAtCollection: ""
    }
    */


exports.command = function(bloodSpecimentRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(bloodSpecimentRecord){
      this
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Timepoint")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Draw_Date")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .CRC_at_Collection")

        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID", bloodSpecimentRecord.patientId )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Timepoint", bloodSpecimentRecord.timepoint )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Draw_Date", bloodSpecimentRecord.drawDate )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .CRC_at_Collection", bloodSpecimentRecord.crcAtCollection )

    }


  return this;
};

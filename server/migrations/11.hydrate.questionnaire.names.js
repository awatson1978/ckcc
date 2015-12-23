// Migrate the Metadata collection to Questionnaires

//if (process.env.MIGRATE) {
  Migrations.add({
    version: 11,
    up: function () {
      Records.find().forEach(function (record) {
        if (record.questionnaireId) {
          var commonName = "Unknown";

          switch (record.questionnaireId) {
            case "Patient_Enrollment_form":
              commonName = "Patient Enrollment";
              break;
            case "Biopsy_Research":
              commonName = "Biopsy Research";
              break;
            case "ECOG_Weight_V3":
              commonName = "ECOG Weight";
              break;
            case "Histological_Assessment_form":
              commonName = "Histological Assessment";
              break;
            case "Blood_Specimen_form":
              commonName = "Blood Specimen Form";
              break;
            case "CkccPediatricIntake":
              commonName = "Blood Labs";
              break;
            case "Demographics":
              commonName = "Demographics";
              break;
            case "Followup":
              commonName = "Followup";
              break;
            case "GU_Disease_Assessment_V3":
              commonName = "GU Disease Assessment";
              break;
            case "Histology_Research":
              commonName = "Histological Research";
              break;
            case "Laser_Capture_Microdissection":
              commonName = "Laser Capture Microdissection";
              break;
            case "Pathology_form":
              commonName = "Pathology Report";
              break;
            case "Patient_Satisfaction":
              commonName = "Patient Satisfaction";
              break;
            case "SU2C_Specimen_V1":
              commonName = "SU2C Specimen";
              break;
            case "Clinical_Info":
              commonName = "Clinical Info";
              break;
            case "Patient_Enrollment_form":
              commonName = "Patient Enrollment Form";
              break;
            case "Prostate_Diagnosis_V4":
              commonName = "Prostate Diagnosis";
              break;
            case "RNASeq_completion_form":
              commonName = "RNA Sequence Completion";
              break;
            case "SU2C_Biopsy_V3":
              commonName = "SU2C Biopsy";
              break;
            case "SU2C_Prior_TX_V3":
              commonName = "SU2C Prior Treatment";
              break;
            case "SU2C_Subsequent_Treatment_V1":
              commonName = "SU2C Subsequent Treatment";
              break;
            case "Tissue_Specimen_form":
              commonName = "Tissue Specimen";
              break;
            default:

          }


          Records.update({_id: record._id}, {$unset:{
            CRF: ""
          }, $set:{
            questionnaireName: commonName
          }});
        }
      });
    }
  });
//}







// db.records.find().forEach(function (record) {
//   if (record && record.questionnaireId) {
//     var commonName = "Unknown";
//
//     switch (record.questionnaireId) {
//       case "Patient_Enrollment_form":
//         commonName = "Patient Enrollment";
//         break;
//       case "Biopsy_Research":
//         commonName = "Biopsy Research";
//         break;
//       case "ECOG_Weight_V3":
//         commonName = "ECOG Weight";
//         break;
//       case "Histological_Assessment_form":
//         commonName = "Histological Assessment";
//         break;
//       case "Blood_Specimen_form":
//         commonName = "Blood Specimen Form";
//         break;
//       case "CkccPediatricIntake":
//         commonName = "Blood Labs";
//         break;
//       case "Demographics":
//         commonName = "Demographics";
//         break;
//       case "Followup":
//         commonName = "Followup";
//         break;
//       case "GU_Disease_Assessment_V3":
//         commonName = "GU Disease Assessment";
//         break;
//       case "Histology_Research":
//         commonName = "Histological Research";
//         break;
//       case "Laser_Capture_Microdissection":
//         commonName = "Laser Capture Microdissection";
//         break;
//       case "Pathology_form":
//         commonName = "Pathology Report";
//         break;
//       case "Patient_Satisfaction":
//         commonName = "Patient Satisfaction";
//         break;
//       case "SU2C_Specimen_V1":
//         commonName = "SU2C Specimen";
//         break;
//       case "Clinical_Info":
//         commonName = "Clinical Info";
//         break;
//       case "Patient_Enrollment_form":
//         commonName = "Patient Enrollment Form";
//         break;
//       case "Prostate_Diagnosis_V4":
//         commonName = "Prostate Diagnosis";
//         break;
//       case "RNASeq_completion_form":
//         commonName = "RNA Sequence Completion";
//         break;
//       case "SU2C_Biopsy_V3":
//         commonName = "SU2C Biopsy";
//         break;
//       case "SU2C_Prior_TX_V3":
//         commonName = "SU2C Prior Treatment";
//         break;
//       case "SU2C_Subsequent_Treatment_V1":
//         commonName = "SU2C Subsequent Treatment";
//         break;
//       case "Tissue_Specimen_form":
//         commonName = "Tissue Specimen";
//         break;
//     }
//
//     db.records.update({_id: record._id}, {$unset:{
//       CRF: ""
//     }, $set:{
//       questionnaireName: commonName
//     }});
//   }
// });

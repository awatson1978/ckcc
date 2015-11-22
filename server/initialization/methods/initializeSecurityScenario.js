Meteor.methods({
  initializeSecurityScenario:function (){

    Meteor.call('initializeUsers');

    // crate our administrator
    testId = Accounts.createUser({
      username: 'test',
      password: 'test',
      email: 'test@test.org',
      profile: {
        fullName: 'Test User',
        role: 'Physician'
      }
    });
    console.info('Account created: ' + testId);

    // create questionnaires
    Meteor.call("initializeBiopsyResearchForm");
    Meteor.call("initializeBloodLabsForm");
    Meteor.call("initializeBloodSpecimenForm");
    Meteor.call("initializeClinicalInfoForm");
    Meteor.call("initializeDemographicsForm");
    Meteor.call("initializeEcogWeightForm");
    Meteor.call("initializeFollowupForm");
    Meteor.call("initializeGuDiseaseAssessmentForm");
    Meteor.call("initializeHistologicalAssessmentForm");
    Meteor.call("initializeHistologyResearchForm");
    Meteor.call("initializeLaserCaptureForm");
    Meteor.call("initializePathologyForm");
    Meteor.call("initializePatientEnrollmentForm");
    Meteor.call("initialieProstateDiagnosisForm");
    Meteor.call("initializeRnaSequenceForm");
    Meteor.call("initializeBiospyForm");
    Meteor.call("initializePriorTreatmentForm");
    Meteor.call("initializeSpecimenForm");
    Meteor.call("initializeSubsequentTreatmentForm");
    Meteor.call("initializeTissueSpecimenForm");
    Meteor.call("initializePatientSatisfactionForm");

    // create collaborations
    Meteor.call("initializeDefaultCollaborations");

    // create studies
    Meteor.call("initializeSecurityProfileStudies");


    // Patient_Enrollment_form
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomPatientEnrollment', generateRandomMrn('UCSF'), "Granuloma");
      Meteor.call('createRandomPatientEnrollment', generateRandomMrn('CKCC'), "Neuroblastoma");
    }

    // RNASeq_completion_form
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomRnaSequence', generateRandomMrn('CKCC'), "Melanoma");
      Meteor.call('createRandomRnaSequence', generateRandomMrn('UCLA'), "Carcinoma");
      Meteor.call('createRandomRnaSequence', generateRandomMrn('UCLA'), "Neuroblastoma");
    }

    // Followup
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomFollowup', generateRandomMrn('CKCC'), "Neuroblastoma");
      Meteor.call('createRandomFollowup', generateRandomMrn('UCSF'), "Lymphoma");
      Meteor.call('createRandomFollowup', generateRandomMrn('UCLA'), "Granuloma");
      Meteor.call('createRandomFollowup', generateRandomMrn('UCSC'), "Melanoma");
      Meteor.call('createRandomFollowup', generateRandomMrn('DTB'), "Sarcoma");
      Meteor.call('createRandomFollowup', generateRandomMrn('DTB'), "Carcinoma");
    }

    // Demographics
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomDemographics', generateRandomMrn('UCSF'), "Lymphoma");
    }

    // Blood_Labs_V2
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomBloodLabs', generateRandomMrn('UCSF'), "Granuloma");
    }

    // Blood_Labs_V2
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomLaserCaptureMicrodisection', generateRandomMrn('UCSC'), "Granuloma");
    }

    // Patient_Satisfaction
    for (var i = 0; i < 10; i++) {
      Meteor.call('createRandomPatientSatisfaction', generateRandomMrn(), "Satisfaction");
    }
  }
});


generateRandomMrn = function(mrnPrefix){
  var randomNumber = Random.fraction() * 17;
  var mrnSuffix = randomNumber.toString().slice(0, randomNumber.toString().indexOf(".")).toString();

  var mrn = "";
  if (mrnPrefix) {
    mrn = mrnPrefix + "-" + mrnSuffix;
  } else {
    mrn = "Sample-" + mrnSuffix;
  }
  return mrn;
};


//------------------------------------------
//  RANDOM API
//
//  questionnaireName: "CKCC Sample Data",
//  questionnaireId: Random.id(),
//  institutionName: Random.choice(["U.C. Santa Cruz", "U.C. Los Angeles", "U.C. San Francisco", "Stanford"]),
//  institutionId: Random.choice(["UCSC", "UCLA", "UCSF", "Stanford"]),
//  physicianName: "Dr. " + faker.name.firstName() + " " + faker.name.lastName(),
//  patientAge: randomAge.toString().slice(0, randomAge.toString().indexOf(".")),
//  diagnosisDescription: faker.lorem.paragraph(),
//  diagnosisCode: faker.lorem.sentence(),
//

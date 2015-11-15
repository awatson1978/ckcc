Meteor.methods({
  initializeCollaborations: function (){
    console.log('Initializing database....');
    var collaborationId = "";
    var collaborationName = "";

    for (var i = 0; i < 10; i++) {
      collaborationName = faker.company.bsBuzz() + " " + faker.company.bsNoun();
      collaborationId = Collaborations.insert({
        isUnlisted: Random.choice([true, false]),
        name: collaborationName,
        description: faker.company.catchPhrase(),
        collaborators: ["awatson1978@gmail.com", faker.internet.email()],
        administrators: ["awatson1978@gmail.com", faker.internet.email()],
        invitations: [],
        requests: [],
        requiresAdministratorApprovalToJoin: Random.choice([true, false]),
      });

      console.log(collaborationId + " " + collaborationName);

      // var count = 0;
      // for (var j = 0; j < 5; j++) {
      //
      //   count++;
      //   var randomAge = Random.fraction() * 17;
      //
      //   var newRecord = {
      //     questionnaireName: "CKCC Sample Data",
      //     questionnaireId: Random.id(),
      //     institutionName: Random.choice(["U.C. Santa Cruz", "U.C. Los Angeles", "U.C. San Francisco", "Stanford"]),
      //     institutionId: Random.choice(["UCSC", "UCLA", "UCSF", "Stanford"]),
      //     collaborationId: collaborationId,
      //     collaborationName: collaborationName,
      //     physicianName: "Dr. " + faker.name.firstName() + " " + faker.name.lastName(),
      //     studyName: "California Kids Cancer Comparison",
      //     studyId: "CKCC",
      //     participantId: count,
      //     patientAge: randomAge.toString().slice(0, randomAge.toString().indexOf(".")),
      //     patientGender: Random.choice([
      //       "Male",
      //       "Female"
      //     ]),
      //     diagnosisDescription: faker.lorem.paragraph(),
      //     diagnosisCode: faker.lorem.sentence(),
      //     diseaseSubtype: faker.lorem.sentence(),
      //     priorTreatmentHistory: faker.lorem.paragraph(),
      //     complicatingConditions: faker.lorem.paragraph(),
      //     currentStatus: faker.lorem.sentence(),
      //     lastFollowUpDate: new Date(),
      //     familyHistory: faker.lorem.paragraph(),
      //     molecularTesting: faker.lorem.paragraph(),
      //     actionableFindings: faker.lorem.paragraph(),
      //     genomicAnalysis: faker.lorem.paragraph(),
      //     biopsySource: faker.lorem.sentence(),
      //     tumorCellFraction: faker.lorem.sentence(),
      //     otherStudies: faker.lorem.sentence(),
      //     createdAt: new Date()
      //   };
      //
      //
      //   Records.insert(newRecord);
      // }
    }

    //return count;
  },
  dropCollaborations: function (){
    Collaborations.remove({});
  },
  dropRecords: function (){
    Records.remove({});
  },
  dropStudies: function (){
    Studies.remove({});
  },
  dropQuestionnaires: function (){
    Questionnaires.remove({});
    Items.remove({});
    Metadata.remove({});
  },
  dropClinicalFormCollections: function (){
    Collaborations.remove({});
    Questionnaires.remove({});
    Records.remove({});
    Studies.remove({});
    Items.remove({});
    Metadata.remove({});
  }
});

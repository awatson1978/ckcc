Meteor.methods({
  initializeDatabase: function (){
    Meteor.call("initializeClinicalData");

    if (!process.env.DEBUG) {
      Meteor.call("initializeCollaborations");
    }
  },
  initializeClinicalData: function (){
    var count = 0;

    for (var i = 0; i < 50; i++) {

      count++;
      var randomAge = Random.fraction() * 17;

      Foo.insert({
        institutionName: Random.choice(["U.C. Santa Cruz", "U.C. Los Angeles", "U.C. San Francisco", "Stanford"]),
        institutionId: Random.choice(["UCSC", "UCLA", "UCSF", "Stanford"]),
        physicianName: "Dr. " + faker.name.firstName() + " " + faker.name.lastName(),
        studyName: "California Kids Cancer Comparison",
        studyId: "CKCC",
        participantId: count,
        patientAge: randomAge.toString().slice(0, randomAge.toString().indexOf(".")),
        patientGender: Random.choice([
          "Male",
          "Female"
        ]),
        diagnosisDescription: faker.lorem.paragraph(),
        diagnosisCode: faker.lorem.sentence(),
        diseaseSubtype: faker.lorem.sentence(),
        priorTreatmentHistory: faker.lorem.paragraph(),
        complicatingConditions: faker.lorem.paragraph(),
        currentStatus: faker.lorem.sentence(),
        lastFollowUpDate: new Date(),
        familyHistory: faker.lorem.paragraph(),
        molecularTesting: faker.lorem.paragraph(),
        actionableFindings: faker.lorem.paragraph(),
        genomicAnalysis: faker.lorem.paragraph(),
        biopsySource: faker.lorem.sentence(),
        tumorCellFraction: faker.lorem.sentence(),
        otherStudies: faker.lorem.sentence()
      });
    }
  },
  initializeCollaborations: function (){
    for (var i = 0; i < 10; i++) {
      Collaborations.insert({
        isUnlisted: Random.choice([true, false]),
        name: faker.company.bsBuzz() + " " + faker.company.bsNoun(),
        description: faker.company.catchPhrase(),
        collaborators: ["awatson1978@gmail.com", faker.internet.email()],
        administrators: ["awatson1978@gmail.com", faker.internet.email()],
        invitations: [],
        requests: [],
        requiresAdministratorApprovalToJoin: Random.choice([true, false]),
      });
    }
  },
  dropCollaborations: function (){
    Collaborations.remove({});
  }
});

Meteor.startup(function (){
  if (Foo.find().count() === 0){
    Meteor.call('initializeDatabase');
  }
});

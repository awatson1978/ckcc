Meteor.methods({
  initializeDefaultCollaborations: function (){
    // create collaborations
    Collaborations.upsert({
      _id: "ckcc"
    }, {$set:{
      isUnlisted: false,
      name: "California Kids Cancer Comparison",
      description: faker.company.catchPhrase(),
      collaborators: ["thirteen@test.org", "kutner@test.org"],
      administrators: ["thirteen@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});

    Collaborations.upsert({
      _id: "wcdt"
    }, {$set:{
      isUnlisted: false,
      name: "West Coast Dream Team",
      description: faker.company.catchPhrase(),
      collaborators: ["cuddy@test.org"],
      administrators: ["cuddy@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucsc"
    }, {$set:{
      isUnlisted: false,
      name: "UC Santa Cruz",
      description: faker.company.catchPhrase(),
      collaborators: ["foreman@test.org", "wcdt"],
      administrators: ["foreman@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "genomics"
    }, {$set:{
      isUnlisted: false,
      name: "Cancer Genomics",
      description: faker.company.catchPhrase(),
      collaborators: ["kutner@test.org", "chase@test.org", "ucsc"],
      administrators: ["kutner@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucsf"
    }, {$set:{
      isUnlisted: false,
      name: "UC San Francisco",
      description: faker.company.catchPhrase(),
      collaborators: ["camron@test.org", "house@test.org", "wcdt"],
      administrators: ["house@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucla"
    }, {$set:{
      isUnlisted: false,
      name: "UC Los Angeles Francisco",
      description: faker.company.catchPhrase(),
      collaborators: ["wilson@test.org", "wcdt"],
      administrators: ["wilson@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});

  },
  initializeRandomCollaborations: function (){
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
    }
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
    Items.remove({});
    Metadata.remove({});
  },
  dropClinicalFormCollections: function (){
    Collaborations.remove({});
    Records.remove({});
    Studies.remove({});
    Items.remove({});
    Metadata.remove({});
  }
});

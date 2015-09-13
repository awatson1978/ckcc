// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api


var pathologyRecord = {
  sampleId: "DTB‑999",
  institution: "OHSU",
  tumorContent: "5%",
  preliminaryHistology: "Adenocarcinoma",
  finalHistology: "ANPC",
  arFishIhc: "Positive",
  psaIhc: "Positive",
  chgaIhc: "Positive",
  chgaTestPerformed: "Performed",
  arFishPerformed: "Performed",
  arChromosomeXRatio: "40",
  ionTorrentTestPerformed: "Yes",
  ptenIhc: "Positive",
  ptenTestPerformed: "Performed"
};

var pathologyEditedRecord = {
  sampleId: "DTB‑999",
  institution: "UCLA",
  tumorContent: "5%",
  preliminaryHistology: "Adenocarcinoma",
  finalHistology: "ANPC",
  arFishIhc: "Positive",
  psaIhc: "Positive",
  chgaIhc: "Positive",
  chgaTestPerformed: "Performed",
  arFishPerformed: "Performed",
  arChromosomeXRatio: "40",
  ionTorrentTestPerformed: "Yes",
  ptenIhc: "Positive",
  ptenTestPerformed: "Performed"
};


module.exports = {
  tags: ['active', 'record', 'validation'],
  before: function ( client ){
    // this depends on the accounts-housemd package
    client
      .url('http://localhost:3000')
      .meteorCall('dropDatabase')
      .pause(1000);
  },
  "A. RecordsList Walkthrough": function ( client ) {
    client
      .url( "http://localhost:3000/list/foos" )
      .resizeWindow( 1024, 768 )
      .reviewMainPanel();
  },
  "B. Reviewing Record List Page": function ( client ) {
    client
      .reviewRecordsListPage( false, false, false, true )
      .click( "#noResultsMessage" ).pause( 300 )
      .waitForPage( '#recordUpsertPage' );
  },
  "C. Reviewing Record Upsert Page": function ( client ) {
    client
      //.reviewFormUpsertPage();
      .reviewPathologyForm();
  },
  "D. Upserting First Report Info": function ( client ) {
    client
      //.upsertFormInfo( 'insert', octocat );
      .completePathologyForm(pathologyRecord);
  },
  "E. Reviewing First Report Info": function ( client ) {
    client
      //.reviewFormUpsertPage( octocat );
      .reviewPathologyForm(pathologyRecord);
  },
  "F. Upserting Second Report Title": function ( client ) {
    client
      // .upsertFormInfo( 'update', false, helloCthulu.title, false, false, false )
      // .reviewFormUpsertPage( false, helloCthulu.title, octocat.url, octocat.imageUrl, octocat.description );
      .completePathologyForm(pathologyEditedRecord)
      .reviewPathologyForm(pathologyEditedRecord);
  },
  // "G. Upserting HelloCthulu Info": function ( client ) {
  //   client
  //     .upsertFormInfo( 'update', helloCthulu );
  // },
  "H. Reviewing HelloCthulu Info": function ( client ) {
    client
      //.reviewFormUpsertPage( helloCthulu )
      .verify.elementPresent( ".listButton" )
      .click("#scrollTopBtn").pause(550)
      .click( ".listButton" ).pause( 1000 )
      .waitForElementPresent('#recordsListPage', 1000);
  },
  "I. Reviewing Record List Page": function ( client ) {
    client
      .reviewRecordsListPage( pathologyEditedRecord.title, false, pathologyEditedRecord.description, false )

      // we've only added one new record; there shouldn't be a second (yet)!
      //.verify.elementNotPresent( "#unorderedList li:nth-child(2)" )
      .click( "#unorderedList li:nth-child(1)" ).pause( 300 );
  },
  "J. Removing Record": function ( client ) {
    client
      .reviewPathologyForm( pathologyEditedRecord )
      .click("#scrollBottomBtn").pause(550)
      .click( ".removeRecordButton" ).pause( 1000 )
      .reviewRecordsListPage( false, false, false, true )

      .end();
  },

  "K. RecordTable Walkthrough": function ( client ) {
    client
      .url( "http://localhost:3000/list/foos" )
      .resizeWindow( 1024, 768 )
      .reviewMainPanel()

    .end();
  },
  "L. RecordImageGrid Walkthrough": function ( client ) {
    client
      .url( "http://localhost:3000/list/foos" )
      .resizeWindow( 1024, 768 )
      .reviewMainPanel()

    .end();
  }

};

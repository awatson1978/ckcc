Session.setDefault('subjectSearchFilter', '');

Template.registerHelper("subjectsList", function (argument){
  return Subjects.getFilteredData();
  // return Subjects.find({
  //   $or: [
  //     {
  //       institutionId: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       participantId: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       _id: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       physicianName: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       questionnaireName: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     },
  //     {
  //       collaborationName: {
  //         $regex: Session.get('subjectSearchFilter'),
  //         $options: 'i'
  //       }
  //     }
  // ]
  // }, {
  //   sort: {
  //     createdAt: -1
  //   }
  // });
});

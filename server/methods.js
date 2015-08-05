Meteor.methods({
  initializeDatabase: function (){
    for (var i = 0; i < 50; i++) {
      var chromosomeRatio = Random.fraction() * 100;
      var newRecord = {
        'title': Random.choice(['OHSU', 'UCLA', 'UCD', 'UBC']),
        'description': 'DTB-' + Math.floor(Random.fraction() * 1000),
        'imageUrl': Random.choice([
          'http://img.alibaba.com/img/pb/702/630/263/1282529020968_hz-fileserver1_1550719.jpg',
          'http://www.grauhall.com/3862858_Necrobiosis_lipoidica_400x_02.jpg',
          'http://www.bio.davidson.edu/genomics/method/histo/node40_5.jpeg',
          'http://www.westernhistological.com.au/Images/photoimages/lung_cancer.jpg',
          'http://i01.i.aliimg.com/img/pb/891/580/378/378580891_493.jpg',
          'http://djhurij4nde4r.cloudfront.net/images/images/000/002/618/fullsize/20110025.slide_arrow.m.JPG?1386902604',
          'http://3.imimg.com/data3/KU/BA/MY-6594043/oral-pathology-slide-for-pg-students-500x500.jpg',
          'http://www.carolina.com/images/product/detail/318090.jpg',
          'http://histology.osumc.edu/histology/Renal%20corpuscle3.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/6/6b/MI_with_contraction_bands_very_high_mag.jpg',
          'http://www.geocities.ws/m4pathology/Osce/Slides/histsch74.jpg',
          'http://webpathology.com/slides-13/slides/Testes_Infertility_MaturationArrest1.jpg',
          'http://www.carolina.com/images/product/detail/317700.jpg',
          'http://i01.i.aliimg.com/wsphoto/v0/617151299_1/human-pathology-slides-Lipoma-sec-.jpg'
        ]),
        'AR_chromosomeX_ratio': chromosomeRatio,
        'AR-FISH_IHC': Random.choice([
          "Positive",
          "Focal Positive",
          "Negative",
          "Weak",
          "Failed",
          "Not Performed"
        ]),
        'AR-FISH_test_performed': Random.choice([
          "Performed",
          "Not Performed"
        ]),
        'PSA_IHC': Random.choice([
          "Positive",
          "Focal Positive",
          "Negative",
          "Weak",
          "Failed",
          "Not Performed"
        ]),
        'CHGA_IHC': Random.choice([
          "Positive",
          "Focal Positive",
          "Negative",
          "Weak",
          "Failed",
          "Not Performed"
        ]),
        'CHGA_test_performed': Random.choice([
          "Performed",
          "Not Performed"
        ]),
        'ION_Torrent_test_performed': Random.choice([
          "Yes",
          "No"
        ]),
        'PTEN_IHC': Random.choice([
          "Positive",
          "Negative",
          "Weak",
          "N/A"
        ]),
        'PTEN_test_performed': Random.choice([
          "Performed",
          "Not Performed"
        ]),
        'Tumor_Content': Random.choice([
          "None",
          "<5%",
          "5%",
          "10%",
          "20%",
          "30%",
          "40%",
          "50%",
          "60%",
          "70%",
          "80%",
          "90%",
          "100%"
        ]),
        'Preliminary_Histology': Random.choice([
          "Adenocarcinoma",
          "Possible SC",
          "Small Cell",
          "ANPC",
          "Mixed",
          "N/A"
        ]),
        'Final_Histology': Random.choice([
          "Adenocarcinoma",
          "Small Cell",
          "ANPC",
          "Indeterminate",
          "Atypical with Adeno Architecture",
          "Adeno+ANPC",
          "Adeno+SC",
          "ANPC+SC",
          "N/A"
        ])
      };

      console.log('newRecord', newRecord);
      Foo.insert(newRecord);
    }
  }
});

Meteor.startup(function (){
  if (Foo.find().count() === 0){
    Meteor.call('initializeDatabase');
  }
});

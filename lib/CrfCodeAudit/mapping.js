map_Drug_Name = function (anObject) {
  var Drug_Name = anObject.Drug_Name;
  if (Drug_Name === null){
    return;
  }
  var re = /[;\/]/;

    // 1. Delete prednisone
  var drugs = anObject.Drug_Name.split(re).filter(function (d) {
    d = d.trim();
    return !d.match(/Prednisone/);
  }).map(function (s) {
    return s
      //2. MDV3100
    .replace("MDV3100", "Enzalutamide")
    .replace("MDV-3100", "Enzalutamide")
    .replace("MDV 3100", "Enzalutamide")

    // 3. Abiraterone Acetate
    .replace("Abiraterone Acetate", "Abiraterone")
    .replace(" Abiraterone", "Abiraterone")

    // 4. Zytiga
    .replace("Zytiga", "Abiraterone")
    .replace("LBH589", "Panobinostat")
    .replace("BKM120", "Buparlisib");
  });

  var d = drugs.join("; ");

  anObject.Drug_Name = d;
};
map_biopsy_site = function (anObject) {
  var site = anObject.biopsy_site;
  if (site == null){
    return;
  }
  anObject.biopsy_site = site.replace("Lymph nodes", "Lymph node");
};
generate_histology_categories = function (obj) {

  var hist = obj.Histology_Call;
  console.log('histology', hist);

  obj.Adeno = "Exclude";

  if (hist === 'Adeno') {
    obj.Adeno = "Adeno";
  }
  if (hist === 'Small Cell' || hist === 'IAC' || hist === 'IAC/SC') {
    obj.Adeno = "Not Adeno";
  }

  obj.Small_Cell = "Exclude";
  if (hist === 'Small Cell') {
    obj.Small_Cell = "Small Cell";
  }
  if (hist === 'Adeno' || hist === 'IAC' || hist === 'IAC/Adeno') {
    obj.Small_Cell = "Not Small Cell";
  }

  obj.Trichotomy = "Exclude"
  if (hist === 'Small Cell') {
    obj.Trichotomy = "Small Cell";
  }
  if (hist === 'Adeno') {
    obj.Trichotomy = "Adeno";
  }
  if (hist === 'IAC') {
    obj.Trichotomy = "IAC";
  }
};

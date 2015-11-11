
Initialization = {};


// the not so big ones

Patient_ID_Type_Meta = {
  "allowedValues": [],
  "label": "Patient ID",
  type: "String"
};

Patient_ID_Type = {
  "Field_Name": "Patient_ID",
  "label": "Patient ID",
  type: "String",
  autoform: {
      type: 'Patient_ID',
  }
};

Sample_ID_Type = {
  "Field_Name": "Sample_ID",
  "label": "Sample ID",
  type: "String",
  autoform: {
           type: 'Sample_ID',
  }
};

CoreAllowedValues = [
  "A",
  "B",
  "C",
  "D",
  "E ",
  "F",
  "G",
  "N/A"
];

core_type = {
  "allowedValues": CoreAllowedValues,
  "label": "Core",
  "max": 200,
  type: "String"
};

Completion_Date_type = {
  "label": "Completion Date",
  type: Date,
  autoform: {
    afFieldInput: {
      type: 'date',
      timezoneId: 'America/Los_Angeles'
    }
  }
};

Mutated_GeneList_type = {
  optional: true,
  type: ["String"],
  autoform: {
      type: 'genelist',
  }
};

// TEO: should refactor the name?
autoformDate =  {
  afFieldInput: {
    type: 'date',
    timezoneId: 'America/Los_Angeles'
  }
};

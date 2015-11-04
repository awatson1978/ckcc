Meteor.startup(function() {

  Initialization.Treatment_Response_form = {
    "commonName": "Treatment Response",
    "version": "V1",
    "Form_Name": "Treatment_Response_form",
    "Fields": [
      Patient_ID_Type,
      {
        "Field_Name": "Prior_Abiraterone",
        "allowedValues": [
          "Naive",
          "Resistant"
        ],
        "label": "Prior Abi response",
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "Prior_Abi_response",
        "allowedValues": [
          "Yes",
          "No",
          "Unk"
        ],
        "label": "Prior enza response",
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "Prior_Enzalutamide",
        "allowedValues": [
          "Naive",
          "Resistant"
        ],
        "label": "Prior Enzalutamide response",
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "Prior_Enza_response",
        "allowedValues": [
          "Yes",
          "No",
          "Unk"
        ],
        "label": "Prior enza response",
        "optional": true,
        "type": "String"
      },
      {
        "Field_Name": "Post_Biopsy_treatment",
        "allowedValues": [
          "Abiraterone",
          "BIND-014",
          "Cabazitaxel",
          "Carbo/taxotere",
          "Carboplatin/taxotere",
          "Cisplatin/etoposide",
          "Enzalutamide",
          "Enzalutamide + radium-223",
          "Mitoxantrone",
          "Post-biopsy treatment",
          "Radium-223",
          "Taxotere",
          "Taxotere + MLN8237",
          "Unk"
        ],
        "label": "Post Biopsy treatment",
        "optional": true,
        "type": "String"
      }
    ]
  };
});

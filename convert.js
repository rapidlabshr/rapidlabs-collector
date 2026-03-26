const input = [
  {
    "name": "CBC - Complete Blood Count",
    "price": 250,
    "parameters": "Hemoglobin (Hb),Red Blood Cell Count (RBC),White Blood Cell Count (WBC),Platelet Count,Hematocrit (HCT / PCV),Mean Corpuscular Volume (MCV),Mean Corpuscular Hemoglobin (MCH),Mean Corpuscular Hemoglobin Concentration (MCHC),Red Cell Distribution Width (RDW-CV),Red Cell Distribution Width (RDW-SD),Neutrophils (%),Lymphocytes (%),Monocytes (%),Eosinophils (%),Basophils (%),Neutrophils (Absolute),Lymphocytes (Absolute),Monocytes (Absolute),Eosinophils (Absolute),Basophils (Absolute),Platelet Distribution Width (PDW),Mean Platelet Volume (MPV),Platelet Large Cell Ratio (P-LCR),Plateletcrit (PCT),Immature Granulocytes (%),Immature Granulocytes (Absolute)",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "C REACTIVE PROTEIN (CRP)",
    "price": 280,
    "parameters": "C Reactive Protein (CRP)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Total Bilirubin",
    "price": 300,
    "parameters": "Total Bilirubin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Total Bilirubin Direct Bilirubin & Indirect Bilirubin",
    "price": 300,
    "parameters": "Total Bilirubin,Direct Bilirubin,Indirect Bilirubin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Fasting Glucose- FBS",
    "price": 180,
    "parameters": "Fasting Blood Sugar (FBS)",
    "equipment": "Syringe (1),Fluoride Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FBS with Corresponding Urine Sugar",
    "price": 280,
    "parameters": "Fasting Blood Sugar (FBS),Urine Sugar",
    "equipment": "Syringe (1),Fluoride Tube (1),Urine Container (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Glycosylated Haemoglobin (HbA1c)",
    "price": 350,
    "parameters": "Glycosylated Haemoglobin (HbA1c)",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Kidney Function Test (KFT)",
    "price": 430,
    "parameters": "Urea,Creatinine,Uric Acid,Sodium,Potassium,Chloride,Blood Urea Nitrogen (BUN),Calcium",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "LFT-LIVER FUNCTION TEST",
    "price": 399,
    "parameters": "Total Bilirubin,Direct Bilirubin,Indirect Bilirubin,SGOT (AST),SGPT (ALT),Alkaline Phosphatase (ALP),Total Protein,Albumin,Globulin,A/G Ratio",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "LIPID PROFILE",
    "price": 299,
    "parameters": "Total Cholesterol,Triglycerides,HDL Cholesterol,LDL Cholesterol,VLDL Cholesterol,Cholesterol/HDL Ratio",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "TFT-THYROID FUNCTION TEST",
    "price": 349,
    "parameters": "T3,T4,TSH",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "VITAMIN B12",
    "price": 650,
    "parameters": "Vitamin B12",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "VITAMIN D (25 OH CHOLECALCIFEROL)",
    "price": 599,
    "parameters": "Vitamin D (25-OH)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Urine Routine",
    "price": 129,
    "parameters": "Color,Appearance,Specific Gravity,pH,Protein,Glucose,Ketones,Bilirubin,Urobilinogen,Nitrite,Leukocyte Esterase,RBC,WBC,Epithelial Cells,Casts,Crystals,Bacteria",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "SGOT/AST - Aspartate Amino Transferase",
    "price": 249,
    "parameters": "SGOT (AST)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "SGPT/Alanine Aminotransferase test",
    "price": 249,
    "parameters": "SGPT (ALT)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Albumin",
    "price": 199,
    "parameters": "Albumin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Total Cholesterol/HDL Cholesterol Ratio",
    "price": 299,
    "parameters": "Total Cholesterol/HDL Ratio",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Triglycerides (TGL)",
    "price": 249,
    "parameters": "Triglycerides",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Urea",
    "price": 199,
    "parameters": "Urea",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CREATININE",
    "price": 199,
    "parameters": "Creatinine",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Uric Acid",
    "price": 199,
    "parameters": "Uric Acid",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Calcium",
    "price": 199,
    "parameters": "Calcium",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ELECTROLYTES (Na+ K+ CI) - SERUM",
    "price": 299,
    "parameters": "Sodium (Na+),Potassium (K+),Chloride (Cl-)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Dengue Antibody IgG",
    "price": 299,
    "parameters": "Dengue IgG Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Antibodies to HIV 1/2 (Rapld method)",
    "price": 499,
    "parameters": "HIV 1/2 Antibodies",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "TSH-Thyroid Stimulating Hormone",
    "price": 199,
    "parameters": "TSH",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Free-T3",
    "price": 399,
    "parameters": "Free T3",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Free-T4",
    "price": 399,
    "parameters": "Free T4",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Iron Profile",
    "price": 799,
    "parameters": "Serum Iron,TIBC,UIBC,Transferrin Saturation",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Double Marker Test",
    "price": 799,
    "parameters": "Free Beta hCG,PAPP-A",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "TRIPLE MARKER - SECOND TRIMESTER",
    "price": 899,
    "parameters": "AFP,hCG,Unconjugated Estriol (uE3)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "AMH - ANTI MULLERIAN HORMONE",
    "price": 799,
    "parameters": "Anti Mullerian Hormone (AMH)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "BETA HCG Total",
    "price": 249,
    "parameters": "Beta hCG Total",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FSH-FOLLICLE STIMULATING HORMONE",
    "price": 199,
    "parameters": "FSH",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "LH-Lutenizing Hormone",
    "price": 199,
    "parameters": "LH",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PROLACTIN",
    "price": 199,
    "parameters": "Prolactin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FERRITIN",
    "price": 399,
    "parameters": "Ferritin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "D-dimer",
    "price": 399,
    "parameters": "D-Dimer",
    "equipment": "Syringe (1),Citrate Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CK-MB",
    "price": 399,
    "parameters": "CK-MB",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Troponin I",
    "price": 499,
    "parameters": "Troponin I",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "TROPONIN - T",
    "price": 599,
    "parameters": "Troponin T",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Free Prostate Specific Antigen",
    "price": 349,
    "parameters": "Free Prostate Specific Antigen",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PSA-Prostate Specific Antigen (Total)",
    "price": 299,
    "parameters": "Prostate Specific Antigen (Total)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "vitamin d3",
    "price": 1599,
    "parameters": "Vitamin D3",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "INSULIN - FASTING",
    "price": 299,
    "parameters": "Insulin (Fasting)",
    "equipment": "Syringe (1),Fluoride Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "estrogen-e2",
    "price": 249,
    "parameters": "Estradiol (E2)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Hepatitis C Virus Antibody CMIA",
    "price": 299,
    "parameters": "Hepatitis C Virus Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "BILIRUBIN(DIRECT)",
    "price": 399,
    "parameters": "Direct Bilirubin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "vdrl",
    "price": 399,
    "parameters": "VDRL",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ANA - ANTI NUCLEAR ANTIBODY",
    "price": 599,
    "parameters": "Anti Nuclear Antibody (ANA)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PROGESTERONE - SERUM",
    "price": 299,
    "parameters": "Progesterone",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CCP ANTIBODY TO CYCLIC CITRULLINATED PEPTIDE",
    "price": 899,
    "parameters": "Anti CCP Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Bleeding time",
    "price": 499,
    "parameters": "Bleeding Time",
    "equipment": "Lancet (1),Alcohol Swab (1)"
  },
  {
    "name": "BLEEDING TIME & CLOTTING TIME",
    "price": 740,
    "parameters": "Bleeding Time,Clotting Time",
    "equipment": "Lancet (1),Alcohol Swab (1)"
  },
  {
    "name": "BNP B Type Natriuretic Peptide Plasma",
    "price": 740,
    "parameters": "B-Type Natriuretic Peptide (BNP)",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Body Fluid Analysis",
    "price": 1480,
    "parameters": "Color,Appearance,Cell Count,Protein,Glucose,Microscopy",
    "equipment": "Container (1)"
  },
  {
    "name": "Brucella IgM",
    "price": 1480,
    "parameters": "Brucella IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CA 15-3",
    "price": 1640,
    "parameters": "CA 15-3",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CA 19.9",
    "price": 1640,
    "parameters": "CA 19.9",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CALCITONIN/THYROCALCITONIN",
    "price": 740,
    "parameters": "Calcitonin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Phospholipid Antibody IgA",
    "price": 840,
    "parameters": "Anti Phospholipid Antibody IgA",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CALCIUM - 24HRS URINE",
    "price": 500,
    "parameters": "Urine Calcium (24 Hour)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "CALCIUM - RANDOM URINE",
    "price": 500,
    "parameters": "Urine Calcium (Random)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "CARDIOLIPIN ANTIBODIES IgM & IgG",
    "price": 1480,
    "parameters": "Cardiolipin Antibody IgM,Cardiolipin Antibody IgG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CEA - Carcino Embryonic Antigen",
    "price": 1640,
    "parameters": "Carcinoembryonic Antigen (CEA)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CELL COUNT",
    "price": 740,
    "parameters": "Cell Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Cell Type",
    "price": 740,
    "parameters": "Cell Type",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CERULOPLASMIN",
    "price": 740,
    "parameters": "Ceruloplasmin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CHIKUNGUNYA VIRUS ANTIBODY IGM",
    "price": 1480,
    "parameters": "Chikungunya Virus IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Chloride - CSF",
    "price": 500,
    "parameters": "Chloride (CSF)",
    "equipment": "Container (1)"
  },
  {
    "name": "CHLORIDE-serum",
    "price": 500,
    "parameters": "Chloride (Serum)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CHLORIDE-Urine",
    "price": 500,
    "parameters": "Chloride (Urine)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Cholesterol Total",
    "price": 500,
    "parameters": "Total Cholesterol",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CHROMOGRANIN - A",
    "price": 740,
    "parameters": "Chromogranin A",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti-Streptolysin -\"O\"(ASO) Titre (ASLO)",
    "price": 550,
    "parameters": "ASO Titre",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CLOT RETRACTION TIME",
    "price": 740,
    "parameters": "Clot Retraction Time",
    "equipment": "Lancet (1),Alcohol Swab (1)"
  },
  {
    "name": "Clotting Time",
    "price": 740,
    "parameters": "Clotting Time",
    "equipment": "Lancet (1),Alcohol Swab (1)"
  },
  {
    "name": "COLD AGGLUTININS",
    "price": 740,
    "parameters": "Cold Agglutinins",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Complement C4 Level",
    "price": 740,
    "parameters": "Complement C4",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Complete Blood Count &ESR",
    "price": 500,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Hematocrit,MCV,MCH,MCHC,RDW-CV,RDW-SD,Neutrophils %,Lymphocytes %,Monocytes %,Eosinophils %,Basophils %,ESR",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Complete Haemogram",
    "price": 740,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Hematocrit,MCV,MCH,MCHC,RDW-CV,RDW-SD,Neutrophils %,Lymphocytes %,Monocytes %,Eosinophils %,Basophils %",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "COPPER SERUM",
    "price": 740,
    "parameters": "Serum Copper",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Corrected calcium",
    "price": 500,
    "parameters": "Corrected Calcium",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CORTISOL 4 PM",
    "price": 1230,
    "parameters": "Cortisol (4 PM)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CORTISOL - 8 AM",
    "price": 1230,
    "parameters": "Cortisol (8 AM)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Cortisol - Free (Random urine)",
    "price": 1230,
    "parameters": "Urine Free Cortisol",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Cortisol (Random)",
    "price": 1230,
    "parameters": "Cortisol (Random)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "C-Peptide",
    "price": 740,
    "parameters": "C-Peptide",
    "equipment": "Syringe (1),Fluoride Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CPK-TOTAL",
    "price": 740,
    "parameters": "CPK Total",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Beta-2 Glycoprotein IgM",
    "price": 1480,
    "parameters": "Beta-2 Glycoprotein IgM",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CREATININE - 24HRS URINE",
    "price": 500,
    "parameters": "Urine Creatinine (24 Hour)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "CREATININE CLEARANCE - Random Urine",
    "price": 500,
    "parameters": "Creatinine Clearance",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "CRYOGLOBULINS",
    "price": 740,
    "parameters": "Cryoglobulins",
    "equipment": "Syringe (1),Plain Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CSF Analysis",
    "price": 1480,
    "parameters": "Color,Appearance,Cell Count,Protein,Glucose,Chloride,Microscopy",
    "equipment": "Container (1)"
  },
  {
    "name": "CULTURE AND SENSITIVITY (AEROBIC) BLOOD/CSF",
    "price": 2460,
    "parameters": "Culture,Sensitivity",
    "equipment": "Container (1)"
  },
  {
    "name": "Cystatin C",
    "price": 740,
    "parameters": "Cystatin C",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CYTOMEGALO VIRUS IgG ANTIBODIES",
    "price": 1480,
    "parameters": "Cytomegalovirus IgG Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "CYTOMEGALO VIRUS IgM ANTIBODIES",
    "price": 1480,
    "parameters": "Cytomegalovirus IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "DCT - Direct coombs test",
    "price": 740,
    "parameters": "Direct Coombs Test (DCT)",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Beta 2 Microglobulin IgM and IgG",
    "price": 1480,
    "parameters": "Beta-2 Microglobulin IgM,Beta-2 Microglobulin IgG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Phospholipid Antibody IgM",
    "price": 840,
    "parameters": "Anti Phospholipid Antibody IgM",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Dengue Antibody IgM",
    "price": 1480,
    "parameters": "Dengue IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "DENGUE NS1 Antigen",
    "price": 740,
    "parameters": "Dengue NS1 Antigen",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "DENGUE PROFILE ELISA METHOD",
    "price": 740,
    "parameters": "Dengue NS1 Antigen,Dengue IgG Antibody,Dengue IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Dengue-NS1 Antigen IgG & IgM antibodies (Rapid method)",
    "price": 1480,
    "parameters": "Dengue NS1 Antigen,Dengue IgG Antibody,Dengue IgM Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Differential Leucocyte Count (DC)",
    "price": 740,
    "parameters": "Neutrophils %,Lymphocytes %,Monocytes %,Eosinophils %,Basophils %",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "DIHYDROXY TESTOSTERONE",
    "price": 740,
    "parameters": "Dihydrotestosterone (DHT)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Direct Bilirubin",
    "price": 500,
    "parameters": "Direct Bilirubin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "TPO (Thyroid Peroxidase) Antibody (AMA) Microsomal",
    "price": 799,
    "parameters": "TPO Antibody (Thyroid Peroxidase Antibody)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Drug Of Abuse (12 drug panel)",
    "price": 740,
    "parameters": "Amphetamine,Cocaine,Marijuana (THC),Opiates,Benzodiazepines,Barbiturates,Methadone,Phencyclidine (PCP),Tricyclic Antidepressants,Oxycodone,Propoxyphene,Methamphetamine",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Drug Of Abuse (9 drug panel) - Urine",
    "price": 740,
    "parameters": "Amphetamine,Cocaine,Marijuana (THC),Opiates,Benzodiazepines,Barbiturates,Methadone,Phencyclidine (PCP)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "ds DNA antibodies",
    "price": 1480,
    "parameters": "dsDNA Antibodies",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "E3-Estriol-Serum",
    "price": 740,
    "parameters": "Estriol (E3)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Echinococcus Igg",
    "price": 1480,
    "parameters": "Echinococcus IgG Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Phospholipid Antibody IgM",
    "price": 840,
    "parameters": "Anti Phospholipid Antibody IgM",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Absolute Basophil Count",
    "price": 740,
    "parameters": "Absolute Basophil Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Absolute Lymphocyte Count",
    "price": 740,
    "parameters": "Absolute Lymphocyte Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Absolute Monocyte Count",
    "price": 740,
    "parameters": "Absolute Monocyte Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Absolute Neutrophil Count",
    "price": 740,
    "parameters": "Absolute Neutrophil Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ACE (Angiotensin Converting Enzyme)",
    "price": 740,
    "parameters": "Angiotensin Converting Enzyme (ACE)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Acid Fast Bacilli (AFB)/ ZN Stain",
    "price": 740,
    "parameters": "Acid Fast Bacilli (AFB)",
    "equipment": "Container (1)"
  },
  {
    "name": "ACID PHOSPHATASE - TOTAL & FRACTION",
    "price": 740,
    "parameters": "Acid Phosphatase Total,Acid Phosphatase Prostatic Fraction",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Acid Phosphatase Prostatic Fraction",
    "price": 740,
    "parameters": "Acid Phosphatase Prostatic Fraction",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Acid Phosphatase Total",
    "price": 740,
    "parameters": "Acid Phosphatase Total",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ACTH (Adrenocorticotropic Hormone)",
    "price": 740,
    "parameters": "ACTH",
    "equipment": "Syringe (1),EDTA Tube (1),Ice Pack (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Activated Plasma Thromboplastin time",
    "price": 740,
    "parameters": "Activated Partial Thromboplastin Time (APTT)",
    "equipment": "Syringe (1),Citrate Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ADA - Adenosine Deaminase",
    "price": 740,
    "parameters": "Adenosine Deaminase (ADA)",
    "equipment": "Container (1)"
  },
  {
    "name": "AEC - Absolute Eosinophil Count",
    "price": 740,
    "parameters": "Absolute Eosinophil Count",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Alanine AminoTransferase/ ALT (SGPT)",
    "price": 740,
    "parameters": "Alanine Aminotransferase (ALT/SGPT)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Phospholipid Antibody IgG",
    "price": 800,
    "parameters": "Anti Phospholipid Antibody IgG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Albumin Creatinine ratio",
    "price": 500,
    "parameters": "Albumin/Creatinine Ratio",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Albumin-body fluid",
    "price": 740,
    "parameters": "Albumin (Body Fluid)",
    "equipment": "Container (1)"
  },
  {
    "name": "Aldolase-Serum",
    "price": 740,
    "parameters": "Aldolase",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ALDOSTERONE",
    "price": 740,
    "parameters": "Aldosterone",
    "equipment": "Syringe (1),EDTA Tube (1),Ice Pack (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Aldosterone Sitting",
    "price": 740,
    "parameters": "Aldosterone (Sitting)",
    "equipment": "Syringe (1),EDTA Tube (1),Ice Pack (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Alkaline Phosphatase",
    "price": 740,
    "parameters": "Alkaline Phosphatase (ALP)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Alpha Feto-Protein (AFP)",
    "price": 1640,
    "parameters": "Alpha Feto Protein (AFP)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ANTI-HERPES SIMPLEX VIRUS 2 IgG",
    "price": 649,
    "parameters": "Herpes Simplex Virus Type 2 IgG Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "AMMONIA",
    "price": 740,
    "parameters": "Ammonia",
    "equipment": "Syringe (1),EDTA Tube (1),Ice Pack (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "AMYLASE",
    "price": 740,
    "parameters": "Amylase",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "C3(COMPLEMENT C3)",
    "price": 740,
    "parameters": "Complement C3",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ANA by Immunofluorescence",
    "price": 1480,
    "parameters": "Anti Nuclear Antibody (ANA) by Immunofluorescence",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ANA PROFILE",
    "price": 1480,
    "parameters": "Anti dsDNA,Anti Sm,Anti RNP,Anti SSA (Ro),Anti SSB (La),Anti Scl-70,Anti Jo-1,Anti Centromere",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ANCA (P+CANCA)",
    "price": 1640,
    "parameters": "P-ANCA,C-ANCA",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Thyroglobulin Antibodies",
    "price": 740,
    "parameters": "Anti Thyroglobulin Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Cardiolipin Antibodies - IgG",
    "price": 1480,
    "parameters": "Cardiolipin Antibody IgG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Cardiolipin Antibodies - IgG and IgM",
    "price": 1480,
    "parameters": "Cardiolipin Antibody IgG,Cardiolipin Antibody IgM",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Cardiolipin Antibodies - IgM",
    "price": 1480,
    "parameters": "Cardiolipin Antibody IgM",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti CCP Antibodies",
    "price": 1480,
    "parameters": "Anti CCP Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Nuclear Antibody/Factor (ANA/NF) IFA (HEP-2)",
    "price": 1480,
    "parameters": "Anti Nuclear Antibody (ANA)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Mumps IgM (CSF)",
    "price": 1480,
    "parameters": "Mumps IgM (CSF)",
    "equipment": "Container (1)"
  },
  {
    "name": "MYCOBACTERIUM TB GENE EXPERT",
    "price": 2460,
    "parameters": "Mycobacterium Tuberculosis (GeneXpert)",
    "equipment": "Container (1)"
  },
  {
    "name": "Nasal Smear for Eosinophils",
    "price": 740,
    "parameters": "Eosinophils (Nasal Smear)",
    "equipment": "Swab (1)"
  },
  {
    "name": "NIPPLE DISCHARGE FOR CYTOLOGY(Right&left)",
    "price": 740,
    "parameters": "Cytology (Right Breast),Cytology (Left Breast)",
    "equipment": "Container (1)"
  },
  {
    "name": "NIPPLE DISCHARGE FROM ONE BREAST FOR CYTOLOGY",
    "price": 740,
    "parameters": "Cytology (Breast Discharge)",
    "equipment": "Container (1)"
  },
  {
    "name": "Non veg Food Panel",
    "price": 740,
    "parameters": "Milk,Egg,Chicken,Fish,Prawn,Meat",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Nor-metanephrine",
    "price": 740,
    "parameters": "Normetanephrine",
    "equipment": "Syringe (1),EDTA Tube (1),Ice Pack (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "NT-proBNP (B-Type Natriuretic Peptide)",
    "price": 740,
    "parameters": "NT-proBNP",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ORAL GLUCOSE CHALLENGE TEST (OGCT-75G)",
    "price": 500,
    "parameters": "Glucose (75g Challenge)",
    "equipment": "Syringe (1),Fluoride Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "OSMOLALITY - 24 HRS URINE",
    "price": 740,
    "parameters": "Urine Osmolality (24 Hour)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "OSMOLALITY-SERUM",
    "price": 740,
    "parameters": "Serum Osmolality",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PAP SMEAR LBC method",
    "price": 740,
    "parameters": "Pap Smear (LBC)",
    "equipment": "Speculum (1),Slide (1)"
  },
  {
    "name": "PAP SMEAR SLIDE METHOD",
    "price": 740,
    "parameters": "Pap Smear (Conventional)",
    "equipment": "Speculum (1),Slide (1)"
  },
  {
    "name": "PERIPHERAL SMEAR",
    "price": 740,
    "parameters": "Peripheral Smear",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PHENOBARBITONE",
    "price": 740,
    "parameters": "Phenobarbitone",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Phenytoin Level",
    "price": 740,
    "parameters": "Phenytoin Level",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Phosphorous - Serum",
    "price": 740,
    "parameters": "Serum Phosphorus",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PHOSPHORUS - URINE",
    "price": 740,
    "parameters": "Urine Phosphorus",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "BLOOD GROUP & Rh TYPE",
    "price": 740,
    "parameters": "Blood Group,Rh Type",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "OSMOLALITY - SERUM",
    "price": 740,
    "parameters": "Serum Osmolality",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Post Dinner Glucose",
    "price": 500,
    "parameters": "Postprandial Blood Sugar (PPBS)",
    "equipment": "Syringe (1),Fluoride Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "POTASSIUM (K+)- Serum",
    "price": 500,
    "parameters": "Potassium (Serum)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "POTASSIUM (K+)- urine",
    "price": 500,
    "parameters": "Potassium (Urine)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Protein-Serum",
    "price": 740,
    "parameters": "Total Protein (Serum)",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "PROTEIN - CSF",
    "price": 740,
    "parameters": "Protein (CSF)",
    "equipment": "Container (1)"
  },
  {
    "name": "Protein Å - Pleural fluid",
    "price": 740,
    "parameters": "Protein (Pleural Fluid)",
    "equipment": "Container (1)"
  },
  {
    "name": "QUADRUPLE MARKER",
    "price": 1640,
    "parameters": "AFP,hCG,Unconjugated Estriol (uE3),Inhibin A",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "QUANTIFERON TB GOLD/GAMMA INTERFERON FOR TB",
    "price": 2460,
    "parameters": "Interferon Gamma Release Assay (IGRA)",
    "equipment": "Syringe (1),Heparin Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ELECTROLYTES URINE -SPOT SAMPLE",
    "price": 740,
    "parameters": "Sodium (Urine),Potassium (Urine),Chloride (Urine)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Electrolytes (Na+ K+ CI) - urine",
    "price": 740,
    "parameters": "Sodium (Na+),Potassium (K+),Chloride (Cl-)",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "ELECTROPHORESIS - URINE",
    "price": 740,
    "parameters": "Urine Protein Electrophoresis",
    "equipment": "Urine Container (1)"
  },
  {
    "name": "Epstein Barr Virus Anti Bodies Tetra Panel",
    "price": 740,
    "parameters": "EBV VCA IgM,EBV VCA IgG,EBV EBNA IgG,EBV EA IgG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Erythrocyte Sedimentation Rate",
    "price": 740,
    "parameters": "Erythrocyte Sedimentation Rate (ESR)",
    "equipment": "Syringe (1),EDTA Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "ERYTHROPOIETIN LEVEL",
    "price": 740,
    "parameters": "Erythropoietin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "F.N.A.C (SLIDE REVIEW)",
    "price": 740,
    "parameters": "Cytology Review",
    "equipment": "Slide (1)"
  },
  {
    "name": "FECAL CALPROTECTIN",
    "price": 740,
    "parameters": "Fecal Calprotectin",
    "equipment": "Stool Container (1)"
  },
  {
    "name": "BACTEC BLOOD CULTURE",
    "price": 2460,
    "parameters": "Blood Culture",
    "equipment": "Blood Culture Bottle (1),Syringe (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FILARIA ANTIGEN",
    "price": 740,
    "parameters": "Filaria Antigen",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FNAC - MULTIPLE SITES",
    "price": 740,
    "parameters": "FNAC (Multiple Sites)",
    "equipment": "Needle (1),Syringe (1),Slide (1)"
  },
  {
    "name": "FNAC-SINGLE SITE",
    "price": 740,
    "parameters": "FNAC (Single Site)",
    "equipment": "Needle (1),Syringe (1),Slide (1)"
  },
  {
    "name": "Folic Acid",
    "price": 740,
    "parameters": "Folic Acid",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Platelet Antibody",
    "price": 1580,
    "parameters": "Anti Platelet Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Anti Sperm Antibodies",
    "price": 1399,
    "parameters": "Anti Sperm Antibody",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Free Androgen Index",
    "price": 740,
    "parameters": "Free Androgen Index",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Free Beta HCG",
    "price": 1230,
    "parameters": "Free Beta hCG",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FREE TFT (FreeT3 FreeT4 TSH",
    "price": 1230,
    "parameters": "Free T3,Free T4,TSH",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Apolipoprotein A1 (Apo-A1)",
    "price": 740,
    "parameters": "Apolipoprotein A1",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "FSH LH and PROLACTIN",
    "price": 1230,
    "parameters": "FSH,LH,Prolactin",
    "equipment": "Syringe (1),SST Tube (1),Alcohol Swab (1),Needle (1)"
  },
  {
    "name": "Fungal Culture",
    "price": 2460,
    "parameters": "Fungal Culture",
    "equipment": "Syringe (1), Blood Culture Bottle (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "G6PD",
    "price": 740,
    "parameters": "G6PD",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Gamma-Glutamyl Transferase (GGT)",
    "price": 740,
    "parameters": "Gamma Glutamyl Transferase (GGT)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "GFR (GLOMERULAR FILTRATION RATE)",
    "price": 740,
    "parameters": "Glomerular Filtration Rate (GFR)",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Globulins- Serum",
    "price": 740,
    "parameters": "Globulin (Serum)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Glucometer RBS",
    "price": 740,
    "parameters": "Random Blood Sugar (RBS)",
    "equipment": "Glucose Test Strip (1), Lancet (1), Alcohol Swab (1)"
  },
  {
    "name": "GLUCOSE - CSF",
    "price": 500,
    "parameters": "Glucose (CSF)",
    "equipment": "Syringe (1), CSF Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Glucose - Fluid",
    "price": 500,
    "parameters": "Glucose (Body Fluid)",
    "equipment": "Syringe (1), Plain Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Glucose Challenge Test(50 g)",
    "price": 500,
    "parameters": "Glucose (50g Challenge)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution (50 g)"
  },
  {
    "name": "Glucose Challenge Test(75 g)",
    "price": 500,
    "parameters": "Glucose (75g Challenge)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution (75 g)"
  },
  {
    "name": "Glucose Tolerance Test (GTT) - 2 samples",
    "price": 500,
    "parameters": "Fasting Glucose,2 Hour Glucose",
    "equipment": "Syringe (2), SST Tubes (2), Alcohol Swab (1), Needle (1), Glucose Solution"
  },
  {
    "name": "Glucose Tolerance Test (GTT) - 3 samples",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose,2 Hour Glucose",
    "equipment": "Syringe (3), SST Tubes (3), Alcohol Swab (1), Needle (1), Glucose Solution"
  },
  {
    "name": "Glucose Tolerance Test (GTT) - 4 Samples",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose,2 Hour Glucose,3 Hour Glucose",
    "equipment": "Syringe (4), SST Tubes (4), Alcohol Swab (1), Needle (1), Glucose Solution"
  },
  {
    "name": "Glucose Tolerance Test (GTT) - 5 Samples",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose,2 Hour Glucose,3 Hour Glucose,4 Hour Glucose",
    "equipment": "Syringe (5), SST Tubes (5), Alcohol Swab (1), Needle (1), Glucose Solution"
  },
  {
    "name": "Glucose Tolerance Test 100g [GTT]",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose,2 Hour Glucose,3 Hour Glucose",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution (100 g)"
  },
  {
    "name": "Glucose Tolerance Test 50g [GTT]",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution (50 g)"
  },
  {
    "name": "Glucose Tolerance Test 75g [GTT]",
    "price": 500,
    "parameters": "Fasting Glucose,1 Hour Glucose,2 Hour Glucose",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution (75 g)"
  },
  {
    "name": "GRAM'S STAIN",
    "price": 740,
    "parameters": "Gram Stain",
    "equipment": "Slide (1), Staining Reagents (1 set), Alcohol Swab (1)"
  },
  {
    "name": "HAV-IgM ANTIBODY-SERUM",
    "price": 1480,
    "parameters": "Hepatitis A Virus IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hb-Haemoglobin",
    "price": 500,
    "parameters": "Hemoglobin",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TORCH profile",
    "price": 740,
    "parameters": "Toxoplasma IgG,Toxoplasma IgM,Rubella IgG,Rubella IgM,CMV IgG,CMV IgM,HSV IgG,HSV IgM",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "High sensitive CRP",
    "price": 630,
    "parameters": "High Sensitivity CRP",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "ZINC-PLASMA",
    "price": 990,
    "parameters": "Zinc (Plasma)",
    "equipment": "Syringe (1), Heparin Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Anti-TPO Antibody",
    "price": 599,
    "parameters": "Anti TPO Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Toxoplasma IgG",
    "price": 1480,
    "parameters": "Toxoplasma IgG",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Toxoplasma IgM",
    "price": 1480,
    "parameters": "Toxoplasma IgM",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Treponema Hemagglutination Test (TPHA)",
    "price": 740,
    "parameters": "Treponema Pallidum Hemagglutination Assay (TPHA)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Anti-Thyroglobulin (ATG)",
    "price": 599,
    "parameters": "Anti Thyroglobulin Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "ANTI-HERPES SIMPLEX VIRUS 1 IgG",
    "price": 649,
    "parameters": "Herpes Simplex Virus Type 1 IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Beta-2-Glycoprotein IgG AntibodySerum",
    "price": 1480,
    "parameters": "Beta-2 Glycoprotein IgG Antibody",
    "equipment": "Syringe (1), Heparin Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "BICARBONATE(HCO3)",
    "price": 740,
    "parameters": "Bicarbonate (HCO3)",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "Typhoid (Rapid)",
    "price": 740,
    "parameters": "Salmonella Typhi IgM,Salmonella Typhi IgG",
    "equipment": "Urine Cup (1), Pregnancy Test Strip (1)"
  },
  {
    "name": "UPT - URINE PREGNANCY TEST",
    "price": 740,
    "parameters": "Urine Pregnancy Test",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urea - Serum",
    "price": 500,
    "parameters": "Urea",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TSH Receptor Antibody (TRAb)",
    "price": 1480,
    "parameters": "TSH Receptor Antibody (TRAb)",
    "equipment": "Syringe (1), Heparin Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urinary Sodium (24 Hrs)",
    "price": 500,
    "parameters": "Urine Sodium (24 Hour)",
    "equipment": "Syringe (1), Plain Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "URINE ALBUMIN (Quantitative)",
    "price": 740,
    "parameters": "Urine Albumin (Quantitative)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urine Bence Jones Proteins (Electrophoresis)",
    "price": 740,
    "parameters": "Bence Jones Protein (Urine)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urine bilirubin",
    "price": 500,
    "parameters": "Urine Bilirubin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "URINE CALCIUM - SPOT SAMPLE",
    "price": 500,
    "parameters": "Urine Calcium (Spot)",
    "equipment": "Syringe (1), Plain Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urine Complete Analysis",
    "price": 1480,
    "parameters": "Color,Appearance,Specific Gravity,pH,Protein,Glucose,Ketones,Bilirubin,Urobilinogen,Nitrite,Leukocytes,RBC,WBC,Epithelial Cells,Casts,Crystals,Bacteria",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urine Creatinine",
    "price": 500,
    "parameters": "Urine Creatinine",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Urine creatinine - Spot Sample",
    "price": 500,
    "parameters": "Urine Creatinine (Spot)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "URINE CYTOLOGY",
    "price": 740,
    "parameters": "Urine Cytology",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Urine Dipstick",
    "price": 740,
    "parameters": "Protein,Glucose,Ketones,Bilirubin,Urobilinogen,pH,Specific Gravity",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR ALBUMIN",
    "price": 740,
    "parameters": "Urine Albumin",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR ALBUMIN & SUGAR",
    "price": 740,
    "parameters": "Urine Albumin,Urine Sugar",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR BILE SALT / BILE PIGMENT",
    "price": 1480,
    "parameters": "Bile Salts,Bile Pigments",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR MICROSCOPIC EXAMINATION",
    "price": 740,
    "parameters": "RBC,WBC,Epithelial Cells,Casts,Crystals,Bacteria",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR MORPHINE",
    "price": 740,
    "parameters": "Morphine (Urine)",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE FOR PHASE CONTRAST",
    "price": 740,
    "parameters": "Phase Contrast Microscopy",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Urine Ketones Bodies",
    "price": 740,
    "parameters": "Urine Ketone Bodies",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "URINE MAGNESIUM - SPOT SAMPLE",
    "price": 740,
    "parameters": "Urine Magnesium (Spot)",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Urine Osmolality",
    "price": 740,
    "parameters": "Urine Osmolality",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Urine protein",
    "price": 740,
    "parameters": "Urine Protein",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Urine sugar",
    "price": 740,
    "parameters": "Urine Sugar",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Varicella Zoster Virus (Vzv) Antibody Igg (Chicken Pox /",
    "price": 1480,
    "parameters": "Varicella Zoster Virus IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Varicella Zoster Virus (Vzv) Antibody Igm (Chicken Pox /",
    "price": 1480,
    "parameters": "Varicella Zoster Virus IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "VITAMIN E TOCOPHEROL",
    "price": 740,
    "parameters": "Vitamin E (Tocopherol)",
    "equipment": "Syringe (1), Heparin Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "VLDL",
    "price": 740,
    "parameters": "VLDL Cholesterol",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "VMA-URINE 24 HRS",
    "price": 740,
    "parameters": "Vanillylmandelic Acid (24 Hour Urine)",
    "equipment": "Syringe (1), Urine Container (24 Hrs) (1), Alcohol Swab (1)"
  },
  {
    "name": "Rapid Plasma Reagin (RPR)",
    "price": 740,
    "parameters": "Rapid Plasma Reagin (RPR)",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "RBC Count",
    "price": 740,
    "parameters": "RBC Count",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Red cell distribution width",
    "price": 740,
    "parameters": "Red Cell Distribution Width (RDW)",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Reticulocyte Count",
    "price": 740,
    "parameters": "Reticulocyte Count",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Rh typing",
    "price": 740,
    "parameters": "Rh Type",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Routine Culture and Sensitivity (Pus/Urin/Swab/Stool/any",
    "price": 2460,
    "parameters": "Culture,Sensitivity",
    "equipment": "Syringe (1), Blood Grouping Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Rubella Antibodies IgG",
    "price": 1480,
    "parameters": "Rubella IgG Antibody",
    "equipment": "Syringe (1), Blood Culture Bottle (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Rubella Antibodies IgM",
    "price": 1480,
    "parameters": "Rubella IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "RUBELLA-(IgG & IgM)",
    "price": 1480,
    "parameters": "Rubella IgG Antibody,Rubella IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Semen Analysis",
    "price": 1480,
    "parameters": "Volume,Color,Viscosity,pH,Sperm Count,Motility,Morphology",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "SEMEN PROCESSING",
    "price": 740,
    "parameters": "Semen Processing",
    "equipment": "Semen Container (1), Alcohol Swab (1)"
  },
  {
    "name": "SERUM IRON",
    "price": 740,
    "parameters": "Serum Iron",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Serum Transferrin",
    "price": 740,
    "parameters": "Transferrin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PT-Prothrombin Time",
    "price": 299,
    "parameters": "Prothrombin Time (PT),INR",
    "equipment": "Syringe (1), Citrate Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "SLIDE REVIEW (FOR SECOND OPINION)",
    "price": 740,
    "parameters": "Slide Review",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Smear for cytology/Malignancy",
    "price": 740,
    "parameters": "Cytology",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Smear for Malarial Parasite",
    "price": 740,
    "parameters": "Malarial Parasite",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Smear for Microfilaria",
    "price": 740,
    "parameters": "Microfilaria",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "SODIUM (NA+) - BODY FLUID",
    "price": 500,
    "parameters": "Sodium (Body Fluid)",
    "equipment": "Syringe (1), Plain Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "SODIUM (Na+) - CSF",
    "price": 500,
    "parameters": "Sodium (CSF)",
    "equipment": "Syringe (1), CSF Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "SODIUM (Na+) - SERUM",
    "price": 500,
    "parameters": "Sodium (Serum)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "SODIUM (Na+) - Urine",
    "price": 500,
    "parameters": "Sodium (Urine)",
    "equipment": "Urine Cup (1), Alcohol Swab (1)"
  },
  {
    "name": "SODIUM(Na+) & POTTASIUM(K+)-SERUM",
    "price": 500,
    "parameters": "Sodium (Na+),Potassium (K+)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Specific Gravity",
    "price": 740,
    "parameters": "Specific Gravity",
    "equipment": "Urine Cup (1), Alcohol Swab (1)"
  },
  {
    "name": "Sputum AFB",
    "price": 740,
    "parameters": "Acid Fast Bacilli (AFB)",
    "equipment": "Sputum Container (1), Alcohol Swab (1)"
  },
  {
    "name": "SPUTUM GRAM'S",
    "price": 740,
    "parameters": "Gram Stain",
    "equipment": "Sputum Container (1), Alcohol Swab (1)"
  },
  {
    "name": "Stool Complete Analysis",
    "price": 1480,
    "parameters": "Color,Consistency,pH,Occult Blood,RBC,WBC,Parasites,Reducing Substances",
    "equipment": "Stool Container (1), Alcohol Swab (1)"
  },
  {
    "name": "Stool Hanging drop",
    "price": 740,
    "parameters": "Motility (Hanging Drop)",
    "equipment": "Stool Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Stool Occult Blood",
    "price": 740,
    "parameters": "Occult Blood",
    "equipment": "Stool Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Stool Reducing Substance",
    "price": 740,
    "parameters": "Reducing Substances",
    "equipment": "Stool Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "T3-TOTAL (SERUM)",
    "price": 1230,
    "parameters": "T3 (Total)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "T4-TOTAL (SERUM)",
    "price": 1230,
    "parameters": "T4 (Total)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TESTOSTERONE-TOTAL (SERUM)",
    "price": 740,
    "parameters": "Testosterone (Total)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Testosteronie Free",
    "price": 740,
    "parameters": "Testosterone (Free)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TESTOSTERONE PANEL (Testo Total Free & SHBG)",
    "price": 500,
    "parameters": "Testosterone Total,Testosterone Free,SHBG",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Thyroglobulin (Tg)-Serum",
    "price": 740,
    "parameters": "Thyroglobulin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TIBC-TOTAL IRON BINDING CAPACITY",
    "price": 740,
    "parameters": "Total Iron Binding Capacity (TIBC)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TISSUE TRANSGLUTAMINASE (ITG) ANTIBODY  IgA",
    "price": 1480,
    "parameters": "Tissue Transglutaminase IgA",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TISSUE TRANSGLUTAMINASE IgG & IgA",
    "price": 1480,
    "parameters": "Tissue Transglutaminase IgG,Tissue Transglutaminase IgA",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Tissue Transglutaminase TTG",
    "price": 740,
    "parameters": "Tissue Transglutaminase (TTG)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TORCH PANEL IgG SERUM",
    "price": 1480,
    "parameters": "Toxoplasma IgG,Rubella IgG,CMV IgG,HSV IgG",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "TORCH PANEL IgM SERUM",
    "price": 1480,
    "parameters": "Toxoplasma IgM,Rubella IgM,CMV IgM,HSV IgM",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "WEIL-FELIX TEST",
    "price": 740,
    "parameters": "Weil Felix Test",
    "equipment": "Syringe (1), Widal/Weil-Felix Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "WET MOUNT PREPARATION",
    "price": 740,
    "parameters": "Wet Mount Microscopy",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "WIDAL TEST (Tube method)",
    "price": 740,
    "parameters": "Salmonella Typhi O,Salmonella Typhi H",
    "equipment": "Syringe (1), Widal Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "WIDAL TEST(Slide method)",
    "price": 740,
    "parameters": "Salmonella Typhi O,Salmonella Typhi H",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Post Lunch Glucose",
    "price": 500,
    "parameters": "Postprandial Blood Sugar (PPBS)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Solution"
  },
  {
    "name": "PostPrandial Glucose - PPBS",
    "price": 500,
    "parameters": "Postprandial Blood Sugar (PPBS)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PPBS with Corresponding Urine Sugar",
    "price": 740,
    "parameters": "Postprandial Blood Sugar (PPBS),Urine Sugar",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Urine Cup (1)"
  },
  {
    "name": "Pre Dinner Glucose",
    "price": 500,
    "parameters": "Pre Dinner Glucose",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Pre Lunch Glucose",
    "price": 500,
    "parameters": "Pre Lunch Glucose",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "CA 125",
    "price": 1640,
    "parameters": "CA 125",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Automated culture and sensitivity by VITEK",
    "price": 2460,
    "parameters": "Culture,Sensitivity",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PROTEIN CSF",
    "price": 740,
    "parameters": "Protein (CSF)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Protein - Serum",
    "price": 740,
    "parameters": "Total Protein (Serum)",
    "equipment": "Syringe (1), Blood Culture Bottle (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Protein A - Pleural fluid",
    "price": 740,
    "parameters": "Protein (Pleural Fluid)",
    "equipment": "Syringe (1), CSF Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Protein C Antigen",
    "price": 740,
    "parameters": "Protein C Antigen",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Protein Creatinine Ratio - Random Urine",
    "price": 500,
    "parameters": "Protein/Creatinine Ratio (Urine)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Protein Electrophoresis",
    "price": 740,
    "parameters": "Protein Electrophoresis",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PROTEIN S ANTIGEN",
    "price": 740,
    "parameters": "Protein S Antigen",
    "equipment": "Syringe (1), Urine Cup (1), Alcohol Swab (1)"
  },
  {
    "name": "PROTEIN/CREATININE RATIO - 24 HRS URINE",
    "price": 500,
    "parameters": "Protein/Creatinine Ratio (24 Hour Urine)",
    "equipment": "Syringe (1), Urine Cup (1), Alcohol Swab (1)"
  },
  {
    "name": "DHEA-S (Dehydroepiandrosterone Sulfate)",
    "price": 740,
    "parameters": "DHEA-S",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PTH PARATHYROID HORMONE",
    "price": 740,
    "parameters": "Parathyroid Hormone (PTH)",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "PUS AFB",
    "price": 740,
    "parameters": "Acid Fast Bacilli (AFB)",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "QUADRIPLE MARKER",
    "price": 1640,
    "parameters": "AFP,hCG,Unconjugated Estriol (uE3),Inhibin A",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "QUANTIFERON TB GOLD/GAMMA INTERFERON FOR TB",
    "price": 2460,
    "parameters": "Interferon Gamma Release Assay (IGRA)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "RA FACTOR",
    "price": 740,
    "parameters": "Rheumatoid Factor (RA Factor)",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "Random Glucose",
    "price": 500,
    "parameters": "Random Blood Sugar (RBS)",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "RFT",
    "price": 740,
    "parameters": "Urea,Creatinine,Uric Acid,Sodium,Potassium,Chloride",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HB TC DC",
    "price": 500,
    "parameters": "Hemoglobin,Total Count,Differential Count",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HB TC DC & ESR",
    "price": 500,
    "parameters": "Hemoglobin,Total Count,Differential Count,ESR",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HB TC DC & PLATELET COUNT",
    "price": 500,
    "parameters": "Hemoglobin,Total Count,Differential Count,Platelet Count",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HB TC DC ESR & PLATELET COUNT",
    "price": 500,
    "parameters": "Hemoglobin,Total Count,Differential Count,ESR,Platelet Count",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HBV DNA - Qualitative",
    "price": 500,
    "parameters": "HBV DNA (Qualitative)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HBV DNA - Quantitative",
    "price": 500,
    "parameters": "HBV DNA (Quantitative)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HCV-Rapid",
    "price": 740,
    "parameters": "Hepatitis C Virus Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HDL Cholesterol",
    "price": 500,
    "parameters": "HDL Cholesterol",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "lelicobacter Pylori IgA Antibodies",
    "price": 740,
    "parameters": "Helicobacter Pylori IgA Antibody",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Helicobacter Pylori IgG Antibodies",
    "price": 1480,
    "parameters": "Helicobacter Pylori IgG Antibody",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Helicobacter Pylori IgM Antibodies",
    "price": 1480,
    "parameters": "Helicobacter Pylori IgM Antibody",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Hematocrit (Packed cell volume)",
    "price": 740,
    "parameters": "Hematocrit",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Hemoglobin (Hb) Electrophoresis",
    "price": 500,
    "parameters": "Hemoglobin Electrophoresis",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "Hepatitis A Virus (HAV) Antibody IgG",
    "price": 1480,
    "parameters": "Hepatitis A Virus IgG Antibody",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis B Core Antibody Total (HBcAb Total)",
    "price": 500,
    "parameters": "Hepatitis B Core Antibody Total",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis B Profile",
    "price": 740,
    "parameters": "HBsAg,HBeAg,Anti HBe,Anti HBs,HBcAb",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis B Surface Antigen (Rapid)",
    "price": 740,
    "parameters": "Hepatitis B Surface Antigen",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HEPATITIS B SURFACE ANTIGEN(CMIA)",
    "price": 740,
    "parameters": "Hepatitis B Surface Antigen",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis B Virus - HBV Anti HbeAg Envelope Antibody",
    "price": 500,
    "parameters": "Hepatitis B e Antibody (Anti HBe)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis B Virus - HBV HbeAg Envelope Antigen",
    "price": 500,
    "parameters": "Hepatitis B e Antigen (HBeAg)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "BRUCELLA-IgG IgM",
    "price": 1480,
    "parameters": "Brucella IgG Antibody,Brucella IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis D Virus - IgM /HDV - IgM",
    "price": 1480,
    "parameters": "Hepatitis D Virus IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis E Virus (HEV) Antibody IgG",
    "price": 1480,
    "parameters": "Hepatitis E Virus IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hepatitis E Virus (HEV) Antibody IgM",
    "price": 1480,
    "parameters": "Hepatitis E Virus IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HEPATITIS E VIRUS IgM / IgG",
    "price": 1480,
    "parameters": "Hepatitis E Virus IgM Antibody,Hepatitis E Virus IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Herpes Simplex Virus (Hsv)1 + 2 Igm Serum",
    "price": 1480,
    "parameters": "Herpes Simplex Virus 1 IgM,Herpes Simplex Virus 2 IgM",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Histopathology - Large",
    "price": 740,
    "parameters": "Histopathology",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Histopathology (Extra large)**",
    "price": 740,
    "parameters": "Histopathology",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Histopathology (Specimen- Medium)*",
    "price": 740,
    "parameters": "Histopathology",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Histopathology (Specimen -small)*",
    "price": 740,
    "parameters": "Histopathology",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "IIV-Rapid",
    "price": 740,
    "parameters": "HIV Antibody",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "HIV-WESTERN BLOT",
    "price": 740,
    "parameters": "HIV Western Blot",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HIV CMIA",
    "price": 740,
    "parameters": "HIV Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HIV-I & II (WESTERN BLOT)",
    "price": 740,
    "parameters": "HIV Western Blot",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HLA B27",
    "price": 740,
    "parameters": "HLA B27",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HOMOCYSTINE",
    "price": 740,
    "parameters": "Homocysteine",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "HSVI ANTIBODY IGG",
    "price": 1480,
    "parameters": "Herpes Simplex Virus IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Immunobglobulin A (IgA) (Total)",
    "price": 1480,
    "parameters": "Immunoglobulin A (IgA)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "IMMUNOGLOBULIN (IgA IgG IgM)",
    "price": 1480,
    "parameters": "Immunoglobulin A (IgA),Immunoglobulin G (IgG),Immunoglobulin M (IgM)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Immunoglobulin E (Total IgE)",
    "price": 1480,
    "parameters": "Immunoglobulin E (IgE)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Indirect Bilirubin",
    "price": 500,
    "parameters": "Indirect Bilirubin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Indirect Coombs test",
    "price": 740,
    "parameters": "Indirect Coombs Test",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Infectious Mononucleosis (IM) - Monospet Test",
    "price": 740,
    "parameters": "Monospot Test",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "INHALATION/RESPIRATORY ALLERGY TEST",
    "price": 740,
    "parameters": "Dust,Mite,Pollen,Animal Dander",
    "equipment": "Allergy Test Kit (1)"
  },
  {
    "name": "Blood Urea Nitrogen (BUN)",
    "price": 500,
    "parameters": "Blood Urea Nitrogen (BUN)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "INSULIN - POSTPRANDIAL",
    "price": 1230,
    "parameters": "Insulin (Postprandial)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "INSULIN - RANDOM",
    "price": 1230,
    "parameters": "Insulin (Random)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Ionised Calcium",
    "price": 500,
    "parameters": "Ionized Calcium",
    "equipment": "Syringe (1), Heparin Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "IRON + TIBC",
    "price": 740,
    "parameters": "Serum Iron,Total Iron Binding Capacity (TIBC)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "IRON STUDY WITH FERRITIN",
    "price": 740,
    "parameters": "Serum Iron,TIBC,Ferritin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "IRON STUDY WITHOUT FERRITIN",
    "price": 740,
    "parameters": "Serum Iron,TIBC",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Ketone bodies D-3-hydroxybutyrate(D3BH)",
    "price": 740,
    "parameters": "Ketone Bodies (D3HB)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "KI67 IHC",
    "price": 740,
    "parameters": "Ki-67",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "KOH for Fungus",
    "price": 740,
    "parameters": "KOH Preparation",
    "equipment": "Syringe (1), Citrate Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LACTATE",
    "price": 740,
    "parameters": "Lactate",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LDH (Lactate Dehydrogenase)",
    "price": 740,
    "parameters": "Lactate Dehydrogenase (LDH)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LDL-CHOLESTEROL",
    "price": 500,
    "parameters": "LDL Cholesterol",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LDL.CHOL/HDL.CHOL RATIO",
    "price": 740,
    "parameters": "LDL/HDL Ratio",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LE Cell detection",
    "price": 740,
    "parameters": "LE Cells",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Lead (Blood)",
    "price": 740,
    "parameters": "Lead (Blood)",
    "equipment": "Slide (1), Alcohol Swab (1)"
  },
  {
    "name": "Legionella Antigen-urine(ICT)",
    "price": 740,
    "parameters": "Legionella Antigen",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Leptospira Agglutination Test (MAT)",
    "price": 740,
    "parameters": "Leptospira Agglutination Test",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "LEPTOSPIRA IGM + IGG",
    "price": 1480,
    "parameters": "Leptospira IgM Antibody,Leptospira IgG Antibody",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Leptospiral Antibodies (IgG)",
    "price": 1480,
    "parameters": "Leptospira IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Leptospiral Antibodies (IgM)",
    "price": 1480,
    "parameters": "Leptospira IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "APTT - PARTIAL THROMBOPLASTIN TIME",
    "price": 740,
    "parameters": "Activated Partial Thromboplastin Time (APTT)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "LIPASE - Serum",
    "price": 740,
    "parameters": "Lipase",
    "equipment": "Syringe (1), Citrate Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Lipoprotein (a)",
    "price": 740,
    "parameters": "Lipoprotein (a)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Lithium",
    "price": 740,
    "parameters": "Lithium",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Liver Kidney Microsomes antibodies",
    "price": 740,
    "parameters": "Liver Kidney Microsomal Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Magnesium (MG) Serum",
    "price": 740,
    "parameters": "Magnesium (Serum)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "MALARIAL PARASITE (QBC)",
    "price": 740,
    "parameters": "Malarial Parasite",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "MALARIAL PARASITE Rapid",
    "price": 740,
    "parameters": "Malarial Parasite",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "MANTOUX TEST",
    "price": 740,
    "parameters": "Mantoux Test",
    "equipment": "Capillary Tube (1), Lancet (1), Test Kit (1)"
  },
  {
    "name": "MARIJUANA (THC)",
    "price": 1480,
    "parameters": "Marijuana (THC)",
    "equipment": "Tuberculin Syringe (1), Alcohol Swab (1)"
  },
  {
    "name": "Mean corpuscular hemoglobin",
    "price": 740,
    "parameters": "Mean Corpuscular Hemoglobin (MCH)",
    "equipment": "Urine Cup (1), Alcohol Swab (1)"
  },
  {
    "name": "Mean corpuscular hemoglobin concentration",
    "price": 740,
    "parameters": "Mean Corpuscular Hemoglobin Concentration (MCHC)",
    "equipment": "EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Mean corpuscular volume",
    "price": 740,
    "parameters": "Mean Corpuscular Volume (MCV)",
    "equipment": "EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Measles Antibodies (IgG)",
    "price": 1480,
    "parameters": "Measles IgG Antibody",
    "equipment": "EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Measles Antibodies (IgM)",
    "price": 1480,
    "parameters": "Measles IgM Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Metanephrine",
    "price": 740,
    "parameters": "Metanephrine",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "METANEPHRINES 24 HRS URINE",
    "price": 740,
    "parameters": "Metanephrine (24 Hour Urine)",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Methaemoglobin",
    "price": 500,
    "parameters": "Methemoglobin",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "MICRCALBUMIN - URINE",
    "price": 740,
    "parameters": "Urine Microalbumin",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "MICROALBUMIN/CREATININE RATIO (24hrs Urine)",
    "price": 500,
    "parameters": "Microalbumin/Creatinine Ratio (24 Hour Urine)",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "MICROALBUMIN/CREATININE RATIO (Random urine)",
    "price": 500,
    "parameters": "Microalbumin/Creatinine Ratio (Random Urine)",
    "equipment": "Urine Cup (1), Urine Tube (1), Alcohol Swab (1)"
  },
  {
    "name": "Mumps IgG(Serum)",
    "price": 1480,
    "parameters": "Mumps IgG Antibody",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Thyroid Profile",
    "price": 740,
    "parameters": "T3,T4,TSH",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Blood Sugar",
    "price": 740,
    "parameters": "Blood Glucose",
    "equipment": "Glucose Test Strip (1), Lancet (1), Alcohol Swab (1)"
  },
  {
    "name": "Iron Studies",
    "price": 740,
    "parameters": "Serum Iron,TIBC,Ferritin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Hormone Profile",
    "price": 740,
    "parameters": "FSH,LH,Prolactin,Testosterone,TSH",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Electrolytes Panel / Serum Calcium Test",
    "price": 500,
    "parameters": "Sodium,Potassium,Chloride,Calcium",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Coagulation Profile",
    "price": 740,
    "parameters": "Prothrombin Time (PT),Activated Partial Thromboplastin Time (APTT),INR",
    "equipment": "Syringe (1), Citrate Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Coagulation Profile",
    "price": 740,
    "parameters": "Prothrombin Time (PT),Activated Partial Thromboplastin Time (APTT),INR",
    "equipment": "Syringe (1), Citrate Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Homocysteine Test",
    "price": 740,
    "parameters": "Homocysteine",
    "equipment": "Syringe (1), EDTA Tube (1), Alcohol Swab (1), Needle (1)"
  },
  {
    "name": "Basic Health Checkup",
    "price": 999,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Blood Glucose,Urea,Creatinine,Total Cholesterol",
    "equipment": "Syringe (1), SST Tube (1), EDTA Tube (1), Alcohol Swab (1), Needle (1), Glucose Test Strip (1), Lancet (1)"
  },
  {
    "name": "Advanced Health Checkup",
    "price": 1499,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Blood Glucose,HbA1c,Urea,Creatinine,Uric Acid,Total Cholesterol,Triglycerides,HDL,LDL,SGOT,SGPT,ALP,Bilirubin,T3,T4,TSH",
    "equipment": "Syringe (2), SST Tube (2), EDTA Tube (1), Alcohol Swab (1), Needle (1), Glucose Test Strip (1), Lancet (1), Urine Cup (1)"
  },
  {
    "name": "Women Health Checkup",
    "price": 1999,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Blood Glucose,HbA1c,TSH,FSH,LH,Prolactin,Estrogen (E2),Vitamin D,Calcium,Iron Studies",
    "equipment": "Syringe (1), SST Tube (1), EDTA Tube (1), Alcohol Swab (1), Needle (1), Urine Cup (1), Glucose Test Strip (1), Lancet (1)"
  },
  {
    "name": "Men Health Checkup",
    "price": 1999,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Blood Glucose,HbA1c,TSH,Testosterone,PSA,Vitamin D,Lipid Profile,Liver Function Test,Kidney Function Test",
    "equipment": "Syringe (1), SST Tube (1), EDTA Tube (1), Alcohol Swab (1), Needle (1), Urine Cup (1), Glucose Test Strip (1), Lancet (1)"
  },
  {
    "name": "Senior Citizen Health Checkup",
    "price": 2499,
    "parameters": "Hemoglobin,RBC,WBC,Platelet Count,Blood Glucose,HbA1c,Urea,Creatinine,Uric Acid,Lipid Profile,Liver Function Test,Thyroid Profile,Calcium,Vitamin D,Vitamin B12",
    "equipment": "Syringe (2), SST Tube (2), EDTA Tube (1), Alcohol Swab (1), Needle (1), Urine Cup (1), Glucose Test Strip (1), Lancet (1)"
  },
  {
    "name": "Diabetes Health Checkup",
    "price": 399,
    "parameters": "Fasting Blood Sugar,Postprandial Blood Sugar,HbA1c,Urine Sugar,Urine Microalbumin,Creatinine",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), Glucose Test Strip (1), Lancet (1), Urine Cup (1)"
  },
  {
    "name": "Heart Health Checkup",
    "price": 999,
    "parameters": "Fasting Blood Sugar,Postprandial Blood Sugar,HbA1c,Urine Sugar,Urine Microalbumin,Creatinine",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), EDTA Tube (1), Urine Cup (1)"
  },
  {
    "name": "Liver Health Checkup",
    "price": 499,
    "parameters": "Total Bilirubin,Direct Bilirubin,Indirect Bilirubin,SGOT,SGPT,ALP,Total Protein,Albumin,Globulin",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), EDTA Tube (1), Urine Cup (1)"
  },
  {
    "name": "Kidney Health Checkup",
    "price": 499,
    "parameters": "Urea,Creatinine,Uric Acid,Sodium,Potassium,Chloride,Urine Routine",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), EDTA Tube (1), Urine Cup (1)"
  },
  {
    "name": "Thyroid Health Checkup",
    "price": 299,
    "parameters": "T3,T4,TSH",
    "equipment": "Syringe (1), SST Tube (1), Alcohol Swab (1), Needle (1), EDTA Tube (1)"
  }
]

const output = {};

input.forEach(t => {
  output[t.name] = {
    price: Number(t.price),
    parameters: t.parameters.split(","),
    equipment: t.equipment.split(",")
  };
});

console.log(JSON.stringify(output, null, 2));
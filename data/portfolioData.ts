export interface MetricItem {
  value: string;
  label: string;
  unit?: string;
  highlightColor?: "primary" | "amber" | "white" | "dew";
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
  colorClass: string;
  borderClass: string;
  image: string;
  imageAlt: string;
  figureNumber: string;
}

export interface SpecimenPlant {
  binomial: string;
  commonName: string;
  localName: string;
  description: string;
  color: string;
}

export interface BenchmarkItem {
  title: string;
  value: string;
  subValue?: string;
  unit: string;
  tagColor: "primary" | "amber" | "dew";
}

export interface StandardCurvePoint {
  concentration: number; // ug/mL or mg/mL
  absorbance: number; // A765 or % scavenging
  predicted?: number;
}

export interface InvestigationItem {
  id: string;
  category: string;
  type: string;
  title: string;
  description: string;
  bullets: string[];
  technique: string;
  tagColor: "amber" | "primary" | "dew";
  image: string;
  imageAlt: string;
  figureNumber: string;
  keyMetric: string;
  fullProtocol: {
    reagents: string[];
    instrumentation: string;
    targetPathway: string;
    significance: string;
  };
}

export interface SkillItem {
  name: string;
  level: "Autonomous" | "Working" | "Theoretical";
  levelColor: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  borderColor: string;
  image: string;
  imageAlt: string;
  tagline: string;
  skills: SkillItem[];
}

export interface PracticumExperience {
  role: string;
  institution: string;
  period: string;
  summary: string;
  image: string;
  imageAlt: string;
  facilityBadge: string;
  controlsTitle: string;
  controls: string[];
  complianceTitle: string;
  compliance: string[];
  takeaway: string;
}

export interface TargetRole {
  id: string;
  number: string;
  title: string;
  institutions: string;
  description: string;
  valueAdd: string;
  color: string;
  borderColor: string;
  image: string;
  imageAlt: string;
  sectorBadge: string;
}

export interface CourseworkGroup {
  title: string;
  icon: string;
  color: string;
  courses: string[];
}

export const HERO_METRICS: MetricItem[] = [
  {
    value: "148.4",
    unit: "mg GAE/g",
    label: "Total Phenolics Density",
    highlightColor: "primary",
  },
  {
    value: "34.6",
    unit: "µg/mL",
    label: "DPPH IC50 Potency",
    highlightColor: "amber",
  },
  {
    value: "R² ≥ 0.998",
    label: "Assay Calibration Curve",
    highlightColor: "primary",
  },
  {
    value: "GLP",
    label: "Protocol Disciplined",
    highlightColor: "white",
  },
];

export const PILLARS: PillarItem[] = [
  {
    id: "living-systems",
    title: "Living Systems Respect",
    description:
      "Treating plant secondary metabolites as millions of years of evolutionary biochemistry designed for cellular defense, signaling, and survival against adverse tropical stressors.",
    tag: "Flora: Spider Plant · Nightshade · Amaranth",
    iconName: "Leaf",
    colorClass: "text-primary",
    borderClass: "border-primary/25",
    image: "/images/ethos-living-systems.jpg",
    imageAlt: "Macro living botanical specimen of Cleome and Solanum leaves with dewdrops and chlorophyll glow",
    figureNumber: "FIG. 01 · PHYTO-DEFENSE",
  },
  {
    id: "purity",
    title: "Purity & Reproducibility",
    description:
      "Triplicate UV-Vis spectrophotometry, gravimetrically verified micropipettes (±0.2% tolerance), and rigorous standard calibration curves consistently maintaining R² ≥ 0.998.",
    tag: "Metric: Triplicate Assays ± SD (p < 0.001)",
    iconName: "CheckCircle2",
    colorClass: "text-amber-extract",
    borderClass: "border-amber-extract/35",
    image: "/images/ethos-purity.jpg",
    imageAlt: "Precision micropipette dispensing golden botanical extract into quartz spectrophotometer cuvette",
    figureNumber: "FIG. 02 · CALIBRATION",
  },
  {
    id: "kinetic",
    title: "Kinetic Curiosity",
    description:
      "Deconstructing Michaelis-Menten dynamics and Lineweaver-Burk double reciprocal plots to quantify enzyme inhibition mechanisms for natural antidiabetic candidates.",
    tag: "Focus: Competitive Inhibition Kinetics",
    iconName: "Activity",
    colorClass: "text-dew",
    borderClass: "border-dew/35",
    image: "/images/ethos-kinetic.jpg",
    imageAlt: "Molecular enzyme-substrate catalytic kinetics visualization in living solution",
    figureNumber: "FIG. 03 · ENZYMOLOGY",
  },
  {
    id: "biosafety",
    title: "Biosafety & Harmony",
    description:
      "Conscious chemical solvent handling (methanol, chloroform), GLP adherence, proper biohazard neutralization, and non-destructive ecological sampling in Western Kenya.",
    tag: "Standard: GLP Protocol Compliance",
    iconName: "ShieldCheck",
    colorClass: "text-primary-fixed",
    borderClass: "border-primary-fixed/35",
    image: "/images/ethos-biosafety.jpg",
    imageAlt: "Laboratory chemical fume hood with amber reagent bottles and GLP compliance standards",
    figureNumber: "FIG. 04 · GLP PROTOCOL",
  },
];

export const THESIS_DATA = {
  title: "Phytochemical Content & Antioxidant Capacity of Selected Kenyan Indigenous Leafy Vegetables",
  institution: "Moi University Department of Biochemistry · 2025–2026",
  plants: [
    {
      binomial: "Cleome gynandra",
      commonName: "Spider Plant",
      localName: "Saget",
      description: "High flavonoid density, robust radical quenching",
      color: "amber-extract",
    },
    {
      binomial: "Amaranthus hybridus",
      commonName: "Amaranth Greens",
      localName: "Terere",
      description: "Rich in betalains and polyphenol conjugates",
      color: "primary",
    },
    {
      binomial: "Solanum nigrum",
      commonName: "African Nightshade",
      localName: "Managu",
      description: "Distinct steroidal alkaloid and phenolic profile",
      color: "dew",
    },
  ],
  narrative:
    "Conducted quantitative spectrophotometric profiling to correlate polyphenol density with free radical neutralization kinetics. Evaluated both crude aqueous and 80% methanolic fractions to contrast hydrophobic flavonoid partition efficiency against polar antioxidant scavengers.",
  protocols: [
    "Multi-step ultrasonic-assisted maceration yielding optimal secondary metabolite preservation.",
    "Dual-wavelength calibration: Folin-Ciocalteu at 765 nm; DPPH radical decay monitored at 517 nm.",
    "Statistical validation in R: One-Way ANOVA with Tukey’s HSD post-hoc (p < 0.001 significance).",
  ],
  benchmarks: [
    {
      title: "Total Phenolics",
      value: "148.4",
      subValue: "± 4.2",
      unit: "mg GAE / g dry weight (Folin-C)",
      tagColor: "primary" as const,
    },
    {
      title: "DPPH IC50 Potency",
      value: "34.6",
      subValue: "µg/mL",
      unit: "Ascorbic control benchmark: 18.2 µg/mL",
      tagColor: "amber" as const,
    },
    {
      title: "Pearson Correlation",
      value: "r = 0.89",
      unit: "p < 0.001 (Phenols vs Scavenging)",
      tagColor: "dew" as const,
    },
    {
      title: "Extraction Yield",
      value: "3.2x",
      unit: "Methanolic vs raw aqueous fraction",
      tagColor: "primary" as const,
    },
  ],
  abstractFull: `Abstract:
Indigenous African leafy vegetables represent an underutilized reservoir of secondary plant metabolites with potent therapeutic and nutraceutical properties. This investigation quantified the total phenolic content (TPC) and in vitro free radical scavenging potential of three prevalent Western Kenyan leafy vegetables: Cleome gynandra (spider plant / saget), Amaranthus hybridus (terere), and Solanum nigrum (African nightshade / managu).

Samples collected from certified agro-ecological zones in Uasin Gishu County underwent standardized air-drying and ultrasonic-assisted extraction using crude aqueous and 80% (v/v) aqueous methanol solvents. Total phenolic content was determined via the Folin-Ciocalteu assay at 765 nm against a gallic acid standard calibration curve (y = 0.0084x + 0.0121, R² = 0.9982). Antioxidant capacity was evaluated by measuring 2,2-diphenyl-1-picrylhydrazyl (DPPH) radical inhibition at 517 nm across serial concentrations (10–200 µg/mL), using ascorbic acid as a positive control.

Results demonstrated that methanolic fractions of Cleome gynandra yielded the highest phenolic concentration (148.4 ± 4.2 mg GAE/g dry weight), followed by Solanum nigrum (118.6 ± 3.8 mg GAE/g) and Amaranthus hybridus (92.3 ± 2.9 mg GAE/g). DPPH radical scavenging assay yielded an IC50 of 34.6 µg/mL for Cleome gynandra, displaying an extraordinarily strong inverse correlation with phenolic concentration (Pearson r = 0.89, p < 0.001). Methanolic extraction consistently demonstrated a 3.2-fold superiority over aqueous extraction in recovering antioxidant-active flavonoids.

These empirical bench findings provide rigorous biochemical validation for traditional dietary practices, substantiating the role of Kenyan indigenous flora as functional foods and viable pharmacological leads against oxidative stress-mediated degenerative disorders.`,
};

// Calibration curve dataset for Gallic Acid (Folin-Ciocalteu)
export const FOLIN_CURVE_DATA: StandardCurvePoint[] = [
  { concentration: 0, absorbance: 0.000, predicted: 0.012 },
  { concentration: 20, absorbance: 0.178, predicted: 0.180 },
  { concentration: 40, absorbance: 0.352, predicted: 0.348 },
  { concentration: 60, absorbance: 0.518, predicted: 0.516 },
  { concentration: 80, absorbance: 0.685, predicted: 0.684 },
  { concentration: 100, absorbance: 0.854, predicted: 0.852 },
];

// DPPH radical inhibition % dataset
export const DPPH_CURVE_DATA = [
  { concentration: 10, Cleome: 24.2, Amaranthus: 14.8, Solanum: 19.5, AscorbicControl: 41.2 },
  { concentration: 25, Cleome: 43.1, Amaranthus: 28.6, Solanum: 35.8, AscorbicControl: 68.4 },
  { concentration: 50, Cleome: 68.4, Amaranthus: 48.2, Solanum: 58.1, AscorbicControl: 89.2 },
  { concentration: 75, Cleome: 82.5, Amaranthus: 64.9, Solanum: 74.3, AscorbicControl: 95.8 },
  { concentration: 100, Cleome: 91.8, Amaranthus: 78.3, Solanum: 86.4, AscorbicControl: 98.4 },
];

export const FRACTION_COMPARISON = [
  {
    plant: "Cleome gynandra",
    commonName: "Spider Plant (Saget)",
    image: "/images/voucher-cleome.jpg",
    aqueous: 46.2,
    methanolic: 148.4,
    ratio: "3.21x",
  },
  {
    plant: "Solanum nigrum",
    commonName: "African Nightshade (Managu)",
    image: "/images/voucher-solanum.jpg",
    aqueous: 38.1,
    methanolic: 118.6,
    ratio: "3.11x",
  },
  {
    plant: "Amaranthus hybridus",
    commonName: "Smooth Amaranth (Terere)",
    image: "/images/voucher-amaranthus.jpg",
    aqueous: 31.4,
    methanolic: 92.3,
    ratio: "2.94x",
  },
];

export const SECONDARY_INVESTIGATIONS: InvestigationItem[] = [
  {
    id: "enzyme-kinetics",
    category: "Enzymology & Kinetics",
    type: "Bench Assay",
    title: "α-Amylase & Glucosidase Inhibition by Botanical Tinctures",
    description:
      "Determined kinetic inhibition mechanisms against porcine pancreatic α-amylase using 3,5-dinitrosalicylic acid (DNS). Constructed Lineweaver-Burk double reciprocal plots to evaluate Km shifts and Vmax invariance, revealing competitive plant-based antidiabetic candidates.",
    bullets: [
      "Type: Competitive Inhibition Mode",
      "IC50 Range: 42.1 – 78.4 µg/mL",
      "Substrate: Starch-iodine system with maltose calibration",
    ],
    technique: "540 nm Spectrophotometry",
    tagColor: "amber",
    image: "/images/investigation-enzyme-kinetics.jpg",
    imageAlt: "Laboratory spectrophotometric enzyme assay showing test tubes with amber plant extracts undergoing color reaction",
    figureNumber: "EXP. 01 · KINETIC ASSAY",
    keyMetric: "IC50: 42.1–78.4 µg/mL",
    fullProtocol: {
      reagents: [
        "Porcine pancreatic α-amylase (EC 3.2.1.1, 2 units/mL)",
        "1% w/v potato starch in 20 mM sodium phosphate buffer (pH 6.9 with 6.7 mM NaCl)",
        "DNS color reagent (1% 3,5-dinitrosalicylic acid, 12% sodium potassium tartrate in 0.4 M NaOH)",
        "Acarbose reference inhibitor (10–100 µg/mL)",
      ],
      instrumentation: "UV-Vis Dual-Beam Spectrophotometer at 540 nm (1 cm pathlength quartz cuvettes)",
      targetPathway: "Starch hydrolysis degradation pathway in carbohydrate digestion",
      significance: "Identifies dietary secondary metabolites that slow postprandial glucose surges without intestinal adverse effects.",
    },
  },
  {
    id: "in-silico-sod",
    category: "In-Silico Modeling",
    type: "Computational",
    title: "Superoxide Dismutase (SOD) & Polyphenol Binding",
    description:
      "Retrieved botanical and mammalian SOD sequences via NCBI and UniProt. Executed Clustal Omega alignments and utilized PyMOL to highlight active site catalytic copper/zinc coordination residues (His46, His48, His63) docking against quercetin ligands.",
    bullets: [
      "Tools: BLASTp, ClustalW, PyMOL Visualizer",
      "Structures: PDB 1CB4 & 2SOD curated models",
      "Binding Pocket: Catalytic Cu/Zn shell coordination",
    ],
    technique: "3D Homology & Structural Alignment",
    tagColor: "primary",
    image: "/images/investigation-in-silico-sod.jpg",
    imageAlt: "3D molecular docking model of Superoxide Dismutase active site binding quercetin ligand in catalytic pocket",
    figureNumber: "EXP. 02 · DOCKING MODEL",
    keyMetric: "Pocket: Cu/Zn His46-His63",
    fullProtocol: {
      reagents: [
        "FASTA sequence queries: Arabidopsis Cu/Zn SOD & Bos taurus SOD1",
        "Ligand conformations: Quercetin (CID 5280343), Kaempferol, Gallic acid",
        "Protein Data Bank files: 1CB4 (Spinach Cu/Zn SOD) & 2SOD (Bovine)",
      ],
      instrumentation: "PyMOL v2.5 molecular visualization suite, Clustal Omega multiple sequence aligner",
      targetPathway: "Reactive oxygen species (ROS) dismutation: 2O₂•⁻ + 2H⁺ → H₂O₂ + O₂",
      significance: "Demonstrates that polyphenols stabilize the electrostatic channel guiding superoxide radicals into the catalytic metal center.",
    },
  },
  {
    id: "post-harvest",
    category: "Community Post-Harvest",
    type: "Field Translation",
    title: "Indigenous Food Safety & Post-Harvest Resilience",
    description:
      "Co-organized educational workshops for smallholder produce vendors around Eldoret on nutritional phytochemical retention during solar drying and preventing fungal mycotoxin (Aflatoxin B1) spoilage in stored staple grains.",
    bullets: [
      "Scope: Aflatoxin B1 degradation & moisture control",
      "Outreach: 120+ Farmers & Market Vendors in Uasin Gishu",
      "Outcome: Standardized low-cost solar dehydration protocol",
    ],
    technique: "Community Extension & Analytical Diagnostics",
    tagColor: "dew",
    image: "/images/investigation-post-harvest.jpg",
    imageAlt: "Agricultural biochemistry field work in Western Kenya with solar dehydration drying trays and diagnostic test strips",
    figureNumber: "EXP. 03 · FIELD TRIAL",
    keyMetric: "Safety: < 10 ppb Aflatoxin",
    fullProtocol: {
      reagents: [
        "Rapid lateral flow strip test kits for Aflatoxin B1 screening (< 10 ppb threshold)",
        "Standard moisture meter instruments for grain equilibrium calibration",
        "Natural botanical preservatives (essential oil vapor fractions)",
      ],
      instrumentation: "Portable digital moisture sensor, UV blacklight fluorescence detection (365 nm)",
      targetPathway: "Aspergillus flavus fungal colonization and polyketide mycotoxin synthesis",
      significance: "Translates bench biochemistry directly into life-saving post-harvest storage practices for Western Kenyan agricultural communities.",
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Botanical Extraction & Wet Prep",
    icon: "FlaskConical",
    color: "text-primary",
    borderColor: "border-primary/30",
    image: "/images/skill-botanical-extraction.jpg",
    imageAlt: "Laboratory rotary evaporator and ultrasonic bath distilling emerald green plant extract",
    tagline: "Secondary Metabolite Isolation & Fractions",
    skills: [
      { name: "Maceration & Rotary Evaporation", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Buffer Prep & pH Calibration", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Serial Dilutions & Molarity Calculations", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Ultrasonic-Assisted Phytochemical Extraction", level: "Working", levelColor: "bg-dew/20 text-dew" },
    ],
  },
  {
    title: "Analytical Instrumentation",
    icon: "Activity",
    color: "text-amber-extract",
    borderColor: "border-amber-extract/35",
    image: "/images/skill-analytical-instrumentation.jpg",
    imageAlt: "UV-Vis spectrophotometer and Thin Layer Chromatography plates with fluorescent bands under UV",
    tagline: "Spectroscopy & Chromatographic Purity",
    skills: [
      { name: "UV-Vis Spectrophotometry", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Thin-Layer Chromatography (TLC)", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "Gravity & Flash Column Chromatography", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "HPLC & GC Principles", level: "Theoretical", levelColor: "bg-amber-extract/20 text-amber-extract" },
    ],
  },
  {
    title: "Molecular Bio & Electrophoresis",
    icon: "Dna",
    color: "text-primary-fixed",
    borderColor: "border-primary-fixed/35",
    image: "/images/skill-molecular-biology.jpg",
    imageAlt: "Agarose gel electrophoresis tank with luminous DNA bands under blue light transilluminator",
    tagline: "Genomic Isolation & Gel Fractionation",
    skills: [
      { name: "Total Botanical Genomic DNA Isolation", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "Agarose Gel Electrophoresis", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "PCR Setup & Thermocycling", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "SDS-PAGE Protein Fractionation", level: "Working", levelColor: "bg-dew/20 text-dew" },
    ],
  },
  {
    title: "Quantitative Biochemical Assays",
    icon: "Droplet",
    color: "text-dew",
    borderColor: "border-dew/35",
    image: "/images/skill-biochemical-assays.jpg",
    imageAlt: "96-well microplate colorimetric DPPH radical and Bradford protein assay serial dilutions",
    tagline: "Enzyme Kinetics & Radical Scavenging Assays",
    skills: [
      { name: "DPPH & ABTS Radical Scavenging", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Bradford & Lowry Protein Assays", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "α-Amylase DNS Kinetics", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "Enzymatic ELISA Immunoassays", level: "Working", levelColor: "bg-dew/20 text-dew" },
    ],
  },
  {
    title: "Computational Biology & Biostatistics",
    icon: "Laptop",
    color: "text-primary",
    borderColor: "border-primary/30",
    image: "/images/skill-computational-biology.jpg",
    imageAlt: "Bioinformatics terminal displaying 3D protein structures, BLAST alignment, and R regression plots",
    tagline: "In-Silico Docking & Biostatistical ANOVA in R",
    skills: [
      { name: "NCBI / BLASTp Homology", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "UniProt & PDB Curation", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "PyMOL 3D Visualizer", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "GraphPad Prism Kinetics", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
      { name: "R & ggplot2 ANOVA", level: "Working", levelColor: "bg-dew/20 text-dew" },
      { name: "Linear Regression Standard Curves (R²≥0.99)", level: "Autonomous", levelColor: "bg-primary/20 text-primary" },
    ],
  },
];

export const PRACTICUM_EXPERIENCES: PracticumExperience[] = [
  {
    role: "Industrial Attachment Laboratory Trainee",
    institution: "Accredited Diagnostic & Quality Analytical Facility · Western Kenya",
    period: "Practicum Period · 3 Months",
    summary:
      "Rotated across analytical biochemistry, clinical specimen accessioning, and food quality control testing units adhering to strict turnaround protocols.",
    image: "/images/practicum-diagnostic-lab.jpg",
    imageAlt: "Biochemist operating automated clinical chemistry analyzer in accredited laboratory facility in Kenya",
    facilityBadge: "Accredited Diagnostic Facility",
    controlsTitle: "Routine Operational Controls:",
    controls: [
      "Buffer compounding, physiological reagent standardization, and enzymatic substrate preparation.",
      "Operated automated analyzers and validated benchtop refractometers against analytical standards.",
      "Maintained accessioning logs and rigorous sample chain-of-custody integrity.",
    ],
    complianceTitle: "Quality & GLP Compliance:",
    compliance: [
      "Daily analytical gravimetric verification of micropipettes (± 0.2% tolerance limit).",
      "Strict biohazard segregation (organic solvents vs pathogenic biological specimens).",
      "Investigated and mitigated cuvette blank anomalies during high-throughput spectrophotometric runs.",
    ],
    takeaway: "Defensible data, audit-ready documentation, and operational composure under heavy analytical queues.",
  },
  {
    role: "Undergraduate Research Assistant & Peer Lab Demonstrator",
    institution: "Department of Biochemistry, Moi University · Main Campus, Eldoret",
    period: "Academic Years 2024–2026",
    summary:
      "Coordinated undergraduate biochemistry practical setups, demonstrated micropipette handling, and assisted peers in linear regression plotting for protein quantification.",
    image: "/images/practicum-academic-bench.jpg",
    imageAlt: "Moi University undergraduate biochemistry teaching and research laboratory bench with students and pipettes",
    facilityBadge: "Moi Univ. Biochemistry Dept.",
    controlsTitle: "Laboratory Demonstrations & Oversight:",
    controls: [
      "Pre-validated Bradford and DNS assay standard curves prior to cohort laboratory sessions.",
      "Demonstrated sterile micropipette dispensing and meniscus calibration technique.",
      "Monitored safe autoclave cycles, sterilization protocols, and shared cuvette hygiene.",
    ],
    complianceTitle: "Academic Mentorship & Safety:",
    compliance: [
      "Mentored junior scholars on Excel formula debugging and standard deviation calculations.",
      "Enforced chemical fume hood usage for glacial acetic acid and volatile organic solvents.",
      "Ensured zero laboratory contamination incidents across consecutive practical semesters.",
    ],
    takeaway: "Clear pedagogical communication, student laboratory safety discipline, and reproducible cohort results.",
  },
];

export const TARGET_ROLES: TargetRole[] = [
  {
    id: "role-1",
    number: "01",
    title: "Research Assistant / Lab Technologist",
    institutions: "KEMRI, KALRO, ICIPE, Universities, MTRH",
    description:
      "Immediate readiness for specimen accessioning, buffer compounding, nucleic acid extraction, kinetic spectrophotometry, and meticulous SOP execution.",
    valueAdd: "Immediate Value: Fast, clean assay runs & audit-ready records",
    color: "text-primary",
    borderColor: "border-primary/30",
    image: "/images/role-research-assistant.jpg",
    imageAlt: "Research assistant working in biomedical research laboratory with pipette and samples",
    sectorBadge: "National Research Institutes",
  },
  {
    id: "role-2",
    number: "02",
    title: "QA / QC Analytical Chemist & Biochemist",
    institutions: "Food, FMCG, Beverage & Pharma Processing",
    description:
      "Applies standardized wet chemistry (titrations, spectrophotometric verification, proximate analysis, total soluble solids) for batch consistency.",
    valueAdd: "Immediate Value: Batch compliance audits & variance control",
    color: "text-amber-extract",
    borderColor: "border-amber-extract/35",
    image: "/images/role-qa-chemist.jpg",
    imageAlt: "Quality control analytical chemist testing food and beverage batch purity",
    sectorBadge: "Industrial FMCG & Pharma",
  },
  {
    id: "role-3",
    number: "03",
    title: "Clinical & Diagnostic Lab Technologist",
    institutions: "Pathology Centers & Referral Laboratories",
    description:
      "Experienced in pre-analytical micropipetting, serum separation, reagent reconstitution, and automated clinical chemistry maintenance.",
    valueAdd: "Immediate Value: Pre-analytical accuracy & high throughput",
    color: "text-primary-fixed",
    borderColor: "border-primary-fixed/35",
    image: "/images/role-diagnostic-technologist.jpg",
    imageAlt: "Clinical pathology laboratory technologist handling automated analyzers and blood serum tubes",
    sectorBadge: "Clinical Pathology",
  },
  {
    id: "role-4",
    number: "04",
    title: "Clinical Research Assistant (CRO)",
    institutions: "Clinical Trial Units & Epidemiological Trusts",
    description:
      "Trained in ICH-GCP ethics, biological specimen cataloging, cold-chain protocol (-80°C preservation), and Case Report Form auditing.",
    valueAdd: "Immediate Value: Protocol & consent compliance fidelity",
    color: "text-dew",
    borderColor: "border-dew/35",
    image: "/images/role-clinical-cro.jpg",
    imageAlt: "Clinical trials research coordinator managing specimen logs and protocols",
    sectorBadge: "Epidemiological Trials",
  },
  {
    id: "role-5",
    number: "05",
    title: "Standards & Regulatory Technical Officer",
    institutions: "KEBS, Pharmacy & Poisons Board, Audit Units",
    description:
      "Skilled in assessing testing parameters against East African Standards (EAS), documentation audits, and chemical safety data sheet adherence.",
    valueAdd: "Immediate Value: Audit checklist precision & regulatory alignment",
    color: "text-primary",
    borderColor: "border-primary/30",
    image: "/images/role-regulatory-officer.jpg",
    imageAlt: "Regulatory standards officer verifying assay compliance and laboratory audits",
    sectorBadge: "Regulatory & Standards",
  },
  {
    id: "role-6",
    number: "06",
    title: "Postgraduate Research Fellow (M.Sc.)",
    institutions: "Biochemistry, Molecular Medicine, Pharmacology",
    description:
      "Deeply grounded in natural product extraction, kinetic assay design, and scientific publishing standards—ready for funded graduate fellowships.",
    valueAdd: "Immediate Value: Research-ready fellow with strong thesis foundation",
    color: "text-amber-extract",
    borderColor: "border-amber-extract/35",
    image: "/images/role-postgraduate-fellow.jpg",
    imageAlt: "Postgraduate research fellow conducting molecular biophysics and natural product experiments",
    sectorBadge: "Academic Fellowships",
  },
];

export const COURSEWORK_GROUPS: CourseworkGroup[] = [
  {
    title: "Core Biochemistry & Metabolism",
    icon: "Atom",
    color: "text-primary",
    courses: [
      "Enzymology & Enzyme Kinetics",
      "Intermediary Metabolism",
      "Bioenergetics & Oxidative Phosphorylation",
      "Biochemical Endocrinology",
      "Metabolic Regulation & Integration",
    ],
  },
  {
    title: "Molecular & Cellular Biology",
    icon: "Dna",
    color: "text-amber-extract",
    courses: [
      "Molecular Genetics & Gene Regulation",
      "Recombinant DNA Technology",
      "Immunology & Immunochemistry",
      "Cell Signaling Cascades",
      "Cell Biology & Membrane Transport",
    ],
  },
  {
    title: "Analytical & Clinical Sciences",
    icon: "TestTube",
    color: "text-dew",
    courses: [
      "Spectroscopic Techniques & Chromatography",
      "Clinical Biochemistry & Pathophysiology",
      "Toxicology & Pharmacology",
      "Bioanalytical Techniques & Instrumentation",
      "Diagnostic Enzymology",
    ],
  },
  {
    title: "Applied Phytochemistry & Bioinformatics",
    icon: "Sprout",
    color: "text-primary-fixed",
    courses: [
      "Plant & Phytochemical Biochemistry",
      "Food & Nutritional Biochemistry",
      "Bioinformatics & In-Silico Modeling",
      "Biostatistics & Research Methods in R",
      "Environmental Biochemistry & Biosafety",
    ],
  },
];

export interface ChromatographyPeak {
  id: string;
  name: string;
  retentionTime: number; // minutes
  relativeArea: number; // %
  purity: number; // %
  lambdaMax: number; // nm
  kPrime: number; // retention factor
  theoreticalPlates: number; // N
  category: "Phenolic Acid" | "Flavonol Glycoside" | "Flavonoid Aglycone";
  color: "amber" | "primary" | "dew";
  plantSource: string;
}

export const CHROMATOGRAPHY_PEAKS: ChromatographyPeak[] = [
  {
    id: "peak-1",
    name: "Gallic Acid",
    retentionTime: 1.84,
    relativeArea: 18.4,
    purity: 98.6,
    lambdaMax: 271,
    kPrime: 1.25,
    theoreticalPlates: 4850,
    category: "Phenolic Acid",
    color: "primary",
    plantSource: "Cleome gynandra & Solanum nigrum",
  },
  {
    id: "peak-2",
    name: "Chlorogenic Acid",
    retentionTime: 3.62,
    relativeArea: 22.1,
    purity: 97.2,
    lambdaMax: 325,
    kPrime: 2.84,
    theoreticalPlates: 6200,
    category: "Phenolic Acid",
    color: "amber",
    plantSource: "Solanum nigrum (Nightshade)",
  },
  {
    id: "peak-3",
    name: "Quercetin-3-O-rutinoside (Rutin)",
    retentionTime: 5.88,
    relativeArea: 34.8,
    purity: 99.1,
    lambdaMax: 356,
    kPrime: 4.62,
    theoreticalPlates: 8940,
    category: "Flavonol Glycoside",
    color: "primary",
    plantSource: "Cleome gynandra & Amaranthus hybridus",
  },
  {
    id: "peak-4",
    name: "Kaempferol-3-O-glucoside",
    retentionTime: 8.41,
    relativeArea: 16.7,
    purity: 96.5,
    lambdaMax: 368,
    kPrime: 6.95,
    theoreticalPlates: 7450,
    category: "Flavonol Glycoside",
    color: "dew",
    plantSource: "Cleome gynandra (Spider Plant)",
  },
  {
    id: "peak-5",
    name: "Free Quercetin Aglycone",
    retentionTime: 10.15,
    relativeArea: 8.0,
    purity: 98.9,
    lambdaMax: 370,
    kPrime: 8.42,
    theoreticalPlates: 9120,
    category: "Flavonoid Aglycone",
    color: "amber",
    plantSource: "Hydrolyzed Extract Fractions",
  },
];

export interface HerbariumVoucher {
  id: string;
  voucherNumber: string;
  binomial: string;
  authority: string;
  family: string;
  commonName: string;
  localName: string;
  locality: string;
  coordinates: string;
  altitude: string;
  collector: string;
  collectionDate: string;
  phenology: string;
  morphology: string;
  phytochemicalProfile: string;
  microscopyDetail: string;
  statusBadge: string;
  accentColor: "primary" | "amber" | "dew";
  macroImage: string;
  microImage: string;
}

export const HERBARIUM_VOUCHERS: HerbariumVoucher[] = [
  {
    id: "voucher-cleome",
    voucherNumber: "MOU-HERB-2025-014",
    binomial: "Cleome gynandra",
    authority: "L.",
    family: "Cleomaceae / Capparaceae",
    commonName: "Spider Plant",
    localName: "Saget (Kalenjin) / Dek (Luo)",
    locality: "Chepkoilel Agricultural Experimental Grounds, Uasin Gishu County, Kenya",
    coordinates: "0°34'12\" N, 35°18'04\" E",
    altitude: "2,180 m ASL",
    collector: "Alloice Alloice Otieno (Voucher #014)",
    collectionDate: "September 18, 2025 · 07:15 AM EAT",
    phenology: "Active flowering & early silique capsule formation",
    morphology: "Erect annual herb with 5-foliolate palmately compound leaves, glandular pubescence, elongated androphore/gynophore stalk, and white-to-purple cruciform petals.",
    phytochemicalProfile: "Highest total phenolic density (148.4 ± 4.2 mg GAE/g). Abundant flavonol glycosides (rutin, quercetin derivatives) and glucosinolates providing powerful DPPH radical quenching (IC50 = 34.6 µg/mL).",
    microscopyDetail: "Abundant multi-cellular capitate glandular trichomes on adaxial leaf surface secreting protective flavonoid-rich resins.",
    statusBadge: "Herbarium Accessioned & Verified",
    accentColor: "primary",
    macroImage: "/images/voucher-cleome.jpg",
    microImage: "/images/microscopic-cell.jpg",
  },
  {
    id: "voucher-amaranthus",
    voucherNumber: "MOU-HERB-2025-015",
    binomial: "Amaranthus hybridus",
    authority: "L.",
    family: "Amaranthaceae",
    commonName: "Smooth Amaranth Greens",
    localName: "Terere (Kikuyu) / Omboga (Luhya)",
    locality: "Kaptagat Highlands Transition Belt, Rift Valley Escarpment, Kenya",
    coordinates: "0°26'18\" N, 35°29'45\" E",
    altitude: "2,340 m ASL",
    collector: "Alloice Alloice Otieno (Voucher #015)",
    collectionDate: "September 19, 2025 · 07:45 AM EAT",
    phenology: "Vegetative lush folio prior to terminal panicle spike emergence",
    morphology: "Vigorous erect herb up to 1.2 m, glabrous furrowed reddish stems, ovate to rhombic green foliage with purplish pigmentation along central veins, dense taproot.",
    phytochemicalProfile: "Total phenolics 92.3 ± 2.9 mg GAE/g. Synergistic antioxidant complex with betacyanins, betalain pigments, squalene, and water-soluble ascorbic conjugates (DPPH IC50 = 54.2 µg/mL).",
    microscopyDetail: "Thick mesophyll with characteristic Kranz anatomy (C4 photosynthetic pathway) optimizing carbon assimilation and secondary metabolism under high equatorial irradiance.",
    statusBadge: "Herbarium Accessioned & Verified",
    accentColor: "amber",
    macroImage: "/images/voucher-amaranthus.jpg",
    microImage: "/images/ethos-living-systems.jpg",
  },
  {
    id: "voucher-solanum",
    voucherNumber: "MOU-HERB-2025-016",
    binomial: "Solanum nigrum",
    authority: "L. sensu lato",
    family: "Solanaceae",
    commonName: "African Black Nightshade",
    localName: "Managu (Kikuyu) / Osuga (Luo) / Isoiyot (Kalenjin)",
    locality: "Moiben Agro-ecological Station, Eldoret North, Kenya",
    coordinates: "0°49'02\" N, 35°28'11\" E",
    altitude: "2,120 m ASL",
    collector: "Alloice Alloice Otieno (Voucher #016)",
    collectionDate: "September 21, 2025 · 06:50 AM EAT",
    phenology: "Mature foliage with umbelliform cymes bearing small white flowers and unripe green berries",
    morphology: "Spreading herbaceous sub-shrub with alternate sinuate-dentate leaves, cymose inflorescence, 5-parted stellate white corolla with prominent connivent yellow anthers, dull black globose berries upon ripening.",
    phytochemicalProfile: "Total phenolics 118.6 ± 3.8 mg GAE/g. Unique secondary metabolite spectrum coupling hydroxycinnamic acid derivatives (chlorogenic acid) with steroidal glycoalkaloids (solanine / solamargine) yielding DPPH IC50 = 42.8 µg/mL.",
    microscopyDetail: "Anomocytic stomata with prominent protective cuticular striations reducing transpirational stress while sequestering defensive phenolic reserves.",
    statusBadge: "Herbarium Accessioned & Verified",
    accentColor: "dew",
    macroImage: "/images/voucher-solanum.jpg",
    microImage: "/images/thesis-specimen.jpg",
  },
];


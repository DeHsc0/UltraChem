export type Product = {
  slug: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  tdsUrl: string;
};

export const companyInfo = {
  name: "UltraChem Infra Solutions Pvt. Ltd.",
  shortName: "UltraChem",
  location: "Nagpur, Maharashtra",
  email: "sales@ultrachem.in",
  phone: "+91 712 555 2100",
  supportPhone: "+91 98230 44556",
  hours: "Mon-Sat 9:00 AM to 6:30 PM",
  heroTitle: "Building Infrastructure with Consistency",
  heroDescription:
    "High-performance construction chemical systems engineered for infrastructure, industrial, and building projects across India."
};

export const companyProfileParagraphs = [
  "UltraChem Infra Solutions Pvt. Ltd., headquartered in Nagpur, Maharashtra, is a professionally managed construction chemicals company delivering high-performance, technically advanced, and cost-efficient solutions for modern infrastructure and building projects across the nation.",
  "Backed by over 10 years of industry leadership and technical management experience, UltraChem specializes in enhancing the durability, structural integrity, waterproofing performance, and service life of concrete structures.",
  "We operate with a solution-driven approach by combining quality-controlled manufacturing, technical expertise, and on-site support for government departments, infrastructure contractors, industrial developers, and leading construction companies."
];

export const menuLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Sectors", href: "/sectors" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const navMenu = {
  about: [
    { label: "Company Profile", href: "/about" },
    { label: "Vision & Mission", href: "/about#vision" },
    { label: "Core Competence", href: "/about#services" },
    { label: "Technical Services", href: "/about#services" },
    { label: "Quality Assurance", href: "/about#services" }
  ],
  products: [
    {
      label: "Crystalline Durability Admixture",
      href: "/products/ultraheal-2106"
    },
    {
      label: "Concrete Admixtures",
      href: "/products",
      children: [
        { label: "ULTRAMIX PC-M", href: "/products/ultramix-pc-m" },
        { label: "ULTRAMIX PC-H", href: "/products/ultramix-pc-h" },
        { label: "ULTRAMIX PC", href: "/products/ultramix-pc" }
      ]
    },
    {
      label: "Corrosion Inhibitors",
      href: "/products",
      children: [
        { label: "UltraShield TTCI", href: "/products/ultrashield-ttci" },
        { label: "UltraGuard ST", href: "/products/ultraguard-st" },
        { label: "ULTRASHIELD 0702", href: "/products/ultrashield-0702" }
      ]
    },
    {
      label: "Curing Compounds",
      href: "/products",
      children: [
        { label: "UltraCure RB7", href: "/products/ultracure-rb7" },
        { label: "UltraCure WB", href: "/products/ultracure-wb" },
        { label: "ULTRACURE RB 7", href: "/products/ultracure-rb-7" },
        { label: "ULTRACURE WB 7", href: "/products/ultracure-wb-7" }
      ]
    },
    {
      label: "Joint Sealants",
      href: "/products",
      children: [
        {
          label: "Polysulphide Sealant (PS)",
          href: "/products/polysulphide-sealant-ps"
        },
        { label: "Polyurethane Sealant (PU)", href: "/products/ultraseal-pu" },
        { label: "UltraPrime", href: "/products/ultraprime" }
      ]
    },
    {
      label: "Waterproofing Systems",
      href: "/products",
      children: [
        { label: "UltraDeck Seal", href: "/products/ultradeck-seal" },
        { label: "UltraLiquid Plus", href: "/products/ultraliquid-plus" }
      ]
    }
  ],
  sectors: [
    { label: "Infrastructure Projects", href: "/sectors" },
    { label: "Highways & Expressways", href: "/sectors" },
    { label: "Bridges & Flyovers", href: "/sectors" },
    { label: "Metro & Rail", href: "/sectors" },
    { label: "Ports & Airports", href: "/sectors" },
    { label: "Irrigation & Canals", href: "/sectors" },
    { label: "Industrial Structures", href: "/sectors" },
    { label: "Commercial Buildings", href: "/sectors" },
    { label: "Residential Projects", href: "/sectors" },
    { label: "Water Retaining Structures", href: "/sectors" },
    { label: "STP / WTP Facilities", href: "/sectors" }
  ],
  resources: [
    { label: "Downloads", href: "/resources#downloads" },
    { label: "Product Catalogue", href: "/resources#downloads" },
    { label: "Technical Data Sheets", href: "/resources#downloads" },
    { label: "Brochures", href: "/resources#downloads" },
    { label: "Gallery", href: "/resources" }
  ]
};

export const categories = [
  {
    name: "Crystalline Durability Admixture",
    description:
      "Integral crystalline chemistry to block capillaries and micro-cracks for long-term water resistance."
  },
  {
    name: "Concrete Admixtures",
    description:
      "Workability and strength optimization for high-grade, pumped, precast, and self-compacting concrete."
  },
  {
    name: "Corrosion Inhibitors",
    description:
      "Advanced protection systems that delay steel corrosion initiation in chloride and carbonation exposure."
  },
  {
    name: "Curing Compounds",
    description:
      "Resin and paraffin-based curing membranes that preserve hydration and improve final durability."
  },
  {
    name: "Joint Sealants",
    description:
      "Durable and flexible systems for expansion joints, industrial flooring, facades, and high-movement structures."
  },
  {
    name: "Waterproofing Systems",
    description:
      "Liquid membranes and bituminous systems for terraces, podiums, basements, and critical deck protection."
  }
];

export const homeFlowHighlights = [
  {
    title: "Concrete Admixtures",
    description:
      "High-performance solutions that improve workability, control setting time, enhance strength, and ensure consistent concrete quality."
  },
  {
    title: "Crystalline Waterproofing Systems",
    description:
      "Integral waterproofing admixtures that form insoluble crystals within concrete, blocking capillaries and micro-cracks for long-term protection."
  },
  {
    title: "Corrosion Inhibitors",
    description:
      "Advanced formulations that protect reinforcement steel from chloride and environmental corrosion, extending structural service life."
  },
  {
    title: "Curing Compounds",
    description:
      "Efficient curing systems that reduce moisture loss, minimize shrinkage cracks, and support proper hydration for optimal strength."
  },
  {
    title: "Sealants & Waterproofing Systems",
    description:
      "Flexible sealants and comprehensive waterproofing solutions for joints, terraces, basements, and moisture-prone areas."
  }
];

export const productCatalog: Product[] = [
  {
    slug: "ultramix-pc-m",
    name: "ULTRAMIX PC-M",
    category: "Concrete Admixtures",
    subtitle: "Mid-Range PCE Based Admixture",
    description:
      "A balanced water-reducing admixture for general high-grade concrete requiring strong workability and reliable finish control.",
    features: [
      "Improves workability and pumpability",
      "Helps optimize setting time",
      "Supports high-grade concrete consistency"
    ],
    applications: [
      "General infrastructure and building concrete",
      "Pumped concrete and slabs",
      "Precast and ready-mix applications"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultramix-pc-h",
    name: "ULTRAMIX PC-H",
    category: "Concrete Admixtures",
    subtitle: "High-Performance PCE Based Admixture",
    description:
      "A stronger superplasticizer option for demanding concrete mixes that need higher water reduction and retained workability.",
    features: [
      "High water reduction potential",
      "Good slump retention",
      "Suitable for high-performance concrete"
    ],
    applications: [
      "Bridge decks and high-rise structures",
      "Pumped and self-compacting concrete",
      "Precast and critical structural pours"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultramix-pc",
    name: "ULTRAMIX PC",
    category: "Concrete Admixtures",
    subtitle: "PCE Based Admixture for Wide Range of High Grade Concrete",
    description:
      "High-range water reducing admixture that enables premium workability retention while achieving higher early and long-term strength.",
    features: [
      "Very high water reduction capability",
      "Improved concrete quality and finish",
      "Supports high performance concrete production",
      "Chloride free and low alkali chemistry"
    ],
    applications: [
      "Self-compacting and pumped concrete",
      "Precast units, highways, and bridge decks",
      "High-rise and infrastructure grade concrete"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultrashield-ttci",
    name: "UltraShield TTCI",
    category: "Corrosion Inhibitors",
    subtitle: "Traversing Type Corrosion Inhibitor",
    description:
      "A penetrating corrosion inhibitor designed to move through concrete and protect reinforcement in aggressive chloride exposure.",
    features: [
      "Migrates through concrete pore structure",
      "Forms protective layer on steel",
      "Ideal for chloride-prone exposure"
    ],
    applications: [
      "Marine and coastal structures",
      "Repair and rehabilitation works",
      "Infrastructure requiring extended service life"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultracure-rb-7",
    name: "ULTRACURE RB 7",
    category: "Curing Compounds",
    subtitle: "Resin Based Curing Compound for Concrete",
    description:
      "Forms a durable resin membrane to reduce moisture evaporation and ensure complete hydration for designed strength.",
    features: [
      "Thin resin membrane formation",
      "Minimizes water evaporation from concrete",
      "Ensures proper cement hydration",
      "Complies with ASTM C309 curing standards"
    ],
    applications: [
      "Infrastructure projects",
      "Exposed concrete surfaces",
      "All grades of concrete and mass concrete works"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultracure-rb7",
    name: "UltraCure RB7",
    category: "Curing Compounds",
    subtitle: "Resin Based Curing Compound",
    description:
      "Resin curing system aligned with the brochure naming used in the navigation structure.",
    features: [
      "Reduces water evaporation",
      "Ensures proper hydration",
      "Supports strength development"
    ],
    applications: [
      "Infrastructure project concrete",
      "Exposed concrete surfaces",
      "Mass concrete works"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultracure-wb-7",
    name: "ULTRACURE WB 7",
    category: "Curing Compounds",
    subtitle: "Paraffin Based White Pigmented Curing Compound",
    description:
      "White pigmented curing compound designed to reduce water loss and improve abrasion and compressive characteristics.",
    features: [
      "Continuous impermeable curing film",
      "Reduced evaporation of mixing water",
      "Supports proper cement hydration",
      "Improves compressive strength and abrasion resistance"
    ],
    applications: [
      "Highways and rigid pavements",
      "Slabs, columns, beams, and retaining walls",
      "Foundations, roof decks, canals, runways, and taxiways"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultracure-wb",
    name: "UltraCure WB",
    category: "Curing Compounds",
    subtitle: "White Pigmented Paraffin Based Curing Compound",
    description:
      "White pigmented curing compound variant aligned with the site navigation shorthand.",
    features: [
      "Impermeable curing film",
      "Reduces evaporation of mixing water",
      "Supports proper hydration"
    ],
    applications: [
      "Highways and rigid pavements",
      "Slabs, beams, and retaining walls",
      "Roof decks and taxiways"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultra-liquid-plus",
    name: "ULTRA LIQUID +",
    category: "Waterproofing Systems",
    subtitle: "Polyurethane Liquid Waterproofing Membrane",
    description:
      "Single-pack polyurethane membrane engineered for complex geometries and long-term weathering resistance.",
    features: [
      "Thixotropic for vertical and irregular surfaces",
      "Excellent adhesion on common construction substrates",
      "Flexible membrane with thermal movement resistance",
      "High tensile strength and abrasion resistance",
      "Resistant to water, alkali, and fungal growth"
    ],
    applications: [
      "Roofs and terraces",
      "Basements and foundation protection",
      "Reservoirs and swimming pools",
      "Chemical, refinery, and marine environments"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultraliquid-plus",
    name: "UltraLiquid Plus",
    category: "Waterproofing Systems",
    subtitle: "Polyurethane Liquid Waterproofing Membrane",
    description:
      "Alias entry for the brochure naming of UltraLiquid Plus, used in the navigation dropdown.",
    features: [
      "Thixotropic on vertical surfaces",
      "Excellent substrate adhesion",
      "Flexible membrane for movement"
    ],
    applications: [
      "Roofs and terraces",
      "Basements and foundations",
      "Marine and chemical environments"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultra-seal-ps",
    name: "ULTRA SEAL PS",
    category: "Joint Sealants",
    subtitle: "Two Component Rapid Curing Cold Applied Polysulphide Sealant",
    description:
      "Cold-applied two-component joint sealant built for high movement joints and aggressive environmental exposure.",
    features: [
      "Excellent adhesion with long-term flexibility",
      "Resistance to fuels, oils, chemicals, UV, and weather",
      "Accommodates movement with non-sag behavior"
    ],
    applications: [
      "Expansion joints in buildings and industrial floors",
      "Airports, runways, roads, and bridge expansion systems"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "polysulphide-sealant-ps",
    name: "Polysulphide Sealant (PS)",
    category: "Joint Sealants",
    subtitle: "Two Component Rapid Curing Cold Applied Sealant",
    description:
      "Alias naming used for the dropdown hierarchy and brochure flow.",
    features: [
      "Excellent adhesion",
      "Long-term flexibility",
      "Resistance to fuels, oils, and UV"
    ],
    applications: [
      "Expansion joints in buildings",
      "Pavements and industrial floors",
      "Infrastructure works"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultraseal-pu",
    name: "ULTRASEAL PU",
    category: "Joint Sealants",
    subtitle: "Polyurethane Sealant",
    description:
      "High-elasticity polyurethane sealant for structural and movement joints in heavy-duty civil applications.",
    features: [
      "Excellent elasticity and flexibility",
      "Strong adhesion and long service life",
      "Single-component and easy application",
      "Chemical, abrasion, weather, and UV resistance"
    ],
    applications: [
      "Joints in slabs, retaining walls, and foundations",
      "Highways, bridges, and marine structures",
      "Sea walls, jetties, docks, and port facilities"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultraprime",
    name: "UltraPrime",
    category: "Joint Sealants",
    subtitle: "Single Component Primer",
    description:
      "Primer for polysulphide systems and porous surfaces, matching the short form used in navigation.",
    features: [
      "Improves adhesion",
      "Easy low-viscosity application",
      "Reduces porosity-related bubbling"
    ],
    applications: [
      "Primer for joint sealants",
      "Concrete grooves and bricks",
      "Porous surface treatment"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultraheal-2106",
    name: "ULTRAHEAL 2106",
    category: "Crystalline Durability Admixture",
    subtitle: "Crystalline Waterproofing Admixture",
    description:
      "Integral crystalline admixture that permanently blocks moisture ingress and supports self-healing of fine cracks.",
    features: [
      "Insoluble crystal formation to seal pores",
      "Self-healing of micro-cracks up to 0.5 mm",
      "Reacts with free lime and moisture in concrete",
      "Permanent and integral protection",
      "Improved chloride, sulfate, and chemical resistance"
    ],
    applications: [
      "Underground and basement structures",
      "Infrastructure and transport corridors",
      "Marine and coastal structures",
      "Water-immersed concrete systems"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultrashield-0702",
    name: "ULTRASHIELD 0702",
    category: "Corrosion Inhibitors",
    subtitle: "Traversing Type Corrosion Inhibitor (Powder)",
    description:
      "Powder corrosion inhibitor with traversing molecules designed to protect reinforcement in aggressive chloride zones.",
    features: [
      "Protects against chloride and carbonation corrosion",
      "Penetrates concrete to reach reinforcement",
      "Forms an invisible protective monomolecular layer",
      "Compatible with OPC, PPC, and slag cement"
    ],
    applications: [
      "Ready-mix and high-strength concrete",
      "Mass concreting and durable infrastructure",
      "Coastal and marine structures"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultraguard-st",
    name: "ULTRAGUARD ST",
    category: "Corrosion Inhibitors",
    subtitle: "Corrosion Inhibiting Admixture (Liquid)",
    description:
      "Liquid corrosion inhibitor for concrete systems requiring long-term resistance to chloride-induced deterioration.",
    features: [
      "Simple dosing in ready-mix or precast systems",
      "Dual-action corrosion delay mechanism",
      "Significantly extends concrete service life",
      "Effective across variable chloride concentrations"
    ],
    applications: [
      "Marine and coastal exposed concrete",
      "Parking deck and balcony structures",
      "Exterior reinforced concrete frameworks"
    ],
    tdsUrl: "/resources#downloads"
  },
  {
    slug: "ultradeck-seal",
    name: "ULTRADECK SEAL",
    category: "Waterproofing Systems",
    subtitle:
      "APP Modified Bituminous Membrane for Bridge Decks & Heavy-load Intersections",
    description:
      "Dual-reinforced APP membrane intended for heavy-load decks, ramps, and intersections with direct asphalting compatibility.",
    features: [
      "Dual fiberglass and polyester reinforcement",
      "High heat stability for elevated exposure",
      "Designed for heavy-duty traffic loading"
    ],
    applications: [
      "Bridge decks and highway ramps",
      "Intersections with high thermal cycling",
      "Direct asphalting systems"
    ],
    tdsUrl: "/resources#downloads"
  }
];

export const sectors = [
  "Infrastructure Projects",
  "Highways & Expressways",
  "Bridges & Flyovers",
  "Metro & Rail Projects",
  "Ports & Airports",
  "Irrigation & Canal Projects",
  "Industrial Structures",
  "Commercial Buildings",
  "Residential Projects",
  "Water Retaining Structures",
  "STP / WTP Facilities"
];

export const technicalServices = [
  "On-Site Technical Assistance",
  "Mix Design Support",
  "Product & System Recommendation",
  "Application Supervision",
  "Site Diagnosis",
  "Performance-Based Solutions",
  "Quick Professional Response to Technical Queries"
];

export const qualityAssurancePoints = [
  "Strict Raw Material Inspection",
  "Controlled Manufacturing Processes",
  "Batch-Wise Quality Testing",
  "Pre-Dispatch Performance Validation",
  "Compliance with Industry Standards"
];

export const directorMessage =
  "At UltraChem, consistency is our strength. In construction, there is no space for uncertainty. Every product is precision-engineered, rigorously tested, and built for unwavering performance in every batch and every project.";

export const otherProductRanges = [
  "Microsilica",
  "Steel & PP Fibers",
  "Paints & Coatings",
  "Road Markings",
  "Road Furniture"
];

export const productHierarchy = [
  {
    category: "Crystalline Durability Admixture",
    products: ["ULTRAHEAL 2106"]
  },
  {
    category: "Concrete Admixtures",
    products: ["ULTRAMIX PC-M", "ULTRAMIX PC-H", "ULTRAMIX PC"]
  },
  {
    category: "Corrosion Inhibitors",
    products: ["UltraShield TTCI", "ULTRASHIELD 0702", "ULTRAGUARD ST"]
  },
  {
    category: "Curing Compounds",
    products: ["ULTRACURE RB 7", "ULTRACURE WB 7"]
  },
  {
    category: "Joint Sealants",
    products: ["ULTRA SEAL PS", "ULTRASEAL PU", "ULTRA PRIME"]
  },
  {
    category: "Waterproofing Systems",
    products: ["ULTRADECK SEAL", "ULTRA LIQUID +"]
  }
];

export const clientShowcase = [
  "Government Infrastructure Projects",
  "Highways & Expressways",
  "Metro & Rail Projects",
  "Industrial Structures",
  "Water Retaining Structures",
  "STP / WTP Facilities"
];

export const differentiators = [
  {
    title: "Built for Site Reality",
    description:
      "Solutions developed to perform in real site conditions, not only controlled laboratory settings."
  },
  {
    title: "Consistent Quality",
    description:
      "Strict incoming checks, controlled processing, and batch-wise quality validation before dispatch."
  },
  {
    title: "High Performance",
    description:
      "Engineered to improve durability, strength, and service life of concrete systems."
  },
  {
    title: "Technical Expertise",
    description:
      "Experienced teams provide practical recommendations, diagnosis, and application support."
  },
  {
    title: "Complete Solutions",
    description:
      "From product selection to supervision and troubleshooting, systems are delivered end-to-end."
  },
  {
    title: "Cost Efficient",
    description:
      "Optimized formulations balance technical outcomes with overall project economy."
  },
  {
    title: "Proven Reliability",
    description:
      "Trusted across demanding infrastructure, industrial, and water-retaining projects."
  },
  {
    title: "Long-Term Durability",
    description:
      "Designed to reduce maintenance cycles and improve lifecycle value of built assets."
  }
];

export const stats = [
  { label: "Years Of Experience", value: 10, suffix: "+" },
  { label: "Products In Portfolio", value: productCatalog.length, suffix: "+" },
  { label: "Sectors Served", value: sectors.length, suffix: "" },
  { label: "Technical Support Response", value: 24, suffix: " hrs" }
];

export const resources = {
  downloads: [
    "Product Catalogue",
    "Technical Data Sheets",
    "System Application Guides",
    "Corporate Brochure"
  ],
  faqs: [
    {
      question: "How do I select the correct product for my project?",
      answer:
        "Share concrete grade, exposure class, and application details with our team. We provide product-system recommendations with dosage guidance."
    },
    {
      question: "Do you provide site application supervision?",
      answer:
        "Yes. UltraChem provides on-site technical assistance, trial support, and supervision for critical applications."
    },
    {
      question: "Can I request TDS and method statements?",
      answer:
        "Yes. TDS, method statements, and handling guidelines are available through our resource section and technical team."
    }
  ]
};

export const careerOpenings = [
  {
    role: "Technical Sales Engineer",
    location: "Nagpur / Pune",
    type: "Full-time",
    description:
      "Drive specification-led sales and provide application-level advisory support for infrastructure and industrial customers."
  },
  {
    role: "Site Technical Service Executive",
    location: "Multiple Project Locations",
    type: "Full-time",
    description:
      "Support product trials, site diagnosis, and implementation quality checks with contractor and project teams."
  },
  {
    role: "Quality Control Chemist",
    location: "Nagpur Plant",
    type: "Full-time",
    description:
      "Manage raw-material checks, in-process validation, and final batch testing in line with internal QA protocols."
  }
];

export const assetImages = [
  "001.jpg",
  "002.jpg",
  "003.jpg",
  "004.jpg",
  "005.jpg",
  "006.jpg",
  "007.jpg",
  "008.jpg",
  "009.jpg",
  "010.jpg",
  "011.jpg",
  "012.jpg",
  "013.jpg",
  "015.jpg",
  "017.jpg"
];

export function getAsset(index: number) {
  return `/assets/${assetImages[index % assetImages.length]}`;
}

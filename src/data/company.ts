export interface CompanyData {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  serviceArea: string;
  founded: number;
  certifications: string[];
  teamMembers: { name: string; role: string; cert?: string }[];
  services: { title: string; description: string; icon: string }[];
  plans: { name: string; price: string; period: string; features: string[]; highlight?: boolean }[];
  portfolio: { title: string; description: string; img: string }[];
  stats: { label: string; value: string }[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    muted: string;
    hero: string;
    card: string;
    border: string;
  };
  heroImage: string;
  beforeAfter: { before: string; after: string; label: string }[];
}

export const v1: CompanyData = {
  name: "GreenScape Lawn & Garden",
  tagline: "Your Neighborhood Lawn Experts",
  phone: "(619) 555-0101",
  email: "hello@greenscapelawn.com",
  address: "4201 Mission Ave, Oceanside, CA 92057",
  serviceArea: "Oceanside, Vista, San Marcos, Carlsbad, Escondido",
  founded: 2004,
  certifications: ["NALP Certified", "California Licensed C-27", "EPA WaterSense Partner", "BBB Accredited"],
  teamMembers: [
    { name: "Mike Hartwell", role: "Owner & Lead Technician", cert: "NALP Certified" },
    { name: "Sara Chen", role: "Design Consultant" },
    { name: "Luis Ortega", role: "Irrigation Specialist", cert: "IA Certified" },
    { name: "Pam Torres", role: "Customer Relations" },
  ],
  services: [
    { title: "Lawn Mowing & Edging", description: "Precise weekly or bi-weekly cuts with crisp edge lines every visit.", icon: "🌿" },
    { title: "Fertilization Programs", description: "Seasonal soil testing and custom blends for thick, green turf.", icon: "🌱" },
    { title: "Irrigation & Sprinkler", description: "Smart-controller installs, leak repairs, and seasonal tune-ups.", icon: "💧" },
    { title: "Sod & Seeding", description: "Full lawn renovations with drought-tolerant sod varieties.", icon: "🏡" },
    { title: "Weed Control", description: "Pre- and post-emergent treatments to keep beds and turf clean.", icon: "🌾" },
    { title: "Seasonal Cleanup", description: "Spring prep and fall leaf removal to keep your property looking sharp.", icon: "🍂" },
  ],
  plans: [
    { name: "Basic", price: "$89", period: "/month", features: ["Weekly mowing", "Edge & blow", "Email reports"] },
    { name: "Standard", price: "$149", period: "/month", features: ["Weekly mowing", "Edge & blow", "Fertilization (4x/yr)", "Weed control", "Priority scheduling"], highlight: true },
    { name: "Premium", price: "$229", period: "/month", features: ["Weekly mowing", "Full fertilization program", "Pest & weed control", "Irrigation check", "Seasonal cleanup", "Dedicated tech"] },
  ],
  portfolio: [
    { title: "Hartwell Residence", description: "Full lawn renovation with Bermuda sod and smart irrigation.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
    { title: "Sunrise Estates HOA", description: "Monthly maintenance for 24-unit community common areas.", img: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=600&q=80" },
    { title: "Peterson Backyard", description: "Lush backyard transformation with raised beds and turf.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
  ],
  stats: [
    { label: "Years in Business", value: "20+" },
    { label: "Happy Clients", value: "1,400+" },
    { label: "Acres Maintained", value: "500+" },
    { label: "5-Star Reviews", value: "300+" },
  ],
  colors: {
    primary: "#2d6a2d",
    secondary: "#f5f0e8",
    accent: "#4a9e4a",
    bg: "#ffffff",
    text: "#1a2e1a",
    muted: "#6b7c6b",
    hero: "#1a3d1a",
    card: "#f9f6f0",
    border: "#d4e6d4",
  },
  heroImage: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=1600&q=85",
  beforeAfter: [
    { before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", label: "Front Lawn Transformation" },
    { before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", after: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80", label: "Backyard Renovation" },
  ],
};

export const v2: CompanyData = {
  name: "Meridian Design + Build",
  tagline: "Where Landscape Becomes Legacy",
  phone: "(858) 555-0202",
  email: "studio@meridiandesignbuild.com",
  address: "7800 Girard Ave, La Jolla, CA 92037",
  serviceArea: "La Jolla, Del Mar, Rancho Santa Fe, Coronado, Solana Beach",
  founded: 2010,
  certifications: ["APLD Certified Designer", "CLCA Member", "LEED Accredited", "California C-27 Licensed"],
  teamMembers: [
    { name: "Alexandra Renoir", role: "Principal Designer", cert: "APLD Certified" },
    { name: "James Whitfield", role: "Master Craftsman" },
    { name: "Natalie Park", role: "Horticulturist", cert: "Certified Horticulturist" },
    { name: "Diego Varela", role: "Project Manager" },
  ],
  services: [
    { title: "Bespoke Garden Design", description: "CAD-rendered masterplans tailored to your architecture and lifestyle.", icon: "✏️" },
    { title: "Hardscape Fabrication", description: "Hand-laid stone, custom pergolas, fire features, and water elements.", icon: "🪨" },
    { title: "Luxury Planting Design", description: "Curated specimen trees, topiaries, and seasonal color rotations.", icon: "🌸" },
    { title: "Outdoor Living Spaces", description: "Fully furnished kitchen, lounge, and entertainment areas.", icon: "🛋️" },
    { title: "Lighting Architecture", description: "Low-voltage art lighting that showcases your garden after dark.", icon: "💡" },
    { title: "White-Glove Maintenance", description: "Dedicated crew visits, detailed care logs, and seasonal refreshes.", icon: "🤍" },
  ],
  plans: [
    { name: "Curated", price: "$450", period: "/month", features: ["Bi-weekly premium maintenance", "Seasonal color rotations", "Dedicated 2-person crew", "Monthly report"] },
    { name: "Estate", price: "$850", period: "/month", features: ["Weekly maintenance", "Full fertilization program", "Lighting check & cleaning", "Water feature care", "Seasonal installations"], highlight: true },
    { name: "Legacy", price: "Custom", period: "", features: ["Full estate management", "24/7 concierge line", "Annual redesign consultation", "Priority storm response", "Unlimited visits"] },
  ],
  portfolio: [
    { title: "Rancho Santa Fe Estate", description: "2-acre formal garden with reflecting pool and rose garden.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
    { title: "La Jolla Blufftop", description: "Dramatic coastal garden with sculptural succulents and infinity edge.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80" },
    { title: "Del Mar Residence", description: "French-inspired parterre with boxwood hedges and gravel allées.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  ],
  stats: [
    { label: "Design Awards", value: "18" },
    { label: "Estate Clients", value: "240+" },
    { label: "Projects Completed", value: "600+" },
    { label: "Avg Project Value", value: "$85K" },
  ],
  colors: {
    primary: "#3d5a3d",
    secondary: "#f0ead8",
    accent: "#b8a96a",
    bg: "#fafaf7",
    text: "#1c2b1c",
    muted: "#7a7a6a",
    hero: "#1a2a1a",
    card: "#f5f0e4",
    border: "#d8cfa8",
  },
  heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85",
  beforeAfter: [
    { before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", label: "Estate Garden Transformation" },
    { before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", after: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", label: "Blufftop Redesign" },
  ],
};

export const v3: CompanyData = {
  name: "Tierra Viva Native Gardens",
  tagline: "Rooted in Nature. Designed for Life.",
  phone: "(760) 555-0303",
  email: "grow@tierraviva.com",
  address: "1820 El Camino Real, Encinitas, CA 92024",
  serviceArea: "Encinitas, Cardiff, Leucadia, Solana Beach, San Elijo Lagoon area",
  founded: 2015,
  certifications: ["California Native Plant Society", "Certified Bay-Friendly Landscaper", "QWEL Certified", "USGBC Member"],
  teamMembers: [
    { name: "Rosa Guerrero", role: "Founder & Ecological Designer", cert: "CNPS Member" },
    { name: "Tom Ashby", role: "Restoration Ecologist" },
    { name: "Yuki Tanaka", role: "Irrigation Designer", cert: "QWEL Certified" },
    { name: "Bea Flores", role: "Community Outreach" },
  ],
  services: [
    { title: "Native Plant Design", description: "Regionally appropriate plant palettes that thrive without irrigation.", icon: "🌻" },
    { title: "Habitat Gardens", description: "Monarch waystation, bird sanctuary, and pollinator corridor design.", icon: "🦋" },
    { title: "Rainwater Harvesting", description: "Bioswales, rain gardens, and cistern systems that capture every drop.", icon: "🌧️" },
    { title: "Lawn Removal & Rebate", description: "Turf-to-native conversions with full utility rebate processing.", icon: "🌵" },
    { title: "Soil Health & Compost", description: "Regenerative soil programs to build living earth over time.", icon: "🪱" },
    { title: "Eco Maintenance", description: "Chemical-free, hand-tool maintenance respecting beneficial insects.", icon: "🌿" },
  ],
  plans: [
    { name: "Seedling", price: "$95", period: "/month", features: ["Bi-weekly organic maintenance", "Seasonal seed broadcast", "Pest monitoring report"] },
    { name: "Bloom", price: "$175", period: "/month", features: ["Weekly eco-maintenance", "Soil amendment program", "Irrigation optimization", "Habitat check-ins"], highlight: true },
    { name: "Watershed", price: "$295", period: "/month", features: ["Full ecological stewardship", "Rainwater system maintenance", "Quarterly planting refreshes", "Annual habitat report", "Priority drought response"] },
  ],
  portfolio: [
    { title: "Cardiff Pollinator Haven", description: "500 sq ft lawn removed; now a certified monarch waystation.", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
    { title: "Encinitas Hillside", description: "Erosion-prone slope stabilized with deep-rooted native groundcovers.", img: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80" },
    { title: "Leucadia Food Forest", description: "Edible native landscape with lemonade berry, manzanita, and sage.", img: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=600&q=80" },
  ],
  stats: [
    { label: "Lawns Removed", value: "380+" },
    { label: "Gallons Saved/yr", value: "2M+" },
    { label: "Pollinator Habitats", value: "120+" },
    { label: "Rebates Processed", value: "$480K" },
  ],
  colors: {
    primary: "#8b4513",
    secondary: "#f5f0e0",
    accent: "#6b8e23",
    bg: "#fffef8",
    text: "#2a1a0a",
    muted: "#8a7a5a",
    hero: "#3d1f0a",
    card: "#faf5e8",
    border: "#d4c4a0",
  },
  heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=85",
  beforeAfter: [
    { before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", after: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", label: "Lawn to Native Garden" },
    { before: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=600&q=80", after: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&q=80", label: "Hillside Restoration" },
  ],
};

export const v4: CompanyData = {
  name: "Canopy Tree & Arborist Services",
  tagline: "Certified Arborists. Trusted Tree Care.",
  phone: "(619) 555-0404",
  email: "care@canopytree.com",
  address: "3350 Grape St, San Diego, CA 92104",
  serviceArea: "All San Diego County — residential and municipal",
  founded: 2001,
  certifications: ["ISA Certified Arborist WC-5821A", "TCIA Accredited Company", "ASCA Consulting Arborist", "CA Licensed C-61/D-49"],
  teamMembers: [
    { name: "Ed Kaminski", role: "Board-Certified Master Arborist", cert: "ISA BCMA" },
    { name: "Felicia Reyes", role: "Senior Climber", cert: "ISA Certified" },
    { name: "Marcus Webb", role: "Consulting Arborist", cert: "ASCA" },
    { name: "Dana Soto", role: "Operations Manager" },
  ],
  services: [
    { title: "Tree Pruning & Shaping", description: "ANSI A300-compliant pruning for structure, health, and aesthetics.", icon: "✂️" },
    { title: "Hazard Tree Assessment", description: "ISA risk assessments, reports, and priority removal recommendations.", icon: "⚠️" },
    { title: "Tree Removal & Stump Grinding", description: "Safe, efficient removal with full debris cleanup and grinding.", icon: "🪚" },
    { title: "Deep Root Fertilization", description: "High-pressure soil injection of nutrients directly to the root zone.", icon: "🌳" },
    { title: "Cabling & Bracing", description: "Supplemental support systems for multi-stem and co-dominant trees.", icon: "🔗" },
    { title: "Emergency Storm Response", description: "24/7 rapid response for fallen or hazardous storm-damaged trees.", icon: "🚨" },
  ],
  plans: [
    { name: "Residential", price: "$195", period: "/visit", features: ["Annual inspection", "Pruning up to 3 trees", "Health report", "Stump grinding (1 included)"] },
    { name: "Care Plan", price: "$340", period: "/year", features: ["Bi-annual inspections", "Pruning up to 6 trees", "Deep root fertilization", "Priority storm response"], highlight: true },
    { name: "Municipal", price: "Custom", period: "", features: ["Inventory & GIS mapping", "Ongoing maintenance contract", "ANSI-compliant reports", "24/7 emergency dispatch", "Liability documentation"] },
  ],
  portfolio: [
    { title: "Balboa Park Heritage Oaks", description: "Preservation pruning on 80-year-old coast live oaks for the City of San Diego.", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
    { title: "Hillcrest Estate Eucalyptus", description: "Hazardous 90-ft eucalyptus safely removed in tight residential setting.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
    { title: "Chula Vista HOA Canopy", description: "Street tree program maintaining 340 trees across 3 neighborhoods.", img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80" },
  ],
  stats: [
    { label: "ISA Certified Arborists", value: "8" },
    { label: "Trees Cared For", value: "25,000+" },
    { label: "Years in Service", value: "23+" },
    { label: "Emergency Calls / yr", value: "400+" },
  ],
  colors: {
    primary: "#2d4a1e",
    secondary: "#f4ede0",
    accent: "#8b6914",
    bg: "#faf8f4",
    text: "#1a2810",
    muted: "#6a7a5a",
    hero: "#0f1f08",
    card: "#f0e8d8",
    border: "#c4b890",
  },
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85",
  beforeAfter: [
    { before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", after: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80", label: "Heritage Oak Restoration" },
    { before: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80", after: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&q=80", label: "Canopy Elevation" },
  ],
};

export const v5: CompanyData = {
  name: "Apex Commercial Landscapes",
  tagline: "Professional Property. Premium Presentation.",
  phone: "(619) 555-0505",
  email: "contracts@apexcommercial.com",
  address: "8950 Balboa Ave, San Diego, CA 92123",
  serviceArea: "Greater San Diego — office, retail, hospitality, and municipal",
  founded: 1998,
  certifications: ["NALP Accredited", "ISO 9001 Certified", "OSHA 10 Compliant", "CA DIR Registered Contractor"],
  teamMembers: [
    { name: "Richard Holt", role: "President & CEO" },
    { name: "Karen Simmons", role: "Account Executive" },
    { name: "Troy Mendez", role: "Operations Director" },
    { name: "Linda Zhao", role: "Quality Assurance Manager" },
  ],
  services: [
    { title: "Commercial Turf Management", description: "Precision maintenance programs for high-visibility commercial properties.", icon: "🏢" },
    { title: "Parking Lot & Median Care", description: "Weed control, trimming, litter removal, and seasonal color for curb appeal.", icon: "🅿️" },
    { title: "Hardscape Maintenance", description: "Pressure washing, crack sealing, and walkway upkeep for safe facilities.", icon: "🔲" },
    { title: "Irrigation Management", description: "SMART system monitoring, audits, and budget reporting for water savings.", icon: "📊" },
    { title: "Seasonal Color Programs", description: "Rotational annuals and holiday décor to keep entrances inviting.", icon: "🌺" },
    { title: "Snow & Ice (Seasonal)", description: "De-icing, salting, and snow removal for northern CA properties.", icon: "❄️" },
  ],
  plans: [
    { name: "Standard", price: "$495", period: "/month", features: ["Weekly maintenance", "Monthly reporting", "Weed & pest control", "Account manager"] },
    { name: "Professional", price: "$895", period: "/month", features: ["Weekly maintenance", "Irrigation monitoring", "Seasonal color rotations", "Hardscape upkeep", "QA inspections"], highlight: true },
    { name: "Enterprise", price: "Custom", period: "", features: ["Multi-site management", "Custom SLA agreements", "24/7 operations line", "Dedicated crew", "Sustainability reporting"] },
  ],
  portfolio: [
    { title: "Mission Valley Office Park", description: "Full-campus maintenance for 12-acre mixed-use development.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
    { title: "Kearny Mesa Retail Center", description: "Curb-appeal program covering 8 anchor tenants and 400 parking spaces.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80" },
    { title: "Downtown Hilton San Diego", description: "Luxury hotel grounds and event lawn maintained to 5-star standards.", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  ],
  stats: [
    { label: "Commercial Accounts", value: "185+" },
    { label: "Sq Ft Maintained", value: "4M+" },
    { label: "Years in Business", value: "26+" },
    { label: "Employee Crew Members", value: "90+" },
  ],
  colors: {
    primary: "#1a2744",
    secondary: "#f0f4f8",
    accent: "#8a9ab8",
    bg: "#ffffff",
    text: "#0f1a2e",
    muted: "#6a7a8a",
    hero: "#0a1020",
    card: "#f4f7fa",
    border: "#c0ccd8",
  },
  heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85",
  beforeAfter: [
    { before: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80", after: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", label: "Office Park Transformation" },
    { before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", after: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", label: "Retail Curb Appeal" },
  ],
};

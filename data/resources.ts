export interface ResourceSource {
  readonly id: string;
  readonly title: string;
  readonly href: string;
}

export interface ResourceItem {
  readonly name: string;
  readonly category: string;
  readonly href: string;
  readonly blurb: string;
  readonly address: string;
  readonly contact: string;
  readonly hours: string;
  readonly cost: string;
  readonly featured: boolean;
  readonly sourceIds: readonly string[];
}

export interface ResourceGroup {
  readonly title: string;
  readonly resources: readonly ResourceItem[];
}

export interface CommunityEvent {
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly description: string;
}

export const referenceSources: readonly ResourceSource[] = [
  {
    id: "bridgeton-city",
    title: "City of Bridgeton official website",
    href: "https://www.bridgetonmo.com/",
  },
  {
    id: "st-charles-city",
    title: "City of St. Charles official website",
    href: "https://www.stcharlescitymo.gov/",
  },
  {
    id: "heat-up",
    title: "Heat Up St. Louis",
    href: "https://heatupstlouis.org/",
  },
  {
    id: "bjc",
    title: "BJC HealthCare",
    href: "https://www.bjc.org/",
  },
  {
    id: "mercy",
    title: "Mercy",
    href: "https://www.mercy.net/",
  },
  {
    id: "ssm",
    title: "SSM Health",
    href: "https://www.ssmhealth.com/",
  },
];

export const resources: readonly ResourceItem[] = [
  {
    name: "Bridgeton City Hall",
    category: "Government Services",
    href: "https://www.bridgetonmo.com/",
    blurb:
      "Start here for permits, resident questions, city departments, and access to local public services.",
    address: "12355 Natural Bridge Rd, Bridgeton, MO 63044",
    // TODO Check loc, time, events.
    contact: "Call (314) 739-7665.",
    hours: "Mon-Fri, 8:00 AM-5:00 PM",
    cost: "Free information and service access",

    featured: true,
    sourceIds: ["bridgeton-city"],
  },
  {
    name: "Camera Registration Program",
    category: "Public Safety",
    href: "https://www.bridgetonmo.com/FormCenter/Police-Department-4/Resident-Camera-Program-46",
    blurb:
      "Residents can register security cameras to help local law enforcement respond more effectively.",
    address: "Online city form",
    contact: "Contact Bridgeton Police Department.",
    hours: "Available online anytime",
    cost: "Free",

    featured: false,
    sourceIds: ["bridgeton-city"],
  },
  {
    name: "Sewer Lateral Repair Program",
    category: "Housing Support",
    href: "https://www.bridgetonmo.com/418/Sewer-Lateral-Repair-Program",
    blurb:
      "Homeowners can review eligibility for city-backed assistance with sewer lateral repairs.",
    address: "Managed through Bridgeton municipal services",
    contact: "Contact Bridgeton Public Works.",
    hours: "city offices during business hours",
    cost: "Eligibility-based assistance",

    featured: true,
    sourceIds: ["bridgeton-city"],
  },
  {
    name: "Heat Up St. Louis Utility Assistance",
    category: "Emergency Assistance",
    href: "https://heatupstlouis.org/",
    blurb:
      "Connect with winter heating assistance and utility relief resources for households in need.",
    address: "Regional assistance program",
    contact: "See information on program website.",
    hours: "Seasonal program information online",
    cost: "Free application and referral information",

    featured: true,
    sourceIds: ["heat-up"],
  },
  {
    name: "Adoption Center",
    category: "Animal Services",
    href: "https://stcharlescitymo.gov/1212/Adoptable-Pets",
    blurb:
      "Browse adoptable pets and learn how local adoption services connect animals with new homes.",
    address: "Regional animal services information",
    contact: "Visit adoption page for current contacts.",
    hours: "Varies by service provider",
    cost: "Viewing is free; adoption fees vary",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "Animal Control Information",
    category: "Animal Services",
    href: "https://stcharlescitymo.gov/1308/Animal-Control",
    blurb:
      "Find reporting information, ordinances, and guidance for animal control concerns in the community.",
    address: "Regional animal control information",
    contact: "See their service page for reporting contacts.",
    hours: "Emergency and office hours vary",
    cost: "Free public information",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "Pet Licensing Program",
    category: "Animal Services",
    href: "https://www.bridgetonmo.com/266/Pet-License",
    blurb:
      "Review licensing requirements, fees, and registration steps for dogs and cats in Bridgeton.",
    address: "Bridgeton municipal services",
    contact: "Contact City Hall for licensing information.",
    hours: "Business hours or online information",
    cost: "License fees may apply",

    featured: false,
    sourceIds: ["bridgeton-city"],
  },
  {
    name: "Building Codes and Standards",
    category: "Building Resources",
    href: "https://stcharlescitymo.gov/1228/Adopted-Building-Codes",
    blurb:
      "Review current building code standards to prepare for construction and improvement projects.",
    address: "Regional code reference page",
    contact: "Building department contacts listed.",
    hours: "Available online anytime",
    cost: "Free reference access",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "Building Permit Application",
    category: "Building Resources",
    href: "https://www.stcharlescitymo.gov/DocumentCenter/View/14515/Building-Permit-Application",
    blurb:
      "Download permit paperwork and review the submission process for construction projects.",
    address: "Online permit form",
    contact: "Building department listed on form.",
    hours: "Form available online anytime",
    cost: "Permit fees may apply",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "Subcontractor Licensing Information",
    category: "Building Resources",
    href: "https://stcharlescitymo.gov/1305/Subcontractor-Licensing",
    blurb:
      "Check licensing expectations for subcontractors working on local building projects.",
    address: "Regional contractor guidance",
    contact: "Licensing contacts available at request.",
    hours: "Available online anytime",
    cost: "Licensing fees may apply",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "Demolition Permit Information",
    category: "Building Resources",
    href: "https://stcharlescitymo.gov/149/Demolition-Permit-Information",
    blurb:
      "Learn the permit steps, documentation, and safety requirements for demolition work.",
    address: "Regional demolition permit page",
    contact: "Contact permit office.",
    hours: "Available online anytime",
    cost: "Permit fees may apply",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
  {
    name: "BJC HealthCare",
    category: "Medical Services",
    href: "https://www.bjc.org/",
    blurb:
      "Find hospitals, patient resources, and care options within the BJC network.",
    address: "Multiple regional locations",
    contact: "Visit provider website for current locations.",
    hours: "Varies by location",
    cost: "Insurance and service costs vary",

    featured: false,
    sourceIds: ["bjc"],
  },
  {
    name: "Mercy Health",
    category: "Medical Services",
    href: "https://www.mercy.net/",
    blurb:
      "Search care options, provider information, and support services across Mercy locations.",
    address: "Multiple regional locations",
    contact: "Visit provider website for current locations.",
    hours: "Varies by location",
    cost: "Insurance and service costs vary",

    featured: false,
    sourceIds: ["mercy"],
  },
  {
    name: "SSM Health",
    category: "Medical Services",
    href: "https://www.ssmhealth.com/",
    blurb:
      "Access care locations, patient services, and public health information from SSM Health.",
    address: "Multiple regional locations",
    contact: "Visit provider website for current locations.",
    hours: "Varies by location",
    cost: "Insurance and service costs vary",

    featured: false,
    sourceIds: ["ssm"],
  },
  {
    name: "Community News and Alerts",
    category: "Community Updates",
    href: "https://www.bridgetonmo.com/m/newsflash",
    blurb:
      "Track city announcements, project updates, and time-sensitive alerts from local government.",
    address: "City news portal",
    contact: "Published by city staff.",
    hours: "Available online anytime",
    cost: "Free",

    featured: false,
    sourceIds: ["bridgeton-city"],
  },
  {
    name: "Historic Preservation Information",
    category: "Community Programs",
    href: "https://stcharlescitymo.gov/1191/Historic-Preservation",
    blurb:
      "Explore preservation guidance, local history resources, and community heritage programs.",
    address: "Regional heritage information",
    contact: "Preservation contacts listed online.",
    hours: "Available online anytime",
    cost: "Free public information",

    featured: false,
    sourceIds: ["st-charles-city"],
  },
];

export const communityEvents: readonly CommunityEvent[] = [
  {
    title: "Community Clean-Up Day",
    date: "April 12, 2026",
    time: "9:00 AM-12:00 PM",
    location: "Bridgeton Municipal Athletic Complex",
    description:
      "Volunteers meet for litter pickup, beautification, and supply distribution.",
  },
  {
    title: "Town Hall Resource Night",
    date: "April 18, 2026",
    time: "6:00 PM-8:00 PM",
    location: "Bridgeton City Hall",
    description:
      "Residents can meet city departments and ask questions about housing, safety, and assistance programs.",
  },
  {
    title: "Library Book Sale and Sign-Up Drive",
    date: "April 25, 2026",
    time: "10:00 AM-2:00 PM",
    location: "Bridgeton Trails Branch",
    description:
      "Community members can browse low-cost books and sign up for library cards and programs.",
  },
];

export const featuredResources = resources.filter(
  (resource) => resource.featured,
);

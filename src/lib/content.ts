/**
 * All site copy lives here so it can be edited without touching components.
 *
 * Source: First_Quant.pptx (company deck). Anything NOT from the deck is marked
 * with `// PLACEHOLDER` and should be replaced with real information before launch.
 */

export const site = {
  name: "First Quant",
  legalName: "First Quant, a Brim First company",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.firstquant.in",
  tagline: "Strategic growth partners for real estate developers",
  description:
    "First Quant is the real estate transformation vertical of Brim First. We work as an extension of a developer’s leadership team, taking strategic ownership of a project from concept to market leadership.",
  city: "Bengaluru, India",
  email: "hello@firstquant.in", // PLACEHOLDER: confirm the enquiry inbox
  phone: "+91 00000 00000", // PLACEHOLDER: add the real number
  address: "Bengaluru, Karnataka, India", // PLACEHOLDER: add the office address
  linkedin: "https://www.linkedin.com/", // PLACEHOLDER: company page URL
};

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Insights", href: "/#insights" },
  { label: "Careers", href: "/#careers" },
];

export const quant = [
  {
    letter: "Q",
    word: "Quantify",
    summary: "Measure the land, the market and the money before anything is drawn.",
    points: [
      "Land and location assessment",
      "Market demand and competition mapping",
      "Preliminary feasibility and financial modelling",
      "Revenue potential of each planning option",
    ],
  },
  {
    letter: "U",
    word: "Understand",
    summary: "Learn who will buy, why they’ll buy and what they’ll pay for.",
    points: [
      "Customer preferences and buyer segments",
      "Micro-market perception and price benchmarks",
      "Brand health and positioning gaps",
      "Sales funnel and channel diagnostics",
    ],
  },
  {
    letter: "A",
    word: "Architect",
    summary: "Shape the product, the brand and the price around that demand.",
    points: [
      "Product mix, configurations and saleable-area efficiency",
      "Brand creation, naming and architecture",
      "Pricing strategy and revenue planning",
      "Experience centre and sample villa planning",
    ],
  },
  {
    letter: "N",
    word: "Navigate",
    summary: "Take the project to market with a launch that’s planned to the week.",
    points: [
      "Go-to-market strategy and launch calendar",
      "Integrated campaigns across digital, ATL and BTL",
      "Retail, channel partner and international sales",
      "Lead management and conversion frameworks",
    ],
  },
  {
    letter: "T",
    word: "Transform",
    summary: "Turn launch momentum into absorption, pricing power and a lasting brand.",
    points: [
      "Inventory movement and absorption tracking",
      "Price escalation through the sales lifecycle",
      "CRM, MIS dashboards and KPI governance",
      "Marketing operations and vendor ecosystem",
    ],
  },
];

export const transformations = [
  {
    id: "business",
    title: "Business transformation",
    body: "Helping developers rethink, reposition and rebuild their businesses for long-term growth.",
    services: ["Business consulting", "Project feasibility", "Market intelligence", "Competition mapping", "Product strategy", "Revenue planning"],
  },
  {
    id: "brand",
    title: "Brand transformation",
    body: "Creating differentiated real estate brands that command trust, aspiration and premium value.",
    services: ["Brand creation", "Brand identity", "Positioning", "Naming", "Brand architecture", "Brand communication", "Employer branding"],
  },
  {
    id: "product",
    title: "Product transformation",
    body: "Defining the right product, pricing, customer mix and value proposition.",
    services: ["Unit-mix and configuration optimisation", "Customer-led product planning", "Pricing strategy", "Saleable-area efficiency studies"],
  },
  {
    id: "market",
    title: "Market transformation",
    body: "Building complete go-to-market strategies for successful project launches.",
    services: ["Launch planning", "Launch calendar", "Sales journey design", "Customer experience strategy", "Experience centre planning", "Sample villa strategy"],
  },
  {
    id: "sales",
    title: "Sales transformation",
    body: "Building high-performance sales ecosystems across direct, digital and channel partner networks.",
    services: ["Sales process design", "Retail sales strategy", "Channel partner strategy", "International sales", "Sales training", "Sales analytics"],
  },
  {
    id: "revenue",
    title: "Revenue transformation",
    body: "Optimising inventory movement, pricing strategy, absorption rate and project profitability.",
    services: ["Inventory and absorption planning", "Price escalation strategy", "Conversion framework", "MIS and dashboards", "KPI framework"],
  },
];

export const architecture = {
  title: "Architectural and development strategy",
  intro:
    "Architecture at First Quant begins with the market, not the building. We partner with developers from land evaluation and feasibility through design development, turning market intelligence, customer preferences and financial objectives into commercially viable concepts.",
  groups: [
    {
      title: "Land intelligence and feasibility",
      items: ["Land and location assessment", "Market demand and competition analysis", "Development potential and planning-control review", "Preliminary feasibility and financial modelling", "Development brief and product-mix recommendations"],
    },
    {
      title: "Concept and product planning",
      items: ["Architectural vision and concept development", "Site planning, massing and layout options", "Apartment configurations and typical-floor planning", "Façade concepts, elevations and design identity", "Customer-led product differentiation"],
    },
    {
      title: "Design efficiency",
      items: ["Saleable-area and efficiency studies", "Unit-mix and configuration optimisation", "Core, circulation and common-area efficiency", "Floor-plate and layout optimisation", "Revenue potential of planning options"],
    },
    {
      title: "Design development and coordination",
      items: ["Final plans, sections and elevations", "Façade composition and materials", "Coordination with structural and MEP consultants", "Design decisions aligned to cost and feasibility"],
    },
    {
      title: "Statutory and construction documentation",
      items: ["Drawings for statutory submissions", "Liaison with approval consultants", "Good-for-Construction (GFC) drawings", "Door, window, kitchen, toilet, staircase and façade details"],
    },
    {
      title: "Construction-stage coordination",
      items: ["Architectural clarifications for the project team", "Review of execution-related design queries", "Revisions arising from site conditions", "Ongoing consultant coordination"],
    },
  ],
};

export const solutions = {
  strategy: [
    { title: "Business strategy", items: ["Business consulting", "Project feasibility", "Market intelligence", "Competition mapping", "Product strategy", "Pricing strategy", "Revenue planning"] },
    { title: "Brand strategy", items: ["Brand creation", "Brand identity", "Positioning", "Naming", "Brand architecture", "Brand communication", "Employer branding"] },
    { title: "Go-to-market strategy", items: ["Launch planning", "Launch calendar", "Sales journey design", "Customer experience strategy", "Experience centre planning", "Sample villa strategy"] },
  ],
  execution: [
    { title: "Marketing transformation", items: ["Integrated marketing strategy", "Digital marketing", "ATL and BTL", "PR and media", "Influencer marketing", "Content strategy", "CRM strategy", "Performance marketing"] },
    { title: "Sales acceleration", items: ["Sales process design", "Retail sales strategy", "Channel partner strategy", "International sales", "Sales training", "Lead management", "Conversion framework", "Sales analytics"] },
    { title: "Business operations", items: ["CRM implementation", "Marketing automation", "MIS and dashboards", "Vendor ecosystem", "Budget management", "Marketing governance", "KPI framework"] },
  ],
};

export type Project = {
  slug: string;
  name: string;
  developer: string;
  location: string;
  type: "Launch" | "Repositioning" | "Marketing transformation";
  image: string;
  headline: string;
  summary: string;
  challenge?: string;
  scope: string[];
  facts?: { label: string; value: string }[];
  impact?: string[];
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "sowparnika-life-on-the-green",
    name: "Life on the Green",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Launch",
    image: "/images/projects/life-on-the-green.jpg",
    headline: "Sold out in nine months, with prices up 57% along the way.",
    summary:
      "We designed and ran the complete launch: positioning, communication, the digital ecosystem, sales enablement and an integrated campaign rollout. It became one of the brand’s most successful launches.",
    scope: ["Brand positioning", "GTM strategy", "Digital launch", "Campaign architecture", "Sales enablement"],
    impact: [
      "100% inventory absorption within 9 months",
      "Average selling price raised from ₹1.50 Cr to ₹2.54 Cr over the sales lifecycle",
      "57% appreciation in unit value",
      "Price benchmark lifted from ₹7,000 to ₹11,000 per sq. ft.",
    ],
    metric: { value: "100%", label: "sold in 9 months" },
  },
  {
    slug: "sowparnika-euphoria-in-the-east",
    name: "Euphoria in the East",
    developer: "Sowparnika Projects",
    location: "Whitefield, East Bengaluru",
    type: "Launch",
    image: "/images/projects/euphoria-in-the-east.jpg",
    headline: "Turning an unfamiliar corridor into a destination buyers asked for by name.",
    summary:
      "We crafted the brand positioning and go-to-market strategy behind one of Sowparnika’s most recognised launches, and built a new micro-market identity for East Bengaluru in the process.",
    challenge:
      "The project sat in an emerging corridor with little market recognition. We had to build confidence in an unfamiliar location while creating demand in a highly competitive East Bengaluru market.",
    scope: ["Micro-market identity", "Brand positioning", "GTM strategy", "Integrated marketing"],
    impact: [
      "4,000+ qualified enquiries from an integrated marketing strategy",
      "95% inventory absorption within two years of launch",
      "Flagship 2 BHK starting price raised from ₹73 L to ₹81 L",
      "“The New Whitefield is Rising” was later echoed in other developers’ communication across the corridor",
    ],
    metric: { value: "95%", label: "absorbed in 2 years" },
  },
  {
    slug: "peram-eco-city",
    name: "Eco City",
    developer: "Peram Group",
    location: "East Bengaluru",
    type: "Launch",
    image: "/images/projects/peram-eco-city.jpg",
    headline: "Launching one of East Bengaluru’s largest integrated villa communities.",
    summary:
      "We built the complete launch strategy: business planning, product positioning, the pricing framework, communication, campaigns, digital, sales architecture and the channel partner ecosystem.",
    scope: ["Product positioning", "Launch strategy", "Brand narrative", "GTM planning", "Premium customer experience"],
    facts: [
      { label: "Land", value: "48 acres" },
      { label: "Villas", value: "871 units" },
      { label: "Amenities", value: "90+" },
      { label: "Configurations", value: "8 villa types" },
      { label: "Price range", value: "₹2.18 Cr – ₹2.88 Cr" },
    ],
    metric: { value: "871", label: "villas on 48 acres" },
  },
  {
    slug: "merusri-antelopes",
    name: "Antelopes",
    developer: "Merusri Developers",
    location: "North Bengaluru",
    type: "Repositioning",
    image: "/images/projects/merusri-antelopes.jpg",
    headline: "Repositioning a villa community for North Bengaluru’s luxury buyers.",
    summary:
      "We reimagined the project with luxury-first positioning, a refreshed communication architecture and a premium customer experience, repositioning it within North Bengaluru’s luxury market.",
    scope: ["Luxury brand architecture", "Premium positioning", "Brand storytelling", "Experience strategy", "Concierge-led marketing", "Luxury customer journey"],
    facts: [
      { label: "Community", value: "9 acres, 108 villas" },
      { label: "Setting", value: "Inside Brigade Orchards, a 135-acre community" },
      { label: "Audience", value: "HNI and UHNI buyers" },
    ],
    metric: { value: "108", label: "luxury villas" },
  },
  {
    slug: "merusri-sunscape",
    name: "Sunscape",
    developer: "Merusri Developers",
    location: "Bengaluru",
    type: "Launch",
    image: "/images/projects/merusri-sunscape.jpg",
    headline: "A complete launch framework for a premium villa community.",
    summary:
      "We conceptualised the full launch framework: market positioning, campaign architecture, the customer experience journey and integrated communication.",
    scope: ["Product positioning", "Launch strategy", "Brand narrative", "GTM planning", "Premium customer experience"],
  },
  {
    slug: "sowparnika-rhythm-of-rain",
    name: "Rhythm of Rain",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Launch",
    image: "/images/projects/rhythm-of-rain.jpg",
    headline: "A lifestyle proposition built for first-home buyers.",
    summary:
      "We developed the project identity, communication platform and launch ecosystem, creating a differentiated proposition that resonated strongly with first-home buyers.",
    scope: ["Complete go-to-market strategy", "Integrated campaign rollout", "Digital marketing", "CRM", "Lead generation", "Sales enablement"],
  },
  {
    slug: "sowparnika-group",
    name: "Group sales and marketing",
    developer: "Sowparnika Projects",
    location: "Multiple residential developments",
    type: "Marketing transformation",
    image: "/images/projects/sowparnika-group.jpg",
    headline: "Two years leading marketing across a developer’s residential portfolio.",
    summary:
      "Across FY23–24 and FY24–25 we led the strategic marketing function across multiple residential developments, strengthening brand visibility, improving lead efficiency and accelerating growth through integrated marketing and launch strategies.",
    scope: ["Strategic marketing leadership", "Integrated campaigns", "Launch strategy", "Lead generation", "Budget management"],
    facts: [
      { label: "Marketing budget managed", value: "₹21.88 Cr" },
      { label: "Qualified leads", value: "99,423+" },
      { label: "Site visits", value: "7,287" },
      { label: "Gross bookings", value: "867" },
      { label: "Marketing-influenced sales", value: "₹179.35 Cr" },
      { label: "Units launched", value: "1,900" },
      { label: "Integrated campaigns", value: "20+" },
      { label: "Customer base growth", value: "67%" },
    ],
    metric: { value: "₹179 Cr", label: "marketing-influenced sales" },
  },
];

/** Portfolio figures from the Sowparnika Group mandate, FY23–24 and FY24–25. */
export const stats = [
  { value: 179.35, prefix: "₹", suffix: " Cr", decimals: 2, label: "Marketing-influenced sales" },
  { value: 99423, suffix: "+", label: "Qualified leads generated" },
  { value: 7287, label: "Site visits" },
  { value: 867, label: "Gross bookings" },
  { value: 1900, label: "Units launched" },
  { value: 67, suffix: "%", label: "Customer base growth" },
];

export const developers = [
  { name: "Sowparnika Projects", logo: "/images/brand/sowparnika.png", w: 600, h: 365 },
  { name: "Merusri Developers", logo: "/images/brand/merusri.png", w: 302, h: 280 },
  { name: "Peram Group", logo: "/images/brand/peram.jpg", w: 500, h: 500 },
];

/** Organisations the leadership team has worked with in earlier roles (from the deck bios). */
export const leadershipExperience = [
  "Prestige Group",
  "Mantri Developers",
  "Capstone Life",
  "Nitesh Estates",
  "Vaishnavi Group",
  "Sowparnika Projects",
  "Merusri Developers",
];

export const leaders = [
  {
    name: "Balaji Ramachandra",
    role: "Founder and CTO",
    image: "/images/team/balaji-ramachandra.jpg",
    experience: "22+ years",
    bio: [
      "Balaji is a business and brand strategist with more than 22 years of leadership experience in real estate marketing, business transformation and go-to-market strategy. He has partnered with developers to reposition brands, revive underperforming projects and launch residential communities across Bengaluru.",
      "His expertise spans brand strategy, product positioning, customer acquisition, marketing transformation, CRM, sales enablement and integrated growth. He has led strategic initiatives for Capstone Life, Mantri Developers, Sowparnika Projects and Merusri Developers.",
    ],
  },
  {
    name: "Manuel Vinod",
    role: "Co-founder and Sales Head",
    image: "/images/team/manuel-vinod.jpg",
    experience: "Sales and revenue",
    bio: [
      "Manuel brings deep expertise in real estate sales, business development, customer acquisition and revenue generation, with strong capabilities in consultative selling, strategic partnerships and high-value sales execution.",
      "At First Quant he leads the Sales and Revenue vertical, designing scalable sales strategies, strengthening channel ecosystems and improving conversion so developers can accelerate absorption while delivering an exceptional buyer experience.",
    ],
  },
  {
    name: "Gautam R. Shetty",
    role: "Strategic Advisor",
    image: "/images/team/gautam-r-shetty.jpg",
    experience: "30+ years",
    bio: [
      "Gautam has more than three decades of experience across sales leadership, project marketing, business development and developer advisory, with Prestige Group, Nitesh Estates, Vaishnavi Group and Sowparnika Projects.",
      "He guides First Quant’s clients on market positioning, developer partnerships, sales strategy and commercial planning, helping them navigate market complexity and build long-term value.",
    ],
  },
];

export const achievements = [
  { value: "100%", label: "inventory absorbed in 9 months", project: "Life on the Green" },
  { value: "₹7,000 → ₹11,000", label: "per sq. ft. price benchmark over the sales lifecycle", project: "Life on the Green" },
  { value: "₹1.50 Cr → ₹2.54 Cr", label: "average selling price", project: "Life on the Green" },
  { value: "95%", label: "inventory absorbed within two years", project: "Euphoria in the East" },
  { value: "4,000+", label: "qualified enquiries for an unfamiliar location", project: "Euphoria in the East" },
  { value: "₹73 L → ₹81 L", label: "flagship 2 BHK starting price", project: "Euphoria in the East" },
];

/** PLACEHOLDER articles, written from the deck's themes. Replace or edit before publishing. */
export const insights = [
  {
    slug: "location-is-not-destiny",
    title: "Location is not destiny",
    category: "Strategy",
    date: "2026-10-14",
    readTime: "6 min read",
    image: "/images/architecture/glass-tower.jpg",
    excerpt: "Developers often blame the address for a slow project. In our experience, perception, timing and execution decide far more than the pin code.",
    body: [
      "Every project has value, every brand has potential and every market has opportunity. When a launch stalls, the location is the easiest thing to blame and the hardest to change, so it pays to look at the variables a developer actually controls.",
      "The first is perception. Buyers rarely compare two projects on objective data alone; they compare the story each project tells about the life they’ll lead there. A clear, credible positioning can make an emerging corridor feel like the next address rather than a compromise.",
      "The second is timing. The same product launched with a planned calendar, a ready sales team and a primed channel network performs very differently from one that trickles into the market.",
      "The third is execution: the sales journey, the experience centre, lead handling and the discipline to price up as demand proves itself. Get these right and location becomes one input among many, not the verdict.",
    ],
  },
  {
    slug: "building-a-micro-market-identity",
    title: "How to build a micro-market identity from scratch",
    category: "Brand",
    date: "2026-09-02",
    readTime: "8 min read",
    image: "/images/projects/euphoria-in-the-east.jpg",
    excerpt: "What we learned launching a project in an East Bengaluru corridor buyers didn’t know, and why the right idea can end up shaping a whole neighbourhood’s story.",
    body: [
      "Launching in an unfamiliar corridor means selling two things at once: the project and the place. Most communication focuses on the first and assumes the second, which is why many emerging-location launches struggle to build early confidence.",
      "For Euphoria in the East, we started with the place. “The New Whitefield is Rising” gave buyers a frame they already trusted and pointed it at a future they could believe in. Every campaign, site visit and sales conversation reinforced that one idea.",
      "The results followed: more than 4,000 qualified enquiries, 95% absorption within two years and a flagship 2 BHK price that moved from ₹73 L to ₹81 L. Other developers in the corridor later adopted similar messaging, which is the clearest sign a micro-market identity has taken hold.",
    ],
  },
  {
    slug: "pricing-up-through-the-lifecycle",
    title: "Pricing up through the sales lifecycle",
    category: "Revenue",
    date: "2026-07-21",
    readTime: "5 min read",
    image: "/images/projects/life-on-the-green.jpg",
    excerpt: "A launch price is a starting point, not a promise. How a planned escalation strategy lifted one project’s benchmark from ₹7,000 to ₹11,000 per sq. ft.",
    body: [
      "Too many projects are priced once and defended for years. A planned escalation strategy treats price as a signal of demand: it rewards early buyers, creates urgency and captures value as the project proves itself.",
      "At Life on the Green, inventory was fully absorbed in nine months while the average selling price rose from ₹1.50 Cr to ₹2.54 Cr. The per-square-foot benchmark moved from ₹7,000 to ₹11,000, a 57% increase.",
      "That only works when marketing, sales and pricing are run as one system: demand generation feeds the sales team, conversion data informs the next price step, and communication tells buyers why the project is worth more today than it was yesterday.",
    ],
  },
];

/** PLACEHOLDER roles. Replace with real openings or remove the list. */
export const careers = {
  intro:
    "We hire people who think like owners: strategists, marketers and sales leaders who want to see a project through from land to last unit.",
  values: [
    { title: "Own the outcome", body: "We take mandates, not briefs. Everyone is measured on what the project achieves." },
    { title: "Work across disciplines", body: "Strategy, design, marketing and sales sit at one table, so you’ll learn all of them." },
    { title: "Learn from the market", body: "Real launches, real numbers and leaders with decades of Bengaluru experience." },
  ],
  roles: [
    { title: "Brand strategist", team: "Brand and marketing", location: "Bengaluru", type: "Full time" },
    { title: "Performance marketing manager", team: "Marketing transformation", location: "Bengaluru", type: "Full time" },
    { title: "Channel partner manager", team: "Sales and revenue", location: "Bengaluru", type: "Full time" },
    { title: "Architectural designer", team: "Development strategy", location: "Bengaluru", type: "Full time" },
  ],
};

/** PLACEHOLDER channel partner programme details. Confirm with the sales team. */
export const channelPartner = {
  title: "Sell landmark projects with us",
  body: "Channel partners are a core part of every launch we run. We build the ecosystem around each project so partners can sell with confidence.",
  benefits: [
    "Launch briefings and project training before inventory opens",
    "Sales collateral, digital assets and site-visit support",
    "A clear lead registration and conversion process",
    "One point of contact on the First Quant sales team",
  ],
};

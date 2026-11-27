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
  email: "hello@firstquant.in",
  phone: "+91 98860 35099",
  address: "Bengaluru, Karnataka, India", // PLACEHOLDER: add the office address
  linkedin: "https://www.linkedin.com/", // PLACEHOLDER: company page URL
};

/**
 * Running labels above each home-page section, numbered in page order.
 * Keep this in step with the order in app/page.tsx.
 */
export const sectionKickers = {
  about: ["01", "Who we are"],
  services: ["02", "Six transformations"],
  coreServices: ["03", "Architecture, strategy, execution"],
  work: ["04", "Selected work"],
  network: ["05", "Partners"],
  approach: ["06", "Method"],
  achievements: ["07", "Results"],
  leadership: ["08", "People"],
  contact: ["09", "Contact"],
} as const;

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "What we do", href: "/#services" },
  { label: "Core services", href: "/#core-services" },
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
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
    body: "Developing comprehensive go-to-market strategies for successful project launches.",
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
  tagline: "Market-led design. Development efficiency. Value creation.",
  /** Deck slide 5. */
  paragraphs: [
    "At First Quant, architecture begins with understanding the market, not simply designing a building.",
    "We partner with developers from land evaluation and project feasibility through architectural planning and design development, translating market intelligence, customer preferences and financial objectives into commercially viable development concepts.",
    "By aligning architectural vision with product demand, saleable-area optimisation, functional planning and development economics, we help developers create projects that are distinctive in design, efficient in execution and positioned to maximise revenue potential.",
  ],
  groups: [
    {
      title: "Land intelligence and development feasibility",
      items: ["Land and location assessment", "Market demand and competition analysis", "Development potential and planning-control review", "Preliminary feasibility and financial modelling", "Development brief and product-mix recommendations"],
    },
    {
      title: "Architectural concept and product planning",
      items: ["Architectural vision and concept development", "Site planning, building massing and layout options", "Apartment configurations and typical-floor planning", "Façade concepts, elevations and design identity", "Customer-led product planning and differentiation"],
    },
    {
      title: "Design efficiency and saleable-area optimisation",
      items: ["Saleable-area and area-efficiency studies", "Unit-mix and configuration optimisation", "Core, circulation and common-area efficiency", "Floor-plate and layout optimisation", "Revenue-potential assessment of planning options"],
    },
    {
      title: "Design development and technical coordination",
      items: ["Finalisation of floor plans, sections and elevations", "Façade composition, materials and architectural elements", "Coordination with structural and MEP consultants", "Resolution of design interfaces and typical details", "Alignment of design decisions with cost and feasibility objectives"],
    },
    {
      title: "Statutory and construction documentation",
      items: ["Coordination of architectural drawings for statutory submissions", "Liaison with appointed approval consultants", "Good-for-Construction (GFC) architectural drawings", "Door, window, flooring, kitchen and toilet details", "Ceiling, staircase, core and façade details, as applicable", "Typical construction and enlarged architectural details"],
    },
    {
      title: "Construction-stage design coordination",
      items: ["Architectural clarifications for the project team", "Review of execution-related design queries", "Coordination of agreed revisions arising from site conditions", "Coordination with architectural, structural and MEP consultants"],
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
    { title: "Marketing transformation", items: ["Integrated marketing strategy", "Digital marketing", "ATL and BTL", "PR and media", "Influencer marketing", "Content strategy", "CRM strategy", "Automation", "Performance marketing"] },
    { title: "Sales acceleration", items: ["Sales process design", "Retail sales strategy", "Channel partner strategy", "International sales", "Sales training", "Lead management", "Conversion framework", "Sales analytics"] },
    { title: "Business operations", items: ["CRM implementation", "Marketing automation", "MIS and dashboards", "Vendor ecosystem", "Budget management", "Marketing governance", "KPI framework"] },
  ],
};

export type Project = {
  slug: string;
  name: string;
  developer: string;
  location?: string;
  type: "Launch" | "Repositioning" | "Marketing transformation" | "Campaign" | "Brand identity";
  image: string;
  /** Original showcase, e.g. the Behance project page. */
  link?: string;
  headline: string;
  summary: string;
  challenge?: string;
  scope: string[];
  facts?: { label: string; value: string }[];
  impact?: string[];
  metric?: { value: string; label: string };
  /** Visual case study shown below the write-up, in order (mirrors the Behance layout). */
  story?: StoryBlock[];
};

/** `alt` falls back to "<project name>, image N" when omitted. */
export type StoryImage = { src: string; alt?: string; w: number; h: number };
export type StoryBlock =
  | { kind: "images"; images: StoryImage[] }
  /** Body lines: "• " starts a bullet; a short ALL-CAPS line becomes a subheading. */
  | { kind: "text"; title?: string; body: string[] }
  /** Video or flipbook iframe; `ratio` is height as a % of width. */
  | { kind: "embed"; src: string; ratio: number; title: string };

export const projects: Project[] = [
  {
    slug: "sowparnika-life-on-the-green",
    name: "Life on the Green",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Launch",
    image: "/images/projects/life-on-the-green.jpg",
    link: "https://www.behance.net/gallery/232834009/Life-on-the-green",
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
    link: "https://www.behance.net/gallery/233068295/Euphoria-In-the-East",
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
    link: "https://www.behance.net/gallery/258783767/Peram-Ecocity",
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
    link: "https://www.behance.net/gallery/238023113/Merusri-Antelopes",
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
    link: "https://www.behance.net/gallery/237117349/Merusri-Sunscape",
    headline: "A complete launch framework for a premium villa community.",
    summary:
      "We conceptualised the full launch framework: market positioning, campaign architecture, the customer experience journey and integrated communication.",
    scope: ["Product positioning", "Launch strategy", "Brand narrative", "GTM planning", "Premium customer experience"],
  },
  {
    slug: "sowparnika-rhythm-of-rain",
    name: "Rhythm of Rain",
    developer: "Sowparnika Projects",
    location: "Near Hopefarm, Whitefield, Bengaluru",
    type: "Launch",
    image: "/images/projects/rhythm-of-rain.jpg",
    link: "https://www.behance.net/gallery/238439765/Sowparnika-RhythmOf-Rain",
    headline: "A lifestyle proposition built for first-home buyers.",
    summary:
      "We developed the project identity, communication platform and launch ecosystem, creating a differentiated proposition that resonated strongly with first-home buyers.",
    challenge:
      "Rhythm of Rain had to be more than another residential community. The brand needed to feel like an experience born from emotion, nature and everyday living in harmony, and to connect with the modern buyer’s search for balance, freshness and a sense of belonging, while carrying the trust of the House of Sowparnika.",
    scope: ["Project launch strategy", "Brand identity", "Logo design", "Complete go-to-market strategy", "Integrated campaign rollout", "Digital marketing", "CRM", "Lead generation", "Sales enablement"],
    facts: [
      { label: "Location", value: "Near Hopefarm, Whitefield" },
      { label: "Homes", value: "2 and 3 BHK apartments" },
      { label: "Code name", value: "Cloud Seeding @Hopefarm" },
    ],
    story: [
      {
        kind: "images",
        images: [
          { src: "/images/projects/rhythm-of-rain/01.jpg", alt: "Rhythm of Rain logo in teal on a deep green background", w: 408, h: 514 },
          { src: "/images/projects/rhythm-of-rain/02.jpg", alt: "Rhythm of Rain logo in gold on an earthy brown background", w: 408, h: 515 },
        ],
      },
      {
        kind: "text",
        title: "Each colour tells a story",
        body: ["For Rhythm of Rain, the palette is more than a set of shades. It invites buyers to feel serenity, warmth and the rhythm of life itself, with hues that evoke fresh rain, earthy stability and the vibrant harmony of nature."],
      },
      {
        kind: "images",
        images: [{ src: "/images/projects/rhythm-of-rain/03.jpg", alt: "Rhythm of Rain logo as dimensional signage on a sunlit wall", w: 443, h: 330 }],
      },
      {
        kind: "images",
        images: [
          { src: "/images/projects/rhythm-of-rain/04.jpg", alt: "Black and white Rhythm of Rain branded mugs", w: 744, h: 495 },
          { src: "/images/projects/rhythm-of-rain/05.jpg", alt: "Rhythm of Rain feather flags with a geometric rain pattern", w: 700, h: 519 },
        ],
      },
      {
        kind: "images",
        images: [
          { src: "/images/projects/rhythm-of-rain/06.jpg", alt: "Roll-up banner reading “A blend of nature and urban living”", w: 702, h: 503 },
          { src: "/images/projects/rhythm-of-rain/07.jpg", alt: "Rhythm of Rain logo on an office reception wall", w: 706, h: 529 },
        ],
      },
      {
        kind: "images",
        images: [{ src: "/images/projects/rhythm-of-rain/08.jpg", alt: "Launch code name: Cloud Seeding @Hopefarm", w: 840, h: 466 }],
      },
      {
        kind: "text",
        title: "Code name: Cloud Seeding",
        body: ["The launch was inspired by the science of creating ideal conditions for growth, where location, design and lifestyle come together to create a thriving community."],
      },
      {
        kind: "images",
        images: [{ src: "/images/projects/rhythm-of-rain/09.jpg", alt: "Launch hoarding: Rhythm of Rain luxury apartments near Hopefarm, Whitefield, “Welcome to Soulful Living”", w: 1280, h: 640 }],
      },
    ],
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

  // Campaign and brand work from https://www.behance.net/balajiramachandra
  {
    slug: "sowparnika-ho-ho-homes",
    name: "Ho Ho Homes",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-ho-ho-homes.jpg",
    link: "https://www.behance.net/gallery/186761265/HO-HO-HOMES",
    headline: "A Christmas campaign that made the home search feel rewarding.",
    summary:
      "A festive campaign built for Bengaluru home buyers around Christmas Eve, designed to make the buying journey smooth and rewarding rather than a mere transaction.",
    scope: ["Campaign ideation", "Festive offer communication", "Illustration", "Advertising"],
  },
  {
    slug: "sowparnika-ab-har-ghar-hoga-more-yaa",
    name: "Ab Har Ghar Hoga More Yaa",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-ab-har-ghar-hoga-more-yaa.jpeg",
    link: "https://www.behance.net/gallery/180239287/GanpatiBappaMorya-Ab-Har-Ghar-Hoga-More-Yaa",
    headline: "A Ganesh Chaturthi offer built around the Fortune Modak.",
    summary:
      "For Ganesh Chaturthi, buyers unwrapped a Fortune Modak for exclusive offers on their home, with discounts of up to ₹1 lakh on booking alongside no pre-EMI, rental assurance and fully furnished options.",
    scope: ["Creative direction", "Copywriting", "Festive offer design", "Advertising"],
  },
  {
    slug: "sowparnika-azaadi-ka-mauka",
    name: "Azaadi Ka Mauka: Quit Rent Movement",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-azaadi-ka-mauka.jpeg",
    link: "https://www.behance.net/gallery/180238399/AZAADI-KA-MAUKA-QUIT-RENT-MOVEMENT",
    headline: "An Independence Day call to stop renting and start owning.",
    summary:
      "An Independence Day campaign that linked freedom with homeownership, packaging exclusive seasonal deals to make it the right moment to begin the home-buying journey.",
    scope: ["Campaign concept", "Seasonal offers", "Illustration", "Advertising"],
  },
  {
    slug: "sowparnika-monsoon-makaan-mela",
    name: "Monsoon Makaan Mela",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-monsoon-makaan-mela.jpg",
    link: "https://www.behance.net/gallery/175237877/Monsoon-Makaan-Mela",
    headline: "A monsoon property fair across apartments and villas.",
    summary:
      "A seasonal property fair that brought Sowparnika’s apartments and villas together under one monsoon theme, inviting buyers to find their own rain-washed haven.",
    scope: ["Seasonal campaign", "Portfolio communication", "Illustration"],
  },
  {
    slug: "sowparnika-incredible-property-league",
    name: "Incredible Property League",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-incredible-property-league.jpeg",
    link: "https://www.behance.net/gallery/172799497/IPL-with-Sowparnika-Projects",
    headline: "Riding IPL season with a property league of our own.",
    summary:
      "Timed to the cricket season, the Incredible Property League turned home buying into a league format, borrowing the energy of the IPL to drive attention and site visits.",
    scope: ["Topical campaign", "Event concept", "Illustration", "Social media"],
  },
  {
    slug: "sowparnika-griha-aarambh",
    name: "Griha Aarambh",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-griha-aarambh.jpeg",
    link: "https://www.behance.net/gallery/168988939/GRIHA-AARAMBH",
    headline: "A campaign name built to stand out in a crowded market.",
    summary:
      "Griha Aarambh gave Sowparnika a memorable, ownable campaign name that set the brand apart from competitors and explained why buyers should choose Sowparnika homes.",
    scope: ["Campaign naming", "Brand differentiation", "Advertising"],
  },
  {
    slug: "sowparnika-sunray-knock-out-pre-emi",
    name: "Sunray: Knock Out Pre-EMI",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-sunray-knock-out-pre-emi.jpeg",
    link: "https://www.behance.net/gallery/168976699/Knock-Out-PRE-EMI-SOWPARNIKA-SUNRAY",
    headline: "Turning a routine no pre-EMI offer into a campaign idea.",
    summary:
      "We took a standard no pre-EMI offer for Sowparnika Sunray and lifted it into a bolder creative idea that captured the attention of its target buyers.",
    scope: ["Offer positioning", "Campaign creative", "Advertising"],
  },
  {
    slug: "sowparnika-maha-homes",
    name: "Maha Homes",
    developer: "Sowparnika Projects",
    location: "Bengaluru",
    type: "Campaign",
    image: "/images/projects/sowparnika-maha-homes.jpeg",
    link: "https://www.behance.net/gallery/163811467/Sowparnika-Projects-MAHA-HOMES",
    headline: "Maximum, Affordable, Homes, Assured: a festive-season promise.",
    summary:
      "A festive-season campaign whose name spelled out its promise: more space, a choice of locations and assured, affordable homes across the Sowparnika portfolio.",
    scope: ["Campaign naming", "Festive communication", "Illustration", "Advertising"],
  },
  {
    slug: "mantri-solitude-whistle-podu",
    name: "Solitude: Whistle Podu",
    developer: "Mantri Developers",
    location: "Chennai",
    type: "Campaign",
    image: "/images/projects/mantri-solitude-whistle-podu.jpg",
    link: "https://www.behance.net/gallery/157105559/Mantri-Solitude-Whistle-Podu",
    headline: "A Super 7 offer for Chennai, told in the city’s own cricket chant.",
    summary:
      "The campaign announced the biggest offer Chennai home seekers had seen and tied it to “Whistle Podu”, the Chennai IPL team’s famous slogan, for an instant local connection. 2 and 3 BHK villas from ₹85 lakh.",
    scope: ["Campaign concept", "Local cultural hook", "Offer communication", "Advertising"],
  },
  {
    slug: "mantri-signature-villas-xl-xs",
    name: "Signature Villas: XL Living, XS Price",
    developer: "Mantri Developers",
    type: "Campaign",
    image: "/images/projects/mantri-signature-villas-xl-xs.jpg",
    link: "https://www.behance.net/gallery/156026165/Mantri-Signature-Villas-XL-Extra-Large-XS-Extra-Small",
    headline: "Extra-large living at an extra-small price.",
    summary:
      "A campaign that set the project’s generous villa community against its price, presenting 3, 4 and 5 BHK villas from ₹2.83 Cr as extra-large living with an extra-small price tag.",
    scope: ["Campaign concept", "Value positioning", "Advertising"],
  },
  {
    slug: "mantri-serenity-infinity",
    name: "Serenity: Infinity with Serenity",
    developer: "Mantri Developers",
    type: "Campaign",
    image: "/images/projects/mantri-serenity-infinity.jpg",
    link: "https://www.behance.net/gallery/155768853/Mantri-Serenity-INFINITY-WITH-SERENITY",
    headline: "Infinity with Serenity: the campaign for Mantri Serenity.",
    summary: "Campaign creative and advertising for Mantri Serenity under the line “Infinity with Serenity”.",
    scope: ["Campaign creative", "Illustration", "Advertising"],
  },
  {
    slug: "axis-aspira-fully-furnished",
    name: "Aspira: Move In with Only Your Luggage",
    developer: "Axis Capstone",
    type: "Campaign",
    image: "/images/projects/axis-aspira-fully-furnished.jpg",
    link: "https://www.behance.net/gallery/119472787/Axis-Aspira-Fully-Furnished-Homes",
    headline: "Selling the last units of a boutique project as fully furnished homes.",
    summary:
      "To close out the final units of a luxury boutique project, the campaign led with fully furnished homes at attractive prices. The creative showed a car loaded with luggage under the line “Move in only with luggage”.",
    scope: ["Inventory closure campaign", "Offer design", "Advertising"],
  },
  {
    slug: "axis-estrella-terraces",
    name: "Estrella Terraces",
    developer: "Axis Capstone",
    type: "Campaign",
    image: "/images/projects/axis-estrella-terraces.jpg",
    link: "https://www.behance.net/gallery/119478327/AXIS-ESTRELLA-TERRACES",
    headline: "Staying connected to your home is now child’s play.",
    summary:
      "The project’s key USP was advanced home automation. The campaign showed how easily today’s children handle apps and smartphones, making the point that running your home while you’re away is as simple as a game.",
    scope: ["USP communication", "Campaign concept", "Illustration"],
  },
  {
    slug: "axis-capstone-csr",
    name: "CSR Initiative",
    developer: "Axis Capstone",
    type: "Campaign",
    image: "/images/projects/axis-capstone-csr.jpg",
    link: "https://www.behance.net/gallery/119478709/Axis-Capstone-CSR-INITIATIVE",
    headline: "Communicating a developer’s corporate social responsibility work.",
    summary: "Communication design for Axis Capstone’s corporate social responsibility initiative.",
    scope: ["Corporate communication", "Graphic design"],
  },
  {
    slug: "elv-ark-more-for-less",
    name: "ARK: More for Less",
    developer: "ELV",
    type: "Campaign",
    image: "/images/projects/elv-ark-more-for-less.jpg",
    link: "https://www.behance.net/gallery/119465881/ELV-ARK-Campaigns",
    headline: "Positioning a project as more for less in a competitive market.",
    summary:
      "“More for Less” set the project against its competitors by pairing its USPs with its price, shaping how buyers perceived the value of ARK in a crowded market.",
    scope: ["Positioning", "Campaign concept", "Branding", "Advertising"],
  },
  {
    slug: "elv-ark-site-branding",
    name: "ARK site branding",
    developer: "ELV",
    type: "Campaign",
    image: "/images/projects/elv-ark-site-branding.jpg",
    link: "https://www.behance.net/gallery/119466451/ELV-ARK-SITE-BRANDING",
    headline: "On-site branding that sets the tone for every site visit.",
    summary: "Site branding for ARK, designed to build acceptance for the project from the moment buyers arrive.",
    scope: ["Site branding", "Environmental graphics"],
  },
  {
    slug: "elv-ark-social-media",
    name: "ARK social media",
    developer: "ELV",
    type: "Campaign",
    image: "/images/projects/elv-ark-social-media.jpg",
    link: "https://www.behance.net/gallery/119466287/ELV-ARK-SOCIAL-MEDIA-CREATIVES",
    headline: "Social creatives that build awareness and engagement.",
    summary: "A series of social media creatives for ARK, built to strengthen brand recognition and grow engagement with the target audience.",
    scope: ["Social media creative", "Brand awareness"],
  },
  {
    slug: "sriven-estates-say-no",
    name: "Say No",
    developer: "Sriven Estates",
    type: "Campaign",
    image: "/images/projects/sriven-estates-say-no.jpg",
    link: "https://www.behance.net/gallery/119482453/SRIVEN-ESTATES-Campaign-SAYNO",
    headline: "The “Say No” campaign for Sriven Estates.",
    summary: "Campaign creative for Sriven Estates built around the line “Say No”.",
    scope: ["Campaign creative", "Graphic design"],
  },
  {
    slug: "karmy",
    name: "Karmy",
    developer: "Karmy",
    type: "Brand identity",
    image: "/images/projects/karmy.jpg",
    link: "https://www.behance.net/gallery/152833525/KARMY",
    headline: "A brand for premium acrylic panels new to the Indian market.",
    summary:
      "Naming and identity for Karmy, a maker of customised genuine-acrylic panels for living rooms, kitchens, wardrobes, offices and furniture, introducing a new trend to Indian interiors.",
    scope: ["Naming", "Brand identity", "Photography"],
  },
  {
    slug: "vito-products",
    name: "Vito Products",
    developer: "Vito",
    type: "Brand identity",
    image: "/images/projects/vito-products.jpg",
    link: "https://www.behance.net/gallery/152668117/Vito-Products",
    headline: "A minimalist mark that reads as both organic and technical.",
    summary: "Logo design for Vito, plus curation of the brand’s website.",
    scope: ["Logo design", "Website curation"],
  },
  {
    slug: "floorzy-makeover",
    name: "Floorzy Makeover",
    developer: "Floorzy Makeover",
    type: "Brand identity",
    image: "/images/projects/floorzy-makeover.jpg",
    link: "https://www.behance.net/gallery/152473847/FLOORZY-MAKEOVER",
    headline: "A simple, memorable name for a marble polishing specialist.",
    summary:
      "Naming and identity for a marble polishing company with a professional team and Italian machinery. The name was kept easy to pronounce and remember, to build trust in the service.",
    scope: ["Naming", "Brand identity"],
  },
  {
    slug: "dush",
    name: "DUSH",
    developer: "DUSH",
    type: "Brand identity",
    image: "/images/projects/dush.jpg",
    link: "https://www.behance.net/gallery/152395847/DUSH",
    headline: "Durable + Shield: a floor-protection brand built for contractors.",
    summary:
      "The name joins DUrable and SHield, promising floors a dependable, long-lasting shield. It was kept short and easy to say for the contractors and workers who buy it.",
    scope: ["Naming", "Brand identity", "Product design"],
  },
  {
    slug: "maloo-group",
    name: "Maloo Group",
    developer: "Maloo Group",
    type: "Brand identity",
    image: "/images/projects/maloo-group.jpg",
    link: "https://www.behance.net/gallery/151855953/Maloo-Group",
    headline: "A corporate identity for a group of companies.",
    summary:
      "A logo for a parent company with several sister concerns. The letters N and M are formed from straight vertical and horizontal strips with curves, expressing a commitment to quality across every business.",
    scope: ["Corporate identity", "Logo design"],
  },
  {
    slug: "leathercraft",
    name: "Leathercraft",
    developer: "Leathercraft Shoes Emporium",
    location: "Bengaluru",
    type: "Brand identity",
    image: "/images/projects/leathercraft.jpg",
    link: "https://www.behance.net/gallery/121418105/Leathercraft",
    headline: "Rebranding a popular Bengaluru footwear store.",
    summary:
      "A rebrand for Leathercraft, a well-known Bengaluru footwear emporium, using the brand’s history to shape its future: premium, modern and stylish across a wide range of products.",
    scope: ["Rebranding", "Brand identity", "Advertising"],
  },
  {
    slug: "emerge-projects",
    name: "Emerge Projects",
    developer: "Emerge Projects",
    type: "Brand identity",
    image: "/images/projects/emerge-projects.jpg",
    link: "https://www.behance.net/gallery/119520663/Emerge-Projects-Logo-Branding",
    headline: "A logo and brand strategy for a real estate developer.",
    summary:
      "Logo and branding for Emerge Projects that clarifies the company’s purpose, values and promise, helping buyers recognise the brand and choose it over the competition.",
    scope: ["Logo design", "Brand strategy"],
  },
  {
    slug: "mysimbha",
    name: "Mysimbha",
    developer: "Mysimbha",
    type: "Brand identity",
    image: "/images/projects/mysimbha.jpg",
    link: "https://www.behance.net/gallery/119479645/Mysimbha",
    headline: "It’s all about you: naming a brand of custom handmade products.",
    summary: "Name branding and logo design for Mysimbha, a brand of self-expressive, custom and handmade products.",
    scope: ["Naming", "Logo design"],
  },
  {
    slug: "prodigies-international-school",
    name: "The Prodigies International School",
    developer: "The Prodigies International School",
    type: "Brand identity",
    image: "/images/projects/prodigies-international-school.jpg",
    link: "https://www.behance.net/gallery/119440555/THE-PRODIGIES-INTERNATIONAL-SCHOOL",
    headline: "Carrying a school’s motto through every piece of communication.",
    summary:
      "Branding communication for an international school, built around its mission, its passion for learning and its pursuit of excellence.",
    scope: ["Brand communication", "Illustration", "Advertising"],
  },
];

/**
 * Client logos for the strip below the hero. The first six come from each client's own website;
 * the rest are cut out of the project images on Behance (those clients have no live site).
 * `tall` gives compact marks more height so they balance against wide wordmarks.
 */
export const clientLogos: { name: string; src: string; w: number; h: number; tall?: boolean }[] = [
  { name: "Sowparnika Projects", src: "/images/clients/sowparnika.png", w: 237, h: 144 },
  { name: "Mantri Developers", src: "/images/clients/mantri.png", w: 98, h: 73, tall: true },
  { name: "Merusri Developers", src: "/images/clients/merusri.svg", w: 244, h: 76 },
  { name: "Peram Group", src: "/images/clients/peram.png", w: 411, h: 144 },
  { name: "Axis Capstone", src: "/images/clients/axis.png", w: 196, h: 144, tall: true },
  { name: "ELV Projects", src: "/images/clients/elv.png", w: 131, h: 144, tall: true },
  { name: "Emerge Projects", src: "/images/clients/emerge.png", w: 513, h: 144 },
  { name: "Maloo Group", src: "/images/clients/maloo.png", w: 164, h: 144, tall: true },
  { name: "The Prodigies International School", src: "/images/clients/prodigies.png", w: 494, h: 77 },
  { name: "Vito", src: "/images/clients/vito.png", w: 404, h: 144 },
  { name: "Floorzy Makeover", src: "/images/clients/floorzy.png", w: 416, h: 144 },
  { name: "Leathercraft", src: "/images/clients/leathercraft.png", w: 215, h: 144, tall: true },
  { name: "Karmy", src: "/images/clients/karmy.png", w: 259, h: 144, tall: true },
  { name: "Mysimbha", src: "/images/clients/mysimbha.png", w: 659, h: 144 },
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

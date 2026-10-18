import type {Possibility} from '../types';
export const businessNodes:Possibility[]=[
  {
    "id": "business",
    "title": "Business",
    "aliases": [
      "business"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Notice a need. Make something useful.",
    "longerDescription": "Explore selling, organising and building things that help people.",
    "tags": [
      "business",
      "world"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "sales",
      "creator-economy",
      "social-enterprise",
      "consumer-brands"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "sales",
    "title": "Sales",
    "aliases": [
      "sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Find out what someone needs and explain what helps.",
    "longerDescription": "A good sales conversation starts with listening. Help a shop choose a billing app or a family compare bicycles.",
    "tags": [
      "business",
      "skill"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "b2b-sales",
      "b2c-sales",
      "direct-sales",
      "inside-sales",
      "field-sales",
      "channel-sales",
      "account-management",
      "sales-ops",
      "sales-enablement"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "sales-engineering"
    ],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-sales",
    "icon": "↗"
  },
  {
    "id": "b2b-sales",
    "title": "B2B sales",
    "aliases": [
      "b2b sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Selling model",
    "shortDescription": "One business sells to another business.",
    "longerDescription": "Imagine a bakery buying an oven. Several people may need to agree on the price, reliability and support.",
    "tags": [
      "business",
      "selling model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "saas-sales",
      "enterprise-sales",
      "smb-sales",
      "industrial-sales",
      "advertising-sales"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-b2b-sales",
    "icon": "↗"
  },
  {
    "id": "saas-sales",
    "title": "SaaS sales",
    "aliases": [
      "saas sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Help businesses choose software they subscribe to.",
    "longerDescription": "Instead of selling a box once, you explain a service used every month. Think of attendance software for a school.",
    "tags": [
      "business",
      "industry"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "sales-engineering",
      "sdr",
      "account-executive",
      "customer-success",
      "revops"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-saas-sales",
    "icon": "↗"
  },
  {
    "id": "sales-engineering",
    "title": "Sales engineering",
    "aliases": [
      "sales engineering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Show how a technical product solves a real problem.",
    "longerDescription": "You listen to a customer, build a demo and answer technical questions. Explaining and technology meet here.",
    "tags": [
      "business",
      "intersection"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "solutions-consulting"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "technology",
      "sales"
    ],
    "peopleIds": [],
    "resourceIds": [
      "sales-engineer-guide"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-sales-engineering",
    "icon": "↗"
  },
  {
    "id": "sdr",
    "title": "Sales development",
    "aliases": [
      "sales development"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Start useful conversations with possible customers.",
    "longerDescription": "Research whether a company needs the product and arrange a conversation. Clear questions matter more than a loud pitch.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "account-executive",
    "title": "Account executive",
    "aliases": [
      "account executive"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Guide a customer from discussion to a decision.",
    "longerDescription": "Understand the problem, coordinate a proposal and discuss costs. Know when the product is a poor fit too.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "customer-success",
    "title": "Customer success",
    "aliases": [
      "customer success"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Help customers get value after they sign up.",
    "longerDescription": "Notice obstacles, teach useful features and bring feedback to the product team.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-customer-success",
    "icon": "↗"
  },
  {
    "id": "revops",
    "title": "Revenue operations",
    "aliases": [
      "revenue operations"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Make sales, marketing and support work together.",
    "longerDescription": "Check how information travels between teams. A missed handover can matter as much as a clever campaign.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-ops-guide"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "↗"
  },
  {
    "id": "solutions-consulting",
    "title": "Solutions consulting",
    "aliases": [
      "solutions consulting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Design a workable answer before a purchase.",
    "longerDescription": "Turn a problem into a plan with features, limits and tradeoffs. Sometimes several tools need to work together.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-engineer-guide"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "enterprise-sales",
    "title": "Enterprise sales",
    "aliases": [
      "enterprise sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Customer segment",
    "shortDescription": "Sell to large organisations with complex needs.",
    "longerDescription": "A hospital may involve security, finance and operations teams in one decision. Careful coordination becomes part of selling.",
    "tags": [
      "business",
      "customer segment"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "smb-sales",
    "title": "Small business sales",
    "aliases": [
      "small business sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Customer segment",
    "shortDescription": "Help smaller businesses choose practical tools.",
    "longerDescription": "An independent shop has different needs from a national chain. Simple setup and clear costs may matter most.",
    "tags": [
      "business",
      "customer segment"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "industrial-sales",
    "title": "Industrial sales",
    "aliases": [
      "industrial sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Explain equipment and materials businesses use.",
    "longerDescription": "You might discuss a pump, machine part or packaging. Understanding the factory floor helps you ask better questions.",
    "tags": [
      "business",
      "industry"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "advertising-sales",
    "title": "Advertising sales",
    "aliases": [
      "advertising sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Connect advertisers with relevant audiences.",
    "longerDescription": "A podcast or magazine has space for sponsors. Be honest about what a campaign can achieve.",
    "tags": [
      "business",
      "industry"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "b2c-sales",
    "title": "B2C sales",
    "aliases": [
      "b2c sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Selling model",
    "shortDescription": "Help an individual choose something they need.",
    "longerDescription": "Explain choices, answer questions and respect a no. A personal purchase differs from a company buying software.",
    "tags": [
      "business",
      "selling model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "retail-sales"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "retail-sales",
    "title": "Retail sales",
    "aliases": [
      "retail sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Channel",
    "shortDescription": "Help people choose in a shop.",
    "longerDescription": "Learn the products and notice what a customer is trying to do. The simpler option may be best.",
    "tags": [
      "business",
      "channel"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "visual-merch"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "direct-sales",
    "title": "Direct sales",
    "aliases": [
      "direct sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Channel",
    "shortDescription": "A business sells straight to its customers.",
    "longerDescription": "A pottery studio selling its own cups is one example. This describes a selling route rather than a particular job.",
    "tags": [
      "business",
      "channel"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "inside-sales",
    "title": "Inside sales",
    "aliases": [
      "inside sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Working model",
    "shortDescription": "Have sales conversations by phone or online.",
    "longerDescription": "Prepare questions, demonstrate remotely and follow up clearly. This model exists across many industries.",
    "tags": [
      "business",
      "working model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "field-sales",
    "title": "Field sales",
    "aliases": [
      "field sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Working model",
    "shortDescription": "Meet customers where they work.",
    "longerDescription": "Visit shops or business sites to understand needs. Planning visits and keeping promises are part of the work.",
    "tags": [
      "business",
      "working model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "channel-sales",
    "title": "Channel sales",
    "aliases": [
      "channel sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Selling model",
    "shortDescription": "Work with partners who sell your product.",
    "longerDescription": "A company may reach customers through dealers. Help those partners understand the product and support their customers.",
    "tags": [
      "business",
      "selling model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "account-management",
    "title": "Account management",
    "aliases": [
      "account management"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Look after an ongoing customer relationship.",
    "longerDescription": "Track promises, solve problems and understand changing needs. Trust grows through useful follow through.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "sales-ops",
    "title": "Sales operations",
    "aliases": [
      "sales operations"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Make the selling process easier to run.",
    "longerDescription": "Organise records, reporting and tools so important conversations do not get lost.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-ops-guide"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "sales-enablement",
    "title": "Sales enablement",
    "aliases": [
      "sales enablement"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Help a sales team learn and explain better.",
    "longerDescription": "Make a product guide or practise customer questions with a team. Teaching and sales meet here.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sales-paths"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "creator-economy",
    "title": "Creator economy",
    "aliases": [
      "creator economy"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Explore work around people who make content.",
    "longerDescription": "Creators may need editors, managers and producers. Being on camera is only one route.",
    "tags": [
      "business",
      "industry"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "creator-manager",
      "brand-partnerships",
      "creator-ops",
      "community"
    ],
    "relatedIds": [
      "youtube"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "creator-business"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "creator-manager",
    "title": "Creator management",
    "aliases": [
      "creator management"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Organise the business around a creator's work.",
    "longerDescription": "Coordinate schedules, opportunities and delivery dates. Protect time for making things as well as handling business.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "talent-manager"
    ],
    "relatedIds": [
      "talent-manager"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "creator-business"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-creator-manager",
    "icon": "↗"
  },
  {
    "id": "talent-manager",
    "title": "Talent management",
    "aliases": [
      "talent management"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Help creative people plan opportunities over time.",
    "longerDescription": "Consider which projects fit a person's goals. Coordinate specialists when contracts need professional advice.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [
      "creator-manager"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "creator-business"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-talent-manager",
    "icon": "↗"
  },
  {
    "id": "brand-partnerships",
    "title": "Brand partnerships",
    "aliases": [
      "brand partnerships"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find a sensible fit between a creator and a brand.",
    "longerDescription": "Shape a brief and check the audience fit. Partnerships should be disclosed and honestly represented.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "sponsorship-sales"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-creators",
      "creator-business"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-brand-partnerships",
    "icon": "↗"
  },
  {
    "id": "sponsorship-sales",
    "title": "Sponsorship sales",
    "aliases": [
      "sponsorship sales"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Explain why a project is worth supporting.",
    "longerDescription": "Put together an audience story and clear proposal. A small festival can need this too.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "creator-ops",
    "title": "Creator operations",
    "aliases": [
      "creator operations"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Keep a creator business organised.",
    "longerDescription": "Track production, payments and permissions. Good systems give a creative team more time to make things.",
    "tags": [
      "business",
      "role"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "community",
    "title": "Community building",
    "aliases": [
      "community building"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Help people with shared interests belong.",
    "longerDescription": "A reading circle needs welcoming rituals and clear boundaries. Listening matters more than posting constantly.",
    "tags": [
      "business",
      "pursuit"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "events"
    ],
    "relatedIds": [
      "conservation"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "events",
    "title": "Community events",
    "aliases": [
      "community events"
    ],
    "nodeType": "possibility",
    "possibilityType": "Activity",
    "shortDescription": "Turn shared interests into a gathering.",
    "longerDescription": "Plan a tiny show or game afternoon. Consider access, welcoming newcomers and practical responsibilities.",
    "tags": [
      "business",
      "activity"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↗"
  },
  {
    "id": "social-enterprise",
    "title": "Social enterprise",
    "aliases": [
      "social enterprise"
    ],
    "nodeType": "possibility",
    "possibilityType": "Business model",
    "shortDescription": "Build a business around a problem that matters.",
    "longerDescription": "Understand both the people affected and how the work can sustain itself. Good intentions still need evidence.",
    "tags": [
      "business",
      "business model"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [
      "craft-enterprise"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "mitticool",
      "forest-story"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-social-enterprise",
    "icon": "↗"
  },
  {
    "id": "visual-merch",
    "title": "Visual merchandising",
    "aliases": [
      "visual merchandising"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make a display invite people to explore.",
    "longerDescription": "Objects, spacing and light guide the eye in a shop. Test the idea on a shelf at home.",
    "tags": [
      "business",
      "intersection"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [
      "food-styling"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-visual-merch",
    "icon": "↗"
  },
  {
    "id": "consumer-brands",
    "title": "Consumer brands",
    "aliases": [
      "consumer brands"
    ],
    "nodeType": "possibility",
    "possibilityType": "Business",
    "shortDescription": "Build products people recognise and choose.",
    "longerDescription": "A brand includes the experience of using something, not just its logo. Start by finding a real need and testing a simple version.",
    "tags": [
      "business",
      "business"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "mitticool"
    ],
    "surpriseLevel": 2,
    "icon": "↗"
  },
  {
    "id": "craft-enterprise",
    "title": "Craft enterprise",
    "aliases": [
      "craft enterprise"
    ],
    "nodeType": "possibility",
    "possibilityType": "Business",
    "shortDescription": "Build a livelihood around skilled making.",
    "longerDescription": "Materials, fair pay and relationships with makers shape the business. A good story should recognise the people whose skill made the object.",
    "tags": [
      "business",
      "business"
    ],
    "worldIds": [
      "business"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↗"
  }
];

import type {Possibility} from '../types';
export const technologyNodes:Possibility[]=[
  {
    "id": "technology",
    "title": "Technology",
    "aliases": [
      "technology"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Turn a what if into something that works.",
    "longerDescription": "Build, test and learn from people using what you make.",
    "tags": [
      "technology",
      "world"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "ux",
      "web-development",
      "robotics",
      "gis",
      "language-technology",
      "education-technology",
      "fintech",
      "space-engineering"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "sales-engineering",
      "conservation-technology",
      "education-technology"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "ux",
    "title": "UX design",
    "aliases": [
      "ux design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Make an app or service easier to use.",
    "longerDescription": "Watch a real task before decorating a screen. A simpler form can change everything.",
    "tags": [
      "technology",
      "field"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "ux-research",
      "accessibility"
    ],
    "relatedIds": [
      "game-ux"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "accessible-web",
      "ux-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-ux",
    "icon": "⌁"
  },
  {
    "id": "ux-research",
    "title": "UX research",
    "aliases": [
      "ux research"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Learn how people actually use a product.",
    "longerDescription": "Ask about recent experiences. Avoid questions that only confirm your own idea.",
    "tags": [
      "technology",
      "research area"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "usability-testing"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "ux-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "usability-testing",
    "title": "Usability testing",
    "aliases": [
      "usability testing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Watch a task and learn from the friction.",
    "longerDescription": "Give a clear task and resist helping. Confusion tells you about the design, not the user's ability.",
    "tags": [
      "technology",
      "skill"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "ux-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "accessibility",
    "title": "Accessible design",
    "aliases": [
      "accessible design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make things work for people with different needs.",
    "longerDescription": "Readable text and keyboard controls help many people. Test rather than guessing what access means.",
    "tags": [
      "technology",
      "intersection"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "accessible-web"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-accessibility",
    "icon": "⌁"
  },
  {
    "id": "web-development",
    "title": "Web development",
    "aliases": [
      "web development"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Build pages people can use in a browser.",
    "longerDescription": "Combine structure, appearance and behaviour. Finish a small useful page first.",
    "tags": [
      "technology",
      "skill"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "creative-coding",
      "open-source"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "accessible-web",
      "web-learning",
      "p5-setup"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "creative-coding",
    "title": "Creative coding",
    "aliases": [
      "creative coding"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Use code to make visual experiments.",
    "longerDescription": "A few rules can create moving patterns. Change one number and see what happens.",
    "tags": [
      "technology",
      "intersection"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "data-visualisation"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "technical-art"
    ],
    "peopleIds": [],
    "resourceIds": [
      "p5-tutorials",
      "p5-setup"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "⌁"
  },
  {
    "id": "data-visualisation",
    "title": "Data visualisation",
    "aliases": [
      "data visualisation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Give numbers a shape people understand.",
    "longerDescription": "Choose a form that answers a question. Label scales so the picture does not exaggerate.",
    "tags": [
      "technology",
      "craft"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "p5-tutorials"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "robotics",
    "title": "Robotics",
    "aliases": [
      "robotics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Combine sensing, movement and code.",
    "longerDescription": "A robot notices something and responds. Describe a simple sequence before building hardware.",
    "tags": [
      "technology",
      "field"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "gis",
    "title": "Digital mapping",
    "aliases": [
      "digital mapping"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Connect information to places on a map.",
    "longerDescription": "Show shade, buses or facilities. Protect location data that could reveal someone's private routine.",
    "tags": [
      "technology",
      "intersection"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "cartography"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-gis",
    "icon": "⌁"
  },
  {
    "id": "open-source",
    "title": "Open source contribution",
    "aliases": [
      "open source contribution"
    ],
    "nodeType": "possibility",
    "possibilityType": "Activity",
    "shortDescription": "Improve a tool people can inspect and share.",
    "longerDescription": "Clear instructions and bug reports count. Read the contribution guide before proposing a change.",
    "tags": [
      "technology",
      "activity"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "web-learning"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⌁"
  },
  {
    "id": "language-technology",
    "title": "Language technology",
    "aliases": [
      "language technology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make technology work across human languages.",
    "longerDescription": "Speech tools, dictionaries and input systems all need careful language work. A tool useful in English may not work equally well in Hindi or Tamil.",
    "tags": [
      "technology",
      "intersection"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁"
  },
  {
    "id": "education-technology",
    "title": "Education technology",
    "aliases": [
      "education technology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Build tools that support how people learn.",
    "longerDescription": "Start with a learning problem rather than an exciting feature. Watch whether the tool helps someone practise and understand.",
    "tags": [
      "technology",
      "intersection"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "teaching",
      "technology"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁"
  },
  {
    "id": "fintech",
    "title": "Financial technology",
    "aliases": [
      "financial technology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Build tools for payments and financial services.",
    "longerDescription": "Reliability, privacy and regulation matter here. Explore a fictional payment flow rather than handling real money or financial advice.",
    "tags": [
      "technology",
      "industry"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁",
    "eligibilityNotes": "These experiments use fictional examples. Professional work may require specialised training and relevant permissions."
  },
  {
    "id": "space-engineering",
    "title": "Space engineering",
    "aliases": [
      "space engineering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Build systems that must work far from Earth.",
    "longerDescription": "Structures, electronics and software need to cooperate under harsh conditions. A paper mission plan can reveal the tradeoffs before any hardware exists.",
    "tags": [
      "technology",
      "field"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [
      "aerospace-engineering"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁"
  },
  {
    "id": "aerospace-engineering",
    "title": "Aerospace engineering",
    "aliases": [
      "aerospace engineering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Design systems that fly through air or space.",
    "longerDescription": "Aerodynamics, structures and control systems need to work together. Sketch the tradeoffs in a paper glider before considering complex machinery.",
    "tags": [
      "technology",
      "field"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁"
  },
  {
    "id": "cartography",
    "title": "Cartography",
    "aliases": [
      "cartography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make maps that explain places clearly.",
    "longerDescription": "Choose what a map needs to show and what it should leave out. Scale, symbols and names affect how a reader understands a place.",
    "tags": [
      "technology",
      "craft"
    ],
    "worldIds": [
      "technology"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "⌁"
  }
];

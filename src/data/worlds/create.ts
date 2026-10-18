import type {Possibility} from '../types';
export const createNodes:Possibility[]=[
  {
    "id": "create",
    "title": "Create",
    "aliases": [
      "create"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Make something only you would think of.",
    "longerDescription": "Follow an idea into pictures, objects, words or a new format.",
    "tags": [
      "create",
      "world"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "content-creation",
      "storytelling",
      "illustration",
      "ceramics",
      "product-design",
      "food-styling",
      "textile-design",
      "cooking",
      "sculpture",
      "painting",
      "kathak"
    ],
    "relatedIds": [
      "photography",
      "film",
      "sound"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "content-creation",
    "title": "Content creation",
    "aliases": [
      "content creation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Turn an idea into something people can watch or read.",
    "longerDescription": "Explain a local game or share a drawing process. Begin with something useful, not a promise of going viral.",
    "tags": [
      "create",
      "pursuit"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "youtube",
      "short-video",
      "newsletter",
      "blogging",
      "ugc",
      "streaming",
      "meme-making",
      "sketch-comedy"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-start",
      "youtube-basics"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "aliases": [
      "youtube"
    ],
    "nodeType": "possibility",
    "possibilityType": "Creator path",
    "shortDescription": "Build videos around a question or interest.",
    "longerDescription": "Research, writing, filming and editing all matter. Try each part without publishing or buying equipment.",
    "tags": [
      "create",
      "creator path"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "thumbnail",
      "content-researcher",
      "scriptwriting",
      "channel-strategy",
      "youtube-producer"
    ],
    "relatedIds": [
      "creator-economy"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-start",
      "youtube-basics"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "thumbnail",
    "title": "Thumbnail design",
    "aliases": [
      "thumbnail design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make a tiny image communicate one clear idea.",
    "longerDescription": "Use a clear subject, readable contrast and an honest promise about the video.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [
      "photography"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-creators",
      "thumbnail-work"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-thumbnail",
    "icon": "✳"
  },
  {
    "id": "content-researcher",
    "title": "Content research",
    "aliases": [
      "content research"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find reliable material behind a good video.",
    "longerDescription": "Check sources and separate fact from claim. Researchers can shape stories without appearing on screen.",
    "tags": [
      "create",
      "role"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [
      "research"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-content-researcher",
    "icon": "✳"
  },
  {
    "id": "scriptwriting",
    "title": "Video scriptwriting",
    "aliases": [
      "video scriptwriting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Plan what a video says and when.",
    "longerDescription": "Organise a hook, useful explanation and clear ending. Writing for speech often means shorter sentences.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-scriptwriting",
    "icon": "✳"
  },
  {
    "id": "channel-strategy",
    "title": "Channel strategy",
    "aliases": [
      "channel strategy"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find a clear direction for a channel.",
    "longerDescription": "Compare audience needs with what a creator can keep making. A useful plan includes what to stop doing.",
    "tags": [
      "create",
      "role"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-start"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "youtube-producer",
    "title": "YouTube production",
    "aliases": [
      "youtube production"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Bring people, footage and deadlines together.",
    "longerDescription": "Turn an idea into a plan and help a team finish. Creative judgement meets practical coordination.",
    "tags": [
      "create",
      "role"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-creators"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "short-video",
    "title": "Short video",
    "aliases": [
      "short video"
    ],
    "nodeType": "possibility",
    "possibilityType": "Format",
    "shortDescription": "Tell one small story in very little time.",
    "longerDescription": "Show a process, answer one question or land a joke. Every extra shot should earn its place.",
    "tags": [
      "create",
      "format"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "youtube-creators"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "newsletter",
    "title": "Newsletters",
    "aliases": [
      "newsletters"
    ],
    "nodeType": "possibility",
    "possibilityType": "Format",
    "shortDescription": "Send readers something worth opening regularly.",
    "longerDescription": "Explain local history or collect useful opportunities. Selecting a few good items is often the real work.",
    "tags": [
      "create",
      "format"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "ghostwriting"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-newsletter",
    "icon": "✳"
  },
  {
    "id": "ghostwriting",
    "title": "Ghostwriting",
    "aliases": [
      "ghostwriting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Freelance service",
    "shortDescription": "Help someone express ideas in their own voice.",
    "longerDescription": "Interview, listen and draft on their behalf. Agree clearly about credit and reflect what they actually mean.",
    "tags": [
      "create",
      "freelance service"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "blogging",
    "title": "Blogging",
    "aliases": [
      "blogging"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Explore a topic through written posts.",
    "longerDescription": "A useful post answers a question carefully. Writing in an Indian language can reach overlooked readers.",
    "tags": [
      "create",
      "pursuit"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "ugc",
    "title": "UGC creation",
    "aliases": [
      "ugc creation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Freelance service",
    "shortDescription": "Make simple product stories for a brand.",
    "longerDescription": "Demonstrate an object you own. Paid promotions need disclosure and truthful claims.",
    "tags": [
      "create",
      "freelance service"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "product-demo",
      "brief-reading"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-ugc",
    "icon": "✳"
  },
  {
    "id": "product-demo",
    "title": "Product demos",
    "aliases": [
      "product demos"
    ],
    "nodeType": "possibility",
    "possibilityType": "Format",
    "shortDescription": "Show what something does in a real situation.",
    "longerDescription": "Include the task, result and a limitation. You need not pretend every product is perfect.",
    "tags": [
      "create",
      "format"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "brief-reading",
    "title": "Reading a creative brief",
    "aliases": [
      "reading a creative brief"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Turn a vague request into a clear plan.",
    "longerDescription": "Ask who the work is for, its message and what needs delivering. Spot missing information early.",
    "tags": [
      "create",
      "skill"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "streaming",
    "title": "Livestream production",
    "aliases": [
      "livestream production"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Make a live broadcast run smoothly.",
    "longerDescription": "Plan the running order, switch scenes and watch sound levels. Rehearsal matters when everything is live.",
    "tags": [
      "create",
      "role"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "esports-production"
    ],
    "peopleIds": [],
    "resourceIds": [
      "youtube-creators"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "meme-making",
    "title": "Meme making",
    "aliases": [
      "meme making"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Use a familiar format to make a sharp observation.",
    "longerDescription": "Timing and shared context matter. Avoid humiliating real people or inventing claims.",
    "tags": [
      "create",
      "pursuit"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "✳"
  },
  {
    "id": "storytelling",
    "title": "Storytelling",
    "aliases": [
      "storytelling"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Give an ordinary moment a beginning and a turn.",
    "longerDescription": "A lost key or changed opinion can become a story if the listener cares what happens.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "standup"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "narrative-design"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-storytelling",
    "icon": "✳"
  },
  {
    "id": "illustration",
    "title": "Illustration",
    "aliases": [
      "illustration"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Explain an idea through a drawing.",
    "longerDescription": "Draw for books, games or scientific explanations. Ask what the image helps someone understand.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "comics",
      "bhil-art",
      "madhubani"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "technical-art"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "comics",
    "title": "Comics",
    "aliases": [
      "comics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Tell a story through a sequence of pictures.",
    "longerDescription": "The space between panels lets readers imagine movement. Simple figures can carry a strong sequence.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-comics",
    "icon": "✳"
  },
  {
    "id": "ceramics",
    "title": "Ceramic art",
    "aliases": [
      "ceramic art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Explore objects and sculpture made from clay.",
    "longerDescription": "Start by drawing forms or modelling with safe craft material. Kiln work needs supervised learning.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "adil-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-ceramics",
    "icon": "✳"
  },
  {
    "id": "product-design",
    "title": "Product design",
    "aliases": [
      "product design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make everyday objects work better for people.",
    "longerDescription": "Study a problem, sketch options and test a rough model. A comfortable handle can matter more than looks.",
    "tags": [
      "create",
      "intersection"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "mitticool"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "food-styling",
    "title": "Food styling",
    "aliases": [
      "food styling"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Arrange food so colour and texture tell a story.",
    "longerDescription": "Stylists work with photographers on appearance. Arrange a snack in three ways and compare.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [
      "visual-merch"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "food-stylist-work"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-food-styling",
    "icon": "✳"
  },
  {
    "id": "textile-design",
    "title": "Textile design",
    "aliases": [
      "textile design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Create patterns and surfaces for cloth.",
    "longerDescription": "Explore repetition and texture. India's textile traditions offer many ways to think about material.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "block-printing",
      "embroidery",
      "felting"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "block-printing",
    "title": "Block printing",
    "aliases": [
      "block printing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build patterns by repeating a shape.",
    "longerDescription": "Spacing creates rhythm. Test with a paper stamp before exploring a supervised workshop.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "✳"
  },
  {
    "id": "sketch-comedy",
    "title": "Sketch comedy",
    "aliases": [
      "sketch comedy"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build a short funny scene around one idea.",
    "longerDescription": "Begin with a normal situation and change one thing. See whether the joke still works without insulting a real person.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "standup",
    "title": "Standup comedy",
    "aliases": [
      "standup comedy"
    ],
    "nodeType": "possibility",
    "possibilityType": "Performance",
    "shortDescription": "Turn an observation into a spoken joke.",
    "longerDescription": "A setup gives listeners an expectation and a punchline changes it. Try the idea with a willing friend and listen to what lands.",
    "tags": [
      "create",
      "performance"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "cooking",
    "title": "Cooking",
    "aliases": [
      "cooking"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Turn ingredients into something people can share.",
    "longerDescription": "Observe how heat, texture and timing change a dish. Start with a familiar safe recipe and supervision when using heat or sharp tools.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "food-writing"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "sculpture",
    "title": "Sculpture",
    "aliases": [
      "sculpture"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Think through shape, material and space.",
    "longerDescription": "A sculpture changes as you walk around it. Fold paper or use safe modelling material to explore a form before learning specialist tools.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [
      "stone-carving",
      "wood-carving"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "adil-work"
    ],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "food-writing",
    "title": "Food writing",
    "aliases": [
      "food writing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Tell stories through ingredients, meals and memory.",
    "longerDescription": "A recipe can carry a family's history or explain a region. Ask where a dish comes from and whose voice should tell the story.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "stone-carving",
    "title": "Stone carving",
    "aliases": [
      "stone carving"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Reveal a form by carefully removing material.",
    "longerDescription": "The stone's grain and strength affect the design. Begin with drawing and supervised learning rather than using stone tools yourself.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "wood-carving",
    "title": "Wood carving",
    "aliases": [
      "wood carving"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Shape wood into objects, patterns and figures.",
    "longerDescription": "Grain changes how wood responds. Study carved objects and sketch a form before learning sharp tools with trained supervision.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "embroidery",
    "title": "Embroidery",
    "aliases": [
      "embroidery"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make a picture or pattern with stitches.",
    "longerDescription": "Thread can build texture as well as colour. Start with a simple repeated stitch and suitable supervision when using needles.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "felting",
    "title": "Felting",
    "aliases": [
      "felting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Turn loose fibres into a shaped fabric.",
    "longerDescription": "Wool fibres can lock together through particular processes. Explore finished textures first and learn any needle or hot water method with guidance.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "bhil-art",
    "title": "Bhil painting",
    "aliases": [
      "bhil painting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Art tradition",
    "shortDescription": "Explore stories and patterns from Bhil artists.",
    "longerDescription": "Dots, colour and everyday life appear in many works. Learn from named practitioners and their own explanations rather than treating a living tradition as a decorative style.",
    "tags": [
      "create",
      "art tradition"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "madhubani",
    "title": "Madhubani painting",
    "aliases": [
      "madhubani painting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Art tradition",
    "shortDescription": "Explore painting traditions associated with Mithila.",
    "longerDescription": "Artists use lines, motifs and stories in varied ways. Look at different practitioners and how each interprets the tradition.",
    "tags": [
      "create",
      "art tradition"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "painting",
    "title": "Painting",
    "aliases": [
      "painting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build an image through colour, marks and layers.",
    "longerDescription": "Try changing the size of a brush mark or leaving part of the surface empty. You can begin with a small study of an ordinary object.",
    "tags": [
      "create",
      "craft"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  },
  {
    "id": "kathak",
    "title": "Kathak",
    "aliases": [
      "kathak"
    ],
    "nodeType": "possibility",
    "possibilityType": "Performance",
    "shortDescription": "Explore rhythm, movement and storytelling through dance.",
    "longerDescription": "Footwork and expression are parts of a larger tradition. Watch a practitioner explain a short passage before learning basic movement with guidance.",
    "tags": [
      "create",
      "performance"
    ],
    "worldIds": [
      "create"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "✳"
  }
];

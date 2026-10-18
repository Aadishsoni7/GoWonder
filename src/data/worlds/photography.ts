import type {Possibility} from '../types';
export const photographyNodes:Possibility[]=[
  {
    "id": "photography",
    "title": "Photography",
    "aliases": [
      "photography"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Notice what other people walk past.",
    "longerDescription": "Light and framing can make an ordinary subject surprising.",
    "tags": [
      "photography",
      "world"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [
      "wildlife",
      "food-photo",
      "sports-photo",
      "product-photo",
      "portrait-photo",
      "street-photo",
      "architecture-photo",
      "astro-photo",
      "underwater-photo",
      "forensic-photo",
      "scientific-imaging",
      "concert-photo",
      "photo-books"
    ],
    "relatedIds": [
      "thumbnail",
      "create"
    ],
    "intersectionIds": [
      "astro-photo"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-photography",
    "icon": "▣"
  },
  {
    "id": "wildlife",
    "title": "Wildlife photography",
    "aliases": [
      "wildlife photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Photograph animals without disturbing their lives.",
    "longerDescription": "Patience and behaviour matter more than getting close. Start with a bird in a familiar place.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [
      "bird-photography"
    ],
    "relatedIds": [
      "conservation",
      "birding"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "bird-tools"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-wildlife",
    "icon": "▣"
  },
  {
    "id": "bird-photography",
    "title": "Bird photography",
    "aliases": [
      "bird photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Read light, movement and bird behaviour.",
    "longerDescription": "Watch where a bird returns and wait respectfully. Never bait or disturb nests for an image.",
    "tags": [
      "photography",
      "specialisation"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [
      "conservation-photo"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "bird-tools"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "conservation-photo",
    "title": "Conservation photography",
    "aliases": [
      "conservation photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Use images to explain what a habitat needs.",
    "longerDescription": "Include people and places as well as animals. Careful captions help an image say something accurate.",
    "tags": [
      "photography",
      "intersection"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "▣"
  },
  {
    "id": "food-photo",
    "title": "Food photography",
    "aliases": [
      "food photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make food readable through light and composition.",
    "longerDescription": "A window and simple background can be enough. Watch textures and where the eye lands first.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "food-photo-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-food-photo",
    "icon": "▣"
  },
  {
    "id": "sports-photo",
    "title": "Sports photography",
    "aliases": [
      "sports photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Catch movement and emotion around a match.",
    "longerDescription": "Anticipation helps more than endless frames. Observe the game before raising the camera.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "product-photo",
    "title": "Product photography",
    "aliases": [
      "product photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Show an object clearly and attractively.",
    "longerDescription": "Reveal its size, material and useful details. An ordinary cup is a good first subject.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "food-photo-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "portrait-photo",
    "title": "Portrait photography",
    "aliases": [
      "portrait photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make a picture with a person, not just of them.",
    "longerDescription": "Ask permission and discuss how they want to be shown. Trust matters alongside light.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-portrait-photo",
    "icon": "▣"
  },
  {
    "id": "street-photo",
    "title": "Street photography",
    "aliases": [
      "street photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Notice small stories in everyday public life.",
    "longerDescription": "Look for gesture and light. Respect privacy, especially when someone could be vulnerable.",
    "tags": [
      "photography",
      "pursuit"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "architecture-photo",
    "title": "Architectural photography",
    "aliases": [
      "architectural photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Show how a building holds space and light.",
    "longerDescription": "Explore scale from somewhere safe and accessible. Watch a wall change through the day.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "astro-photo",
    "title": "Astrophotography",
    "aliases": [
      "astrophotography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Record light from the night sky.",
    "longerDescription": "Start with a safe view of the Moon. Never aim at the Sun without specialist equipment and guidance.",
    "tags": [
      "photography",
      "intersection"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "photography",
      "astronomy"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "▣"
  },
  {
    "id": "underwater-photo",
    "title": "Underwater photography",
    "aliases": [
      "underwater photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Make images where water changes light.",
    "longerDescription": "This needs trained water safety and specialist practice. Begin by studying photographs rather than entering water.",
    "tags": [
      "photography",
      "specialisation"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "forensic-photo",
    "title": "Forensic photography",
    "aliases": [
      "forensic photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Document evidence accurately for investigation.",
    "longerDescription": "Scale and careful records matter more than drama. Explore using objects in a fictional scene.",
    "tags": [
      "photography",
      "specialisation"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "▣",
    "eligibilityNotes": "These experiments use fictional examples. Professional work may require specialised training and relevant permissions."
  },
  {
    "id": "scientific-imaging",
    "title": "Scientific imaging",
    "aliases": [
      "scientific imaging"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Reveal things an ordinary photograph cannot.",
    "longerDescription": "Microscopes show structures at different scales. The image helps answer a specific question.",
    "tags": [
      "photography",
      "intersection"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "▣"
  },
  {
    "id": "concert-photo",
    "title": "Concert photography",
    "aliases": [
      "concert photography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Catch performance in changing light.",
    "longerDescription": "Work with movement and moments that cannot be repeated. Practise with a willing friend first.",
    "tags": [
      "photography",
      "specialisation"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▣"
  },
  {
    "id": "photo-books",
    "title": "Photo books",
    "aliases": [
      "photo books"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Arrange photographs into a story someone can hold.",
    "longerDescription": "The order, page size and gaps change how images speak to each other. Try making a folded paper book from six of your own pictures.",
    "tags": [
      "photography",
      "craft"
    ],
    "worldIds": [
      "photography"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "▣"
  }
];

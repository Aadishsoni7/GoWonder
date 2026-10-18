import type {Possibility} from '../types';
export const peopleNodes:Possibility[]=[
  {
    "id": "people",
    "title": "People & places",
    "aliases": [
      "people & places"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Listen carefully. Make shared life better.",
    "longerDescription": "Explore the knowledge carried by people and places.",
    "tags": [
      "people",
      "world"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [
      "research",
      "teaching",
      "translation"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◌"
  },
  {
    "id": "research",
    "title": "Research",
    "aliases": [
      "research"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Turn a question into a careful investigation.",
    "longerDescription": "Ask what evidence could answer it and what would change your mind. Uncertainty is allowed.",
    "tags": [
      "people",
      "skill"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [
      "oral-history"
    ],
    "relatedIds": [
      "content-researcher"
    ],
    "intersectionIds": [
      "forensic-accounting"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◌"
  },
  {
    "id": "oral-history",
    "title": "Oral history",
    "aliases": [
      "oral history"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Record someone's memories with care.",
    "longerDescription": "Ask permission and agree what can be shared. Memories may need context alongside other records.",
    "tags": [
      "people",
      "craft"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [
      "heritage-interpretation",
      "community-archives"
    ],
    "relatedIds": [
      "podcasting"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-oral-history",
    "icon": "◌"
  },
  {
    "id": "heritage-interpretation",
    "title": "Heritage interpretation",
    "aliases": [
      "heritage interpretation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Connect visitors with a place's stories.",
    "longerDescription": "Choose objects and voices that invite attention. Communities may tell different stories about one place.",
    "tags": [
      "people",
      "intersection"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [
      "museum-design"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "◌"
  },
  {
    "id": "museum-design",
    "title": "Museum experience design",
    "aliases": [
      "museum experience design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Make exhibitions people can understand.",
    "longerDescription": "Objects, labels and light work together. Ask what one visitor should notice first.",
    "tags": [
      "people",
      "craft"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◌"
  },
  {
    "id": "teaching",
    "title": "Teaching",
    "aliases": [
      "teaching"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Help someone understand or practise something.",
    "longerDescription": "Start with what the learner knows. Include a chance to try and notice progress.",
    "tags": [
      "people",
      "pursuit"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [
      "learning-design"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "education-technology"
    ],
    "peopleIds": [],
    "resourceIds": [
      "chess-sagar"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-teaching",
    "icon": "◌"
  },
  {
    "id": "learning-design",
    "title": "Learning design",
    "aliases": [
      "learning design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Plan experiences that help learning happen.",
    "longerDescription": "A video alone is not a lesson. Include a goal, an activity and useful feedback.",
    "tags": [
      "people",
      "role"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◌"
  },
  {
    "id": "translation",
    "title": "Translation",
    "aliases": [
      "translation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Carry meaning between languages.",
    "longerDescription": "Tone and context matter alongside words. Compare two translations of an everyday message.",
    "tags": [
      "people",
      "craft"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "localisation"
    ],
    "peopleIds": [],
    "resourceIds": [
      "voice-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-translation",
    "icon": "◌"
  },
  {
    "id": "community-archives",
    "title": "Community archives",
    "aliases": [
      "community archives"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Help communities preserve their own records.",
    "longerDescription": "Photos need descriptions and permission. Agree who can access an item before publishing.",
    "tags": [
      "people",
      "pursuit"
    ],
    "worldIds": [
      "people"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "◌"
  }
];

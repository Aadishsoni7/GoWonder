import type {Possibility} from '../types';
export const natureNodes:Possibility[]=[
  {
    "id": "nature",
    "title": "Nature",
    "aliases": [
      "nature"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Find a whole world on a familiar route.",
    "longerDescription": "Observe closely before deciding what something means.",
    "tags": [
      "nature",
      "world"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "animals",
      "conservation",
      "nature-journal",
      "birding",
      "marine-science",
      "astronomy",
      "particle-physics",
      "botany"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "animals",
    "title": "Animals",
    "aliases": [
      "animals"
    ],
    "nodeType": "possibility",
    "possibilityType": "Curiosity",
    "shortDescription": "Watch the creatures sharing your world.",
    "longerDescription": "Learn from a bird or ant at a respectful distance. Notice before explaining.",
    "tags": [
      "nature",
      "curiosity"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "animal-behaviour"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "biodiversity"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "animal-behaviour",
    "title": "Animal behaviour",
    "aliases": [
      "animal behaviour"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Ask how animals move, feed and communicate.",
    "longerDescription": "Record what you see. Repeated patterns are more useful than guessing emotions.",
    "tags": [
      "nature",
      "research area"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "bioacoustics",
      "herpetology"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "bioacoustics"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "bioacoustics",
    "title": "Bioacoustics",
    "aliases": [
      "bioacoustics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Study living things through their sounds.",
    "longerDescription": "Recordings reveal calls and habitats. Listening joins biology and technology here.",
    "tags": [
      "nature",
      "intersection"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "sound",
      "animal-behaviour"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "♧"
  },
  {
    "id": "conservation",
    "title": "Conservation",
    "aliases": [
      "conservation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Care for living places with evidence and cooperation.",
    "longerDescription": "Ecology and people's lives are connected. Understand the problem before proposing a fix.",
    "tags": [
      "nature",
      "field"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "forest-making",
      "citizen-science",
      "urban-ecology",
      "conservation-technology",
      "bird-conservation",
      "tree-care"
    ],
    "relatedIds": [
      "wildlife",
      "community"
    ],
    "intersectionIds": [
      "conservation-film",
      "conservation-technology"
    ],
    "peopleIds": [],
    "resourceIds": [
      "biodiversity",
      "afforestt"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "forest-making",
    "title": "Forest restoration",
    "aliases": [
      "forest restoration"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Help damaged landscapes recover thoughtfully.",
    "longerDescription": "A forest is more than trees. Local ecology, land rights and long term care shape restoration.",
    "tags": [
      "nature",
      "pursuit"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "afforestt",
      "forest-story"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "citizen-science",
    "title": "Citizen science",
    "aliases": [
      "citizen science"
    ],
    "nodeType": "possibility",
    "possibilityType": "Activity",
    "shortDescription": "Contribute observations to shared research.",
    "longerDescription": "Projects collect bird sightings or seasonal changes. Follow their method so observations are useful.",
    "tags": [
      "nature",
      "activity"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "bird-tools",
      "bird-faq",
      "biodiversity"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-citizen-science",
    "icon": "♧"
  },
  {
    "id": "nature-journal",
    "title": "Nature journaling",
    "aliases": [
      "nature journaling"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Record the outdoors through sketches and attention.",
    "longerDescription": "Draw a leaf where it grows and note the date. Observation matters more than artistic confidence.",
    "tags": [
      "nature",
      "pursuit"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-nature-journal",
    "icon": "♧"
  },
  {
    "id": "birding",
    "title": "Birdwatching",
    "aliases": [
      "birdwatching"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Learn nearby birds by sight and sound.",
    "longerDescription": "Start somewhere familiar and safe. Write what you noticed before guessing a species.",
    "tags": [
      "nature",
      "pursuit"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [
      "wildlife"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "bird-tools",
      "bird-faq"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "marine-science",
    "title": "Marine science",
    "aliases": [
      "marine science"
    ],
    "nodeType": "possibility",
    "possibilityType": "Academic field",
    "shortDescription": "Study life and processes in seas and coasts.",
    "longerDescription": "Biology and chemistry meet physical movement. Start with public data rather than a boat trip.",
    "tags": [
      "nature",
      "academic field"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "urban-ecology",
    "title": "Urban ecology",
    "aliases": [
      "urban ecology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Study how living things share a city.",
    "longerDescription": "Trees, drains and buildings affect wildlife. Notice tiny spaces supporting life.",
    "tags": [
      "nature",
      "research area"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "♧"
  },
  {
    "id": "astronomy",
    "title": "Astronomy",
    "aliases": [
      "astronomy"
    ],
    "nodeType": "possibility",
    "possibilityType": "Science",
    "shortDescription": "Use light to ask questions about the universe.",
    "longerDescription": "Compare observations with explanations. Track the Moon from a safe familiar spot.",
    "tags": [
      "nature",
      "science"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "stargazing"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "astro-photo"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-astronomy",
    "icon": "♧"
  },
  {
    "id": "stargazing",
    "title": "Stargazing",
    "aliases": [
      "stargazing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Learn your way around the night sky.",
    "longerDescription": "Notice a few bright patterns over several evenings. Never look at the Sun directly or through binoculars.",
    "tags": [
      "nature",
      "pursuit"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♧"
  },
  {
    "id": "conservation-technology",
    "title": "Conservation technology",
    "aliases": [
      "conservation technology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Use tools to help study and protect living places.",
    "longerDescription": "Sensors, maps and recordings can support fieldwork. The useful tool answers a conservation question rather than collecting data for its own sake.",
    "tags": [
      "nature",
      "intersection"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "technology",
      "conservation"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "herpetology",
    "title": "Herpetology",
    "aliases": [
      "herpetology"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Study reptiles and amphibians.",
    "longerDescription": "Observe from a safe distance and never handle an unknown animal. Habitat, movement and seasonal change can all become research questions.",
    "tags": [
      "nature",
      "research area"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "bird-conservation",
    "title": "Bird conservation",
    "aliases": [
      "bird conservation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Protect birds by understanding their habitats and neighbours.",
    "longerDescription": "Nesting trees, wetlands and local communities all matter. Start by learning what a bird needs rather than trying to rescue or handle it.",
    "tags": [
      "nature",
      "field"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "particle-physics",
    "title": "Particle physics",
    "aliases": [
      "particle physics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Science",
    "shortDescription": "Ask what matter is made of at the smallest scales.",
    "longerDescription": "Researchers compare measurements with mathematical explanations. An experiment may involve large teams even when the question sounds very small.",
    "tags": [
      "nature",
      "science"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "botany",
    "title": "Botany",
    "aliases": [
      "botany"
    ],
    "nodeType": "possibility",
    "possibilityType": "Science",
    "shortDescription": "Study plants and how they live.",
    "longerDescription": "Roots, leaves and seeds offer different clues. Observe a plant over time without picking protected specimens or guessing whether it is edible.",
    "tags": [
      "nature",
      "science"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [
      "plant-genetics"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "plant-genetics",
    "title": "Plant genetics",
    "aliases": [
      "plant genetics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Study how inherited information affects plants.",
    "longerDescription": "Researchers investigate traits and variation with carefully designed studies. A visible difference alone does not tell you whether its cause is genetic.",
    "tags": [
      "nature",
      "research area"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  },
  {
    "id": "tree-care",
    "title": "Tree care",
    "aliases": [
      "tree care"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Understand what helps a tree remain healthy.",
    "longerDescription": "Roots, soil, water and space are connected. Observe from the ground and ask qualified local practitioners before pruning, climbing or treating a tree.",
    "tags": [
      "nature",
      "pursuit"
    ],
    "worldIds": [
      "nature"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "♧"
  }
];

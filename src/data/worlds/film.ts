import type {Possibility} from '../types';
export const filmNodes:Possibility[]=[
  {
    "id": "film",
    "title": "Film",
    "aliases": [
      "film"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Build stories from pictures, places and people.",
    "longerDescription": "Explore the many crafts hidden in a film's credits.",
    "tags": [
      "film",
      "world"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [
      "documentary",
      "direction",
      "cinematography",
      "editing",
      "production-design",
      "screenwriting",
      "casting",
      "assistant-direction",
      "vfx"
    ],
    "relatedIds": [
      "sound",
      "create"
    ],
    "intersectionIds": [
      "conservation-film"
    ],
    "peopleIds": [],
    "resourceIds": [
      "film-roles",
      "screen-map"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "documentary",
    "title": "Documentary film",
    "aliases": [
      "documentary film"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Follow a real question with a camera.",
    "longerDescription": "Stay honest about what happened. Consent and context matter as much as beautiful shots.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [
      "wildlife-film"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-documentary",
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "wildlife-film",
    "title": "Wildlife filmmaking",
    "aliases": [
      "wildlife filmmaking"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Tell stories about animals and their habitats.",
    "longerDescription": "Hours of observation may become seconds of footage. Animal welfare comes before the shot.",
    "tags": [
      "film",
      "specialisation"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [
      "conservation-film"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "conservation-film",
    "title": "Conservation filmmaking",
    "aliases": [
      "conservation filmmaking"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Connect a living place with people who care for it.",
    "longerDescription": "Explain a real issue without a simplistic villain. Local voices may change the story you tell.",
    "tags": [
      "film",
      "intersection"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "conservation",
      "film"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "direction",
    "title": "Film direction",
    "aliases": [
      "film direction"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Guide how a story feels on screen.",
    "longerDescription": "Work with performers and crew on tone and attention. Explore with a short silent scene.",
    "tags": [
      "film",
      "role"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "cinematography",
    "title": "Cinematography",
    "aliases": [
      "cinematography"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Choose how camera and light tell a story.",
    "longerDescription": "Distance and angle change what we notice. Film one action from three positions.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-cinematography",
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "editing",
    "title": "Video editing",
    "aliases": [
      "video editing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Create meaning by arranging shots.",
    "longerDescription": "Changing the order changes what viewers think happened. Know when to leave a moment alone.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [
      "colour-grading",
      "motion-design"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "post-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-editing",
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "colour-grading",
    "title": "Colour grading",
    "aliases": [
      "colour grading"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Shape the mood and consistency of images.",
    "longerDescription": "Balance shots and make deliberate colour choices. There is no single colour for an emotion.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "post-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "motion-design",
    "title": "Motion design",
    "aliases": [
      "motion design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Bring words and shapes into motion.",
    "longerDescription": "An animated title can clarify an idea. Timing and readability matter alongside style.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "screen-map"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "production-design",
    "title": "Production design",
    "aliases": [
      "production design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build the visual world of a film.",
    "longerDescription": "Rooms and objects tell us about a character. Redesign a corner on paper to begin.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [
      "location",
      "props",
      "costume"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "location",
    "title": "Location scouting",
    "aliases": [
      "location scouting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find real places that belong in a story.",
    "longerDescription": "Consider light, noise, permission and access. Beauty alone does not make a workable location.",
    "tags": [
      "film",
      "role"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-location",
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "props",
    "title": "Props",
    "aliases": [
      "props"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Choose the objects characters use.",
    "longerDescription": "A letter or cup can reveal personality. Keep details consistent across different takes.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "costume",
    "title": "Costume design",
    "aliases": [
      "costume design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Tell us about a character through clothing.",
    "longerDescription": "Consider movement and story as well as appearance. Everyday outfits can teach you about details.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "screenwriting",
    "title": "Screenwriting",
    "aliases": [
      "screenwriting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Write scenes people can see and hear.",
    "longerDescription": "Turn intention into action. Show a character is nervous without writing the word nervous.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "screen-map"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "casting",
    "title": "Casting",
    "aliases": [
      "casting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find performers who fit a story together.",
    "longerDescription": "Consider interpretation and chemistry. Handle auditions as respectful collaborations.",
    "tags": [
      "film",
      "role"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "assistant-direction",
    "title": "Assistant direction",
    "aliases": [
      "assistant direction"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Keep a film set's plan moving.",
    "longerDescription": "Organise timing and communicate changes. Preparation makes room for creativity.",
    "tags": [
      "film",
      "role"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "film-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "vfx",
    "title": "Visual effects",
    "aliases": [
      "visual effects"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Combine images that were not filmed together.",
    "longerDescription": "A replaced sky can be almost invisible. Learn how layers and matching light work.",
    "tags": [
      "film",
      "craft"
    ],
    "worldIds": [
      "film"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "post-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "▷",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  }
];

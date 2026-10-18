import type {Possibility} from '../types';
export const gamesNodes:Possibility[]=[
  {
    "id": "games",
    "title": "Games",
    "aliases": [
      "games"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Invent a world someone else can play.",
    "longerDescription": "Explore the art, rules and technology behind play.",
    "tags": [
      "games",
      "world"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "making-games"
    ],
    "relatedIds": [
      "play"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "games-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "making-games",
    "title": "Making games",
    "aliases": [
      "making games"
    ],
    "nodeType": "possibility",
    "possibilityType": "Industry",
    "shortDescription": "Build rules, worlds, sound and choices.",
    "longerDescription": "A game can start with paper. Teams bring many crafts together, so code is only one route.",
    "tags": [
      "games",
      "industry"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "game-design",
      "game-art",
      "game-audio",
      "game-programming",
      "game-testing",
      "game-producer",
      "localisation"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "games-roles",
      "godot-first"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-design",
    "title": "Game design",
    "aliases": [
      "game design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Create rules that make decisions interesting.",
    "longerDescription": "Decide what a player can do and what happens next. Playtesting shows whether your idea feels good.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "narrative-design",
      "level-design",
      "game-economy-design",
      "game-ux"
    ],
    "relatedIds": [
      "chess"
    ],
    "intersectionIds": [
      "narrative-design",
      "game-economy-design"
    ],
    "peopleIds": [],
    "resourceIds": [
      "games-roles",
      "godot-first",
      "raji-team",
      "raji-process"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-game-design",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "narrative-design",
    "title": "Narrative design",
    "aliases": [
      "narrative design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Let player actions shape the story.",
    "longerDescription": "Plan how choices and places reveal a world. A locked door can tell a story without dialogue.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "game-writing"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "storytelling",
      "game-design"
    ],
    "peopleIds": [],
    "resourceIds": [
      "raji-process"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-narrative-design",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-writing",
    "title": "Game writing",
    "aliases": [
      "game writing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Write dialogue and quests people can play.",
    "longerDescription": "Think about different orders and choices. Characters may respond to what a player already did.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "localisation"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "level-design",
    "title": "Level design",
    "aliases": [
      "level design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Shape spaces that teach and challenge a player.",
    "longerDescription": "Paths and landmarks guide attention. Draw a paper maze and watch where a friend gets confused.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-level-design",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-economy-design",
    "title": "Game economy design",
    "aliases": [
      "game economy design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Balance how a game gives and spends resources.",
    "longerDescription": "Coins, time and materials create choices. Explore fair systems without pressure to spend real money.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "economics",
      "game-design"
    ],
    "peopleIds": [],
    "resourceIds": [
      "economics-course"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-game-economy-design",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-ux",
    "title": "Game UX",
    "aliases": [
      "game ux"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Help players understand what they can do.",
    "longerDescription": "Menus and feedback shape the experience. Watch a new player before blaming them for confusion.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [
      "ux"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-art",
    "title": "Game art",
    "aliases": [
      "game art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build the visual world of a game.",
    "longerDescription": "Create characters, places and interfaces. A tiny game can have strong style without realistic graphics.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "technical-art",
      "concept-art",
      "environment-art",
      "character-art"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "games-roles",
      "raji-team"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "technical-art",
    "title": "Technical art",
    "aliases": [
      "technical art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make art and code work together.",
    "longerDescription": "Build a tool for artists or make effects run smoothly. Images and technical puzzles meet here.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "creative-coding",
      "illustration"
    ],
    "peopleIds": [],
    "resourceIds": [
      "technical-art-guide",
      "godot-steps"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-technical-art",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "concept-art",
    "title": "Concept art",
    "aliases": [
      "concept art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Explore what a game world could look like.",
    "longerDescription": "Loose sketches help a team choose mood and shape. The goal is solving visual questions.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "raji-team"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "environment-art",
    "title": "Environment art",
    "aliases": [
      "environment art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Create places a player moves through.",
    "longerDescription": "Materials and light suggest history. A worn doorstep can make a fictional place feel inhabited.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "raji-process"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "character-art",
    "title": "Character art",
    "aliases": [
      "character art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Give a character a readable shape.",
    "longerDescription": "Silhouette and clothes tell a story before dialogue. It must work at the size seen during play.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-audio",
    "title": "Game audio",
    "aliases": [
      "game audio"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Make sound respond to a player's actions.",
    "longerDescription": "Footsteps change on wood or stone. Sound must fit events happening in many possible orders.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [
      "game-music"
    ],
    "relatedIds": [
      "foley"
    ],
    "intersectionIds": [
      "sound-design",
      "game-programming"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-music",
    "title": "Interactive game music",
    "aliases": [
      "interactive game music"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Let music change with a game.",
    "longerDescription": "A calm layer might gain drums during danger. Plan transitions so changes feel natural.",
    "tags": [
      "games",
      "craft"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-play"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-programming",
    "title": "Gameplay programming",
    "aliases": [
      "gameplay programming"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Write the behaviour that makes a game work.",
    "longerDescription": "Turn rules into code and test edge cases. Getting one jump right can take many adjustments.",
    "tags": [
      "games",
      "skill"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "game-audio"
    ],
    "peopleIds": [],
    "resourceIds": [
      "godot-first",
      "godot-steps"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-testing",
    "title": "Game testing",
    "aliases": [
      "game testing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find problems and explain how to reproduce them.",
    "longerDescription": "Record what happened, what you expected and the exact steps. Careful observation is the core skill.",
    "tags": [
      "games",
      "role"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "games-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-game-testing",
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "game-producer",
    "title": "Game production",
    "aliases": [
      "game production"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Help a game team finish a shared plan.",
    "longerDescription": "Track scope and time. Sometimes the best decision is making a smaller game well.",
    "tags": [
      "games",
      "role"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "games-roles"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  },
  {
    "id": "localisation",
    "title": "Game localisation",
    "aliases": [
      "game localisation"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Help a game make sense in another language.",
    "longerDescription": "A literal translation can miss jokes or break menus. Test in context across language and culture.",
    "tags": [
      "games",
      "intersection"
    ],
    "worldIds": [
      "games"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "translation",
      "game-writing"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "⚄",
    "deeperInfo": "The linked ScreenSkills guides describe the craft internationally. Training routes and entry requirements differ in India."
  }
];

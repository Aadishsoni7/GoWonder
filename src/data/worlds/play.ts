import type {Possibility} from '../types';
export const playNodes:Possibility[]=[
  {
    "id": "play",
    "title": "Play",
    "aliases": [
      "play"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Some things are worth doing just for fun.",
    "longerDescription": "Learn rules, make a move and see what happens.",
    "tags": [
      "play",
      "world"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [
      "chess",
      "cubing",
      "board-games",
      "esports",
      "speedrunning",
      "puzzles",
      "carrom"
    ],
    "relatedIds": [
      "games"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "chess",
    "title": "Chess",
    "aliases": [
      "chess"
    ],
    "nodeType": "possibility",
    "possibilityType": "Game",
    "shortDescription": "Move pieces, spot threats and plan ahead.",
    "longerDescription": "Each piece moves differently. Checkmate means the king is attacked with no legal escape. Begin with a rook.",
    "tags": [
      "play",
      "game"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [
      "chess-tactics",
      "chess-commentary"
    ],
    "relatedIds": [
      "game-design"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "chess-learn",
      "chess-sagar"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-chess",
    "icon": "♟"
  },
  {
    "id": "chess-tactics",
    "title": "Chess tactics",
    "aliases": [
      "chess tactics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Spot a move that changes the position.",
    "longerDescription": "A fork attacks two pieces at once. Look for checks and undefended pieces before guessing.",
    "tags": [
      "play",
      "skill"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [
      "chess-composition"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "chess-learn"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "chess-composition",
    "title": "Chess composition",
    "aliases": [
      "chess composition"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Invent a position with an elegant solution.",
    "longerDescription": "Create a puzzle rather than a whole game. Try a position with exactly one move that gives mate.",
    "tags": [
      "play",
      "craft"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "♟"
  },
  {
    "id": "chess-commentary",
    "title": "Chess commentary",
    "aliases": [
      "chess commentary"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Explain the ideas on the board.",
    "longerDescription": "Describe the threat before listing moves. A clear story welcomes people new to chess.",
    "tags": [
      "play",
      "role"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "chess-sagar"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "cubing",
    "title": "Speedcubing",
    "aliases": [
      "speedcubing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Solve a twisty puzzle with fewer pauses.",
    "longerDescription": "Learn patterns and practise smooth turning. A slow careful solve is a fine start.",
    "tags": [
      "play",
      "pursuit"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [
      "cube-lookahead"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "wca-rules",
      "cube-record"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-cubing",
    "icon": "♟"
  },
  {
    "id": "cube-lookahead",
    "title": "Cube lookahead",
    "aliases": [
      "cube lookahead"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Notice the next pieces while finishing a step.",
    "longerDescription": "Practise slowly enough for your eyes to stay ahead. Speed is not only quick hands.",
    "tags": [
      "play",
      "skill"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "wca-rules"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "board-games",
    "title": "Board games",
    "aliases": [
      "board games"
    ],
    "nodeType": "possibility",
    "possibilityType": "Game family",
    "shortDescription": "Make choices around a shared table.",
    "longerDescription": "Some rules reward planning, some cooperation and some storytelling. Learn by playing a short practice round.",
    "tags": [
      "play",
      "game family"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [
      "cooperative-games",
      "tabletop-rpg"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "cooperative-games",
    "title": "Cooperative games",
    "aliases": [
      "cooperative games"
    ],
    "nodeType": "possibility",
    "possibilityType": "Game family",
    "shortDescription": "Work together against the game itself.",
    "longerDescription": "Players share a goal. Rules about sharing information can make teamwork more interesting.",
    "tags": [
      "play",
      "game family"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "tabletop-rpg",
    "title": "Tabletop roleplaying",
    "aliases": [
      "tabletop roleplaying"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Build a story together through characters and choices.",
    "longerDescription": "One person describes a world and others decide what characters do. Agree on comfortable themes first.",
    "tags": [
      "play",
      "pursuit"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-tabletop-rpg",
    "icon": "♟"
  },
  {
    "id": "esports",
    "title": "Esports",
    "aliases": [
      "esports"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Play organised competitive video games.",
    "longerDescription": "Teams practise communication and review decisions. Choose age appropriate games and take healthy breaks.",
    "tags": [
      "play",
      "sport"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "speedrunning",
    "title": "Speedrunning",
    "aliases": [
      "speedrunning"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Find a faster route through a game.",
    "longerDescription": "Compare runs under shared rules. Planning and repeated experiments can matter more than reflexes.",
    "tags": [
      "play",
      "pursuit"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "♟"
  },
  {
    "id": "puzzles",
    "title": "Logic puzzles",
    "aliases": [
      "logic puzzles"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Use a few rules to find what must be true.",
    "longerDescription": "Record what each clue rules out. Explain one step to check your reasoning.",
    "tags": [
      "play",
      "pursuit"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  },
  {
    "id": "carrom",
    "title": "Carrom",
    "aliases": [
      "carrom"
    ],
    "nodeType": "possibility",
    "possibilityType": "Game",
    "shortDescription": "Use a striker to pocket your pieces.",
    "longerDescription": "Flick the striker across the board. The queen has covering rules, so agree on rules before playing.",
    "tags": [
      "play",
      "game"
    ],
    "worldIds": [
      "play"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "♟"
  }
];

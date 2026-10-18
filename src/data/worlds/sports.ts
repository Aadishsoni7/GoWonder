import type {Possibility} from '../types';
export const sportsNodes:Possibility[]=[
  {
    "id": "sports",
    "title": "Sport",
    "aliases": [
      "sport"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Play it, explain it or find the pattern.",
    "longerDescription": "There is a whole team of possibilities beyond the players.",
    "tags": [
      "sports",
      "world"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [
      "kabaddi",
      "sports-data",
      "sports-commentary",
      "sports-journalism",
      "esports-production",
      "ultimate",
      "gymnastics",
      "mountaineering",
      "fencing",
      "archery",
      "para-sports",
      "sport-shooting",
      "shot-put",
      "squash"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "sports-data",
      "esports-production"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "kabaddi",
    "title": "Kabaddi",
    "aliases": [
      "kabaddi"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Raid, tag and return while defenders cooperate.",
    "longerDescription": "A raider enters the other half to score and return safely. Watch timing and teamwork.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "kabaddi-raid"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-kabaddi",
    "icon": "↝"
  },
  {
    "id": "sports-data",
    "title": "Sports analytics",
    "aliases": [
      "sports analytics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Find questions hiding in match numbers.",
    "longerDescription": "Count one event first. A pattern can suggest a question without proving why a team won.",
    "tags": [
      "sports",
      "intersection"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [
      "performance-analysis"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "finance",
      "sports"
    ],
    "peopleIds": [],
    "resourceIds": [
      "sports-practice"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-sports-data",
    "icon": "↝"
  },
  {
    "id": "performance-analysis",
    "title": "Performance analysis",
    "aliases": [
      "performance analysis"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Use video and observation to help teams learn.",
    "longerDescription": "Break play into useful events and find patterns. Clear feedback beats a pile of statistics.",
    "tags": [
      "sports",
      "role"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [
      "video-tagging"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sports-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "video-tagging",
    "title": "Match video tagging",
    "aliases": [
      "match video tagging"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Mark moments so teams can find them again.",
    "longerDescription": "Define what counts as a pass or error. Consistent labels make comparisons useful.",
    "tags": [
      "sports",
      "skill"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "sports-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "sports-commentary",
    "title": "Sports commentary",
    "aliases": [
      "sports commentary"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Help people understand action and stakes.",
    "longerDescription": "Describe what matters now and leave space for the event. Prepare to explain rules clearly.",
    "tags": [
      "sports",
      "craft"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "sports-journalism",
    "title": "Sports journalism",
    "aliases": [
      "sports journalism"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Report the people and questions behind sport.",
    "longerDescription": "A local ground can be a story. Check facts and separate observation from opinion.",
    "tags": [
      "sports",
      "craft"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "esports-production",
    "title": "Esports production",
    "aliases": [
      "esports production"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Turn competitive gaming into a watchable show.",
    "longerDescription": "Coordinate observers, graphics and commentators. Help audiences know where to look.",
    "tags": [
      "sports",
      "intersection"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [
      "sports",
      "streaming"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "↝"
  },
  {
    "id": "ultimate",
    "title": "Ultimate frisbee",
    "aliases": [
      "ultimate frisbee"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Move a disc through teamwork and fair play.",
    "longerDescription": "You cannot run holding the disc. Pass toward an end zone and agree how to resolve calls.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "↝"
  },
  {
    "id": "gymnastics",
    "title": "Gymnastics",
    "aliases": [
      "gymnastics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Combine strength, balance and controlled movement.",
    "longerDescription": "Skills build gradually with trained coaching and appropriate equipment. Begin by watching how a routine connects movements, not by copying a stunt.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "mountaineering",
    "title": "Mountaineering",
    "aliases": [
      "mountaineering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Plan and move through mountain environments.",
    "longerDescription": "Navigation, teamwork and weather judgement matter alongside fitness. Technical routes require qualified training and local guidance.",
    "tags": [
      "sports",
      "pursuit"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "fencing",
    "title": "Fencing",
    "aliases": [
      "fencing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Use timing and distance in a contest with blades.",
    "longerDescription": "There are different weapons with different scoring rules. Learn in a supervised club using proper protective equipment, not improvised swords.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "archery",
    "title": "Archery",
    "aliases": [
      "archery"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Repeat a controlled movement toward a target.",
    "longerDescription": "Consistency and concentration matter as much as the equipment. Practice belongs in a properly supervised range with clear safety rules.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "para-sports",
    "title": "Para sports",
    "aliases": [
      "para sports"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Explore sport shaped around different physical abilities.",
    "longerDescription": "Classification and rules vary between sports. Look at the athlete's skills, training and competitive choices as well as adaptive equipment.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [
      "para-badminton",
      "club-throw"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "sport-shooting",
    "title": "Sport shooting",
    "aliases": [
      "sport shooting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Test precision and consistency on a regulated range.",
    "longerDescription": "This is a supervised sport with strict safety and eligibility rules. Explore official competition footage; do not imitate it with improvised equipment.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "para-badminton",
    "title": "Para badminton",
    "aliases": [
      "para badminton"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Play badminton with classifications for different physical abilities.",
    "longerDescription": "The court and rules vary by category. Watch how positioning and shot choice create space, then learn with a qualified coach.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "club-throw",
    "title": "Club throw",
    "aliases": [
      "club throw"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Throw a wooden club for distance in para athletics.",
    "longerDescription": "Technique and classification shape the event. Explore competition footage rather than attempting throws without a supervised throwing area.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "shot-put",
    "title": "Shot put",
    "aliases": [
      "shot put"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Push a weighted ball for distance using a controlled technique.",
    "longerDescription": "It is a push from the shoulder, not an ordinary overhead throw. Learn movement and safety with trained coaching and proper equipment.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  },
  {
    "id": "squash",
    "title": "Squash",
    "aliases": [
      "squash"
    ],
    "nodeType": "possibility",
    "possibilityType": "Sport",
    "shortDescription": "Use angles and movement in a shared enclosed court.",
    "longerDescription": "Players alternate hitting the ball toward the front wall. Positioning and giving an opponent safe access to the ball are central to play.",
    "tags": [
      "sports",
      "sport"
    ],
    "worldIds": [
      "sports"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "↝"
  }
];

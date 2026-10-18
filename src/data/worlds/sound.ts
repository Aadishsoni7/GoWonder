import type {Possibility} from '../types';
export const soundNodes:Possibility[]=[
  {
    "id": "sound",
    "title": "Sound & music",
    "aliases": [
      "sound & music"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Build a world someone can hear.",
    "longerDescription": "Listen for the craft behind a voice, a song or a footstep.",
    "tags": [
      "sound",
      "world"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "sound-design",
      "audio",
      "field-recording",
      "podcasting",
      "music-supervision",
      "composition",
      "voice",
      "hip-hop",
      "sitar"
    ],
    "relatedIds": [
      "film",
      "create"
    ],
    "intersectionIds": [
      "bioacoustics"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "sound-design",
    "title": "Sound design",
    "aliases": [
      "sound design"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Choose sounds that make a world feel real.",
    "longerDescription": "A door or distant train suggests a place. Sound can also make a familiar scene strange.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "foley"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "game-audio"
    ],
    "peopleIds": [],
    "resourceIds": [
      "post-roles",
      "foley-studio"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "foley",
    "title": "Foley art",
    "aliases": [
      "foley art"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Perform footsteps and rustles after filming.",
    "longerDescription": "Recreate sounds in time with pictures. Safe household objects can become a tiny sound studio.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "prop-sound"
    ],
    "relatedIds": [
      "game-audio"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "post-roles",
      "foley-studio"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-foley",
    "icon": "≋"
  },
  {
    "id": "prop-sound",
    "title": "Prop sound performance",
    "aliases": [
      "prop sound performance"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Find an object that sounds like something else.",
    "longerDescription": "Sound need not come from the thing on screen. Test textures at a comfortable volume.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "foley-studio"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "≋"
  },
  {
    "id": "audio",
    "title": "Audio engineering",
    "aliases": [
      "audio engineering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Capture and shape clear recordings.",
    "longerDescription": "Listen for noise and space. Moving a microphone can help more than adding effects.",
    "tags": [
      "sound",
      "skill"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "mixing",
      "live-sound"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "foley-studio"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-audio",
    "icon": "≋"
  },
  {
    "id": "mixing",
    "title": "Mixing",
    "aliases": [
      "mixing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Balance the parts of a recording.",
    "longerDescription": "Speech, music and effects share space. Make the important sound easy to follow.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "mastering"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "mastering",
    "title": "Mastering",
    "aliases": [
      "mastering"
    ],
    "nodeType": "possibility",
    "possibilityType": "Specialisation",
    "shortDescription": "Prepare a finished mix for consistent playback.",
    "longerDescription": "Make final checks across the release. This differs from moving individual instruments around.",
    "tags": [
      "sound",
      "specialisation"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "field-recording",
    "title": "Field recording",
    "aliases": [
      "field recording"
    ],
    "nodeType": "possibility",
    "possibilityType": "Pursuit",
    "shortDescription": "Collect the sound of real places.",
    "longerDescription": "A room changes through the day. Record only where allowed and avoid private conversations.",
    "tags": [
      "sound",
      "pursuit"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "podcasting",
    "title": "Podcast production",
    "aliases": [
      "podcast production"
    ],
    "nodeType": "possibility",
    "possibilityType": "Creator path",
    "shortDescription": "Build a show from voices and questions.",
    "longerDescription": "Choose a useful question and edit carefully. A two minute conversation is enough to begin.",
    "tags": [
      "sound",
      "creator path"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "podcast-booker"
    ],
    "relatedIds": [
      "oral-history"
    ],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "podcast-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-podcasting",
    "icon": "≋"
  },
  {
    "id": "podcast-booker",
    "title": "Podcast guest booking",
    "aliases": [
      "podcast guest booking"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Find someone with a specific story to share.",
    "longerDescription": "Research fit and organise timing. Fame does not always make the most interesting guest.",
    "tags": [
      "sound",
      "role"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "podcast-work"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "≋"
  },
  {
    "id": "music-supervision",
    "title": "Music supervision",
    "aliases": [
      "music supervision"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Find music that belongs in a story.",
    "longerDescription": "Consider mood, budget and permission. A perfect track still needs the right clearances.",
    "tags": [
      "sound",
      "intersection"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-supervisor"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-music-supervision",
    "icon": "≋"
  },
  {
    "id": "composition",
    "title": "Music composition",
    "aliases": [
      "music composition"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Create melodies, rhythms and structure.",
    "longerDescription": "Tap a rhythm or hum a phrase. Changing one note can shift the whole feeling.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [
      "arranging",
      "songwriting",
      "electronic-music"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-play",
      "podcast-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-composition",
    "icon": "≋"
  },
  {
    "id": "arranging",
    "title": "Music arranging",
    "aliases": [
      "music arranging"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Decide how musical parts work together.",
    "longerDescription": "The same tune can feel intimate or huge. Choose who carries it and when others enter.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-play"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "voice",
    "title": "Voice performance",
    "aliases": [
      "voice performance"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Give words meaning through rhythm and tone.",
    "longerDescription": "Read a sentence as a secret and a celebration. Notice how timing changes its meaning.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "voice-work"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-voice",
    "icon": "≋"
  },
  {
    "id": "live-sound",
    "title": "Live sound",
    "aliases": [
      "live sound"
    ],
    "nodeType": "possibility",
    "possibilityType": "Role",
    "shortDescription": "Help an audience hear a performance clearly.",
    "longerDescription": "Balance microphones and speakers. Technical training and hearing protection matter.",
    "tags": [
      "sound",
      "role"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "≋"
  },
  {
    "id": "songwriting",
    "title": "Songwriting",
    "aliases": [
      "songwriting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Put words and melody together.",
    "longerDescription": "A song can start with a phrase, a rhythm or a question. Read the words aloud to hear where the natural emphasis falls.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-supervisor"
    ],
    "surpriseLevel": 2,
    "icon": "≋"
  },
  {
    "id": "hip-hop",
    "title": "Hip hop",
    "aliases": [
      "hip hop"
    ],
    "nodeType": "possibility",
    "possibilityType": "Music culture",
    "shortDescription": "Explore rhythm, rhyme and personal expression.",
    "longerDescription": "Listen for flow, language and the story being told. India's many languages create very different local sounds.",
    "tags": [
      "sound",
      "music culture"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "≋"
  },
  {
    "id": "electronic-music",
    "title": "Electronic music",
    "aliases": [
      "electronic music"
    ],
    "nodeType": "possibility",
    "possibilityType": "Craft",
    "shortDescription": "Build music from recorded and generated sound.",
    "longerDescription": "Arrange a rhythm and change its texture. A simple repeating pattern can become interesting through small changes.",
    "tags": [
      "sound",
      "craft"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "music-play"
    ],
    "surpriseLevel": 2,
    "icon": "≋"
  },
  {
    "id": "sitar",
    "title": "Sitar",
    "aliases": [
      "sitar"
    ],
    "nodeType": "possibility",
    "possibilityType": "Instrument",
    "shortDescription": "Explore a string instrument with a rich bending sound.",
    "longerDescription": "Notice how a player moves between notes. Learning the physical technique is best done with a teacher rather than forcing the fingers.",
    "tags": [
      "sound",
      "instrument"
    ],
    "worldIds": [
      "sound"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 2,
    "icon": "≋"
  }
];

import type {Activity} from './types';
export const activities:Activity[]=[
  {
    "id": "try-sales",
    "title": "Listen before explaining",
    "minutes": 5,
    "instructions": [
      "Choose a pencil or bottle.",
      "Ask someone what they care about when choosing one.",
      "Explain one benefit that answers their need. Ask whether it helped."
    ],
    "reflectionOptions": [
      {
        "label": "Listening to someone",
        "nodeId": "ux-research"
      },
      {
        "label": "Explaining a benefit",
        "nodeId": "b2b-sales"
      },
      {
        "label": "Answering a question",
        "nodeId": "sales-engineering"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "sales"
  },
  {
    "id": "try-b2b-sales",
    "title": "A school buys an app",
    "minutes": 7,
    "instructions": [
      "Imagine a school needs a timetable app.",
      "List what a teacher, student and administrator each need.",
      "Write one question you would ask each person."
    ],
    "reflectionOptions": [
      {
        "label": "Understanding different people",
        "nodeId": "ux-research"
      },
      {
        "label": "Solving an organisation’s problem",
        "nodeId": "saas-sales"
      },
      {
        "label": "Asking useful questions",
        "nodeId": "sales"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-saas-sales",
    "title": "Make the subscription clear",
    "minutes": 7,
    "instructions": [
      "Invent a homework planning service.",
      "Write what is included and what is not.",
      "Explain the monthly cost without hiding any limits."
    ],
    "reflectionOptions": [
      {
        "label": "Explaining software simply",
        "nodeId": "sales-engineering"
      },
      {
        "label": "Making a fair offer",
        "nodeId": "account-executive"
      },
      {
        "label": "Understanding what happens after a sale",
        "nodeId": "customer-success"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-sales-engineering",
    "title": "Demo a useful solution",
    "minutes": 10,
    "instructions": [
      "Imagine a library keeps losing track of returned books.",
      "Draw three screens that show a check in process.",
      "Explain the idea in one minute and name one limitation."
    ],
    "reflectionOptions": [
      {
        "label": "Making the demo",
        "nodeId": "technology"
      },
      {
        "label": "Understanding the problem",
        "nodeId": "ux-research"
      },
      {
        "label": "Explaining the solution",
        "nodeId": "solutions-consulting"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "sales"
  },
  {
    "id": "try-customer-success",
    "title": "Teach one useful feature",
    "minutes": 5,
    "instructions": [
      "Choose an app you already understand.",
      "Write three steps for one useful task.",
      "Ask a willing friend to follow the steps without extra help."
    ],
    "reflectionOptions": [
      {
        "label": "Helping someone learn",
        "nodeId": "teaching"
      },
      {
        "label": "Finding a better process",
        "nodeId": "ux"
      },
      {
        "label": "Listening to problems",
        "nodeId": "ux-research"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-creator-manager",
    "title": "Unclash a creator week",
    "minutes": 8,
    "instructions": [
      "Plan two recording sessions, an edit and a rest day.",
      "Add a fictional sponsor deadline on the busiest day.",
      "Move the plan around and explain what you would protect."
    ],
    "reflectionOptions": [
      {
        "label": "Organising the week"
      },
      {
        "label": "Working with people",
        "nodeId": "talent-manager"
      },
      {
        "label": "Developing an idea",
        "nodeId": "youtube-producer"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-talent-manager",
    "title": "Choose a good fit",
    "minutes": 7,
    "instructions": [
      "Invent a creator who explains wildlife.",
      "Compare a nature book project with an unrelated product promotion.",
      "Write three questions you would ask before recommending either."
    ],
    "reflectionOptions": [
      {
        "label": "Understanding someone’s goals",
        "nodeId": "creator-manager"
      },
      {
        "label": "Planning opportunities",
        "nodeId": "brand-partnerships"
      },
      {
        "label": "Making time for creative work"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-brand-partnerships",
    "title": "Write an honest brief",
    "minutes": 8,
    "instructions": [
      "Pick an object you own.",
      "Write who a useful demo would help and what it should show.",
      "Include a limitation and a clear sponsorship disclosure for the fictional brief."
    ],
    "reflectionOptions": [
      {
        "label": "Matching a story with a brand",
        "nodeId": "creator-economy"
      },
      {
        "label": "Explaining the fit",
        "nodeId": "sales"
      },
      {
        "label": "Thinking about the audience"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-visual-merch",
    "title": "Change what catches the eye",
    "minutes": 5,
    "instructions": [
      "Arrange five objects on a shelf around one theme.",
      "Ask someone what they noticed first.",
      "Move one object and compare the result."
    ],
    "reflectionOptions": [
      {
        "label": "Arranging objects",
        "nodeId": "product-design"
      },
      {
        "label": "Working with colour",
        "nodeId": "food-styling"
      },
      {
        "label": "Noticing where eyes go",
        "nodeId": "ux"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-social-enterprise",
    "title": "Find the missing question",
    "minutes": 8,
    "instructions": [
      "Choose a small neighbourhood problem.",
      "Write who is affected, who benefits and who might pay for a solution.",
      "List what you still need to learn before building anything."
    ],
    "reflectionOptions": [
      {
        "label": "Understanding a local need",
        "nodeId": "people"
      },
      {
        "label": "Planning a practical solution",
        "nodeId": "product-design"
      },
      {
        "label": "Working with a community"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-thumbnail",
    "title": "Design at tiny size",
    "minutes": 5,
    "instructions": [
      "Pick a video idea you could explain honestly.",
      "Sketch two thumbnail versions with one clear subject.",
      "Look at them from arm length and choose the clearer one."
    ],
    "reflectionOptions": [
      {
        "label": "Making an image clear",
        "nodeId": "photography"
      },
      {
        "label": "Thinking about the viewer",
        "nodeId": "ux"
      },
      {
        "label": "Choosing the story",
        "nodeId": "content-researcher"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "thumbnail"
  },
  {
    "id": "try-content-researcher",
    "title": "Check one claim",
    "minutes": 8,
    "instructions": [
      "Pick a simple claim from a video.",
      "Find its original source and read the surrounding context.",
      "Write what is supported and what remains uncertain."
    ],
    "reflectionOptions": [
      {
        "label": "Finding reliable facts",
        "nodeId": "research"
      },
      {
        "label": "Spotting the surprising detail",
        "nodeId": "storytelling"
      },
      {
        "label": "Writing the opening",
        "nodeId": "scriptwriting"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-scriptwriting",
    "title": "Write a spoken opening",
    "minutes": 5,
    "instructions": [
      "Choose something you know how to do.",
      "Write a two sentence opening that says why it matters.",
      "Read it aloud and remove words you would never say."
    ],
    "reflectionOptions": [
      {
        "label": "Finding the right words",
        "nodeId": "storytelling"
      },
      {
        "label": "Planning a scene",
        "nodeId": "screenwriting"
      },
      {
        "label": "Explaining an idea"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-newsletter",
    "title": "Make a tiny issue",
    "minutes": 10,
    "instructions": [
      "Choose one narrow topic such as local birds or chess puzzles.",
      "Select three useful items and record their sources.",
      "Give each a one sentence reason to read it."
    ],
    "reflectionOptions": [
      {
        "label": "Finding something worth sharing",
        "nodeId": "content-researcher"
      },
      {
        "label": "Writing a clear explanation",
        "nodeId": "scriptwriting"
      },
      {
        "label": "Building a regular habit",
        "nodeId": "content-creation"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-ugc",
    "title": "Demo without buying",
    "minutes": 8,
    "instructions": [
      "Choose an object you already own.",
      "Plan a 15 second demo showing one real use.",
      "Include one useful limitation. Keep it private unless you choose otherwise."
    ],
    "reflectionOptions": [
      {
        "label": "Showing how a product works",
        "nodeId": "sales-engineering"
      },
      {
        "label": "Filming the demonstration",
        "nodeId": "photography"
      },
      {
        "label": "Editing the story",
        "nodeId": "editing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-storytelling",
    "title": "A six sentence story",
    "minutes": 7,
    "instructions": [
      "Describe an ordinary moment from today in six sentences.",
      "Give it a small change or discovery.",
      "Remove one sentence and see whether the story gets stronger."
    ],
    "reflectionOptions": [
      {
        "label": "Finding a character",
        "nodeId": "narrative-design"
      },
      {
        "label": "Choosing the order",
        "nodeId": "editing"
      },
      {
        "label": "Writing the scene",
        "nodeId": "game-writing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-comics",
    "title": "Tell it in three boxes",
    "minutes": 8,
    "instructions": [
      "Draw three empty panels.",
      "Show someone finding an unexpected object without dialogue.",
      "Ask a friend what happened in the story."
    ],
    "reflectionOptions": [
      {
        "label": "Drawing a character",
        "nodeId": "illustration"
      },
      {
        "label": "Telling a story in panels",
        "nodeId": "storytelling"
      },
      {
        "label": "Choosing what to leave out",
        "nodeId": "editing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-ceramics",
    "title": "Draw a cup with a purpose",
    "minutes": 8,
    "instructions": [
      "Think of someone who finds an ordinary cup awkward.",
      "Sketch a different handle or shape.",
      "Explain how it helps and what may become harder."
    ],
    "reflectionOptions": [
      {
        "label": "Imagining the shape",
        "nodeId": "product-design"
      },
      {
        "label": "Thinking about use",
        "nodeId": "ux"
      },
      {
        "label": "Working with material"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-food-styling",
    "title": "Three versions of a snack",
    "minutes": 7,
    "instructions": [
      "Use a snack you already have.",
      "Arrange it three ways using colour and spacing.",
      "Take photos in the same light and compare where your eye goes."
    ],
    "reflectionOptions": [
      {
        "label": "Arranging colour and texture",
        "nodeId": "visual-merch"
      },
      {
        "label": "Finding the best angle",
        "nodeId": "food-photo"
      },
      {
        "label": "Making something ordinary look different",
        "nodeId": "photography"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-game-design",
    "title": "Change one rule",
    "minutes": 10,
    "instructions": [
      "Draw six spaces on paper and use a coin as a counter.",
      "Make one rule for moving and one way to win.",
      "Play twice and change the rule that creates the least interesting choice."
    ],
    "reflectionOptions": [
      {
        "label": "Making the rules",
        "nodeId": "game-economy-design"
      },
      {
        "label": "Watching someone play",
        "nodeId": "game-testing"
      },
      {
        "label": "Inventing a world",
        "nodeId": "narrative-design"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "game"
  },
  {
    "id": "try-narrative-design",
    "title": "Two choices, two consequences",
    "minutes": 8,
    "instructions": [
      "Write a character facing a locked door.",
      "Offer two choices that reveal different information.",
      "Ask a friend which they choose and why."
    ],
    "reflectionOptions": [
      {
        "label": "Writing choices",
        "nodeId": "game-writing"
      },
      {
        "label": "Thinking about consequences",
        "nodeId": "game-design"
      },
      {
        "label": "Building a character",
        "nodeId": "storytelling"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "story"
  },
  {
    "id": "try-level-design",
    "title": "Guide without words",
    "minutes": 8,
    "instructions": [
      "Draw a small maze with an entrance and a goal.",
      "Use shapes or landmarks to hint at the route.",
      "Watch a friend trace it without you giving instructions."
    ],
    "reflectionOptions": [
      {
        "label": "Drawing the space",
        "nodeId": "environment-art"
      },
      {
        "label": "Planning a challenge",
        "nodeId": "game-design"
      },
      {
        "label": "Watching a player’s choices",
        "nodeId": "game-testing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-technical-art",
    "title": "A visual rule",
    "minutes": 8,
    "instructions": [
      "Draw a tree with a trunk and three repeated branch shapes.",
      "Write a rule for changing the branch size at each step.",
      "Change the rule and sketch the new result."
    ],
    "reflectionOptions": [
      {
        "label": "Making the picture",
        "nodeId": "game-art"
      },
      {
        "label": "Solving a technical problem"
      },
      {
        "label": "Connecting art with rules",
        "nodeId": "creative-coding"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-game-testing",
    "title": "Write a useful bug report",
    "minutes": 8,
    "instructions": [
      "Use a small game or app you know.",
      "Describe a confusing behaviour using exact steps.",
      "Separate what you expected from what actually happened. Do not invent a bug if none appears."
    ],
    "reflectionOptions": [
      {
        "label": "Finding a problem",
        "nodeId": "game-design"
      },
      {
        "label": "Explaining how to repeat it"
      },
      {
        "label": "Noticing how someone plays",
        "nodeId": "ux-research"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-game-economy-design",
    "title": "Balance imaginary coins",
    "minutes": 8,
    "instructions": [
      "Make a paper game where each turn earns two coins.",
      "Add two items with different costs and benefits.",
      "Play five turns and change any choice that is always obviously best."
    ],
    "reflectionOptions": [
      {
        "label": "Balancing the choices",
        "nodeId": "economics"
      },
      {
        "label": "Changing a rule",
        "nodeId": "game-design"
      },
      {
        "label": "Comparing the results",
        "nodeId": "data-analysis"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "economy"
  },
  {
    "id": "try-chess",
    "title": "Meet the rook",
    "minutes": 3,
    "instructions": [
      "Find the rook on the practice board.",
      "Try moving it along a row or column.",
      "Notice that a diagonal move is not allowed."
    ],
    "reflectionOptions": [
      {
        "label": "Seeing patterns",
        "nodeId": "sports-data"
      },
      {
        "label": "Planning ahead",
        "nodeId": "game-design"
      },
      {
        "label": "Learning a move through practice",
        "nodeId": "play"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "chess"
  },
  {
    "id": "try-cubing",
    "title": "Notice a pause",
    "minutes": 5,
    "instructions": [
      "If you have a cube, solve a familiar step slowly.",
      "Notice where you stop to find the next piece.",
      "Repeat with smoother movement rather than racing."
    ],
    "reflectionOptions": [
      {
        "label": "Breaking down a puzzle"
      },
      {
        "label": "Practising a sequence",
        "nodeId": "play"
      },
      {
        "label": "Noticing a smoother method",
        "nodeId": "game-design"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-tabletop-rpg",
    "title": "A tiny shared adventure",
    "minutes": 10,
    "instructions": [
      "With a willing friend, invent a place and two characters.",
      "One describes a problem; the other chooses an action.",
      "Agree together what happens next. Keep the theme comfortable for both."
    ],
    "reflectionOptions": [
      {
        "label": "Inventing the character",
        "nodeId": "game-writing"
      },
      {
        "label": "Making a shared story",
        "nodeId": "storytelling"
      },
      {
        "label": "Designing fair choices",
        "nodeId": "game-design"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-wildlife",
    "title": "Watch before taking a photo",
    "minutes": 10,
    "instructions": [
      "From a safe distance, observe a bird or insect.",
      "Write three behaviours without guessing feelings.",
      "If you take a photo, do not approach, feed or disturb it."
    ],
    "reflectionOptions": [
      {
        "label": "Observing animals",
        "nodeId": "animal-behaviour"
      },
      {
        "label": "Taking photographs",
        "nodeId": "photography"
      },
      {
        "label": "Being outside"
      },
      {
        "label": "Waiting patiently",
        "nodeId": "birding"
      },
      {
        "label": "Telling a story",
        "nodeId": "documentary"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-photography",
    "title": "Five ways to see a cup",
    "minutes": 5,
    "instructions": [
      "Place an ordinary object near a window.",
      "Photograph it from five safe angles.",
      "Choose the frame that changes how you see its shape."
    ],
    "reflectionOptions": [
      {
        "label": "Finding the light",
        "nodeId": "cinematography"
      },
      {
        "label": "Choosing the frame",
        "nodeId": "portrait-photo"
      },
      {
        "label": "Noticing a story"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-food-photo",
    "title": "Move the light",
    "minutes": 5,
    "instructions": [
      "Place food beside a window.",
      "Photograph it with light from the side and then behind.",
      "Compare shadows and texture without changing filters."
    ],
    "reflectionOptions": [
      {
        "label": "Arranging the food",
        "nodeId": "food-styling"
      },
      {
        "label": "Finding the light",
        "nodeId": "photography"
      },
      {
        "label": "Choosing the image",
        "nodeId": "editing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-portrait-photo",
    "title": "Ask before the picture",
    "minutes": 8,
    "instructions": [
      "Ask a willing person how they want to be shown.",
      "Try two simple backgrounds and let them choose a frame.",
      "Ask permission separately before sharing anything."
    ],
    "reflectionOptions": [
      {
        "label": "Talking with the person",
        "nodeId": "oral-history"
      },
      {
        "label": "Finding an expression",
        "nodeId": "photography"
      },
      {
        "label": "Shaping light",
        "nodeId": "cinematography"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-documentary",
    "title": "Three shots, one true story",
    "minutes": 10,
    "instructions": [
      "Choose an object in your home with a history.",
      "Plan a wide shot, a detail and a shot of it being used.",
      "Write what each reveals without inventing facts."
    ],
    "reflectionOptions": [
      {
        "label": "Asking questions",
        "nodeId": "oral-history"
      },
      {
        "label": "Observing real life"
      },
      {
        "label": "Sequencing a story",
        "nodeId": "editing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-cinematography",
    "title": "Change the camera, change the feeling",
    "minutes": 7,
    "instructions": [
      "Film an object from above, level and below.",
      "Keep everything else as similar as possible.",
      "Describe how each angle changes its apparent importance."
    ],
    "reflectionOptions": [
      {
        "label": "Looking for light",
        "nodeId": "photography"
      },
      {
        "label": "Choosing the viewpoint",
        "nodeId": "location"
      },
      {
        "label": "Making a scene feel different",
        "nodeId": "colour-grading"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-editing",
    "title": "Change the order",
    "minutes": 8,
    "instructions": [
      "Draw three shots: a face, a closed box and an empty room.",
      "Arrange them in two different orders.",
      "Write what a viewer might think happened in each version."
    ],
    "reflectionOptions": [
      {
        "label": "Choosing the order",
        "nodeId": "storytelling"
      },
      {
        "label": "Noticing rhythm",
        "nodeId": "composition"
      },
      {
        "label": "Making an idea clearer",
        "nodeId": "scriptwriting"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "editing"
  },
  {
    "id": "try-location",
    "title": "Scout a familiar corner",
    "minutes": 8,
    "instructions": [
      "Choose a place you may safely access.",
      "Imagine a short scene happening there.",
      "Note light, background noise, permission and room to move."
    ],
    "reflectionOptions": [
      {
        "label": "Noticing places",
        "nodeId": "photography"
      },
      {
        "label": "Imagining the scene",
        "nodeId": "production-design"
      },
      {
        "label": "Planning practical details"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-foley",
    "title": "Give a silent clip its footsteps",
    "minutes": 8,
    "instructions": [
      "Record a short clip of your own feet walking.",
      "Mute it and recreate the steps with safe objects.",
      "Record your sound in time with the picture."
    ],
    "reflectionOptions": [
      {
        "label": "Listening closely",
        "nodeId": "audio"
      },
      {
        "label": "Performing the sound",
        "nodeId": "voice"
      },
      {
        "label": "Finding an unexpected use for an object",
        "nodeId": "sound-design"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "foley"
  },
  {
    "id": "try-audio",
    "title": "Hear the room",
    "minutes": 5,
    "instructions": [
      "Record the same sentence in two rooms.",
      "Listen at a comfortable volume.",
      "Note which room has more echo and where the voice is clearer."
    ],
    "reflectionOptions": [
      {
        "label": "Listening for differences",
        "nodeId": "sound-design"
      },
      {
        "label": "Testing the room"
      },
      {
        "label": "Improving a recording",
        "nodeId": "mixing"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-podcasting",
    "title": "Ask one follow up",
    "minutes": 8,
    "instructions": [
      "Ask permission to interview someone you know.",
      "Ask about a small skill and listen for something specific.",
      "Ask a follow up based on their answer. Keep recordings private unless agreed."
    ],
    "reflectionOptions": [
      {
        "label": "Asking questions",
        "nodeId": "oral-history"
      },
      {
        "label": "Listening to the person",
        "nodeId": "people"
      },
      {
        "label": "Shaping the recording",
        "nodeId": "audio"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-music-supervision",
    "title": "Two moods for one scene",
    "minutes": 5,
    "instructions": [
      "Choose a silent scene you made.",
      "Describe two very different musical moods for it.",
      "Explain how each changes the story. No publishing or copyrighted track needed."
    ],
    "reflectionOptions": [
      {
        "label": "Matching music to a scene",
        "nodeId": "film"
      },
      {
        "label": "Noticing mood",
        "nodeId": "composition"
      },
      {
        "label": "Finding a surprising song"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-voice",
    "title": "One sentence, three intentions",
    "minutes": 5,
    "instructions": [
      "Choose a plain sentence such as The train is here.",
      "Read it as a secret, a warning and a celebration.",
      "Record privately and notice how timing changes meaning."
    ],
    "reflectionOptions": [
      {
        "label": "Trying different characters",
        "nodeId": "storytelling"
      },
      {
        "label": "Changing rhythm",
        "nodeId": "composition"
      },
      {
        "label": "Recording a performance",
        "nodeId": "audio"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-composition",
    "title": "A tiny rhythm",
    "minutes": 5,
    "instructions": [
      "Tap a four beat pattern softly.",
      "Repeat it and leave one beat silent.",
      "Notice how the pause changes the pattern."
    ],
    "reflectionOptions": [
      {
        "label": "Making a melody",
        "nodeId": "songwriting"
      },
      {
        "label": "Creating rhythm"
      },
      {
        "label": "Changing the mood",
        "nodeId": "music-supervision"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "rhythm"
  },
  {
    "id": "try-nature-journal",
    "title": "A leaf without picking it",
    "minutes": 8,
    "instructions": [
      "Observe one leaf where it grows.",
      "Sketch the outline and add date, texture and colour notes.",
      "Write one question the sketch made you notice."
    ],
    "reflectionOptions": [
      {
        "label": "Looking closely",
        "nodeId": "animal-behaviour"
      },
      {
        "label": "Drawing what I saw"
      },
      {
        "label": "Following a question",
        "nodeId": "citizen-science"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-citizen-science",
    "title": "Make a careful observation",
    "minutes": 10,
    "instructions": [
      "Choose a safe familiar outdoor view.",
      "Note the time, location broadly and one organism you observe.",
      "Read a project method before submitting anything and avoid exposing sensitive locations."
    ],
    "reflectionOptions": [
      {
        "label": "Making an observation"
      },
      {
        "label": "Keeping a record",
        "nodeId": "data-analysis"
      },
      {
        "label": "Helping a shared project",
        "nodeId": "conservation"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-astronomy",
    "title": "Track a Moon shape",
    "minutes": 5,
    "instructions": [
      "Look for the Moon from a safe familiar spot.",
      "Sketch its shape and note the time.",
      "Compare on another evening. Never look directly at the Sun."
    ],
    "reflectionOptions": [
      {
        "label": "Following a question",
        "nodeId": "research"
      },
      {
        "label": "Looking carefully",
        "nodeId": "astro-photo"
      },
      {
        "label": "Comparing observations",
        "nodeId": "data-analysis"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-forensic-accounting",
    "title": "Find the ledger mismatch",
    "minutes": 7,
    "instructions": [
      "Make five fictional sales with quantities and prices.",
      "Put one incorrect total in the ledger.",
      "Ask a friend to find it and explain what else they would check."
    ],
    "reflectionOptions": [
      {
        "label": "Spotting the mismatch",
        "nodeId": "data-analysis"
      },
      {
        "label": "Checking the records"
      },
      {
        "label": "Asking what evidence means"
      },
      {
        "label": "Not for me"
      }
    ],
    "demo": "ledger"
  },
  {
    "id": "try-data-analysis",
    "title": "A chart needs a question",
    "minutes": 8,
    "instructions": [
      "Count one harmless event across five short time periods.",
      "Make a simple bar chart with a labelled scale.",
      "Write one thing it shows and one thing it cannot prove."
    ],
    "reflectionOptions": [
      {
        "label": "Finding a pattern",
        "nodeId": "sports-data"
      },
      {
        "label": "Checking a guess",
        "nodeId": "research"
      },
      {
        "label": "Explaining what the numbers show",
        "nodeId": "data-visualisation"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-budgeting",
    "title": "Plan an imaginary event",
    "minutes": 8,
    "instructions": [
      "Give a fictional class event a budget of 1000 rupees.",
      "Allocate amounts to three needs and a small reserve.",
      "Change one cost and decide what to adjust."
    ],
    "reflectionOptions": [
      {
        "label": "Planning tradeoffs",
        "nodeId": "finance"
      },
      {
        "label": "Checking a total",
        "nodeId": "accounting"
      },
      {
        "label": "Making priorities clear",
        "nodeId": "product-design"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-sports-data",
    "title": "Count one thing in a match",
    "minutes": 7,
    "instructions": [
      "Watch a short section of a match.",
      "Choose one event such as a completed pass and define it clearly.",
      "Tally it. Write a question the tally cannot answer."
    ],
    "reflectionOptions": [
      {
        "label": "Following one player",
        "nodeId": "performance-analysis"
      },
      {
        "label": "Keeping a careful tally",
        "nodeId": "data-analysis"
      },
      {
        "label": "Explaining a pattern",
        "nodeId": "sports-journalism"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-kabaddi",
    "title": "Read a raid",
    "minutes": 5,
    "instructions": [
      "Watch the linked raid once for the raider.",
      "Watch again for where defenders move.",
      "Describe the moment that opened or closed a route back."
    ],
    "reflectionOptions": [
      {
        "label": "Reading the space",
        "nodeId": "sports-data"
      },
      {
        "label": "Noticing teamwork"
      },
      {
        "label": "Understanding the rules"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-ux",
    "title": "Make a confusing screen clearer",
    "minutes": 10,
    "instructions": [
      "Choose a screen you find awkward.",
      "Sketch a version with one clear main action.",
      "Ask a friend to find that action without hints."
    ],
    "reflectionOptions": [
      {
        "label": "Spotting confusion",
        "nodeId": "ux-research"
      },
      {
        "label": "Sketching a clearer screen",
        "nodeId": "product-design"
      },
      {
        "label": "Watching someone use it",
        "nodeId": "accessibility"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-accessibility",
    "title": "Try the keyboard route",
    "minutes": 5,
    "instructions": [
      "On a website, use Tab to move between controls.",
      "Notice whether the focused item is visible.",
      "Write down one point where the route becomes confusing."
    ],
    "reflectionOptions": [
      {
        "label": "Noticing a barrier",
        "nodeId": "ux-research"
      },
      {
        "label": "Making a task easier",
        "nodeId": "ux"
      },
      {
        "label": "Testing a different way to interact",
        "nodeId": "technology"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-gis",
    "title": "Map a useful detail",
    "minutes": 10,
    "instructions": [
      "Sketch a familiar public route from memory.",
      "Mark shade or public benches, not private homes.",
      "Add a legend and one note about what you could not verify."
    ],
    "reflectionOptions": [
      {
        "label": "Making a map",
        "nodeId": "cartography"
      },
      {
        "label": "Noticing a place"
      },
      {
        "label": "Finding a spatial pattern",
        "nodeId": "data-analysis"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-oral-history",
    "title": "Ask about an everyday object",
    "minutes": 10,
    "instructions": [
      "Ask a relative or friend if they would like to share a memory.",
      "Use one object as a starting point and ask open questions.",
      "Agree what may be recorded or shared and respect anything they leave out."
    ],
    "reflectionOptions": [
      {
        "label": "Listening to memories"
      },
      {
        "label": "Asking the next question",
        "nodeId": "podcasting"
      },
      {
        "label": "Telling someone’s story",
        "nodeId": "documentary"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-translation",
    "title": "Two ways to say it",
    "minutes": 7,
    "instructions": [
      "Choose a short everyday message in a language you know.",
      "Translate it for a friend and then for a formal notice.",
      "Compare the tone without changing the main meaning."
    ],
    "reflectionOptions": [
      {
        "label": "Choosing the right words",
        "nodeId": "localisation"
      },
      {
        "label": "Understanding context"
      },
      {
        "label": "Making meaning clear",
        "nodeId": "storytelling"
      },
      {
        "label": "Not for me"
      }
    ]
  },
  {
    "id": "try-teaching",
    "title": "Explain, then let them try",
    "minutes": 8,
    "instructions": [
      "Choose a small skill you can safely teach.",
      "Explain it in three steps to a willing learner.",
      "Let them try and ask which step needed more clarity."
    ],
    "reflectionOptions": [
      {
        "label": "Explaining clearly"
      },
      {
        "label": "Watching someone learn",
        "nodeId": "learning-design"
      },
      {
        "label": "Finding another way to explain",
        "nodeId": "ux"
      },
      {
        "label": "Not for me"
      }
    ]
  }
];

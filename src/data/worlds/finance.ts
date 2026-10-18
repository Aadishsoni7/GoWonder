import type {Possibility} from '../types';
export const financeNodes:Possibility[]=[
  {
    "id": "finance",
    "title": "Money & numbers",
    "aliases": [
      "money & numbers"
    ],
    "nodeType": "world",
    "possibilityType": "World",
    "shortDescription": "Follow a number until it becomes a story.",
    "longerDescription": "Explore records, uncertainty and the choices people make.",
    "tags": [
      "finance",
      "world"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [
      "accounting",
      "economics",
      "data-analysis",
      "actuarial-science",
      "budgeting"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "sports-data"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◎"
  },
  {
    "id": "accounting",
    "title": "Accounting",
    "aliases": [
      "accounting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Field",
    "shortDescription": "Keep clear records of money coming and going.",
    "longerDescription": "Practise with a fictional shop. Good records explain what happened rather than just a final total.",
    "tags": [
      "finance",
      "field"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [
      "forensic-accounting"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "forensic-accounting"
    ],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◎"
  },
  {
    "id": "forensic-accounting",
    "title": "Forensic accounting",
    "aliases": [
      "forensic accounting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Use records to investigate financial puzzles.",
    "longerDescription": "Compare transactions for inconsistencies. A mismatch is a clue, not automatic proof of wrongdoing.",
    "tags": [
      "finance",
      "intersection"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [
      "transaction-tracing"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "accounting",
      "research"
    ],
    "peopleIds": [],
    "resourceIds": [
      "forensic-practice"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "activityId": "try-forensic-accounting",
    "icon": "◎",
    "eligibilityNotes": "These experiments use fictional examples. Professional work may require specialised training and relevant permissions."
  },
  {
    "id": "transaction-tracing",
    "title": "Transaction tracing",
    "aliases": [
      "transaction tracing"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Follow a payment through a chain of records.",
    "longerDescription": "Dates and references connect documents. Use invented data rather than real financial details.",
    "tags": [
      "finance",
      "skill"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "forensic-practice"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◎"
  },
  {
    "id": "economics",
    "title": "Economics",
    "aliases": [
      "economics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Academic field",
    "shortDescription": "Explore choices with limited time and resources.",
    "longerDescription": "A canteen queue can lead to a question. Ask what a simplified model leaves out.",
    "tags": [
      "finance",
      "academic field"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [
      "behavioural-economics"
    ],
    "relatedIds": [],
    "intersectionIds": [
      "game-economy-design"
    ],
    "peopleIds": [],
    "resourceIds": [
      "economics-course"
    ],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◎"
  },
  {
    "id": "behavioural-economics",
    "title": "Behavioural economics",
    "aliases": [
      "behavioural economics"
    ],
    "nodeType": "possibility",
    "possibilityType": "Research area",
    "shortDescription": "Study how people actually make choices.",
    "longerDescription": "People are not tidy equations. The way options are described can affect a decision.",
    "tags": [
      "finance",
      "research area"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [
      "economics-course"
    ],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "◎"
  },
  {
    "id": "data-analysis",
    "title": "Data analysis",
    "aliases": [
      "data analysis"
    ],
    "nodeType": "possibility",
    "possibilityType": "Skill",
    "shortDescription": "Turn a messy table into a useful question.",
    "longerDescription": "Clean records and check interpretation. A clear chart can still support a wrong conclusion.",
    "tags": [
      "finance",
      "skill"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [
      "data-storytelling"
    ],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-data-analysis",
    "icon": "◎"
  },
  {
    "id": "data-storytelling",
    "title": "Data storytelling",
    "aliases": [
      "data storytelling"
    ],
    "nodeType": "possibility",
    "possibilityType": "Intersection",
    "shortDescription": "Explain what numbers do and do not show.",
    "longerDescription": "Choose a question and honest caption. Include missing context rather than hiding it.",
    "tags": [
      "finance",
      "intersection"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "icon": "◎"
  },
  {
    "id": "actuarial-science",
    "title": "Actuarial science",
    "aliases": [
      "actuarial science"
    ],
    "nodeType": "possibility",
    "possibilityType": "Academic field",
    "shortDescription": "Study uncertain future costs with probability.",
    "longerDescription": "Mathematics meets careful assumptions. Explore imaginary events without buying financial products.",
    "tags": [
      "finance",
      "academic field"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 3,
    "hidden": true,
    "icon": "◎",
    "eligibilityNotes": "These experiments use fictional examples. Professional work may require specialised training and relevant permissions."
  },
  {
    "id": "budgeting",
    "title": "Budgeting",
    "aliases": [
      "budgeting"
    ],
    "nodeType": "possibility",
    "possibilityType": "Life skill",
    "shortDescription": "Plan how a limited amount could be used.",
    "longerDescription": "Try a fictional school event. Decide priorities and leave room for unexpected costs.",
    "tags": [
      "finance",
      "life skill"
    ],
    "worldIds": [
      "finance"
    ],
    "childIds": [],
    "relatedIds": [],
    "intersectionIds": [],
    "peopleIds": [],
    "resourceIds": [],
    "surpriseLevel": 1,
    "hidden": false,
    "activityId": "try-budgeting",
    "icon": "◎"
  }
];

import type {Person,Possibility} from './types';
import type {LearningPath} from './learning';
const entries=[
 {id:'football',title:'Football',name:'Bala Devi',person:'bala-devi',role:'Football player',description:'Pass, move and work with teammates to score in the other team’s goal. Outfield players use their feet, body and head.',story:'Bala Devi began playing at eleven. In an AIFF interview she describes learning from Oinam Bembem Devi and credits her coaches, teammates and family.',url:'https://www.the-aiff.com/article/winning-saff-championship-in-islamabad-was-special-bala-devi',tasks:['Watch a passage of a match. Draw where one player moves before receiving a pass.','Try gentle passing with a willing friend in a safe open space. Notice how moving after a pass changes the next option.','Find a supervised local session. Ask the coach how beginners practise control, spacing and teamwork.']},
 {id:'javelin',title:'Javelin',name:'Neeraj Chopra',person:'neeraj-chopra',role:'Javelin athlete',description:'Athletes throw a javelin along a marked sector. Distance counts only when the throw meets the event’s rules.',story:'Neeraj Chopra won javelin gold at Tokyo 2020. He later gave the javelin from that victory to the Olympic Museum, linking a personal achievement with sporting history.',url:'https://newsroom.olympics.com/record/1148',tasks:['Watch official competition footage. Sketch the run up, release and landing as three separate stages.','Compare two legal throws in official footage. Note differences without copying a throw.','Ask a qualified coach at an authorised athletics centre about safe beginner preparation. Never throw a homemade javelin.']},
 {id:'swimming',title:'Swimming',name:'Srihari Nataraj',person:'srihari-nataraj',role:'Swimmer',description:'Swimmers race over a set distance using specified strokes. Starts, turns and consistent movement all affect the result.',story:'Srihari Nataraj represents India in swimming. His World Aquatics profile lets you explore his recorded events and times. His starting story is not documented here.',url:'https://www.worldaquatics.com/athletes/1120098/srihari-nataraj',tasks:['Look at an official result. Compare the stroke, distance and time in two events.','Watch a race in official footage. Count strokes over one length and notice the turn. Do not enter water for this task.','Ask a qualified instructor at a lifeguarded pool about beginner water safety. Never practise alone or in open water.']},
 {id:'rowing',title:'Rowing',name:'Arjun Lal Jat',person:'arjun-lal-jat',role:'Rower',description:'Rowers use oars to move a boat. Crews coordinate their strokes while balancing the boat and following a race course.',story:'Arjun Lal Jat is an Indian rower. His World Rowing record provides a direct route into his events and results. His personal starting story is not documented here.',url:'https://worldrowing.com/athlete/53830',tasks:['Watch official rowing footage. Count how often a crew’s oars enter the water together.','Sketch the catch, drive, finish and recovery from a coaching demonstration. Compare a crew’s timing over ten strokes.','Ask a recognised rowing club about supervised land based introductions. Do not launch a boat or enter open water for this task.']},
 {id:'sports-science',title:'Sports science',name:'Mahesh Panchagnula',person:'mahesh-panchagnula',role:'Sports science researcher',description:'Researchers study movement, equipment and performance to explain what happens in sport. They test ideas using measurements and evidence.',story:'Mahesh Panchagnula works on sports science and analytics at IIT Madras. The institute describes research on ball bounce, imaging and sporting decisions, connecting engineering questions with real sport.',url:'https://ioe.iitm.ac.in/project/sports-science-and-analytics/',tasks:['Drop a soft ball from the same low height onto two safe surfaces. Predict which bounce will be higher.','Repeat each condition three times and record approximate bounce heights. Keep the ball away from people, glass and stairs.','Make a small comparison chart and explain what you could not control. Read an IIT Madras project and write a question for its researchers.']}
];
export const expansionPeople:Person[]=entries.map(e=>({id:e.person,name:e.name,role:e.role,country:'India',personType:'practitioner',portraitStatus:'permission_or_licence_needed',shortStory:e.story,journeySummary:[e.role,'Explore documented work','Follow the evidence'],sourceUrls:[e.url],officialSite:e.url,connectedNodeIds:[e.id],verificationStatus:'verified',sourceVerifiedAt:'2026-10-19',evidenceUrls:[e.url],evidenceType:'official sporting or university source'}));
function node(id:string,title:string,description:string,children:string[]=[],group=false):Possibility{return {id,title,aliases:[],nodeType:group?'world':'possibility',possibilityType:group?'world':id==='sports-science'?'research':'sport',shortDescription:description,longerDescription:group?'Follow a question to meet a real practitioner and try a safe introduction.':'Start by observing. These activities are introductions, not a professional training programme.',tags:['observe','India'],worldIds:[id==='science'?'nature':'sports'],childIds:children,relatedIds:group?[]:['sports-data'],intersectionIds:[],peopleIds:entries.filter(e=>e.id===id).map(e=>e.person),resourceIds:[]}}
export const expansionNodes:Possibility[]=[...entries.map(e=>node(e.id,e.title,e.description)),node('precision-sports','Precision sports','Small adjustments, careful routines and repeatable accuracy.',['sport-shooting','archery'],true),node('water-sports','Water sports','Explore movement on and through water, starting safely from the shore.',['swimming','rowing'],true),node('running-throwing','Running, jumping & throwing','Distance, technique and the movement that brings them together.',['javelin','shot-put','club-throw'],true),node('team-sports','Team sports','Read the game, share space and work with other players.',['football'],true),node('science','Science & discovery','Ask a question, look for evidence and revise your explanation.',['astronomy','particle-physics','botany','sports-science','marine-science'],true)];
function path(id:string,tasks:string[]):LearningPath{return {levels:tasks.map((task,i)=>({id:id+'-level-'+(i+1),level:i+1,title:['Notice how it works','Compare and practise safely','Explore a next step'][i],timeLabel:i?'Explore at your own pace':'About 15 to 25 minutes',task,steps:[task],materials:'Paper and a public source. Practical sport needs a suitable venue and qualified supervision. Ask a guardian to help with visits if needed.',expectedEvidence:'Keep a sketch, tally or question. Public sharing is optional.',reviewQuestion:'What changed when you looked more closely?',completionOptions:['Tried it','Try again','Not for me'],isMandatory:false,editorialStatus:'authored_safe_introduction'})),reflection:{question:'What caught your attention?',choices:['Movement','Patterns','Working with others','Not for me'].map(label=>({label}))},deeper:{label:'Follow the evidence',steps:tasks,skillsToExplore:['Observation','Comparing evidence','Asking questions'],tools:'Start with paper and official sources.',professionalRequirements:null,requirementsStatus:'do_not_invent_requirements',routineDisclaimer:'An exploration project, not a named person’s daily routine.'},laterTools:'Ask a recognised organisation about appropriate equipment and supervised introductions before practising.',relatedPersonIds:[],resourceIds:[],relatedResourceIds:[]}}
export const expansionLearning:Record<string,LearningPath>=Object.fromEntries(expansionNodes.map(n=>[n.id,path(n.id,entries.find(e=>e.id===n.id)?.tasks||['Choose one field below. Write an observation from its official source and a question you still have.','Compare two examples in this world. Make a small table of what is similar and what is different.','Choose a connected practitioner. Read their evidence page and plan a safe next observation.'])]));

expansionPeople.push({id:'dhinesh-khanna',name:'Dhinesh Khanna Ramalingam',role:'Customer success practitioner',country:'India',personType:'practitioner',portraitStatus:'permission_or_licence_needed',shortStory:'Dhinesh describes beginning in technical support and later leading customer success at Zoho. His team helps people get started, resolve technical questions and make use of products after a purchase.',journeySummary:['Technical support','Learn from customer questions','Customer success'],sourceUrls:['https://www.zoho.com/humans-of-zoho/dhinesh-khanna.html'],officialSite:'https://www.zoho.com/humans-of-zoho/dhinesh-khanna.html',connectedNodeIds:['customer-success'],verificationStatus:'verified',sourceVerifiedAt:'2026-10-19',evidenceUrls:['https://www.zoho.com/humans-of-zoho/dhinesh-khanna.html'],evidenceType:'first person company interview'},{id:'mark-burgener',name:'Mark Burgener',role:'Business software sales practitioner',location:'United States',country:'United States',personType:'practitioner',portraitStatus:'permission_or_licence_needed',shortStory:'Mark describes supporting Zoho’s mid market sales team, helping with customer conversations and written proposals. His interview offers a view of software sales as listening, explanation and work with a team.',journeySummary:['Work with software customers','Help with proposals','Support a sales team'],sourceUrls:['https://www.zoho.com/humans-of-zoho/mark.html','https://help.zoho.com/portal/en/kb/crm/crm-reference/product-architecture-and-reliability/articles/zoho-crm-saas-architecture-and-deployment-options'],officialSite:'https://www.zoho.com/humans-of-zoho/mark.html',connectedNodeIds:['sales','b2b-sales','saas-sales'],verificationStatus:'verified',sourceVerifiedAt:'2026-10-19',evidenceUrls:['https://www.zoho.com/humans-of-zoho/mark.html'],evidenceType:'first person company interview; SaaS product context'});

expansionPeople.push(...[
  {
    "id": "meghna-jayanth",
    "name": "Meghna Jayanth",
    "role": "Game writer and narrative designer",
    "location": "International practitioner",
    "country": "International practitioner",
    "connectedNodeIds": [
      "narrative-design",
      "game-writing"
    ],
    "shortStory": "Meghna writes stories that respond to a player’s choices. Her work includes 80 Days, and she shares talks about writing characters and designing interactive stories.",
    "sourceUrls": [
      "https://meghnajayanth.carrd.co/",
      "https://www.gdcvault.com/play/1022101/Leading-Players-Astray"
    ],
    "officialSite": "https://meghnajayanth.carrd.co/",
    "journeySummary": [
      "Game writer and narrative designer",
      "Explore documented work",
      "Follow the evidence"
    ],
    "personType": "practitioner",
    "portraitStatus": "permission_or_licence_needed",
    "evidenceUrls": [
      "https://meghnajayanth.carrd.co/",
      "https://www.gdcvault.com/play/1022101/Leading-Players-Astray"
    ],
    "evidenceType": "personal portfolio or professional teaching biography",
    "verificationStatus": "verified",
    "sourceVerifiedAt": "2026-10-19"
  },
  {
    "id": "jeff-ignacio",
    "name": "Jeff Ignacio",
    "role": "Revenue and sales operations practitioner",
    "location": "United States",
    "country": "United States",
    "connectedNodeIds": [
      "revops",
      "sales-ops",
      "newsletter"
    ],
    "shortStory": "Jeff moved from financial planning into the systems and processes behind sales. He teaches revenue operations and shares his experience through a newsletter and practical frameworks.",
    "sourceUrls": [
      "https://www.revopscoop.com/courses/unleashing-r-o-i-on-demand",
      "https://revopscoop.substack.com/p/revops-co-op-weekly-98-the-process"
    ],
    "officialSite": "https://www.revopscoop.com/courses/unleashing-r-o-i-on-demand",
    "journeySummary": [
      "Revenue and sales operations practitioner",
      "Explore documented work",
      "Follow the evidence"
    ],
    "personType": "practitioner",
    "portraitStatus": "permission_or_licence_needed",
    "evidenceUrls": [
      "https://www.revopscoop.com/courses/unleashing-r-o-i-on-demand",
      "https://revopscoop.substack.com/p/revops-co-op-weekly-98-the-process"
    ],
    "evidenceType": "personal portfolio or professional teaching biography",
    "verificationStatus": "verified",
    "sourceVerifiedAt": "2026-10-19"
  },
  {
    "id": "varun-grover",
    "name": "Varun Grover",
    "role": "Screenwriter, lyricist and comedian",
    "location": "India",
    "country": "India",
    "connectedNodeIds": [
      "screenwriting",
      "songwriting",
      "standup",
      "direction"
    ],
    "shortStory": "Varun began in engineering and found his way into writing. His portfolio connects screenwriting, songs, comedy and directing, showing that one person can follow several creative threads.",
    "sourceUrls": [
      "https://varungrover.co/",
      "https://varungrover.co/screenwriter"
    ],
    "officialSite": "https://varungrover.co/",
    "journeySummary": [
      "Screenwriter, lyricist and comedian",
      "Explore documented work",
      "Follow the evidence"
    ],
    "personType": "practitioner",
    "portraitStatus": "permission_or_licence_needed",
    "evidenceUrls": [
      "https://varungrover.co/",
      "https://varungrover.co/screenwriter"
    ],
    "evidenceType": "personal portfolio or professional teaching biography",
    "verificationStatus": "verified",
    "sourceVerifiedAt": "2026-10-19"
  }
] as Person[]);

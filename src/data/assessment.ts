// Original editorial questionnaire. Mapping reviewed in docs/discovery-scoring-review.md.
export const assessmentVersion = 'discovery-1';
export const dimensions = ['R','I','A','S','E','C'] as const;
export type Dimension = typeof dimensions[number];
export const directions: Record<Dimension,{label:string;description:string;symbol:string;phrase:string}> = {
 R:{phrase:'making things',label:'Make',description:'Getting hands on, testing materials and making something work.',symbol:'↗'},
 I:{phrase:'understanding how things work',label:'Figure out',description:'Asking why, looking for evidence and understanding how things work.',symbol:'⌕'},
 A:{phrase:'creating and expressing ideas',label:'Create',description:'Shaping a story, image, sound or idea in your own way.',symbol:'✳'},
 S:{phrase:'connecting with people',label:'Connect',description:'Listening, sharing knowledge and helping people work together.',symbol:'◎'},
 E:{phrase:'turning ideas into action',label:'Make it happen',description:'Taking initiative, building support and moving an idea forward.',symbol:'✧'},
 C:{phrase:'organising information',label:'Find the pattern',description:'Organising information, checking details and bringing clarity to a process.',symbol:'∑'}
};
export type Choice = {text:string;tag:Dimension};
export type AssessmentQuestion = {id:string;context:string;prompt:string;choices:Choice[]};
function q(id:number,context:string,prompt:string,choices:[string,Dimension][]):AssessmentQuestion {
 return {id:'q'+id,context,prompt,choices:choices.map(([text,tag])=>({text,tag}))};
}
export const assessmentQuestions:AssessmentQuestion[] = [
 q(1,'Behind the scenes','You have a day on a film set. What would you want to understand first?',[
  ['How the cameras and equipment work','R'],['How the story becomes a scene','A'],['How the cast and crew work together','S'],['How the shoot is scheduled and organised','C']]),
 q(2,'An idea, a small budget','You have ₹1,000 for a student project. What would you rather do?',[
  ['Build something useful','R'],['Create a short film or artwork','A'],['Organise the details of a student event','C'],['Try selling something people might want','E']]),
 q(3,'A different kind of game','You come across a game you have never played. What draws you in?',[
  ['Understanding the rules and scoring','C'],['Exploring its world and story','A'],['Playing with other people','S'],['Bring players together around a strategy to win','E']]),
 q(4,'A business problem','A friend’s small business is struggling to find customers. What would you try first?',[
  ['Listen to customers and understand their needs','S'],['Study the sales numbers for clues','I'],['Create a clearer advertisement','A'],['Test a new way to attract customers','E']]),
 q(5,'A museum visit','You visit a science museum. Which exhibit would you choose first?',[
  ['Machines I can operate and explore','R'],['Evidence about the mysteries of the universe','I'],['An experiment with a method and results to compare','C'],['Stories of how science helps a community','S']]),
 q(6,'Space to do something','You can use an empty room for a day. What would you do with it?',[
  ['Set up a small workshop','R'],['Create an art or photography exhibition','A'],['Plan the bookings and running order for an event','C'],['Run a small pop-up business','E']]),
 q(7,'Watching a match','During a cricket or football match, what do you tend to notice?',[
  ['The movement and technique of the players','R'],['Why a particular strategy works','I'],['How the team communicates','S'],['Changes in the score and performance records','C']]),
 q(8,'Somewhere new','You are visiting a new city. What would you most like to do?',[
  ['Explore a place and find out how it developed','I'],['Meet local people and hear their stories','S'],['Photograph the city or make a travel video','A'],['Plan a route that fits the time and budget','C']]),
 q(9,'A useful challenge','You can improve one part of a company’s product. Where would you focus?',[
  ['Design a clearer, more inviting experience','A'],['Talk to customers about why they stop using it','S'],['Build support for a new campaign','E'],['Reduce wasted time or money in the process','C']]),
 q(10,'A day alongside someone','Whose work would you most like to experience for a day?',[
  ['Someone building robots','R'],['Someone studying wildlife','I'],['Someone making films','A'],['Someone growing a small business','E']]),
 q(11,'An unexpected response','A video you posted reaches far more people than expected. What interests you next?',[
  ['Understanding why people watched it','I'],['Deciding what to create next','A'],['Reading and responding to people’s reactions','S'],['Work out how to grow an audience around it','E']]),
 q(12,'Something stops working','A gadget at home has stopped working. Which part of the situation interests you?',[
  ['Understanding how the parts fit together','R'],['Finding evidence of what went wrong','I'],['Imagining a more useful design','A'],['Learning from someone who can repair it','S']]),
 q(13,'Making a festival happen','A student group is planning a festival. Which role appeals to you?',[
  ['Coordinate the stage team and get the setup done','E'],['Create posters, videos and decorations','A'],['Welcome guests and support volunteers','S'],['Manage schedules, budgets and registrations','C']]),
 q(14,'A box from the past','You find old letters and photographs. What would you want to do?',[
  ['Hear the personal stories behind them','S'],['Investigate the time and place they came from','I'],['Turn them into a documentary or exhibition','A'],['Organise a collection with clear records','C']]),
 q(15,'An app worth improving','You are invited to improve an app you use. What would you focus on?',[
  ['Listen to what frustrates its users','S'],['Explore a fresh visual design','A'],['Get support for a useful new feature','E'],['Investigate which features people actually use','I']]),
 q(16,'A weekend to learn','You have a weekend to learn something new. Which would you choose?',[
  ['Make something with my hands','R'],['Work through a mystery or difficult puzzle','I'],['Learn to plan an event and keep it running','C'],['Learn how to start a small business','E']]),
 q(17,'From idea to first step','A friend has an idea but is unsure how to begin. What would you enjoy helping with?',[
  ['Make a first version','R'],['Research whether the idea could work','I'],['Help people see why the idea is worth supporting','E'],['Create a clear plan with the next steps','C']]),
 q(18,'The café queue','A café has a long queue. Which question would you want to explore?',[
  ['What do customers enjoy about being here?','S'],['Could a different setup make service faster?','R'],['How could I get people to try a place like this?','E'],['Is there a pattern in when customers arrive?','C']]),
 q(19,'Behind the screen','Which part of the internet would you most like to understand?',[
  ['How websites and apps are built','R'],['How platforms choose what to show us','I'],['How creators develop their content','A'],['How an online business earns money','E']]),
 q(20,'A board game in progress','You join a team making a board game. What would you enjoy doing?',[
  ['Build and test the pieces','R'],['Design the story and appearance','A'],['Watch how people play and listen to their reactions','S'],['Make the rules, scoring and instructions clear','C']]),
 q(21,'Alongside a wildlife team','You can join a wildlife project for a day. Which contribution appeals to you?',[
  ['Help use cameras and tracking equipment','R'],['Observe and study animal behaviour','I'],['Build support for the team’s conservation project','E'],['Help explain the findings to local communities','S']]),
 q(22,'Something to get into','Which challenge would you choose for tomorrow?',[
  ['Build a working model from everyday objects','R'],['Find out why something unexpected happens','I'],['Turn scattered observations into a clear record','C'],['Persuade people to support a new idea','E']]),
 q(23,'A better way to learn','A school wants to improve its classes. What would you suggest first?',[
  ['More practical activities','R'],['More experiments and open questions','I'],['More discussion and shared learning','S'],['A clearer timetable and simpler organisation','C']]),
 q(24,'A day that felt worthwhile','At the end of a satisfying day, which thought would mean most to you?',[
  ['I made something work','R'],['I understood something that puzzled me','I'],['I created something original','A'],['I led a group from an idea to a finished project','E']])
];

export type Responses = Record<string,number>;
export const durationMs = 10*60*1000;
export const minimumAnswers = 18;
export function cleanResponses(raw:Responses):Responses {
 return Object.fromEntries(assessmentQuestions.filter(q=>Number.isInteger(raw[q.id])&&raw[q.id]>=0&&raw[q.id]<4).map(q=>[q.id,raw[q.id]]));
}
export function scoreResponses(raw:Responses) {
 const answers=cleanResponses(raw);
 const counts=Object.fromEntries(dimensions.map(d=>[d,0])) as Record<Dimension,number>;
 const opportunities={...counts};
 for(const q of assessmentQuestions) if(q.id in answers){for(const c of q.choices) opportunities[c.tag]++; counts[q.choices[answers[q.id]].tag]++;}
 const score=(d:Dimension)=>opportunities[d]?counts[d]/opportunities[d]:0;
 const ranked=[...dimensions].sort((a,b)=>score(b)-score(a)||dimensions.indexOf(a)-dimensions.indexOf(b));
 const eligible=Object.keys(answers).length>=minimumAnswers&&dimensions.every(d=>opportunities[d]>=8);
 const positive=ranked.filter(d=>counts[d]>0);
 const selected=positive.slice(0,3);
 if(positive[3]&&score(positive[3])===score(positive[2])) selected.push(positive[3]);
 const mixed=ranked.every(d=>score(d)===score(ranked[0]));
 const ties=positive.some((d,i)=>i>0&&score(d)===score(positive[i-1]));
 return {answers,counts,opportunities,ranked,selected,mixed,ties,eligible,answered:Object.keys(answers).length,score};
}
// Canonical entry-question IDs, all backed by existing public fields, people and activities.
export const recommendationPool:{id:string;tags:Dimension[]}[] = [
 {id:'movie-footsteps',tags:['A','R']},{id:'netflix',tags:['I','C']},
 {id:'sports-patterns',tags:['C','I']},{id:'game-rewards',tags:['E','C']},
 {id:'money-trail',tags:['C','I']},{id:'star-light',tags:['I','R']},
 {id:'ball-bounce',tags:['R','I']},{id:'clay-change',tags:['R','A']},
 {id:'cooking-change',tags:['R','S']},{id:'animal-groups',tags:['I','R']},
 {id:'game-dialogue',tags:['A','S']},{id:'game-story',tags:['A','E']},
 {id:'movie-script',tags:['A','C']},{id:'history-voices',tags:['S','I']},
 {id:'museum-stories',tags:['A','S']},{id:'maps-decide',tags:['C','I']},
 {id:'forest-return',tags:['S','R']},{id:'choices',tags:['I','E']},
 {id:'software-buying',tags:['E','S']},{id:'app-confusion',tags:['S','A']},
 {id:'food-picture',tags:['A','E']},{id:'wildlife-film',tags:['R','A']},
 {id:'birds-count',tags:['C','R']},{id:'community-records',tags:['S','C']}
];
export function recommend(raw:Responses,metadata:Record<string,{fieldId:string;category:string}>) {
 const result=scoreResponses(raw); if(!result.eligible)return [];
 const canonical=assessmentQuestions.map(q=>result.answers[q.id]??'').join('|');
 const hash=(s:string)=>[...s].reduce((n,c)=>(Math.imul(n,31)+c.charCodeAt(0))>>>0,17);
 const top=result.ranked.slice(0,2);
 const available=recommendationPool.filter(r=>metadata[r.id]);
 const affinity=(r:typeof available[number])=>r.tags.reduce((n,d)=>n+result.score(d),0);
 const ordered=[...available].sort((a,b)=>affinity(b)-affinity(a)||hash(canonical+a.id)-hash(canonical+b.id));
 const wildcard=[...available].filter(r=>r.tags.every(d=>!top.includes(d))).sort((a,b)=>hash(canonical+a.id)-hash(canonical+b.id))[0];
 const picked:typeof available=[]; const fields=new Set<string>(); const categories=new Set<string>();
 for(const diversity of [true,false])for(const r of ordered){
  if(picked.length===5)break;
  const m=metadata[r.id];if(r.id===wildcard?.id||m.fieldId===metadata[wildcard?.id||'']?.fieldId||fields.has(m.fieldId)||(diversity&&categories.has(m.category)))continue;
  picked.push(r);fields.add(m.fieldId);categories.add(m.category);
 }
 return [...picked.map(r=>({...r,unexpected:false})),...(wildcard?[{...wildcard,unexpected:true}]:[])];
}
export function remainingTime(startedAt:number,now:number,previous=durationMs) {
 // Monotonic across updates even if the wall clock is changed backwards.
 return Math.max(0,Math.min(previous,durationMs-Math.max(0,now-startedAt)));
}

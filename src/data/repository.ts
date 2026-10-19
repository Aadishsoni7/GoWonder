import {possibilities,activities,resources as originalResources,relationships} from './catalog';
import {recommendationNodes,recommendationLearning} from './recommendations';
import {recommendationPeople,recommendationResources} from './recommendation-people';
import {savedEvidence} from './saved-evidence';
import {peopleExtra} from './people-extra';
import {resourcesExtra} from './resources-extra';
import {questions,familiarWorlds} from './discovery';
import {learningById as savedLearning} from './learning';
import {expansionPeople,expansionNodes,expansionLearning} from './expansion';
export const learningById={...savedLearning,...expansionLearning,...recommendationLearning};
const resources=[...originalResources,...resourcesExtra,...recommendationResources];
import {peopleA} from './people-a';
import {peopleB} from './people-b';
import type {Person,Possibility} from './types';
const savedPeople:Person[]=[...peopleA,...peopleB,...peopleExtra,...expansionPeople,...recommendationPeople].filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i);
// Preserve the previously researched, direct connections. Broad suggestions never qualify.
const rechecked=['karan-arjun-singh','suresh-babu-pinachinnayagari','rikesh-thakrar','aishwarya-sridhar','harry-alisavakis','avani-lekhara','shruti-ghosh'];
export const people:Person[]=savedPeople.map(p=>({...p,connectedNodeIds:[...new Set([...p.connectedNodeIds,...(p.id==='aishwarya-sridhar'?['conservation-film']:[])])],verificationStatus:p.verificationStatus||(savedEvidence[p.id]?'verified':'needs_review'),evidenceUrls:p.evidenceUrls||savedEvidence[p.id]?.evidenceUrls||p.sourceUrls,evidenceType:p.evidenceType||'attributable practitioner profile or documented work',sourceVerifiedAt:rechecked.includes(p.id)?'2026-10-19':p.sourceVerifiedAt,verificationBasis:rechecked.includes(p.id)||p.sourceVerifiedAt==='2026-10-19'?'Primary evidence revisited on 19 October 2026':'Preserved direct relationship from saved research; link health not rechecked in this revision'}));
export const personById=Object.fromEntries(people.map(p=>[p.id,p]));
const searchAliases:Record<string,string[]>={'sales-engineering':['sales engineer','solutions engineer','presales','pre sales'],'b2b-sales':['B2B','business to business'],'b2c-sales':['B2C','business to consumer'],'forensic-accounting':['forensic accounts','financial investigation'],'thumbnail':['youtube thumbnail','thumbnail designer'],'ux':['user experience','UX design'],'ux-research':['user research'],'accounting':['ACCA','chartered accounting'],'foley':['foley artist','movie sound effects'],'sdr':['SDR','sales development representative'],'revops':['RevOps'],'game-economy-design':['game economy designer'],'creator-manager':['creator management','influencer manager'],'narrative-design':['game narrative','interactive storytelling']};
const migrated:Possibility[]=[...possibilities,...expansionNodes,...recommendationNodes].map(n=>({...n,resourceIds:learningById[n.id]?.resourceIds||n.resourceIds,aliases:[...n.aliases,...(searchAliases[n.id]||[])],peopleIds:people.filter(p=>p.verificationStatus==='verified'&&p.connectedNodeIds.includes(n.id)&&(savedEvidence[p.id]?.nodeIds.includes(n.id)||expansionPeople.some(e=>e.id===p.id&&e.connectedNodeIds.includes(n.id))||recommendationPeople.some(e=>e.id===p.id&&e.connectedNodeIds.includes(n.id))||p.id==='aishwarya-sridhar'&&n.id==='conservation-film')).map(p=>p.id)}));
const rawIndex=Object.fromEntries(migrated.map(n=>[n.id,n]));
const publicIds=new Set(migrated.filter(n=>n.nodeType==='world'||n.peopleIds.some(id=>people.find(p=>p.id===id)?.verificationStatus==='verified')).map(n=>n.id));
// Walk through unpublished intermediates so retained, evidenced descendants remain reachable.
function visibleDescendants(ids:string[],seen=new Set<string>()):string[]{return [...new Set(ids.flatMap(id=>{if(seen.has(id))return [];seen.add(id);return publicIds.has(id)?[id]:visibleDescendants(rawIndex[id]?.childIds||[],seen)}))]}
export const candidateRegistry=migrated.filter(n=>!publicIds.has(n.id));
export const allPossibilities:Possibility[]=migrated.filter(n=>publicIds.has(n.id)).map(n=>({...n,title:familiarWorlds.find(w=>w.id===n.id)?.title||n.title,childIds:visibleDescendants(n.childIds),relatedIds:n.relatedIds.filter(id=>publicIds.has(id)),intersectionIds:n.intersectionIds.filter(id=>publicIds.has(id))}));
export const questionFor=(id:string)=>questions[id]||'What happens behind the scenes?';
export const byId=Object.fromEntries(allPossibilities.map(n=>[n.id,n]));
for(const [parent,child] of [['games','play'],['create','photography'],['game-art','technical-art'],['wildlife','conservation-film'],['foley','game-audio'],['sport-shooting','performance-analysis'],['saas-sales','sales-engineering']])if(byId[parent]&&byId[child]&&!byId[parent].childIds.includes(child))byId[parent].relatedIds=[...new Set([...byId[parent].relatedIds,child])];
if(byId.sports)byId.sports.childIds=[...expansionNodes.filter(n=>n.nodeType==='world'&&n.id!=='science').map(n=>n.id),...byId.sports.childIds];
if(byId['sport-shooting'])byId['sport-shooting'].relatedIds.unshift('sports-science');
for(const id of ['technology','finance'])if(byId[id])byId[id].childIds.unshift('recommendation-systems');
if(byId['sports-data'])byId['sports-data'].relatedIds.unshift('data-science');
if(byId.business)byId.business.childIds=[...new Set(['b2b-sales',...byId.business.childIds])];
export const activityById=Object.fromEntries(activities.map(a=>[a.id,a]));
export const resourceById=Object.fromEntries(resources.map(r=>[r.id,r]));
export {relationships,activities,resources};
export const worldIds=['create','business','games','nature','technology','finance','sports','sound','photography','film','play','people','science'];
export const featured=['sales-engineering','wildlife','foley','technical-art','forensic-accounting','thumbnail','game-economy-design','conservation-technology'];
export function findPath(target:string):string[]{
 const queue=worldIds.filter(id=>byId[id]).map(id=>[id]);const seen=new Set<string>();
 while(queue.length){const path=queue.shift()!;const id=path.at(-1)!;if(id===target)return path;if(seen.has(id))continue;seen.add(id);byId[id]?.childIds.forEach(c=>queue.push([...path,c]));}return [target];
}
export const themes:Record<string,{label:string;color:string;pale:string;icon:string;shape:string}>={
 create:{label:'Create',color:'#c55c39',pale:'#fbe2cd',icon:'✳',shape:'petal'},business:{label:'Business',color:'#9b7315',pale:'#f8e8a9',icon:'↗',shape:'ticket'},
 games:{label:'Games',color:'#7251b6',pale:'#e6dcfa',icon:'⚄',shape:'pill'},play:{label:'Play',color:'#7251b6',pale:'#e6dcfa',icon:'♞',shape:'pill'},
 nature:{label:'Nature',color:'#44805c',pale:'#dfeecf',icon:'♧',shape:'leaf'},technology:{label:'Technology',color:'#27798a',pale:'#d2edef',icon:'⌘',shape:'cut'},
 finance:{label:'Numbers',color:'#4964a9',pale:'#dfe6fc',icon:'∑',shape:'ticket'},sports:{label:'Sports',color:'#c16b31',pale:'#f8e2c5',icon:'↝',shape:'pill'},
 sound:{label:'Sound & music',color:'#a24879',pale:'#f5dce9',icon:'♫',shape:'wave'},photography:{label:'Photography',color:'#b75e3b',pale:'#f5dfcc',icon:'▣',shape:'cut'},
 film:{label:'Film',color:'#925c97',pale:'#eddff0',icon:'▷',shape:'ticket'},people:{label:'People',color:'#775aa3',pale:'#e8def2',icon:'◎',shape:'petal'},
};
export const themeFor=(n?:Possibility)=>themes[n?.worldIds.find(w=>themes[w])||n?.id||'create']||themes.create;

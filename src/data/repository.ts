import {possibilities,activities,resources,relationships} from './catalog';
import {peopleA} from './people-a';
import {peopleB} from './people-b';
import type {Person,Possibility} from './types';
export const people:Person[]=[...peopleA,...peopleB].filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i);
export const personById=Object.fromEntries(people.map(p=>[p.id,p]));
const searchAliases:Record<string,string[]>={'sales-engineering':['sales engineer','solutions engineer','presales','pre sales'],'b2b-sales':['B2B','business to business'],'b2c-sales':['B2C','business to consumer'],'forensic-accounting':['forensic accounts','financial investigation'],'thumbnail':['youtube thumbnail','thumbnail designer'],'ux':['user experience','UX design'],'ux-research':['user research'],'accounting':['ACCA','chartered accounting'],'foley':['foley artist','movie sound effects'],'sdr':['SDR','sales development representative'],'revops':['RevOps'],'game-economy-design':['game economy designer'],'creator-manager':['creator management','influencer manager'],'narrative-design':['game narrative','interactive storytelling']};
export const allPossibilities:Possibility[]=possibilities.map(n=>({...n,aliases:[...n.aliases,...(searchAliases[n.id]||[])],peopleIds:people.filter(p=>p.connectedNodeIds.includes(n.id)).map(p=>p.id)}));
export const byId=Object.fromEntries(allPossibilities.map(n=>[n.id,n]));
export const activityById=Object.fromEntries(activities.map(a=>[a.id,a]));
export const resourceById=Object.fromEntries(resources.map(r=>[r.id,r]));
export {relationships,activities,resources};
export const worldIds=['create','business','games','nature','technology','finance','sports','sound','photography','film','play','people'];
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

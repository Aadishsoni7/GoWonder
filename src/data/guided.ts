import {allPossibilities,byId,personById,resourceById,learningById,questionFor,findPath} from './repository';
import {entryQuestions,questionById,questionForEntry} from './entrypoints';
export type Door={kind:'question'|'field';id:string;title:string;description:string};
export function fieldDoor(id:string):Door|null {
 const field=byId[id];if(!field)return null;const q=entryQuestions.find(q=>q.fieldId===id);
 return q?{kind:'question',id:q.id,title:q.title,description:q.explanation}:{kind:'field',id,title:field.nodeType==='world'?field.title:questionFor(id),description:field.shortDescription};
}
export function discoveryFor(kind:string,id:string){
 const person=kind==='person'?personById[id]:undefined;const question=kind==='question'?questionForEntry(id):undefined;
 const field=byId[person?.connectedNodeIds.find(id=>byId[id]?.nodeType==='possibility')||person?.connectedNodeIds.find(id=>byId[id])||question?.fieldId||id];if(!field)return null;
 const practitioners=field.peopleIds.map(id=>personById[id]).filter(p=>p?.verificationStatus==='verified'&&p.connectedNodeIds.includes(field.id));
 if(person&&practitioners.some(p=>p.id===person.id))practitioners.sort((a,b)=>Number(b.id===person.id)-Number(a.id===person.id));
 const path=learningById[field.id],media=field.resourceIds.map(id=>resourceById[id]).filter(r=>r&&/^https:\/\//.test(r.url)).filter((r,i,a)=>a.findIndex(x=>x.url===r.url)===i);const related:Door[]=[];
 const add=(door:Door|null)=>{if(door&&!related.some(r=>r.kind===door.kind&&r.id===door.id)&&!(door.kind==='question'&&door.id===question?.id)&&!(door.kind==='field'&&door.id===field.id))related.push(door)};
 for(const qid of question?.relatedQuestionIds||[]){const q=questionById[qid];if(q&&byId[q.fieldId])add({kind:'question',id:q.id,title:q.title,description:q.explanation})}
 for(const target of [...field.childIds,...field.relatedIds,...field.intersectionIds])add(fieldDoor(target));
 if(related.length<2)for(const parent of allPossibilities.filter(n=>n.childIds.includes(field.id)))add(fieldDoor(parent.id));
 return {field,question,practitioners,media,path,related,title:question?.title||questionFor(field.id),context:findPath(field.id).filter(id=>id!==field.id).map(id=>byId[id]).filter(Boolean)};
}
export function mapSelection(path:string){const parts=path.replace(/^map\/?/,'').split('/'),kind=parts[0],id=parts[1];if(kind==='subject')return {initial:'subject:'+id};if(kind==='question')return {initial:'question:'+id};if(kind==='field')return {initial:id};if(kind==='person'){const d=discoveryFor(kind,id);return {initial:d?.field.id,initialPerson:id}}if(kind==='subjects'||kind==='questions')return {initial:kind};return {initial:undefined};}
export function guidedRoute(mapPath:string){const value=mapPath.replace(/^map\/?/,'');return value&&value!=='start'?value:'subjects'}

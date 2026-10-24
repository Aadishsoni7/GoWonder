import {useEffect,useState} from 'react';
export type Reflection={planned?:boolean;levels?:number[];done?:boolean;note?:string;feeling?:string;parts?:string[];feedback?:string};
export type SavedRoute={id:string;title:string;ids:string[]};
export type CuriosityState={saved:string[];surprised:string[];people:string[];questions:string[];routes:SavedRoute[];trail:string[];notes:Record<string,Reflection>};
function safeRead(key:string):any{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
const strings=(x:unknown):string[]=>Array.isArray(x)?x.filter(v=>typeof v==='string'):[];
function initial():CuriosityState{const old=safeRead('gowonder-v1')||safeRead('offbeat-v2');return {saved:strings(old?.saved??safeRead('offbeat-saved')),surprised:strings(old?.surprised),people:strings(old?.people),questions:strings(old?.questions),routes:Array.isArray(old?.routes)?old.routes.filter((r:any)=>r&&typeof r.id==='string'&&Array.isArray(r.ids)):[],trail:strings(old?.trail),notes:old?.notes&&typeof old.notes==='object'?old.notes:safeRead('offbeat-notes')||{}}}
export function useCuriosity(){const[state,setState]=useState(initial);const[storageError,setStorageError]=useState(false);useEffect(()=>{try{localStorage.setItem('gowonder-v1',JSON.stringify(state));setStorageError(false)}catch{setStorageError(true)}},[state]);
 const toggle=(key:'saved'|'surprised'|'people'|'questions',id:string)=>setState(s=>({...s,[key]:s[key].includes(id)?s[key].filter(x=>x!==id):[...s[key],id]}));
 const reflect=(id:string,value:Reflection)=>setState(s=>({...s,notes:{...s.notes,[id]:{...s.notes[id],...value}}}));
 const visit=(id:string)=>setState(s=>({...s,trail:s.trail.at(-1)===id?s.trail:[...s.trail.slice(-99),id]}));
 const saveRoute=(ids:string[],title:string)=>setState(s=>({...s,routes:[...s.routes.filter(r=>r.id!==ids.join('/')),{id:ids.join('/'),title,ids}]}));
 return {state,toggle,reflect,visit,saveRoute,storageError,setState};
}
export type CuriosityStore=ReturnType<typeof useCuriosity>;

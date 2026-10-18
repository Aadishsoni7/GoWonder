import {useEffect,useState} from 'react';
export type Reflection={done?:boolean;note?:string;feeling?:string;parts?:string[]};
export type CuriosityState={saved:string[];surprised:string[];people:string[];trail:string[];notes:Record<string,Reflection>};
function safeRead(key:string):any{try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
const strings=(x:unknown):string[]=>Array.isArray(x)?x.filter(v=>typeof v==='string'):[];
function initial():CuriosityState{const old=safeRead('offbeat-v2');return {saved:strings(old?.saved??safeRead('offbeat-saved')),surprised:strings(old?.surprised),people:strings(old?.people),trail:strings(old?.trail),notes:old?.notes&&typeof old.notes==='object'?old.notes:safeRead('offbeat-notes')||{}}}
export function useCuriosity(){const[state,setState]=useState(initial);const[storageError,setStorageError]=useState(false);useEffect(()=>{try{localStorage.setItem('offbeat-v2',JSON.stringify(state));setStorageError(false)}catch{setStorageError(true)}},[state]);
 const toggle=(key:'saved'|'surprised'|'people',id:string)=>setState(s=>({...s,[key]:s[key].includes(id)?s[key].filter(x=>x!==id):[...s[key],id]}));
 const reflect=(id:string,value:Reflection)=>setState(s=>({...s,notes:{...s.notes,[id]:{...s.notes[id],...value}}}));
 const visit=(id:string)=>setState(s=>({...s,trail:s.trail.at(-1)===id?s.trail:[...s.trail.slice(-99),id]}));
 return {state,toggle,reflect,visit,storageError,setState};
}
export type CuriosityStore=ReturnType<typeof useCuriosity>;

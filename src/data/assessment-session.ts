import {assessmentQuestions,durationMs,remainingTime,type Responses} from './assessment';
export type Session={phase:'intro'|'active'|'result';answers:Responses;index:number;startedAt:number;startedMonotonic:number;remaining:number;expired:boolean};
export type ClockReading={wall:number;monotonic:number};
export const emptySession=():Session=>({phase:'intro',answers:{},index:0,startedAt:0,startedMonotonic:0,remaining:durationMs,expired:false});
export function beginSession(clock:ClockReading):Session{return {...emptySession(),phase:'active',startedAt:clock.wall,startedMonotonic:clock.monotonic}}
export function tickSession(s:Session,clock:ClockReading):Session{
 if(s.phase!=='active')return s;
 const now=Math.max(clock.wall,s.startedAt+clock.monotonic-s.startedMonotonic);
 const remaining=remainingTime(s.startedAt,now,s.remaining);
 return {...s,remaining,phase:remaining===0?'result':'active',expired:remaining===0};
}
export function chooseAnswer(s:Session,index:number,clock:ClockReading):Session{
 const current=tickSession(s,clock);if(current.phase!=='active'||!Number.isInteger(index)||index<0||index>3)return current;
 return {...current,answers:{...current.answers,[assessmentQuestions[current.index].id]:index},index:Math.min(current.index+1,23),phase:current.index===23?'result':'active'};
}
export function moveQuestion(s:Session,delta:number):Session{return s.phase==='active'?{...s,index:Math.max(0,Math.min(23,s.index+delta))}:s}

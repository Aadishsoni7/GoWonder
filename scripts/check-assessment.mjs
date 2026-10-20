import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
const cache=new Map();
function moduleUrl(file){file=path.resolve(file);if(cache.has(file))return cache.get(file);let js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;js=js.replace(/from\s*['"](\.[^'"]+)['"]/g,(_,name)=>'from '+JSON.stringify(moduleUrl(path.resolve(path.dirname(file),name+'.ts'))));const url='data:text/javascript;base64,'+Buffer.from(js).toString('base64');cache.set(file,url);return url;}
const model=await import(moduleUrl('src/data/assessment.ts'));
const sessionModel=await import(moduleUrl('src/data/assessment-session.ts'));
const {questionById}=await import(moduleUrl('src/data/entrypoints.ts'));
const repo=await import(moduleUrl('src/data/repository.ts'));
const {dimensions,assessmentQuestions:qs,scoreResponses:score,recommend,remainingTime,durationMs}=model;
assert.equal(qs.length,24);assert.equal(new Set(qs.map(q=>q.id)).size,24);
const opportunities=Object.fromEntries(dimensions.map(d=>[d,0]));
for(const q of qs){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices.map(c=>c.tag)).size,4);for(const c of q.choices){assert(dimensions.includes(c.tag));opportunities[c.tag]++;assert(c.text.length>5)}}
assert.deepEqual(Object.values(opportunities),[16,16,16,16,16,16]);
const slots=dimensions.flatMap(d=>[d,d,d,d]),owners=Array(24).fill(-1);
function placeQuestion(index,seen=new Set()){for(let slot=0;slot<24;slot++){if(seen.has(slot)||!qs[index].choices.some(c=>c.tag===slots[slot]))continue;seen.add(slot);if(owners[slot]===-1||placeQuestion(owners[slot],seen)){owners[slot]=index;return true}}return false}
for(let i=0;i<24;i++)assert(placeQuestion(i));
const tied=Object.fromEntries(owners.map((questionIndex,slot)=>[qs[questionIndex].id,qs[questionIndex].choices.findIndex(c=>c.tag===slots[slot])]));
assert(score(tied).mixed);assert.deepEqual(Object.values(score(tied).counts),[4,4,4,4,4,4]);assert.equal(score(tied).selected.length,4);assert.deepEqual(score(tied).ranked,dimensions);
assert(!score({}).eligible);assert.deepEqual(recommend({},questionById),[]);
assert.equal(score({q1:99,q2:-1,q3:1.2,q4:NaN,extra:0}).answered,0);
assert(!score(Object.fromEntries(qs.slice(0,17).map(q=>[q.id,0]))).eligible);
assert(score(Object.fromEntries(qs.slice(0,18).map(q=>[q.id,0]))).eligible);
assert.equal(remainingTime(1000,1000),durationMs);assert.equal(remainingTime(1000,601000),0);assert.equal(remainingTime(1000,999999),0);assert.equal(remainingTime(1000,500,900),900);
const {beginSession,tickSession,chooseAnswer,moveQuestion,emptySession}=sessionModel;
const startClock={wall:10000,monotonic:500};
let running=beginSession(startClock);
running=chooseAnswer(running,0,{wall:11000,monotonic:1500});
running=moveQuestion(running,-1);assert.equal(running.answers.q1,0);
running=chooseAnswer(running,2,{wall:12000,monotonic:2500});assert.equal(running.answers.q1,2);assert.equal(Object.keys(running.answers).length,1);
assert.equal(tickSession(running,{wall:1,monotonic:300500}).remaining,300000,'Backward wall-clock change must not extend a session');
const expired=tickSession(running,{wall:610000,monotonic:600500});assert.equal(expired.phase,'result');assert(expired.expired);assert.deepEqual(expired.answers,{q1:2});assert(!score(expired.answers).eligible);
assert.deepEqual(chooseAnswer(expired,1,{wall:610001,monotonic:600501}),expired,'No answers after deadline');
const backgroundExpired=tickSession(running,{wall:900000,monotonic:900500});assert.equal(backgroundExpired.remaining,0,'Suspended or backgrounded tab catches up');
let partial=beginSession(startClock);for(let i=0;i<18;i++)partial=chooseAnswer(partial,i%4,{wall:12000+i,monotonic:2500+i});partial=tickSession(partial,{wall:610000,monotonic:600500});assert.equal(partial.phase,'result');assert(partial.expired);assert(score(partial.answers).eligible);assert.equal(Object.keys(partial.answers).length,18);
let full=beginSession(startClock);for(let i=0;i<24;i++)full=chooseAnswer(full,i%4,{wall:12000+i,monotonic:2500+i});assert.equal(full.phase,'result');assert(!full.expired);assert.equal(score(full.answers).answered,24);assert.deepEqual(emptySession().answers,{});assert.equal(beginSession({wall:700000,monotonic:700500}).remaining,durationMs);
for(const r of model.recommendationPool){const q=questionById[r.id];assert(q,'real question '+r.id);const field=repo.byId[q.fieldId];assert(field,'real field '+q.fieldId);assert(field.activityId||repo.learningById[field.id]?.levels.length===3);assert(field.peopleIds.some(id=>repo.personById[id]?.verificationStatus==='verified'&&repo.personById[id].connectedNodeIds.includes(field.id)));}
let seed=90413;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return (seed>>>16)%4};
const fixtures=[...dimensions.map(d=>Object.fromEntries(qs.map(q=>[q.id,Math.max(0,q.choices.findIndex(c=>c.tag===d))]))),...Array.from({length:500},()=>Object.fromEntries(qs.map(q=>[q.id,random()]))),Object.fromEntries(qs.slice(0,18).map(q=>[q.id,0]))];
for(const answers of fixtures){const s=score(answers),rr=recommend(answers,questionById);assert(s.eligible);assert.equal(rr.length,6);assert.equal(new Set(rr.map(r=>r.id)).size,6);assert.equal(new Set(rr.map(r=>questionById[r.id].fieldId)).size,6);assert(new Set(rr.map(r=>questionById[r.id].category)).size>=3);assert.equal(rr.filter(r=>r.unexpected).length,1);assert(rr.find(r=>r.unexpected).tags.every(t=>!s.ranked.slice(0,2).includes(t)));assert.deepEqual(rr,recommend({...answers},questionById));assert.equal(Object.values(s.counts).reduce((a,b)=>a+b),s.answered);}
// Stable, equal treatment of ties; changing an earlier answer replaces its point.
const before=Object.fromEntries(qs.map(q=>[q.id,0]));const after={...before,q1:1};assert.equal(score(after).counts.R,score(before).counts.R-1);assert.equal(score(after).counts.A,score(before).counts.A+1);
assert.equal(repo.allPossibilities.filter(n=>n.nodeType==='possibility').length,150);assert.equal(repo.people.length,110);
const ui=fs.readFileSync('src/components/PersonalDiscovery.tsx','utf8');assert(!/localStorage|sessionStorage|fetch\(/.test(ui),'No answer persistence or upload');
console.log('Assessment checks passed: 24 questions, 96 mapped choices, 16 opportunities per direction, 507 recommendation fixtures, coverage thresholds, answer edits, timer boundaries, existing content retained.');

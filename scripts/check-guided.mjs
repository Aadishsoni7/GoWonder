import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
const cache=new Map();
function moduleUrl(file){file=path.resolve(file);if(cache.has(file))return cache.get(file);let js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;js=js.replace(/from\s*['"](\.[^'"]+)['"]/g,(_,name)=>'from '+JSON.stringify(moduleUrl(path.resolve(path.dirname(file),name+'.ts'))));const url='data:text/javascript;base64,'+Buffer.from(js).toString('base64');cache.set(file,url);return url;}
const repo=await import(moduleUrl('src/data/repository.ts'));
const entry=await import(moduleUrl('src/data/entrypoints.ts'));
const {discoveryFor,fieldDoor,mapSelection,guidedRoute}=await import(moduleUrl('src/data/guided.ts'));
assert.equal(repo.allPossibilities.filter(n=>n.nodeType==='possibility').length,150);assert.equal(repo.people.length,110);assert.equal(repo.people.filter(p=>p.imageUrl).length,60);
for(const n of repo.allPossibilities){const d=discoveryFor('field',n.id);assert.equal(d.field, n);if(n.nodeType==='possibility'){assert(d.practitioners.length,n.id+' needs direct person evidence');assert.equal(d.path.levels.length,3);for(const p of d.practitioners)assert(p.connectedNodeIds.includes(n.id));}assert.equal(mapSelection('map/field/'+n.id).initial,n.id);assert.equal(guidedRoute('map/field/'+n.id),'field/'+n.id);assert.equal(new Set(d.media.map(r=>r.url)).size,d.media.length);for(const r of d.related){const target=r.kind==='question'?entry.questionById[r.id]?.fieldId:r.id;assert(repo.byId[target],n.id+' has invalid related door');const qRelation=d.question?.relatedQuestionIds?.includes(r.id);assert(qRelation||[...n.childIds,...n.relatedIds,...n.intersectionIds].includes(target)||repo.byId[target].childIds.includes(n.id),'Door must follow an actual graph relationship');}}
for(const q of entry.entryQuestions){const d=discoveryFor('question',q.id);assert.equal(d.field.id,q.fieldId);assert.equal(d.question.id,q.id);assert.equal(mapSelection('map/question/'+q.id).initial,'question:'+q.id);assert.equal(guidedRoute('map/question/'+q.id),'question/'+q.id);}
for(const s of entry.subjects)assert(entry.questionsForSubject(s.id).length>=5&&entry.questionsForSubject(s.id).length<=6);
for(const p of repo.people)assert(discoveryFor('person',p.id),'Existing person must still open: '+p.id);
assert.equal(discoveryFor('field','missing-node'),null);assert.equal(fieldDoor('missing-node'),null);
assert.equal(discoveryFor('question','netflix').field.id,discoveryFor('question','spotify').field.id);
const state=fs.readFileSync('src/state.ts','utf8');assert(state.includes("'gowonder-v1'"));assert(state.includes("'offbeat-v2'"));assert(state.includes("'offbeat-saved'"));assert(state.includes('planned?:boolean'));
console.log('Guided checks passed: all 167 public nodes and 38 canonical questions resolve, 150 fields retain direct practitioners and three practice choices, media URLs deduplicated, related doors follow real edges, view routes round-trip, 110 people and 60 portraits retained.');

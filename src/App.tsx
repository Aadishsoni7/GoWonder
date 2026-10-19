import{useState,useEffect}from'react';
import{Heart,Compass}from'lucide-react';
import{Brand}from'./components/Brand';
import{WonderHome}from'./components/WonderHome';
import{EntryLibrary}from'./components/EntryLibrary';
import{DiscoveryCanvas}from'./components/DiscoveryCanvas';
import{PeopleDirectory}from'./components/PeopleDirectory';
import{CuriosityNotebook}from'./components/CuriosityNotebook';
import{byId,personById,candidateRegistry}from'./data/repository';
import{entryQuestions,questionForEntry,subjects}from'./data/entrypoints';
import{useCuriosity}from'./state';
type Page='home'|'map'|'notebook'|'people'|'subjects'|'questions';
export default function App(){const[page,setPage]=useState<Page>('home'),[initial,setInitial]=useState<string>(),[initialPerson,setInitialPerson]=useState<string>(),[subject,setSubject]=useState<string>(),[mapKey,setMapKey]=useState(0),[archived,setArchived]=useState('');const store=useCuriosity();
 function applyRoute(){const[kind,id]=window.location.hash.slice(1).split('/');setInitial(undefined);setInitialPerson(undefined);setSubject(undefined);setArchived('');if(kind==='question'&&(questionForEntry(id)||byId[id])){setInitial('question:'+id);setPage('map');setMapKey(k=>k+1)}else if(kind==='field'&&byId[id]){setInitial(id);store.visit(id);setPage('map');setMapKey(k=>k+1)}else if(kind==='person'&&personById[id]){setInitial(personById[id].connectedNodeIds.find(x=>byId[x]));setInitialPerson(id);setPage('map');setMapKey(k=>k+1)}else if(kind==='subject'&&subjects.some(s=>s.id===id)){setSubject(id);setPage('subjects')}else if(kind==='map'){setPage('map');setMapKey(k=>k+1)}else if(['people','notebook','subjects','questions'].includes(kind))setPage(kind as Page);else{setPage('home');if(kind==='field'&&candidateRegistry.some(n=>n.id===id))setArchived(candidateRegistry.find(n=>n.id===id)!.title)}window.scrollTo(0,0)}
 useEffect(()=>{applyRoute();window.addEventListener('hashchange',applyRoute);return()=>window.removeEventListener('hashchange',applyRoute)},[]);
 function navigate(route:string){if(window.location.hash.slice(1)===route)applyRoute();else window.location.hash=route}
 function go(id:string){navigate('field/'+id)}function ask(id:string){navigate('question/'+id)}function person(id:string){navigate('person/'+id)}function home(){navigate('')}
 function surprise(){const ids=entryQuestions.filter(q=>byId[q.fieldId]).map(q=>q.id);let previous='';try{previous=sessionStorage.getItem('gowonder-last-surprise')||''}catch{}const choices=ids.filter(id=>id!==previous);const id=choices[Math.floor(Math.random()*choices.length)]||ids[0];try{sessionStorage.setItem('gowonder-last-surprise',id)}catch{}ask(id)}
 return <><header className="site-header wonder-header"><Brand onClick={home}/><nav aria-label="Main navigation"><button onClick={()=>navigate('questions')}>Explore questions</button><button onClick={()=>navigate('people')}>People</button></nav><button className="mobile-people" onClick={()=>navigate('people')}>People</button><button className="notebook-nav" onClick={()=>navigate('notebook')} aria-label="My discoveries"><Heart size={18}/><span>My discoveries</span>{store.state.saved.length>0&&<b>{store.state.saved.length}</b>}</button></header>
 {archived&&<div className="editorial-notice" role="status">{archived} is still being checked. Your saved notes are kept while we find directly relevant human evidence.</div>}
 {page==='home'&&<WonderHome onSubjects={()=>navigate('subjects')} onQuestions={()=>navigate('questions')} onQuestion={ask} onSurprise={surprise} onPerson={person}/>}
 {(page==='subjects'||page==='questions')&&<EntryLibrary key={subject||page} mode={page} subjectId={subject} onSubject={id=>navigate('subject/'+id)} onQuestion={ask} onBack={()=>navigate(subject?'subjects':'')} store={store}/>}
 {page==='map'&&<DiscoveryCanvas key={mapKey} initial={initial} initialPerson={initialPerson} onHome={home} store={store}/>}
 {page==='people'&&<PeopleDirectory onPerson={person}/>}
 {page==='notebook'&&<CuriosityNotebook store={store} onGo={go} onPerson={person} onQuestion={ask}/>}
 {page!=='map'&&<footer className="wonder-footer"><Brand onClick={home}/><p>Come with something you know.<br/>Leave with something you didn’t know existed.</p><div><a href="./credits.html" target="_blank" rel="noreferrer">Image credits ↗</a><button onClick={()=>navigate('questions')}><Compass size={17}/> Keep wondering</button></div></footer>}
 {store.storageError&&<div className="storage-notice" role="status">Saving is unavailable in this browser. You can still explore GoWonder.</div>}</>
}

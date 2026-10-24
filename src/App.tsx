import {useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import {Bookmark,Compass,Map,ArrowLeft,ArrowRight} from 'lucide-react';
import {CreativeAtmosphere} from './components/CreativeAtmosphere';
import {DiscoveryCanvas,type MapSnapshot} from './components/DiscoveryCanvas';
import {GuidedHome} from './components/GuidedHome';
import {GuidedDiscovery} from './components/GuidedDiscovery';
import {EntryLibrary} from './components/EntryLibrary';
import {PeopleDirectory} from './components/PeopleDirectory';
import {CuriosityNotebook} from './components/CuriosityNotebook';
import {PersonalDiscovery,useDiscoverySession} from './components/PersonalDiscovery';
import {discoveryFor,mapSelection,guidedRoute} from './data/guided';
import {subjects} from './data/entrypoints';
import {useCuriosity} from './state';
import './discovery.css';
import './guided.css';
const currentRoute=()=>window.location.hash.slice(1);
export default function App(){
 const [route,setRoute]=useState(currentRoute);const store=useCuriosity(),discovery=useDiscoverySession();
 const lastRoute=useRef(route),restore=useRef(false),mapSnapshot=useRef<MapSnapshot|undefined>(undefined);
 const scrolls=useRef<Record<string,number>>({});
 const snapshot=useCallback((value:MapSnapshot)=>{mapSnapshot.current=value},[]);
 const navigate=useCallback((next:string,restorePrevious=false)=>{scrolls.current[currentRoute()]=window.scrollY;restore.current=restorePrevious;if(currentRoute()!==next)window.history.pushState({...window.history.state,gwBack:true},'','#'+next);lastRoute.current=next;setRoute(next);if(!restorePrevious)window.scrollTo(0,0)},[]);
 useEffect(()=>{window.history.scrollRestoration='manual';if(!window.history.state?.gwBack)window.history.replaceState({...window.history.state,gwBack:false},'');
  const changed=()=>{const next=currentRoute();if(next===lastRoute.current)return;scrolls.current[lastRoute.current]=window.scrollY;restore.current=true;lastRoute.current=next;setRoute(next)};
  window.addEventListener('popstate',changed);window.addEventListener('hashchange',changed);return()=>{window.removeEventListener('popstate',changed);window.removeEventListener('hashchange',changed);window.history.scrollRestoration='auto'};
 },[]);
 useLayoutEffect(()=>{window.scrollTo(0,restore.current?(scrolls.current[route]||0):0);restore.current=false},[route]);
 const [kind,id]=route.split('/');const mapMode=kind==='map',selection=mapSelection(route);
 const detail=['question','field','person'].includes(kind);const validSubject=kind==='subject'&&subjects.some(s=>s.id===id);
 useEffect(()=>{if(detail){const d=discoveryFor(kind,id);if(d?.field.nodeType==='possibility')store.visit(d.field.id)}},[route]);
 const back=()=>window.history.state?.gwBack?window.history.back():navigate('subjects');
 const goMap=()=>navigate('map/'+(['question','field','person','subject'].includes(kind)?route:'subjects'));
 const mapResume=mapSnapshot.current?.focus===(selection.initial||'start')?mapSnapshot.current:undefined;
 const notebookCount=store.state.saved.length+store.state.questions.length+store.state.people.length+Object.values(store.state.notes).filter(n=>n.planned).length+store.state.routes.length;
 return <><CreativeAtmosphere/><header className="site-header guided-site-header"><button className="brand" aria-label="GoWonder home" onClick={()=>navigate('')}><span>✳</span>GoWonder<span className="brand-period">.</span></button><nav aria-label="Main navigation"><button onClick={()=>navigate('subjects')} aria-current={kind==='subjects'||validSubject?'page':undefined}>Explore</button><button onClick={()=>navigate('people')}>People</button><button aria-label="Map view" onClick={()=>navigate('map')}><Map size={16}/><span>Map view</span></button></nav><button className="notebook-nav" aria-label="Saved discoveries" onClick={()=>navigate('notebook')}><Bookmark size={18}/><span>Saved discoveries</span>{notebookCount>0&&<b>{notebookCount}</b>}</button></header>
 {kind!=='discovery'&&discovery.session.phase!=='intro'&&<div className="discovery-resume"><span>{discovery.session.phase==='active'?'Your optional interest check is still running.':'Your interest check is here for this visit.'}</span><button onClick={()=>navigate('discovery')}>Return to it ↗</button></div>}
 {!route&&<GuidedHome navigate={navigate}/>}
 {(kind==='subjects'||kind==='questions'||validSubject)&&<EntryLibrary key={route} mode={kind==='questions'?'questions':'subjects'} subjectId={validSubject?id:undefined} onSubject={id=>navigate('subject/'+id)} onQuestion={id=>navigate('question/'+id)} onBack={()=>navigate(validSubject?'subjects':'')} store={store}/>}
 {detail&&<GuidedDiscovery key={route} kind={kind} id={id} store={store} navigate={navigate} onBack={back} onMap={goMap}/>}
 {mapMode&&<><div className="map-mode-bar"><button onClick={()=>navigate(guidedRoute(currentRoute()),true)}><ArrowLeft size={16}/> Guided view</button><span>The same content, with its connections.</span></div><DiscoveryCanvas key={route} store={store} initial={selection.initial} initialPerson={selection.initialPerson} resume={mapResume} onSnapshot={snapshot} onHome={()=>navigate('')}/></>}
 {kind==='people'&&<PeopleDirectory onPerson={id=>navigate('person/'+id)}/>}
 {kind==='notebook'&&<div data-clarity-mask="true"><CuriosityNotebook store={store} onGo={id=>navigate('field/'+id)} onPerson={id=>navigate('person/'+id)} onQuestion={id=>navigate('question/'+id)}/></div>}
 {kind==='discovery'&&<div data-clarity-mask="true"><PersonalDiscovery controller={discovery} store={store} onQuestion={id=>navigate('question/'+id)} onExit={()=>navigate('questions')}/></div>}
 {route&&!detail&&!mapMode&&!['subjects','questions','people','notebook','discovery'].includes(kind)&&!validSubject&&<main className="guided-missing"><h1>Let’s find a starting point.</h1><p>This link doesn’t match a published discovery. Your saved notes are still here.</p><button onClick={()=>navigate('subjects')}>Choose a subject <ArrowRight size={18}/></button></main>}
 {!mapMode&&<footer><button className="brand" onClick={()=>navigate('')}>✳ GoWonder.</button><p>There’s more out there.</p><a href="./credits.html" target="_blank" rel="noreferrer">Photo credits ↗</a><button onClick={()=>navigate('questions')}><Compass size={17}/> Pick another question</button></footer>}
 {store.storageError&&<div className="storage-notice" role="status">Browser storage is unavailable. Your discoveries will last for this visit.</div>}</>
}

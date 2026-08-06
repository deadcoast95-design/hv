const KEY='hausverwaltung_pwa_v7';
const OLD_KEYS=['hausverwaltung_pwa_v6','hausverwaltung_pwa_v5','hausverwaltung_pwa_v4','hausverwaltung_pwa_v3','hausverwaltung_pwa_v2','hausverwaltung_pwa'];
const categories=['Einzahlung Eigentümer','Kredit','Strom','Wasser','Internet','Versicherung','Grundsteuer','Müll','Wartung','Reparatur','Rücklage','Sanierung','Sonstiges'];
const seed={
 settings:{name:'Unsere Immobilien',startBalance:0,minimumReserve:5000,monthlyReserve:600},
 owners:[{id:1,name:'Dmitrij',ownershipShare:33.33,paymentShare:33.33,role:'Technik / Verwaltung',personType:'Eigentümer',active:true,propertyIds:[1,2]},{id:2,name:'Freundin',ownershipShare:33.33,paymentShare:33.33,role:'Finanzen / Verträge',personType:'Eigentümer',active:true,propertyIds:[1,2]},{id:3,name:'Schwager',ownershipShare:33.34,paymentShare:33.34,role:'Abstimmung / Grundstück',personType:'Eigentümer',active:true,propertyIds:[1,2]}],
 properties:[{id:1,name:'Haus 1',address:'',area:159,usage:'Eigennutzung',photo:''},{id:2,name:'Haus 2',address:'',area:152,usage:'Mietfreie Überlassung',photo:''}],
 loan:{bank:'',original:0,remaining:0,interest:0,monthlyPayment:0,startDate:'2024-01-01',fixedUntil:'2034-01-01',extraPayment:0,autoCalculate:true,balanceDate:''},
 costPlans:[{id:1,category:'Kredit',name:'Kreditrate',propertyId:'all',amount:0,interval:'monthly',note:'',splitCount:3},{id:2,category:'Versicherung',name:'Gebäudeversicherung',propertyId:'all',amount:0,interval:'yearly',note:'',splitCount:3},{id:3,category:'Grundsteuer',name:'Grundsteuer',propertyId:'all',amount:0,interval:'quarterly',note:'',splitCount:3},{id:4,category:'Strom',name:'Strom Haus 1',propertyId:1,amount:0,interval:'monthly',note:'',splitCount:3},{id:5,category:'Strom',name:'Strom Haus 2',propertyId:2,amount:0,interval:'monthly',note:'',splitCount:3},{id:6,category:'Wasser',name:'Wasser / Abwasser',propertyId:'all',amount:0,interval:'quarterly',note:'',splitCount:3},{id:7,category:'Internet',name:'Internet',propertyId:'all',amount:0,interval:'monthly',note:'',splitCount:3}],
 transactions:[],wasteDates:[],tasks:[],maintenance:[{id:1,title:'Wärmepumpe warten',propertyId:1,due:'',intervalMonths:12,owner:'Gemeinsam',cost:0,status:'Offen'}],reserves:[{id:1,title:'Dach',propertyId:'all',target:30000,saved:0,year:2035},{id:2,title:'Fassade',propertyId:'all',target:20000,saved:0,year:2027},{id:3,title:'Keller / Sockel',propertyId:'all',target:10000,saved:0,year:2027}]
};
let state=load();
let deferredPrompt=null;
let activePlanningTab='tasks';
let propertyPhotoData='';
let calendarCursor=new Date();
calendarCursor.setDate(1);
let lastSaveTime=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function clone(x){return JSON.parse(JSON.stringify(x))}
function migrate(data){
 const d={...clone(seed),...data};d.settings={...seed.settings,...(data.settings||{})};d.loan={...seed.loan,...(data.loan||{})};
 if(d.loan.autoCalculate===undefined)d.loan.autoCalculate=true;
 if(!d.loan.balanceDate&&Number(d.loan.remaining)>0)d.loan.balanceDate=new Date().toISOString().slice(0,10);
 d.owners=(Array.isArray(data.owners)?data.owners:clone(seed.owners)).map(x=>({...x,propertyIds:Array.isArray(x.propertyIds)?x.propertyIds.map(String):statePropertyFallback(x)}));
 d.properties=(Array.isArray(data.properties)?data.properties:clone(seed.properties)).map(x=>({...x,photo:x.photo||''}));
 d.transactions=Array.isArray(data.transactions)?data.transactions:[];
 d.tasks=(data.tasks||[]).map(x=>({...x,propertyId:x.propertyId??'all'}));
 d.maintenance=(data.maintenance||[]).map(x=>({...x,propertyId:x.propertyId??'all',intervalMonths:x.intervalMonths||12,cost:Number(x.cost)||0}));
 d.reserves=(data.reserves||[]).map(x=>({...x,propertyId:x.propertyId??'all'}));
 d.costPlans=(Array.isArray(data.costPlans)?data.costPlans:clone(seed.costPlans)).map(x=>({...x,splitCount:Math.min(5,Math.max(1,Number(x.splitCount)||3))}));
 d.wasteDates=Array.isArray(data.wasteDates)?data.wasteDates.map(x=>({...x,type:x.type||'Restmüll',date:x.date||'',note:x.note||''})):[];
 return d
}
function statePropertyFallback(){return ['1','2']}
function load(){try{let raw=localStorage.getItem(KEY);if(!raw){for(const k of OLD_KEYS){raw=localStorage.getItem(k);if(raw)break}}return migrate(raw?JSON.parse(raw):clone(seed))}catch{return clone(seed)}}
function save(){
 try{
  localStorage.setItem(KEY,JSON.stringify(state));
  lastSaveTime=new Date();
  updateLocalStatus('Gespeichert');
  render();
 }catch(error){
  console.error('Lokales Speichern fehlgeschlagen',error);
  updateLocalStatus('Speichern fehlgeschlagen',true);
  alert('Die Daten konnten nicht lokal gespeichert werden. Bitte zuerst eine Datensicherung exportieren.');
 }
}
function updateLocalStatus(text='Lokal gespeichert',isError=false){
 const el=$('#localStatus');if(!el)return;
 el.textContent=text+(lastSaveTime&&!isError?' · '+lastSaveTime.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}):'');
 el.classList.toggle('status-error',Boolean(isError));
}
function eur(n){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(n)||0)}
function dateDE(v){if(!v)return 'ohne Termin';return new Date(v+'T12:00:00').toLocaleDateString('de-DE')}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function sum(type){return state.transactions.filter(x=>x.type===type).reduce((a,b)=>a+Number(b.amount),0)}
function balance(){return Number(state.settings.startBalance)+sum('Einnahme')-sum('Ausgabe')}
function intervalFactor(i){return {monthly:12,fiveyearly:5,quarterly:4,semiannual:2,yearly:1}[i]||12}
function costYearly(x){return Number(x.amount||0)*intervalFactor(x.interval)}
function costMonthly(x){return costYearly(x)/12}
function plannedCostMonthly(){return state.costPlans.reduce((a,x)=>a+costMonthly(x),0)}
function plannedMonthly(){return plannedCostMonthly()+Number(state.settings.monthlyReserve||0)}
function activeOwnersList(){return state.owners.filter(x=>x.active!==false)}
function activePaymentShareTotal(){return activeOwnersList().reduce((a,x)=>a+Number(x.paymentShare||0),0)}
function eligibleOwnersForCost(cost){
 let owners=activeOwnersList();
 if(cost.propertyId!=='all'&&cost.propertyId!==''&&cost.propertyId!=null){
  const assigned=owners.filter(o=>(o.propertyIds||[]).map(String).includes(String(cost.propertyId)));
  if(assigned.length)owners=assigned;
 }
 return owners.slice(0,Math.min(Math.max(1,Number(cost.splitCount)||owners.length||1),owners.length));
}
function ownerMonthlyContribution(x){
 if(x.active===false)return 0;
 let amount=0;
 state.costPlans.forEach(cost=>{const people=eligibleOwnersForCost(cost);if(people.some(p=>p.id===x.id))amount+=costMonthly(cost)/Math.max(people.length,1)});
 const total=activePaymentShareTotal();
 if(total>0)amount+=Number(state.settings.monthlyReserve||0)*Number(x.paymentShare||0)/total;
 return amount;
}
function plannedMonthlyIncome(){return state.owners.reduce((a,x)=>a+ownerMonthlyContribution(x),0)}
function projectedMonthlyBalance(){return plannedMonthlyIncome()-plannedMonthly()}
function projectedAccountBalance(){return Number(state.settings.startBalance||0)+projectedMonthlyBalance()}
function monthsElapsed(start){if(!start)return 0;const d=new Date(start+'T12:00:00'),n=new Date();let m=(n.getFullYear()-d.getFullYear())*12+(n.getMonth()-d.getMonth());if(n.getDate()<d.getDate())m--;return Math.max(0,m)}
function loanProjection(){
 const l=state.loan, original=Number(l.original)||0, entered=Math.max(0,Number(l.remaining)||0), rate=(Number(l.interest)||0)/100/12, payment=Number(l.monthlyPayment)||0;
 if(!l.autoCalculate||!entered||!payment||!l.balanceDate){return {remaining:entered,paid:Math.max(0,original-entered),months:0}}
 let remaining=entered;const months=monthsElapsed(l.balanceDate);
 for(let i=0;i<months&&remaining>0;i++){
  const interest=remaining*rate;const principal=Math.max(0,payment-interest);remaining=Math.max(0,remaining-principal);
  if((i+1)%12===0&&Number(l.extraPayment)>0)remaining=Math.max(0,remaining-Number(l.extraPayment));
 }
 return {remaining,paid:Math.max(0,original-remaining),months}
}
function propertyName(id){if(id==='all'||id===''||id==null)return 'Alle Objekte';return state.properties.find(x=>String(x.id)===String(id))?.name||'Unbekanntes Objekt'}
function runModule(name,fn){
 try{fn();return true}
 catch(error){
  console.error(`Modul ${name} konnte nicht geladen werden`,error);
  const notice=$('#appNotice');
  if(notice){
   notice.classList.remove('hidden');
   notice.innerHTML=`<strong>${esc(name)} konnte nicht vollständig geladen werden.</strong><span>Die übrigen Bereiche funktionieren weiter. Aktualisiere die Seite oder importiere deine letzte Sicherung.</span>`;
  }
  return false;
 }
}
function render(){
 const notice=$('#appNotice');if(notice){notice.classList.add('hidden');notice.innerHTML=''}
 runModule('Auswahllisten',populateSelects);
 runModule('Übersicht',renderDashboard);
 runModule('Buchungen',renderTransactions);
 runModule('Kostenplan',renderCosts);
 runModule('Objekte',renderProperties);
 runModule('Personen',renderOwners);
 runModule('Planung',renderTasks);
 runModule('Einstellungen',renderSettings);
 runModule('Müllkalender',renderWasteCalendar);
 updateLocalStatus(lastSaveTime?'Gespeichert':'Lokal gespeichert');
}
function renderDashboard(){
 const monthlyCosts=plannedMonthly(),monthlyIncome=plannedMonthlyIncome(),monthNet=projectedMonthlyBalance();
 $('#monthlyNeed').textContent=eur(monthlyCosts);$('#monthlyIncome').textContent=eur(monthlyIncome);$('#monthlyNet').textContent=eur(monthNet);$('#activeOwners').textContent=state.owners.filter(x=>x.active!==false).length;$('#openTasks').textContent=state.tasks.filter(x=>x.status!=='Erledigt').length;$('#reserveTarget').textContent=eur(state.reserves.reduce((a,x)=>a+Math.max(0,Number(x.target)-Number(x.saved)),0));
 const l=state.loan, original=Number(l.original)||0,projection=loanProjection(),remaining=Math.min(projection.remaining,original||projection.remaining),paid=projection.paid,pct=original?Math.min(100,Math.max(0,paid/original*100)):0;$('#loanPercent').textContent=pct.toLocaleString('de-DE',{maximumFractionDigits:1})+' %';$('#loanDonut').style.setProperty('--p',pct);$('#loanOriginal').textContent=eur(original);$('#loanPaid').textContent=eur(paid);$('#loanRemaining').textContent=eur(remaining);$('#loanPayment').textContent=eur(l.monthlyPayment);const monthInterest=remaining*(Number(l.interest)||0)/100/12,monthPrincipal=Math.max(0,Math.min(remaining,Number(l.monthlyPayment)-monthInterest));$('#loanDetails').innerHTML=`<div><span>Bank</span><strong>${esc(l.bank||'nicht eingetragen')}</strong></div><div><span>Sollzins</span><strong>${Number(l.interest||0).toLocaleString('de-DE')} %</strong></div><div><span>Zinsanteil nächster Monat</span><strong>${eur(monthInterest)}</strong></div><div><span>Tilgungsanteil nächster Monat</span><strong>${eur(monthPrincipal)}</strong></div><div><span>Zinsbindung bis</span><strong>${dateDE(l.fixedUntil)}</strong></div><div><span>Berechnung</span><strong>${l.autoCalculate?'Automatisch ab '+dateDE(l.balanceDate)+' · '+projection.months+' Monate':'Manuelle Restschuld'}</strong></div>`;
 const propCosts=state.properties.map(p=>({name:p.name,value:state.costPlans.filter(x=>String(x.propertyId)===String(p.id)).reduce((a,x)=>a+costMonthly(x),0)}));const shared=state.costPlans.filter(x=>x.propertyId==='all'||x.propertyId===''||x.propertyId==null).reduce((a,x)=>a+costMonthly(x),0);$('#dashboardObjectCosts').innerHTML=[...propCosts,{name:'Gemeinsame Kosten',value:shared},{name:'Gesamt',value:plannedCostMonthly()}].map((x,i)=>`<div class="${i===propCosts.length+1?'total-row':''}"><span>${esc(x.name)}</span><strong>${eur(x.value)} / Monat · ${eur(x.value*12)} / Jahr</strong></div>`).join('');
 $('#ownerIncomeSummary').innerHTML=state.owners.filter(x=>x.active!==false).map(x=>`<div><span>${esc(x.name)}</span><strong>${eur(ownerMonthlyContribution(x))} / Monat</strong></div>`).join('')||'<div class="empty">Keine aktiven Personen</div>';
 const tx=[...state.transactions].sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,5);$('#recentTransactions').innerHTML=tx.length?tx.map(transactionRow).join(''):'<div class="empty">Noch keine Buchungen</div>';const upcoming=[...state.tasks.filter(x=>x.status!=='Erledigt'),...state.maintenance.filter(x=>x.status!=='Erledigt')].sort((a,b)=>(a.due||'9999').localeCompare(b.due||'9999')).slice(0,5);$('#upcomingItems').innerHTML=upcoming.length?upcoming.map(x=>`<div class="list-item"><div class="list-main"><strong>${esc(x.title)}</strong><span>${dateDE(x.due)} · ${esc(propertyName(x.propertyId))}</span></div><span class="tag">${esc(x.status||'Offen')}</span></div>`).join(''):'<div class="empty">Keine offenen Termine</div>'
}

const wasteColors={'Restmüll':'#334155','Biotonne':'#15803d','Papiertonne':'#2563eb','Gelbe Tonne':'#eab308','Wertstoff':'#ea580c','Sonstige':'#7c3aed'};
function wasteColor(type){return wasteColors[type]||'#64748b'}
function monthTitle(d){return d.toLocaleDateString('de-DE',{month:'long',year:'numeric'})}
function renderWasteCalendar(){
 const box=$('#wasteCalendar');if(!box)return;
 if(!(calendarCursor instanceof Date)||Number.isNaN(calendarCursor.getTime())){calendarCursor=new Date();calendarCursor.setDate(1)}
 const year=calendarCursor.getFullYear(),month=calendarCursor.getMonth();
 $('#wasteMonthTitle').textContent=monthTitle(calendarCursor);
 const first=new Date(year,month,1),last=new Date(year,month+1,0),start=(first.getDay()+6)%7;
 const entries=(state.wasteDates||[]).filter(x=>{if(!x.date)return false;const d=new Date(x.date+'T12:00:00');return d.getFullYear()===year&&d.getMonth()===month});
 let cells=['Mo','Di','Mi','Do','Fr','Sa','So'].map(x=>`<div class="calendar-weekday">${x}</div>`).join('');
 for(let i=0;i<start;i++)cells+='<div class="calendar-day muted-day"></div>';
 for(let day=1;day<=last.getDate();day++){
  const iso=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  const todays=entries.filter(x=>x.date===iso);
  cells+=`<div class="calendar-day ${todays.length?'has-events':''}"><span class="day-number">${day}</span><div class="calendar-dots">${todays.slice(0,4).map(x=>`<i title="${esc(x.type)}" style="background:${wasteColor(x.type)}"></i>`).join('')}</div></div>`;
 }
 box.innerHTML=cells;
 const today=new Date().toISOString().slice(0,10);
 const upcoming=[...(state.wasteDates||[])].filter(x=>x.date&&x.date>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,8);
 $('#wasteUpcoming').innerHTML=upcoming.length?upcoming.map(x=>`<div class="list-item"><div class="waste-type-mark" style="background:${wasteColor(x.type)}"></div><div class="list-main"><strong>${esc(x.type)}</strong><span>${dateDE(x.date)}${x.note?' · '+esc(x.note):''}</span></div><button class="danger tiny" onclick="deleteWaste(${x.id})">Löschen</button></div>`).join(''):'<div class="empty">Noch keine Müllabfuhrtermine eingetragen</div>';
}
function changeWasteMonth(delta){calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+delta,1);renderWasteCalendar()}
function deleteWaste(id){if(confirm('Müllabfuhrtermin wirklich löschen?')){state.wasteDates=(state.wasteDates||[]).filter(x=>x.id!==id);save()}}

function transactionRow(x){return `<div class="list-item"><div class="list-main"><strong>${esc(x.description)}</strong><span>${esc(x.category)} · ${esc(propertyName(x.propertyId))} · ${dateDE(x.date)}</span></div><div class="amount ${x.type==='Einnahme'?'income':'expense'}">${x.type==='Einnahme'?'+':'−'} ${eur(x.amount)}</div></div>`}
function renderTransactions(){const filter=$('#transactionFilter').value;const list=[...state.transactions].filter(x=>filter==='all'||x.type===filter).sort((a,b)=>String(b.date).localeCompare(String(a.date)));$('#transactionList').innerHTML=list.length?list.map(transactionRow).join(''):'<div class="empty">Keine passenden Buchungen</div>';$('#incomeTotal').textContent=eur(sum('Einnahme'));$('#expenseTotal').textContent=eur(sum('Ausgabe'))}
function renderCosts(){
 const monthly=plannedCostMonthly(),yearly=state.costPlans.reduce((a,x)=>a+costYearly(x),0);
 $('#costMonthlyTotal').textContent=eur(monthly);$('#costYearlyTotal').textContent=eur(yearly);
 const rows=state.properties.map(p=>{
  const m=state.costPlans.filter(x=>String(x.propertyId)===String(p.id)).reduce((a,x)=>a+costMonthly(x),0);
  return `<div><span>${esc(p.name)}</span><strong>${eur(m)} / Monat · ${eur(m*12)} / Jahr</strong></div>`;
 });
 const shared=state.costPlans.filter(x=>x.propertyId==='all'||x.propertyId===''||x.propertyId==null).reduce((a,x)=>a+costMonthly(x),0);
 rows.push(`<div><span>Gemeinsame Kosten</span><strong>${eur(shared)} / Monat · ${eur(shared*12)} / Jahr</strong></div>`,
 `<div class="total-row"><span>Gesamt</span><strong>${eur(monthly)} / Monat · ${eur(yearly)} / Jahr</strong></div>`);
 $('#costObjectSummary').innerHTML=rows.join('');
 $('#costPlanList').innerHTML=state.costPlans.length?state.costPlans.map(x=>{
  const people=eligibleOwnersForCost(x);
  const perPayment=people.length>1?` <span class="per-person-note">(${eur(Number(x.amount||0)/people.length)} pro Person)</span>`:'';
  return `<article class="entity-card"><div class="card-top"><span class="tag">${esc(x.category)}</span><span class="tag subtle">${esc(propertyName(x.propertyId))}</span></div><h3>${esc(x.name)}</h3><p>${intervalLabel(x.interval)} · ${esc(x.note||'kein Hinweis')}</p><div class="meta cost-meta"><span>${eur(x.amount)} je Zahlung${perPayment}</span><strong>${eur(costMonthly(x))} / Monat · ${eur(costYearly(x))} / Jahr</strong></div><div class="card-actions"><button class="secondary small" onclick="editCost(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteCost(${x.id})">Löschen</button></div></article>`;
 }).join(''):'<div class="empty">Noch keine Kostenpositionen</div>';
}
function intervalLabel(i){return {monthly:'monatlich',fiveyearly:'5× jährlich',quarterly:'vierteljährlich',semiannual:'halbjährlich',yearly:'jährlich'}[i]||i}
function renderProperties(){$('#propertyList').innerHTML=state.properties.length?state.properties.map(x=>`<article class="entity-card property-card">${x.photo?`<img class="property-image" src="${x.photo}" alt="${esc(x.name)}">`:`<div class="property-placeholder">🏠</div>`}<div class="card-top"><span class="tag">${esc(x.usage)}</span><span>${Number(x.area)||0} m²</span></div><h3>${esc(x.name)}</h3><p>${esc(x.address||'Adresse noch nicht eingetragen')}</p><div class="card-actions"><button class="secondary small" onclick="editProperty(${x.id})">Bearbeiten</button><button class="danger small" onclick="deleteProperty(${x.id})">Löschen</button></div></article>`).join(''):'<div class="empty">Noch keine Objekte</div>'}
function renderOwners(){const total=state.owners.filter(x=>x.active!==false).reduce((a,b)=>a+Number(b.ownershipShare),0);$('#shareCheck').textContent=total.toLocaleString('de-DE',{maximumFractionDigits:2})+' %';$('#shareCheck').classList.toggle('warning',Math.abs(total-100)>0.01);$('#ownerList').innerHTML=state.owners.length?state.owners.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${x.active===false?'Inaktiv':'Aktiv'}</span><span class="tag subtle">${esc(x.personType||'Eigentümer')}</span></div><h3>${esc(x.name)}</h3><p>${esc(x.role||'Keine Aufgabe eingetragen')}</p><p class="owner-objects">Objekte: ${esc((x.propertyIds||[]).map(propertyName).join(', ')||'keine Zuordnung')}</p><div class="meta"><span>Eigentum: <strong>${Number(x.ownershipShare||0).toLocaleString('de-DE')}%</strong></span><span>Zahlung: <strong>${Number(x.paymentShare||0).toLocaleString('de-DE')}%</strong></span></div><div class="card-actions"><button class="secondary small" onclick="editOwner(${x.id})">Bearbeiten</button><button class="secondary small" onclick="toggleOwner(${x.id})">${x.active===false?'Aktivieren':'Deaktivieren'}</button><button class="danger small" onclick="deleteOwner(${x.id})">Entfernen</button></div></article>`).join(''):'<div class="empty">Noch keine Personen</div>'}
function renderTasks(){
 $('#taskList').innerHTML=state.tasks.length?state.tasks.map(x=>planningCard(x,'task')).join(''):'<div class="empty">Keine Aufgaben</div>';
 $('#maintenanceList').innerHTML=state.maintenance.length?state.maintenance.map(x=>planningCard(x,'maintenance')).join(''):'<div class="empty">Keine Wartungen</div>';
 $('#reserveList').innerHTML=state.reserves.length?state.reserves.map(x=>`<article class="entity-card"><div class="card-top"><span class="tag">${esc(propertyName(x.propertyId))}</span><span class="tag subtle">Ziel ${x.year||'offen'}</span></div><h3>${esc(x.title)}</h3><div class="progress"><span style="width:${Math.min(100,Number(x.target)?Number(x.saved)/Number(x.target)*100:0)}%"></span></div><div class="meta"><span>${eur(x.saved)} gespart</span><strong>${eur(Math.max(0,Number(x.target)-Number(x.saved)))} offen</strong></div><div class="card-actions"><button class="secondary small" onclick="editReserve(${x.id})">Bearbeiten</button><button class="danger small" onclick="deletePlanning('reserve',${x.id})">Löschen</button></div></article>`).join(''):'<div class="empty">Keine Rücklagenziele</div>'
}
function planningCard(x,type){return `<article class="entity-card"><div class="card-top"><span class="tag">${esc(x.priority||x.status||'Offen')}</span><span class="tag subtle">${esc(propertyName(x.propertyId))}</span></div><h3>${esc(x.title)}</h3><p>${dateDE(x.due)} · ${esc(x.owner||'Gemeinsam')}${type==='maintenance'?` · ${x.intervalMonths||0} Monate · ${eur(x.cost||0)}`:''}</p><div class="card-actions">${x.status!=='Erledigt'?`<button class="primary small" onclick="completeItem('${type}',${x.id})">Erledigen</button>`:'<span class="tag">Erledigt</span>'}<button class="danger small" onclick="deletePlanning('${type}',${x.id})">Löschen</button></div></article>`}
function renderSettings(){$('#settingName').value=state.settings.name;$('#settingStartBalance').value=state.settings.startBalance;$('#settingMinimumReserve').value=state.settings.minimumReserve;$('#settingMonthlyReserve').value=state.settings.monthlyReserve}
function populateSelects(){const opts=`<option value="all">Alle Objekte / gemeinsam</option>`+state.properties.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('');$$('.property-select').forEach(s=>{const old=s.value;s.innerHTML=opts;if([...s.options].some(o=>o.value===old))s.value=old});$('#transactionCategory').innerHTML=categories.map(x=>`<option>${esc(x)}</option>`).join('')}
function renderOwnerPropertyChoices(selected=[]){
 const box=$('#ownerPropertyChoices');if(!box)return;const set=new Set((selected||[]).map(String));
 box.innerHTML=state.properties.map(p=>`<label class="check-row"><input type="checkbox" name="propertyIds" value="${p.id}" ${set.has(String(p.id))?'checked':''}> ${esc(p.name)}</label>`).join('')||'<span class="empty">Zuerst ein Objekt anlegen</span>';
}
function openOwnerModal(owner=null){const f=$('#ownerForm');f.reset();$('#ownerModalTitle').textContent=owner?'Person bearbeiten':'Person hinzufügen';f.elements.id.value=owner?.id||'';f.elements.name.value=owner?.name||'';f.elements.personType.value=owner?.personType||'Eigentümer';f.elements.ownershipShare.value=owner?.ownershipShare??0;f.elements.paymentShare.value=owner?.paymentShare??0;f.elements.role.value=owner?.role||'';f.elements.active.checked=owner?.active!==false;renderOwnerPropertyChoices(owner?.propertyIds||[]);$('#ownerModal').showModal()}
function editOwner(id){const x=state.owners.find(x=>x.id===id);if(x)openOwnerModal(x)} function toggleOwner(id){const x=state.owners.find(x=>x.id===id);if(x){x.active=x.active===false;save()}} function deleteOwner(id){const x=state.owners.find(x=>x.id===id);if(x&&confirm(`Person „${x.name}“ wirklich entfernen?`)){state.owners=state.owners.filter(y=>y.id!==id);save()}}
function openPropertyModal(x=null){const f=$('#propertyForm');f.reset();propertyPhotoData=x?.photo||'';$('#propertyModalTitle').textContent=x?'Objekt bearbeiten':'Objekt hinzufügen';f.elements.id.value=x?.id||'';f.elements.name.value=x?.name||'';f.elements.address.value=x?.address||'';f.elements.area.value=x?.area??'';f.elements.usage.value=x?.usage||'Eigennutzung';showPhotoPreview();$('#propertyModal').showModal()}
function showPhotoPreview(){const p=$('#propertyPhotoPreview');p.classList.toggle('hidden',!propertyPhotoData);p.innerHTML=propertyPhotoData?`<img src="${propertyPhotoData}" alt="Vorschau">`:''}
function editProperty(id){const x=state.properties.find(x=>x.id===id);if(x)openPropertyModal(x)}
function deleteProperty(id){const x=state.properties.find(x=>x.id===id);if(!x||!confirm(`Objekt „${x.name}“ löschen? Zugeordnete Planungen bleiben erhalten und werden dann als unbekannt angezeigt.`))return;state.properties=state.properties.filter(y=>y.id!==id);save()}
function openCostModal(x=null){const f=$('#costForm');f.reset();$('#costModalTitle').textContent=x?'Kostenposition bearbeiten':'Kostenposition hinzufügen';f.elements.id.value=x?.id||'';f.elements.category.value=x?.category||'';f.elements.name.value=x?.name||'';f.elements.splitCount.value=String(x?.splitCount??3);f.elements.propertyId.value=String(x?.propertyId??'all');f.elements.amount.value=x?.amount??'';f.elements.interval.value=x?.interval||'monthly';f.elements.note.value=x?.note||'';$('#costModal').showModal()}
function editCost(id){const x=state.costPlans.find(x=>x.id===id);if(x)openCostModal(x)} function deleteCost(id){if(confirm('Kostenposition wirklich löschen?')){state.costPlans=state.costPlans.filter(x=>x.id!==id);save()}}
function editReserve(id){const x=state.reserves.find(x=>x.id===id);if(!x)return;const f=$('#reserveForm');f.reset();f.dataset.editId=id;f.elements.title.value=x.title;f.elements.propertyId.value=String(x.propertyId??'all');f.elements.target.value=x.target;f.elements.saved.value=x.saved;f.elements.year.value=x.year||'';$('#reserveModal').showModal()}
function completeItem(type,id){const arr=type==='task'?state.tasks:state.maintenance;const x=arr.find(x=>x.id===id);if(x)x.status='Erledigt';save()}
function deletePlanning(type,id){if(!confirm('Eintrag wirklich löschen?'))return;const key=type==='task'?'tasks':type==='maintenance'?'maintenance':'reserves';state[key]=state[key].filter(x=>x.id!==id);save()}
function openLoan(){const f=$('#loanForm'),l=state.loan;Object.keys(l).forEach(k=>{if(!f.elements[k])return;if(f.elements[k].type==='checkbox')f.elements[k].checked=Boolean(l[k]);else f.elements[k].value=l[k]??''});$('#loanModal').showModal()}
function switchView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));$$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.target===name));const titles={dashboard:'Übersicht',transactions:'Hauskonto',properties:'Objekte',owners:'Personen',tasks:'Planung',settings:'Einstellungen'};$('#pageTitle').textContent=titles[name]||'Hausverwaltung';window.scrollTo({top:0,behavior:'smooth'})}
$$('.bottom-nav button').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.target)));$$('[data-go]').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.go)));$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.modal;if(m==='ownerModal')openOwnerModal();else if(m==='propertyModal')openPropertyModal();else if(m==='costModal')openCostModal();else if(m==='loanModal')openLoan();else document.getElementById(m).showModal()}));
$$('[data-account-tab]').forEach(b=>b.addEventListener('click',()=>{$$('[data-account-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#bookingsArea').classList.toggle('hidden',b.dataset.accountTab!=='bookings');$('#costsArea').classList.toggle('hidden',b.dataset.accountTab!=='costs')}));
$$('[data-task-tab]').forEach(b=>b.addEventListener('click',()=>{activePlanningTab=b.dataset.taskTab;$$('[data-task-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#taskList').classList.toggle('hidden',activePlanningTab!=='tasks');$('#maintenanceList').classList.toggle('hidden',activePlanningTab!=='maintenance');$('#reserveList').classList.toggle('hidden',activePlanningTab!=='reserves');$('#planningAddBtn').textContent=activePlanningTab==='tasks'?'+ Aufgabe':activePlanningTab==='maintenance'?'+ Wartung':'+ Rücklage'}));
$('#planningAddBtn').addEventListener('click',()=>document.getElementById(activePlanningTab==='tasks'?'taskModal':activePlanningTab==='maintenance'?'maintenanceModal':'reserveModal').showModal());
$('#transactionFilter').addEventListener('change',renderTransactions);
$('#wastePrev').addEventListener('click',()=>changeWasteMonth(-1));
$('#wasteNext').addEventListener('click',()=>changeWasteMonth(1));
$('#wasteForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.wasteDates=state.wasteDates||[];state.wasteDates.push({id:Date.now(),type:f.get('type'),date:f.get('date'),note:f.get('note')});e.target.reset();$('#wasteModal').close();save()});
$('#transactionForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.transactions.push({id:Date.now(),type:f.get('type'),category:f.get('category'),propertyId:f.get('propertyId'),description:f.get('description'),amount:Number(f.get('amount')),date:f.get('date')});e.target.reset();$('#transactionModal').close();save()});
$('#costForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id')),data={category:f.get('category'),name:f.get('name'),splitCount:Number(f.get('splitCount')),propertyId:f.get('propertyId'),amount:Number(f.get('amount')),interval:f.get('interval'),note:f.get('note')};if(id)Object.assign(state.costPlans.find(x=>x.id===id),data);else state.costPlans.push({id:Date.now(),...data});e.target.reset();$('#costModal').close();save()});
$('#loanForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.loan={bank:f.get('bank'),original:Number(f.get('original')),remaining:Number(f.get('remaining')),balanceDate:f.get('balanceDate'),interest:Number(f.get('interest')),monthlyPayment:Number(f.get('monthlyPayment')),startDate:f.get('startDate'),fixedUntil:f.get('fixedUntil'),extraPayment:Number(f.get('extraPayment')),autoCalculate:f.get('autoCalculate')==='on'};$('#loanModal').close();save()});
$('#propertyForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id')),data={name:f.get('name'),address:f.get('address'),area:Number(f.get('area')),usage:f.get('usage'),photo:propertyPhotoData};if(id)Object.assign(state.properties.find(x=>x.id===id),data);else state.properties.push({id:Date.now(),...data});e.target.reset();propertyPhotoData='';$('#propertyModal').close();save()});
$('#propertyForm').elements.photo.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(file.size>2_500_000){alert('Das Foto ist zu groß. Bitte ein Foto unter etwa 2,5 MB verwenden.');e.target.value='';return}const r=new FileReader();r.onload=()=>{propertyPhotoData=r.result;showPhotoPreview()};r.readAsDataURL(file)});
$('#ownerForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(f.get('id'));if(!id&&state.owners.length>=5){alert('Maximal fünf Personen.');return}const data={name:f.get('name').trim(),personType:f.get('personType'),ownershipShare:Number(f.get('ownershipShare')),paymentShare:Number(f.get('paymentShare')),role:f.get('role').trim(),propertyIds:f.getAll('propertyIds').map(String),active:f.get('active')==='on'};if(id)Object.assign(state.owners.find(x=>x.id===id),data);else state.owners.push({id:Date.now(),...data});e.target.reset();$('#ownerModal').close();save()});
$('#taskForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.tasks.push({id:Date.now(),title:f.get('title'),propertyId:f.get('propertyId'),due:f.get('due'),owner:f.get('owner'),priority:f.get('priority'),status:'Offen'});e.target.reset();$('#taskModal').close();save()});
$('#maintenanceForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);state.maintenance.push({id:Date.now(),title:f.get('title'),propertyId:f.get('propertyId'),due:f.get('due'),intervalMonths:Number(f.get('intervalMonths')),owner:f.get('owner'),cost:Number(f.get('cost')),status:'Offen'});e.target.reset();$('#maintenanceModal').close();save()});
$('#reserveForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),id=Number(e.target.dataset.editId),data={title:f.get('title'),propertyId:f.get('propertyId'),target:Number(f.get('target')),saved:Number(f.get('saved')),year:Number(f.get('year'))||''};if(id){Object.assign(state.reserves.find(x=>x.id===id),data);delete e.target.dataset.editId}else state.reserves.push({id:Date.now(),...data});e.target.reset();$('#reserveModal').close();save()});
$('#saveSettings').addEventListener('click',()=>{state.settings={name:$('#settingName').value,startBalance:Number($('#settingStartBalance').value),minimumReserve:Number($('#settingMinimumReserve').value),monthlyReserve:Number($('#settingMonthlyReserve').value)};save();alert('Gespeichert')});
$('#exportBtn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='hausverwaltung-sicherung.json';a.click();URL.revokeObjectURL(a.href)});
$('#importInput').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{state=migrate(JSON.parse(await file.text()));save();alert('Sicherung importiert')}catch{alert('Datei konnte nicht gelesen werden')}});
$('#resetBtn').addEventListener('click',()=>{if(confirm('Wirklich alle lokalen Daten löschen?')){state=clone(seed);save()}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').classList.remove('hidden')});$('#installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').classList.add('hidden')});
$$('button[value="cancel"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();b.closest('dialog').close()}));
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js');
Object.assign(window,{editOwner,toggleOwner,deleteOwner,editProperty,deleteProperty,editCost,deleteCost,completeItem,deletePlanning,editReserve,deleteWaste});render();

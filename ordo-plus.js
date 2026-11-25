
/* ORDO local-first settings, assessments, performance library and portable backup. */
(function(){
"use strict";
const SETTINGS="ordo-settings-v3", METRICS="ordo-metrics-v3";
const defaults={wake:"05:30",weekendWake:"06:30",workStart:"08:45",workEnd:"16:30",dinner:"17:30",workout:90,commute:12,lunch:75,sleep:8,mode:"normal",until:"",focus:"Coursework / personal priorities"};
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch(e){return f}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const dateKey=(d=new Date())=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-");
const mins=t=>{const m=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(String(t));return m?Number(m[1])*60+Number(m[2]):NaN};
const clock=n=>{n=(n+1440)%1440;return String(Math.floor(n/60)).padStart(2,"0")+String(n%60).padStart(2,"0")};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function clean(raw={}){
if(!raw||typeof raw!=="object"||Array.isArray(raw))raw={};
const x={...defaults};for(const k of ["wake","weekendWake","workStart","workEnd","dinner"])if(Number.isFinite(mins(raw[k])))x[k]=raw[k];
for(const [k,lo,hi] of [["workout",60,90],["commute",0,90],["lunch",60,90],["sleep",8,9]])if(raw[k]!==undefined&&Number.isFinite(Number(raw[k])))x[k]=Math.max(lo,Math.min(hi,Math.round(Number(raw[k])* (k==="sleep"?2:1))/(k==="sleep"?2:1)));
if(["normal","busy","deadline","recovery"].includes(raw.mode))x.mode=raw.mode;
if(/^\d{4}-\d{2}-\d{2}$/.test(raw.until||""))x.until=raw.until;
if(typeof raw.focus==="string")x.focus=raw.focus.slice(0,100);
return x;
}
function errors(s){
const w=mins(s.wake), ww=mins(s.weekendWake), start=mins(s.workStart), end=mins(s.workEnd), dinner=mins(s.dinner);
const bed=(w-s.sleep*60+1440)%1440, weekendBed=(ww-s.sleep*60+1440)%1440;
const e=[];
if(w<180||ww<180||w>720||ww>720)e.push("Choose wake times between 03:00 and noon.");
if(start-w<15+s.workout+30+20+15+s.commute+13)e.push("Morning is too short for workout, shower, breakfast, German, commute and 13-minute arrival buffer. Wake earlier, shorten the workout or move work start later.");
if(end-start<s.lunch+60)e.push("Work end must be after work start, with room for lunch.");
if(dinner<end+s.commute+30)e.push("Dinner must allow your commute home and at least 30 minutes for family / preparation.");
if(Math.min(bed,weekendBed)<dinner+105)e.push("Dinner, cleanup and bedtime reading/hygiene need at least 105 minutes before lights out. Adjust dinner or wake time.");
if(bed<1080||weekendBed<1080)e.push("This plan requires evening lights-out after 18:00. Choose compatible wake and sleep times.");
if(ww+60+s.workout+30+75>dinner-90)e.push("Weekend morning needs enough time for breakfast, exercise, hygiene, German and family lunch.");
return e;
}
function settings(){const x=clean(read(SETTINGS,{}));return errors(x).length?{...defaults}:x}
function activeMode(s,date){return s.mode!=="normal"&&(!s.until||date<=s.until)?s.mode:"normal"}
function adapt(raw,s,date){
const mode=activeMode(s,date), out={};
for(let d=0;d<7;d++){
const weekday=d>=1&&d<=5, items=raw[d].sessions.map((v,i)=>({...v,_originalIndex:i,steps:[...v.steps]})), result=[];
const by=n=>items.find(v=>v.name===n), is=(v,n)=>v.name===n;
const wake=mins(weekday?s.wake:s.weekendWake), nextWake=mins(d===5||d===6?s.weekendWake:s.wake), bed=Math.min((mins(s.wake)-s.sleep*60+1440)%1440,(nextWake-s.sleep*60+1440)%1440),dinner=mins(s.dinner),workStart=mins(s.workStart),workEnd=mins(s.workEnd);
let t=wake;
function put(v,start,length,steps){if(!v||length<=0)return;const x={...v,start:clock(start),end:clock(start+length),minutes:length};if(steps)x.steps=steps;if(mode!=="normal"&&steps)x._variant=mode;result.push(x);return x;}
function seq(v,length,steps){if(!v||length<=0)return;put(v,t,length,steps);t+=length}
function synthetic(id,name,icon,objective,steps){return {name,icon,objective,steps,_originalIndex:id,prompt:"",resource:null}}
function spare(until,name="Buffer / free time"){if(until>t)seq(synthetic("buffer-"+t,name,"☕","Keep this margin available.",["Use for family, delays or downtime; no catch-up requirement."]),until-t)}
function shortReview(v){return ["Review due Anki cards for 10 minutes; say difficult phrases aloud. Do not add new cards unless time remains."]}
function shortLesson(v){return ["Use the assigned unit and lesson in the objective. Open DW Nicos Weg via the resource link.","Watch or resume the video and exercises for 15 minutes; retrieve three phrases in the final 5 minutes. Record the last completed exercise."]}
const reduced=mode!=="normal";
const study=items.filter(v=>v.track==="german");
if(weekday){
seq(by("Morning setup"),15);
let workout=by("Jim Stoppani workout");
if(mode==="recovery"){seq({...workout,name:"Recovery / rest",track:"",objective:"Use the appropriate rest or recovery option.",resource:null},s.workout,["Rest or choose comfortable gentle movement; follow the Stoppani program and do not make up missed training."]);}
else seq(workout,s.workout,["Open Jim Stoppani; follow today's assigned session or rest day. Reserve "+s.workout+" minutes including transitions; track the actual workout there.","Finish in time to get ready."]);
seq(by("Get ready"),30);seq(by("Breakfast"),20);seq(study[0],reduced?10:15,reduced?shortReview(study[0]):null);
spare(workStart-s.commute-13);
seq(by("Commute and arrival"),s.commute+13,["Leave at "+clock(workStart-s.commute-13)+"; "+s.commute+"-minute commute and 13-minute arrival buffer."]);
put(by("Work + breaks"),workStart,workEnd-workStart,["Work comes first. Optional permitted breaks: up to 10 minutes of vocabulary or listening.","Lunch: "+s.lunch+" minutes planned; eat 25 minutes, then "+(reduced?20:35)+" minutes German if duties permit. Remaining time is downtime."]);
const lunch=study[1]; if(lunch){result.push({...lunch,start:"Lunch +25",end:"Lunch +"+(reduced?45:60),minutes:reduced?20:35,_variant:reduced?mode:"",steps:reduced?shortLesson(lunch):lunch.steps});}
t=workEnd;seq(by("Commute home"),s.commute);seq(by("Home and dinner prep"),dinner-t);
}else{
seq(by("Morning / breakfast"),60);
const workout=by("Jim Stoppani workout")||by("Recovery / rest");
if(mode==="recovery"&&workout.name==="Jim Stoppani workout")seq({...workout,name:"Recovery / rest",resource:null,objective:"Recovery mode."},s.workout,["Rest or do gentle comfortable movement."]);
else seq(workout,s.workout,workout.name==="Jim Stoppani workout"?["Follow the Stoppani program for "+s.workout+" minutes or use its scheduled rest day. Log in the app."]:null);
seq(by("Shower / reset"),30);seq(study[0],reduced?20:75,reduced?shortLesson(study[0]):null);
const flex=by("Family, errands and lunch"), tail=items.filter(v=>v.track==="guitar"||v.track==="tang"||v.name==="Weekly review"||v.name==="Reading");
const allowed=tail.filter(v=>!reduced||v.name==="Weekly review"||v.name==="Reading"||(mode==="busy"&&v.track==="guitar"&&d===6));
const needed=allowed.reduce((sum,v)=>sum+v.minutes+5,0);
const target=Math.max(t+60,Math.min(14*60,dinner-needed-60));
seq(flex,Math.max(0,Math.min(target,dinner)-t));
for(const v of allowed){if(t+v.minutes+30<=dinner){seq(v,v.minutes);if(v.track==="guitar"&&t+10<dinner)t+=10;}}
seq(by("Flexible family / dinner prep"),dinner-t);
}
t=dinner;seq(by("Family dinner"),60);seq(by("Cleanup / household"),30);
const stop=bed-30;
const evening=weekday?items.filter(v=>v.start>="1900"&&v.start<"2100"&&v.name!=="Free time"):items.filter(v=>v.name==="Film Index");
let skipped=[];
for(const v of evening){
const optional=v.track==="guitar"||v.track==="tang"||v.name==="Film Index"||v.name==="Reading"||v.track==="german";
const keep=!reduced||(mode==="busy"&&(v.track==="guitar"&&d===1||v.track==="tang"&&d===2||v.name==="Film Index"&&d===5));
if(optional&&!keep){skipped.push(v.name);continue}
const available=stop-t;
if(v.name==="Film Index"&&available>=75){const n=Math.min(v.minutes,available);seq(v,n,n<v.minutes?["Choose a film or segment of "+n+" minutes or less. Pause at the cutoff and finish another day. Mark seen only when finished."]:null);}
else if(v.name!=="Film Index"&&available>=v.minutes)seq(v,v.minutes);
else skipped.push(v.name);
}
if(reduced&&mode!=="recovery"&&stop-t>=30){seq(synthetic("focus","Priority time","🎯","Temporary priority block.",["Use this time for "+esc(s.focus)+" or family obligations. Stop at the scheduled time."]),Math.min(mode==="deadline"?90:45,stop-t));}
spare(stop);
seq(by("Bedtime reading"),15);seq(by("Bed routine"),15);const sleepMinutes=1440-bed+nextWake;put(by("Sleep opportunity"),bed,sleepMinutes,["Lights out at "+clock(bed)+"; next wake "+clock(nextWake)+". Protect "+(sleepMinutes/60).toFixed(1)+" hours of sleep opportunity."]);
out[d]={...raw[d],sessions:result,focus:raw[d].focus+(mode==="normal"?"":" "+mode.charAt(0).toUpperCase()+mode.slice(1)+" mode: optional sessions are reduced; stages are preserved.")+(skipped.length?" Some evening sessions deferred to protect bedtime.":"")};
}
return out;
}
function assessment(track,stage,record){
if(!record)return {pass:false,reason:"No assessment recorded for this stage. Complete the scheduled assessment."};
if(track==="german"){
const pass=record.accuracy>=80&&record.recall>=80&&record.sentences>=4&&record.conversation===true;
return {pass,reason:pass?"DW accuracy, recall, sentence and conversation standards met.":"Repeat the current unit. Focus on "+[!(record.accuracy>=80)?"DW errors":"",!(record.recall>=80)?"vocabulary retrieval":"",!(record.sentences>=4)?"sentence construction":"",!record.conversation?"speaking":""].filter(Boolean).join(", ")+ "."};
}
const pass=record.gate===true;
return {pass,reason:pass?"You confirmed the specific stage performance standard.":"Repeat the current stage. Revisit the weakest exercise and retest the exact gate."};
}
function getRecords(){const r=read(METRICS,[]);return Array.isArray(r)?r.filter(v=>v&&typeof v==="object"&&["german","guitar","tang","reading","film","fitness"].includes(v.track)&&/^\d{4}-\d{2}-\d{2}$/.test(v.date||"")):[]}
function recentAssessment(track,stage){return getRecords().filter(r=>r.track===track&&r.stage===stage).sort((a,b)=>String(b.created).localeCompare(String(a.created)))[0]}
function db(){return new Promise((resolve,reject)=>{if(!window.indexedDB){reject(Error("Local recording storage is not available in this browser."));return}const r=indexedDB.open("ordo-recordings-v1",1);r.onupgradeneeded=()=>r.result.createObjectStore("samples",{keyPath:"id"});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function mediaOp(mode,action){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction("samples",mode),st=tx.objectStore("samples");let result;try{const req=action(st);req.onsuccess=()=>result=req.result;req.onerror=()=>reject(req.error)}catch(e){d.close();reject(e);return}tx.oncomplete=()=>{d.close();resolve(result)};tx.onerror=()=>{d.close();reject(tx.error)};tx.onabort=()=>{d.close();reject(tx.error)}})}
const mediaAll=()=>mediaOp("readonly",s=>s.getAll());
const mediaPut=v=>mediaOp("readwrite",s=>s.put(v));
const mediaDelete=id=>mediaOp("readwrite",s=>s.delete(id));
const mediaRead=id=>mediaOp("readonly",s=>s.get(id));
function portableKey(k){return /^(ordo-(routine-v2-|stage-history-|settings-history-|practice-log-|top3-v[12]-|curriculum-stages-v2$|settings-v3$|metrics-v3$)|daniel-development-|daniel-12-week-priorities$)/.test(k)}
function collect(){const data={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(portableKey(k))data[k]=localStorage.getItem(k)}return data}
function saveFile(value,name,type="application/json"){const url=URL.createObjectURL(new Blob([value],{type})),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000)}
function asData(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.readAsDataURL(blob)})}
function makeBackup(data,media=[]){return {format:"ordo-backup",version:1,exported:new Date().toISOString(),data,recordings:media}}
function mergeRecords(a,b){const m=new Map();for(const r of [...a,...b])if(r&&typeof r.id==="string")m.set(r.id,r);return [...m.values()]}
function safeImport(payload,replace){
if(!payload||payload.format!=="ordo-backup"||payload.version!==1||!payload.data||typeof payload.data!=="object"||Array.isArray(payload.data))throw Error("This is not a supported ORDO backup.");
const pending={};
for(const [key,value] of Object.entries(payload.data)){
if(!portableKey(key)||typeof value!=="string"||value.length>2000000)continue;
if(key.startsWith("ordo-practice-log-")){pending[key]=replace||!localStorage.getItem(key)?value:localStorage.getItem(key);continue}
let v;try{v=JSON.parse(value)}catch(e){continue}
if(key===METRICS){if(!Array.isArray(v))continue;v=v.filter(r=>r&&typeof r.id==="string"&&["german","guitar","tang","reading","film","fitness"].includes(r.track)&&/^\d{4}-\d{2}-\d{2}$/.test(r.date||"")).map(r=>{const cleanRecord={id:r.id.slice(0,100),track:r.track,date:r.date,created:String(r.created||r.date).slice(0,40),notes:String(r.notes||"").slice(0,1000),gate:r.gate===true,conversation:r.conversation===true};if(["german","guitar","tang"].includes(r.track))cleanRecord.stage=Math.max(1,Math.min(r.track==="german"?19:12,Math.floor(Number(r.stage)||1)));for(const n of ["accuracy","recall","sentences","changes","tempo","songs","reps","forms","pages","books","films","minutes"])if(typeof r[n]==="number"&&Number.isFinite(r[n])&&r[n]>=0&&r[n]<=2000)cleanRecord[n]=r[n];return cleanRecord;});v=replace?mergeRecords(getRecords(),v):mergeRecords(v,getRecords());}
else if(key===SETTINGS||key.startsWith("ordo-settings-history-")){v=clean(v);if(errors(v).length)continue;if(!replace&&localStorage.getItem(key))continue;}
else if(key.startsWith("ordo-routine-v2-")||key.startsWith("daniel-development-")){if(!v||Array.isArray(v)||typeof v!=="object")continue;v=Object.fromEntries(Object.entries(v).filter(([k,x])=>/^(s-|closeout-)/.test(k)&&typeof x==="boolean"));if(!replace)v={...v,...read(key,{})};}
else if(!replace&&localStorage.getItem(key))continue;
pending[key]=JSON.stringify(v);
}
return pending;
}
window.ORDOPlus={defaults,clean,settings,errors,adapt,activeMode,dateKey,assessment,getRecords,recentAssessment,safeImport,makeBackup,collect,mergeRecords};
function mount(){
const root=document.getElementById("enhancementsRoot");if(!root)return;
const s=settings(), today=dateKey(), tracks={german:"German",guitar:"Guitar",tang:"Tang Soo Do"}, cap={german:19,guitar:12,tang:12};
const stageText=k=>k==="german"?germanUnits[stages[k]-1][0]:k==="guitar"?guitarWeeks[stages[k]-1][0]:tangWeeks[stages[k]-1][0];
const gateText=k=>k==="german"?"80% DW exercises, 80% word recall, 4/5 sentences, simple conversation with minimal English":k==="guitar"?guitarWeeks[stages[k]-1][3]:tangWeeks[stages[k]-1][4];
const opt=(v,t,sel)=>'<option value="'+v+'" '+(sel===v?"selected":"")+'>'+t+'</option>';
const field=(label,key,type,min,max,step)=>'<label>'+label+'<input name="'+key+'" type="'+type+'" value="'+esc(s[key])+'" '+(min!==undefined?'min="'+min+'" max="'+max+'" step="'+step+'"':"")+' required></label>';
root.innerHTML='<section class="large-card"><div class="section-kicker">PLAN YOUR LIFE</div><h2>Schedule & priority mode</h2><p class="section-description">Changes recalculate all seven days. Lunch is nested in work. If timing cannot protect family dinner and sleep, the app rejects the settings.</p><form id="ordoSettings"><div class="plus-grid">'+field("Weekday wake","wake","time")+field("Weekend wake","weekendWake","time")+field("Work begins","workStart","time")+field("Work ends","workEnd","time")+field("Family dinner","dinner","time")+field("Workout minutes","workout","number",60,90,5)+field("One-way commute (min)","commute","number",0,90,1)+field("Lunch (min)","lunch","number",60,90,5)+field("Sleep opportunity (hours)","sleep","number",8,9,.5)+'</div><h3>Temporary priority mode</h3><div class="plus-grid"><label>Mode<select name="mode">'+opt("normal","Normal — full routine",s.mode)+opt("busy","Busy — reduce hobbies",s.mode)+opt("deadline","Deadline — reserve evenings",s.mode)+opt("recovery","Recovery — reduce physical workload",s.mode)+'</select></label><label>Through (optional)<input name="until" type="date" value="'+esc(s.until)+'"></label><label>Priority time label<input name="focus" maxlength="100" value="'+esc(s.focus)+'"></label></div><p class="section-description">Modes preserve learning stages. Set an end date to restore normal mode automatically on the following day; no background automation is needed. Without an end date, mode remains active until changed. Current mode: <strong>'+esc(activeMode(s,today))+'</strong>.</p><div class="plus-actions"><button class="primary-button" type="submit">Save & recalculate</button><button class="secondary-button" type="button" id="ordoDefaults">Restore default schedule</button></div><p role="status" id="ordoSettingsStatus"></p></form></section>'+
'<section class="large-card"><div class="section-kicker">MEASURE CAPABILITY</div><h2>Performance dashboard</h2><p class="section-description">Record real results, not simply completed checkboxes. The dashboard compares the most recent 7 and 30 days of manually logged outcomes. Nothing is fetched automatically from Film Index, Virtual Library, or Stoppani.</p><div id="ordoTrends"></div><h3>Log a result / stage assessment</h3><form id="ordoMetric"><div class="plus-grid"><label>Discipline<select name="track">'+Object.entries({...tracks,reading:"Reading",film:"Film Index",fitness:"Stoppani / fitness"}).map(([k,v])=>opt(k,v,"german")).join("")+'</select></label><label>Date<input name="date" type="date" value="'+today+'" max="'+today+'" required></label></div><div id="ordoMetricFields"></div><label>Notes / weakness<textarea name="notes" maxlength="1000" placeholder="What needs work next?"></textarea></label><button type="submit" class="primary-button">Save result</button><p role="status" id="ordoMetricStatus"></p></form><h3>Adaptive recommendations</h3><div id="ordoRecommendations"></div><h3>Recent results</h3><div id="ordoRecent"></div></section>'+
'<section class="large-card"><div class="section-kicker">COMPARE YOURSELF OVER TIME</div><h2>Performance recordings</h2><p class="section-description">Capture or upload a German speaking sample, guitar performance or Tang Soo Do form. Stored in this browser only, never uploaded to GitHub. Maximum 25 MB per recording. Use short recordings, for example one minute, and export backups regularly.</p><form id="ordoMedia"><div class="plus-grid"><label>Discipline<select name="track">'+Object.entries(tracks).map(([k,v])=>opt(k,v,"german")).join("")+'</select></label><label>Title<input name="title" maxlength="100" required placeholder="Stage 1 speaking sample"></label><label>Recording<input name="file" type="file" accept="audio/*,video/*" required></label></div><button class="primary-button" type="submit">Save recording</button><p role="status" id="ordoMediaStatus"></p></form><div id="ordoSamples"></div></section>'+
'<section class="large-card"><div class="section-kicker">KEEP YOUR PROGRESS SAFE</div><h2>Backup & device transfer</h2><p class="section-description">Export a private JSON backup of settings, stage selections, progress, notes and metrics. Save it to Files or a private cloud folder of your choice, then import it on another device. Optional recording export includes media; larger files can take time. No automatic server sync, account or cloud upload is configured.</p><label class="plus-inline"><input type="checkbox" id="ordoIncludeMedia"> Include recordings (up to 75 MB total)</label><div class="plus-actions"><button class="primary-button" id="ordoExport">Export backup</button></div><label>Import backup<input type="file" id="ordoImportFile" accept="application/json,.json"></label><label class="plus-inline"><input type="checkbox" id="ordoReplace"> Use imported values instead of local values when they conflict (does not delete other records)</label><button class="secondary-button" id="ordoImport">Import & reload</button><p role="status" id="ordoBackupStatus"></p></section>';
const q=id=>document.getElementById(id), settingsForm=q("ordoSettings"), status=q("ordoSettingsStatus");
settingsForm.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(settingsForm)),x=clean(data),problems=errors(x);if(problems.length){status.textContent=problems.join(" ");return}try{write(SETTINGS,x);location.reload()}catch(err){status.textContent=err.message}});
q("ordoDefaults").addEventListener("click",()=>{if(confirm("Restore default schedule and normal mode? Learning stages and progress will be kept.")){write(SETTINGS,defaults);location.reload()}});
const metric=q("ordoMetric"),fields=q("ordoMetricFields");
function number(label,name,min,max,step=1){return '<label>'+label+'<input type="number" name="'+name+'" min="'+min+'" max="'+max+'" step="'+step+'" required></label>'}
function check(label,name){return '<label class="plus-inline"><input type="checkbox" name="'+name+'"> '+label+'</label>'}
function metricFields(){
const k=metric.elements.track.value;let h="";
if(tracks[k])h='<p class="section-description">Current stage '+stages[k]+' · '+esc(stageText(k))+'<br>Mastery gate: '+esc(gateText(k))+'</p>';
if(k==="german")h+='<div class="plus-grid">'+number("DW exercise accuracy (%)","accuracy",0,100)+number("Word recall (%)","recall",0,100)+number("Comprehensible sentences (out of 5)","sentences",0,5)+'</div>'+check("Completed a simple conversation with minimal English","conversation");
if(k==="guitar")h+='<div class="plus-grid">'+number("Clean chord changes/min","changes",0,250)+number("Steady tempo (BPM)","tempo",0,300)+number("New complete songs","songs",0,10)+'</div>'+check("Met this stage’s exact performance gate (not just practice time)","gate");
if(k==="tang")h+='<div class="plus-grid">'+number("Controlled repetitions","reps",0,1000)+number("New complete forms","forms",0,10)+'</div>'+check("Met this stage’s exact control / form gate without pain","gate");
if(k==="reading")h+='<div class="plus-grid">'+number("Pages read","pages",0,2000)+number("Books finished","books",0,20)+'</div>';
if(k==="film")h+=number("Unique films finished and marked seen","films",0,20);
if(k==="fitness")h+=number("Workout minutes completed","minutes",0,300);
fields.innerHTML=h;
}
metric.elements.track.addEventListener("change",metricFields);metricFields();
function renderMetrics(){
const all=getRecords(), since=n=>{let d=new Date();d.setDate(d.getDate()-n+1);return dateKey(d)}, recent=n=>all.filter(r=>r.date>=since(n)&&r.date<=today);
const sum=(rs,k)=>rs.reduce((a,r)=>a+(Number(r[k])||0),0),avg=(rs,k)=>{const a=rs.filter(r=>Number.isFinite(r[k]));return a.length?Math.round(sum(a,k)/a.length):"—"};
const data=[["German accuracy",r=>avg(r.filter(x=>x.track==="german"),"accuracy"),"%"],["Guitar tempo",r=>avg(r.filter(x=>x.track==="guitar"),"tempo")," BPM"],["Clean changes/min",r=>avg(r.filter(x=>x.track==="guitar"),"changes"),""],["Songs finished",r=>sum(r,"songs"),""],["Controlled reps",r=>sum(r,"reps"),""],["Forms completed",r=>sum(r,"forms"),""],["Pages read",r=>sum(r,"pages"),""],["Books finished",r=>sum(r,"books"),""],["Films finished",r=>sum(r,"films"),""],["Workout minutes",r=>sum(r,"minutes"),""]];
q("ordoTrends").innerHTML='<div class="plus-table"><table><thead><tr><th>Measure</th><th>7 days</th><th>30 days</th><th>All time</th></tr></thead><tbody>'+data.map(([label,fn,u])=>'<tr><th>'+label+'</th>'+[recent(7),recent(30),all].map(r=>'<td>'+fn(r)+(fn(r)==="—"?"":u)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div><p class="section-description">Accuracy, tempo and chord changes are averages; other values are totals. Logs: '+all.length+'.</p>';
const months=Array.from({length:6},(_,i)=>{const d=new Date();d.setDate(1);d.setMonth(d.getMonth()-(5-i));const key=dateKey(d).slice(0,7);return {key,rows:all.filter(r=>r.date.startsWith(key))}});
q("ordoTrends").innerHTML+='<h3>Six-month history</h3><div class="plus-table"><table><thead><tr><th>Month</th><th>German %</th><th>Guitar BPM</th><th>Films</th><th>Pages</th></tr></thead><tbody>'+months.map(m=>'<tr><th>'+m.key+'</th><td>'+avg(m.rows.filter(r=>r.track==="german"),"accuracy")+'</td><td>'+avg(m.rows.filter(r=>r.track==="guitar"),"tempo")+'</td><td>'+sum(m.rows,"films")+'</td><td>'+sum(m.rows,"pages")+'</td></tr>').join("")+'</tbody></table></div>';
q("ordoRecommendations").innerHTML=Object.keys(tracks).map(k=>{const r=recentAssessment(k,stages[k]),a=assessment(k,stages[k],r),atEnd=stages[k]===cap[k];return '<article class="plus-result"><strong>'+tracks[k]+' · stage '+stages[k]+'</strong><p>'+esc(a.reason)+(r?.notes?' Last note: '+esc(r.notes):"")+'</p>'+(a.pass&&!atEnd?'<button class="primary-button" data-advance="'+k+'">Accept recommendation: advance one stage</button>':a.pass&&atEnd?'<p>Initial curriculum complete. Continue at the next proficiency level with a new plan; do not claim certification.</p>':'<p class="section-description">Recommendation: stay on this stage and repeat the weakest lesson.</p>')+'</article>'}).join("");
q("ordoRecent").innerHTML=all.length?all.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date))||String(b.created).localeCompare(String(a.created))).slice(0,20).map(r=>'<article class="plus-result"><strong>'+esc(r.date)+' · '+esc(tracks[r.track]||r.track)+(r.stage?' · stage '+esc(r.stage):'')+'</strong><p>'+esc(Object.entries(r).filter(([k])=>["accuracy","recall","sentences","changes","tempo","songs","reps","forms","pages","books","films","minutes"].includes(k)).map(([k,v])=>k+': '+v).join(" · "))+'</p><p>'+esc(r.notes||"")+'</p><button type="button" class="secondary-button" data-remove-metric="'+esc(r.id)+'">Delete entry</button></article>').join(""):'<p>No results logged yet.</p>';
}
metric.addEventListener("submit",e=>{e.preventDefault();const f=new FormData(metric),k=f.get("track"),r={id:crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random(),date:f.get("date"),created:new Date().toISOString(),track:k,notes:String(f.get("notes")||"").slice(0,1000)};if(tracks[k])r.stage=stages[k];for(const n of ["accuracy","recall","sentences","changes","tempo","songs","reps","forms","pages","books","films","minutes"])if(f.has(n))r[n]=Number(f.get(n));r.gate=f.has("gate");r.conversation=f.has("conversation");try{write(METRICS,[...getRecords(),r]);q("ordoMetricStatus").textContent="Saved. See updated recommendation.";metric.elements.notes.value="";renderMetrics()}catch(err){q("ordoMetricStatus").textContent=err.message}});
root.addEventListener("click",e=>{const k=e.target.dataset?.advance,id=e.target.dataset?.removeMetric;if(k&&tracks[k]&&assessment(k,stages[k],recentAssessment(k,stages[k])).pass&&stages[k]<cap[k]){if(confirm("Advance "+tracks[k]+" one stage? Other disciplines stay unchanged.")){write("ordo-curriculum-stages-v2",{...stages,[k]:stages[k]+1});location.reload()}}if(id&&confirm("Delete this recorded assessment?")){write(METRICS,getRecords().filter(r=>r.id!==id));renderMetrics()}});
renderMetrics();
const mediaForm=q("ordoMedia"),mediaStatus=q("ordoMediaStatus"),sampleList=q("ordoSamples");let playingURL;
async function renderMedia(){try{const rows=await mediaAll();sampleList.innerHTML=rows.length?rows.sort((a,b)=>b.date.localeCompare(a.date)).map(v=>'<article class="plus-result"><strong>'+esc(v.title)+'</strong><p>'+esc(tracks[v.track]||v.track)+' · '+esc(v.date)+' · Stage '+esc(v.stage)+' · '+Math.round(v.blob.size/1024)+' KB</p><div class="plus-actions"><button class="secondary-button" data-play="'+esc(v.id)+'">Play</button><button class="secondary-button" data-download="'+esc(v.id)+'">Download</button><button class="secondary-button" data-delete-media="'+esc(v.id)+'">Delete</button></div></article>').join("")+'<div id="ordoPlayer"></div>':'<p>No recordings saved yet.</p>'}catch(e){mediaStatus.textContent=e.message}}
mediaForm.addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(mediaForm),file=f.get("file"),track=f.get("track");if(!file||!file.size||file.size>25*1024*1024||!(/^(audio|video)\//.test(file.type))){mediaStatus.textContent="Select an audio or video recording no larger than 25 MB.";return}try{await mediaPut({id:crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random(),track,title:String(f.get("title")).slice(0,100),stage:stages[track],date:today,blob:file,filename:file.name});mediaStatus.textContent="Recording saved on this device.";mediaForm.reset();await renderMedia()}catch(err){mediaStatus.textContent="Could not save: "+err.message}});
sampleList.addEventListener("click",async e=>{const {play,download,deleteMedia}=e.target.dataset||{};try{if(play){const v=await mediaRead(play);if(!v)return;if(playingURL)URL.revokeObjectURL(playingURL);playingURL=URL.createObjectURL(v.blob);const player=document.createElement(v.blob.type.startsWith("video/")?"video":"audio");player.controls=true;player.src=playingURL;player.style.maxWidth="100%";q("ordoPlayer").replaceChildren(player)}if(download){const v=await mediaRead(download);if(v){const u=URL.createObjectURL(v.blob),a=document.createElement("a");a.href=u;a.download=v.filename||"ordo-recording";a.click();setTimeout(()=>URL.revokeObjectURL(u),30000)}}if(deleteMedia&&confirm("Delete this recording from this device?")){if(playingURL)URL.revokeObjectURL(playingURL);await mediaDelete(deleteMedia);await renderMedia()}}catch(err){mediaStatus.textContent=err.message}});
renderMedia();
const backupStatus=q("ordoBackupStatus");
q("ordoExport").addEventListener("click",async()=>{try{backupStatus.textContent="Preparing backup…";let recordings=[];if(q("ordoIncludeMedia").checked){const rows=await mediaAll();if(rows.reduce((a,v)=>a+v.blob.size,0)>75*1024*1024)throw Error("Recordings exceed 75 MB. Export progress without media and download recordings individually.");for(const v of rows){const {blob,...meta}=v;recordings.push({...meta,data:await asData(blob)})}}saveFile(JSON.stringify(makeBackup(collect(),recordings)),"ordo-backup-"+today+".json");backupStatus.textContent="Backup prepared. Save it in a private location."}catch(e){backupStatus.textContent=e.message}});
q("ordoImport").addEventListener("click",async()=>{try{const f=q("ordoImportFile").files[0];if(!f||f.size>110*1024*1024)throw Error("Choose a supported backup no larger than 110 MB.");const payload=JSON.parse(await f.text()),replace=q("ordoReplace").checked,pending=safeImport(payload,replace);if(!confirm("Import "+Object.keys(pending).length+" progress/settings records and "+(payload.recordings?.length||0)+" recordings?"))return;let incoming=Array.isArray(payload.recordings)?payload.recordings:[];const existing=incoming.length?await mediaAll():[],ids=new Set(existing.map(v=>v.id));for(const v of incoming){if(!v||typeof v.id!=="string"||typeof v.data!=="string"||v.data.length>36*1024*1024||!/^data:(audio|video)\//.test(v.data)||(!replace&&ids.has(v.id)))continue;const blob=await (await fetch(v.data)).blob();if(blob.size>25*1024*1024)continue;await mediaPut({id:v.id,track:tracks[v.track]?v.track:"german",title:String(v.title||"Imported").slice(0,100),stage:Math.max(1,Math.min(19,Number(v.stage)||1)),date:/^\d{4}-\d{2}-\d{2}$/.test(v.date)?v.date:today,filename:String(v.filename||"recording").slice(0,160),blob})}for(const [k,v] of Object.entries(pending))localStorage.setItem(k,v);backupStatus.textContent="Imported. Reloading…";location.reload()}catch(e){backupStatus.textContent="Import stopped: "+e.message+". Any records already written are retained; existing data is not cleared."}});
}
document.addEventListener("DOMContentLoaded",mount);
})();

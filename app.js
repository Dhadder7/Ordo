/* =====================================================
   DANIEL DEVELOPMENT SYSTEM
   DAILY CURRICULUM
===================================================== */


function session(
icon,
name,
start,
end,
minutes,
objective,
steps,
prompt,
resource = null
) {

return {

icon,
name,
start,
end,
minutes,
objective,
steps,
prompt,
resource

};

}



/* =====================================================
   WEEKLY SCHEDULE
===================================================== */



/* ORDO balanced routine — independent mastery-based curriculum stages. */
const ORDO_STAGE_KEY="ordo-curriculum-stages-v2";
function readLocal(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch(e){return fallback;}}
const stageDefaults={german:1,guitar:1,tang:1};
function normalizeStages(raw){return Object.fromEntries(Object.keys(stageDefaults).map(k=>[k,Math.max(1,Math.min(k==="german"?19:12,Math.floor(Number(raw?.[k])||1)))]));}
const ORDO_START_MIGRATION="ordo-day-one-20261126";
if(!readLocal(ORDO_START_MIGRATION,false)){
 localStorage.setItem("ordo-prelaunch-stages-20261126",JSON.stringify(normalizeStages(readLocal(ORDO_STAGE_KEY,stageDefaults))));
 localStorage.setItem(ORDO_STAGE_KEY,JSON.stringify(stageDefaults));
 localStorage.setItem("ordo-german-a1-position-v1",JSON.stringify({stage:1,day:1,effective:"2026-11-26",previousDay:1}));
 localStorage.setItem(ORDO_START_MIGRATION,"true");
}
const stages=normalizeStages(readLocal(ORDO_STAGE_KEY,stageDefaults));
function programDay(date){return 1+Math.round((Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())-Date.UTC(2026,10,26))/86400000);}
function programLabel(date){const n=programDay(date);return n>0?"Day "+n:"Before Day 1";}
const GERMAN_POSITION="ordo-german-a1-position-v1";
function germanDayFor(date,stage){const key=formatDateKey(date),today=formatDateKey(new Date());if(key<today){const saved=readLocal("ordo-german-day-history-"+key,null);if(saved?.stage===stage)return saved.day;}const p=readLocal(GERMAN_POSITION,null);const current=p?.stage===stage?Math.max(1,Math.min(7,Number(key<p.effective?p.previousDay:p.day)||1)):1;const base=key<p?.effective?p.effective:today;const delta=key>today?Math.max(0,Math.round((Date.parse(key)-Date.parse(base))/86400000)):0;return Math.min(7,current+delta);}
function queueGermanDay(stage,day){const today=new Date(),next=new Date(today);next.setDate(next.getDate()+1);localStorage.setItem(GERMAN_POSITION,JSON.stringify({stage,day:Math.min(7,day+1),previousDay:day,effective:formatDateKey(next)}));}
const DW_INTRO_LINKS=["https://learngerman.dw.com/en/hallo/l-37250531","https://learngerman.dw.com/en/kein-problem/l-37251054","https://learngerman.dw.com/en/tsch%C3%BCss/l-37251033","https://learngerman.dw.com/en/von-a-bis-z/l-37256418"];
const DW_INTRO_PRACTICE=[["Recognize and say basic greetings.","Hallo! | Guten Morgen! | Guten Tag! | Guten Abend!","Say each greeting aloud; match it to a time of day. Greet someone using three different greetings."],["Use simple polite expressions and form short sentences.","Danke! | Bitte! | Entschuldigung! | Kein Problem!","Practice a four-line exchange using a greeting, a thank-you and a polite response."],["Say goodbye and choose an appropriate formal or informal expression.","Tschüss! | Auf Wiedersehen! | Bis bald! | Gute Nacht!","Practice greeting and saying goodbye to a friend, then to someone you do not know."],["Recognize German letter names and spell your name.","Wie schreibt man das? | A, B, C | Ä, Ö, Ü, ß","Listen to the alphabet; repeat it, spell your first and last name aloud, and check unfamiliar letters."]];
const germanDayTitle=(stage,day)=>day<=4?germanUnits[stage-1][1].split("|")[day-1]:day===5?"Error correction + speaking":day===6?"Unit review + conversation":"Unit mastery assessment";
const DW="https://learngerman.dw.com/en/nicos-weg/c-36519789", ANKI="https://ankiweb.net/", GUITAR="https://www.justinguitar.com/classes/beginner-guitar-course-grade-one", SONGS="https://www.justinguitar.com/songs", BOOK="https://www.amazon.com/dp/0865681708", BOOKTOC="https://www.kriso.lv/tang-soo-do-ultimate-guide-korean-db-9780865681705.html";
const FORM="https://www.youtube.com/watch?v=b5FzgKp9rg0", FORM2="https://www.youtube.com/watch?v=enGPL_HMtT0", STANCES="https://www.youtube.com/watch?v=IXvCuXaat_M", KICKS="https://www.youtube.com/watch?v=NTFvuSk2rVQ", TERMS="https://tka.cc/promotion/korean-terms/", PENTA="https://www.justinguitar.com/modules/minor-pentatonic-scale";
const link=(url,label)=>'<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+' ↗</a>';
const germanUnits=[
["Welcome to A1","Hallo!|Kein Problem!|Tschüss!|Von A bis Z","greet someone, say goodbye and spell your name"],
["Meeting people","Ich heiße Emma|Das ist Nico|Woher kommst du?|Nico hat ein Problem","introduce yourself and someone else; ask where a person comes from"],
["Contact details","Zahlen von 1 bis 100|Wichtige Nummern|Adressen|Auf dem Amt","say numbers, spell a fictional address and give fictional contact details"],
["In company","Was machst du hier?|Was trinkst du?|Eine Pizza, bitte!|Zahlen, bitte!","order food and drinks, ask what someone is doing and ask for the bill"],
["Around the world","Ich war schon in Berlin|Wo liegt das?|In Europa|Andere Länder","describe countries, locations and languages"],
["Things","Was ist das?|Wem gehört das?|Ich habe kein …|Das Auto ist rot","name objects with articles, express possession and describe colors"],
["Living","So wohne ich|Meine Wohnung|Sofa, Sessel und Tisch|Unser Haus","describe your home and furniture"],
["Days and times","Emmas Tag|Tageszeiten|Am Sonntag koche ich|Emmas Wochenende","describe a daily routine and weekend plans"],
["Appointments","Wie spät ist es?|Hast du morgen Zeit?|Wann spielen wir?|Zu spät?!","tell time and arrange an appointment"],
["Working life","Ich bin Lehrerin|Mein Beruf|Wo ist der Aufzug?|Traumberufe","describe occupations and ask workplace questions using fictional examples"],
["Orientation","Wo ist der Bahnhof?|An der Ampel links|Mit Bus und Bahn|Im Büro","ask for and understand simple directions"],
["Eating and leisure","Lebensmittel|Ich mag (nicht)!|Haushaltsarbeit|Was macht dir Spaß?","talk about food, household chores and hobbies"],
["Food","Mengen und Preise|Was darf es sein?|Sonst noch etwas?|Wie viel Mehl?","ask for quantities and prices, order groceries and describe recipe ingredients"],
["Weather and holiday","Wie war dein Urlaub?|Jahreszeiten|Der Ausflug|Wie wird das Wetter?","describe a holiday, the seasons and weather"],
["Clothing","Das ist jetzt modern|Mein Lieblingspulli|Das passt gut!|Schick!","describe clothing, preferences, fit and shopping"],
["Family","Meine Familie|Meine Eltern|Meine Tante|Mein Bruder","describe a fictional family using possessives"],
["Sports and exercise","Von Kopf bis Fuß|Bist du fit?|Fitness|Ist das gesund?","name parts of the body and describe everyday activities"],
["Health","Geht es dir gut?|Beim Arzt|Gute Besserung!|Nehmen Sie …","describe a fictional symptom, understand simple advice and express well-wishes"],
["Home","Meine Heimat|Leben in Deutschland|Anders als zu Hause|Ich träume von …","describe your home country, compare everyday life and express simple hopes"]
];
const guitarWeeks=[
["Module 0 then Module 1: A and D","A/D chord shapes; tune E A D G B E; pick each string separately","A to D and back","30 clean changes/minute; 8 bars without stopping","Three Little Birds (preview only; practice A and D)", "https://www.youtube.com/watch?v=UY3YEMMFfSs",50],
["Module 2: rhythm and first riff","E chord, A/D/E transitions; first riff in the course","A-D, D-E, E-A","35 clean changes/minute; steady quarter notes","Three Little Birds", "https://www.youtube.com/watch?v=UY3YEMMFfSs",55],
["Module 3: minor chords, capo and upstrums","Am, Em, Dm; compare major and minor; slow down-up strums","Am-Em, D-Am, E-Dm","3 clean loops; no pauses between chord changes","Three Little Birds (complete simplified arrangement)", "https://www.youtube.com/watch?v=UY3YEMMFfSs",60],
["Module 4: metronome and strumming pattern","G chord; steady down-up hand motion; follow module strumming lesson","G-D, G-A, G-E","40 clean changes/minute; 8 bars in time","Bad Moon Rising", "https://www.youtube.com/watch?v=tFPs89WBPuU",60],
["Module 5: C chord and applied theory","C chord; identify root notes of A, D, E, G and C","C-G, C-Am, C-D","30 clean changes/minute; 3 uninterrupted verse loops","Bad Moon Rising", "https://www.youtube.com/watch?v=tFPs89WBPuU",65],
["Module 6: 6/8 and alternate picking","Count 1-2-3-4-5-6; alternate pick single strings; distinguish 4/4 and 6/8","G-D, D-Am, G-C","play a 6/8 exercise and 4/4 loop with a steady pulse","Bad Moon Rising (complete simplified arrangement)", "https://www.youtube.com/watch?v=tFPs89WBPuU",70],
["Module 7: air changes, dynamics, consolidation","Switch shapes in the air; soft/loud control; slow strumming","G-D, D-Am, G-C","40 clean changes/minute; play one full song without stopping","Knockin' on Heaven's Door", "https://www.youtube.com/watch?v=zoPj5Z80AxA",60],
["Grade 1 consolidation","Review all open chords; mute unwanted strings; play through mistakes","G-D, D-Am, D-C","play two verses and choruses in time","Knockin' on Heaven's Door", "https://www.youtube.com/watch?v=zoPj5Z80AxA",65],
["Blues introduction: minor pentatonic pattern 1","A minor pentatonic: A C D E G; learn shape from scale lesson; slow alternate picking","A-D, D-E, E-A","3 ascending/descending passes at 60 bpm, clean notes","Knockin' on Heaven's Door (complete)", "https://www.youtube.com/watch?v=zoPj5Z80AxA",60],
["Blues rhythm: 12-bar framework","Count a simple 12-bar blues in A; use A, D and E; practice chord changes on beat one","A-D, D-E, E-A","3 consecutive 12-bar loops without losing place","Bad Moon Rising (review)", "https://www.youtube.com/watch?v=tFPs89WBPuU",65],
["Blues phrasing and ear training","Use 3–5 notes from A minor pentatonic; leave space; repeat short phrases","G-D, D-Am, C-G","record 4 short phrases with a consistent beat","Three Little Birds (review)", "https://www.youtube.com/watch?v=UY3YEMMFfSs",65],
["Performance and consolidation","Review weak chords, scale shape and dynamics; rehearse three songs","Choose the weakest three chord pairs","record 3 complete simplified songs; keep pulse even if imperfect","Knockin' on Heaven's Door (review)", "https://www.youtube.com/watch?v=zoPj5Z80AxA",70]
];
const tangWeeks=[
["Foundations and etiquette","pp. 6–14 (biography/history/lineage); pp. 31–33 (stances); glossary pp. 251–254","read history and identify Moo Duk Kwan lineage; practice ready and front stance","front and horse stance, 3 × 15 seconds per side/position","5 stable transitions and explain 3 terms",STANCES],
["Stances and controlled movement","pp. 31–33 (stances); pp. 34–38 (beginning of basic movements)","identify front, back and horse stances from photos; practice at comfortable depth","5 slow transitions per side; pause and check alignment","10 controlled transitions without losing balance",STANCES],
["Hand techniques","pp. 23–30 (hand/foot techniques); pp. 34–44 (basic movements)","find basic punch and low/middle block illustrations; practice slowly in air","2 × 5 repetitions per side for each technique; no contact or locked joints","8 of 10 repetitions controlled; identify start and end positions","https://www.youtube.com/watch?v=BGzE0JQqyAo"],
["Front kick fundamentals","pp. 55–61 (kicking techniques; locate front kick illustration)","compare book photos with front-kick reference; supported chamber and return at low height","2 × 5 slow chamber/rechamber per leg; easy low kicks only if comfortable","5 controlled low repetitions on each leg","https://tangsoodoworld.com/reference/reference_techniques_front_kick.htm"],
["Side kick and roundhouse preparation","pp. 55–61 (locate side and roundhouse kick illustrations)","compare chambers and support-foot movement; practice slowly with support as needed","2 × 5 chambers per side; no high kicks or force","5 balanced chambers per side; stop if painful",KICKS],
["Footwork and transitions","pp. 31–33; pp. 34–54 (basic movements)","review book stances; practice forward and backward stepping in clear space","3 sets of 4 slow steps; reset between sets","3 clean sets without loss of balance",STANCES],
["Connect basics","pp. 34–54; pp. 62–65 (forms overview)","review one stance, one basic hand movement and controlled transition; read purpose of forms","3 × 4 slow movements; practice without contact","explain the purpose of forms and complete 3 steady sets",FORM2],
["Basic Form One: first section","pp. 66–70 (Kee Cho Hyung Il Boo)","follow first few illustrated movements; use book diagrams for direction and sequence","3 slow repetitions of first section, then check photos","perform first section from memory twice",FORM],
["Basic Form One: remaining sections","pp. 66–70 (Kee Cho Hyung Il Boo)","learn next section in small groups; connect only after each section is comfortable","3 slow repeats of each section and 2 full attempts","complete sequence slowly with at most 2 prompts",FORM],
["Basic Form One: accuracy","pp. 66–70; compare pp. 31–33","record from front/side if possible; compare stance depth and sequence to book","3 slow whole-form rehearsals; correct just one cue at a time","2 consecutive complete sequences without prompts",FORM2],
["Basic Form Two: orientation only","pp. 71–75 (Kee Cho Hyung Ee Boo); revisit pp. 66–70","only begin form two if form one gate is met; compare book illustrations with federation resource","3 slow attempts of first section; otherwise repeat form one","explain differences and perform first section twice, or consolidate form one","https://westerntangsoodofederation.org/hyungs-forms/"],
["Review and instructor feedback","pp. 31–33, 55–61, 66–75; glossary pp. 251–254","record stances and form one; prepare questions for a qualified instructor; no rank claims","repeat 3 full forms with breaks; demonstrate comfortable basics","2 complete controlled form-one performances; note 3 corrections",FORM]
];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function S(icon,name,start,end,minutes,objective,steps,resource=null,prompt="",track="",stage=0){
return {icon,name,start,end,minutes,objective,steps,resource,prompt,track,stage};
}
const res=(name,url,assignment)=>({name,url,assignment});
const GOETHE_A1="https://ankiweb.net/shared/info/293204297", SMARTER_A1="https://ankiweb.net/shared/info/207285542", GOETHE_RESERVE="https://ankiweb.net/shared/decks?search=Goethe%20Institute%20A1%20Wordlist%20v2";
const ANKI_DECKS="https://ankiweb.net/decks";
const primaryDeck="Goethe Institute → A1 Wordlist";
function germanReview(start,end,minutes,stage,first=false){
const setup="One-time setup if not imported: on a computer install "+link("https://apps.ankiweb.net/","free Anki Desktop")+", sign in with your AnkiWeb account and sync existing cards first. Download "+link(GOETHE_A1,"Goethe-Zertifikat A1 (primary)")+" and "+link(SMARTER_A1,"SmarterGerman A1 Illustrated (supplementary)")+" or use your saved .apkg files. In Anki Desktop choose File → Import for each, then Sync including media. Do not import the reserve deck unless needed.";
const options="In Anki Desktop, set separate deck option presets: primary New cards/day = 3; supplementary = 0 initially (enable up to 3 only for a targeted weekend session). Review due cards first; do not force 20 or add new cards when reviews are unfinished.";
if(first)return S("🇩🇪","German Coach",start,end,minutes,"Day 1 · Import the shared A1 decks and study your first three primary cards.",[
"Open "+link("https://ankiweb.net/account/signup","AnkiWeb sign up (free)")+" or "+link("https://ankiweb.net/account/login","log in")+". If you already created your account, this is complete.",
"Open "+link(ANKI_DECKS,"Decks")+". If you previously made an empty German A1 deck, leave it alone; it is not needed for shared-deck study.",
setup,
options+" On iPhone open "+link(ANKI_DECKS,"AnkiWeb Decks")+" → "+primaryDeck+" → study. Say the answer before revealing it; listen to available audio, repeat aloud, then select Again if wrong or Good if correct. Study up to three new cards.",
"Success: primary deck appears on AnkiWeb, audio works where supported, and you can recall your first three cards aloud. If setup takes longer than 15 minutes, finish setup first and resume study next session."
],res("Study primary deck on AnkiWeb",ANKI_DECKS,"Choose Goethe Institute → A1 Wordlist. No paid iPhone app needed after desktop import and sync."),"","german",stage);
return S("🇩🇪","German Coach",start,end,minutes,"Spaced retrieval — Goethe A1 vocabulary and active recall.",[
"Open "+link(ANKI_DECKS,"AnkiWeb Decks")+" → "+primaryDeck+". If missing: "+setup,
"Review due cards first (aim for about 20 if due, within 15 minutes). Say the answer before revealing it; use Again for incorrect recall and Good for correct recall. Listen and repeat available audio; include noun articles and plural forms.",
"Study up to three new primary cards only if due reviews are finished. Say one example sentence aloud and connect it to the current DW Nicos Weg lesson when relevant. No manual flashcard creation required.",
"Success: complete due reviews within available time; recall the new items and note any difficult words. If reviews remain, skip new cards and resume next session."
],res("Study primary deck on AnkiWeb",ANKI_DECKS,"Goethe Institute → A1 Wordlist; SmarterGerman is supplementary, not a second daily quota."),"","german",stage);}
function germanLesson(day,stage,start,end,minutes){
const [unit,lessonText,goal]=germanUnits[stage-1], lessons=lessonText.split("|"), n=day-1;
const core= n>=0&&n<4;
const title=core?lessons[n]:day===5?"Error correction + speaking":day===6?"Unit review + conversation":"Unit mastery assessment";
const lessonUrl=stage===1&&core?DW_INTRO_LINKS[n]:DW;
const path="Open "+link(lessonUrl,stage===1&&core?title+" — DW A1 lesson":"DW Nicos Weg A1")+"; "+(stage===1&&core?"start directly, or return to Welcome to A1! → "+title:"choose A1 / Beginners → "+unit+" → "+(core?title:"the four lessons in this unit"))+". Select English as the interface language if needed." ;
let steps=core?[
"0–3 min: "+path+" Open the lesson video.",
"3–8 min: watch once without reading the transcript; say what happened in German or English.",
"8–20 min: select the next exercise / arrow and complete the interactive tasks in order. Do not reveal answers until you attempt them.",
"20–25 min: open the vocabulary and grammar sections; select three useful expressions and note one grammar pattern.",
"25–32 min: replay the video; shadow three lines aloud, then produce five original sentences connected to "+goal+".",
"32–35 min: close the lesson and recall five words plus three sentences. Record the exercise score or errors; target 80% on a fresh attempt. Resume unfinished exercises next time rather than rushing."
]:day===5?[
"0–5 min: recall ten words from this week's four episodes without notes.",
"5–15 min: return to missed DW exercises. Reattempt them before checking answers.",
"15–25 min: role-play the weekly goal with German Coach. Answer in German first; ask for corrections after each turn.",
"25–35 min: write five corrected sentences and say them aloud. Aim for 8/10 recalled words and 4/5 comprehensible sentences."
]:day===6?[
"0–10 min: open "+link(ANKI_DECKS,"AnkiWeb Decks")+" → "+primaryDeck+"; review due cards first. 10–15 min: if reviews are finished, use SmarterGerman A1 - Illustrated vocabulary for up to three relevant or difficult cards (pictures, audio and sentences); skip duplicate words you already know. If no supplementary cards are available, use DW vocabulary instead.",
"15–35 min: revisit all four DW videos; listen first without subtitles, then verify with the transcript.",
"35–55 min: complete outstanding exercises or repeat weak tasks; review grammar and create eight sentences.",
"55–70 min: speak with German Coach about the unit goal; complete a 2–3 minute dialogue.",
"70–75 min: record errors, useful phrases and what to repeat tomorrow."
]:[
"0–15 min: open "+link(ANKI_DECKS,"AnkiWeb Decks")+" → "+primaryDeck+"; review due cards and sample unit words. Use the "+link(GOETHE_RESERVE,"Goethe Institute A1 v2 reserve deck")+" only for alternative example sentences when needed; no separate daily review quota.",
"15–35 min: redo a selection of DW exercises without hints; record first-attempt accuracy.",
"35–55 min: role-play the unit goal with German Coach; attempt at least eight exchanges in German.",
"55–65 min: write five original sentences; correct after attempting.",
"65–75 min: record results. Advance only after at least 80% exercise/word accuracy, 4/5 comprehensible sentences and a simple conversation with minimal English. Otherwise repeat this stage. "+(stage===19?"Take the full A1 assessment and start DW A2 only when ready; continue the same study/retrieval cycle.":"")
];
if(stage===1&&core){const [skill,phrases,drill]=DW_INTRO_PRACTICE[n];steps=["0–3 min: "+path+(day===1?" Sign in or create a free DW account to save your progress.":""),"3–8 min: play the clip once; then replay with the transcript/subtitles if needed. Goal: "+skill,"8–20 min: select the next exercise / arrow; attempt each task in order. Use English instructions if available, replay audio when needed, and check answers only after trying.","20–25 min: open the lesson vocabulary and grammar sections; study the examples. Practice: "+phrases+".","25–32 min: "+drill,"32–35 min: close the notes, recall three phrases or letter names aloud, and record the exercise score. Aim for 80%; finish any outstanding exercises before tapping the next-study-day button."];if(day===1)steps[1]+=" Video fallback: "+link("https://www.youtube.com/watch?v=dC6ZGLzdaTs","DW episode 1")+" (return to DW for exercises).";}
if(minutes===75&&day<=5)steps.push("35–75 min: finish remaining exercises, redo weak tasks, listen again and speak five original sentences. Do not skip ahead just to fill time.");
if(minutes===35&&day>=6)steps=day===6?["0–5 min: recall ten words from the four lessons without notes.","5–20 min: open "+link(DW,"Nicos Weg")+" → A1 → "+unit+"; revisit missed exercises and note errors.","20–30 min: role-play the unit goal aloud with German Coach.","30–35 min: record your score and one thing to revisit."]:["0–10 min: redo DW unit exercises without hints; record accuracy.","10–20 min: role-play the unit goal with German Coach, aiming for eight exchanges.","20–30 min: write five original sentences, then correct them.","30–35 min: advance only after 80% exercise and recall accuracy, 4/5 comprehensible sentences and a simple conversation with minimal English; otherwise repeat."];
return {...S("🇩🇪","German Coach",start,end,minutes,"A1 Beginner · Stage "+stage+"/19 · "+unit+" · "+title+". Goal: "+(stage===1&&core?DW_INTRO_PRACTICE[n][0]:goal+".")+ (day===7?"":" Keep this assignment until completed."),steps,res(core?"Open "+title+" — DW A1":"Open DW A1 course",lessonUrl,"Follow the guided lesson and exercises above. If a direct link fails, open the course overview and select the named lesson."),"Act as my absolute-beginner A1 German conversation partner. Unit: "+unit+". Lesson: "+title+". Goal: "+(stage===1&&core?DW_INTRO_PRACTICE[n][0]:goal)+". Give short examples with English meanings first, then ask one question at a time. Let me respond before correcting. End with a score out of 10 and one practical next step.","german",stage),germanDay:day};}
function guitar(day,stage,start,end){
const [module,skill,pairs,gate,song,video,bpm]=guitarWeeks[stage-1];
const mode={1:"Learn",4:"Technique",6:"Repertoire",0:"Assessment"}[day];
let steps=[
"0–5 min: tune to standard tuning; relax hands; pick each string slowly at "+bpm+" bpm.",
day===1?"5–15 min: open "+link(GUITAR,"JustinGuitar Grade 1")+" → "+module+". Watch the relevant lesson; pause and copy the demonstration. "+(stage===1?"Use How To Play The D Chord, How To Play The A Chord and the One Minute Changes exercise. ":stage===2?"Find the E chord and first riff lessons. ":stage>=9?"Use the separate minor pentatonic module linked below. ":"") +skill+".":"5–15 min: revisit the "+module+" demonstration. "+skill+". Practice the weakest movement slowly; use the lesson video rather than guessing.",
"15–25 min: "+pairs+". Do 3 one-minute change drills with short rests; count only clear chords. "+(stage>=9?"Spend 4 minutes with "+link(PENTA,"minor pentatonic lesson")+" and play one clean note per beat.":"Check fingers and unwanted string noise, then strum steady quarter notes."),
"25–35 min: "+link(video,song+" tutorial")+". "+(day===1?"Learn one small phrase or section; loop it slowly.":day===4?"Loop the hardest 2–4 bars, then connect the next section.":day===6?"Play verse and chorus together at a manageable speed.":"Record a continuous take of the assigned section or whole song.")+" Use "+link(SONGS,"JustinGuitar song library")+" for chord diagrams and song lessons.",
"35–40 min: log tempo, clean changes/minute, and song section. "+(day===0?"Mastery gate: "+gate+". If not met, repeat this stage; do not advance simply because the week ended.":"Success today: three steady repetitions with clear notes; slow down when errors recur.")
];
if(stage===1&&day===1)steps=[
"0–5 min: open "+link(GUITAR,"JustinGuitar Grade 1")+" → Module 0. Create a free account or sign in if prompted. Open the tuning lesson and tune strings E A D G B E from thickest to thinnest.",
"5–15 min: Module 1 → How To Play The D Chord. Watch, pause, copy the fingers and pick each intended string separately.",
"15–25 min: Module 1 → How To Play The A Chord. Watch and copy; pick the intended strings separately. Repeat slowly.",
"25–35 min: find One Minute Changes in Module 1. Switch between A and D slowly for three one-minute rounds with rests. Count clean changes; no minimum today.",
"35–40 min: play four slow downstrums on A and four on D, twice. Log baseline clean changes per minute. Success: identify strings and make both chord shapes, even slowly. No full song required."
];
return S("🎸","Music Mentor",start,end,40,"Guitar stage "+stage+"/12 · "+mode+" · "+module,steps,res("JustinGuitar course",GUITAR,"Open the module listed above; song and scale links are embedded in the steps."),"Help me troubleshoot guitar stage "+stage+": "+skill+". My target is "+gate+". Ask for my tempo, clean changes, and one problem. Suggest one focused correction, not an entirely new lesson.","guitar",stage);}
function tang(day,stage,start,end,minutes){
const [topic,pages,study,drill,gate,video]=tangWeeks[stage-1], mode=day===2?"Learn":day===4?"Reinforce":"Review and assess";
const short=minutes===30;
return S("🥋","Martial Arts Coach",start,end,minutes,"Tang Soo Do stage "+stage+"/12 · "+mode+" · "+topic,[
"0–5 min: clear the floor; gentle mobility and easy stance movements. No contact, forced stretching, high kicks or training through pain.",
"5–"+(short?10:12)+" min: open Kang Uk Lee's book, "+pages+". "+study+". Match your copy by heading if pagination differs. Book contents source: "+link(BOOKTOC,"ISBN-matched contents")+".",
(short?"10–20":"12–25")+" min: "+link(video,"assigned technique/form demonstration")+". Watch slowly and compare with the book. "+drill+". Use comfortable range and rest between attempts.",
(short?"20–25":"25–35")+" min: "+(day===2?"repeat the movement in isolation, then check the start/end positions":day===4?"revisit Tuesday's weakest movement and compare a slow repetition against the pictures":"record a short slow performance and compare the sequence with the book")+"; keep practice non-contact. If video and book differ, follow the book and ask an instructor.",
(short?"25–30":"35–40")+" min: cool down; log one cue and a short result. "+(day===6?"Mastery gate: "+gate+". Repeat if not met; seek a qualified instructor for technique feedback.":"Target: consistent control before speed. Review "+link(TERMS,"Korean terms")+" for the relevant movement.")
],res("Tang Soo Do reference book",BOOK,"Use the specified pages; the linked video is a supplementary demonstration, not verified as the identical lineage."),"Help me review "+topic+" using Kang Uk Lee's Tang Soo Do. Do not invent page contents or rank requirements. Ask what I observed in my book, help compare terminology, and suggest one safe correction. Recommend qualified instructor feedback when needed.","tang",stage);}
function simple(icon,name,start,end,minutes,objective,steps,resource=null){return S(icon,name,start,end,minutes,objective,steps,resource);}
function buildSchedule(s,referenceDate=new Date()){
const schedule={};
for(let d=0;d<7;d++){
const weekday=d>=1&&d<=5, a=[];
const sessionDate=new Date(referenceDate);sessionDate.setDate(sessionDate.getDate()+d-referenceDate.getDay());
const pd=programDay(sessionDate), first=pd===1, gd=pd>=1?germanDayFor(sessionDate,s.german):((d+3)%7)+1;
const add=(...args)=>a.push(simple(...args));
if(weekday){
add("☀️","Morning setup","0530","0545",15,"Hydrate and get ready to train.",["Get up; hydrate; use restroom; change into training clothes; optional light snack."]);
add("🏋️","Jim Stoppani workout","0545","0715",90,"Reserve 60–90 minutes; follow your selected program, not an ORDO workout.",["Open Jim Stoppani → Today's Workout (or Workouts to select your program). Follow the scheduled session or rest day.","Log the workout in Jim Stoppani. Stop in time to shower; if finished early, use the buffer."],res("Jim Stoppani app (iPhone)","https://apps.apple.com/us/app/jim-stoppani/id399978602","Use your existing app for programming and tracking."));
add("🚿","Get ready","0715","0745",30,"Shower, grooming, uniform/clothes.",["Shower, dress, and prepare what you need for work."]);
add("🍳","Breakfast","0745","0805",20,"Eat and prepare for the workday.",["Eat breakfast; pack lunch and essentials if needed."]);
a.push(germanReview("0805","0820",15,s.german,first));
add("🚗","Commute and arrival","0820","0845",25,"12-minute commute plus 13-minute buffer.",["Leave at 0820; aim to arrive at 0832; allow 13 minutes before work."]);
add("💼","Work + breaks","0845","1630",465,"Work first; lunch study is nested inside the work block.",["During permitted short breaks, optionally spend up to 10 minutes total on Anki/listening; take real breaks too.","Lunch: eat for 25 minutes first. Use the following 35-minute German block only if duty and lunch allow. Extra 0–30 minutes: walk, read, or decompress."]);
a.push(germanLesson(gd,s.german,"Lunch +25","Lunch +60",35));
add("🚗","Commute home","1630","1642",12,"Leave work and transition home.",["Commute safely; no screen-based study while driving."]);
add("🏡","Home and dinner prep","1642","1730",48,"Decompress, family time and meal preparation.",["Change clothes, handle urgent household tasks and help prepare dinner."]);
add("🍽️","Family dinner","1730","1830",60,"Protected family time.",["Eat together without multitasking when possible."]);
add("🧹","Cleanup / household","1830","1900",30,"Clear the evening for family or hobbies.",["Help clean up, prepare for tomorrow, and handle small chores."]);
if(first){
a.push(guitar(1,s.guitar,"1900","1940"));
a.push(tang(2,s.tang,"1940","2010",30));
add("☕","Free time","2010","2100",50,"Keep Day 1 manageable.",["Film is optional today; keep this time open."]);
}else if(d===1){
a.push(guitar(d,s.guitar,"1900","1940"));
a.push(S("🇩🇪","German Coach","1940","2010",30,"Speaking practice tied to "+germanUnits[s.german-1][0]+".",["5 min: retrieve five words and phrases from lunch.","20 min: open German Coach; role-play this week's practical goal, answering before corrections.","5 min: repeat corrected sentences and note one weak point."],null,"Practice this A1 topic with me: "+germanUnits[s.german-1][2]+". Ask one question at a time and correct after I answer.","german",s.german));
add("☕","Free time","2010","2100",50,"Unstructured personal or family time.",["Keep this time open; do not automatically fill it with unfinished sessions."]);
}else if(d===2){
a.push(tang(d,s.tang,"1900","1940",40));
add("📖","Reading","1940","2010",30,"Read the current book.",["Open "+link("https://renaissance-reading-library.daniel-hadder.chatgpt.site","Virtual Library")+" to choose or update your current book. Read 25 minutes; note page and one key thought for 5 minutes."]);
add("☕","Free time","2010","2100",50,"Recovery and family time.",["Keep this time open."]);
}else if(d===4){
a.push(tang(d,s.tang,"1900","1930",30));
a.push(guitar(d,s.guitar,"1930","2010"));
add("☕","Free time","2010","2100",50,"Recovery and family time.",["Keep this time open."]);
}else{
add("🎬","Film Index","1900","2100",120,"Watch one unwatched film; protect bedtime.",["Open "+link("https://film-index.daniel-hadder.chatgpt.site","Film Index")+" and select an unwatched title: "+(d===3?"international or art-house cinema":"American classic or entertainment")+". Choose a runtime that fits.","Watch, mark seen and optionally write one sentence about the film. If it runs long, finish on the weekend."]);
}
add("📖","Bedtime reading","2100","2115",15,"Read for pleasure.",["Read 15 minutes; update "+link("https://renaissance-reading-library.daniel-hadder.chatgpt.site","Virtual Library")+" if desired; stop on time."]);
add("🌙","Bed routine","2115","2130",15,"Prepare for sleep.",["Brush teeth, hygiene, set alarm, put screens away."]);
add("🛏️","Sleep opportunity","2130",d===5?"0630":"0530",d===5?540:480,"Protect at least eight hours in bed.",["Aim for lights out at 2130; if you missed a hobby, do not catch up at the expense of sleep."]);
}else{
add("☀️","Morning / breakfast","0630","0730",60,"Allow a slightly later weekend start.",["Get ready, eat breakfast, hydrate and spend unhurried time at home."]);
if(d===6)add("🏋️","Jim Stoppani workout","0730","0900",90,"Follow the scheduled session or rest day.",["Open Jim Stoppani Today's Workout; log there; don't add extra training to make up misses."],res("Jim Stoppani","https://www.jimstoppani.com/","Use the existing workout plan."));
else add("🚶","Recovery / rest","0730","0900",90,"Keep Sunday gentle and flexible.",["Walk, stretch comfortably, or rest. No mandatory workout."]);
add("🚿","Shower / reset","0900","0930",30,"Get ready for the day.",["Shower, dress, and transition to study."]);
a.push(germanLesson(gd,s.german,"0930","1045",75));
add("🏡","Family, errands and lunch","1045","1400",195,"Protected flexible time.",["Make room for lunch, shopping, chores, outings, and unstructured family time."]);
a.push(guitar(d,s.guitar,"1400","1440"));
if(d===6)a.push(tang(d,s.tang,"1450","1530",40));
else add("🗓️","Weekly review","1450","1530",40,"Review outcomes and adjust next week's plan.",["Review German accuracy/conversation, guitar tempo/songs, Tang Soo Do control, and films/books completed.","Use the independent stage selectors only for tracks whose gates are met; otherwise repeat. Identify one change that will make next week easier.","Reserve time for family, chores and any upcoming academic or work obligations; do not sacrifice sleep."]);
add("📖","Reading","1530","1600",30,"Progress in your current book.",["Open "+link("https://renaissance-reading-library.daniel-hadder.chatgpt.site","Virtual Library")+"; read 25 minutes and note page and one memorable idea."]);
add("🏡","Flexible family / dinner prep","1600","1730",90,"Keep weekend room for real life.",["Family, errands, downtime and meal preparation."]);
add("🍽️","Family dinner","1730","1830",60,"Protected family time.",["Eat together when possible."]);
add("🧹","Cleanup / household","1830","1900",30,"Finish essential tasks.",["Clean up and prepare for tomorrow."]);
add("🎬","Film Index","1900","2100",120,"Watch one unwatched film; longer films can start earlier.",["Open "+link("https://film-index.daniel-hadder.chatgpt.site","Film Index")+"; choose "+(d===6?"any unwatched film":"a historically significant film")+". Mark seen in Film Index. Note a takeaway if desired."]);
add("📖","Bedtime reading","2100","2115",15,"Relax with a book.",["Read for 15 minutes, then stop."]);
add("🌙","Bed routine","2115","2130",15,"Protect bedtime.",["Hygiene, set alarm, put away screens."]);
add("🛏️","Sleep opportunity","2130",d===6?"0630":"0530",d===6?540:480,"Protect sleep.",["Lights out at 2130; allow the full sleep window."]);
}
schedule[d]={day:days[d],focus:(first?"Day 1: start each learning track from its first lesson. ":"")+"Protect sleep, dinner and work first. Follow the next learning assignment at a sustainable pace.",priority:{primary:"Sleep · Family · German",secondary:"Jim Stoppani · Guitar · Tang Soo Do",maintenance:"Reading · Film · Free time"},sessions:a};
}
return schedule;
}
const ordoSettings=window.ORDOPlus?window.ORDOPlus.settings():null;
const schedule=ordoSettings?window.ORDOPlus.adapt(buildSchedule(stages),ordoSettings,formatDateKey(new Date())):buildSchedule(stages);
// Routine time stays in the scheduler but never becomes a daily task.
function isActionable(s){return !!s.track||["Jim Stoppani workout","Family dinner","Sleep opportunity","Reading","Bedtime reading","Film Index","Weekly review","Priority time"].includes(s.name);}
function isProtectedAnchor(s){return ["Family dinner","Sleep opportunity"].includes(s.name);}
function displaySessionName(s){if(s.track==="german")return s.minutes<=15?"German · Anki":s.objective.startsWith("Speaking practice")?"German · Conversation":"German · Nicos Weg";if(s.track==="guitar")return "Guitar";if(s.track==="tang")return "Tang Soo Do";if(s.name==="Sleep opportunity")return "Bedtime / sleep";return s.name;}
function displayedSteps(s){if(s.name==="Family dinner")return ["Family dinner completed."];if(s.name==="Sleep opportunity")return ["Kept the planned bedtime."];if(s.name==="Jim Stoppani workout")return ["Follow the workout or rest day assigned in Jim Stoppani.","Log the session in Jim Stoppani."];return s.steps;}
function stepKeyFor(index,step,dayData=todayData){const s=dayData.sessions[index];return "s-"+(s._originalIndex??index)+"-"+(s.track?s.track+"-"+s.stage+"-":"")+(s._variant?s._variant+"-":"")+(s.track&&dayData.focus.startsWith("Day 1:")?"day-one-":"")+"step-"+step;}
function storedSchedule(date){const key=formatDateKey(date), today=formatDateKey(new Date());if(key===today)return schedule;const raw=buildSchedule(normalizeStages(readLocal("ordo-stage-history-"+key,stages)),date);const history=readLocal("ordo-settings-history-"+key,null);if(!window.ORDOPlus||!ordoSettings)return raw;if(key<today&&!history)return raw;const conf=window.ORDOPlus.clean(history||ordoSettings);return window.ORDOPlus.adapt(raw,window.ORDOPlus.errors(conf).length?ordoSettings:conf,key);}


/* =====================================================
   FREE RESOURCES
===================================================== */


const resources = [
{"area":"GERMAN","name":"AnkiWeb (free browser)","description":"Study imported shared decks in Safari. Choose Goethe Institute → A1 Wordlist.","url":"https://ankiweb.net/decks"},{"area":"GERMAN","name":"Anki Desktop (one-time import)","description":"Free computer app: import your .apkg files, set deck options and sync cards/media to AnkiWeb.","url":"https://apps.ankiweb.net/"},{"area":"GERMAN","name":"Goethe-Zertifikat A1 — primary","description":"804 notes / 1,608 cards. Use for daily due reviews and up to 3 new cards.","url":"https://ankiweb.net/shared/info/293204297"},{"area":"GERMAN","name":"SmarterGerman A1 Illustrated — supplementary","description":"745 notes / 1,490 cards. Weekend targeted practice with pictures, pronunciation and sentences; no duplicate daily quota.","url":"https://ankiweb.net/shared/info/207285542"},{"area":"GERMAN","name":"Goethe Institute A1 v2 — reserve","description":"926 notes / 1,852 cards; substantial overlap with primary. Use only for alternative examples if needed. Search shared deck by exact title.","url":"https://ankiweb.net/shared/decks?search=Goethe%20Institute%20A1%20Wordlist%20v2"},{"area":"GERMAN","name":"Easy German","description":"Authentic listening practice.","url":"https://www.youtube.com/@EasyGerman"},{"area":"GUITAR","name":"JustinGuitar Grade 1","description":"Structured modules, demonstrations and exercises.","url":"https://www.justinguitar.com/classes/beginner-guitar-course-grade-one"},{"area":"GUITAR","name":"JustinGuitar Songs","description":"Song lessons and chord diagrams.","url":"https://www.justinguitar.com/songs"},{"area":"GUITAR","name":"Minor pentatonic","description":"Scale shapes and blues phrasing.","url":"https://www.justinguitar.com/modules/minor-pentatonic-scale"},{"area":"TANG SOO DO","name":"Kang Uk Lee book contents","description":"ISBN-matched contents and page ranges; verify against your copy.","url":"https://www.kriso.lv/tang-soo-do-ultimate-guide-korean-db-9780865681705.html"},{"area":"TANG SOO DO","name":"Basic Form One tutorial","description":"Supplementary slow form demo; compare with book and instructor.","url":"https://www.youtube.com/watch?v=b5FzgKp9rg0"},{"area":"FITNESS","name":"Jim Stoppani","description":"Workout programming and tracking are handled outside ORDO.","url":"https://www.jimstoppani.com/"},

{

area:
"🇩🇪 GERMAN",

name:
"DW — Nicos Weg",

description:
"Structured German video, listening, vocabulary, grammar, and exercises.",

url:
"https://learngerman.dw.com/en/nicos-weg/c-36519789"

},


{

area:
"♟️ CHESS",

name:
"Lichess Practice",

description:
"Free interactive training in tactics, checkmates, and endgames.",

url:
"https://lichess.org/practice"

},


{

area:
"🏛️ PHILOSOPHY",

name:
"Stanford Encyclopedia of Philosophy",

description:
"Scholarly articles explaining philosophers, arguments, and schools of thought.",

url:
"https://plato.stanford.edu/"

},


{

area:
"🎖️ ARMY / SIGNAL",

name:
"Army Publishing Directorate",

description:
"Official Army regulations, doctrine, pamphlets, and technical publications.",

url:
"https://armypubs.army.mil/"

},


{

area:
"📚 HISTORY",

name:
"Library of Congress",

description:
"Primary sources, manuscripts, newspapers, maps, photographs, and historical collections.",

url:
"https://www.loc.gov/"

},


{

area:
"🇺🇸 CONSTITUTION",

name:
"Constitution Annotated",

description:
"Congressional Research Service analysis of constitutional text and Supreme Court doctrine.",

url:
"https://constitution.congress.gov/"

},


{

area:
"✝️ BIBLE",

name:
"BibleProject Classroom",

description:
"Free biblical studies courses emphasizing literary and historical context.",

url:
"https://bibleproject.com/classroom/"

},


{

area:
"🧠 LEARNING",

name:
"The Learning Scientists",

description:
"Evidence-based guidance on retrieval, spacing, interleaving, elaboration, and durable learning.",

url:
"https://www.learningscientists.org/"

},


{

area:
"🎸 MUSIC",

name:
"MusicTheory.net",

description:
"Free lessons and exercises in notation, rhythm, scales, intervals, chords, and harmony.",

url:
"https://www.musictheory.net/lessons"

}

];



/* =====================================================
   GPT ICONS
===================================================== */


const gptIcons = {

"DOI":
"🧭",

"German Coach":
"🇩🇪",

"Chess Coach":
"♟️",

"Martial Arts Coach":
"🥋",

"Philosophy Mentor":
"🏛️",

"Senior Army Leadership & Signal Mentor":
"🎖️",

"Historian & Graduate History Coach":
"📚",

"Constitution & American Government Tutor":
"🇺🇸",

"Bible & Christianity Scholar":
"✝️",

"Learning, Reading & Knowledge Coach":
"🧠",

"Music Mentor":
"🎸"

};



/* =====================================================
   DATE HELPERS
===================================================== */


function formatDateKey(date) {

const year =
date.getFullYear();

const month =
String(
date.getMonth() + 1
).padStart(
2,
"0"
);

const day =
String(
date.getDate()
).padStart(
2,
"0"
);

return `${year}-${month}-${day}`;

}



function getMonday(date) {

const copy =
new Date(date);

copy.setHours(
0,
0,
0,
0
);

const day =
copy.getDay();

const difference =
day === 0
? -6
: 1 - day;

copy.setDate(
copy.getDate() + difference
);

return copy;

}



function addDays(date,amount) {

const copy =
new Date(date);

copy.setDate(
copy.getDate() + amount
);

return copy;

}



/* =====================================================
   CURRENT DATE / DAILY DATA
===================================================== */


const now =
new Date();


const todayNumber =
now.getDay();


const todayData =
schedule[todayNumber];


const dateString =
formatDateKey(now);


const storageKey =
"ordo-routine-v2-" + dateString;
localStorage.setItem("ordo-stage-history-"+dateString,JSON.stringify(stages));
if(programDay(now)>=1)localStorage.setItem("ordo-german-day-history-"+dateString,JSON.stringify({stage:stages.german,day:germanDayFor(now,stages.german)}));
if(ordoSettings)localStorage.setItem("ordo-settings-history-"+dateString,JSON.stringify(ordoSettings));



document.getElementById(
"dateDisplay"
).textContent =

new Intl.DateTimeFormat(
undefined,
{
weekday:
"long",

month:
"long",

day:
"numeric",

year:
"numeric"
}
).format(now);



document.getElementById(
"dayHeading"
).textContent =

programLabel(now)+" · "+todayData.day +
" Development Plan";



document.getElementById(
"dayFocus"
).textContent =

todayData.focus;



document.getElementById(
"sessionCount"
).textContent =

todayData.sessions.filter(isActionable).length;



document.getElementById(
"totalMinutes"
).textContent =

todayData.sessions.filter(item=>isActionable(item)&&!isProtectedAnchor(item)).reduce((total,item)=>total+item.minutes,0);



/* =====================================================
   MENU
===================================================== */


const menuButton =
document.getElementById(
"menuButton"
);


const closeMenuButton =
document.getElementById(
"closeMenuButton"
);


const sideMenu =
document.getElementById(
"sideMenu"
);


const menuBackdrop =
document.getElementById(
"menuBackdrop"
);



function openMenu() {

sideMenu.classList.add(
"open"
);

menuBackdrop.classList.add(
"open"
);

document.body.classList.add(
"menu-open"
);

menuButton.setAttribute(
"aria-expanded",
"true"
);

sideMenu.setAttribute(
"aria-hidden",
"false"
);

}



function closeMenu() {

sideMenu.classList.remove(
"open"
);

menuBackdrop.classList.remove(
"open"
);

document.body.classList.remove(
"menu-open"
);

menuButton.setAttribute(
"aria-expanded",
"false"
);

sideMenu.setAttribute(
"aria-hidden",
"true"
);

}



menuButton.addEventListener(
"click",
openMenu
);



closeMenuButton.addEventListener(
"click",
closeMenu
);



menuBackdrop.addEventListener(
"click",
closeMenu
);



document.addEventListener(
"keydown",
event => {

if (
event.key === "Escape"
) {

closeMenu();

}

}
);



function showView(viewId) {
if(!document.getElementById(viewId))return;
const title=document.getElementById("pageTitle");if(title)title.textContent=({dashboardView:"ORDO",todayView:"Today’s plan",weeklyView:"Weekly plan",dayView:"Daily plan",learningView:"Learning tracks",trackView:"Learning track",performanceView:"Performance",recordingsView:"Recordings",enhancementsView:"Schedule settings",backupView:"Backup & transfer",resourcesView:"Resources",gptsView:"Specialist GPTs",remindersView:"Reminders & priorities",moreView:"More"})[viewId]||"ORDO";
const headerProgress=document.querySelector(".header-progress");if(headerProgress)headerProgress.hidden=viewId!=="dashboardView"&&viewId!=="todayView";

document.querySelectorAll(
".app-view"
).forEach(
view => {

view.classList.remove(
"active-view"
);

}
);


document.getElementById(
viewId
).classList.add(
"active-view"
);


document.querySelectorAll(
".menu-nav-button"
).forEach(
button => {

button.classList.toggle(
"active",
button.dataset.view === viewId
);

}
);


if (
viewId === "weeklyView"
) {

renderWeeklySchedule();

}


window.scrollTo({top:0,behavior:"instant"});


closeMenu();

}



document.querySelectorAll("[data-view]").forEach(
button => {

button.addEventListener(
"click",
() => {

showView(
button.dataset.view
);

}
);

}
);



document.querySelectorAll(
".back-to-today"
).forEach(
button => {

button.addEventListener(
"click",
() => {

showView("dashboardView");

}
);

}
);



/* =====================================================
   PRIORITY BAND
===================================================== */


const priorityBand =
document.getElementById(
"priorityBand"
);


priorityBand.innerHTML = `

<div class="priority-chip primary">

<strong>
🎯 PRIMARY
</strong>

${todayData.priority.primary}

</div>


<div class="priority-chip secondary">

<strong>
🔄 SECONDARY
</strong>

${todayData.priority.secondary}

</div>


<div class="priority-chip maintenance">

<strong>
🛠️ MAINTENANCE
</strong>

${todayData.priority.maintenance}

</div>

`;



/* =====================================================
   SAVED CHECKBOX STATE
===================================================== */


let savedState =

JSON.parse(

localStorage.getItem(
storageKey
)

|| "{}"

);



function saveState() {

localStorage.setItem(
storageKey,
JSON.stringify(savedState)
);

}



/* =====================================================
   CREATE TIMELINE
===================================================== */


const timeline = document.getElementById("timeline");
const trackLabels={german:"German",guitar:"Guitar",tang:"Tang Soo Do"};
const trackIcons={german:"🇩🇪",guitar:"🎸",tang:"🥋"};
const trackLimits={german:19,guitar:12,tang:12};
const trackTitle=(key,stage)=>key==="german"?germanUnits[stage-1][0]:key==="guitar"?guitarWeeks[stage-1][0]:tangWeeks[stage-1][0];
const trackGate=(key,stage)=>key==="german"?"80% DW exercise and vocabulary recall accuracy, 4/5 comprehensible sentences, and a simple conversation with minimal English.":key==="guitar"?guitarWeeks[stage-1][3]:tangWeeks[stage-1][4];
function renderTrackMenu(){
 const host=document.getElementById("trackTiles");
 host.replaceChildren();
 for(const key of Object.keys(trackLabels)){
  const btn=document.createElement("button");btn.type="button";btn.className="dashboard-tile";
  btn.innerHTML='<span class="tile-icon">'+trackIcons[key]+'</span><strong>'+trackLabels[key]+'</strong><span class="tile-caption">Stage '+stages[key]+' / '+trackLimits[key]+'</span>';
  btn.addEventListener("click",()=>openTrack(key));host.appendChild(btn);
 }
}
function openTrack(key){
 if(!trackLabels[key])return;
 const host=document.getElementById("trackContent"), stage=stages[key];
 host.innerHTML='<section class="large-card"><div class="section-kicker">CURRENT STAGE</div><h2>'+trackIcons[key]+' '+trackLabels[key]+'</h2><h3>'+trackTitle(key,stage)+'</h3><p class="section-description">Stage '+stage+' of '+trackLimits[key]+'</p><div class="session-objective"><strong>Mastery standard:</strong> '+trackGate(key,stage)+'</div><label>Choose your current stage<select id="trackStageSelect" aria-label="Current stage">'+Array.from({length:trackLimits[key]},(_,i)=>'<option value="'+(i+1)+'" '+(i+1===stage?'selected':'')+'>'+ (i+1)+' · '+trackTitle(key,i+1)+'</option>').join("")+'</select></label><button class="primary-button" id="applyTrackStage">Apply stage</button><p class="section-description">Advance only after the mastery standard is met. Your other tracks and earlier progress remain unchanged.</p></section><section class="large-card"><h2>Scheduled practice this week</h2><div id="trackSessions"></div><p class="section-description">Tap a day to open the complete practice checklist and assigned resources. Future days are previews.</p></section>';
 if(key==="german"){const panel=host.querySelector(".large-card");const gd=germanDayFor(now,stage);panel.insertAdjacentHTML("afterbegin",'<p class="section-description"><strong>A1 beginner guided path</strong> · Start November 26, 2026. Open Today’s plan to work through the exact DW lesson and use the next-study-day button only when finished. Missed days do not skip lessons.</p><p class="session-objective"><strong>Current assignment:</strong> '+germanDayTitle(stage,gd)+' (study day '+gd+' of 7)</p><p><a href="'+DW+'" target="_blank" rel="noopener">Open Nicos Weg A1 course ↗</a></p>');}
 const chooser=host.querySelector("#trackStageSelect");
 host.querySelector("#applyTrackStage").addEventListener("click",()=>{const next=normalizeStages({...stages,[key]:Number(chooser.value)});localStorage.setItem(ORDO_STAGE_KEY,JSON.stringify(next));if(key==="german"&&next.german!==stages.german)localStorage.setItem(GERMAN_POSITION,JSON.stringify({stage:next.german,day:1,previousDay:1,effective:formatDateKey(new Date())}));try{sessionStorage.setItem("ordo-return-view","track:"+key);}catch(e){}location.reload();});
 const list=host.querySelector("#trackSessions"),monday=getMonday(now);
 for(let i=0;i<7;i++){
  const date=addDays(monday,i),data=storedSchedule(date)[date.getDay()], sessions=data.sessions.filter(s=>s.track===key);
  if(!sessions.length)continue;
  const btn=document.createElement("button");btn.type="button";btn.className="day-button";
  btn.innerHTML='<span><strong>'+data.day+'</strong><small>'+sessions.map(s=>displaySessionName(s)+" · "+s.start).join(" / ")+'</small></span><span aria-hidden="true">›</span>';
  btn.addEventListener("click",()=>openWeekDay(date));list.appendChild(btn);
 }
 showView("trackView");document.getElementById("pageTitle").textContent=trackLabels[key];
}
renderTrackMenu();
const notesPanel=document.createElement("details");notesPanel.className="large-card practice-notes";
notesPanel.innerHTML='<summary>Practice log & notes</summary><p class="section-description">Record DW score and conversation, guitar tempo / chord changes / song, Tang Soo Do control and instructor questions, book pages and film watched. Saved locally on this device.</p><textarea aria-label="Daily practice notes" id="ordoPracticeNotes" rows="5" style="width:100%;padding:12px;background:#101722;color:#fff;border:1px solid #64748b;border-radius:8px"></textarea><p id="notesSaved" class="section-description"></p>';
timeline.parentElement.insertAdjacentElement("afterend",notesPanel);
const notesKey="ordo-practice-log-"+dateString;const noteField=notesPanel.querySelector("textarea");noteField.value=localStorage.getItem(notesKey)||"";noteField.addEventListener("input",()=>{localStorage.setItem(notesKey,noteField.value);notesPanel.querySelector("#notesSaved").textContent="Saved on this device";});





function dayState(date){const key=formatDateKey(date);return key===dateString?savedState:readLocal("ordo-routine-v2-"+key,{});}
function dayCanEdit(date){const key=formatDateKey(date);return key===dateString||(key<dateString&&localStorage.getItem("ordo-stage-history-"+key)!==null);}
function activityStats(data,state){const rows=data.sessions.flatMap((s,i)=>isActionable(s)?displayedSteps(s).map((_,j)=>state[stepKeyFor(i,j,data)]===true):[]);return {completed:rows.filter(Boolean).length,total:rows.length,percent:rows.length?Math.round(rows.filter(Boolean).length/rows.length*100):0};}
function updateDayCard(row,s,data,index,state){
 const steps=displayedSteps(s),done=steps.filter((_,j)=>state[stepKeyFor(index,j,data)]===true).length;
 row.querySelector(".activity-status").textContent=done===steps.length?"Complete":done+"/"+steps.length+" steps";
 row.classList.toggle("activity-complete",done===steps.length);
}
function renderDayActivities(host,date){
 const key=formatDateKey(date),data=storedSchedule(date)[date.getDay()],state=dayState(date),editable=dayCanEdit(date),isToday=key===dateString;
 host.replaceChildren();
 data.sessions.forEach((s,i)=>{
  if(!isActionable(s))return;
  const row=document.createElement("details");row.className="activity-card"+(isProtectedAnchor(s)?" protected-activity":"");
  row.id=isToday?"ordo-session-"+i:"ordo-day-"+key+"-"+i;
  const steps=displayedSteps(s);
  const resource=s.resource?'<div class="resource-assignment"><strong>Assigned resource</strong><p>'+s.resource.assignment+'</p><a href="'+s.resource.url+'" target="_blank" rel="noopener">'+s.resource.name+' ↗</a></div>':"";
  const gpt=window.GPT_LINKS?.[s.name];
  const prompt=s.prompt&&gpt?'<details class="specialist-box"><summary>Optional coaching prompt</summary><div class="prompt-text">'+s.prompt+'</div><div class="button-row"><button class="copy-button" type="button">Copy prompt</button><a class="open-button" href="'+gpt+'" target="_blank" rel="noopener">Open coach ↗</a></div></details>':"";
  row.innerHTML='<summary class="activity-summary"><span class="activity-icon">'+s.icon+'</span><span class="activity-main"><strong>'+displaySessionName(s)+'</strong><small>'+s.start+'–'+s.end+' · '+(s.name==="Sleep opportunity"?(s.minutes/60).toFixed(1)+" hr":s.minutes+" min")+'</small></span><span class="activity-status"></span><span class="activity-chevron" aria-hidden="true">›</span></summary><div class="activity-body">'+(isProtectedAnchor(s)?"":'<div class="session-objective"><strong>Objective:</strong> '+s.objective+'</div>')+'<div class="step-list">'+steps.map((step,j)=>{const k=stepKeyFor(i,j,data),checked=state[k]===true;return '<label class="step-item '+(checked?"checked":"")+'"><input type="checkbox" data-key="'+k+'" '+(checked?"checked ":"")+(editable?"":"disabled")+'><span>'+step+'</span></label>'}).join("")+'</div>'+resource+prompt+'</div>';
  row.querySelectorAll('input[type="checkbox"]').forEach(box=>box.addEventListener("change",()=>{if(!editable)return;state[box.dataset.key]=box.checked;box.closest(".step-item").classList.toggle("checked",box.checked);localStorage.setItem("ordo-routine-v2-"+key,JSON.stringify(state));updateDayCard(row,s,data,i,state);if(isToday)updateProgress();else updateSelectedDayStats(data,state);}));
  if(isToday&&s.germanDay&&s.germanDay<7&&programDay(date)>=1){const advance=document.createElement("button");advance.type="button";advance.className="primary-button";const position=readLocal(GERMAN_POSITION,null);const queued=position?.stage===s.stage&&position.effective>key&&position.day===s.germanDay+1;advance.textContent=queued?"Next assignment queued for tomorrow":"Finish this assignment · queue next for tomorrow";advance.disabled=queued;advance.addEventListener("click",()=>{if(!confirm("Have you completed the assigned exercises and met the practice target? If not, keep this assignment for your next study day."))return;queueGermanDay(s.stage,s.germanDay);advance.disabled=true;advance.textContent="Next assignment queued for tomorrow";});row.querySelector(".activity-body").appendChild(advance);}
  if(isToday&&s.germanDay===7){row.querySelector(".activity-body").insertAdjacentHTML("beforeend",'<p class="section-description">If you meet the mastery gate, log the result and advance the German stage from Learning tracks or Performance. Otherwise repeat the assessment; no calendar-based advancement.</p>');}
  const copy=row.querySelector(".copy-button");if(copy)copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s.prompt);copy.textContent="Copied ✓";}catch(e){copy.textContent="Copy unavailable; select the prompt text."}});
  updateDayCard(row,s,data,i,state);
  host.appendChild(row);
 });
}
function updateSelectedDayStats(data,state){const x=activityStats(data,state);document.getElementById("selectedDayStats").textContent=x.completed+" / "+x.total+" steps · "+x.percent+"% complete";}
function openWeekDay(date){
 const key=formatDateKey(date);
 if(key===dateString){showView("todayView");return;}
 const data=storedSchedule(date)[date.getDay()],editable=dayCanEdit(date);
 document.getElementById("selectedDayTitle").textContent=new Intl.DateTimeFormat(undefined,{weekday:"long",month:"long",day:"numeric"}).format(date)+" · "+programLabel(date);
 document.getElementById("selectedDayNote").textContent=key>dateString?"Upcoming plan · preview only. German lessons are tentative previews; actual assignments advance only when you confirm completion.":editable?"Saved day · you can update its checklist.":"Historical preview · no saved curriculum snapshot for this date.";
 updateSelectedDayStats(data,dayState(date));
 renderDayActivities(document.getElementById("selectedDayTimeline"),date);document.getElementById("expandSelected").textContent="Expand all";
 renderReservedTime(document.getElementById("selectedDayReserved"),data);
 const note=document.getElementById("selectedDayNotes"),stored=localStorage.getItem("ordo-practice-log-"+key);
 note.textContent=stored||"No practice notes saved for this date.";
 showView("dayView");
}
function renderReservedTime(host,data){
 host.innerHTML=data.sessions.map(s=>'<div class="reserved-row"><span>'+s.start+'–'+s.end+'</span><span>'+displaySessionName(s)+'</span></div>').join("");
}
renderDayActivities(timeline,now);
renderReservedTime(document.getElementById("todayReserved"),todayData);
document.getElementById("expandToday").addEventListener("click",()=>{const cards=[...timeline.querySelectorAll(".activity-card")],open=cards.some(v=>!v.open);cards.forEach(v=>v.open=open);document.getElementById("expandToday").textContent=open?"Collapse all":"Expand all";});
document.getElementById("expandSelected").addEventListener("click",()=>{const cards=[...document.querySelectorAll("#selectedDayTimeline .activity-card")],open=cards.some(v=>!v.open);cards.forEach(v=>v.open=open);document.getElementById("expandSelected").textContent=open?"Collapse all":"Expand all";});

/* =====================================================
   CLOSEOUT
===================================================== */


const closeoutItems = []; // Old closeout entries remain stored, but do not count toward the simplified task list.


const closeout =
document.getElementById(
"closeoutChecklist"
);


closeoutItems.forEach(
(item,index) => {


const key =
"closeout-" + index;


const checked =
savedState[key] === true;


const label =
document.createElement(
"label"
);


label.className =
"closeout-item";


label.innerHTML = `

<input
type="checkbox"
data-closeout="${key}"
${checked ? "checked" : ""}
>

<span>
${item}
</span>

`;


closeout.appendChild(
label
);


label.querySelector(
"input"
).addEventListener(
"change",
event => {


savedState[key] =
event.target.checked;


saveState();


updateProgress();

}
);

}
);



/* =====================================================
   DAILY PROGRESS
===================================================== */


function updateProgress(){
 const x=activityStats(todayData,savedState);
 document.getElementById("progressLabel").textContent=x.percent+"%";
 document.getElementById("progressBar").style.width=x.percent+"%";
 document.getElementById("completedCount").textContent=x.completed;
 const dashboard=document.getElementById("dashboardTodaySummary");
 if(dashboard)dashboard.textContent=x.completed+" / "+x.total+" steps complete · "+todayData.sessions.filter(isActionable).length+" activities";
}

updateProgress();



/* =====================================================
   RESET TODAY
===================================================== */


document.getElementById(
"resetButton"
).addEventListener(
"click",
() => {


const confirmReset =

confirm(
"Reset every checkbox for today?"
);


if (
!confirmReset
) {

return;

}


// Reset the visible tasks only; keep old routine data, other stages and historical notes.
todayData.sessions.forEach((s,i)=>{if(isActionable(s))displayedSteps(s).forEach((_,j)=>delete savedState[stepKeyFor(i,j)]);});
saveState();
try{sessionStorage.setItem("ordo-return-view","view:todayView");}catch(e){}
location.reload();

}
);



/* =====================================================
   WEEKLY PROGRESS CALCULATION
===================================================== */


function getTotalTasksForDay(dayNumber,date=now) {

const dayData = storedSchedule(date)[dayNumber];


const sessionSteps =

dayData.sessions.reduce(
(total,currentSession) => {

return (
total +
(isActionable(currentSession)?displayedSteps(currentSession).length:0)
);

},
0
);


return (
sessionSteps +
closeoutItems.length
);

}



function getCompletedTasksForDate(
date,
dayNumber
) {

const key =

"ordo-routine-v2-" +
formatDateKey(
date
);


const state =

JSON.parse(
localStorage.getItem(
key
)
|| "{}"
);


let completed = 0;


const historicalDay=storedSchedule(date)[dayNumber];
historicalDay.sessions.forEach(
(currentSession,sessionIndex) => {


if(!isActionable(currentSession))return;
displayedSteps(currentSession).forEach(
(_,stepIndex) => {


const stepKey =
stepKeyFor(sessionIndex,stepIndex,historicalDay);


if (
state[
stepKey
] === true
) {

completed++;

}

}
);

}
);


closeoutItems.forEach(
(_,index) => {


if (
state[
"closeout-" + index
] === true
) {

completed++;

}

}
);


return completed;

}



function getDayStatus(
date,
dayNumber
) {

const todayStart =
new Date(now);


todayStart.setHours(
0,
0,
0,
0
);


const dateStart =
new Date(date);


dateStart.setHours(
0,
0,
0,
0
);


const total =
getTotalTasksForDay(dayNumber,date);


const completed =
getCompletedTasksForDate(
date,
dayNumber
);


const percentage =

total > 0

? Math.round(
completed / total * 100
)

: 0;


if (
dateStart > todayStart
) {

return {

status:
"future",

label:
"Upcoming",

percentage:
0,

completed,
total

};

}


if (
percentage === 100
) {

return {

status:
"complete",

label:
"Complete",

percentage,

completed,
total

};

}


if (
percentage > 0
) {

return {

status:
"partial",

label:
"In Progress",

percentage,

completed,
total

};

}


return {

status:
"incomplete",

label:
"Not Completed",

percentage:
0,

completed,
total

};

}



/* =====================================================
   WEEKLY PLAN
===================================================== */


const weeklyGrid =
document.getElementById(
"weeklyGrid"
);



let weekOffset=0;
function renderWeeklySchedule(){
 weeklyGrid.replaceChildren();
 const monday=addDays(getMonday(now),weekOffset*7);
 const end=addDays(monday,6);
 const fmt=new Intl.DateTimeFormat(undefined,{month:"short",day:"numeric"});
 document.getElementById("weekRange").textContent=fmt.format(monday)+" – "+fmt.format(end);
 for(let i=0;i<7;i++){
 const date=addDays(monday,i),data=storedSchedule(date)[date.getDay()],status=getDayStatus(date,date.getDay()),isToday=formatDateKey(date)===dateString;
 const card=document.createElement("button");card.type="button";card.className="day-button"+(isToday?" current-day":"");
 const count=data.sessions.filter(isActionable).length;
 const focus=[...new Set(data.sessions.filter(s=>s.track||s.name==="Film Index"||s.name==="Jim Stoppani workout").map(s=>s.track?trackLabels[s.track]:s.name==="Film Index"?"Film":"Workout"))].join(" · ");
 card.innerHTML='<span><strong>'+data.day+(isToday?' <small class="today-mark">TODAY</small>':'')+'</strong><small>'+fmt.format(date)+' · '+programLabel(date)+' · '+count+' activities</small><small>'+focus+'</small></span><span class="day-status">'+(status.status==="future"?"Upcoming":status.percentage+"%")+' <span aria-hidden="true">›</span></span>';
 card.addEventListener("click",()=>openWeekDay(date));weeklyGrid.appendChild(card);
 }
}
document.getElementById("weekPrev").addEventListener("click",()=>{weekOffset--;renderWeeklySchedule();});
document.getElementById("weekNext").addEventListener("click",()=>{weekOffset++;renderWeeklySchedule();});
document.getElementById("weekCurrent").addEventListener("click",()=>{weekOffset=0;renderWeeklySchedule();});

renderWeeklySchedule();



/* =====================================================
   12-WEEK PRIORITIES
===================================================== */


const storedPriorities =

JSON.parse(

localStorage.getItem(
"daniel-12-week-priorities"
)

|| "{}"

);



document.getElementById(
"primaryInput"
).value =

storedPriorities.primary
|| "";



document.getElementById(
"secondaryInput"
).value =

storedPriorities.secondary
|| "";



document.getElementById(
"maintenanceInput"
).value =

storedPriorities.maintenance
|| "";



document.getElementById(
"savePriorityButton"
).addEventListener(
"click",
() => {


const priorities = {

primary:

document.getElementById(
"primaryInput"
).value,

secondary:

document.getElementById(
"secondaryInput"
).value,

maintenance:

document.getElementById(
"maintenanceInput"
).value

};



localStorage.setItem(

"daniel-12-week-priorities",

JSON.stringify(
priorities
)

);



const message =

document.getElementById(
"prioritySaved"
);


message.textContent =
"Saved ✓";


setTimeout(
() => {

message.textContent =
"";

},
1500
);

}
);



/* =====================================================
   RESOURCE LIBRARY
===================================================== */


const resourcesGrid =
document.getElementById(
"resourcesGrid"
);



resources.forEach(
resource => {


const card =
document.createElement(
"article"
);


card.className =
"resource-card";


card.innerHTML = `

<div class="resource-area">

${resource.area}

</div>

<h3>

${resource.name}

</h3>

<p>

${resource.description}

</p>

<a
href="${resource.url}"
target="_blank"
rel="noopener"
>

Open Free Resource →

</a>

`;


resourcesGrid.appendChild(
card
);

}
);



/* =====================================================
   GPT LAUNCHPAD
===================================================== */


const gptGrid =
document.getElementById(
"gptGrid"
);



Object.keys(
window.GPT_LINKS || {}
).forEach(
name => {


const url =
window.GPT_LINKS[
name
];


const card =
document.createElement(
"article"
);


card.className =
"gpt-card";


const icon =
gptIcons[
name
] || "🤖";


card.innerHTML = `

<div class="gpt-icon">

${icon}

</div>

<h3>

${name}

</h3>

<br>

${
url

? `

<a
href="${url}"
target="_blank"
rel="noopener"
>

Open GPT →

</a>

`

: `

<span class="no-link">

Add URL in config.js

</span>

`
}

`;


gptGrid.appendChild(
card
);

}
);

// Preserve the destination when changing a curriculum stage.
try{const route=sessionStorage.getItem("ordo-return-view");sessionStorage.removeItem("ordo-return-view");if(route&&route.startsWith("track:"))openTrack(route.slice(6));else if(route&&route.startsWith("view:"))showView(route.slice(5));}catch(e){}

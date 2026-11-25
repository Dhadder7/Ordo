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
const stages=normalizeStages(readLocal(ORDO_STAGE_KEY,stageDefaults));
const DW="https://learngerman.dw.com/en/nicos-weg/c-36519789", ANKI="https://apps.ankiweb.net/", GUITAR="https://www.justinguitar.com/classes/beginner-guitar-course-grade-one", SONGS="https://www.justinguitar.com/songs", BOOK="https://www.amazon.com/dp/0865681708", BOOKTOC="https://www.kriso.lv/tang-soo-do-ultimate-guide-korean-db-9780865681705.html";
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
function germanReview(start,end,minutes,stage){return S("🇩🇪","German Coach",start,end,minutes,"Spaced retrieval — build words you can actually use.",[
"Open "+link(ANKI,"Anki")+" → German deck → Study Now. Review due cards first (about 20; do not force a quota).",
"Add up to 3 useful new cards from the current DW unit only; nouns include article, plural and a short sentence.",
"Say five reviewed phrases aloud; mark difficult items for the next session. Use the full 15 minutes, or stop when due cards are done."
],null,"","german",stage);}
function germanLesson(day,stage,start,end,minutes){
const [unit,lessonText,goal]=germanUnits[stage-1], lessons=lessonText.split("|"), n=day-1;
const core= n>=0&&n<4;
const title=core?lessons[n]:day===5?"Error correction + speaking":day===6?"Unit review + conversation":"Unit mastery assessment";
const path="Open DW → Nicos Weg → A1 → "+unit+" → "+(core?title:"the four lessons in this unit")+". If the lesson is already mastered, use the stage selector to choose the appropriate unit.";
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
"0–15 min: review Anki due cards; retrieve at least ten words without notes.",
"15–35 min: revisit all four DW videos; listen first without subtitles, then verify with the transcript.",
"35–55 min: complete outstanding exercises or repeat weak tasks; review grammar and create eight sentences.",
"55–70 min: speak with German Coach about the unit goal; complete a 2–3 minute dialogue.",
"70–75 min: record errors, useful phrases and what to repeat tomorrow."
]:[
"0–15 min: review due Anki cards and 15 words sampled from the unit.",
"15–35 min: redo a selection of DW exercises without hints; record first-attempt accuracy.",
"35–55 min: role-play the unit goal with German Coach; attempt at least eight exchanges in German.",
"55–65 min: write five original sentences; correct after attempting.",
"65–75 min: record results. Advance only after at least 80% exercise/word accuracy, 4/5 comprehensible sentences and a simple conversation with minimal English. Otherwise repeat this stage. "+(stage===19?"Take the full A1 assessment and start DW A2 only when ready; continue the same study/retrieval cycle.":"")
];
return S("🇩🇪","German Coach",start,end,minutes,"Stage "+stage+"/19 · "+unit+" · "+title+". Goal: "+goal+".",steps,res("DW Nicos Weg",DW,"Follow the A1 course navigation above. The DW course remains the source of truth."),"Act as my A1 German conversation partner. Unit: "+unit+". Goal: "+goal+". Ask one question at a time in German; let me respond before correcting. End with a score out of 10, three errors to revisit, and a practical next step.","german",stage);}
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
function buildSchedule(s){
const schedule={};
for(let d=0;d<7;d++){
const weekday=d>=1&&d<=5, a=[];
const add=(...args)=>a.push(simple(...args));
if(weekday){
add("☀️","Morning setup","0530","0545",15,"Hydrate and get ready to train.",["Get up; hydrate; use restroom; change into training clothes; optional light snack."]);
add("🏋️","Jim Stoppani workout","0545","0715",90,"Reserve 60–90 minutes; follow your selected program, not an ORDO workout.",["Open Jim Stoppani → Today's Workout (or Workouts to select your program). Follow the scheduled session or rest day.","Log the workout in Jim Stoppani. Stop in time to shower; if finished early, use the buffer."],res("Jim Stoppani app (iPhone)","https://apps.apple.com/us/app/jim-stoppani/id399978602","Use your existing app for programming and tracking."));
add("🚿","Get ready","0715","0745",30,"Shower, grooming, uniform/clothes.",["Shower, dress, and prepare what you need for work."]);
add("🍳","Breakfast","0745","0805",20,"Eat and prepare for the workday.",["Eat breakfast; pack lunch and essentials if needed."]);
a.push(germanReview("0805","0820",15,s.german));
add("🚗","Commute and arrival","0820","0845",25,"12-minute commute plus 13-minute buffer.",["Leave at 0820; aim to arrive at 0832; allow 13 minutes before work."]);
add("💼","Work + breaks","0845","1630",465,"Work first; lunch study is nested inside the work block.",["During permitted short breaks, optionally spend up to 10 minutes total on Anki/listening; take real breaks too.","Lunch: eat for 25 minutes first. Use the following 35-minute German block only if duty and lunch allow. Extra 0–30 minutes: walk, read, or decompress."]);
a.push(germanLesson(d,s.german,"Lunch +25","Lunch +60",35));
add("🚗","Commute home","1630","1642",12,"Leave work and transition home.",["Commute safely; no screen-based study while driving."]);
add("🏡","Home and dinner prep","1642","1730",48,"Decompress, family time and meal preparation.",["Change clothes, handle urgent household tasks and help prepare dinner."]);
add("🍽️","Family dinner","1730","1830",60,"Protected family time.",["Eat together without multitasking when possible."]);
add("🧹","Cleanup / household","1830","1900",30,"Clear the evening for family or hobbies.",["Help clean up, prepare for tomorrow, and handle small chores."]);
if(d===1){
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
a.push(germanLesson(d,s.german,"0930","1045",75));
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
schedule[d]={day:days[d],focus:"Protect sleep, dinner and work first. Follow the next learning assignment at a sustainable pace.",priority:{primary:"Sleep · Family · German",secondary:"Jim Stoppani · Guitar · Tang Soo Do",maintenance:"Reading · Film · Free time"},sessions:a};
}
return schedule;
}
const ordoSettings=window.ORDOPlus?window.ORDOPlus.settings():null;
const schedule=ordoSettings?window.ORDOPlus.adapt(buildSchedule(stages),ordoSettings,formatDateKey(new Date())):buildSchedule(stages);
function stepKeyFor(index,step,dayData=todayData){const s=dayData.sessions[index];return "s-"+(s._originalIndex??index)+"-"+(s.track?s.track+"-"+s.stage+"-":"")+(s._variant?s._variant+"-":"")+"step-"+step;}
function storedSchedule(date){const key=formatDateKey(date), today=formatDateKey(new Date());if(key===today)return schedule;const raw=buildSchedule(normalizeStages(readLocal("ordo-stage-history-"+key,stages)));const history=readLocal("ordo-settings-history-"+key,null);if(!window.ORDOPlus||!ordoSettings)return raw;if(key<today&&!history)return raw;const conf=window.ORDOPlus.clean(history||ordoSettings);return window.ORDOPlus.adapt(raw,window.ORDOPlus.errors(conf).length?ordoSettings:conf,key);}


/* =====================================================
   FREE RESOURCES
===================================================== */


const resources = [
{"area":"GERMAN","name":"Anki","description":"Spaced retrieval and vocabulary.","url":"https://apps.ankiweb.net/"},{"area":"GERMAN","name":"Easy German","description":"Authentic listening practice.","url":"https://www.youtube.com/@EasyGerman"},{"area":"GUITAR","name":"JustinGuitar Grade 1","description":"Structured modules, demonstrations and exercises.","url":"https://www.justinguitar.com/classes/beginner-guitar-course-grade-one"},{"area":"GUITAR","name":"JustinGuitar Songs","description":"Song lessons and chord diagrams.","url":"https://www.justinguitar.com/songs"},{"area":"GUITAR","name":"Minor pentatonic","description":"Scale shapes and blues phrasing.","url":"https://www.justinguitar.com/modules/minor-pentatonic-scale"},{"area":"TANG SOO DO","name":"Kang Uk Lee book contents","description":"ISBN-matched contents and page ranges; verify against your copy.","url":"https://www.kriso.lv/tang-soo-do-ultimate-guide-korean-db-9780865681705.html"},{"area":"TANG SOO DO","name":"Basic Form One tutorial","description":"Supplementary slow form demo; compare with book and instructor.","url":"https://www.youtube.com/watch?v=b5FzgKp9rg0"},{"area":"FITNESS","name":"Jim Stoppani","description":"Workout programming and tracking are handled outside ORDO.","url":"https://www.jimstoppani.com/"},

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

todayData.day +
" Development Plan";



document.getElementById(
"dayFocus"
).textContent =

todayData.focus;



document.getElementById(
"sessionCount"
).textContent =

todayData.sessions.length;



document.getElementById(
"totalMinutes"
).textContent =

todayData.sessions.filter(item=>item.name!=="Work + breaks" && item.name!=="Sleep opportunity" && !item.start.startsWith("Lunch")).reduce((total,item)=>total+item.minutes,0);



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


window.scrollTo({
top: 0,
behavior: "smooth"
});


closeMenu();

}



document.querySelectorAll(
".menu-nav-button"
).forEach(
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

showView(
"todayView"
);

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
const stagePanel=document.createElement("section");
stagePanel.className="large-card";
stagePanel.innerHTML='<div class="section-kicker">MASTERY TRACKS</div><h2>Learning tracks · mastery progression</h2><p class="section-description">Each track advances independently after its assessment. Start at the stage that matches your current skill; repeat when needed. Changes preserve old checkbox records. German covers all 19 A1 units; guitar and Tang Soo Do each have 12 stages. This is not a promise of fluency or rank.</p><div class="priority-input-grid">'+Object.entries({german:"German · A1",guitar:"Guitar",tang:"Tang Soo Do"}).map(([k,v])=>'<label class="priority-input-card"><strong>'+v+'</strong><select aria-label="'+v+' stage" data-stage="'+k+'" style="width:100%;padding:10px;margin-top:8px;background:#101722;color:#fff;border:1px solid #64748b;border-radius:6px">'+Array.from({length:k==="german"?19:12},(_,i)=>'<option value="'+(i+1)+'" '+(stages[k]===i+1?'selected':'')+'>Stage '+(i+1)+'</option>').join("")+'</select></label>').join("")+'</div><p class="section-description">Next levels: after German stage 19, take an A1 assessment and continue through A2, B1 and B2. After guitar stage 12, move into Grade 2 and blues. Tang Soo Do progresses with qualified instructor feedback.</p><button type="button" class="primary-button" id="saveStages">Apply stages</button><p class="section-description" id="stageFeedback"></p>';
document.getElementById("priorityBand").insertAdjacentElement("afterend",stagePanel);
stagePanel.querySelector("#saveStages").addEventListener("click",()=>{const next={};stagePanel.querySelectorAll("[data-stage]").forEach(el=>next[el.dataset.stage]=Number(el.value));localStorage.setItem(ORDO_STAGE_KEY,JSON.stringify(normalizeStages(next)));location.reload();});
const minimum=document.createElement("section");minimum.className="large-card";minimum.innerHTML='<div class="section-kicker">BUSY DAY FALLBACK</div><h2>Minimum viable day</h2><p>Protect sleep, work and family dinner. Use a rest day or shorter session if your Stoppani plan permits. German: 10 minutes of due Anki review, 10 minutes of the current DW lesson, and one spoken sentence. Optional hobbies can wait; never double up at the cost of sleep.</p><p class="section-description">A missed lesson does not advance your stage. Resume it before moving on.</p>';stagePanel.insertAdjacentElement("afterend",minimum);
const notesPanel=document.createElement("section");notesPanel.className="large-card";
notesPanel.innerHTML='<div class="section-kicker">DAILY RESULTS</div><h2>Practice log</h2><p class="section-description">Record DW score and conversation, guitar tempo / chord changes / song, Tang Soo Do control and instructor questions, book pages and film watched. Saved locally on this device.</p><textarea aria-label="Daily practice notes" id="ordoPracticeNotes" rows="5" style="width:100%;padding:12px;background:#101722;color:#fff;border:1px solid #64748b;border-radius:8px"></textarea><p id="notesSaved" class="section-description"></p>';
timeline.parentElement.insertAdjacentElement("afterend",notesPanel);
const notesKey="ordo-practice-log-"+dateString;const noteField=notesPanel.querySelector("textarea");noteField.value=localStorage.getItem(notesKey)||"";noteField.addEventListener("input",()=>{localStorage.setItem(notesKey,noteField.value);notesPanel.querySelector("#notesSaved").textContent="Saved on this device";});




todayData.sessions.forEach(
(sessionData,sessionIndex) => {


const row =
document.createElement(
"article"
);


row.className =
"session-row";



const stepHTML =

sessionData.steps.map(
(step,stepIndex) => {


const checkboxId =
stepKeyFor(sessionIndex,stepIndex);


const checked =
savedState[
checkboxId
] === true;


return `

<label
class="step-item
${checked ? "checked" : ""}"
>

<input
type="checkbox"
data-key="${checkboxId}"
${checked ? "checked" : ""}
>

<span>
${step}
</span>

</label>

`;

}
).join("");



let resourceHTML = "";


if (
sessionData.resource
) {

resourceHTML = `

<div class="resource-assignment">

<strong>
📚 ASSIGNED RESOURCE
</strong>

<br>

${sessionData.resource.assignment}

<br>

<a
href="${sessionData.resource.url}"
target="_blank"
rel="noopener"
>
${sessionData.resource.name} →
</a>

</div>

`;

}



const gptURL =

window.GPT_LINKS &&
window.GPT_LINKS[
sessionData.name
]

? window.GPT_LINKS[
sessionData.name
]

: "";



const openGPT =

gptURL

? `

<a
class="open-button"
href="${gptURL}"
target="_blank"
rel="noopener"
>

Open ${sessionData.name}

</a>

`

: `

<span class="no-link">

Add this GPT's URL in config.js

</span>

`;



row.innerHTML = `

<div class="session-time">

${sessionData.start}

</div>


<div
class="session-card"
data-session="${sessionIndex}"
>

<div class="session-heading">

<div class="session-heading-left">

<div class="session-icon">

${sessionData.icon}

</div>

<div>

<h3>

${sessionData.name}

</h3>

<div class="session-subtitle">

${sessionData.start}
–
${sessionData.end}

</div>

</div>

</div>


<div class="duration-badge">

${sessionData.minutes} MIN

</div>

</div>



<div class="session-objective">

<strong>
TODAY'S OBJECTIVE:
</strong>

${sessionData.objective}

</div>



<div class="step-list">

${stepHTML}

</div>



${resourceHTML}



${sessionData.prompt && gptURL ? `<div class="specialist-box">

<div class="specialist-box-title">

WHEN YOU OPEN THE SPECIALIST GPT, SEND THIS:

</div>

<div class="prompt-text">

${sessionData.prompt}

</div>


<div class="button-row">

<button
class="copy-button"
data-session-index="${sessionIndex}"
>

Copy Prompt

</button>

${openGPT}

</div>

</div>` : ""}

</div>

`;


timeline.appendChild(
row
);

}
);



/* =====================================================
   CHECKBOX HANDLING
===================================================== */


document.querySelectorAll(
'.step-item input[type="checkbox"]'
).forEach(
checkbox => {


checkbox.addEventListener(
"change",
event => {


const key =
event.target.dataset.key;


savedState[key] =
event.target.checked;


event.target
.closest(
".step-item"
)
.classList
.toggle(
"checked",
event.target.checked
);


saveState();


updateProgress();

}
);

}
);



/* =====================================================
   COPY PROMPTS
===================================================== */


document.querySelectorAll(
".copy-button"
).forEach(
button => {


button.addEventListener(
"click",
async event => {


const sessionIndex =

Number(
event.target.dataset.sessionIndex
);


const prompt =

todayData.sessions[
sessionIndex
].prompt;


await navigator.clipboard.writeText(
prompt
);


const original =
event.target.textContent;


event.target.textContent =
"Copied ✓";


setTimeout(
() => {

event.target.textContent =
original;

},
1200
);

}
);

}
);



/* =====================================================
   CLOSEOUT
===================================================== */


const closeoutItems = [

"Protected sleep and family time.",
"Recorded progress or weak material for today’s learning.",
"Stopped on time; missed hobbies do not become sleep debt."

];


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


function updateProgress() {


const taskBoxes =

Array.from(

document.querySelectorAll(
'.step-item input[type="checkbox"]'
)

);


const closeoutBoxes =

Array.from(

document.querySelectorAll(
'.closeout-item input[type="checkbox"]'
)

);


const allBoxes =

[
...taskBoxes,
...closeoutBoxes
];


const completed =

allBoxes.filter(
box =>
box.checked
).length;


const total =
allBoxes.length;


const percentage =

total

? Math.round(
completed / total * 100
)

: 0;



document.getElementById(
"progressLabel"
).textContent =

percentage + "%";



document.getElementById(
"progressBar"
).style.width =

percentage + "%";



document.getElementById(
"completedCount"
).textContent =

completed;



todayData.sessions.forEach(
(_,sessionIndex) => {


const card =

document.querySelector(

`.session-card[data-session="${sessionIndex}"]`

);


const boxes =

Array.from(

card.querySelectorAll(
'input[type="checkbox"]'
)

);


const complete =

boxes.length > 0 &&

boxes.every(
box =>
box.checked
);


card.classList.toggle(
"session-complete",
complete
);

}
);


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


localStorage.removeItem(
storageKey
);


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
currentSession.steps.length
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


currentSession.steps.forEach(
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



function renderWeeklySchedule() {


weeklyGrid.innerHTML = "";


const monday =
getMonday(
now
);


const weekDays = [

{
scheduleDay: 1,
offset: 0
},

{
scheduleDay: 2,
offset: 1
},

{
scheduleDay: 3,
offset: 2
},

{
scheduleDay: 4,
offset: 3
},

{
scheduleDay: 5,
offset: 4
},

{
scheduleDay: 6,
offset: 5
},

{
scheduleDay: 0,
offset: 6
}

];


weekDays.forEach(
item => {


const actualDate=addDays(monday,item.offset);
const data=storedSchedule(actualDate)[item.scheduleDay];


const status =
getDayStatus(
actualDate,
item.scheduleDay
);


const isToday =

formatDateKey(
actualDate
) ===
formatDateKey(
now
);


const card =
document.createElement(
"article"
);


card.className =

"week-card" +

(
isToday
? " today"
: ""
);


const sessions =

data.sessions.map(
sessionItem => `

<div class="week-session">

<span class="week-time">

${sessionItem.start}

</span>

${sessionItem.icon}
${sessionItem.name}

<span class="week-gpt">

${sessionItem.minutes} min

</span>

</div>

`
).join("");


const dateLabel =

new Intl.DateTimeFormat(
undefined,
{
month:
"short",

day:
"numeric"
}
).format(
actualDate
);


card.innerHTML = `

<div class="week-status-row">

<div class="week-status">

<span
class="status-dot ${status.status}"
></span>

${status.label}

</div>

<div class="week-progress-percent">

${
status.status === "future"
? "—"
: status.percentage + "%"
}

</div>

</div>


<div class="week-mini-progress">

<div
class="week-mini-fill ${status.status}"
style="width:
${
status.status === "future"
? 0
: status.percentage
}%;
"
></div>

</div>


<div class="week-day">

${data.day}

<br>

<span class="week-gpt">

${dateLabel}

</span>

</div>


${sessions}

`;


weeklyGrid.appendChild(
card
);

}
);

}



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

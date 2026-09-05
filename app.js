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


const schedule = {


/* =======================
   SUNDAY
======================= */

0: {

day:
"Sunday",

focus:
"Consolidate what you learned, deepen biblical study, and use DOI to determine what actually deserves your attention next week.",

priority:
{
primary:
"Weekly integration",
secondary:
"Bible + German retention",
maintenance:
"Knowledge consolidation"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"8:00 AM",

"8:20 AM",

20,

"Retrieve the week's German without relying on notes.",

[

"Spend 3 minutes writing every German word or phrase you remember from this week.",

"Choose 10 vocabulary words from the week and say the German meaning aloud before checking yourself.",

"Produce 5 complete German sentences using vocabulary from at least two different lessons.",

"Say the sentences aloud twice, concentrating on pronunciation and rhythm.",

"Open German Coach and complete a short cumulative correction/retrieval test."

],

`Sunday German review.

Test me on the German material I learned this week.

Begin with retrieval.

Do not show the answer before I attempt it.

Include:
• vocabulary
• sentence building
• grammar
• one short conversation

Identify my 3 weakest items.

End with:

COMPLETED:
STRENGTHS:
WEAKNESSES:
NEEDS REVIEW:
NEXT STEP:`

),



session(

"✝️",

"Bible & Christianity Scholar",

"9:00 AM",

"9:30 AM",

30,

"Study one biblical passage deeply enough to explain both its meaning and historical context.",

[

"Read the assigned biblical passage once without commentary.",

"Read it a second time and identify the main claim, event, teaching, or question.",

"Write one sentence explaining what you think the passage means before consulting the GPT.",

"Open Bible & Christianity Scholar and examine literary and historical context.",

"Identify what comes directly from the text versus later Christian tradition or theological interpretation.",

"Answer the GPT's retrieval questions without looking back at the explanation."

],

`Continue my structured Bible and Christianity curriculum.

Choose an appropriate passage for today's lesson.

Teach it using:

TEXT
PLAIN MEANING
LITERARY CONTEXT
HISTORICAL CONTEXT
AUTHOR/AUDIENCE
IMPORTANT TERMS
THEOLOGICAL SIGNIFICANCE
COMPETING INTERPRETATIONS

Clearly distinguish:

TEXTUAL CLAIM
CHRISTIAN TRADITION
HISTORICAL EVIDENCE
SCHOLARLY CONSENSUS
DISPUTED CLAIM
FAITH CLAIM

Then test me with 3 retrieval questions.`,

{
name:
"BibleProject Classroom",

url:
"https://bibleproject.com/classroom/",

assignment:
"Use the relevant lesson only when the Bible GPT assigns one."

}

),



session(

"🧠",

"Learning, Reading & Knowledge Coach",

"4:00 PM",

"4:20 PM",

20,

"Make this week's learning durable instead of merely familiar.",

[

"Without opening notes, list the subjects you worked on this week.",

"For each subject, write one thing you can now explain or perform better.",

"Identify three things you studied but cannot confidently recall.",

"Open Learning Coach and complete a cumulative retrieval session.",

"Mark each tested concept NEW, WEAK, DEVELOPING, or MASTERED.",

"Write the three WEAK items that should reappear next week."

],

`Run my weekly cumulative retrieval session.

This week may include:

German
Army/Signal
Martial Arts
Chess
Philosophy
History
Constitution
Bible
Music

Make me retrieve first.

Do not turn this into another lecture.

Use a mixture of:
• recall
• explanation
• comparison
• application

Mark important material:

NEW
WEAK
DEVELOPING
MASTERED

At the end tell me the 3 things I most need to review next week.`

),



session(

"🧭",

"DOI",

"7:00 PM",

"7:20 PM",

20,

"Decide what matters next week and prevent worthwhile goals from competing for unlimited time.",

[

"Review which planned sessions you actually completed.",

"Identify the strongest development area of the week.",

"Identify the weakest or most neglected area.",

"Decide whether missed sessions were caused by time, fatigue, scheduling, difficulty, or low priority.",

"Choose exactly three priorities for next week.",

"Choose at least one worthwhile activity to intentionally deprioritize.",

"Check that the coming week's learning plan fits family, health, work, and other responsibilities."

],

`Guide me through my Sunday DOI weekly review.

Evaluate the past week.

Help me identify:

1. My strongest progress.
2. My weakest area.
3. Why I missed anything I intended to complete.
4. The three highest priorities for next week.
5. What should remain maintenance.
6. What I should intentionally deprioritize.
7. Any conflict between my development goals and family, health, work, or other responsibilities.

Ask:

Is this important, or merely interesting?

What am I giving up by saying yes to this?

Does this support the life I say I want?

What should I stop doing?`

)

]

},



/* =======================
   MONDAY
======================= */

1: {

day:
"Monday",

focus:
"Start the week with German consistency and senior-level Army/Signal judgment.",

priority:
{
primary:
"German + Army/Signal",
secondary:
"Learning retention",
maintenance:
"Everything else"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"6:00 AM",

"6:30 AM",

30,

"Build usable German vocabulary and sentence production.",

[

"Spend 5 minutes retrieving yesterday's German vocabulary without notes.",

"Review 8–10 previously learned nouns using article + noun + plural + meaning.",

"Say each vocabulary item aloud.",

"Learn no more than 5–8 new words or one new grammar concept.",

"Create 5 original sentences using today's material.",

"Say all 5 sentences aloud without reading them if possible.",

"Open German Coach for correction and a short speaking drill."

],

`Start today's 30-minute German lesson.

Use this structure:

1. Retrieval of prior material.
2. Correct my weak vocabulary.
3. Teach only a manageable amount of new material.
4. Make me build German sentences.
5. Give me a short speaking exercise.
6. Correct me after I answer.

For nouns always use:

ARTICLE + NOUN + PLURAL + MEANING

Do not show answers before I attempt them.

End with:

COMPLETED:
STRENGTHS:
WEAKNESSES:
NEW MATERIAL:
NEEDS REVIEW:
NEXT STEP:`,

{
name:
"DW Nicos Weg",

url:
"https://learngerman.dw.com/en/nicos-weg/c-36519789",

assignment:
"Complete only the lesson or exercise your German Coach assigns today."

}

),



session(

"🎖️",

"Senior Army Leadership & Signal Mentor",

"7:00 PM",

"7:40 PM",

40,

"Practice making senior NCO decisions rather than merely memorizing doctrine.",

[

"Read the scenario without looking for the answer.",

"Identify the commander's requirement or mission problem.",

"State what you would do first.",

"Identify what you would personally supervise.",

"Identify what subordinate leaders should own.",

"State how you would verify the action worked.",

"Open Army/Signal Mentor and defend your decision.",

"Write down one doctrinal or leadership lesson you would carry into a real 1SG/Senior Signal role."

],

`Give me a realistic senior Army NCO or tactical Signal problem.

Do not immediately tell me what to do.

Require me to answer:

1. What is the actual problem?
2. What is my responsibility?
3. What do I do first?
4. What do I delegate?
5. What do I personally supervise?
6. How do I verify?
7. What second-order effects should I consider?

Evaluate my response as an experienced senior 25H/25Z NCO preparing for tactical leadership.

Use current Army doctrine when applicable.

Distinguish:

DOCTRINE
REGULATION
BEST PRACTICE
YOUR RECOMMENDATION

End with one practical takeaway.`,

{
name:
"Army Publishing Directorate",

url:
"https://armypubs.army.mil/",

assignment:
"Read only the doctrinal section specifically assigned by the Army/Signal Mentor."

}

),



session(

"🧠",

"Learning, Reading & Knowledge Coach",

"8:00 PM",

"8:10 PM",

10,

"Lock in today's learning before ending the day.",

[

"Without reopening the German lesson, recall three things from it.",

"Explain today's Army/Signal lesson in one paragraph from memory.",

"Identify one thing from either subject you could not recall easily.",

"Mark that item for later retrieval."

],

`Give me a 10-minute retrieval check covering today's learning.

Do not reteach everything.

Ask me to retrieve and explain.

Focus especially on anything I hesitate on.

End by identifying what should be reviewed again.`

)

]

},



/* =======================
   TUESDAY
======================= */

2: {

day:
"Tuesday",

focus:
"Combine German with physical skill development and chess calculation.",

priority:
{
primary:
"German + Martial Arts",
secondary:
"Chess",
maintenance:
"Other intellectual subjects"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"6:00 AM",

"6:30 AM",

30,

"Use German actively rather than recognizing it passively.",

[

"Retrieve 10 words from Monday without looking.",

"Say 5 German sentences from memory.",

"Complete one short listening or reading exercise.",

"Write down 3 phrases you understood directly without translating.",

"Create 5 new sentences using today's language pattern.",

"Have a short conversation with German Coach.",

"Correct and repeat every sentence you initially got wrong."

],

`Continue my German curriculum.

Start by testing Monday's material.

Then give me:

• one short comprehension task
• one manageable grammar or vocabulary target
• five sentence-building prompts
• a short conversation

Make me respond before corrections.

Retest anything I miss.`,

{
name:
"DW Nicos Weg",

url:
"https://learngerman.dw.com/en/nicos-weg/c-36519789",

assignment:
"Complete the exact exercise assigned by German Coach."

}

),



session(

"🥋",

"Martial Arts Coach",

"6:30 PM",

"7:10 PM",

40,

"Improve one skill through deliberate physical practice.",

[

"Warm up for 5 minutes with easy mobility and stance movement.",

"Practice today's stance or footwork pattern slowly for 5 minutes.",

"Practice the primary technique for 10 minutes with controlled repetitions.",

"Perform the technique while moving rather than only from a static stance.",

"Perform 3 sets of a short combination incorporating the skill.",

"Visualize or practice the practical application safely.",

"Open Martial Arts Coach and review mechanics and common mistakes.",

"Record the one technical cue you want to remember next session."

],

`Give me one focused martial arts development session.

Tang Soo Do/Soo Bahk Do is primary, but integrate boxing or other striking principles when useful.

Teach only enough technique for deliberate practice.

For today's main technique give me:

NAME
KOREAN TERM if appropriate and verified
PURPOSE
STANCE
MECHANICS
TARGET
COMMON ERRORS
DRILL
PRACTICAL APPLICATION

Distinguish:

TRADITIONAL TECHNIQUE
FORM APPLICATION
SPORT APPLICATION
PRACTICAL SELF-DEFENSE

Prioritize timing, distance, balance, and realistic execution.`

),



session(

"♟️",

"Chess Coach",

"7:30 PM",

"7:50 PM",

20,

"Train the calculation process that prevents impulsive moves and blunders.",

[

"Solve 3 tactical positions without moving pieces immediately.",

"For every position, identify all checks first.",

"Then identify forcing captures.",

"Then identify serious threats.",

"Choose at least two candidate moves.",

"Calculate the opponent's best response.",

"Perform a final blunder check before committing.",

"Open Chess Coach and compare your thinking process with the solution."

],

`Give me a 20-minute chess calculation session.

Use 3 positions appropriate to my level.

For every position force me to follow:

1. What is my opponent threatening?
2. Candidate moves.
3. Checks.
4. Captures.
5. Threats.
6. Calculate the forcing line.
7. Evaluate the resulting position.
8. Final blunder check.

Do not reveal the best move until I commit to an answer.

Track recurring calculation errors.`,

{
name:
"Lichess Practice",

url:
"https://lichess.org/practice",

assignment:
"Use only the tactical motif assigned during today's chess session."

}

)

]

},



/* =======================
   WEDNESDAY
======================= */

3: {

day:
"Wednesday",

focus:
"Use German daily while developing philosophical reasoning and graduate-level historical analysis.",

priority:
{
primary:
"German",
secondary:
"Philosophy + History",
maintenance:
"Professional and physical skills"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"6:00 AM",

"6:30 AM",

30,

"Strengthen weak German from the first half of the week.",

[

"Retrieve Monday and Tuesday vocabulary for 5 minutes.",

"Separate the words into EASY and DIFFICULT.",

"Use every DIFFICULT word in a sentence.",

"Review one grammar concept you have recently struggled with.",

"Write 5 sentences applying that grammar.",

"Say the sentences aloud.",

"Complete a short correction test with German Coach."

],

`Wednesday German session.

Begin by identifying weaknesses from Monday and Tuesday.

Prioritize those weaknesses instead of continually adding new vocabulary.

Require active sentence production.

Make me explain one grammar rule in my own words.

Then test whether I can actually use it.`

),



session(

"🏛️",

"Philosophy Mentor",

"7:00 PM",

"7:30 PM",

30,

"Understand a philosopher's argument well enough to reconstruct and challenge it.",

[

"Read the question or philosophical problem before reading the explanation.",

"Write your initial answer in 2–3 sentences.",

"Study the philosopher's actual argument.",

"Identify the main claim.",

"Identify at least two premises supporting it.",

"Identify one assumption the argument depends on.",

"State the strongest objection you can think of.",

"Decide whether you accept the argument and explain why."

],

`Continue my broad philosophy curriculum.

Give me one philosopher, argument, or philosophical problem.

Before teaching it, ask for my initial position.

Then analyze:

CLAIM
PREMISES
CONCLUSION
ASSUMPTIONS
EVIDENCE
COUNTERARGUMENT
LOGICAL WEAKNESS

Use Socratic questioning.

Include competing philosophical views rather than treating Stoicism or any other school as automatically correct.

End by making me explain the argument in plain English.`,

{
name:
"Stanford Encyclopedia of Philosophy",

url:
"https://plato.stanford.edu/",

assignment:
"Read only the section assigned by Philosophy Mentor."

}

),



session(

"📚",

"Historian & Graduate History Coach",

"7:45 PM",

"8:15 PM",

30,

"Practice historical thinking at the graduate level instead of merely accumulating facts.",

[

"Identify today's historical question before reviewing evidence.",

"State your preliminary answer or hypothesis.",

"Examine the assigned source or evidence.",

"Identify author, audience, purpose, and historical context.",

"Separate what the source actually demonstrates from what you are inferring.",

"Identify one limitation or bias.",

"Compare the evidence against your initial hypothesis.",

"Write a 2–3 sentence historical argument."

],

`Give me a 30-minute graduate-level history exercise.

Use one of:

PRIMARY SOURCE ANALYSIS
HISTORIOGRAPHY
CAUSATION
COMPARISON
CONTINUITY AND CHANGE
THESIS DEVELOPMENT

Do not make this primarily a trivia lesson.

Make me state an argument before giving me your analysis.

When using a primary source require:

AUTHOR
DATE
AUDIENCE
PURPOSE
CONTEXT
CLAIMS
BIAS
LIMITATIONS
CORROBORATION
HISTORICAL VALUE

End by evaluating the strength of my historical reasoning.`,

{
name:
"Library of Congress",

url:
"https://www.loc.gov/",

assignment:
"Use the exact primary source assigned by History Coach."

}

)

]

},



/* =======================
   THURSDAY
======================= */

4: {

day:
"Thursday",

focus:
"Build German fluency, practical musicianship, and continued chess sharpness.",

priority:
{
primary:
"German + Music",
secondary:
"Chess",
maintenance:
"History/Philosophy"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"6:00 AM",

"6:30 AM",

30,

"Convert learned German into spontaneous speaking.",

[

"Speak for 60 seconds in German about your morning or plans.",

"Do not stop to correct every mistake while speaking.",

"Write down 3 things you were unable to say.",

"Learn the vocabulary needed to express those ideas.",

"Repeat the same 60-second explanation.",

"Have German Coach ask 5 follow-up questions.",

"Answer without switching to English unless necessary."

],

`Thursday German conversation session.

Make today's lesson output-heavy.

Have me speak or write first.

Use a practical conversation connected to my interests or daily life.

Ask follow-up questions.

Correct errors after I respond rather than interrupting every sentence.

Identify recurring mistakes and retest them.`

),



session(

"🎸",

"Music Mentor",

"7:00 PM",

"7:40 PM",

40,

"Develop musicianship by connecting physical playing, rhythm, ear, and theory.",

[

"Spend 5 minutes warming up slowly with a metronome.",

"Practice one rhythm or groove for 10 minutes without increasing tempo until it feels controlled.",

"Practice one guitar or drum technique for 10 minutes.",

"Spend 5 minutes identifying intervals, chords, rhythms, or song structure by ear.",

"Spend 5 minutes connecting today's theory concept to an actual song.",

"Perform or play the musical idea continuously for several measures.",

"Open Music Mentor and evaluate what to fix next."

],

`Give me today's 40-minute music practice session.

My interests include guitar, drums, rock, blues, soul, funk, and especially 1960s–70s music.

Prioritize practical musicianship.

Include:

5 min warmup
10 min rhythm
10 min instrument technique
5 min ear training
5 min applied theory
5 min musical application

For every exercise tell me:

PURPOSE
METHOD
TIME OR REPS
TEMPO when relevant
SUCCESS STANDARD

Do not prioritize speed over timing, groove, dynamics, or musicality.`,

{
name:
"musictheory.net",

url:
"https://www.musictheory.net/lessons",

assignment:
"Complete only the theory or ear-training lesson assigned today."

}

),



session(

"♟️",

"Chess Coach",

"8:00 PM",

"8:20 PM",

20,

"Reinforce tactical pattern recognition without abandoning calculation discipline.",

[

"Choose one tactical motif from Tuesday's session.",

"Explain the motif from memory.",

"Solve 3 positions involving that motif.",

"On each position perform the full blunder checklist.",

"Solve one position where the obvious tactical idea does NOT work.",

"Explain why the failed tactic fails."

],

`Give me a 20-minute chess reinforcement session.

Begin with a motif previously trained.

Make me explain the motif before solving.

Use several positions.

Include at least one deceptive position where the obvious tactic fails.

Make me calculate the opponent's best defense.`

)

]

},



/* =======================
   FRIDAY
======================= */

5: {

day:
"Friday",

focus:
"Reinforce German, develop Army/Signal planning skill, and practice constitutional reasoning.",

priority:
{
primary:
"German + Army/Signal",
secondary:
"Constitution",
maintenance:
"Other disciplines"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"6:00 AM",

"6:30 AM",

30,

"Consolidate the week's German before the weekend.",

[

"Retrieve 15 words from the week without looking.",

"Identify the 5 hardest words.",

"Use those 5 words in complete sentences.",

"Explain one grammar concept from the week in your own words.",

"Complete a short real-world scenario in German.",

"Record which material still feels slow or uncertain."

],

`Friday cumulative German lesson.

Test the material from Monday through Thursday.

Include:

vocabulary retrieval
sentence construction
grammar application
short practical conversation

Do not introduce much new material unless the week's material is secure.

Identify what should return during Sunday's review.`

),



session(

"🎖️",

"Senior Army Leadership & Signal Mentor",

"7:00 PM",

"7:30 PM",

30,

"Develop planning, readiness, supervision, and Signal decision-making.",

[

"Receive today's readiness or communications problem.",

"Identify the required end state.",

"List the information you need before making a decision.",

"Create a short plan.",

"Identify personnel, equipment, training, or communications risks.",

"Create a verification step.",

"State what you would brief the commander.",

"Compare your solution with doctrinal or experienced-NCO considerations."

],

`Give me a 30-minute senior Army/Signal planning problem.

Possible areas:

PACE
communications architecture
training management
maintenance
readiness
counseling
property
MDMP/TLP
mission command
contested communications
CP communications
COMSEC
leader development

Make me build the plan before critiquing it.

Ask what I would:

PLAN
SUPERVISE
VERIFY
ADVISE

Use current authoritative Army sources when doctrine matters.`

),



session(

"🇺🇸",

"Constitution & American Government Tutor",

"7:45 PM",

"8:15 PM",

30,

"Analyze constitutional issues using structured legal reasoning.",

[

"Read the scenario without seeing the answer.",

"Identify whether government action is involved.",

"Identify the constitutional provision or amendment potentially implicated.",

"State the right, power, or limitation at issue.",

"Apply the facts to the constitutional rule.",

"Identify the strongest argument on the other side.",

"Reach a conclusion.",

"Compare your reasoning with the relevant Supreme Court precedent."

],

`Give me a realistic constitutional law scenario.

Do not tell me which amendment applies at first.

Make me identify it.

Then have me analyze using:

ISSUE
RULE
APPLICATION
COUNTERARGUMENT
CONCLUSION

After I answer, explain:

CONSTITUTIONAL TEXT
PLAIN ENGLISH
RELEVANT DOCTRINE
LANDMARK CASES
LIMITATIONS
CURRENT LEGAL STATUS

Teach me to articulate constitutional issues accurately rather than simply saying something is "unconstitutional."`,

{
name:
"Constitution Annotated",

url:
"https://constitution.congress.gov/",

assignment:
"Read the constitutional provision or case section assigned by the tutor."

}

)

]

},



/* =======================
   SATURDAY
======================= */

6: {

day:
"Saturday",

focus:
"Use the weekend for deeper historical work, biblical study, and lighter German maintenance.",

priority:
{
primary:
"History",
secondary:
"Bible",
maintenance:
"German"
},

sessions: [


session(

"🇩🇪",

"German Coach",

"8:00 AM",

"8:25 AM",

25,

"Keep German active without turning Saturday into another heavy weekday session.",

[

"Retrieve 10 words from the week.",

"Say 5 complete sentences.",

"Review the week's hardest grammar point.",

"Read or listen to one short German passage.",

"Explain in English what you understood without translating every word.",

"Finish with a 3-minute German conversation."

],

`Give me a light 20-25 minute Saturday German maintenance session.

Prioritize retrieval and practical use.

Do not overload me with new material.

Include:
• vocabulary recall
• sentences
• one short comprehension activity
• brief conversation`

),



session(

"📚",

"Historian & Graduate History Coach",

"9:00 AM",

"10:00 AM",

60,

"Complete one substantial piece of graduate-level historical work.",

[

"Define one focused historical question.",

"Write a provisional answer before researching.",

"Examine at least one primary source or a historiographical argument.",

"Take only notes that relate directly to the question.",

"Separate evidence from interpretation.",

"Identify competing explanations.",

"Write a short thesis or analytical paragraph.",

"Ask History Coach to critique the argument for evidence, causation, precision, and historiographical awareness."

],

`Run a 60-minute graduate history workshop.

I want to produce something, not merely consume information.

Choose an appropriate exercise involving:

research
primary sources
historiography
thesis development
historical writing
source evaluation

Require me to form an argument.

Evaluate:

THESIS
EVIDENCE
LOGIC
CAUSATION
CONTEXT
COUNTERARGUMENT
HISTORIOGRAPHY
PRECISION

Never invent quotations, citations, page numbers, authors, archives, or sources.`

),



session(

"✝️",

"Bible & Christianity Scholar",

"4:00 PM",

"4:40 PM",

40,

"Build a historically informed understanding of Scripture and Christianity.",

[

"Review Sunday's biblical lesson from memory.",

"Identify the main idea before beginning today's lesson.",

"Study today's book, person, event, passage, doctrine, or historical issue.",

"Create a simple timeline when chronology matters.",

"Separate biblical text from later tradition.",

"Identify archaeological or historical evidence when available.",

"Identify what historians can establish versus what remains a faith claim.",

"Answer three cumulative questions without notes."

],

`Give me a deeper Saturday Bible and Christianity session.

Rotate appropriately among:

Scripture
biblical history
archaeology
authorship
manuscripts
canon
historical Jesus
apostles
Paul
early Christianity
theology
Christian traditions

Be intellectually fair.

Clearly distinguish:

TEXTUAL CLAIM
CHRISTIAN TRADITION
HISTORICAL EVIDENCE
SCHOLARLY CONSENSUS
DISPUTED
FAITH CLAIM

End with cumulative retrieval.`

)

]

}

};



/* =====================================================
   FREE RESOURCES
===================================================== */


const resources = [

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
"daniel-development-" + dateString;



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

todayData.sessions.reduce(
(total,item) =>
total + item.minutes,
0
);



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


const timeline =
document.getElementById(
"timeline"
);



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
`s-${sessionIndex}-step-${stepIndex}`;


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
📚 FREE RESOURCE
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



<div class="specialist-box">

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

</div>

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

"Completed today's highest-priority session.",

"Identified anything that felt difficult or uncertain.",

"Marked weak material for future retrieval.",

"Stopped when the planned work was complete instead of adding unnecessary study."

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


function getTotalTasksForDay(
dayNumber
) {

const dayData =
schedule[
dayNumber
];


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

"daniel-development-" +
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


schedule[
dayNumber
].sessions.forEach(
(currentSession,sessionIndex) => {


currentSession.steps.forEach(
(_,stepIndex) => {


const stepKey =
`s-${sessionIndex}-step-${stepIndex}`;


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
getTotalTasksForDay(
dayNumber
);


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


const data =
schedule[
item.scheduleDay
];


const actualDate =
addDays(
monday,
item.offset
);


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

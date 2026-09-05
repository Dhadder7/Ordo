function task(icon,gpt,minutes,objective,prompt) {

  return {
    icon,
    gpt,
    minutes,
    objective,
    prompt
  };

}


const schedule = {

0: {

name: "Sunday",

focus:
"Review, integration, faith, learning retention, and next-week direction.",

tasks: [

task(
"🇩🇪",
"German Coach",
20,
"Retrieve and reinforce the week's weakest German material.",
`German review.

Test my weakest vocabulary, grammar, and sentence-building from this week.

Make me answer before showing corrections.

End with a short progress checkpoint.`
),

task(
"✝️",
"Bible & Christianity Scholar",
30,
"Continue structured biblical, historical, and theological study.",
`Bible lesson.

Continue my curriculum.

Include historical context and competing interpretations where relevant.

Make me answer 3 retrieval questions before ending.`
),

task(
"🧠",
"Learning, Reading & Knowledge Coach",
20,
"Consolidate learning across all subjects.",
`Give me a 20-minute weekly retrieval session covering what I studied this week.

Prioritize weak material.

Make me retrieve and explain before you provide answers.`
),

task(
"🧭",
"DOI",
15,
"Review the week and determine next week's highest priorities.",
`Weekly review.

Help me evaluate the past week.

Identify my three highest priorities for the next seven days.

Tell me what I should intentionally deprioritize.

Check whether my plans align with my values, family, responsibilities, health, career, and long-term goals.`
)

]

},


1: {

name: "Monday",

focus:
"German consistency plus senior Army and Signal development.",

tasks: [

task(
"🇩🇪",
"German Coach",
30,
"Build functional German through retrieval, input, and output.",
`Start today's German lesson.

Continue from my current level.

Test previous material first.

Include active speaking or sentence production.

End with a progress checkpoint.`
),

task(
"🎖️",
"Senior Army Leadership & Signal Mentor",
40,
"Develop senior NCO judgment and tactical Signal competence.",
`Give me today's senior Army/Signal development session.

Use a realistic 1SG or tactical communications scenario.

Make me decide what I would do before evaluating my reasoning.

Focus on PLAN, SUPERVISE, VERIFY, and ADVISE.`
),

task(
"🧠",
"Learning, Reading & Knowledge Coach",
10,
"Retrieve recent learning before adding more information.",
`Give me a 10-minute retrieval drill based on recent material.

Ask questions first.

Do not provide the answers until I attempt them.`
)

]

},


2: {

name: "Tuesday",

focus:
"German, martial arts development, and chess calculation.",

tasks: [

task(
"🇩🇪",
"German Coach",
30,
"Improve German through active recall and speaking.",
`Start today's German lesson.

Include vocabulary retrieval, grammar in context, and speaking prompts.

Correct my mistakes after I answer.`
),

task(
"🥋",
"Martial Arts Coach",
40,
"Improve technique, timing, movement, or practical application.",
`Give me today's martial arts session.

Focus on one high-value Tang Soo Do/Soo Bahk Do or boxing skill.

Explain mechanics, common errors, application, and a safe practice drill.

Test my understanding at the end.`
),

task(
"♟️",
"Chess Coach",
20,
"Improve tactical vision and disciplined calculation.",
`Give me a 20-minute chess tactics and calculation session.

Make me identify candidate moves.

Have me calculate before revealing the answer.

Focus on my weaknesses.`
)

]

},


3: {

name: "Wednesday",

focus:
"German plus philosophy and graduate-level historical thinking.",

tasks: [

task(
"🇩🇪",
"German Coach",
30,
"Continue steady language development.",
`Start today's German lesson.

Review weak material first.

Introduce one new concept.

Make me actively use it before the lesson ends.`
),

task(
"🏛️",
"Philosophy Mentor",
30,
"Develop philosophical literacy and argument analysis.",
`Give me today's philosophy lesson.

Continue a broad historical philosophy curriculum.

Use Socratic questioning.

Make me reconstruct or evaluate the argument before explaining it fully.`
),

task(
"📚",
"Historian & Graduate History Coach",
30,
"Practice historical analysis rather than simple factual recall.",
`Give me a 30-minute graduate-level history session.

Use primary-source analysis, historiography, causation, comparison, or historical argumentation.

Make me reason before you explain.`
)

]

},


4: {

name: "Thursday",

focus:
"German plus musicianship and chess maintenance.",

tasks: [

task(
"🇩🇪",
"German Coach",
30,
"Develop practical German output.",
`Start today's German lesson.

Begin with retrieval.

Then conduct a short German conversation at my current level.

Correct and explain my mistakes afterward.`
),

task(
"🎸",
"Music Mentor",
40,
"Develop musicianship through playing, hearing, rhythm, and theory.",
`Give me today's music session.

Balance practical guitar or drum work with rhythm, theory, or ear training.

Make me play, identify, hear, count, or explain something before giving me the answer.

Prioritize musicality and groove.`
),

task(
"♟️",
"Chess Coach",
20,
"Maintain tactical sharpness and improve decision-making.",
`Give me a 20-minute chess session.

Focus on one tactical motif or calculation weakness.

Make me solve positions before explaining.

Retest the concept at the end.`
)

]

},


5: {

name: "Friday",

focus:
"German plus professional readiness and constitutional reasoning.",

tasks: [

task(
"🇩🇪",
"German Coach",
30,
"Reinforce this week's German.",
`Give me today's German lesson.

Include cumulative retrieval from this week.

Finish with a practical German scenario requiring me to respond without notes.`
),

task(
"🎖️",
"Senior Army Leadership & Signal Mentor",
30,
"Strengthen senior leader and Signal planning judgment.",
`Give me a 30-minute Army/Signal development session.

Focus on planning, supervision, verification, training management, tactical communications, readiness, or senior NCO decision-making.

Use a realistic problem when possible.`
),

task(
"🇺🇸",
"Constitution & American Government Tutor",
30,
"Practice constitutional analysis and legal reasoning.",
`Give me today's Constitution and American Government lesson.

Use a realistic constitutional scenario or landmark Supreme Court case.

Make me analyze the issue before providing the rule, holding, and reasoning.`
)

]

},


6: {

name: "Saturday",

focus:
"Deeper study in history and Christianity with German maintenance.",

tasks: [

task(
"🇩🇪",
"German Coach",
25,
"Maintain language momentum without making Saturday overly heavy.",
`Give me a 20-30 minute German review.

Focus on weak material.

Require practical sentence production and retrieval without notes.`
),

task(
"📚",
"Historian & Graduate History Coach",
55,
"Conduct deeper historical research, analysis, or writing.",
`Give me a 45-60 minute graduate history session.

Focus on research, historiography, primary-source analysis, historical writing, or argumentation.

Make me actively analyze evidence rather than passively read.`
),

task(
"✝️",
"Bible & Christianity Scholar",
40,
"Build biblical, theological, and historical understanding.",
`Give me a 30-45 minute Bible and Christianity lesson.

Clearly distinguish:

TEXTUAL CLAIM
CHRISTIAN TRADITION
HISTORICAL EVIDENCE
SCHOLARLY CONSENSUS
DISPUTED CLAIM
FAITH CLAIM

Test my understanding before ending.`
)

]

}

};


/* ----------------------------
   FREE RESOURCE LIBRARY
----------------------------- */

const resources = [

{
area: "🇩🇪 German",
name: "DW — Nicos Weg",
url:
"https://learngerman.dw.com/en/nicos-weg/c-36519789",
why:
"Free structured German course with video, audio, vocabulary, grammar, and exercises."
},

{
area: "♟️ Chess",
name: "Lichess Practice",
url:
"https://lichess.org/practice",
why:
"Free interactive training in tactical themes, checkmates, and endgames."
},

{
area: "🏛️ Philosophy",
name:
"Stanford Encyclopedia of Philosophy",
url:
"https://plato.stanford.edu/",
why:
"Free scholarly reference for philosophers, schools, concepts, and arguments."
},

{
area: "🎖️ Army/Signal",
name:
"Army Publishing Directorate",
url:
"https://armypubs.army.mil/",
why:
"Official free Army doctrine, regulations, pamphlets, and publications."
},

{
area: "📚 History",
name:
"Library of Congress",
url:
"https://www.loc.gov/",
why:
"Free primary sources, maps, manuscripts, photographs, and historical collections."
},

{
area: "🇺🇸 Constitution",
name:
"Constitution Annotated",
url:
"https://constitution.congress.gov/",
why:
"Free congressional explanations of constitutional provisions and Supreme Court interpretation."
},

{
area: "✝️ Bible",
name:
"BibleProject Classroom",
url:
"https://bibleproject.com/classroom/",
why:
"Free biblical studies courses emphasizing literary and historical context."
},

{
area: "🧠 Learning",
name:
"The Learning Scientists",
url:
"https://www.learningscientists.org/",
why:
"Free evidence-based material on retrieval, spacing, interleaving, and effective learning."
},

{
area: "🎸 Music",
name:
"musictheory.net",
url:
"https://www.musictheory.net/lessons",
why:
"Free lessons covering notation, rhythm, intervals, scales, chords, and harmony."
}

];


/* ----------------------------
   RETRIEVAL EXERCISES
----------------------------- */

const retrieval = [

`Without notes, explain one idea you learned yesterday in plain English.

Then identify one part you still cannot explain clearly.`,

`Recall three concepts from your most recent specialist session.

For each, give one practical example.`,

`Choose one WEAK item from this week.

Explain it using the Feynman method as if teaching a beginner.`,

`Before reopening notes or a GPT, write down everything you remember from your last lesson.`,

`Choose one recent concept and answer:

What is it?

Why does it matter?

Where would I use it?`

];


/* ----------------------------
   TODAY
----------------------------- */

const today = new Date();

const day = today.getDay();

const current = schedule[day];

const dateKey =
today.toISOString().slice(0,10);

const storageKey =
`development-${dateKey}`;


document.getElementById(
"todayLabel"
).textContent =

new Intl.DateTimeFormat(
undefined,
{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
}
).format(today);


document.getElementById(
"focusText"
).textContent =
current.focus;


const saved =
JSON.parse(
localStorage.getItem(storageKey) || "{}"
);


const tasksElement =
document.getElementById("todayTasks");


current.tasks.forEach(
(taskItem,index) => {

const card =
document.createElement("article");

card.className =
"task-card" +
(saved[index] ? " completed" : "");


const link =
window.GPT_LINKS?.[taskItem.gpt] || "";


card.innerHTML = `

<div class="task-top">

<div class="task-title">

<input
type="checkbox"
${saved[index] ? "checked" : ""}
>

<div>

<h3>
${taskItem.icon}
${taskItem.gpt}
</h3>

<p class="objective">

<strong>☐ Objective:</strong>
${taskItem.objective}

</p>

</div>

</div>

<span class="time-badge">
${taskItem.minutes} min
</span>

</div>


<div class="prompt-box">

<strong>☐ Open ${taskItem.gpt} and send:</strong>

${taskItem.prompt}

</div>


<div class="actions">

<button class="copy-btn">
Copy Prompt
</button>

${
link

? `<a
class="button-link"
href="${link}"
target="_blank"
rel="noopener">
Open GPT
</a>`

: `<span class="muted">
Add this GPT's URL in config.js
</span>`
}

</div>

`;


const checkbox =
card.querySelector(
'input[type="checkbox"]'
);


checkbox.addEventListener(
"change",
() => {

saved[index] =
checkbox.checked;

localStorage.setItem(
storageKey,
JSON.stringify(saved)
);

card.classList.toggle(
"completed",
checkbox.checked
);

updateProgress();

}
);


card.querySelector(
".copy-btn"
).addEventListener(
"click",
async event => {

await navigator.clipboard.writeText(
taskItem.prompt
);

event.target.textContent =
"Copied ✓";

setTimeout(
() =>
event.target.textContent =
"Copy Prompt",
1000
);

}
);


tasksElement.appendChild(card);

});


/* ----------------------------
   PROGRESS
----------------------------- */

function updateProgress() {

const completed =
current.tasks.filter(
(_,index) => saved[index]
).length;

const total =
current.tasks.length;

const minutes =
current.tasks.reduce(
(sum,item) =>
sum + item.minutes,
0
);


document.getElementById(
"progressText"
).textContent =
`${completed} / ${total} complete`;


document.getElementById(
"timeText"
).textContent =
`${minutes} min planned`;


document.getElementById(
"progressFill"
).style.width =
`${(completed / total) * 100}%`;

}

updateProgress();


/* ----------------------------
   RESET TODAY
----------------------------- */

document.getElementById(
"resetDayBtn"
).addEventListener(
"click",
() => {

localStorage.removeItem(
storageKey
);

location.reload();

}
);


/* ----------------------------
   RETRIEVAL
----------------------------- */

document.getElementById(
"retrievalCard"
).innerHTML = `

<label>

<input type="checkbox">

☐ ${
retrieval[
(today.getDate()-1)
%
retrieval.length
]
}

</label>

`;


/* ----------------------------
   RESOURCES
----------------------------- */

const resourceGrid =
document.getElementById(
"resourceGrid"
);


resources.forEach(resource => {

const card =
document.createElement("article");

card.className =
"resource-card";


card.innerHTML = `

<p class="eyebrow">
${resource.area}
</p>

<h3>
${resource.name}
</h3>

<p>
${resource.why}
</p>

<a
href="${resource.url}"
target="_blank"
rel="noopener">

Open Free Resource →

</a>

`;


resourceGrid.appendChild(card);

});


/* ----------------------------
   WEEKLY SCHEDULE
----------------------------- */

const weekGrid =
document.getElementById(
"weekGrid"
);


[
1,2,3,4,5,6,0
].forEach(scheduleDay => {

const info =
schedule[scheduleDay];

const card =
document.createElement("article");


card.className =
"day-card" +
(scheduleDay === day
? " today"
: "");


card.innerHTML = `

<h3>
${info.name}
</h3>

<ul>

${

info.tasks.map(
item => `

<li>

☐ ${item.icon}
${item.gpt}

<br>

<span class="muted">
${item.minutes} min
</span>

</li>

`
).join("")

}

</ul>

`;


weekGrid.appendChild(card);

});


/* ----------------------------
   12-WEEK PRIORITIES
----------------------------- */

const priorities =

JSON.parse(

localStorage.getItem(
"development-priorities"
)

|| "{}"

);


[
"primary",
"secondary",
"maintenance"
].forEach(type => {

const input =
document.getElementById(
`${type}Input`
);

input.value =
priorities[type] || "";

});


document.getElementById(
"savePrioritiesBtn"
).addEventListener(
"click",
() => {

const data = {

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
"development-priorities",
JSON.stringify(data)
);


const message =
document.getElementById(
"savedMsg"
);

message.textContent =
"Saved ✓";


setTimeout(
() =>
message.textContent = "",
1200
);

}
);


/* ----------------------------
   GPT LAUNCHPAD
----------------------------- */

const gptGrid =
document.getElementById(
"gptGrid"
);


Object.entries(
window.GPT_LINKS || {}
).forEach(
([name,url]) => {

const card =
document.createElement("article");

card.className =
"gpt-card";


card.innerHTML = `

<h3>
${name}
</h3>

${
url

? `<a
href="${url}"
target="_blank"
rel="noopener">

Open GPT →

</a>`

: `<span class="muted">
Add URL in config.js
</span>`
}

`;


gptGrid.appendChild(card);

});

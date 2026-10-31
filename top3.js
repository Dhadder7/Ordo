/* ORDO Top 3: non-destructive, local-first priority recommendations and iOS Shortcut handoff. */
(function () {
  "use strict";
  var anchor = document.getElementById("priorityBand");
  if (!anchor || typeof schedule === "undefined") return;

  var today = new Date();
  var day = schedule[today.getDay()];
  var dayKey = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
  var selectionKey = "ordo-top3-v1-" + dayKey;
  var progressKey = "daniel-development-" + dayKey;
  var preferenceKey = "daniel-12-week-priorities";
  var topics = [
    ["german", ["german", "language", "deutsch"]],
    ["army", ["army", "signal", "leadership", "nco", "military"]],
    ["martial", ["martial", "karate", "boxing", "tang soo", "soobahk", "soo bahk"]],
    ["chess", ["chess"]],
    ["philosophy", ["philosophy", "philosophical", "stoic"]],
    ["history", ["history", "historian", "historical"]],
    ["bible", ["bible", "biblical", "christianity", "christian"]],
    ["music", ["music", "listening"]],
    ["constitution", ["constitution", "government", "civics"]],
    ["learning", ["learning", "reading", "knowledge", "retention", "memory"]],
    ["doi", ["doi", "weekly review", "integration", "priorities"]]
  ];

  function readJSON(key, fallback) {
    try {
      var parsed = JSON.parse(localStorage.getItem(key) || "null");
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function topicsFor(text) {
    var s = String(text || "").toLowerCase();
    return topics.filter(function (entry) {
      return entry[1].some(function (alias) { return s.indexOf(alias) !== -1; });
    }).map(function (entry) { return entry[0]; });
  }

  function overlapWeight(sessionTopics, preference, weight) {
    var desired = topicsFor(preference);
    return desired.some(function (topic) { return sessionTopics.indexOf(topic) !== -1; }) ? weight : 0;
  }

  function completedSteps(sessionIndex) {
    var state = readJSON(progressKey, {});
    return day.sessions[sessionIndex].steps.filter(function (_, stepIndex) {
      return state["s-" + sessionIndex + "-step-" + stepIndex] === true;
    }).length;
  }

  function rankedIndices() {
    var prefs = readJSON(preferenceKey, {});
    return day.sessions.map(function (session, index) {
      var kinds = topicsFor(session.name + " " + session.objective);
      var score = 30 - index;
      score += overlapWeight(kinds, prefs.primary, 40);
      score += overlapWeight(kinds, prefs.secondary, 18);
      score += overlapWeight(kinds, day.priority.primary, 14);
      score += overlapWeight(kinds, day.priority.secondary, 7);
      score -= overlapWeight(kinds, prefs.maintenance, 4);
      if (session.name === "DOI" && today.getDay() === 0) score += 25;
      if (completedSteps(index) === session.steps.length) score -= 200;
      return { index: index, score: score };
    }).sort(function (a, b) {
      return b.score - a.score || a.index - b.index;
    }).slice(0, Math.min(3, day.sessions.length))
      .map(function (item) { return item.index; });
  }

  function loadIndices() {
    var existing = readJSON(selectionKey, null);
    if (existing && Array.isArray(existing.indices) &&
        existing.indices.length === Math.min(3, day.sessions.length) &&
        existing.indices.every(function (i) { return Number.isInteger(i) && i >= 0 && i < day.sessions.length; }) &&
        new Set(existing.indices).size === existing.indices.length) {
      return existing.indices;
    }
    var generated = rankedIndices();
    localStorage.setItem(selectionKey, JSON.stringify({ indices: generated }));
    return generated;
  }

  var selected = loadIndices();

  function taskTitle(sessionIndex) {
    var s = day.sessions[sessionIndex];
    return s.name + " — " + s.objective.replace(/[.]$/, "");
  }

  function exportText() {
    return selected.map(taskTitle).join("\n");
  }

  var section = document.createElement("section");
  section.id = "ordoTop3";
  section.className = "ordo-top3 large-card";
  section.innerHTML =
    '<div class="ordo-top3-heading"><div><div class="section-kicker">FOCUS FOR TODAY</div>' +
    '<h2>Today\'s Top 3</h2><p class="section-description">Auto-selected from today\'s plan, your 12-week priorities and recorded progress.</p></div>' +
    '<button type="button" class="secondary-button" id="ordoTop3Refresh">Recalculate</button></div>' +
    '<ol id="ordoTop3List" class="ordo-top3-list" aria-live="polite"></ol>' +
    '<div class="ordo-top3-actions"><button class="primary-button" type="button" id="ordoTop3Send">Send to Reminders</button>' +
    '<button class="secondary-button" type="button" id="ordoTop3Copy">Copy Top 3</button></div>' +
    '<p id="ordoTop3Message" class="ordo-top3-message" role="status"></p>' +
    '<details class="ordo-top3-help"><summary>One-time iPhone Shortcuts setup</summary>' +
    '<p>To populate the Apple Reminders widget, first create a Reminders list named <strong>Today\'s Top 3</strong>. Then create a Shortcut named <strong>ORDO Top 3</strong> in Apple Shortcuts, with these actions:</p>' +
    '<ol><li><strong>Split Text</strong>: input = <em>Shortcut Input</em>; separator = New Lines.</li>' +
    '<li><strong>Repeat with Each</strong>: use the Split Text output.</li>' +
    '<li>Inside the loop, <strong>Add New Reminder</strong>: title = <em>Repeat Item</em>, list = <em>Today\'s Top 3</em>.</li></ol>' +
    '<p>Choose that same Reminders list in your Home Screen widget. Tap <strong>Send to Reminders</strong> each morning; iOS opens your Shortcut to add the three suggestions. Running it again will add duplicates unless you remove the earlier entries. This is a one-way export, not automatic background sync, and completing a reminder does not check off ORDO steps.</p>' +
    '<a href="shortcuts://create-shortcut">Open Shortcuts to create it</a></details>';
  anchor.insertAdjacentElement("afterend", section);

  var list = section.querySelector("#ordoTop3List");
  var message = section.querySelector("#ordoTop3Message");
  function render() {
    list.replaceChildren();
    selected.forEach(function (index) {
      var s = day.sessions[index];
      var count = completedSteps(index), total = s.steps.length;
      var item = document.createElement("li");
      item.className = "ordo-top3-item";
      if (count === total) item.classList.add("ordo-top3-complete");
      var title = document.createElement("strong");
      title.textContent = s.icon + " " + s.name;
      var objective = document.createElement("span");
      objective.textContent = s.objective;
      var status = document.createElement("small");
      status.textContent = count === total ? "Completed in ORDO" : count + " of " + total + " steps completed";
      item.append(title, objective, status);
      list.appendChild(item);
    });
  }

  section.querySelector("#ordoTop3Refresh").addEventListener("click", function () {
    selected = rankedIndices();
    localStorage.setItem(selectionKey, JSON.stringify({ indices: selected }));
    render();
    message.textContent = "Recommendations recalculated. If you already exported them, resend only after reviewing your Reminders list.";
  });

  section.querySelector("#ordoTop3Copy").addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(exportText());
      message.textContent = "Copied all three priorities.";
    } catch (error) {
      var field = document.createElement("textarea");
      field.value = exportText();
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      var succeeded = document.execCommand("copy");
      field.remove();
      message.textContent = succeeded ? "Copied all three priorities." : "Clipboard access blocked. Please use Send to Reminders instead.";
    }
  });

  section.querySelector("#ordoTop3Send").addEventListener("click", function () {
    message.textContent = "Opening Apple Shortcuts. Confirm the three reminders were created there.";
    var url = "shortcuts://run-shortcut?name=" + encodeURIComponent("ORDO Top 3") +
      "&input=text&text=" + encodeURIComponent(exportText());
    window.location.href = url;
  });

  document.addEventListener("change", function (event) {
    if (event.target && event.target.matches('input[type="checkbox"]')) {
      window.setTimeout(render, 0);
    }
  });
  window.addEventListener("storage", function (event) {
    if (event.key === progressKey) render();
  });
  render();
})();

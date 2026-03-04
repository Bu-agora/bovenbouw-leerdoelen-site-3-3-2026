// Quiz engine — handles meerkeuze, open, juistonjuist
const quizState = {
  vakId: null,
  modus: null,
  vragen: [],
  huidigIndex: 0,
  antwoorden: [],
  antwoordGegeven: false,
};

function startQuiz(vakId, modus, categorieen) {
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) return;

  quizState.vakId = vakId;
  quizState.modus = modus;
  quizState.huidigIndex = 0;
  quizState.antwoorden = [];
  quizState.antwoordGegeven = false;

  let vragen = modus === "alles"
    ? [...vak.quizvragen]
    : vak.quizvragen.filter(v => v.type === modus);
  if (categorieen && categorieen.length > 0) {
    vragen = vragen.filter(v => categorieen.includes(v.categorie));
  }

  if (vragen.length === 0) {
    alert("Geen vragen beschikbaar voor deze selectie.");
    return;
  }

  quizState.vragen = schudArray(vragen);

  const scherm = document.getElementById("scherm-quiz");
  scherm.style.setProperty("--vak-kleur", vak.kleur);
  document.getElementById("quiz-vak-naam").textContent = vak.naam;
  document.getElementById("quiz-modus-naam").textContent = modusNaam(modus);

  toonVraag(0);
}

function modusNaam(modus) {
  return { meerkeuze: "Meerkeuze", open: "Open vragen", juistonjuist: "Juist of Onjuist", alles: "Gemengde Toets" }[modus] || modus;
}

function toonVraag(index) {
  if (index >= quizState.vragen.length) {
    toonQuizScore();
    return;
  }

  quizState.huidigIndex = index;
  quizState.antwoordGegeven = false;

  const vraag = quizState.vragen[index];
  const totaal = quizState.vragen.length;

  document.getElementById("quiz-teller").textContent = `${index + 1} / ${totaal}`;
  const balk = document.getElementById("quiz-voortgangsbalk-fill");
  if (balk) balk.style.width = Math.round((index / totaal) * 100) + "%";

  document.getElementById("quiz-vraag-tekst").textContent = vraag.vraag;
  document.getElementById("quiz-categorie").textContent = vraag.categorie;

  const feedbackEl = document.getElementById("quiz-feedback");
  feedbackEl.hidden = true;
  feedbackEl.className = "quiz-feedback";

  const volgendeKnop = document.getElementById("quiz-volgende-knop");
  volgendeKnop.hidden = true;

  const optiesContainer = document.getElementById("quiz-opties");
  optiesContainer.innerHTML = "";

  if (vraag.type === "meerkeuze") {
    renderMeerkeuzeOpties(vraag);
  } else if (vraag.type === "juistonjuist") {
    renderJuistOnjuistOpties(vraag);
  } else if (vraag.type === "open") {
    renderOpenVraag(vraag);
  }
}

function renderMeerkeuzeOpties(vraag) {
  const container = document.getElementById("quiz-opties");
  const opties = schudArray([...vraag.opties]);
  opties.forEach(optie => {
    const knop = document.createElement("button");
    knop.className = "quiz-optie-knop";
    knop.textContent = optie;
    knop.addEventListener("click", () => {
      if (!quizState.antwoordGegeven) verwerkAntwoord(optie, vraag);
    });
    container.appendChild(knop);
  });
}

function renderJuistOnjuistOpties(vraag) {
  const container = document.getElementById("quiz-opties");
  ["juist", "onjuist"].forEach(optie => {
    const knop = document.createElement("button");
    knop.className = "quiz-optie-knop quiz-jo-knop";
    knop.textContent = optie.charAt(0).toUpperCase() + optie.slice(1);
    knop.addEventListener("click", () => {
      if (!quizState.antwoordGegeven) verwerkAntwoord(optie, vraag);
    });
    container.appendChild(knop);
  });
}

function renderOpenVraag(vraag) {
  const container = document.getElementById("quiz-opties");
  const wrapper = document.createElement("div");
  wrapper.className = "open-vraag-wrapper";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "open-vraag-input";
  input.placeholder = "Jouw antwoord...";
  input.id = "open-input";
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !quizState.antwoordGegeven) {
      verwerkAntwoord(input.value.trim(), vraag);
    }
  });

  const knop = document.createElement("button");
  knop.className = "open-vraag-knop";
  knop.textContent = "Controleer";
  knop.addEventListener("click", () => {
    if (!quizState.antwoordGegeven) verwerkAntwoord(input.value.trim(), vraag);
  });

  wrapper.appendChild(input);
  wrapper.appendChild(knop);
  container.appendChild(wrapper);
  setTimeout(() => input.focus(), 100);
}

function normaliseer(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]/g, "")
    .replace(/\s+/g, " ")
    .replace(/€/g, "")
    .replace(/%/g, "");
}

function antwoordIsCorrect(gegeven, correct, type) {
  const g = normaliseer(gegeven);
  const c = normaliseer(correct);

  if (type === "open") {
    // Check exact or partial match for open questions
    if (g === c) return true;
    // Allow answers that contain all key parts (split by ' en ' or ',')
    const sleutels = c.split(/\s+en\s+|,\s*/);
    return sleutels.every(s => g.includes(normaliseer(s)));
  }
  return g === c;
}

function verwerkAntwoord(gegeven, vraag) {
  if (quizState.antwoordGegeven) return;
  quizState.antwoordGegeven = true;

  const correct = antwoordIsCorrect(gegeven, vraag.antwoord, vraag.type);

  quizState.antwoorden.push({
    vraagId: vraag.id,
    gegeven,
    correct,
  });

  // Visual feedback on buttons
  const knoppen = document.querySelectorAll(".quiz-optie-knop");
  knoppen.forEach(knop => {
    knop.disabled = true;
    const tekst = knop.textContent.toLowerCase().trim();
    const normTekst = normaliseer(tekst);
    const normAntwoord = normaliseer(vraag.antwoord);
    if (normTekst === normAntwoord || tekst.includes(normaliseer(vraag.antwoord))) {
      knop.classList.add("correct");
    } else if (normaliseer(knop.textContent) === normaliseer(gegeven) && !correct) {
      knop.classList.add("fout");
    }
  });

  // For open questions, highlight input
  const openInput = document.getElementById("open-input");
  if (openInput) {
    openInput.disabled = true;
    openInput.classList.add(correct ? "input-correct" : "input-fout");
  }

  // Show feedback
  const feedbackEl = document.getElementById("quiz-feedback");
  feedbackEl.hidden = false;
  feedbackEl.className = "quiz-feedback " + (correct ? "feedback-correct" : "feedback-fout");

  const feedbackTitel = document.getElementById("quiz-feedback-titel");
  feedbackTitel.textContent = correct ? "✓ Goed!" : "✗ Niet helemaal...";

  const feedbackTekst = document.getElementById("quiz-feedback-tekst");
  if (!correct) {
    feedbackTekst.textContent = `Juiste antwoord: ${vraag.antwoord}\n${vraag.uitleg}`;
  } else {
    feedbackTekst.textContent = vraag.uitleg;
  }

  document.getElementById("quiz-volgende-knop").hidden = false;
}

function volgendeVraag() {
  toonVraag(quizState.huidigIndex + 1);
}

function buildQuizExportTekst() {
  const vak = ALLE_VAKKEN.find(v => v.id === quizState.vakId);
  const totaal = quizState.vragen.length;
  const correct = quizState.antwoorden.filter(a => a.correct).length;
  const pct = totaal > 0 ? Math.round((correct / totaal) * 100) : 0;
  const vakNaam = vak ? vak.naam : quizState.vakId;
  const datum = new Date().toLocaleDateString("nl-NL");

  let tekst = `RESULTATEN — ${vakNaam} (${modusNaam(quizState.modus)})\n`;
  tekst += `Datum: ${datum}\n`;
  tekst += `Score: ${correct} / ${totaal} (${pct}%)\n`;
  tekst += "─".repeat(40) + "\n\n";

  quizState.antwoorden.forEach((antw, i) => {
    const vraag = quizState.vragen[i];
    if (!vraag) return;
    const icoon = antw.correct ? "✓" : "✗";
    tekst += `${icoon} ${i + 1}. ${vraag.vraag}\n`;
    if (!antw.correct) {
      tekst += `   Jouw antwoord: ${antw.gegeven || "(geen antwoord)"}\n`;
      tekst += `   Juist antwoord: ${vraag.antwoord}\n`;
    }
    tekst += "\n";
  });
  return tekst;
}

function toonQuizScore() {
  const totaal = quizState.vragen.length;
  const correct = quizState.antwoorden.filter(a => a.correct).length;
  const pct = totaal > 0 ? Math.round((correct / totaal) * 100) : 0;

  // Save score
  slaScoreOp(quizState.vakId, quizState.modus, correct, totaal);

  // Switch to score screen
  document.getElementById("scherm-quiz").hidden = true;
  const scoreScherm = document.getElementById("scherm-score");
  scoreScherm.hidden = false;

  const vak = ALLE_VAKKEN.find(v => v.id === quizState.vakId);
  scoreScherm.style.setProperty("--vak-kleur", vak ? vak.kleur : "#666");

  document.getElementById("score-vak-naam").textContent = vak ? vak.naam : "";
  document.getElementById("score-modus-naam").textContent = modusNaam(quizState.modus);
  document.getElementById("score-getal").textContent = `${correct} / ${totaal}`;
  document.getElementById("score-pct").textContent = pct + "%";

  const scoreEl = document.getElementById("score-pct");
  scoreEl.className = "score-groot " + (pct >= 80 ? "score-goed" : pct >= 50 ? "score-matig" : "score-slecht");

  document.getElementById("score-bericht").textContent =
    pct >= 80 ? "Uitstekend! Je beheerst deze stof goed." :
    pct >= 60 ? "Goed gedaan! Blijf oefenen voor een nóg beter resultaat." :
    pct >= 40 ? "Niet slecht, maar er is nog ruimte voor verbetering." :
    "Blijf oefenen — elke keer wordt het beter!";

  // Build answer review
  const reviewEl = document.getElementById("score-review");
  reviewEl.innerHTML = "";
  quizState.antwoorden.forEach((antw, i) => {
    const vraag = quizState.vragen[i];
    if (!vraag) return;
    const item = document.createElement("div");
    item.className = "review-item " + (antw.correct ? "review-correct" : "review-fout");
    item.innerHTML = `
      <span class="review-icoon">${antw.correct ? "✓" : "✗"}</span>
      <div class="review-inhoud">
        <p class="review-vraag">${vraag.vraag}</p>
        ${!antw.correct ? `<p class="review-antwoord">Jouw antwoord: <em>${antw.gegeven || "(geen antwoord)"}</em></p>
        <p class="review-correct-antwoord">Juist antwoord: <strong>${vraag.antwoord}</strong></p>` : ""}
      </div>
    `;
    reviewEl.appendChild(item);
  });

  // Export knoppen
  let exportWrapper = document.getElementById("quiz-export-knoppen");
  if (!exportWrapper) {
    exportWrapper = document.createElement("div");
    exportWrapper.id = "quiz-export-knoppen";
    exportWrapper.className = "export-knoppen";
    const scoreInhoud = scoreScherm.querySelector(".score-inhoud");
    scoreInhoud.appendChild(exportWrapper);
  }
  exportWrapper.innerHTML = `
    <button class="export-knop" onclick="window.print()">📥 Download PDF</button>
    <button class="export-knop" id="quiz-kopieer-knop" onclick="kopieerQuizResultaat(this)">📋 Kopieer naar klembord</button>
  `;
}

function kopieerQuizResultaat(knop) {
  const tekst = buildQuizExportTekst();
  navigator.clipboard.writeText(tekst).then(() => {
    knop.textContent = "✓ Gekopieerd!";
    setTimeout(() => { knop.textContent = "📋 Kopieer naar klembord"; }, 2000);
  }).catch(() => {
    prompt("Kopieer de tekst hieronder:", tekst);
  });
}

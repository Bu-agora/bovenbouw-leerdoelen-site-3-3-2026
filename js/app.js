// Main application: routing, state, screen management
const ALLE_VAKKEN = [DUITS, BIOLOGIE, NASK, ENGELS, ECONOMIE, GESCHIEDENIS];

// --- Utility ---
function schudArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Navigation / Router ---
function navigeerNaar(hash) {
  window.location.hash = hash;
}

function handleHashChange() {
  const hash = window.location.hash || "#home";
  const delen = hash.replace("#", "").split("/");
  const scherm = delen[0] || "home";

  verbergAlleSchermen();

  if (scherm === "home") {
    toonHome();
  } else if (scherm === "vak" && delen[1]) {
    toonVakDetail(delen[1]);
  } else if (scherm === "flashcards" && delen[1]) {
    const vakId = delen[1];
    const vak = ALLE_VAKKEN.find(v => v.id === vakId);
    if (vak) {
      document.getElementById("scherm-flashcards").hidden = false;
      document.getElementById("scherm-flashcard-resultaat").hidden = true;
      startFlashcards(vakId, geselecteerdeCategorieen(vakId));
    }
  } else if (scherm === "quiz" && delen[1] && delen[2]) {
    const vakId = delen[1];
    const modus = delen[2];
    document.getElementById("scherm-quiz").hidden = false;
    startQuiz(vakId, modus, geselecteerdeCategorieen(vakId));
  } else {
    toonHome();
  }
}

function verbergAlleSchermen() {
  const schermen = document.querySelectorAll(".scherm");
  schermen.forEach(s => (s.hidden = true));
}

// Track selected categories per subject (simple in-memory, not persisted)
const categorieSelectie = {};

function geselecteerdeCategorieen(vakId) {
  return categorieSelectie[vakId] || [];
}

// --- Home Screen ---
function toonHome() {
  const scherm = document.getElementById("scherm-home");
  scherm.hidden = false;

  renderVakRaster();
  renderVoortgangOverzicht();
}

function renderVakRaster() {
  const raster = document.getElementById("vak-raster");
  raster.innerHTML = "";

  ALLE_VAKKEN.forEach(vak => {
    const kaart = document.createElement("div");
    kaart.className = "vak-kaart";
    kaart.style.setProperty("--vak-kleur", vak.kleur);

    // Background image with fallback color
    if (vak.afbeelding) {
      kaart.style.backgroundImage = `url(${vak.afbeelding})`;
    }

    const scores = getScoreVoorVak(vak.id);
    const besteScore = scores ? Math.max(...Object.values(scores).map(s => s.beste || 0)) : null;

    kaart.innerHTML = `
      <div class="vak-kaart-overlay">
        <div class="vak-icoon">${vak.icoon}</div>
        <h3 class="vak-naam">${vak.naam}</h3>
        <p class="vak-stats">${vak.flashcards.length} kaarten · ${vak.quizvragen.length} vragen</p>
        ${besteScore !== null ? `<span class="vak-beste-score">Beste: ${besteScore}%</span>` : ""}
      </div>
    `;
    kaart.addEventListener("click", () => navigeerNaar(`#vak/${vak.id}`));
    raster.appendChild(kaart);
  });
}

function renderVoortgangOverzicht() {
  const container = document.getElementById("voortgang-overzicht");
  const scores = laadScores();
  if (Object.keys(scores).length === 0) {
    container.innerHTML = "<p class='geen-scores'>Nog geen resultaten. Start een quiz of flashcards!</p>";
    return;
  }

  let html = "<h2>Mijn voortgang</h2><div class='voortgang-tabel-wrapper'><table class='voortgang-tabel'><thead><tr><th>Vak</th><th>Meerkeuze</th><th>Open</th><th>Juist/Onjuist</th></tr></thead><tbody>";
  ALLE_VAKKEN.forEach(vak => {
    const s = scores[vak.id];
    if (!s) return;
    html += `<tr>
      <td><span class="vak-kleur-dot" style="background:${vak.kleur}"></span>${vak.naam}</td>
      <td>${s.meerkeuze ? s.meerkeuze.beste + "%" : "—"}</td>
      <td>${s.open ? s.open.beste + "%" : "—"}</td>
      <td>${s.juistonjuist ? s.juistonjuist.beste + "%" : "—"}</td>
    </tr>`;
  });
  html += "</tbody></table></div>";
  container.innerHTML = html;
}

// --- Vak Detail Screen ---
function toonVakDetail(vakId) {
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) { navigeerNaar("#home"); return; }

  const scherm = document.getElementById("scherm-vak");
  scherm.hidden = false;
  scherm.style.setProperty("--vak-kleur", vak.kleur);

  document.getElementById("vak-detail-naam").textContent = vak.naam;
  document.getElementById("vak-detail-icoon").textContent = vak.icoon;

  // Header image
  const header = document.getElementById("vak-detail-header");
  if (vak.afbeelding) {
    header.style.backgroundImage = `url(${vak.afbeelding})`;
  }
  header.style.setProperty("--vak-kleur", vak.kleur);

  // Category filters
  const categorieen = [...new Set(vak.flashcards.map(k => k.categorie))];
  renderCategorieFilters(vakId, categorieen);

  // Mode buttons
  renderModusKnoppen(vakId);

  // Scores
  renderVakScores(vakId);
}

function renderCategorieFilters(vakId, categorieen) {
  const container = document.getElementById("categorie-filters");
  if (categorieen.length <= 1) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = "<h3>Filter op categorie</h3><div class='categorie-lijst'></div>";
  const lijst = container.querySelector(".categorie-lijst");

  // "Alle" toggle
  const alleKnop = document.createElement("button");
  alleKnop.className = "categorie-knop actief";
  alleKnop.textContent = "Alle categorieën";
  alleKnop.dataset.categorie = "__alle";
  alleKnop.addEventListener("click", () => {
    categorieSelectie[vakId] = [];
    container.querySelectorAll(".categorie-knop").forEach(k => k.classList.remove("actief"));
    alleKnop.classList.add("actief");
  });
  lijst.appendChild(alleKnop);

  categorieen.forEach(cat => {
    const knop = document.createElement("button");
    knop.className = "categorie-knop";
    knop.textContent = cat;
    knop.dataset.categorie = cat;
    knop.addEventListener("click", () => {
      alleKnop.classList.remove("actief");
      knop.classList.toggle("actief");
      const actief = [...lijst.querySelectorAll(".categorie-knop.actief:not([data-categorie='__alle'])")]
        .map(k => k.dataset.categorie);
      categorieSelectie[vakId] = actief;
      if (actief.length === 0) alleKnop.classList.add("actief");
    });
    lijst.appendChild(knop);
  });
}

function renderModusKnoppen(vakId) {
  const container = document.getElementById("modus-knoppen");
  container.innerHTML = `
    <div class="modus-sectie">
      <h3>Leren</h3>
      <button class="modus-knop modus-flashcard" onclick="navigeerNaar('#flashcards/${vakId}')">
        <span class="modus-icoon">🃏</span>
        <span class="modus-tekst">Flashcards</span>
        <span class="modus-beschrijving">Oefen met kaarten omdraaien</span>
      </button>
    </div>
    <div class="modus-sectie">
      <h3>Quiz</h3>
      <div class="quiz-knoppen-rij">
        <button class="modus-knop modus-meerkeuze" onclick="navigeerNaar('#quiz/${vakId}/meerkeuze')">
          <span class="modus-icoon">✅</span>
          <span class="modus-tekst">Meerkeuze</span>
          <span class="modus-beschrijving">4 antwoordopties</span>
        </button>
        <button class="modus-knop modus-open" onclick="navigeerNaar('#quiz/${vakId}/open')">
          <span class="modus-icoon">✏️</span>
          <span class="modus-tekst">Open vragen</span>
          <span class="modus-beschrijving">Typ je antwoord</span>
        </button>
        <button class="modus-knop modus-jo" onclick="navigeerNaar('#quiz/${vakId}/juistonjuist')">
          <span class="modus-icoon">⚖️</span>
          <span class="modus-tekst">Juist of Onjuist</span>
          <span class="modus-beschrijving">Waar of niet waar</span>
        </button>
      </div>
    </div>
  `;
}

function renderVakScores(vakId) {
  const container = document.getElementById("vak-scores");
  if (!container) return;

  const scores = getScoreVoorVak(vakId);
  if (!scores) {
    container.innerHTML = "<p class='geen-scores'>Nog geen quizresultaten voor dit vak.</p>";
    return;
  }

  const modi = [
    { id: "meerkeuze", naam: "Meerkeuze" },
    { id: "open", naam: "Open vragen" },
    { id: "juistonjuist", naam: "Juist/Onjuist" },
  ];

  let html = "<h3>Jouw scores</h3><div class='score-badges'>";
  modi.forEach(m => {
    const s = scores[m.id];
    if (s) {
      const klasse = s.beste >= 80 ? "score-goed" : s.beste >= 50 ? "score-matig" : "score-slecht";
      html += `<div class="score-badge ${klasse}">
        <span class="badge-modus">${m.naam}</span>
        <span class="badge-beste">${s.beste}%</span>
        <span class="badge-gespeeld">${s.gespeeld}× gespeeld</span>
      </div>`;
    }
  });
  html += "</div>";
  container.innerHTML = html;
}

// --- Init ---
window.addEventListener("hashchange", handleHashChange);
window.addEventListener("load", handleHashChange);

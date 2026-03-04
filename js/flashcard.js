// Flashcard mode logic
const flashcardState = {
  kaarten: [],
  huidigIndex: 0,
  resultaten: [],   // { kaart, gekend: bool }
  vakId: null,
  omgedraaid: false,
};

function startFlashcards(vakId, categorieen) {
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) return;

  flashcardState.vakId = vakId;
  flashcardState.huidigIndex = 0;
  flashcardState.resultaten = [];
  flashcardState.omgedraaid = false;

  let kaarten = [...vak.flashcards];
  if (categorieen && categorieen.length > 0) {
    kaarten = kaarten.filter(k => categorieen.includes(k.categorie));
  }
  flashcardState.kaarten = schudArray(kaarten);

  renderFlashcardScherm(vak);
  toonKaart(0);
}

function renderFlashcardScherm(vak) {
  const scherm = document.getElementById("scherm-flashcards");
  scherm.style.setProperty("--vak-kleur", vak.kleur);

  document.getElementById("fc-vak-naam").textContent = vak.naam;
  updateFlashcardVoortgang();
}

function toonKaart(index) {
  const kaarten = flashcardState.kaarten;
  if (index >= kaarten.length) {
    toonFlashcardResultaat();
    return;
  }

  flashcardState.huidigIndex = index;
  flashcardState.omgedraaid = false;

  const kaart = kaarten[index];
  const kaartEl = document.getElementById("fc-kaart");

  // Hide action buttons immediately
  document.getElementById("fc-actie-knoppen").style.display = "none";
  document.getElementById("fc-flip-hint").style.display = "block";

  const wasOmgedraaid = kaartEl.classList.contains("omgedraaid");
  kaartEl.classList.remove("omgedraaid");

  const updateTekst = () => {
    document.getElementById("fc-voorkant-tekst").textContent = kaart.voorkant;
    document.getElementById("fc-achterkant-tekst").textContent = kaart.achterkant;
    document.getElementById("fc-categorie").textContent = kaart.categorie;
    updateFlashcardVoortgang();
  };

  // Als de kaart omgedraaid was, wacht tot halverwege de flip-animatie (kaart staat op z'n kant)
  if (wasOmgedraaid) {
    setTimeout(updateTekst, 275);
  } else {
    updateTekst();
  }
}

function flipKaart() {
  const kaartEl = document.getElementById("fc-kaart");
  flashcardState.omgedraaid = !flashcardState.omgedraaid;
  kaartEl.classList.toggle("omgedraaid", flashcardState.omgedraaid);

  if (flashcardState.omgedraaid) {
    document.getElementById("fc-actie-knoppen").style.display = "flex";
    document.getElementById("fc-flip-hint").style.display = "none";
  }
}

function markeerKaart(gekend) {
  const kaart = flashcardState.kaarten[flashcardState.huidigIndex];
  flashcardState.resultaten.push({ kaart, gekend });
  toonKaart(flashcardState.huidigIndex + 1);
}

function updateFlashcardVoortgang() {
  const totaal = flashcardState.kaarten.length;
  const huidig = flashcardState.huidigIndex + 1;
  const pct = totaal > 0 ? Math.min(100, Math.round(((huidig - 1) / totaal) * 100)) : 0;

  document.getElementById("fc-teller").textContent =
    totaal > 0 ? `${Math.min(huidig, totaal)} / ${totaal}` : "0 / 0";

  const balk = document.getElementById("fc-voortgangsbalk-fill");
  if (balk) balk.style.width = pct + "%";
}

function toonFlashcardResultaat() {
  const totaal = flashcardState.resultaten.length;
  const aantalGekend = flashcardState.resultaten.filter(r => r.gekend).length;
  const aantalOnbekend = totaal - aantalGekend;

  document.getElementById("scherm-flashcards").hidden = true;
  const resultaatScherm = document.getElementById("scherm-flashcard-resultaat");
  resultaatScherm.hidden = false;

  document.getElementById("fc-res-gekend").textContent = aantalGekend;
  document.getElementById("fc-res-onbekend").textContent = aantalOnbekend;
  document.getElementById("fc-res-totaal").textContent = totaal;

  const pct = totaal > 0 ? Math.round((aantalGekend / totaal) * 100) : 0;
  document.getElementById("fc-res-pct").textContent = pct + "%";

  const pctEl = document.getElementById("fc-res-pct");
  pctEl.className = "score-pct " + (pct >= 80 ? "score-goed" : pct >= 50 ? "score-matig" : "score-slecht");

  // Opnieuw knop — alleen onbekende kaarten
  const opnieuwKnop = document.getElementById("fc-res-opnieuw-onbekend");
  opnieuwKnop.style.display = aantalOnbekend > 0 ? "inline-flex" : "none";

  // Per-kaart review
  let reviewWrapper = document.getElementById("fc-review-wrapper");
  if (!reviewWrapper) {
    reviewWrapper = document.createElement("details");
    reviewWrapper.id = "fc-review-wrapper";
    reviewWrapper.className = "score-review-details";
    reviewWrapper.innerHTML = "<summary>Bekijk alle kaarten</summary><div id='fc-review'></div>";
    const resultaatInhoud = resultaatScherm.querySelector(".resultaat-inhoud");
    resultaatInhoud.appendChild(reviewWrapper);
  }
  const reviewEl = document.getElementById("fc-review");
  reviewEl.innerHTML = "";
  flashcardState.resultaten.forEach(({ kaart, gekend }) => {
    const item = document.createElement("div");
    item.className = "review-item " + (gekend ? "review-correct" : "review-fout");
    item.innerHTML = `
      <span class="review-icoon">${gekend ? "✓" : "✗"}</span>
      <div class="review-inhoud">
        <p class="review-vraag">${kaart.voorkant}</p>
        <p class="review-correct-antwoord">Antwoord: <strong>${kaart.achterkant}</strong></p>
      </div>
    `;
    reviewEl.appendChild(item);
  });

  // Export knoppen
  let exportWrapper = document.getElementById("fc-export-knoppen");
  if (!exportWrapper) {
    exportWrapper = document.createElement("div");
    exportWrapper.id = "fc-export-knoppen";
    exportWrapper.className = "export-knoppen";
    const resultaatInhoud = resultaatScherm.querySelector(".resultaat-inhoud");
    resultaatInhoud.appendChild(exportWrapper);
  }
  exportWrapper.innerHTML = `
    <button class="export-knop" onclick="window.print()">📥 Download PDF</button>
    <button class="export-knop" id="fc-kopieer-knop" onclick="kopieerFlashcardResultaat(this)">📋 Kopieer naar klembord</button>
  `;
}

function kopieerFlashcardResultaat(knop) {
  const vak = ALLE_VAKKEN.find(v => v.id === flashcardState.vakId);
  const totaal = flashcardState.resultaten.length;
  const aantalGekend = flashcardState.resultaten.filter(r => r.gekend).length;
  const pct = totaal > 0 ? Math.round((aantalGekend / totaal) * 100) : 0;
  const datum = new Date().toLocaleDateString("nl-NL");

  let tekst = `FLASHCARD RESULTATEN — ${vak ? vak.naam : ""}\n`;
  tekst += `Datum: ${datum}\n`;
  tekst += `Score: ${aantalGekend} / ${totaal} gekend (${pct}%)\n`;
  tekst += "─".repeat(40) + "\n\n";

  flashcardState.resultaten.forEach(({ kaart, gekend }) => {
    tekst += `${gekend ? "✓" : "✗"} ${kaart.voorkant}\n`;
    tekst += `   → ${kaart.achterkant}\n\n`;
  });

  navigator.clipboard.writeText(tekst).then(() => {
    knop.textContent = "✓ Gekopieerd!";
    setTimeout(() => { knop.textContent = "📋 Kopieer naar klembord"; }, 2000);
  }).catch(() => {
    prompt("Kopieer de tekst hieronder:", tekst);
  });
}

function herhaatOnbekend() {
  const vakId = flashcardState.vakId;
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) return;

  const onbekendKaarten = flashcardState.resultaten
    .filter(r => !r.gekend)
    .map(r => r.kaart);

  flashcardState.huidigIndex = 0;
  flashcardState.resultaten = [];
  flashcardState.omgedraaid = false;
  flashcardState.kaarten = schudArray(onbekendKaarten);

  document.getElementById("scherm-flashcard-resultaat").hidden = true;
  document.getElementById("scherm-flashcards").hidden = false;

  // Verwijder eerder aangemaakte review/export
  const reviewWrapper = document.getElementById("fc-review-wrapper");
  if (reviewWrapper) reviewWrapper.remove();
  const exportWrapper = document.getElementById("fc-export-knoppen");
  if (exportWrapper) exportWrapper.remove();

  renderFlashcardScherm(vak);
  toonKaart(0);
}

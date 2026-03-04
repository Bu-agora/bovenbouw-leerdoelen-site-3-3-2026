// Flashcard mode logic
const flashcardState = {
  kaarten: [],
  huidigIndex: 0,
  gekend: [],
  onbekend: [],
  vakId: null,
  omgedraaid: false,
};

function startFlashcards(vakId, categorieen) {
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) return;

  flashcardState.vakId = vakId;
  flashcardState.huidigIndex = 0;
  flashcardState.gekend = [];
  flashcardState.onbekend = [];
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
  if (gekend) {
    flashcardState.gekend.push(kaart.id);
  } else {
    flashcardState.onbekend.push(kaart.id);
  }
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
  const totaal = flashcardState.kaarten.length;
  const aantalGekend = flashcardState.gekend.length;
  const aantalOnbekend = flashcardState.onbekend.length;

  document.getElementById("scherm-flashcards").hidden = true;
  const resultaatScherm = document.getElementById("scherm-flashcard-resultaat");
  resultaatScherm.hidden = false;

  document.getElementById("fc-res-gekend").textContent = aantalGekend;
  document.getElementById("fc-res-onbekend").textContent = aantalOnbekend;
  document.getElementById("fc-res-totaal").textContent = totaal;

  const pct = totaal > 0 ? Math.round((aantalGekend / totaal) * 100) : 0;
  document.getElementById("fc-res-pct").textContent = pct + "%";

  // Color based on score
  const pctEl = document.getElementById("fc-res-pct");
  pctEl.className = "score-pct " + (pct >= 80 ? "score-goed" : pct >= 50 ? "score-matig" : "score-slecht");

  // Opnieuw knop — alleen onbekende kaarten
  const opnieuwKnop = document.getElementById("fc-res-opnieuw-onbekend");
  opnieuwKnop.style.display = aantalOnbekend > 0 ? "inline-flex" : "none";
}

function herhaatOnbekend() {
  const vakId = flashcardState.vakId;
  const vak = ALLE_VAKKEN.find(v => v.id === vakId);
  if (!vak) return;

  const onbekendIds = new Set(flashcardState.onbekend);
  const onbekendKaarten = vak.flashcards.filter(k => onbekendIds.has(k.id));

  flashcardState.huidigIndex = 0;
  flashcardState.gekend = [];
  flashcardState.onbekend = [];
  flashcardState.omgedraaid = false;
  flashcardState.kaarten = schudArray(onbekendKaarten);

  document.getElementById("scherm-flashcard-resultaat").hidden = true;
  document.getElementById("scherm-flashcards").hidden = false;

  renderFlashcardScherm(vak);
  toonKaart(0);
}

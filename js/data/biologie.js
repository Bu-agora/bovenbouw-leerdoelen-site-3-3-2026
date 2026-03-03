// Vak-instellingen — inhoud staat in js/data/inhoud.js
const BIOLOGIE = {
  id: "biologie", naam: "Biologie", kleur: "#27AE60", icoon: "🌿", afbeelding: "images/biologie.jpg",
  flashcards: INHOUD.biologie.flashcards.map((fc, i) => ({
    id: `bio_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.biologie.vragen.map((q, i) => ({
    id: `bio_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

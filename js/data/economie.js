// Vak-instellingen — inhoud staat in js/data/inhoud.js
const ECONOMIE = {
  id: "economie", naam: "Economie", kleur: "#E67E22", icoon: "💶", afbeelding: "images/economie.jpg",
  flashcards: INHOUD.economie.flashcards.map((fc, i) => ({
    id: `eco_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.economie.vragen.map((q, i) => ({
    id: `eco_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

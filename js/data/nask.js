// Vak-instellingen — inhoud staat in js/data/inhoud.js
const NASK = {
  id: "nask", naam: "NaSk", kleur: "#8E44AD", icoon: "⚡", afbeelding: "images/nask.jpg",
  flashcards: INHOUD.nask.flashcards.map((fc, i) => ({
    id: `nask_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.nask.vragen.map((q, i) => ({
    id: `nask_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

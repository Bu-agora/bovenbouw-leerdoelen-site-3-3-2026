// Vak-instellingen — inhoud staat in js/data/inhoud.js
const DUITS = {
  id: "duits", naam: "Duits", kleur: "#4A90D9", icoon: "🇩🇪", afbeelding: "images/duits.jpg",
  flashcards: INHOUD.duits.flashcards.map((fc, i) => ({
    id: `du_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.duits.vragen.map((q, i) => ({
    id: `du_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

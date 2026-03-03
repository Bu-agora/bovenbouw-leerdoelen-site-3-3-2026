// Vak-instellingen — inhoud staat in js/data/inhoud.js
const GESCHIEDENIS = {
  id: "geschiedenis", naam: "Geschiedenis", kleur: "#D4A017", icoon: "📜", afbeelding: "images/geschiedenis.jpg",
  flashcards: INHOUD.geschiedenis.flashcards.map((fc, i) => ({
    id: `ges_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.geschiedenis.vragen.map((q, i) => ({
    id: `ges_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

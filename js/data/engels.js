// Vak-instellingen — inhoud staat in js/data/inhoud.js
const ENGELS = {
  id: "engels", naam: "Engels", kleur: "#E74C3C", icoon: "🇬🇧", afbeelding: "images/engels.jpg",
  flashcards: INHOUD.engels.flashcards.map((fc, i) => ({
    id: `en_${String(i+1).padStart(3,"0")}`, voorkant: fc.v, achterkant: fc.a, categorie: fc.cat
  })),
  quizvragen: INHOUD.engels.vragen.map((q, i) => ({
    id: `en_q${String(i+1).padStart(3,"0")}`, type: q.type, vraag: q.vraag, antwoord: q.antwoord,
    opties: q.type === "meerkeuze" ? [q.antwoord, ...q.fouten] : undefined,
    uitleg: q.uitleg, categorie: q.cat
  }))
};

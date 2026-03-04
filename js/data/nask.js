/* ============================================================
   NASK — Flashcards & Quizvragen
   Gebaseerd op: Basisleerdoelen NaSk onderbouw → bovenbouw
   ============================================================ */

const NASK = {
  id: "nask",
  naam: "NaSk",
  kleur: "#F57C00",
  icoon: "⚡",
  afbeelding: "images/nask.jpg",

  flashcards: [
    // ── Algemeen ──
    { id: "na_001", voorkant: "Wat is het verschil tussen natuurkunde en scheikunde?", achterkant: "Natuurkunde: stoffen veranderen NIET (krachten, beweging, energie)\nScheikunde: er ontstaan NIEUWE stoffen (reacties)", categorie: "Algemeen" },
    { id: "na_002", voorkant: "Noem de stappen van de wetenschappelijke methode", achterkant: "1. Waarneming/probleem\n2. Onderzoeksvraag\n3. Hypothese (als…dan…)\n4. Experiment\n5. Resultaten verzamelen\n6. Conclusie", categorie: "Algemeen" },
    { id: "na_003", voorkant: "Wat is een grootheid?", achterkant: "Wat je meet.\nVoorbeelden: lengte, massa, tijd, temperatuur, snelheid", categorie: "Algemeen" },
    { id: "na_004", voorkant: "Wat is een eenheid?", achterkant: "Waarin je iets uitdrukt.\nVoorbeelden: meter (m), kilogram (kg), seconde (s), °C", categorie: "Algemeen" },
    { id: "na_005", voorkant: "Hoe bereken je het volume van een rechthoekig voorwerp?", achterkant: "Volume = lengte × breedte × hoogte\nVoorbeeld: 5cm × 3cm × 2cm = 30 cm³", categorie: "Algemeen" },
    { id: "na_006", voorkant: "Metriek stelsel: lengte-eenheden", achterkant: "km → m → dm → cm → mm\nElke stap: ×10 of ÷10\n1 km = 1000 m", categorie: "Algemeen" },
    { id: "na_007", voorkant: "Onthoud: 1 dm³ = ?", achterkant: "1 dm³ = 1 liter\n1 cm³ = 1 ml", categorie: "Algemeen" },

    // ── Elektriciteit ──
    { id: "na_008", voorkant: "Wat heb je nodig voor een gesloten stroomkring?", achterkant: "1. Spanningsbron (batterij)\n2. Geleiders (draden)\n3. Verbruiker (lamp)\nHet circuit moet een gesloten lus zijn!", categorie: "Elektriciteit" },
    { id: "na_009", voorkant: "Wat zijn geleiders? Noem voorbeelden.", achterkant: "Materialen die stroom doorlaten.\nVoorbeelden: koper, aluminium, ijzer, water met zouten", categorie: "Elektriciteit" },
    { id: "na_010", voorkant: "Wat zijn isolatoren? Noem voorbeelden.", achterkant: "Materialen die GEEN stroom doorlaten.\nVoorbeelden: plastic, rubber, hout, glas, lucht", categorie: "Elektriciteit" },
    { id: "na_011", voorkant: "Wat is stroomsterkte (I)?", achterkant: "De hoeveelheid stroom door een draad.\nEenheid: Ampère (A)\nGemeten met: ampèremeter (IN SERIE)", categorie: "Elektriciteit" },
    { id: "na_012", voorkant: "Wat is spanning (U)?", achterkant: "Het verschil in elektrische energie = de 'duwkracht' voor stroom.\nEenheid: Volt (V)\nGemeten met: voltmeter (PARALLEL)", categorie: "Elektriciteit" },
    { id: "na_013", voorkant: "Wat gebeurt er als je 2 batterijen van 1,5V in serie schakelt?", achterkant: "De spanningen tel je op:\n1,5V + 1,5V = 3V", categorie: "Elektriciteit" },
    { id: "na_014", voorkant: "Verschil serieschakeling vs. parallelschakeling?", achterkant: "Serie: alle onderdelen achter elkaar, 1 lus. Als 1 lamp kapot → alle uit.\nParallel: elke lamp eigen lus. Als 1 lamp kapot → rest brandt door.", categorie: "Elektriciteit" },
    { id: "na_015", voorkant: "Waarom zijn apparaten in huis parallel geschakeld?", achterkant: "Zodat je elk apparaat onafhankelijk kunt aan- en uitzetten.\nAls 1 apparaat kapot gaat, werken de rest gewoon.", categorie: "Elektriciteit" },
    { id: "na_016", voorkant: "Formule voor vermogen?", achterkant: "P = U × I\nVermogen = spanning × stroomsterkte\nEenheid: Watt (W)", categorie: "Elektriciteit" },
    { id: "na_017", voorkant: "Een lamp op 230V verbruikt 0,5A. Wat is het vermogen?", achterkant: "P = U × I = 230 × 0,5 = 115 Watt", categorie: "Elektriciteit" },
    { id: "na_018", voorkant: "Noem de schakelschema-symbolen", achterkant: "Batterij: lang streepje (+) en kort streepje (-)\nLamp: cirkel met kruis\nSchakelaar: open/dicht contact\nAmpèremeter: A in cirkel\nVoltmeter: V in cirkel", categorie: "Elektriciteit" },
    { id: "na_019", voorkant: "Hoe sluit je een ampèremeter aan?", achterkant: "IN SERIE (in de keten zelf)", categorie: "Elektriciteit" },
    { id: "na_020", voorkant: "Hoe sluit je een voltmeter aan?", achterkant: "PARALLEL (naast de verbruiker)", categorie: "Elektriciteit" },
    { id: "na_021", voorkant: "Noem 4 spanningsbronnen", achterkant: "Batterij, accu, stopcontact (230V), zonnepaneel, dynamo, powerbank", categorie: "Elektriciteit" },

    // ── Beweging ──
    { id: "na_022", voorkant: "Formule voor snelheid?", achterkant: "v = s / t\nsnelheid = afstand / tijd\nv in m/s, s in m, t in s", categorie: "Beweging" },
    { id: "na_023", voorkant: "Hoe reken je m/s om naar km/h?", achterkant: "× 3,6\nVoorbeeld: 10 m/s = 10 × 3,6 = 36 km/h", categorie: "Beweging" },
    { id: "na_024", voorkant: "Hoe reken je km/h om naar m/s?", achterkant: "÷ 3,6\nVoorbeeld: 72 km/h = 72 / 3,6 = 20 m/s", categorie: "Beweging" },
    { id: "na_025", voorkant: "Formule voor afstand?", achterkant: "s = v × t\nafstand = snelheid × tijd", categorie: "Beweging" },
    { id: "na_026", voorkant: "Wat is een eenparige beweging?", achterkant: "Snelheid blijft gelijk.\nIn het afstand-tijddiagram: rechte lijn.", categorie: "Beweging" },
    { id: "na_027", voorkant: "Wat is een versnelde beweging?", achterkant: "Snelheid neemt toe.\nIn het diagram: lijn buigt omhoog (wordt steiler).", categorie: "Beweging" },
    { id: "na_028", voorkant: "Wat is een vertraagde beweging?", achterkant: "Snelheid neemt af.\nIn het diagram: lijn buigt af (wordt vlakker).", categorie: "Beweging" },
    { id: "na_029", voorkant: "Formule: stopafstand = ?", achterkant: "Stopafstand = reactie-afstand + remweg", categorie: "Beweging" },
    { id: "na_030", voorkant: "Wat is het verschil tussen reactietijd en remweg?", achterkant: "Reactietijd: tijd tussen gevaar zien en beginnen met remmen\nRemweg: afstand vanaf begin remmen tot stilstand", categorie: "Beweging" },
    { id: "na_031", voorkant: "Waarvan hangt de remweg af?", achterkant: "1. Snelheid (hoger = langer)\n2. Wegdek (nat/glad = langer)\n3. Banden (versleten = langer)\n4. Gewicht van de auto", categorie: "Beweging" },
    { id: "na_032", voorkant: "100 meter in 10 seconden. Wat is de snelheid?", achterkant: "v = s / t = 100 / 10 = 10 m/s\n= 10 × 3,6 = 36 km/h", categorie: "Beweging" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "na_q001", type: "meerkeuze", categorie: "Algemeen",
      vraag: "Bij welk vak ontstaan er NIEUWE stoffen?",
      opties: ["Natuurkunde", "Scheikunde", "Beide", "Geen van beide"],
      antwoord: "Scheikunde",
      uitleg: "Bij scheikunde ontstaan nieuwe stoffen (chemische reacties). Bij natuurkunde veranderen stoffen niet."
    },
    {
      id: "na_q002", type: "meerkeuze", categorie: "Algemeen",
      vraag: "Wat is 1 dm³?",
      opties: ["1 ml", "1 liter", "10 liter", "1 m³"],
      antwoord: "1 liter",
      uitleg: "1 dm³ = 1 liter. En 1 cm³ = 1 ml."
    },
    {
      id: "na_q003", type: "meerkeuze", categorie: "Elektriciteit",
      vraag: "Wat is de eenheid van stroomsterkte?",
      opties: ["Volt (V)", "Watt (W)", "Ampère (A)", "Ohm (Ω)"],
      antwoord: "Ampère (A)",
      uitleg: "Stroomsterkte (I) wordt gemeten in Ampère (A) met een ampèremeter."
    },
    {
      id: "na_q004", type: "meerkeuze", categorie: "Elektriciteit",
      vraag: "Hoe sluit je een voltmeter aan?",
      opties: ["In serie", "Parallel", "Achter de batterij", "Maakt niet uit"],
      antwoord: "Parallel",
      uitleg: "Voltmeter: PARALLEL (naast de verbruiker). Ampèremeter: IN SERIE."
    },
    {
      id: "na_q005", type: "meerkeuze", categorie: "Elektriciteit",
      vraag: "3 batterijen van 1,5V in serie. Wat is de totale spanning?",
      opties: ["1,5V", "3,0V", "4,5V", "6,0V"],
      antwoord: "4,5V",
      uitleg: "In serie tel je spanningen op: 3 × 1,5V = 4,5V."
    },
    {
      id: "na_q006", type: "meerkeuze", categorie: "Elektriciteit",
      vraag: "Welk materiaal is een isolator?",
      opties: ["Koper", "Aluminium", "Plastic", "IJzer"],
      antwoord: "Plastic",
      uitleg: "Plastic is een isolator (laat geen stroom door). Koper, aluminium en ijzer zijn geleiders."
    },
    {
      id: "na_q007", type: "meerkeuze", categorie: "Elektriciteit",
      vraag: "P = U × I. Wat is P als U = 230V en I = 2A?",
      opties: ["115 W", "232 W", "460 W", "46 W"],
      antwoord: "460 W",
      uitleg: "P = 230 × 2 = 460 Watt."
    },
    {
      id: "na_q008", type: "meerkeuze", categorie: "Beweging",
      vraag: "36 km/h = ? m/s",
      opties: ["3,6 m/s", "10 m/s", "36 m/s", "100 m/s"],
      antwoord: "10 m/s",
      uitleg: "km/h → m/s: delen door 3,6. 36 / 3,6 = 10 m/s."
    },
    {
      id: "na_q009", type: "meerkeuze", categorie: "Beweging",
      vraag: "Een rechte lijn in een afstand-tijddiagram betekent:",
      opties: ["Versnelde beweging", "Vertraagde beweging", "Eenparige beweging", "Stilstand"],
      antwoord: "Eenparige beweging",
      uitleg: "Eenparige beweging = constante snelheid = rechte lijn in het diagram."
    },
    {
      id: "na_q010", type: "meerkeuze", categorie: "Beweging",
      vraag: "Stopafstand = ?",
      opties: ["Remweg × 2", "Reactie-afstand + remweg", "Snelheid × tijd", "Remweg - reactie-afstand"],
      antwoord: "Reactie-afstand + remweg",
      uitleg: "Stopafstand = reactie-afstand (tijdens reactietijd) + remweg (tijdens remmen)."
    },

    // ── Open vragen ──
    {
      id: "na_q011", type: "open", categorie: "Beweging",
      vraag: "Met welke formule bereken je snelheid? (gebruik v, s en t)",
      antwoord: "v = s / t",
      uitleg: "v = s / t → snelheid = afstand gedeeld door tijd."
    },
    {
      id: "na_q012", type: "open", categorie: "Elektriciteit",
      vraag: "Met welke formule bereken je vermogen? (gebruik P, U en I)",
      antwoord: "P = U × I",
      uitleg: "P = U × I → vermogen = spanning × stroomsterkte. Eenheid: Watt."
    },
    {
      id: "na_q013", type: "open", categorie: "Beweging",
      vraag: "Snelheid = 20 m/s, tijd = 5 seconden. Wat is de afstand in meter?",
      antwoord: "100",
      uitleg: "s = v × t = 20 × 5 = 100 meter."
    },

    // ── Juist of onjuist ──
    {
      id: "na_q014", type: "juistonjuist", categorie: "Elektriciteit",
      vraag: "In een serieschakeling is de spanning overal gelijk.",
      antwoord: "onjuist",
      uitleg: "In een PARALLELSCHAKELING is de spanning overal gelijk. In een serieschakeling wordt de spanning verdeeld."
    },
    {
      id: "na_q015", type: "juistonjuist", categorie: "Elektriciteit",
      vraag: "Hout is een geleider.",
      antwoord: "onjuist",
      uitleg: "Hout is een isolator — het laat geen stroom door."
    },
    {
      id: "na_q016", type: "juistonjuist", categorie: "Beweging",
      vraag: "Bij een versnelde beweging buigt de lijn in het afstand-tijddiagram omhoog.",
      antwoord: "juist",
      uitleg: "Versneld: lijn wordt steiler (buigt omhoog). Vertraagd: lijn wordt vlakker."
    },
    {
      id: "na_q017", type: "juistonjuist", categorie: "Algemeen",
      vraag: "IJzer dat roest is een voorbeeld van natuurkunde.",
      antwoord: "onjuist",
      uitleg: "Roesten = er ontstaat een nieuwe stof (roest). Dat is scheikunde."
    },
    {
      id: "na_q018", type: "juistonjuist", categorie: "Elektriciteit",
      vraag: "Een apparaat met groter vermogen verbruikt meer energie per seconde.",
      antwoord: "juist",
      uitleg: "Vermogen (Watt) = energie per seconde. Meer Watt = meer energieverbruik."
    },
  ]
};

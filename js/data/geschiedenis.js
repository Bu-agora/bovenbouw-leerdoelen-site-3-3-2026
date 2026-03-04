/* ============================================================
   GESCHIEDENIS — Flashcards & Quizvragen
   Gebaseerd op: LeerdoelenPentAgora onderbouw-bovenbouw
   ============================================================ */

const GESCHIEDENIS = {
  id: "geschiedenis",
  naam: "Geschiedenis",
  kleur: "#795548",
  icoon: "📜",
  afbeelding: "images/geschiedenis.jpg",

  flashcards: [
    // ── Bronnen ──
    { id: "ge_001", voorkant: "Wat is een bron in de geschiedenis?", achterkant: "Een overblijfsel of getuigenis uit het verleden.\nVoorbeelden: brieven, kranten, foto's, gebouwen, gereedschap.", categorie: "Bronnen" },
    { id: "ge_002", voorkant: "Noem 4 soorten bronnen", achterkant: "1. Geschreven (brieven, kranten, dagboeken)\n2. Beeldend (schilderijen, foto's, video's)\n3. Mondeling (interviews, verhalen)\n4. Materieel (gebouwen, gereedschap, kleding)", categorie: "Bronnen" },
    { id: "ge_003", voorkant: "Hoe beantwoord je een historische vraag met bronnen?", achterkant: "1. Lees de vraag goed\n2. Gebruik minimaal 2 bronnen\n3. Leg in eigen woorden uit wat de bronnen zeggen\n4. Leg uit hoe ze je antwoord ondersteunen", categorie: "Bronnen" },

    // ── Betrouwbaarheid ──
    { id: "ge_004", voorkant: "Op welke 4 dingen let je bij betrouwbaarheid van een bron?", achterkant: "1. Maker: wie? Ooggetuige?\n2. Tijd: wanneer gemaakt? Dicht bij de gebeurtenis?\n3. Doel: informeren, overtuigen, entertainen?\n4. Soort bron: dagboek, krant, propaganda?", categorie: "Betrouwbaarheid" },
    { id: "ge_005", voorkant: "Is een krant uit 1945 betrouwbaarder dan een Instagrampost uit 2024 over de bevrijding? Waarom?", achterkant: "Waarschijnlijk wel, omdat de krant dichter bij de gebeurtenis is gemaakt (tijd) en door een journalist (maker).", categorie: "Betrouwbaarheid" },
    { id: "ge_006", voorkant: "Wat is propaganda?", achterkant: "Eenzijdige informatie die bedoeld is om mensen te overtuigen van een bepaald standpunt. Vaak onbetrouwbaar als objectieve bron.", categorie: "Betrouwbaarheid" },
    { id: "ge_007", voorkant: "Waarom is het doel van een bron belangrijk?", achterkant: "Een bron die bedoeld is om te overtuigen (reclame, propaganda) kan eenzijdig zijn.\nEen bron die bedoeld is om te informeren (encyclopedie) is vaak objectiever.", categorie: "Betrouwbaarheid" },

    // ── Oorzaak en gevolg ──
    { id: "ge_008", voorkant: "Wat is een oorzaak?", achterkant: "De reden WAAROM iets is gebeurd.\nDe oorzaak komt vóór de gebeurtenis.", categorie: "Oorzaak en gevolg" },
    { id: "ge_009", voorkant: "Wat is een gevolg?", achterkant: "Wat er VERANDERDE na een gebeurtenis.\nHet gevolg komt ná de gebeurtenis.", categorie: "Oorzaak en gevolg" },
    { id: "ge_010", voorkant: "Voorbeeld: oorzaak en gevolg van WO1", achterkant: "Oorzaak: moord op Frans Ferdinand (1914)\nGevolgen: miljoenen doden, nieuwe landsgrenzen, Duitsland moest herstelbetalingen doen", categorie: "Oorzaak en gevolg" },
    { id: "ge_011", voorkant: "Kan een gebeurtenis meerdere oorzaken hebben?", achterkant: "Ja! De meeste historische gebeurtenissen hebben meerdere oorzaken en meerdere gevolgen.", categorie: "Oorzaak en gevolg" },

    // ── Tijdrekening ──
    { id: "ge_012", voorkant: "De 17e eeuw = welke jaren?", achterkant: "1600 - 1699\n(de Gouden Eeuw in Nederland)", categorie: "Tijd" },
    { id: "ge_013", voorkant: "De 20e eeuw = welke jaren?", achterkant: "1900 - 1999", categorie: "Tijd" },
    { id: "ge_014", voorkant: "De 21e eeuw = welke jaren?", achterkant: "2000 - nu (heden)", categorie: "Tijd" },
    { id: "ge_015", voorkant: "Hoe reken je een jaar om naar een eeuw?", achterkant: "Neem de eerste twee cijfers van het jaar en tel er 1 bij op.\n1945 → 19 + 1 = 20e eeuw\n1650 → 16 + 1 = 17e eeuw", categorie: "Tijd" },
    { id: "ge_016", voorkant: "Wat is een tijdlijn?", achterkant: "Een lijn waarop gebeurtenissen in de juiste chronologische volgorde staan.\nHelpt om verbanden te zien tussen wat ervoor en erna gebeurde.", categorie: "Tijd" },

    // ── Challenges (Agora) ──
    { id: "ge_017", voorkant: "Tips voor het werken aan een challenge (Agora)", achterkant: "1. Kies een duidelijk onderwerp\n2. Maak een planning\n3. Zoek en noteer bronnen\n4. Vraag tussentijds feedback\n5. Lever op tijd op\n6. Reflecteer: wat ging goed/beter?", categorie: "Vaardigheden" },
    { id: "ge_018", voorkant: "Wat is reflecteren?", achterkant: "Terugkijken op wat je hebt gedaan:\n- Wat ging goed?\n- Wat kan beter?\n- Welke keuzes heb je gemaakt en waarom?", categorie: "Vaardigheden" },

    // ── Extra kennis ──
    { id: "ge_019", voorkant: "Wat is het verschil tussen een primaire en secundaire bron?", achterkant: "Primaire bron: gemaakt in de tijd zelf (dagboek uit 1940)\nSecundaire bron: later gemaakt OVER die tijd (geschiedenisboek uit 2020)", categorie: "Bronnen" },
    { id: "ge_020", voorkant: "Wat betekent 'perspectief' in de geschiedenis?", achterkant: "Het gezichtspunt van waaruit iemand een gebeurtenis bekijkt.\nVerschillende mensen kunnen dezelfde gebeurtenis anders ervaren en beschrijven.", categorie: "Betrouwbaarheid" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "ge_q001", type: "meerkeuze", categorie: "Bronnen",
      vraag: "Hoeveel bronnen moet je minimaal gebruiken bij een historische vraag?",
      opties: ["1", "2", "3", "5"],
      antwoord: "2",
      uitleg: "Je beantwoordt een historische vraag met minimaal twee bronnen."
    },
    {
      id: "ge_q002", type: "meerkeuze", categorie: "Bronnen",
      vraag: "Een oud zwaard dat is opgegraven is een voorbeeld van een … bron.",
      opties: ["geschreven", "beeldende", "mondelinge", "materiële"],
      antwoord: "materiële",
      uitleg: "Materiële bronnen zijn voorwerpen: gebouwen, gereedschap, kleding, wapens."
    },
    {
      id: "ge_q003", type: "meerkeuze", categorie: "Betrouwbaarheid",
      vraag: "Welk kenmerk zegt het MEEST over de betrouwbaarheid van een bron?",
      opties: ["De kleur van het papier", "Wie de bron heeft gemaakt", "Hoe lang de tekst is", "Of er plaatjes bij staan"],
      antwoord: "Wie de bron heeft gemaakt",
      uitleg: "De maker (ooggetuige? expert? partijdig?) is cruciaal voor betrouwbaarheid."
    },
    {
      id: "ge_q004", type: "meerkeuze", categorie: "Betrouwbaarheid",
      vraag: "Een reclameposter uit 1940 is gemaakt met als doel te …",
      opties: ["informeren", "overtuigen", "entertainen", "onderwijzen"],
      antwoord: "overtuigen",
      uitleg: "Reclame en propaganda zijn bedoeld om te overtuigen → vaak eenzijdig."
    },
    {
      id: "ge_q005", type: "meerkeuze", categorie: "Oorzaak en gevolg",
      vraag: "Wat is een 'oorzaak'?",
      opties: ["Wat er na een gebeurtenis veranderde", "De reden waarom iets gebeurde", "Een bron uit het verleden", "Een mening over het verleden"],
      antwoord: "De reden waarom iets gebeurde",
      uitleg: "Oorzaak = waarom iets is gebeurd (komt vóór de gebeurtenis)."
    },
    {
      id: "ge_q006", type: "meerkeuze", categorie: "Tijd",
      vraag: "In welke eeuw valt het jaar 1776?",
      opties: ["16e eeuw", "17e eeuw", "18e eeuw", "19e eeuw"],
      antwoord: "18e eeuw",
      uitleg: "1776: 17 + 1 = 18e eeuw (jaren 1700-1799)."
    },
    {
      id: "ge_q007", type: "meerkeuze", categorie: "Tijd",
      vraag: "De Gouden Eeuw in Nederland valt in de …",
      opties: ["15e eeuw", "16e eeuw", "17e eeuw", "18e eeuw"],
      antwoord: "17e eeuw",
      uitleg: "De Gouden Eeuw = 17e eeuw = jaren 1600-1699."
    },
    {
      id: "ge_q008", type: "meerkeuze", categorie: "Bronnen",
      vraag: "Een dagboek uit 1943 is een … bron.",
      opties: ["secundaire", "primaire", "materiële", "mondelinge"],
      antwoord: "primaire",
      uitleg: "Een primaire bron is gemaakt in de tijd zelf. Een dagboek uit 1943 is een primaire geschreven bron."
    },

    // ── Open vragen ──
    {
      id: "ge_q009", type: "open", categorie: "Oorzaak en gevolg",
      vraag: "Komt een oorzaak vóór of ná de gebeurtenis?",
      antwoord: "voor",
      uitleg: "De oorzaak komt VÓÓR de gebeurtenis (het is de reden waarom het gebeurde)."
    },
    {
      id: "ge_q010", type: "open", categorie: "Tijd",
      vraag: "In welke eeuw leven wij nu? (schrijf het cijfer)",
      antwoord: "21",
      uitleg: "We leven in de 21e eeuw (jaren 2000-2099)."
    },
    {
      id: "ge_q011", type: "open", categorie: "Betrouwbaarheid",
      vraag: "Noem 1 van de 4 kenmerken waarmee je betrouwbaarheid beoordeelt.",
      antwoord: "maker",
      uitleg: "De 4 kenmerken zijn: maker, tijd, doel en soort bron."
    },

    // ── Juist of onjuist ──
    {
      id: "ge_q012", type: "juistonjuist", categorie: "Bronnen",
      vraag: "Een geschiedenisboek uit 2024 is een primaire bron over de Tweede Wereldoorlog.",
      antwoord: "onjuist",
      uitleg: "Een geschiedenisboek uit 2024 is een SECUNDAIRE bron — het is later geschreven OVER die tijd, niet erin."
    },
    {
      id: "ge_q013", type: "juistonjuist", categorie: "Oorzaak en gevolg",
      vraag: "Een historische gebeurtenis heeft altijd precies één oorzaak.",
      antwoord: "onjuist",
      uitleg: "De meeste gebeurtenissen hebben meerdere oorzaken en meerdere gevolgen."
    },
    {
      id: "ge_q014", type: "juistonjuist", categorie: "Tijd",
      vraag: "Het jaar 1899 valt in de 19e eeuw.",
      antwoord: "juist",
      uitleg: "18 + 1 = 19e eeuw. De 19e eeuw loopt van 1800 tot 1899."
    },
    {
      id: "ge_q015", type: "juistonjuist", categorie: "Betrouwbaarheid",
      vraag: "Een bron die bedoeld is om te overtuigen is altijd onbetrouwbaar.",
      antwoord: "onjuist",
      uitleg: "Niet altijd, maar je moet er extra kritisch naar kijken. Het doel beïnvloedt de betrouwbaarheid, maar maakt een bron niet automatisch onbetrouwbaar."
    },
  ]
};

const DUITS = {
  id: "duits",
  naam: "Duits",
  kleur: "#4A90D9",
  icoon: "🇩🇪",
  afbeelding: "images/duits.jpg",

  flashcards: [
    { id: "du_001", voorkant: "ich", achterkant: "ik (1e persoon enkelvoud)", categorie: "Voornaamwoorden" },
    { id: "du_002", voorkant: "du", achterkant: "jij (2e persoon enkelvoud)", categorie: "Voornaamwoorden" },
    { id: "du_003", voorkant: "er / sie / es", achterkant: "hij / zij / het (3e persoon enkelvoud)", categorie: "Voornaamwoorden" },
    { id: "du_004", voorkant: "wir", achterkant: "wij (1e persoon meervoud)", categorie: "Voornaamwoorden" },
    { id: "du_005", voorkant: "ihr", achterkant: "jullie (2e persoon meervoud)", categorie: "Voornaamwoorden" },
    { id: "du_006", voorkant: "sie / Sie", achterkant: "zij (meervoud) / u (beleefd)", categorie: "Voornaamwoorden" },
    { id: "du_007", voorkant: "wohnen — enkelvoud\n(ich, du, er/sie/es)", achterkant: "ich wohne\ndu wohnst\ner/sie/es wohnt", categorie: "Werkwoorden" },
    { id: "du_008", voorkant: "wohnen — meervoud\n(wir, ihr, sie/Sie)", achterkant: "wir wohnen\nihr wohnt\nsie/Sie wohnen", categorie: "Werkwoorden" },
    { id: "du_009", voorkant: "haben — enkelvoud\n(ich, du, er/sie/es)", achterkant: "ich habe\ndu hast\ner/sie/es hat", categorie: "Werkwoorden" },
    { id: "du_010", voorkant: "haben — meervoud\n(wir, ihr, sie/Sie)", achterkant: "wir haben\nihr habt\nsie/Sie haben", categorie: "Werkwoorden" },
    { id: "du_011", voorkant: "sein — enkelvoud\n(ich, du, er/sie/es)", achterkant: "ich bin\ndu bist\ner/sie/es ist", categorie: "Werkwoorden" },
    { id: "du_012", voorkant: "sein — meervoud\n(wir, ihr, sie/Sie)", achterkant: "wir sind\nihr seid\nsie/Sie sind", categorie: "Werkwoorden" },
    { id: "du_013", voorkant: "der / die / das", achterkant: "lidwoorden:\nder = mannelijk\ndie = vrouwelijk\ndas = onzijdig", categorie: "Lidwoorden" },
    { id: "du_014", voorkant: "der Vater", achterkant: "de vader (mannelijk)", categorie: "Familie" },
    { id: "du_015", voorkant: "die Mutter", achterkant: "de moeder (vrouwelijk)", categorie: "Familie" },
    { id: "du_016", voorkant: "die Schwester / der Bruder", achterkant: "de zus / de broer", categorie: "Familie" },
    { id: "du_017", voorkant: "die Oma / der Opa", achterkant: "de oma / de opa", categorie: "Familie" },
    { id: "du_018", voorkant: "die Schule / der Lehrer / die Lehrerin", achterkant: "de school / de leraar / de lerares", categorie: "Schule" },
    { id: "du_019", voorkant: "das Haus / die Wohnung / das Zimmer", achterkant: "het huis / het appartement / de kamer", categorie: "Wohnen" },
    { id: "du_020", voorkant: "Wie heißt du?\nWoher kommst du?", achterkant: "Hoe heet jij?\nWaar kom jij vandaan?", categorie: "Zinnen" },
  ],

  quizvragen: [
    {
      id: "du_q001", type: "meerkeuze",
      vraag: "Wat is het correcte voornaamwoord voor 'wij' in het Duits?",
      antwoord: "wir", opties: ["wir", "ihr", "sie", "wer"],
      uitleg: "'Wir' = wij. 'Ihr' = jullie. 'Sie' = zij/u.", categorie: "Voornaamwoorden"
    },
    {
      id: "du_q002", type: "meerkeuze",
      vraag: "Welke uitgang krijgt het werkwoord 'spielen' bij 'du'?",
      antwoord: "du spielst", opties: ["du spielst", "du spiele", "du spielen", "du spielet"],
      uitleg: "Bij 'du' voeg je '-st' toe aan de stam: spiel + st = spielst.", categorie: "Werkwoorden"
    },
    {
      id: "du_q003", type: "meerkeuze",
      vraag: "Wat is de correcte vorm van 'sein' bij 'er'?",
      antwoord: "ist", opties: ["ist", "bist", "bin", "seid"],
      uitleg: "Sein is onregelmatig: ich bin, du bist, er/sie/es ist.", categorie: "Werkwoorden"
    },
    {
      id: "du_q004", type: "meerkeuze",
      vraag: "Welk lidwoord hoort bij 'Vater' (vader)?",
      antwoord: "der", opties: ["der", "die", "das", "den"],
      uitleg: "'Vater' is mannelijk, dus 'der Vater'.", categorie: "Lidwoorden"
    },
    {
      id: "du_q005", type: "meerkeuze",
      vraag: "Welk lidwoord hoort bij 'Schule' (school)?",
      antwoord: "die", opties: ["die", "der", "das", "dem"],
      uitleg: "'Schule' is vrouwelijk, dus 'die Schule'.", categorie: "Lidwoorden"
    },
    {
      id: "du_q006", type: "meerkeuze",
      vraag: "Welk lidwoord hoort bij 'Haus' (huis)?",
      antwoord: "das", opties: ["das", "der", "die", "des"],
      uitleg: "'Haus' is onzijdig, dus 'das Haus'.", categorie: "Lidwoorden"
    },
    {
      id: "du_q007", type: "juistonjuist",
      vraag: "'Ich bin' is de eerste persoon enkelvoud van het werkwoord 'haben'.",
      antwoord: "onjuist",
      uitleg: "'Ich bin' hoort bij 'sein' (zijn). 'Haben' (hebben) geeft 'ich habe'.", categorie: "Werkwoorden"
    },
    {
      id: "du_q008", type: "juistonjuist",
      vraag: "'Ihr' is het meervoud van 'du'.",
      antwoord: "juist",
      uitleg: "Du = jij (enkelvoud), ihr = jullie (meervoud).", categorie: "Voornaamwoorden"
    },
    {
      id: "du_q009", type: "juistonjuist",
      vraag: "'Die Mutter' is mannelijk.",
      antwoord: "onjuist",
      uitleg: "'Die Mutter' is vrouwelijk. 'Die' is het vrouwelijke lidwoord.", categorie: "Lidwoorden"
    },
    {
      id: "du_q010", type: "open",
      vraag: "Vervoeg 'spielen' voor 'wir'.",
      antwoord: "wir spielen",
      uitleg: "Bij 'wir' is de uitgang -en: wir spielen.", categorie: "Werkwoorden"
    },
    {
      id: "du_q011", type: "open",
      vraag: "Vertaal naar het Duits (met lidwoord): 'de broer'.",
      antwoord: "der Bruder",
      uitleg: "'Bruder' is mannelijk, dus 'der Bruder'.", categorie: "Familie"
    },
    {
      id: "du_q012", type: "open",
      vraag: "Hoe vraag je 'Hoe heet jij?' in het Duits?",
      antwoord: "Wie heißt du",
      uitleg: "Wie heißt du? = Hoe heet jij?", categorie: "Zinnen"
    },
    {
      id: "du_q013", type: "meerkeuze",
      vraag: "Wat betekent 'das Zimmer'?",
      antwoord: "de kamer", opties: ["de kamer", "het bed", "het huis", "de school"],
      uitleg: "Das Zimmer = de kamer. Das Haus = het huis. Das Bett = het bed.", categorie: "Wohnen"
    },
    {
      id: "du_q014", type: "meerkeuze",
      vraag: "Welke vorm is correct voor 'haben' bij 'ich'?",
      antwoord: "ich habe", opties: ["ich habe", "ich hat", "ich haben", "ich habt"],
      uitleg: "Haben is onregelmatig: ich habe, du hast, er hat.", categorie: "Werkwoorden"
    },
    {
      id: "du_q015", type: "juistonjuist",
      vraag: "'Sie' kan zowel 'zij' (meervoud) als 'u' (beleefd) betekenen.",
      antwoord: "juist",
      uitleg: "Ja, 'sie' (klein) = zij/ze. 'Sie' (hoofdletter) = u (beleefd). Beide meervoud werkwoord.", categorie: "Voornaamwoorden"
    },
  ]
};

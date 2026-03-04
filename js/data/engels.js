/* ============================================================
   ENGELS — Flashcards & Quizvragen
   Gebaseerd op: Basisleerdoelen Engels onderbouw → bovenbouw
   ============================================================ */

const ENGELS = {
  id: "engels",
  naam: "Engels",
  kleur: "#C62828",
  icoon: "🇬🇧",
  afbeelding: "images/engels.jpg",

  flashcards: [
    // ── Present Simple ──
    { id: "en_001", voorkant: "Wanneer gebruik je de present simple?", achterkant: "Voor gewoontes, feiten en herhaalde acties.\nVoorbeeld: I play football every day.", categorie: "Grammatica" },
    { id: "en_002", voorkant: "Present simple: wat verandert er bij he/she/it?", achterkant: "Je voegt -s toe aan het werkwoord.\nI play → She plays\nI go → He goes", categorie: "Grammatica" },
    { id: "en_003", voorkant: "Present simple: ontkenning", achterkant: "I/you/we/they + do not (don't) + werkwoord\nHe/she/it + does not (doesn't) + werkwoord\nVoorbeeld: She doesn't play.", categorie: "Grammatica" },
    { id: "en_004", voorkant: "Present simple: vraagvorm", achterkant: "Do + I/you/we/they + werkwoord?\nDoes + he/she/it + werkwoord?\nVoorbeeld: Does she play?", categorie: "Grammatica" },

    // ── Past Simple ──
    { id: "en_005", voorkant: "Wanneer gebruik je de past simple?", achterkant: "Voor afgeronde acties in het verleden.\nVoorbeeld: I played football yesterday.", categorie: "Grammatica" },
    { id: "en_006", voorkant: "Past simple: regelmatige werkwoorden", achterkant: "Werkwoord + -ed\nplay → played\nwalk → walked", categorie: "Grammatica" },
    { id: "en_007", voorkant: "Past simple: onregelmatige werkwoorden (5 voorbeelden)", achterkant: "go → went\nsee → saw\neat → ate\ncome → came\ntake → took", categorie: "Grammatica" },
    { id: "en_008", voorkant: "Past simple: ontkenning en vraag", achterkant: "Ontkenning: did not (didn't) + werkwoord\nVraag: Did + onderwerp + werkwoord?\nVoorbeeld: Did you play? / I didn't play.", categorie: "Grammatica" },

    // ── Present Perfect ──
    { id: "en_009", voorkant: "Wanneer gebruik je de present perfect?", achterkant: "Actie begonnen in verleden, nu nog relevant.\nOf: tijdstip is niet belangrijk.\nSignaalwoorden: already, yet, just, ever, never, since, for", categorie: "Grammatica" },
    { id: "en_010", voorkant: "Present perfect: vorm", achterkant: "have/has + voltooid deelwoord (past participle)\nI have played.\nShe has eaten.", categorie: "Grammatica" },

    // ── Present Continuous ──
    { id: "en_011", voorkant: "Wanneer gebruik je de present continuous?", achterkant: "Voor acties die NU bezig zijn.\nVorm: am/is/are + werkwoord + -ing\nVoorbeeld: I am playing. She is reading.", categorie: "Grammatica" },

    // ── Past Continuous ──
    { id: "en_012", voorkant: "Wanneer gebruik je de past continuous?", achterkant: "Voor acties die bezig waren op een moment in het verleden.\nVorm: was/were + werkwoord + -ing\nVoorbeeld: I was playing when he called.", categorie: "Grammatica" },

    // ── Voornaamwoorden ──
    { id: "en_013", voorkant: "Subject pronouns (onderwerp)", achterkant: "I, you, he, she, it, we, they", categorie: "Grammatica" },
    { id: "en_014", voorkant: "Object pronouns (lijdend voorwerp)", achterkant: "me, you, him, her, it, us, them", categorie: "Grammatica" },
    { id: "en_015", voorkant: "Possessive adjectives (bezittelijk)", achterkant: "my, your, his, her, its, our, their", categorie: "Grammatica" },

    // ── To be & to have ──
    { id: "en_016", voorkant: "Vervoeg 'to be' (tegenwoordige tijd)", achterkant: "I am, you are, he/she/it is, we are, they are", categorie: "Grammatica" },
    { id: "en_017", voorkant: "Vervoeg 'to be' (verleden tijd)", achterkant: "I was, you were, he/she/it was, we were, they were", categorie: "Grammatica" },
    { id: "en_018", voorkant: "Vervoeg 'to have' (tegenwoordige tijd)", achterkant: "I have, you have, he/she/it has, we have, they have", categorie: "Grammatica" },

    // ── Meervoud ──
    { id: "en_019", voorkant: "Meervoudsregels in het Engels", achterkant: "Standaard: +s (books, cars)\nNa -s/-sh/-ch/-x/-z: +es (buses, watches)\nMedeklinker + y: y → ies (babies, cities)", categorie: "Grammatica" },
    { id: "en_020", voorkant: "Onregelmatige meervouden (6 stuks)", achterkant: "man → men\nwoman → women\nchild → children\ntooth → teeth\nfoot → feet\nmouse → mice", categorie: "Grammatica" },

    // ── Woordvolgorde ──
    { id: "en_021", voorkant: "Engelse zinsvolgorde", achterkant: "Subject + Verb + Object (SVO)\nVoorbeeld: I (S) eat (V) an apple (O).\nDe volgorde verandert NIET na tijdsbepalingen.", categorie: "Grammatica" },

    // ── Verbindingswoorden ──
    { id: "en_022", voorkant: "Belangrijke verbindingswoorden in het Engels", achterkant: "and (en), but (maar), because (omdat), so (dus)\nfirst (eerst), then (dan), finally (ten slotte)\nhowever (echter), therefore (daarom)", categorie: "Woordenschat" },

    // ── False friends ──
    { id: "en_023", voorkant: "Wat betekent 'slim' in het Engels?", achterkant: "Slank (NIET intelligent!)\n'Slim' in het Nederlands = 'smart' of 'clever' in het Engels.", categorie: "Woordenschat" },

    // ── Lees- en schrijftips ──
    { id: "en_024", voorkant: "Tips voor leesvaardigheid", achterkant: "1. Lees de vragen EERST\n2. Onderstreep sleutelwoorden\n3. Focus op de hoofdgedachte\n4. Let op signaalwoorden (but, however, because)", categorie: "Vaardigheden" },
    { id: "en_025", voorkant: "Hoe begin en eindig je een Engelse e-mail?", achterkant: "Begin: Dear…, Hi…, Hello…\nEind: Kind regards, Best wishes, See you soon", categorie: "Vaardigheden" },

    // ── Cultuur ──
    { id: "en_026", voorkant: "In hoeveel landen wordt Engels als officiële taal gesproken?", achterkant: "Meer dan 50 landen\nEngels is een wereldtaal.", categorie: "Cultuur" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "en_q001", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Welke zin is correct in de present simple?",
      opties: ["She play football.", "She plays football.", "She playing football.", "She playes football."],
      antwoord: "She plays football.",
      uitleg: "Bij he/she/it voeg je -s toe: she plays."
    },
    {
      id: "en_q002", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Wat is de past simple van 'go'?",
      opties: ["goed", "goed", "went", "gone"],
      antwoord: "went",
      uitleg: "go → went (past simple). 'Gone' is het voltooid deelwoord (past participle)."
    },
    {
      id: "en_q003", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Welke zin staat in de present perfect?",
      opties: ["I played yesterday.", "I am playing now.", "I have played before.", "I was playing."],
      antwoord: "I have played before.",
      uitleg: "Present perfect: have/has + voltooid deelwoord. 'I have played' is present perfect."
    },
    {
      id: "en_q004", type: "meerkeuze", categorie: "Grammatica",
      vraag: "'I ___ sleeping when the phone rang.' Welke vorm?",
      opties: ["am", "was", "were", "have been"],
      antwoord: "was",
      uitleg: "Past continuous: was/were + -ing. Bij 'I' gebruik je 'was'."
    },
    {
      id: "en_q005", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Wat is het meervoud van 'child'?",
      opties: ["childs", "childes", "children", "childrens"],
      antwoord: "children",
      uitleg: "child → children is een onregelmatig meervoud."
    },
    {
      id: "en_q006", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Welk object pronoun hoort bij 'she'?",
      opties: ["she", "hers", "her", "his"],
      antwoord: "her",
      uitleg: "she (subject) → her (object) → her (possessive adj.) → hers (possessive pronoun)."
    },
    {
      id: "en_q007", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Kies de juiste ontkenning: 'She ___ like pizza.'",
      opties: ["don't", "doesn't", "isn't", "wasn't"],
      antwoord: "doesn't",
      uitleg: "Present simple ontkenning bij he/she/it: does not (doesn't) + werkwoord."
    },
    {
      id: "en_q008", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Welk signaalwoord hoort bij de present perfect?",
      opties: ["yesterday", "now", "already", "every day"],
      antwoord: "already",
      uitleg: "Present perfect signaalwoorden: already, yet, just, ever, never, since, for."
    },
    {
      id: "en_q009", type: "meerkeuze", categorie: "Grammatica",
      vraag: "Wat is de correcte Engelse zinsvolgorde?",
      opties: ["Object + Subject + Verb", "Verb + Subject + Object", "Subject + Verb + Object", "Subject + Object + Verb"],
      antwoord: "Subject + Verb + Object",
      uitleg: "Engels: SVO (Subject Verb Object). Voorbeeld: I (S) eat (V) an apple (O)."
    },
    {
      id: "en_q010", type: "meerkeuze", categorie: "Woordenschat",
      vraag: "Wat betekent 'however' in het Nederlands?",
      opties: ["daarom", "omdat", "echter/maar", "dus"],
      antwoord: "echter/maar",
      uitleg: "'However' = echter, maar. Het is een verbindingswoord dat een tegenstelling aangeeft."
    },

    // ── Open vragen ──
    {
      id: "en_q011", type: "open", categorie: "Grammatica",
      vraag: "Vul in: She ___ a cat. (have, present simple)",
      antwoord: "has",
      uitleg: "To have bij he/she/it: has. 'She has a cat.'"
    },
    {
      id: "en_q012", type: "open", categorie: "Grammatica",
      vraag: "Wat is het meervoud van 'tooth'?",
      antwoord: "teeth",
      uitleg: "tooth → teeth (onregelmatig meervoud)."
    },
    {
      id: "en_q013", type: "open", categorie: "Grammatica",
      vraag: "Vul in: They ___ playing football right now. (to be)",
      antwoord: "are",
      uitleg: "Present continuous: am/is/are + -ing. Bij 'they' → are."
    },

    // ── Juist of onjuist ──
    {
      id: "en_q014", type: "juistonjuist", categorie: "Grammatica",
      vraag: "'I have went to school' is correct Engels.",
      antwoord: "onjuist",
      uitleg: "Correct: 'I have GONE to school.' Bij present perfect gebruik je het voltooid deelwoord (gone), niet de past simple (went)."
    },
    {
      id: "en_q015", type: "juistonjuist", categorie: "Grammatica",
      vraag: "In het Engels verandert de woordvolgorde na een tijdsbepaling.",
      antwoord: "onjuist",
      uitleg: "In het Engels blijft de SVO-volgorde hetzelfde, ook na tijdsbepalingen. (In het Nederlands verandert het wél!)"
    },
    {
      id: "en_q016", type: "juistonjuist", categorie: "Grammatica",
      vraag: "'Does she likes pizza?' is correct.",
      antwoord: "onjuist",
      uitleg: "Na 'does' geen -s meer: 'Does she LIKE pizza?' (niet 'likes')."
    },
    {
      id: "en_q017", type: "juistonjuist", categorie: "Grammatica",
      vraag: "Het meervoud van 'bus' is 'buses'.",
      antwoord: "juist",
      uitleg: "Na -s, -sh, -ch, -x, -z: +es. Dus: bus → buses."
    },
    {
      id: "en_q018", type: "juistonjuist", categorie: "Woordenschat",
      vraag: "'Slim' in het Engels betekent 'intelligent'.",
      antwoord: "onjuist",
      uitleg: "'Slim' in het Engels = slank. 'Intelligent' in het Engels = smart of clever. Dit is een 'false friend'!"
    },
  ]
};

const ENGELS = {
  id: "engels",
  naam: "Engels",
  kleur: "#E74C3C",
  icoon: "🇬🇧",
  afbeelding: "images/engels.jpg",

  flashcards: [
    { id: "en_001", voorkant: "Present simple — vorming", achterkant: "Stam van het werkwoord.\nBij he/she/it: stam + -s (of -es)\nBijv: I play, she plays, they play", categorie: "Tijden" },
    { id: "en_002", voorkant: "Past simple — regelmatige werkwoorden", achterkant: "Stam + -ed\nBijv: play → played, walk → walked\nLet op: dubbele letter: stop → stopped", categorie: "Tijden" },
    { id: "en_003", voorkant: "Present perfect — vorming", achterkant: "have / has + voltooid deelwoord\nBijv: I have seen. She has eaten.\nGebruik: ervaringen of recent voltooide acties.", categorie: "Tijden" },
    { id: "en_004", voorkant: "Present continuous — vorming", achterkant: "am / is / are + werkwoord + -ing\nBijv: I am reading. She is running.\nGebruik: iets dat nu bezig is.", categorie: "Tijden" },
    { id: "en_005", voorkant: "Past continuous — vorming", achterkant: "was / were + werkwoord + -ing\nBijv: I was sleeping. They were playing.\nGebruik: iets dat bezig was in het verleden.", categorie: "Tijden" },
    { id: "en_006", voorkant: "Wanneer gebruik je present perfect?", achterkant: "• Ervaringen: Have you ever been to Paris?\n• Pas voltooide actie: I have just finished.\n• Signaalwoorden: ever, never, already, yet, just, since, for", categorie: "Tijden" },
    { id: "en_007", voorkant: "Wanneer gebruik je past simple?", achterkant: "• Afgeronde actie in het verleden\n• Altijd met tijdsaanduiding: yesterday, last week, in 2020\nBijv: I went to school yesterday.", categorie: "Tijden" },
    { id: "en_008", voorkant: "Persoonlijke voornaamwoorden (subject)", achterkant: "I, you, he, she, it, we, you, they", categorie: "Voornaamwoorden" },
    { id: "en_009", voorkant: "Persoonlijke voornaamwoorden (object)", achterkant: "me, you, him, her, it, us, you, them", categorie: "Voornaamwoorden" },
    { id: "en_010", voorkant: "Vraagzin maken — present simple", achterkant: "Do / Does + subject + stam?\nBijv: Do you like it? Does she play tennis?", categorie: "Vragen" },
    { id: "en_011", voorkant: "Vraagzin maken — past simple", achterkant: "Did + subject + stam (niet -ed!)?\nBijv: Did you go to school? Did she eat lunch?", categorie: "Vragen" },
    { id: "en_012", voorkant: "Onregelmatige werkwoorden\ngo / have / be", achterkant: "go → went → gone\nhave → had → had\nbe → was/were → been", categorie: "Werkwoorden" },
    { id: "en_013", voorkant: "Ontkennende zin — present simple", achterkant: "do not (don't) / does not (doesn't) + stam\nBijv: I don't know. She doesn't like it.", categorie: "Zinsbouw" },
    { id: "en_014", voorkant: "Present perfect signaalwoorden", achterkant: "ever, never, already, just, yet, since, for\nBijv: Have you ever been...? I have never seen...", categorie: "Tijden" },
    { id: "en_015", voorkant: "Vocabulary — school", achterkant: "teacher, classroom, lesson, homework, exam, grade, timetable, subject", categorie: "Woordenschat" },
    { id: "en_016", voorkant: "Vocabulary — family", achterkant: "mother, father, sister, brother, grandmother, grandfather, cousin, nephew, niece", categorie: "Woordenschat" },
    { id: "en_017", voorkant: "Vocabulary — food & drink", achterkant: "bread, vegetable, fruit, meat, fish, drink, meal, snack, dessert", categorie: "Woordenschat" },
    { id: "en_018", voorkant: "Vocabulary — travel", achterkant: "train, bus, plane, airport, ticket, journey, destination, holiday, suitcase", categorie: "Woordenschat" },
    { id: "en_019", voorkant: "Short answers — present simple", achterkant: "Do you like it? → Yes, I do. / No, I don't.\nDoes she know? → Yes, she does. / No, she doesn't.", categorie: "Zinsbouw" },
    { id: "en_020", voorkant: "Verbindingswoorden (connectives)", achterkant: "and (en), but (maar), because (omdat), so (dus), or (of), however (echter), although (hoewel)", categorie: "Zinsbouw" },
  ],

  quizvragen: [
    {
      id: "en_q001", type: "meerkeuze",
      vraag: "What is the past simple of 'go'?",
      antwoord: "went", opties: ["went", "goed", "gone", "goes"],
      uitleg: "'Go' is irregular: go → went → gone.", categorie: "Werkwoorden"
    },
    {
      id: "en_q002", type: "meerkeuze",
      vraag: "Which sentence is in the present continuous?",
      antwoord: "She is reading a book.", opties: ["She is reading a book.", "She reads a book.", "She read a book.", "She has read a book."],
      uitleg: "Present continuous = am/is/are + verb-ing. 'She is reading' is correct.", categorie: "Tijden"
    },
    {
      id: "en_q003", type: "juistonjuist",
      vraag: "\"I have seen that film\" uses the present perfect.",
      antwoord: "juist",
      uitleg: "Yes: have + past participle (seen) = present perfect.", categorie: "Tijden"
    },
    {
      id: "en_q004", type: "meerkeuze",
      vraag: "\"Did you _____ the book?\" Which form is correct?",
      antwoord: "read", opties: ["read", "reads", "reading", "have read"],
      uitleg: "After 'did', use the bare infinitive (stam): Did you read...?", categorie: "Vragen"
    },
    {
      id: "en_q005", type: "open",
      vraag: "Put the verb in brackets in the correct form: \"She ___ (play) tennis every day.\"",
      antwoord: "plays",
      uitleg: "Present simple, she/he/it → stam + -s: plays.", categorie: "Tijden"
    },
    {
      id: "en_q006", type: "meerkeuze",
      vraag: "Which is an object pronoun?",
      antwoord: "him", opties: ["him", "he", "they", "I"],
      uitleg: "'Him' is an object pronoun. 'He' is a subject pronoun.", categorie: "Voornaamwoorden"
    },
    {
      id: "en_q007", type: "juistonjuist",
      vraag: "\"Yesterday I go to school\" is grammatically correct.",
      antwoord: "onjuist",
      uitleg: "'Yesterday' signals past simple: \"Yesterday I went to school.\"", categorie: "Tijden"
    },
    {
      id: "en_q008", type: "meerkeuze",
      vraag: "Which signal word goes with the present perfect?",
      antwoord: "already", opties: ["already", "yesterday", "last week", "in 2020"],
      uitleg: "'Already' signals present perfect. 'Yesterday', 'last week', 'in 2020' signal past simple.", categorie: "Tijden"
    },
    {
      id: "en_q009", type: "open",
      vraag: "Form a present simple question from: \"You like football.\"",
      antwoord: "Do you like football",
      uitleg: "Present simple question: Do/Does + subject + verb: Do you like football?", categorie: "Vragen"
    },
    {
      id: "en_q010", type: "meerkeuze",
      vraag: "Past simple of 'be' for I / he / she / it is:",
      antwoord: "was", opties: ["was", "were", "been", "is"],
      uitleg: "I/he/she/it → was. We/you/they → were.", categorie: "Werkwoorden"
    },
    {
      id: "en_q011", type: "juistonjuist",
      vraag: "\"Does she likes coffee?\" is grammatically correct.",
      antwoord: "onjuist",
      uitleg: "After 'does' use the bare infinitive: \"Does she like coffee?\" (no -s!)", categorie: "Vragen"
    },
    {
      id: "en_q012", type: "open",
      vraag: "Translate to English: \"Wij zijn gisteren naar het strand gegaan.\"",
      antwoord: "We went to the beach yesterday",
      uitleg: "'Gisteren' = yesterday → past simple. 'Gegaan' = went.", categorie: "Tijden"
    },
    {
      id: "en_q013", type: "meerkeuze",
      vraag: "\"Have you ever been to London?\" uses:",
      antwoord: "present perfect", opties: ["present perfect", "past simple", "present simple", "future"],
      uitleg: "Have + been (past participle) + 'ever' = present perfect.", categorie: "Tijden"
    },
    {
      id: "en_q014", type: "meerkeuze",
      vraag: "What is the object pronoun of 'they'?",
      antwoord: "them", opties: ["them", "their", "they", "those"],
      uitleg: "Subject: they → Object: them. (They saw us. / We saw them.)", categorie: "Voornaamwoorden"
    },
    {
      id: "en_q015", type: "juistonjuist",
      vraag: "The present continuous is used to describe a habit or routine.",
      antwoord: "onjuist",
      uitleg: "Habits/routines use present simple (I play football on Fridays). Present continuous is for actions happening NOW.", categorie: "Tijden"
    },
  ]
};

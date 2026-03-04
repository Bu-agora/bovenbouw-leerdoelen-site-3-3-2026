/* ============================================================
   DUITS — Flashcards & Quizvragen
   Gebaseerd op: Basisleerdoelen Duits onderbouw → bovenbouw
   ============================================================ */

const DUITS = {
  id: "duits",
  naam: "Duits",
  kleur: "#4A90D9",
  icoon: "🇩🇪",
  afbeelding: "images/duits.jpg",

  flashcards: [
    // ── Persoonlijke voornaamwoorden: Nederlands → Duits ──
    { id: "du_001", voorkant: "Vertaal: ik", achterkant: "ich", categorie: "Voornaamwoorden" },
    { id: "du_002", voorkant: "Vertaal: jij", achterkant: "du", categorie: "Voornaamwoorden" },
    { id: "du_003", voorkant: "Vertaal: hij", achterkant: "er", categorie: "Voornaamwoorden" },
    { id: "du_004", voorkant: "Vertaal: zij (enkelvoud)", achterkant: "sie (kleine letter)", categorie: "Voornaamwoorden" },
    { id: "du_005", voorkant: "Vertaal: het", achterkant: "es", categorie: "Voornaamwoorden" },
    { id: "du_006", voorkant: "Vertaal: wij", achterkant: "wir", categorie: "Voornaamwoorden" },
    { id: "du_007", voorkant: "Vertaal: jullie", achterkant: "ihr", categorie: "Voornaamwoorden" },
    { id: "du_008", voorkant: "Vertaal: u (beleefd)", achterkant: "Sie (hoofdletter)", categorie: "Voornaamwoorden" },
    { id: "du_009", voorkant: "Wat kan 'sie' (kleine letter) allemaal betekenen?", achterkant: "1) zij (enkelvoud)\n2) zij (meervoud)\nMet hoofdletter (Sie) = u", categorie: "Voornaamwoorden" },

    // ── Persoonlijke voornaamwoorden: Duits → Nederlands ──
    { id: "du_r001", voorkant: "Vertaal: ich", achterkant: "ik", categorie: "Voornaamwoorden" },
    { id: "du_r002", voorkant: "Vertaal: du", achterkant: "jij / je", categorie: "Voornaamwoorden" },
    { id: "du_r003", voorkant: "Vertaal: er", achterkant: "hij", categorie: "Voornaamwoorden" },
    { id: "du_r004", voorkant: "Vertaal: sie (kleine letter)", achterkant: "zij (enkelvoud) / zij (meervoud)", categorie: "Voornaamwoorden" },
    { id: "du_r005", voorkant: "Vertaal: es", achterkant: "het", categorie: "Voornaamwoorden" },
    { id: "du_r006", voorkant: "Vertaal: wir", achterkant: "wij / we", categorie: "Voornaamwoorden" },
    { id: "du_r007", voorkant: "Vertaal: ihr", achterkant: "jullie", categorie: "Voornaamwoorden" },
    { id: "du_r008", voorkant: "Vertaal: Sie (hoofdletter)", achterkant: "u (beleefd)", categorie: "Voornaamwoorden" },

    // ── Regelmatige werkwoorden ──
    { id: "du_010", voorkant: "Vervoeg: ich + wohnen", achterkant: "ich wohne", categorie: "Werkwoorden" },
    { id: "du_011", voorkant: "Vervoeg: du + spielen", achterkant: "du spielst", categorie: "Werkwoorden" },
    { id: "du_012", voorkant: "Vervoeg: er + kommen", achterkant: "er kommt", categorie: "Werkwoorden" },
    { id: "du_013", voorkant: "Vervoeg: wir + gehen", achterkant: "wir gehen", categorie: "Werkwoorden" },
    { id: "du_014", voorkant: "Vervoeg: du + heißen", achterkant: "du heißt\n(Let op: stam eindigt op ß, dus -t i.p.v. -st)", categorie: "Werkwoorden" },
    { id: "du_015", voorkant: "Vervoeg: ihr + spielen", achterkant: "ihr spielt", categorie: "Werkwoorden" },
    { id: "du_016", voorkant: "Wat is de regel voor regelmatige werkwoorden?", achterkant: "Stam (= werkwoord zonder -en) + uitgang:\nich -e, du -st, er/sie/es -t,\nwir -en, ihr -t, sie/Sie -en", categorie: "Werkwoorden" },

    // ── Onregelmatige werkwoorden ──
    { id: "du_017", voorkant: "Vervoeg 'sein' volledig", achterkant: "ich bin, du bist, er/sie/es ist,\nwir sind, ihr seid, sie/Sie sind", categorie: "Werkwoorden" },
    { id: "du_018", voorkant: "Vervoeg 'haben' volledig", achterkant: "ich habe, du hast, er/sie/es hat,\nwir haben, ihr habt, sie/Sie haben", categorie: "Werkwoorden" },
    { id: "du_019", voorkant: "Vervoeg 'werden' volledig", achterkant: "ich werde, du wirst, er/sie/es wird,\nwir werden, ihr werdet, sie/Sie werden", categorie: "Werkwoorden" },
    { id: "du_020", voorkant: "Vervoeg: du + haben", achterkant: "du hast", categorie: "Werkwoorden" },
    { id: "du_021", voorkant: "Vervoeg: er + sein", achterkant: "er ist", categorie: "Werkwoorden" },
    { id: "du_022", voorkant: "Vervoeg: ihr + sein", achterkant: "ihr seid", categorie: "Werkwoorden" },
    { id: "du_023", voorkant: "Vervoeg: du + werden", achterkant: "du wirst", categorie: "Werkwoorden" },

    // ── Der, die, das ──
    { id: "du_024", voorkant: "Wanneer gebruik je 'der'?", achterkant: "Bij mannelijke (masculiene) woorden.\nVoorbeeld: der Vater, der Tisch, der Hund", categorie: "Lidwoorden" },
    { id: "du_025", voorkant: "Wanneer gebruik je 'die'?", achterkant: "Bij vrouwelijke (feminiene) woorden\nEN bij alle meervoudsvormen.\nVoorbeeld: die Mutter, die Schule, die Kinder", categorie: "Lidwoorden" },
    { id: "du_026", voorkant: "Wanneer gebruik je 'das'?", achterkant: "Bij onzijdige (neutrale) woorden.\nVoorbeeld: das Kind, das Haus, das Buch", categorie: "Lidwoorden" },
    { id: "du_027", voorkant: "Woorden op -ung, -heit, -keit zijn altijd …", achterkant: "'die' (vrouwelijk)", categorie: "Lidwoorden" },
    { id: "du_028", voorkant: "Woorden op -chen en -lein zijn altijd …", achterkant: "'das' (onzijdig)", categorie: "Lidwoorden" },

    // ── Woordenlijst: Familie ──
    { id: "du_029", voorkant: "Vertaal: de vader", achterkant: "der Vater", categorie: "Woordenschat" },
    { id: "du_030", voorkant: "Vertaal: de moeder", achterkant: "die Mutter", categorie: "Woordenschat" },
    { id: "du_031", voorkant: "Vertaal: de broer", achterkant: "der Bruder", categorie: "Woordenschat" },
    { id: "du_032", voorkant: "Vertaal: de zus", achterkant: "die Schwester", categorie: "Woordenschat" },
    { id: "du_033", voorkant: "Vertaal: de ouders", achterkant: "die Eltern", categorie: "Woordenschat" },
    { id: "du_034", voorkant: "Vertaal: de oom", achterkant: "der Onkel", categorie: "Woordenschat" },
    { id: "du_035", voorkant: "Vertaal: de tante", achterkant: "die Tante", categorie: "Woordenschat" },

    // ── Woordenlijst: School ──
    { id: "du_036", voorkant: "Vertaal: de school", achterkant: "die Schule", categorie: "Woordenschat" },
    { id: "du_037", voorkant: "Vertaal: het huiswerk", achterkant: "die Hausaufgabe", categorie: "Woordenschat" },
    { id: "du_038", voorkant: "Vertaal: het vak", achterkant: "das Fach", categorie: "Woordenschat" },
    { id: "du_039", voorkant: "Vertaal: de toets", achterkant: "der Test", categorie: "Woordenschat" },
    { id: "du_040", voorkant: "Vertaal: de pauze", achterkant: "die Pause", categorie: "Woordenschat" },

    // ── Woordenlijst: Eten & drinken ──
    { id: "du_041", voorkant: "Vertaal: het brood", achterkant: "das Brot", categorie: "Woordenschat" },
    { id: "du_042", voorkant: "Vertaal: het water", achterkant: "das Wasser", categorie: "Woordenschat" },
    { id: "du_043", voorkant: "Vertaal: de appel", achterkant: "der Apfel", categorie: "Woordenschat" },
    { id: "du_044", voorkant: "Vertaal: de groente", achterkant: "das Gemüse", categorie: "Woordenschat" },
    { id: "du_045", voorkant: "Vertaal: het vlees", achterkant: "das Fleisch", categorie: "Woordenschat" },

    // ── Woordenlijst: Wonen ──
    { id: "du_046", voorkant: "Vertaal: het huis", achterkant: "das Haus", categorie: "Woordenschat" },
    { id: "du_047", voorkant: "Vertaal: de kamer", achterkant: "das Zimmer", categorie: "Woordenschat" },
    { id: "du_048", voorkant: "Vertaal: de tafel", achterkant: "der Tisch", categorie: "Woordenschat" },
    { id: "du_049", voorkant: "Vertaal: het raam", achterkant: "das Fenster", categorie: "Woordenschat" },
    { id: "du_050", voorkant: "Vertaal: de tuin", achterkant: "der Garten", categorie: "Woordenschat" },

    // ── Woordenlijst: Dieren ──
    { id: "du_051", voorkant: "Vertaal: de hond", achterkant: "der Hund", categorie: "Woordenschat" },
    { id: "du_052", voorkant: "Vertaal: de kat", achterkant: "die Katze", categorie: "Woordenschat" },
    { id: "du_053", voorkant: "Vertaal: het paard", achterkant: "das Pferd", categorie: "Woordenschat" },

    // ── Woordenlijst: Kleding ──
    { id: "du_054", voorkant: "Vertaal: de broek", achterkant: "die Hose", categorie: "Woordenschat" },
    { id: "du_055", voorkant: "Vertaal: de schoenen", achterkant: "die Schuhe", categorie: "Woordenschat" },
    { id: "du_056", voorkant: "Vertaal: kopen", achterkant: "kaufen", categorie: "Woordenschat" },
    { id: "du_057", voorkant: "Vertaal: dragen", achterkant: "tragen", categorie: "Woordenschat" },

    // ── Woordenlijst: Technologie ──
    { id: "du_058", voorkant: "Vertaal: de mobiele telefoon", achterkant: "das Handy", categorie: "Woordenschat" },
    { id: "du_059", voorkant: "Vertaal: het toetsenbord", achterkant: "die Tastatur", categorie: "Woordenschat" },
    { id: "du_060", voorkant: "Vertaal: het beeldscherm", achterkant: "der Bildschirm", categorie: "Woordenschat" },

    // ── Woordenlijst: Kleuren ──
    { id: "du_061", voorkant: "Vertaal: rood", achterkant: "rot", categorie: "Woordenschat" },
    { id: "du_062", voorkant: "Vertaal: blauw", achterkant: "blau", categorie: "Woordenschat" },
    { id: "du_063", voorkant: "Vertaal: groen", achterkant: "grün", categorie: "Woordenschat" },
    { id: "du_064", voorkant: "Vertaal: zwart", achterkant: "schwarz", categorie: "Woordenschat" },
    { id: "du_065", voorkant: "Vertaal: wit", achterkant: "weiß", categorie: "Woordenschat" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "du_q001", type: "meerkeuze", categorie: "Voornaamwoorden",
      vraag: "Wat is 'wij' in het Duits?",
      opties: ["ihr", "wir", "sie", "es"],
      antwoord: "wir",
      uitleg: "'Wir' = wij. 'Ihr' = jullie."
    },
    {
      id: "du_q002", type: "meerkeuze", categorie: "Voornaamwoorden",
      vraag: "Welk Duits voornaamwoord heeft drie betekenissen?",
      opties: ["er", "sie", "es", "wir"],
      antwoord: "sie",
      uitleg: "'sie' = zij (enkelvoud), zij (meervoud). Met hoofdletter 'Sie' = u (beleefd)."
    },
    {
      id: "du_q003", type: "meerkeuze", categorie: "Werkwoorden",
      vraag: "Wat is de juiste vervoeging van 'spielen' bij 'du'?",
      opties: ["du spiele", "du spielst", "du spielt", "du spielen"],
      antwoord: "du spielst",
      uitleg: "Bij 'du' krijg je de stam (spiel) + st → du spielst."
    },
    {
      id: "du_q004", type: "meerkeuze", categorie: "Werkwoorden",
      vraag: "Welke vorm is FOUT?",
      opties: ["ich wohne", "du wohnst", "er wohnt", "ihr wohnen"],
      antwoord: "ihr wohnen",
      uitleg: "Bij 'ihr' is het: ihr wohnt (niet wohnen)."
    },
    {
      id: "du_q005", type: "meerkeuze", categorie: "Werkwoorden",
      vraag: "'Du' + 'sein' = ?",
      opties: ["du bin", "du bist", "du seid", "du sind"],
      antwoord: "du bist",
      uitleg: "sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind."
    },
    {
      id: "du_q006", type: "meerkeuze", categorie: "Werkwoorden",
      vraag: "Hoe vervoeg je 'haben' bij 'er'?",
      opties: ["er habe", "er habst", "er hat", "er habt"],
      antwoord: "er hat",
      uitleg: "haben is onregelmatig: ich habe, du hast, er/sie/es hat."
    },
    {
      id: "du_q007", type: "meerkeuze", categorie: "Werkwoorden",
      vraag: "Wat is 'du wirst' in het Nederlands?",
      opties: ["jij bent", "jij hebt", "jij wordt", "jij gaat"],
      antwoord: "jij wordt",
      uitleg: "'werden' = worden. Du wirst = jij wordt."
    },
    {
      id: "du_q008", type: "meerkeuze", categorie: "Lidwoorden",
      vraag: "Welk lidwoord hoort bij 'Schule'?",
      opties: ["der", "die", "das", "den"],
      antwoord: "die",
      uitleg: "die Schule — 'Schule' is vrouwelijk."
    },
    {
      id: "du_q009", type: "meerkeuze", categorie: "Lidwoorden",
      vraag: "Woorden op '-ung' krijgen altijd het lidwoord …",
      opties: ["der", "die", "das", "den"],
      antwoord: "die",
      uitleg: "Woorden op -ung, -heit, -keit zijn altijd vrouwelijk → die."
    },
    {
      id: "du_q010", type: "meerkeuze", categorie: "Woordenschat",
      vraag: "Wat betekent 'die Hausaufgabe'?",
      opties: ["het huis", "de huistaak/het huiswerk", "de school", "de les"],
      antwoord: "de huistaak/het huiswerk",
      uitleg: "die Hausaufgabe = het huiswerk."
    },
    {
      id: "du_q011", type: "meerkeuze", categorie: "Woordenschat",
      vraag: "Hoe zeg je 'mobiele telefoon' in het Duits?",
      opties: ["der Telefon", "das Handy", "die App", "der Computer"],
      antwoord: "das Handy",
      uitleg: "das Handy = de mobiele telefoon (let op: onzijdig!)."
    },
    {
      id: "du_q012", type: "meerkeuze", categorie: "Woordenschat",
      vraag: "Wat is 'der Bildschirm' in het Nederlands?",
      opties: ["het toetsenbord", "de printer", "het beeldscherm", "de muis"],
      antwoord: "het beeldscherm",
      uitleg: "der Bildschirm = het beeldscherm."
    },

    // ── Open vragen ──
    {
      id: "du_q013", type: "open", categorie: "Voornaamwoorden",
      vraag: "Vertaal naar het Duits: 'jullie'",
      antwoord: "ihr",
      uitleg: "ihr = jullie. Let op: NIET 'Irh' (dat is een veelgemaakte spelfout)."
    },
    {
      id: "du_q014", type: "open", categorie: "Werkwoorden",
      vraag: "Vul in: Ich ___ Boaz. (heten, tegenwoordige tijd)",
      antwoord: "heiße",
      uitleg: "heißen: ich heiße, du heißt, er/sie/es heißt."
    },
    {
      id: "du_q015", type: "open", categorie: "Werkwoorden",
      vraag: "Vul in: Wir ___ nach Hause. (gaan, tegenwoordige tijd)",
      antwoord: "gehen",
      uitleg: "gehen: wir gehen (wij-vorm = stam + en = hele werkwoord)."
    },
    {
      id: "du_q016", type: "open", categorie: "Woordenschat",
      vraag: "Vertaal naar het Duits: 'de broek'",
      antwoord: "die Hose",
      uitleg: "die Hose = de broek (vrouwelijk)."
    },
    {
      id: "du_q017", type: "open", categorie: "Woordenschat",
      vraag: "Vertaal naar het Duits: 'rood'",
      antwoord: "rot",
      uitleg: "rot = rood."
    },

    // ── Juist of onjuist ──
    {
      id: "du_q018", type: "juistonjuist", categorie: "Werkwoorden",
      vraag: "'Ihr seid nett' is correct Duits.",
      antwoord: "juist",
      uitleg: "sein bij ihr = seid. 'Ihr seid nett' = jullie zijn aardig."
    },
    {
      id: "du_q019", type: "juistonjuist", categorie: "Werkwoorden",
      vraag: "'Du hast' betekent 'jij bent'.",
      antwoord: "onjuist",
      uitleg: "'Du hast' = jij hebt (van haben). 'Jij bent' = du bist (van sein)."
    },
    {
      id: "du_q020", type: "juistonjuist", categorie: "Lidwoorden",
      vraag: "Bij meervoud gebruik je altijd 'die'.",
      antwoord: "juist",
      uitleg: "In het Duits krijgen alle meervoudsvormen het lidwoord 'die', ongeacht het geslacht in enkelvoud."
    },
    {
      id: "du_q021", type: "juistonjuist", categorie: "Lidwoorden",
      vraag: "'Das Mutter' is correct.",
      antwoord: "onjuist",
      uitleg: "Mutter is vrouwelijk, dus: die Mutter."
    },
    {
      id: "du_q022", type: "juistonjuist", categorie: "Werkwoorden",
      vraag: "'Er wird müde' betekent 'hij wordt moe'.",
      antwoord: "juist",
      uitleg: "werden = worden. Er wird = hij wordt. 'Er wird müde' = hij wordt moe."
    },
  ]
};

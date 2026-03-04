/* ============================================================
   ECONOMIE — Flashcards & Quizvragen
   Gebaseerd op: Basisleerdoelen Economie onderbouw → bovenbouw
   ============================================================ */

const ECONOMIE = {
  id: "economie",
  naam: "Economie",
  kleur: "#6A1B9A",
  icoon: "💶",
  afbeelding: "images/economie.jpg",

  flashcards: [
    // ── Optellen en aftrekken ──
    { id: "ec_001", voorkant: "Hoe tel je grote getallen op?", achterkant: "Schrijf onder elkaar, begin rechts.\nSom ≤ 9: schrijf op.\nSom > 9: schrijf eenheid, carry naar links.\nVoorbeeld: 12.345 + 9.876 = 22.221", categorie: "Rekenen" },
    { id: "ec_002", voorkant: "Hoe trek je grote getallen af?", achterkant: "Groot getal boven, klein onder.\nBegin rechts.\nAls boven < onder: leen 10 van links (borrow).\nVoorbeeld: 15.000 - 3.456 = 11.544", categorie: "Rekenen" },
    { id: "ec_003", voorkant: "Hoe werk je met decimalen bij optellen?", achterkant: "Zet de komma's op één lijn!\nVul aan met nullen zodat beide evenveel decimalen hebben.\nDan kolom voor kolom optellen.", categorie: "Rekenen" },
    { id: "ec_004", voorkant: "Voorbeeld: 123,456 + 78,9 = ?", achterkant: "123,456 + 78,900 = 202,356\n(Eerst evenveel decimalen maken!)", categorie: "Rekenen" },

    // ── Procentuele verandering ──
    { id: "ec_005", voorkant: "Formule: procentuele verandering", achterkant: "((nieuw - oud) / oud) × 100%", categorie: "Procenten" },
    { id: "ec_006", voorkant: "Een product kostte €40, nu €50. Wat is de procentuele verandering?", achterkant: "((50 - 40) / 40) × 100%\n= (10/40) × 100%\n= 25% stijging", categorie: "Procenten" },
    { id: "ec_007", voorkant: "Een product kostte €80, nu €60. Wat is de procentuele verandering?", achterkant: "((60 - 80) / 80) × 100%\n= (-20/80) × 100%\n= -25% (= 25% daling)", categorie: "Procenten" },
    { id: "ec_008", voorkant: "Positieve procentuele verandering = ?", achterkant: "Stijging / toename\n(het getal is groter geworden)", categorie: "Procenten" },
    { id: "ec_009", voorkant: "Negatieve procentuele verandering = ?", achterkant: "Daling / afname\n(het getal is kleiner geworden)", categorie: "Procenten" },

    // ── Percentage deel/geheel ──
    { id: "ec_010", voorkant: "Formule: percentage berekenen", achterkant: "(deel / geheel) × 100%", categorie: "Procenten" },
    { id: "ec_011", voorkant: "15 van de 60 leerlingen kiezen Duits. Welk percentage?", achterkant: "(15 / 60) × 100% = 25%", categorie: "Procenten" },
    { id: "ec_012", voorkant: "Je scoort 35 van de 50 punten. Welk percentage?", achterkant: "(35 / 50) × 100% = 70%", categorie: "Procenten" },
    { id: "ec_013", voorkant: "Formule: deel berekenen als je % en geheel weet", achterkant: "deel = (percentage / 100) × geheel\nVoorbeeld: 30% van €200 = (30/100) × 200 = €60", categorie: "Procenten" },
    { id: "ec_014", voorkant: "Bereken: 20% van €150", achterkant: "(20/100) × 150 = €30", categorie: "Procenten" },
    { id: "ec_015", voorkant: "Bereken: 15% van €80", achterkant: "(15/100) × 80 = €12", categorie: "Procenten" },

    // ── Afronden ──
    { id: "ec_016", voorkant: "Hoe rond je euro's af?", achterkant: "Altijd op 2 decimalen (centen).\nKijk naar het 3e cijfer achter de komma:\n0-4 = naar beneden\n5-9 = naar boven", categorie: "Afronden" },
    { id: "ec_017", voorkant: "Rond af: €12,3456", achterkant: "3e decimaal = 5 → naar boven\n= €12,35", categorie: "Afronden" },
    { id: "ec_018", voorkant: "Rond af: €7,8923", achterkant: "3e decimaal = 2 → naar beneden\n= €7,89", categorie: "Afronden" },
    { id: "ec_019", voorkant: "Rond af: €3,999", achterkant: "3e decimaal = 9 → naar boven\n= €4,00", categorie: "Afronden" },
    { id: "ec_020", voorkant: "Rond af: €15,6049", achterkant: "3e decimaal = 4 → naar beneden\n= €15,60", categorie: "Afronden" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "ec_q001", type: "meerkeuze", categorie: "Procenten",
      vraag: "Wat is de formule voor procentuele verandering?",
      opties: ["(oud - nieuw) / oud × 100%", "(nieuw - oud) / oud × 100%", "(nieuw / oud) × 100%", "(oud / nieuw) × 100%"],
      antwoord: "(nieuw - oud) / oud × 100%",
      uitleg: "Procentuele verandering = ((nieuw - oud) / oud) × 100%."
    },
    {
      id: "ec_q002", type: "meerkeuze", categorie: "Procenten",
      vraag: "20 van de 80 leerlingen zijn ziek. Welk percentage?",
      opties: ["20%", "25%", "30%", "40%"],
      antwoord: "25%",
      uitleg: "(20 / 80) × 100% = 25%."
    },
    {
      id: "ec_q003", type: "meerkeuze", categorie: "Procenten",
      vraag: "Een prijs gaat van €200 naar €250. Wat is de procentuele stijging?",
      opties: ["20%", "25%", "50%", "125%"],
      antwoord: "25%",
      uitleg: "((250 - 200) / 200) × 100% = (50/200) × 100% = 25%."
    },
    {
      id: "ec_q004", type: "meerkeuze", categorie: "Afronden",
      vraag: "Hoe rond je €8,4562 af?",
      opties: ["€8,45", "€8,46", "€8,50", "€8,456"],
      antwoord: "€8,46",
      uitleg: "3e decimaal = 6 → naar boven afronden → €8,46."
    },
    {
      id: "ec_q005", type: "meerkeuze", categorie: "Afronden",
      vraag: "Hoe rond je €12,3333 af?",
      opties: ["€12,30", "€12,33", "€12,34", "€12,333"],
      antwoord: "€12,33",
      uitleg: "3e decimaal = 3 → naar beneden afronden → €12,33."
    },
    {
      id: "ec_q006", type: "meerkeuze", categorie: "Procenten",
      vraag: "Wat is 10% van €350?",
      opties: ["€3,50", "€35", "€70", "€10"],
      antwoord: "€35",
      uitleg: "(10/100) × 350 = €35."
    },
    {
      id: "ec_q007", type: "meerkeuze", categorie: "Rekenen",
      vraag: "Wat moet je EERST doen bij het optellen van decimalen?",
      opties: ["Links beginnen", "Komma's op één lijn zetten", "Nullen weglaten", "Afronden op hele getallen"],
      antwoord: "Komma's op één lijn zetten",
      uitleg: "Bij decimalen: eerst komma's uitlijnen en eventueel aanvullen met nullen, dan kolom voor kolom optellen."
    },
    {
      id: "ec_q008", type: "meerkeuze", categorie: "Procenten",
      vraag: "Een prijs daalt van €100 naar €75. Wat is de daling in procenten?",
      opties: ["15%", "20%", "25%", "75%"],
      antwoord: "25%",
      uitleg: "((75 - 100) / 100) × 100% = -25%. De prijs is 25% gedaald."
    },

    // ── Open vragen ──
    {
      id: "ec_q009", type: "open", categorie: "Procenten",
      vraag: "Bereken: 25% van €200 (geef het bedrag zonder €-teken)",
      antwoord: "50",
      uitleg: "(25/100) × 200 = €50."
    },
    {
      id: "ec_q010", type: "open", categorie: "Afronden",
      vraag: "Rond af op 2 decimalen: €9,995 (geef het bedrag zonder €-teken)",
      antwoord: "10,00",
      uitleg: "3e decimaal = 5 → naar boven → €10,00."
    },
    {
      id: "ec_q011", type: "open", categorie: "Procenten",
      vraag: "Je scoort 42 van de 60 punten. Wat is je percentage? (alleen het getal)",
      antwoord: "70",
      uitleg: "(42 / 60) × 100% = 70%."
    },

    // ── Juist of onjuist ──
    {
      id: "ec_q012", type: "juistonjuist", categorie: "Afronden",
      vraag: "Bij geldbedragen rond je altijd af op 3 decimalen.",
      antwoord: "onjuist",
      uitleg: "Euro's rond je af op 2 decimalen (centen), niet 3."
    },
    {
      id: "ec_q013", type: "juistonjuist", categorie: "Afronden",
      vraag: "Bij afronden: als het 3e decimaal 4 is, rond je naar beneden af.",
      antwoord: "juist",
      uitleg: "0, 1, 2, 3, 4 → naar beneden. 5, 6, 7, 8, 9 → naar boven."
    },
    {
      id: "ec_q014", type: "juistonjuist", categorie: "Procenten",
      vraag: "Als een prijs stijgt van €50 naar €60, is dat een stijging van 20%.",
      antwoord: "juist",
      uitleg: "((60 - 50) / 50) × 100% = (10/50) × 100% = 20%."
    },
    {
      id: "ec_q015", type: "juistonjuist", categorie: "Rekenen",
      vraag: "250,75 - 100,50 = 150,25",
      antwoord: "juist",
      uitleg: "250,75 - 100,50 = 150,25. Klopt!"
    },
  ]
};

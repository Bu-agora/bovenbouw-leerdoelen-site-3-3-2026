const ECONOMIE = {
  id: "economie",
  naam: "Economie",
  kleur: "#E67E22",
  icoon: "💶",
  afbeelding: "images/economie.jpg",

  flashcards: [
    { id: "eco_001", voorkant: "Formule procentuele verandering", achterkant: "((nieuw − oud) / oud) × 100\n\nPositief = stijging\nNegatief = daling", categorie: "Berekeningen" },
    { id: "eco_002", voorkant: "Voorbeeld: prijs stijgt van €80 naar €100", achterkant: "((100 − 80) / 80) × 100\n= (20 / 80) × 100\n= 25% stijging", categorie: "Berekeningen" },
    { id: "eco_003", voorkant: "Voorbeeld: prijs daalt van €50 naar €40", achterkant: "((40 − 50) / 50) × 100\n= (−10 / 50) × 100\n= −20% (daling van 20%)", categorie: "Berekeningen" },
    { id: "eco_004", voorkant: "Formule: percentage van een bedrag", achterkant: "Bedrag × (percentage / 100)\nOf: Bedrag × 0,xx\n\nBijv: 15% van €200 = €200 × 0,15 = €30", categorie: "Berekeningen" },
    { id: "eco_005", voorkant: "Bereken 20% van €350", achterkant: "€350 × 0,20 = €70\n\nOf: €350 / 100 × 20 = €70", categorie: "Berekeningen" },
    { id: "eco_006", voorkant: "Afronden op 2 decimalen (valuta)", achterkant: "Kijk naar het 3e decimaal:\n• ≥ 5 → naar boven afronden\n• < 5 → naar beneden afronden\n\nBijv: €17,456 → €17,46", categorie: "Berekeningen" },
    { id: "eco_007", voorkant: "Formule: het geheel berekenen uit een deel en percentage", achterkant: "Geheel = Deel / (percentage / 100)\n\nBijv: als 30% van X = €60\n→ X = 60 / 0,30 = €200", categorie: "Berekeningen" },
    { id: "eco_008", voorkant: "Wat is een indexcijfer?", achterkant: "Een getal dat een waarde vergelijkt met een basisjaar.\nBasisjaar heeft altijd indexcijfer 100.\n\nFormule: (waarde huidig jaar / waarde basisjaar) × 100", categorie: "Begrippen" },
    { id: "eco_009", voorkant: "Wat is inflatie?", achterkant: "De gemiddelde stijging van prijzen over een periode.\nAls inflatie 3% is: gemiddelde prijs is 3% hoger dan vorig jaar.", categorie: "Begrippen" },
    { id: "eco_010", voorkant: "Wat is het verschil tussen procentpunt en procent?", achterkant: "Procentpunt = absoluut verschil tussen percentages\nProcent = relatieve verandering\n\nBijv: van 4% → 6% = 2 procentpunt stijging\nMaar dat is 50% procentuele stijging (2/4 × 100)", categorie: "Begrippen" },
    { id: "eco_011", voorkant: "BTW berekenen: prijs + 21% BTW", achterkant: "Prijs incl. BTW = Prijs excl. BTW × 1,21\n\nBijv: €100 × 1,21 = €121", categorie: "Berekeningen" },
    { id: "eco_012", voorkant: "Prijs excl. BTW berekenen uit incl. prijs (21%)", achterkant: "Prijs excl. BTW = Prijs incl. BTW / 1,21\n\nBijv: €242 / 1,21 = €200", categorie: "Berekeningen" },
    { id: "eco_013", voorkant: "Wat is een tekort?", achterkant: "Uitgaven zijn groter dan inkomsten.\nBijv: je geeft €1200 uit maar verdient €1000 → tekort van €200.", categorie: "Begrippen" },
    { id: "eco_014", voorkant: "Wat is een overschot?", achterkant: "Inkomsten zijn groter dan uitgaven.\nBijv: je verdient €1500 en geeft €1200 uit → overschot van €300.", categorie: "Begrippen" },
    { id: "eco_015", voorkant: "Voorbeeld: loon stijgt van €2000 naar €2300", achterkant: "((2300 − 2000) / 2000) × 100\n= (300 / 2000) × 100\n= 15% stijging", categorie: "Berekeningen" },
    { id: "eco_016", voorkant: "Hoe bereken je de nieuwe waarde na een stijging?", achterkant: "Nieuwe waarde = Oud × (1 + percentage/100)\n\nBijv: €1800 + 10% = €1800 × 1,10 = €1980", categorie: "Berekeningen" },
    { id: "eco_017", voorkant: "Hoe bereken je de nieuwe waarde na een daling?", achterkant: "Nieuwe waarde = Oud × (1 − percentage/100)\n\nBijv: €500 − 20% = €500 × 0,80 = €400", categorie: "Berekeningen" },
    { id: "eco_018", voorkant: "Wat zijn grote getallen? (notatie)", achterkant: "1 duizend = 1.000\n1 miljoen = 1.000.000\n1 miljard = 1.000.000.000\n\nIn berekeningen: punt als scheidingsteken voor duizendtallen", categorie: "Begrippen" },
    { id: "eco_019", voorkant: "Voorbeeld indexcijfer berekenen", achterkant: "Basisjaar 2020: prijs = €80\nJaar 2024: prijs = €92\n\nIndexcijfer 2024 = (92/80) × 100 = 115\n→ prijs is 15% gestegen ten opzichte van basisjaar", categorie: "Berekeningen" },
    { id: "eco_020", voorkant: "Voorbeeld: 25% van X = €75. Bereken X.", achterkant: "X = 75 / 0,25 = €300\n\nCheck: 25% van €300 = €300 × 0,25 = €75 ✓", categorie: "Berekeningen" },
  ],

  quizvragen: [
    {
      id: "eco_q001", type: "meerkeuze",
      vraag: "Een prijs stijgt van €40 naar €50. Hoeveel procent stijging is dat?",
      antwoord: "25%", opties: ["25%", "20%", "10%", "30%"],
      uitleg: "((50−40)/40) × 100 = (10/40) × 100 = 25%", categorie: "Berekeningen"
    },
    {
      id: "eco_q002", type: "open",
      vraag: "Bereken de procentuele verandering: prijs daalt van €120 naar €90.",
      antwoord: "-25%",
      uitleg: "((90−120)/120) × 100 = (−30/120) × 100 = −25%", categorie: "Berekeningen"
    },
    {
      id: "eco_q003", type: "meerkeuze",
      vraag: "Wat is 20% van €350?",
      antwoord: "€70", opties: ["€70", "€60", "€80", "€35"],
      uitleg: "€350 × 0,20 = €70", categorie: "Berekeningen"
    },
    {
      id: "eco_q004", type: "juistonjuist",
      vraag: "Een negatieve procentuele verandering betekent altijd een daling.",
      antwoord: "juist",
      uitleg: "Ja, een negatief getal betekent dat de nieuwe waarde lager is dan de oude.", categorie: "Berekeningen"
    },
    {
      id: "eco_q005", type: "meerkeuze",
      vraag: "Hoe rond je €34,567 af op 2 decimalen?",
      antwoord: "€34,57", opties: ["€34,57", "€34,56", "€34,60", "€35,00"],
      uitleg: "Het 3e decimaal is 7 (≥ 5), dus het 2e decimaal gaat van 6 naar 7: €34,57.", categorie: "Berekeningen"
    },
    {
      id: "eco_q006", type: "open",
      vraag: "25% van X = €75. Bereken X.",
      antwoord: "€300",
      uitleg: "X = 75 / 0,25 = €300. Check: 25% × 300 = 75 ✓", categorie: "Berekeningen"
    },
    {
      id: "eco_q007", type: "meerkeuze",
      vraag: "Het indexcijfer van het basisjaar is altijd:",
      antwoord: "100", opties: ["100", "0", "50", "1"],
      uitleg: "Het basisjaar is per definitie 100. Alle andere jaren worden daartegen afgezet.", categorie: "Begrippen"
    },
    {
      id: "eco_q008", type: "juistonjuist",
      vraag: "Een procentpunt en een procent zijn hetzelfde.",
      antwoord: "onjuist",
      uitleg: "Procentpunt = absoluut verschil. Procent = relatieve verandering. Van 4% naar 6% = 2 procentpunt maar 50% stijging.", categorie: "Begrippen"
    },
    {
      id: "eco_q009", type: "meerkeuze",
      vraag: "BTW van 21% op een prijs van €200 maakt de prijs:",
      antwoord: "€242", opties: ["€242", "€221", "€220", "€241"],
      uitleg: "€200 × 1,21 = €242", categorie: "Berekeningen"
    },
    {
      id: "eco_q010", type: "open",
      vraag: "Bereken de procentuele verandering: van 500 naar 625.",
      antwoord: "25%",
      uitleg: "((625−500)/500) × 100 = (125/500) × 100 = 25%", categorie: "Berekeningen"
    },
    {
      id: "eco_q011", type: "meerkeuze",
      vraag: "Een prijs incl. 9% BTW is €327. Wat is de prijs excl. BTW?",
      antwoord: "€300", opties: ["€300", "€290", "€310", "€295"],
      uitleg: "€327 / 1,09 = €300", categorie: "Berekeningen"
    },
    {
      id: "eco_q012", type: "juistonjuist",
      vraag: "Als inkomsten groter zijn dan uitgaven, is er een tekort.",
      antwoord: "onjuist",
      uitleg: "Nee, als inkomsten > uitgaven is er een OVERSCHOT. Een tekort is als uitgaven > inkomsten.", categorie: "Begrippen"
    },
    {
      id: "eco_q013", type: "open",
      vraag: "Geef de formule voor procentuele verandering.",
      antwoord: "((nieuw - oud) / oud) × 100",
      uitleg: "Altijd: (nieuw min oud) gedeeld door oud, keer 100.", categorie: "Berekeningen"
    },
    {
      id: "eco_q014", type: "meerkeuze",
      vraag: "Een salaris van €1800 stijgt met 10%. Wat is het nieuwe salaris?",
      antwoord: "€1980", opties: ["€1980", "€1900", "€2000", "€1810"],
      uitleg: "€1800 × 1,10 = €1980", categorie: "Berekeningen"
    },
    {
      id: "eco_q015", type: "juistonjuist",
      vraag: "Om de prijs excl. BTW te berekenen uit de prijs incl. 21% BTW, deel je door 1,21.",
      antwoord: "juist",
      uitleg: "Ja: prijs excl. = prijs incl. / 1,21.", categorie: "Berekeningen"
    },
  ]
};

const BIOLOGIE = {
  id: "biologie",
  naam: "Biologie",
  kleur: "#27AE60",
  icoon: "🌿",
  afbeelding: "images/biologie.jpg",

  flashcards: [
    { id: "bio_001", voorkant: "Wat is fotosynthese?", achterkant: "Het omzetten van lichtenergie + CO₂ + water naar glucose + zuurstof door planten en algen.", categorie: "Ecologie" },
    { id: "bio_002", voorkant: "Vergelijking fotosynthese", achterkant: "6CO₂ + 6H₂O + licht → C₆H₁₂O₆ + 6O₂\n(koolstofdioxide + water + licht → glucose + zuurstof)", categorie: "Ecologie" },
    { id: "bio_003", voorkant: "Wat is celademhaling?", achterkant: "Het vrijmaken van energie uit glucose:\nglucose + zuurstof → koolstofdioxide + water + energie", categorie: "Ecologie" },
    { id: "bio_004", voorkant: "Noem de 7 levenskenmerken", achterkant: "1. Bewegen\n2. Reageren op prikkels\n3. Groeien\n4. Voortplanten\n5. Stofwisseling\n6. Uitscheiden\n7. Voeden", categorie: "Levenskenmerken" },
    { id: "bio_005", voorkant: "Wat heeft een plantencel extra t.o.v. een diercel?", achterkant: "1. Celwand (van cellulose)\n2. Chloroplasten (voor fotosynthese)\n3. Grote centrale vacuole", categorie: "Cellen" },
    { id: "bio_006", voorkant: "Wat ontbreekt in een bacteriecel?", achterkant: "Een celkern — bacteriën zijn prokaryoten: het DNA ligt vrij in de cel.", categorie: "Cellen" },
    { id: "bio_007", voorkant: "Wat is het verschil tussen kraakbeen en botweefsel?", achterkant: "Kraakbeen: flexibel, geen bloedvaten, geen calcium\nBotweefsel: hard, bevat calciumzouten, bevat bloedvaten", categorie: "Skelet" },
    { id: "bio_008", voorkant: "Noem 4 functies van het skelet", achterkant: "1. Stevigheid/steun\n2. Bescherming (bijv. schedel, ribbenkast)\n3. Beweging (samen met spieren)\n4. Bloedcelvorming (in beenmerg)", categorie: "Skelet" },
    { id: "bio_009", voorkant: "Wat is een orgaan?", achterkant: "Een groep weefsels die samen een specifieke functie uitvoeren.\nBijv. hart, longen, lever.", categorie: "Organen" },
    { id: "bio_010", voorkant: "Noem 3 orgaanstelsels", achterkant: "Spijsverteringsstelsel, zenuwstelsel, skeletstelsel, bloedsomloopstelsel, ademhalingsstelsel, voortplantingsstelsel", categorie: "Organen" },
    { id: "bio_011", voorkant: "Waar vindt bevruchting plaats?", achterkant: "In de eileider — de eicel en zaadcel versmelten daar tot een bevruchte eicel (zygote).", categorie: "Voortplanting" },
    { id: "bio_012", voorkant: "Wat produceert de eierstok?", achterkant: "Eicellen (gameten) en hormonen (oestrogeen en progesteron).", categorie: "Voortplanting" },
    { id: "bio_013", voorkant: "Wat produceert de teelbal?", achterkant: "Zaadcellen (spermatozoa) en het hormoon testosteron.", categorie: "Voortplanting" },
    { id: "bio_014", voorkant: "Dominante vs recessieve eigenschap", achterkant: "Dominant: komt tot uiting bij 1 allel (maskeert recessief)\nRecessief: alleen zichtbaar als beide allelen recessief zijn", categorie: "Erfelijkheid" },
    { id: "bio_015", voorkant: "Wat zijn chromosomen?", achterkant: "Structuren in de celkern die DNA bevatten met erfelijke informatie. Mensen hebben 23 paar = 46 chromosomen.", categorie: "Erfelijkheid" },
    { id: "bio_016", voorkant: "Wat doet chlorofyl?", achterkant: "Het pigment dat lichtenergie opvangt voor fotosynthese. Geeft planten hun groene kleur.", categorie: "Ecologie" },
    { id: "bio_017", voorkant: "Verschil eencellig vs meercellig organisme", achterkant: "Eencellig: 1 cel voert alle levensfuncties uit (bijv. bacterie, amoebe)\nMeercellig: gespecialiseerde cellen werken samen (bijv. mens, boom)", categorie: "Cellen" },
    { id: "bio_018", voorkant: "Wat is de baarmoeder?", achterkant: "Orgaan in het vrouwelijk voortplantingsstelsel waar de embryo zich gedurende de zwangerschap ontwikkelt.", categorie: "Voortplanting" },
    { id: "bio_019", voorkant: "Wat is mitose?", achterkant: "Celdeling waarbij 1 moedercel 2 identieke dochtercellen oplevert. Gebruikt voor groei en herstel.", categorie: "Cellen" },
    { id: "bio_020", voorkant: "Wat is een voedselketen?", achterkant: "Een reeks organismen waarbij elk organisme voedsel is voor het volgende.\nBijv. gras → konijn → vos", categorie: "Ecologie" },
  ],

  quizvragen: [
    {
      id: "bio_q001", type: "meerkeuze",
      vraag: "Wat heeft een plantencel dat een diercel NIET heeft?",
      antwoord: "chloroplast", opties: ["chloroplast", "mitochondrium", "ribosoom", "celmembraan"],
      uitleg: "Chloroplasten zijn uniek voor plantencellen: ze voeren fotosynthese uit.", categorie: "Cellen"
    },
    {
      id: "bio_q002", type: "meerkeuze",
      vraag: "Welke vergelijking beschrijft fotosynthese?",
      antwoord: "CO₂ + H₂O + licht → glucose + O₂", opties: ["CO₂ + H₂O + licht → glucose + O₂", "glucose + O₂ → CO₂ + H₂O + energie", "H₂O → H₂ + O₂", "CO₂ → C + O₂"],
      uitleg: "Fotosynthese: koolstofdioxide + water + licht → glucose + zuurstof.", categorie: "Ecologie"
    },
    {
      id: "bio_q003", type: "juistonjuist",
      vraag: "Een bacterie heeft een celkern.",
      antwoord: "onjuist",
      uitleg: "Bacteriën zijn prokaryoten: ze hebben GEEN celkern. Het DNA ligt vrij in de cel.", categorie: "Cellen"
    },
    {
      id: "bio_q004", type: "juistonjuist",
      vraag: "Kraakbeen is harder dan botweefsel.",
      antwoord: "onjuist",
      uitleg: "Bot is harder dan kraakbeen. Bot bevat calciumzouten; kraakbeen is flexibel.", categorie: "Skelet"
    },
    {
      id: "bio_q005", type: "meerkeuze",
      vraag: "Hoeveel levenskenmerken zijn er?",
      antwoord: "7", opties: ["7", "5", "6", "8"],
      uitleg: "Er zijn 7 levenskenmerken: bewegen, reageren, groeien, voortplanten, stofwisseling, uitscheiden, voeden.", categorie: "Levenskenmerken"
    },
    {
      id: "bio_q006", type: "meerkeuze",
      vraag: "In welk orgaan vindt bevruchting bij de mens plaats?",
      antwoord: "eileider", opties: ["eileider", "baarmoeder", "eierstok", "vagina"],
      uitleg: "Bevruchting vindt plaats in de eileider, waarna de bevruchte eicel zich naar de baarmoeder beweegt.", categorie: "Voortplanting"
    },
    {
      id: "bio_q007", type: "open",
      vraag: "Beschrijf celademhaling in woorden (als vergelijking).",
      antwoord: "glucose + zuurstof → koolstofdioxide + water + energie",
      uitleg: "Celademhaling is het 'verbranden' van glucose om energie vrij te maken.", categorie: "Ecologie"
    },
    {
      id: "bio_q008", type: "meerkeuze",
      vraag: "Wat is de functie van chlorofyl?",
      antwoord: "lichtenergie opvangen", opties: ["lichtenergie opvangen", "water opnemen", "zuurstof uitscheiden", "glucose opslaan"],
      uitleg: "Chlorofyl is het groene pigment dat lichtenergie absorbeert voor fotosynthese.", categorie: "Ecologie"
    },
    {
      id: "bio_q009", type: "juistonjuist",
      vraag: "Mitose produceert 2 identieke dochtercellen.",
      antwoord: "juist",
      uitleg: "Ja, bij mitose deelt 1 cel zich in 2 genetisch identieke dochtercellen.", categorie: "Cellen"
    },
    {
      id: "bio_q010", type: "meerkeuze",
      vraag: "Wat produceert de teelbal?",
      antwoord: "zaadcellen", opties: ["zaadcellen", "eicellen", "oestrogeen", "insuline"],
      uitleg: "De teelballen produceren zaadcellen (spermatozoa) en testosteron.", categorie: "Voortplanting"
    },
    {
      id: "bio_q011", type: "open",
      vraag: "Noem 2 structuren die een plantencel heeft en een diercel niet.",
      antwoord: "celwand en chloroplast",
      uitleg: "Plantencellen hebben een celwand (van cellulose), chloroplasten én een grote centrale vacuole.", categorie: "Cellen"
    },
    {
      id: "bio_q012", type: "meerkeuze",
      vraag: "Een dominant allel...",
      antwoord: "...is zichtbaar bij slechts 1 kopie", opties: ["...is zichtbaar bij slechts 1 kopie", "...heeft 2 kopieën nodig", "...is altijd recessief", "...zit niet in chromosomen"],
      uitleg: "Een dominant allel 'wint' altijd: bij 1 kopie is het al zichtbaar in het fenotype.", categorie: "Erfelijkheid"
    },
    {
      id: "bio_q013", type: "juistonjuist",
      vraag: "Celademhaling is het omgekeerde proces van fotosynthese.",
      antwoord: "juist",
      uitleg: "Fotosynthese maakt glucose aan met CO₂, water en licht. Celademhaling breekt glucose af met O₂ en geeft CO₂ en water vrij.", categorie: "Ecologie"
    },
    {
      id: "bio_q014", type: "meerkeuze",
      vraag: "Wat is een orgaanstelsel?",
      antwoord: "meerdere organen die samenwerken voor een functie", opties: ["meerdere organen die samenwerken voor een functie", "één orgaan met één functie", "een groep cellen", "een type weefsel"],
      uitleg: "Een orgaanstelsel bestaat uit meerdere organen die samen een grote functie uitvoeren, zoals het spijsverteringsstelsel.", categorie: "Organen"
    },
    {
      id: "bio_q015", type: "open",
      vraag: "Noem 3 functies van het skelet.",
      antwoord: "steun, bescherming en beweging",
      uitleg: "Het skelet biedt steun, beschermt organen en maakt beweging mogelijk (samen met spieren).", categorie: "Skelet"
    },
  ]
};

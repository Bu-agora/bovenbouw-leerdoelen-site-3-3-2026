// =============================================================================
// INHOUD.JS — Alle flashcards en quizvragen
// =============================================================================
// Hier kun je alle vragen en antwoorden aanpassen.
// Laat komma's, haakjes en accolades staan zoals ze zijn.
//
// FLASHCARD-formaat:
//   { v: "voorkant (vraag)", a: "achterkant (antwoord)", cat: "Categorie" }
//
// MEERKEUZE-formaat:
//   { type: "meerkeuze", vraag: "...", antwoord: "JUIST antwoord",
//     fouten: ["fout optie 1", "fout optie 2", "fout optie 3"],
//     uitleg: "Uitleg waarom het juist is", cat: "Categorie" }
//
// OPEN VRAAG-formaat:
//   { type: "open", vraag: "...", antwoord: "verwacht antwoord",
//     uitleg: "...", cat: "Categorie" }
//
// JUIST/ONJUIST-formaat:
//   { type: "juistonjuist", vraag: "stelling...", antwoord: "juist" of "onjuist",
//     uitleg: "...", cat: "Categorie" }
// =============================================================================

const INHOUD = {

// ─────────────────────────────────────────────────────────────────────────────
// DUITS
// ─────────────────────────────────────────────────────────────────────────────
duits: {
  flashcards: [
    { v: "ich",                                          a: "ik (1e persoon enkelvoud)",                                    cat: "Voornaamwoorden" },
    { v: "du",                                           a: "jij (2e persoon enkelvoud)",                                   cat: "Voornaamwoorden" },
    { v: "er / sie / es",                                a: "hij / zij / het (3e persoon enkelvoud)",                       cat: "Voornaamwoorden" },
    { v: "wir",                                          a: "wij (1e persoon meervoud)",                                    cat: "Voornaamwoorden" },
    { v: "ihr",                                          a: "jullie (2e persoon meervoud)",                                 cat: "Voornaamwoorden" },
    { v: "sie / Sie",                                    a: "zij (meervoud) / u (beleefd)",                                 cat: "Voornaamwoorden" },
    { v: "wohnen — enkelvoud\n(ich, du, er/sie/es)",     a: "ich wohne\ndu wohnst\ner/sie/es wohnt",                        cat: "Werkwoorden" },
    { v: "wohnen — meervoud\n(wir, ihr, sie/Sie)",       a: "wir wohnen\nihr wohnt\nsie/Sie wohnen",                        cat: "Werkwoorden" },
    { v: "haben — enkelvoud\n(ich, du, er/sie/es)",      a: "ich habe\ndu hast\ner/sie/es hat",                             cat: "Werkwoorden" },
    { v: "haben — meervoud\n(wir, ihr, sie/Sie)",        a: "wir haben\nihr habt\nsie/Sie haben",                           cat: "Werkwoorden" },
    { v: "sein — enkelvoud\n(ich, du, er/sie/es)",       a: "ich bin\ndu bist\ner/sie/es ist",                              cat: "Werkwoorden" },
    { v: "sein — meervoud\n(wir, ihr, sie/Sie)",         a: "wir sind\nihr seid\nsie/Sie sind",                             cat: "Werkwoorden" },
    { v: "der / die / das",                              a: "lidwoorden:\nder = mannelijk\ndie = vrouwelijk\ndas = onzijdig", cat: "Lidwoorden" },
    { v: "der Vater",                                    a: "de vader (mannelijk)",                                         cat: "Familie" },
    { v: "die Mutter",                                   a: "de moeder (vrouwelijk)",                                       cat: "Familie" },
    { v: "die Schwester / der Bruder",                   a: "de zus / de broer",                                            cat: "Familie" },
    { v: "die Oma / der Opa",                            a: "de oma / de opa",                                              cat: "Familie" },
    { v: "die Schule / der Lehrer / die Lehrerin",       a: "de school / de leraar / de lerares",                           cat: "Schule" },
    { v: "das Haus / die Wohnung / das Zimmer",          a: "het huis / het appartement / de kamer",                        cat: "Wohnen" },
    { v: "Wie heißt du?\nWoher kommst du?",              a: "Hoe heet jij?\nWaar kom jij vandaan?",                         cat: "Zinnen" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "Wat is het correcte voornaamwoord voor 'wij' in het Duits?",
      antwoord: "wir",       fouten: ["ihr", "sie", "wer"],
      uitleg: "'Wir' = wij. 'Ihr' = jullie. 'Sie' = zij/u.",                         cat: "Voornaamwoorden" },

    { type: "meerkeuze",    vraag: "Welke uitgang krijgt het werkwoord 'spielen' bij 'du'?",
      antwoord: "du spielst", fouten: ["du spiele", "du spielen", "du spielet"],
      uitleg: "Bij 'du' voeg je '-st' toe aan de stam: spiel + st = spielst.",        cat: "Werkwoorden" },

    { type: "meerkeuze",    vraag: "Wat is de correcte vorm van 'sein' bij 'er'?",
      antwoord: "ist",        fouten: ["bist", "bin", "seid"],
      uitleg: "Sein is onregelmatig: ich bin, du bist, er/sie/es ist.",               cat: "Werkwoorden" },

    { type: "meerkeuze",    vraag: "Welk lidwoord hoort bij 'Vater' (vader)?",
      antwoord: "der",        fouten: ["die", "das", "den"],
      uitleg: "'Vater' is mannelijk, dus 'der Vater'.",                               cat: "Lidwoorden" },

    { type: "meerkeuze",    vraag: "Welk lidwoord hoort bij 'Schule' (school)?",
      antwoord: "die",        fouten: ["der", "das", "dem"],
      uitleg: "'Schule' is vrouwelijk, dus 'die Schule'.",                            cat: "Lidwoorden" },

    { type: "meerkeuze",    vraag: "Welk lidwoord hoort bij 'Haus' (huis)?",
      antwoord: "das",        fouten: ["der", "die", "des"],
      uitleg: "'Haus' is onzijdig, dus 'das Haus'.",                                 cat: "Lidwoorden" },

    { type: "juistonjuist", vraag: "'Ich bin' is de eerste persoon enkelvoud van het werkwoord 'haben'.",
      antwoord: "onjuist",
      uitleg: "'Ich bin' hoort bij 'sein' (zijn). 'Haben' (hebben) geeft 'ich habe'.", cat: "Werkwoorden" },

    { type: "juistonjuist", vraag: "'Ihr' is het meervoud van 'du'.",
      antwoord: "juist",
      uitleg: "Du = jij (enkelvoud), ihr = jullie (meervoud).",                       cat: "Voornaamwoorden" },

    { type: "juistonjuist", vraag: "'Die Mutter' is mannelijk.",
      antwoord: "onjuist",
      uitleg: "'Die Mutter' is vrouwelijk. 'Die' is het vrouwelijke lidwoord.",       cat: "Lidwoorden" },

    { type: "open",         vraag: "Vervoeg 'spielen' voor 'wir'.",
      antwoord: "wir spielen",
      uitleg: "Bij 'wir' is de uitgang -en: wir spielen.",                           cat: "Werkwoorden" },

    { type: "open",         vraag: "Vertaal naar het Duits (met lidwoord): 'de broer'.",
      antwoord: "der Bruder",
      uitleg: "'Bruder' is mannelijk, dus 'der Bruder'.",                             cat: "Familie" },

    { type: "open",         vraag: "Hoe vraag je 'Hoe heet jij?' in het Duits?",
      antwoord: "Wie heißt du",
      uitleg: "Wie heißt du? = Hoe heet jij?",                                       cat: "Zinnen" },

    { type: "meerkeuze",    vraag: "Wat betekent 'das Zimmer'?",
      antwoord: "de kamer",   fouten: ["het bed", "het huis", "de school"],
      uitleg: "Das Zimmer = de kamer. Das Haus = het huis. Das Bett = het bed.",     cat: "Wohnen" },

    { type: "meerkeuze",    vraag: "Welke vorm is correct voor 'haben' bij 'ich'?",
      antwoord: "ich habe",   fouten: ["ich hat", "ich haben", "ich habt"],
      uitleg: "Haben is onregelmatig: ich habe, du hast, er hat.",                   cat: "Werkwoorden" },

    { type: "juistonjuist", vraag: "'Sie' kan zowel 'zij' (meervoud) als 'u' (beleefd) betekenen.",
      antwoord: "juist",
      uitleg: "Ja, 'sie' (klein) = zij/ze. 'Sie' (hoofdletter) = u (beleefd).",     cat: "Voornaamwoorden" },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// BIOLOGIE
// ─────────────────────────────────────────────────────────────────────────────
biologie: {
  flashcards: [
    { v: "Wat is fotosynthese?",                             a: "Het omzetten van lichtenergie + CO₂ + water naar glucose + zuurstof door planten en algen.",          cat: "Ecologie" },
    { v: "Vergelijking fotosynthese",                        a: "6CO₂ + 6H₂O + licht → C₆H₁₂O₆ + 6O₂\n(koolstofdioxide + water + licht → glucose + zuurstof)",       cat: "Ecologie" },
    { v: "Wat is celademhaling?",                            a: "Het vrijmaken van energie uit glucose:\nglucose + zuurstof → koolstofdioxide + water + energie",        cat: "Ecologie" },
    { v: "Noem de 7 levenskenmerken",                        a: "1. Bewegen\n2. Reageren op prikkels\n3. Groeien\n4. Voortplanten\n5. Stofwisseling\n6. Uitscheiden\n7. Voeden", cat: "Levenskenmerken" },
    { v: "Wat heeft een plantencel extra t.o.v. een diercel?", a: "1. Celwand (van cellulose)\n2. Chloroplasten (voor fotosynthese)\n3. Grote centrale vacuole",        cat: "Cellen" },
    { v: "Wat ontbreekt in een bacteriecel?",                a: "Een celkern — bacteriën zijn prokaryoten: het DNA ligt vrij in de cel.",                              cat: "Cellen" },
    { v: "Wat is het verschil tussen kraakbeen en botweefsel?", a: "Kraakbeen: flexibel, geen bloedvaten, geen calcium\nBotweefsel: hard, bevat calciumzouten, bevat bloedvaten", cat: "Skelet" },
    { v: "Noem 4 functies van het skelet",                   a: "1. Stevigheid/steun\n2. Bescherming (bijv. schedel, ribbenkast)\n3. Beweging (samen met spieren)\n4. Bloedcelvorming (in beenmerg)", cat: "Skelet" },
    { v: "Wat is een orgaan?",                               a: "Een groep weefsels die samen een specifieke functie uitvoeren.\nBijv. hart, longen, lever.",            cat: "Organen" },
    { v: "Noem 3 orgaanstelsels",                            a: "Spijsverteringsstelsel, zenuwstelsel, skeletstelsel, bloedsomloopstelsel, ademhalingsstelsel, voortplantingsstelsel", cat: "Organen" },
    { v: "Waar vindt bevruchting plaats?",                   a: "In de eileider — de eicel en zaadcel versmelten daar tot een bevruchte eicel (zygote).",               cat: "Voortplanting" },
    { v: "Wat produceert de eierstok?",                      a: "Eicellen (gameten) en hormonen (oestrogeen en progesteron).",                                          cat: "Voortplanting" },
    { v: "Wat produceert de teelbal?",                       a: "Zaadcellen (spermatozoa) en het hormoon testosteron.",                                                  cat: "Voortplanting" },
    { v: "Dominante vs recessieve eigenschap",               a: "Dominant: komt tot uiting bij 1 allel (maskeert recessief)\nRecessief: alleen zichtbaar als beide allelen recessief zijn", cat: "Erfelijkheid" },
    { v: "Wat zijn chromosomen?",                            a: "Structuren in de celkern die DNA bevatten met erfelijke informatie. Mensen hebben 23 paar = 46 chromosomen.", cat: "Erfelijkheid" },
    { v: "Wat doet chlorofyl?",                              a: "Het pigment dat lichtenergie opvangt voor fotosynthese. Geeft planten hun groene kleur.",               cat: "Ecologie" },
    { v: "Verschil eencellig vs meercellig organisme",       a: "Eencellig: 1 cel voert alle levensfuncties uit (bijv. bacterie, amoebe)\nMeercellig: gespecialiseerde cellen werken samen (bijv. mens, boom)", cat: "Cellen" },
    { v: "Wat is de baarmoeder?",                            a: "Orgaan in het vrouwelijk voortplantingsstelsel waar de embryo zich gedurende de zwangerschap ontwikkelt.", cat: "Voortplanting" },
    { v: "Wat is mitose?",                                   a: "Celdeling waarbij 1 moedercel 2 identieke dochtercellen oplevert. Gebruikt voor groei en herstel.",    cat: "Cellen" },
    { v: "Wat is een voedselketen?",                         a: "Een reeks organismen waarbij elk organisme voedsel is voor het volgende.\nBijv. gras → konijn → vos",  cat: "Ecologie" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "Wat heeft een plantencel dat een diercel NIET heeft?",
      antwoord: "chloroplast", fouten: ["mitochondrium", "ribosoom", "celmembraan"],
      uitleg: "Chloroplasten zijn uniek voor plantencellen: ze voeren fotosynthese uit.",  cat: "Cellen" },

    { type: "meerkeuze",    vraag: "Welke vergelijking beschrijft fotosynthese?",
      antwoord: "CO₂ + H₂O + licht → glucose + O₂", fouten: ["glucose + O₂ → CO₂ + H₂O + energie", "H₂O → H₂ + O₂", "CO₂ → C + O₂"],
      uitleg: "Fotosynthese: koolstofdioxide + water + licht → glucose + zuurstof.",      cat: "Ecologie" },

    { type: "juistonjuist", vraag: "Een bacterie heeft een celkern.",
      antwoord: "onjuist",
      uitleg: "Bacteriën zijn prokaryoten: ze hebben GEEN celkern. Het DNA ligt vrij in de cel.", cat: "Cellen" },

    { type: "juistonjuist", vraag: "Kraakbeen is harder dan botweefsel.",
      antwoord: "onjuist",
      uitleg: "Bot is harder dan kraakbeen. Bot bevat calciumzouten; kraakbeen is flexibel.", cat: "Skelet" },

    { type: "meerkeuze",    vraag: "Hoeveel levenskenmerken zijn er?",
      antwoord: "7",          fouten: ["5", "6", "8"],
      uitleg: "Er zijn 7 levenskenmerken: bewegen, reageren, groeien, voortplanten, stofwisseling, uitscheiden, voeden.", cat: "Levenskenmerken" },

    { type: "meerkeuze",    vraag: "In welk orgaan vindt bevruchting bij de mens plaats?",
      antwoord: "eileider",   fouten: ["baarmoeder", "eierstok", "vagina"],
      uitleg: "Bevruchting vindt plaats in de eileider, waarna de bevruchte eicel zich naar de baarmoeder beweegt.", cat: "Voortplanting" },

    { type: "open",         vraag: "Beschrijf celademhaling in woorden (als vergelijking).",
      antwoord: "glucose + zuurstof → koolstofdioxide + water + energie",
      uitleg: "Celademhaling is het 'verbranden' van glucose om energie vrij te maken.", cat: "Ecologie" },

    { type: "meerkeuze",    vraag: "Wat is de functie van chlorofyl?",
      antwoord: "lichtenergie opvangen", fouten: ["water opnemen", "zuurstof uitscheiden", "glucose opslaan"],
      uitleg: "Chlorofyl is het groene pigment dat lichtenergie absorbeert voor fotosynthese.", cat: "Ecologie" },

    { type: "juistonjuist", vraag: "Mitose produceert 2 identieke dochtercellen.",
      antwoord: "juist",
      uitleg: "Ja, bij mitose deelt 1 cel zich in 2 genetisch identieke dochtercellen.", cat: "Cellen" },

    { type: "meerkeuze",    vraag: "Wat produceert de teelbal?",
      antwoord: "zaadcellen", fouten: ["eicellen", "oestrogeen", "insuline"],
      uitleg: "De teelballen produceren zaadcellen (spermatozoa) en testosteron.",       cat: "Voortplanting" },

    { type: "open",         vraag: "Noem 2 structuren die een plantencel heeft en een diercel niet.",
      antwoord: "celwand en chloroplast",
      uitleg: "Plantencellen hebben een celwand (van cellulose), chloroplasten én een grote centrale vacuole.", cat: "Cellen" },

    { type: "meerkeuze",    vraag: "Een dominant allel...",
      antwoord: "...is zichtbaar bij slechts 1 kopie", fouten: ["...heeft 2 kopieën nodig", "...is altijd recessief", "...zit niet in chromosomen"],
      uitleg: "Een dominant allel 'wint' altijd: bij 1 kopie is het al zichtbaar in het fenotype.", cat: "Erfelijkheid" },

    { type: "juistonjuist", vraag: "Celademhaling is het omgekeerde proces van fotosynthese.",
      antwoord: "juist",
      uitleg: "Fotosynthese maakt glucose aan. Celademhaling breekt glucose af.",        cat: "Ecologie" },

    { type: "meerkeuze",    vraag: "Wat is een orgaanstelsel?",
      antwoord: "meerdere organen die samenwerken voor een functie", fouten: ["één orgaan met één functie", "een groep cellen", "een type weefsel"],
      uitleg: "Een orgaanstelsel bestaat uit meerdere organen die samen een grote functie uitvoeren.", cat: "Organen" },

    { type: "open",         vraag: "Noem 3 functies van het skelet.",
      antwoord: "steun, bescherming en beweging",
      uitleg: "Het skelet biedt steun, beschermt organen en maakt beweging mogelijk.",  cat: "Skelet" },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// NASK
// ─────────────────────────────────────────────────────────────────────────────
nask: {
  flashcards: [
    { v: "Wat is een gesloten circuit?",              a: "Een circuit waarbij de stroom een complete weg heeft van de + pool naar de − pool door een geleider.",                                        cat: "Elektriciteit" },
    { v: "Wat is een geleider?",                      a: "Een materiaal dat elektrische stroom goed doorlaat.\nVoorbeelden: koper, ijzer, aluminium, grafiet.",                                        cat: "Elektriciteit" },
    { v: "Wat is een isolator?",                      a: "Een materiaal dat elektrische stroom slecht of niet doorlaat.\nVoorbeelden: rubber, plastic, glas, hout.",                                   cat: "Elektriciteit" },
    { v: "Eenheid van stroomsterkte",                 a: "Ampère (A)\nGemeten met een amperemeter, geplaatst in serie.",                                                                               cat: "Elektriciteit" },
    { v: "Eenheid van spanning",                      a: "Volt (V)\nGemeten met een voltmeter, geplaatst parallel.",                                                                                   cat: "Elektriciteit" },
    { v: "Eenheid van weerstand",                     a: "Ohm (Ω)\nWet van Ohm: R = U / I",                                                                                                           cat: "Elektriciteit" },
    { v: "Formule vermogen",                          a: "P = U × I\nVermogen (W) = Spanning (V) × Stroomsterkte (A)",                                                                                cat: "Elektriciteit" },
    { v: "Wat is een serieschakeling?",               a: "Alle componenten staan achter elkaar:\n• Zelfde stroomsterkte door elk onderdeel\n• Spanning verdeelt zich\n• Uitval van 1 onderdeel = hele kring valt uit", cat: "Elektriciteit" },
    { v: "Wat is een parallelschakeling?",            a: "Componenten staan naast elkaar (meerdere takken):\n• Zelfde spanning over elk onderdeel\n• Stroom verdeelt zich\n• Uitval van 1 onderdeel = rest blijft werken", cat: "Elektriciteit" },
    { v: "Schemateken: lamp",                         a: "Cirkel met een X erin (⊗)\nOf: cirkel met diagonale lijn",                                                                                   cat: "Schematekens" },
    { v: "Schemateken: batterij",                     a: "Twee verticale lijnen:\nLange dunne lijn = pluspol (+)\nKorte dikke lijn = minpol (−)",                                                      cat: "Schematekens" },
    { v: "Schemateken: weerstand",                    a: "Een rechthoek (□)\nOf: een zigzaglijn (Amerikaans)",                                                                                         cat: "Schematekens" },
    { v: "Wet van Ohm",                               a: "U = I × R\nSpanning (V) = Stroomsterkte (A) × Weerstand (Ω)",                                                                               cat: "Elektriciteit" },
    { v: "Wat is kortsluiting?",                      a: "Stroom neemt een weg met bijna geen weerstand → zeer hoge stroomsterkte → gevaarlijk (brand, schade).",                                     cat: "Elektriciteit" },
    { v: "Wat doet een zekering?",                    a: "Beschermt het circuit bij te hoge stroomsterkte: de zekering smelt door en verbreekt de kring.",                                            cat: "Elektriciteit" },
    { v: "Formule voor snelheid",                     a: "v = s / t\nSnelheid (m/s of km/h) = Afstand (m) / Tijd (s)",                                                                                cat: "Beweging" },
    { v: "Hoe reken je km/h om naar m/s?",            a: "Deel door 3,6\nBijv: 72 km/h ÷ 3,6 = 20 m/s",                                                                                              cat: "Beweging" },
    { v: "Hoe reken je m/s om naar km/h?",            a: "Vermenigvuldig met 3,6\nBijv: 15 m/s × 3,6 = 54 km/h",                                                                                     cat: "Beweging" },
    { v: "Wat is eenparige beweging?",                a: "Beweging met constante snelheid en rechte lijn.\nOp een weg-tijdgrafiek: een rechte diagonale lijn.",                                       cat: "Beweging" },
    { v: "Wat is versnelde beweging?",                a: "De snelheid neemt toe.\nOp een weg-tijdgrafiek: een steeds steiler wordende lijn.",                                                         cat: "Beweging" },
    { v: "Wat is vertraagde beweging?",               a: "De snelheid neemt af.\nOp een weg-tijdgrafiek: een steeds vlakker wordende lijn.",                                                          cat: "Beweging" },
    { v: "Wat is reactietijd?",                       a: "De tijd tussen het waarnemen van een gevaar en het begin van remmen.\nTypisch: 0,5 – 1 seconde.",                                           cat: "Beweging" },
    { v: "Wat is de remweg?",                         a: "De afstand die een voertuig aflegt tijdens het remmen (van begin remmen tot stilstand).",                                                    cat: "Beweging" },
    { v: "Wat is de stopafstand?",                    a: "Stopafstand = reactieweg + remweg\nReactieweg = v × reactietijd",                                                                           cat: "Beweging" },
    { v: "Hoe lees je een weg-tijdgrafiek?",          a: "• Steil = hoge snelheid\n• Vlak (horizontaal) = stilstand\n• Rechte lijn = constante snelheid\n• Gebogen lijn = snelheidsverandering",     cat: "Beweging" },
    { v: "Bereken: v = 10 m/s, t = 5 s. Wat is de afstand?", a: "s = v × t = 10 × 5 = 50 m",                                                                                                        cat: "Beweging" },
    { v: "Eenheden van afstand en tijd",              a: "Afstand: meter (m) of kilometer (km)\nTijd: seconde (s), minuut (min) of uur (h)",                                                         cat: "Beweging" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "Een auto rijdt 90 km/h. Wat is dit in m/s?",
      antwoord: "25 m/s",     fouten: ["20 m/s", "30 m/s", "15 m/s"],
      uitleg: "90 ÷ 3,6 = 25 m/s",                                                  cat: "Beweging" },

    { type: "meerkeuze",    vraag: "P = U × I staat voor:",
      antwoord: "vermogen = spanning × stroomsterkte", fouten: ["snelheid = weg × tijd", "weerstand = spanning / stroom", "spanning = weerstand × stroom"],
      uitleg: "P = U × I: Vermogen (Watt) = Spanning (Volt) × Stroomsterkte (Ampère).", cat: "Elektriciteit" },

    { type: "juistonjuist", vraag: "Bij een serieschakeling is de stroomsterkte door elk onderdeel gelijk.",
      antwoord: "juist",
      uitleg: "Ja, in een serie-kring stroomt door elk onderdeel dezelfde stroom. De spanning verdeelt zich.", cat: "Elektriciteit" },

    { type: "juistonjuist", vraag: "Bij een parallelschakeling valt de hele schakeling uit als 1 lamp kapot gaat.",
      antwoord: "onjuist",
      uitleg: "Nee, bij een parallelschakeling heeft elke tak een eigen pad. Als 1 lamp uitvalt blijven de andere werken.", cat: "Elektriciteit" },

    { type: "meerkeuze",    vraag: "Wat is de eenheid van elektrische weerstand?",
      antwoord: "Ohm (Ω)",    fouten: ["Volt (V)", "Ampère (A)", "Watt (W)"],
      uitleg: "Weerstand wordt gemeten in Ohm (Ω). R = U / I.",                      cat: "Elektriciteit" },

    { type: "open",         vraag: "Bereken de snelheid: een fiets legt 300 m af in 60 seconden.",
      antwoord: "5 m/s",
      uitleg: "v = s / t = 300 / 60 = 5 m/s",                                       cat: "Beweging" },

    { type: "meerkeuze",    vraag: "Wat is de stopafstand van een auto?",
      antwoord: "reactieweg + remweg", fouten: ["alleen de remweg", "alleen de reactieweg", "rijsnelheid × tijd"],
      uitleg: "Stopafstand = reactieweg (v × reactietijd) + remweg (tijdens remmen).", cat: "Beweging" },

    { type: "juistonjuist", vraag: "Een amperemeter moet parallel worden geplaatst in een circuit.",
      antwoord: "onjuist",
      uitleg: "Een amperemeter wordt IN SERIE geplaatst. Een voltmeter wordt parallel geplaatst.", cat: "Elektriciteit" },

    { type: "meerkeuze",    vraag: "Welk materiaal is een isolator?",
      antwoord: "rubber",     fouten: ["koper", "ijzer", "aluminium"],
      uitleg: "Rubber is een isolator: het geleidt geen stroom. Koper, ijzer en aluminium zijn geleiders.", cat: "Elektriciteit" },

    { type: "open",         vraag: "Geef de formule voor vermogen.",
      antwoord: "P = U × I",
      uitleg: "Vermogen (P) in Watt = Spanning (U) in Volt × Stroomsterkte (I) in Ampère.", cat: "Elektriciteit" },

    { type: "meerkeuze",    vraag: "Een horizontale lijn op een weg-tijdgrafiek betekent:",
      antwoord: "stilstand",  fouten: ["constante hoge snelheid", "versnelling", "vertraging"],
      uitleg: "Horizontaal op een weg-tijdgrafiek = geen verandering van positie = stilstand.", cat: "Beweging" },

    { type: "juistonjuist", vraag: "Als de snelheid verdubbelt, verdubbelt de remweg ook.",
      antwoord: "onjuist",
      uitleg: "Nee! De remweg verviervoudigt bij dubbele snelheid (remweg is evenredig met v²).", cat: "Beweging" },

    { type: "meerkeuze",    vraag: "Welk schemateken stelt een weerstand voor?",
      antwoord: "een rechthoek", fouten: ["een cirkel met X", "twee lijnen", "een driehoek"],
      uitleg: "Een weerstand wordt weergegeven als een rechthoek in een schakelschema.", cat: "Schematekens" },

    { type: "open",         vraag: "Reken 36 km/h om naar m/s.",
      antwoord: "10 m/s",
      uitleg: "36 ÷ 3,6 = 10 m/s",                                                  cat: "Beweging" },

    { type: "meerkeuze",    vraag: "Wat doet een zekering in een elektrisch circuit?",
      antwoord: "beschermt bij te hoge stroomsterkte", fouten: ["vergroot de spanning", "meet de stroom", "slaat energie op"],
      uitleg: "Een zekering smelt door bij te hoge stroom en verbreekt daarmee de kring.", cat: "Elektriciteit" },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// ENGELS
// ─────────────────────────────────────────────────────────────────────────────
engels: {
  flashcards: [
    { v: "Present simple — vorming",                   a: "Stam van het werkwoord.\nBij he/she/it: stam + -s (of -es)\nBijv: I play, she plays, they play",             cat: "Tijden" },
    { v: "Past simple — regelmatige werkwoorden",      a: "Stam + -ed\nBijv: play → played, walk → walked\nLet op: dubbele letter: stop → stopped",                    cat: "Tijden" },
    { v: "Present perfect — vorming",                  a: "have / has + voltooid deelwoord\nBijv: I have seen. She has eaten.\nGebruik: ervaringen of recent voltooide acties.", cat: "Tijden" },
    { v: "Present continuous — vorming",               a: "am / is / are + werkwoord + -ing\nBijv: I am reading. She is running.\nGebruik: iets dat nu bezig is.",      cat: "Tijden" },
    { v: "Past continuous — vorming",                  a: "was / were + werkwoord + -ing\nBijv: I was sleeping. They were playing.\nGebruik: iets dat bezig was in het verleden.", cat: "Tijden" },
    { v: "Wanneer gebruik je present perfect?",        a: "• Ervaringen: Have you ever been to Paris?\n• Pas voltooide actie: I have just finished.\n• Signaalwoorden: ever, never, already, yet, just, since, for", cat: "Tijden" },
    { v: "Wanneer gebruik je past simple?",            a: "• Afgeronde actie in het verleden\n• Altijd met tijdsaanduiding: yesterday, last week, in 2020\nBijv: I went to school yesterday.", cat: "Tijden" },
    { v: "Persoonlijke voornaamwoorden (subject)",     a: "I, you, he, she, it, we, you, they",                                                                          cat: "Voornaamwoorden" },
    { v: "Persoonlijke voornaamwoorden (object)",      a: "me, you, him, her, it, us, you, them",                                                                        cat: "Voornaamwoorden" },
    { v: "Vraagzin maken — present simple",            a: "Do / Does + subject + stam?\nBijv: Do you like it? Does she play tennis?",                                   cat: "Vragen" },
    { v: "Vraagzin maken — past simple",               a: "Did + subject + stam (niet -ed!)?\nBijv: Did you go to school? Did she eat lunch?",                          cat: "Vragen" },
    { v: "Onregelmatige werkwoorden\ngo / have / be",  a: "go → went → gone\nhave → had → had\nbe → was/were → been",                                                   cat: "Werkwoorden" },
    { v: "Ontkennende zin — present simple",           a: "do not (don't) / does not (doesn't) + stam\nBijv: I don't know. She doesn't like it.",                       cat: "Zinsbouw" },
    { v: "Present perfect signaalwoorden",             a: "ever, never, already, just, yet, since, for\nBijv: Have you ever been...? I have never seen...",              cat: "Tijden" },
    { v: "Vocabulary — school",                        a: "teacher, classroom, lesson, homework, exam, grade, timetable, subject",                                       cat: "Woordenschat" },
    { v: "Vocabulary — family",                        a: "mother, father, sister, brother, grandmother, grandfather, cousin, nephew, niece",                            cat: "Woordenschat" },
    { v: "Vocabulary — food & drink",                  a: "bread, vegetable, fruit, meat, fish, drink, meal, snack, dessert",                                            cat: "Woordenschat" },
    { v: "Vocabulary — travel",                        a: "train, bus, plane, airport, ticket, journey, destination, holiday, suitcase",                                 cat: "Woordenschat" },
    { v: "Short answers — present simple",             a: "Do you like it? → Yes, I do. / No, I don't.\nDoes she know? → Yes, she does. / No, she doesn't.",            cat: "Zinsbouw" },
    { v: "Verbindingswoorden (connectives)",            a: "and (en), but (maar), because (omdat), so (dus), or (of), however (echter), although (hoewel)",             cat: "Zinsbouw" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "What is the past simple of 'go'?",
      antwoord: "went",       fouten: ["goed", "gone", "goes"],
      uitleg: "'Go' is irregular: go → went → gone.",                                cat: "Werkwoorden" },

    { type: "meerkeuze",    vraag: "Which sentence is in the present continuous?",
      antwoord: "She is reading a book.", fouten: ["She reads a book.", "She read a book.", "She has read a book."],
      uitleg: "Present continuous = am/is/are + verb-ing. 'She is reading' is correct.", cat: "Tijden" },

    { type: "juistonjuist", vraag: "\"I have seen that film\" uses the present perfect.",
      antwoord: "juist",
      uitleg: "Yes: have + past participle (seen) = present perfect.",               cat: "Tijden" },

    { type: "meerkeuze",    vraag: "\"Did you _____ the book?\" Which form is correct?",
      antwoord: "read",       fouten: ["reads", "reading", "have read"],
      uitleg: "After 'did', use the bare infinitive (stam): Did you read...?",       cat: "Vragen" },

    { type: "open",         vraag: "Put the verb in brackets in the correct form: \"She ___ (play) tennis every day.\"",
      antwoord: "plays",
      uitleg: "Present simple, she/he/it → stam + -s: plays.",                      cat: "Tijden" },

    { type: "meerkeuze",    vraag: "Which is an object pronoun?",
      antwoord: "him",        fouten: ["he", "they", "I"],
      uitleg: "'Him' is an object pronoun. 'He' is a subject pronoun.",              cat: "Voornaamwoorden" },

    { type: "juistonjuist", vraag: "\"Yesterday I go to school\" is grammatically correct.",
      antwoord: "onjuist",
      uitleg: "'Yesterday' signals past simple: \"Yesterday I went to school.\"",    cat: "Tijden" },

    { type: "meerkeuze",    vraag: "Which signal word goes with the present perfect?",
      antwoord: "already",    fouten: ["yesterday", "last week", "in 2020"],
      uitleg: "'Already' signals present perfect. 'Yesterday', 'last week', 'in 2020' signal past simple.", cat: "Tijden" },

    { type: "open",         vraag: "Form a present simple question from: \"You like football.\"",
      antwoord: "Do you like football",
      uitleg: "Present simple question: Do/Does + subject + verb: Do you like football?", cat: "Vragen" },

    { type: "meerkeuze",    vraag: "Past simple of 'be' for I / he / she / it is:",
      antwoord: "was",        fouten: ["were", "been", "is"],
      uitleg: "I/he/she/it → was. We/you/they → were.",                              cat: "Werkwoorden" },

    { type: "juistonjuist", vraag: "\"Does she likes coffee?\" is grammatically correct.",
      antwoord: "onjuist",
      uitleg: "After 'does' use the bare infinitive: \"Does she like coffee?\" (no -s!)", cat: "Vragen" },

    { type: "open",         vraag: "Translate to English: \"Wij zijn gisteren naar het strand gegaan.\"",
      antwoord: "We went to the beach yesterday",
      uitleg: "'Gisteren' = yesterday → past simple. 'Gegaan' = went.",              cat: "Tijden" },

    { type: "meerkeuze",    vraag: "\"Have you ever been to London?\" uses:",
      antwoord: "present perfect", fouten: ["past simple", "present simple", "future"],
      uitleg: "Have + been (past participle) + 'ever' = present perfect.",           cat: "Tijden" },

    { type: "meerkeuze",    vraag: "What is the object pronoun of 'they'?",
      antwoord: "them",       fouten: ["their", "they", "those"],
      uitleg: "Subject: they → Object: them. (They saw us. / We saw them.)",         cat: "Voornaamwoorden" },

    { type: "juistonjuist", vraag: "The present continuous is used to describe a habit or routine.",
      antwoord: "onjuist",
      uitleg: "Habits/routines use present simple. Present continuous is for actions happening NOW.", cat: "Tijden" },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// ECONOMIE
// ─────────────────────────────────────────────────────────────────────────────
economie: {
  flashcards: [
    { v: "Formule procentuele verandering",                   a: "((nieuw − oud) / oud) × 100\n\nPositief = stijging\nNegatief = daling",                                cat: "Berekeningen" },
    { v: "Voorbeeld: prijs stijgt van €80 naar €100",         a: "((100 − 80) / 80) × 100\n= (20 / 80) × 100\n= 25% stijging",                                          cat: "Berekeningen" },
    { v: "Voorbeeld: prijs daalt van €50 naar €40",           a: "((40 − 50) / 50) × 100\n= (−10 / 50) × 100\n= −20% (daling van 20%)",                                 cat: "Berekeningen" },
    { v: "Formule: percentage van een bedrag",                a: "Bedrag × (percentage / 100)\nOf: Bedrag × 0,xx\n\nBijv: 15% van €200 = €200 × 0,15 = €30",             cat: "Berekeningen" },
    { v: "Bereken 20% van €350",                              a: "€350 × 0,20 = €70\n\nOf: €350 / 100 × 20 = €70",                                                       cat: "Berekeningen" },
    { v: "Afronden op 2 decimalen (valuta)",                  a: "Kijk naar het 3e decimaal:\n• ≥ 5 → naar boven afronden\n• < 5 → naar beneden afronden\n\nBijv: €17,456 → €17,46", cat: "Berekeningen" },
    { v: "Formule: het geheel berekenen uit een deel en percentage", a: "Geheel = Deel / (percentage / 100)\n\nBijv: als 30% van X = €60\n→ X = 60 / 0,30 = €200",      cat: "Berekeningen" },
    { v: "Wat is een indexcijfer?",                           a: "Een getal dat een waarde vergelijkt met een basisjaar.\nBasisjaar heeft altijd indexcijfer 100.\n\nFormule: (waarde huidig jaar / waarde basisjaar) × 100", cat: "Begrippen" },
    { v: "Wat is inflatie?",                                  a: "De gemiddelde stijging van prijzen over een periode.\nAls inflatie 3% is: gemiddelde prijs is 3% hoger dan vorig jaar.", cat: "Begrippen" },
    { v: "Wat is het verschil tussen procentpunt en procent?", a: "Procentpunt = absoluut verschil tussen percentages\nProcent = relatieve verandering\n\nBijv: van 4% → 6% = 2 procentpunt stijging\nMaar dat is 50% procentuele stijging (2/4 × 100)", cat: "Begrippen" },
    { v: "BTW berekenen: prijs + 21% BTW",                    a: "Prijs incl. BTW = Prijs excl. BTW × 1,21\n\nBijv: €100 × 1,21 = €121",                                cat: "Berekeningen" },
    { v: "Prijs excl. BTW berekenen uit incl. prijs (21%)",   a: "Prijs excl. BTW = Prijs incl. BTW / 1,21\n\nBijv: €242 / 1,21 = €200",                                cat: "Berekeningen" },
    { v: "Wat is een tekort?",                                a: "Uitgaven zijn groter dan inkomsten.\nBijv: je geeft €1200 uit maar verdient €1000 → tekort van €200.",  cat: "Begrippen" },
    { v: "Wat is een overschot?",                             a: "Inkomsten zijn groter dan uitgaven.\nBijv: je verdient €1500 en geeft €1200 uit → overschot van €300.", cat: "Begrippen" },
    { v: "Voorbeeld: loon stijgt van €2000 naar €2300",       a: "((2300 − 2000) / 2000) × 100\n= (300 / 2000) × 100\n= 15% stijging",                                  cat: "Berekeningen" },
    { v: "Hoe bereken je de nieuwe waarde na een stijging?",  a: "Nieuwe waarde = Oud × (1 + percentage/100)\n\nBijv: €1800 + 10% = €1800 × 1,10 = €1980",             cat: "Berekeningen" },
    { v: "Hoe bereken je de nieuwe waarde na een daling?",    a: "Nieuwe waarde = Oud × (1 − percentage/100)\n\nBijv: €500 − 20% = €500 × 0,80 = €400",                cat: "Berekeningen" },
    { v: "Wat zijn grote getallen? (notatie)",                a: "1 duizend = 1.000\n1 miljoen = 1.000.000\n1 miljard = 1.000.000.000",                                  cat: "Begrippen" },
    { v: "Voorbeeld indexcijfer berekenen",                   a: "Basisjaar 2020: prijs = €80\nJaar 2024: prijs = €92\n\nIndexcijfer 2024 = (92/80) × 100 = 115\n→ prijs is 15% gestegen ten opzichte van basisjaar", cat: "Berekeningen" },
    { v: "Voorbeeld: 25% van X = €75. Bereken X.",            a: "X = 75 / 0,25 = €300\n\nCheck: 25% van €300 = €300 × 0,25 = €75 ✓",                                   cat: "Berekeningen" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "Een prijs stijgt van €40 naar €50. Hoeveel procent stijging is dat?",
      antwoord: "25%",        fouten: ["20%", "10%", "30%"],
      uitleg: "((50−40)/40) × 100 = (10/40) × 100 = 25%",                           cat: "Berekeningen" },

    { type: "open",         vraag: "Bereken de procentuele verandering: prijs daalt van €120 naar €90.",
      antwoord: "-25%",
      uitleg: "((90−120)/120) × 100 = (−30/120) × 100 = −25%",                      cat: "Berekeningen" },

    { type: "meerkeuze",    vraag: "Wat is 20% van €350?",
      antwoord: "€70",        fouten: ["€60", "€80", "€35"],
      uitleg: "€350 × 0,20 = €70",                                                   cat: "Berekeningen" },

    { type: "juistonjuist", vraag: "Een negatieve procentuele verandering betekent altijd een daling.",
      antwoord: "juist",
      uitleg: "Ja, een negatief getal betekent dat de nieuwe waarde lager is dan de oude.", cat: "Berekeningen" },

    { type: "meerkeuze",    vraag: "Hoe rond je €34,567 af op 2 decimalen?",
      antwoord: "€34,57",     fouten: ["€34,56", "€34,60", "€35,00"],
      uitleg: "Het 3e decimaal is 7 (≥ 5), dus het 2e decimaal gaat van 6 naar 7: €34,57.", cat: "Berekeningen" },

    { type: "open",         vraag: "25% van X = €75. Bereken X.",
      antwoord: "€300",
      uitleg: "X = 75 / 0,25 = €300. Check: 25% × 300 = 75 ✓",                     cat: "Berekeningen" },

    { type: "meerkeuze",    vraag: "Het indexcijfer van het basisjaar is altijd:",
      antwoord: "100",        fouten: ["0", "50", "1"],
      uitleg: "Het basisjaar is per definitie 100. Alle andere jaren worden daartegen afgezet.", cat: "Begrippen" },

    { type: "juistonjuist", vraag: "Een procentpunt en een procent zijn hetzelfde.",
      antwoord: "onjuist",
      uitleg: "Procentpunt = absoluut verschil. Procent = relatieve verandering. Van 4% naar 6% = 2 procentpunt maar 50% stijging.", cat: "Begrippen" },

    { type: "meerkeuze",    vraag: "BTW van 21% op een prijs van €200 maakt de prijs:",
      antwoord: "€242",       fouten: ["€221", "€220", "€241"],
      uitleg: "€200 × 1,21 = €242",                                                  cat: "Berekeningen" },

    { type: "open",         vraag: "Bereken de procentuele verandering: van 500 naar 625.",
      antwoord: "25%",
      uitleg: "((625−500)/500) × 100 = (125/500) × 100 = 25%",                      cat: "Berekeningen" },

    { type: "meerkeuze",    vraag: "Een prijs incl. 9% BTW is €327. Wat is de prijs excl. BTW?",
      antwoord: "€300",       fouten: ["€290", "€310", "€295"],
      uitleg: "€327 / 1,09 = €300",                                                  cat: "Berekeningen" },

    { type: "juistonjuist", vraag: "Als inkomsten groter zijn dan uitgaven, is er een tekort.",
      antwoord: "onjuist",
      uitleg: "Nee, als inkomsten > uitgaven is er een OVERSCHOT. Een tekort is als uitgaven > inkomsten.", cat: "Begrippen" },

    { type: "open",         vraag: "Geef de formule voor procentuele verandering.",
      antwoord: "((nieuw - oud) / oud) × 100",
      uitleg: "Altijd: (nieuw min oud) gedeeld door oud, keer 100.",                 cat: "Berekeningen" },

    { type: "meerkeuze",    vraag: "Een salaris van €1800 stijgt met 10%. Wat is het nieuwe salaris?",
      antwoord: "€1980",      fouten: ["€1900", "€2000", "€1810"],
      uitleg: "€1800 × 1,10 = €1980",                                                cat: "Berekeningen" },

    { type: "juistonjuist", vraag: "Om de prijs excl. BTW te berekenen uit de prijs incl. 21% BTW, deel je door 1,21.",
      antwoord: "juist",
      uitleg: "Ja: prijs excl. = prijs incl. / 1,21.",                              cat: "Berekeningen" },
  ],
},

// ─────────────────────────────────────────────────────────────────────────────
// GESCHIEDENIS
// ─────────────────────────────────────────────────────────────────────────────
geschiedenis: {
  flashcards: [
    { v: "Wat is een primaire bron?",                   a: "Een bron die gemaakt is TIJDENS of vlak na het historische event door iemand die erbij was.\nBijv: dagboek, foto uit de Tweede Wereldoorlog, originele wet.", cat: "Bronnenanalyse" },
    { v: "Wat is een secundaire bron?",                 a: "Een bron die LATER is gemaakt, gebaseerd op andere bronnen.\nBijv: een schoolboek, een documentaire, een historisch artikel.", cat: "Bronnenanalyse" },
    { v: "De 4 vragen bij bronnenanalyse",              a: "1. Maker — wie heeft de bron gemaakt?\n2. Tijdstip — wanneer is de bron gemaakt?\n3. Doel — waarom is de bron gemaakt?\n4. Type — wat voor soort bron is het?", cat: "Bronnenanalyse" },
    { v: "Wat is het doel van een bron?",               a: "Wat wil de maker bereiken met de bron?\nMogelijkheden: informeren, overtuigen, entertainen, herdenken, propaganda.", cat: "Bronnenanalyse" },
    { v: "Wat is een oorzaak in geschiedenis?",         a: "Iets dat leidt tot een historisch event of verandering.\n• Directe oorzaak: de onmiddellijke aanleiding\n• Indirecte oorzaak: achterliggende factor die al langer speelt", cat: "Oorzaak-Gevolg" },
    { v: "Wat is een gevolg in geschiedenis?",          a: "Wat er veranderde als resultaat van een event.\n• Kortetermijngevolg: direct na het event\n• Langetermijngevolg: pas later merkbaar", cat: "Oorzaak-Gevolg" },
    { v: "Wat is een historisch perspectief?",          a: "De manier waarop mensen in het verleden de wereld zagen en begrepen vanuit hun eigen context, tijd en positie.", cat: "Perspectieven" },
    { v: "Waarom kijken historici naar perspectieven?", a: "Om te begrijpen waarom mensen bepaalde keuzes maakten. Mensen in het verleden dachten anders dan wij nu — hun context bepaalde hun kijk.", cat: "Perspectieven" },
    { v: "Wat is BCE / vC?",                            a: "Before Common Era / voor Christus\nJaren gaan achterwaarts richting het heden:\n500 vC is eerder dan 100 vC.", cat: "Tijdlijn" },
    { v: "Wat is CE / nC?",                             a: "Common Era / na Christus\nJaren gaan voorwaarts richting heden:\n500 nC is eerder dan 2000 nC.", cat: "Tijdlijn" },
    { v: "Wat is propaganda?",                          a: "Informatie (tekst, beeld, film) bedoeld om mensen te overtuigen of te manipuleren, vaak eenzijdig en emotioneel.", cat: "Bronnenanalyse" },
    { v: "Hoe herken je propaganda?",                   a: "• Eenzijdige informatie (één kant belicht)\n• Emotionele taal of beelden\n• Selectieve feiten\n• Overdrijving of simplificatie\n• Duidelijk doel: gedrag of mening beïnvloeden", cat: "Bronnenanalyse" },
    { v: "Wat is continuïteit in geschiedenis?",        a: "Wat GELIJK is gebleven ondanks veranderingen. De dingen die niet veranderden tijdens een historisch event.", cat: "Begrippen" },
    { v: "Wat is verandering in geschiedenis?",         a: "Wat ANDERS is geworden als gevolg van een event. Het tegenovergestelde van continuïteit.", cat: "Begrippen" },
    { v: "Wat is een historisch tijdvak?",              a: "Een periode met een eigen karakter. De 10 tijdvakken (Nederland):\nJagers/boeren → Grieken/Romeinen → Monniken → Ridders → Steden/Staten → Ontdekkers → Regenten/Vorsten → Pruiken → Burgers/Stoommachines → Wereldoorlogen → Televisie/Computer", cat: "Tijdlijn" },
    { v: "Wat is objectiviteit bij bronnen?",           a: "Een bron zonder persoonlijke mening of belang beschrijft de werkelijkheid zo neutraal mogelijk. Volkomen objectiviteit bestaat niet — elke bron heeft een perspectief.", cat: "Bronnenanalyse" },
    { v: "Soorten bronnen: beeldende bron",             a: "Een bron in de vorm van een afbeelding:\nfoto, schilderij, poster, cartoon, tekening, standbeeld.", cat: "Bronnenanalyse" },
    { v: "Soorten bronnen: schriftelijke bron",         a: "Een bron in de vorm van tekst:\nbrief, wet, krant, dagboek, toespraak, verdrag.", cat: "Bronnenanalyse" },
    { v: "Hoe beoordeel je de betrouwbaarheid van een bron?", a: "Kijk naar:\n• Maker (wie, wat is hun belang?)\n• Tijdstip (gelijktijdig of later?)\n• Doel (informeren of overtuigen?)\n• Type (ooggetuige of reconstructie?)", cat: "Bronnenanalyse" },
    { v: "Wat is een tijdlijn?",                        a: "Een chronologisch overzicht van historische events, van vroeg naar laat geordend.\nHandig voor het plaatsen van events in context.", cat: "Tijdlijn" },
  ],
  vragen: [
    { type: "meerkeuze",    vraag: "Wat is een primaire bron?",
      antwoord: "gemaakt ten tijde van het event", fouten: ["gemaakt lang na het event", "altijd objectief", "altijd betrouwbaar"],
      uitleg: "Primaire bronnen zijn gemaakt tijdens of vlak na het event door iemand die erbij was.", cat: "Bronnenanalyse" },

    { type: "meerkeuze",    vraag: "Welke vraag hoort NIET bij de bronnenanalyse (de 4 vragen)?",
      antwoord: "prijs",      fouten: ["maker", "doel", "tijdstip"],
      uitleg: "De 4 vragen zijn: maker, tijdstip, doel, type. 'Prijs' is geen analysevraag.",  cat: "Bronnenanalyse" },

    { type: "juistonjuist", vraag: "Propaganda is altijd objectief.",
      antwoord: "onjuist",
      uitleg: "Propaganda is juist NIET objectief: het is eenzijdig en bedoeld om te overtuigen of manipuleren.", cat: "Bronnenanalyse" },

    { type: "meerkeuze",    vraag: "Wat is een direct gevolg van een historisch event?",
      antwoord: "iets wat direct na het event veranderde", fouten: ["een achterliggende oorzaak", "een perspectief", "een tijdvak"],
      uitleg: "Een direct (kortetermijn)gevolg is wat onmiddellijk na het event veranderde.", cat: "Oorzaak-Gevolg" },

    { type: "open",         vraag: "Noem de vier vragen bij bronnenanalyse.",
      antwoord: "maker, tijdstip, doel, type",
      uitleg: "Bij elke bron vraag je: Wie maakte het? Wanneer? Waarom? En wat voor bron is het?", cat: "Bronnenanalyse" },

    { type: "meerkeuze",    vraag: "Welk tijdvak ligt VOOR de Middeleeuwen?",
      antwoord: "Oudheid (Grieken en Romeinen)", fouten: ["Renaissance", "Nieuwe Tijd", "Moderne Tijd"],
      uitleg: "Chronologisch: Oudheid → Middeleeuwen → Renaissance/Nieuwe Tijd → Moderne Tijd.", cat: "Tijdlijn" },

    { type: "juistonjuist", vraag: "BCE-jaren (voor Christus) gaan van groot naar klein richting het heden.",
      antwoord: "juist",
      uitleg: "Ja: 500 vC is eerder dan 100 vC. Het getal wordt kleiner naarmate je dichter bij het jaar 0 komt.", cat: "Tijdlijn" },

    { type: "meerkeuze",    vraag: "Wat is een historisch perspectief?",
      antwoord: "de blik van iemand vanuit hun eigen historische context", fouten: ["een tijdlijn van events", "een soort bron", "een gevolg"],
      uitleg: "Perspectief = hoe mensen in het verleden de wereld zagen vanuit hun eigen tijd en situatie.", cat: "Perspectieven" },

    { type: "open",         vraag: "Wat is het verschil tussen een primaire en een secundaire bron?",
      antwoord: "primair is gemaakt tijdens het event, secundair is later gemaakt",
      uitleg: "Primair: gemaakt door ooggetuige of tijdgenoot. Secundair: gemaakt na het event, gebaseerd op primaire bronnen.", cat: "Bronnenanalyse" },

    { type: "meerkeuze",    vraag: "Een dagboek uit de Tweede Wereldoorlog is een voorbeeld van:",
      antwoord: "een primaire bron", fouten: ["een secundaire bron", "een tertiaire bron", "geen historische bron"],
      uitleg: "Een dagboek geschreven tijdens de WOII is een primaire bron: gemaakt tijdens het event.", cat: "Bronnenanalyse" },

    { type: "juistonjuist", vraag: "Continuïteit in geschiedenis betekent dat iets veranderd is.",
      antwoord: "onjuist",
      uitleg: "Continuïteit = wat GELIJK is gebleven. Verandering = wat anders is geworden.", cat: "Begrippen" },

    { type: "meerkeuze",    vraag: "Wat is het doel van een propagandaposter?",
      antwoord: "mensen overtuigen of manipuleren", fouten: ["neutraal informeren", "feiten documenteren", "educatie"],
      uitleg: "Propaganda is bedoeld om mensen te overtuigen, te motiveren of te manipuleren.", cat: "Bronnenanalyse" },

    { type: "open",         vraag: "Leg in eigen woorden uit wat 'perspectief' betekent in geschiedenis.",
      antwoord: "hoe mensen in het verleden de wereld zagen vanuit hun eigen context",
      uitleg: "Perspectief = de blik van een persoon bepaald door hun tijd, positie, cultuur en ervaringen.", cat: "Perspectieven" },

    { type: "meerkeuze",    vraag: "Een tijdlijn helpt om:",
      antwoord: "events chronologisch te ordenen", fouten: ["oorzaken te analyseren", "perspectieven te vergelijken", "bronnen te beoordelen"],
      uitleg: "Een tijdlijn ordent events in de juiste volgorde van vroeg naar laat.",  cat: "Tijdlijn" },

    { type: "juistonjuist", vraag: "Een schoolboek geschreven in 2020 over de Tweede Wereldoorlog is een primaire bron.",
      antwoord: "onjuist",
      uitleg: "Nee, een schoolboek van 2020 is een SECUNDAIRE bron: het is lang na het event geschreven.", cat: "Bronnenanalyse" },
  ],
},

}; // einde INHOUD

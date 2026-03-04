/* ============================================================
   BIOLOGIE — Flashcards & Quizvragen
   Gebaseerd op: Basisleerdoelen Biologie onderbouw → bovenbouw
   ============================================================ */

const BIOLOGIE = {
  id: "biologie",
  naam: "Biologie",
  kleur: "#2E7D32",
  icoon: "🌿",
  afbeelding: "images/biologie.jpg",

  flashcards: [
    // ── Ecologie ──
    { id: "bi_001", voorkant: "Wat is een producent?", achterkant: "Een organisme dat via fotosynthese zelf voedsel maakt uit zonlicht.\nVoorbeeld: planten, algen.", categorie: "Ecologie" },
    { id: "bi_002", voorkant: "Wat is een consument?", achterkant: "Een organisme dat andere organismen eet.\n- Herbivoor (planteter)\n- Carnivoor (vleeseter)\n- Omnivoor (alleseter)", categorie: "Ecologie" },
    { id: "bi_003", voorkant: "Wat is een reducent?", achterkant: "Een organisme dat dood materiaal afbreekt.\nVoorbeeld: schimmels, bacteriën.", categorie: "Ecologie" },
    { id: "bi_004", voorkant: "Wat is een voedselketen?", achterkant: "Een rij organismen die na elkaar worden gegeten.\nVoorbeeld: gras → konijn → vos → adelaar", categorie: "Ecologie" },
    { id: "bi_005", voorkant: "Geef de reactievergelijking van fotosynthese", achterkant: "CO₂ + H₂O + zonlicht → glucose + O₂\n(koolstofdioxide + water + zonlicht → suiker + zuurstof)", categorie: "Ecologie" },
    { id: "bi_006", voorkant: "Geef de reactievergelijking van verbranding", achterkant: "glucose + O₂ → CO₂ + H₂O + energie", categorie: "Ecologie" },
    { id: "bi_007", voorkant: "Wat is het verschil tussen fotosynthese en verbranding?", achterkant: "Fotosynthese: SLAAT energie OP (alleen planten/algen)\nVerbranding: MAAKT energie VRIJ (alle organismen)", categorie: "Ecologie" },
    { id: "bi_008", voorkant: "Waar vindt fotosynthese plaats in de cel?", achterkant: "In de bladgroenkorrels (chloroplasten)", categorie: "Ecologie" },

    // ── Organen en cellen ──
    { id: "bi_009", voorkant: "Noem de 7 levenskenmerken", achterkant: "1. Voeding opnemen (stofwisseling)\n2. Groeien\n3. Voortplanten\n4. Reageren op prikkels\n5. Bewegen\n6. Afvalstoffen uitscheiden\n7. Ademen (verbranding)", categorie: "Organen en cellen" },
    { id: "bi_010", voorkant: "Wat is een weefsel?", achterkant: "Een groep gelijksoortige cellen met dezelfde functie.\nVoorbeeld: spierweefsel, zenuwweefsel.", categorie: "Organen en cellen" },
    { id: "bi_011", voorkant: "Beschrijf de opbouw: cel → orgaanstelsel", achterkant: "Cel → Weefsel → Orgaan → Orgaanstelsel\n(bijv. spiercel → spierweefsel → hart → bloedsomloopstelsel)", categorie: "Organen en cellen" },
    { id: "bi_012", voorkant: "Wat is een orgaan?", achterkant: "Een onderdeel dat bestaat uit verschillende weefsels en een bepaalde taak uitvoert.\nVoorbeeld: hart, longen, lever.", categorie: "Organen en cellen" },

    // ── Celtypen ──
    { id: "bi_013", voorkant: "Wat heeft een plantaardige cel WEL maar een dierlijke cel NIET?", achterkant: "1. Celwand\n2. Chloroplasten (bladgroenkorrels)\n3. Grote vacuole", categorie: "Ordening" },
    { id: "bi_014", voorkant: "Wat is bijzonder aan een bacteriële cel?", achterkant: "Geen echte celkern (DNA ligt los in de cel)\nGeen mitochondriën\nGeen chloroplasten\nWel een celwand", categorie: "Ordening" },
    { id: "bi_015", voorkant: "Waaruit bestaat de celwand van een schimmelcel?", achterkant: "Chitine (niet cellulose zoals bij planten)", categorie: "Ordening" },
    { id: "bi_016", voorkant: "Wat hebben alle cellen gemeenschappelijk?", achterkant: "Celmembraan, cytoplasma en DNA", categorie: "Ordening" },

    // ── Dierenrijk ──
    { id: "bi_017", voorkant: "Noem de 5 groepen gewervelden", achterkant: "1. Vissen\n2. Amfibieën\n3. Reptielen\n4. Vogels\n5. Zoogdieren", categorie: "Ordening" },
    { id: "bi_018", voorkant: "Kenmerken van amfibieën?", achterkant: "Als jong: kieuwen\nAls volwassene: longen\nVochtige huid, koelbloedig", categorie: "Ordening" },
    { id: "bi_019", voorkant: "Kenmerken van reptielen?", achterkant: "Schubben, longen, koelbloedig\nLeggen eieren op land", categorie: "Ordening" },
    { id: "bi_020", voorkant: "Kenmerken van zoogdieren?", achterkant: "Haar/vacht, longen, warmbloedig\nLevend geboren, moedermelk", categorie: "Ordening" },
    { id: "bi_021", voorkant: "Noem 3 groepen geleedpotigen", achterkant: "1. Insecten (6 poten, 3 lichaamsdelen)\n2. Spinachtigen (8 poten, 2 lichaamsdelen)\n3. Kreeftachtigen (10 poten, vaak in water)", categorie: "Ordening" },

    // ── Plantenrijk ──
    { id: "bi_022", voorkant: "Noem de 4 groepen planten", achterkant: "1. Mossen (geen echte wortels)\n2. Varens (sporen, geen bloemen)\n3. Naaktzadigen (zaden in kegels)\n4. Bedektzadigen (zaden in vruchten)", categorie: "Ordening" },

    // ── Stevigheid en beweging ──
    { id: "bi_023", voorkant: "Noem de 4 soorten beenverbindingen", achterkant: "1. Scharniergewricht (knie, elleboog)\n2. Kogelgewricht (schouder, heup)\n3. Naad (schedel, geen beweging)\n4. Draaigewricht (nek, onderarm)", categorie: "Stevigheid" },
    { id: "bi_024", voorkant: "Wat is het verschil tussen kraakbeen en beenweefsel?", achterkant: "Kraakbeen: buigzaam, geen bloedvaten (oor, neus)\nBeenweefsel: hard, bevat calcium en bloedvaten", categorie: "Stevigheid" },
    { id: "bi_025", voorkant: "Noem 5 functies van het skelet", achterkant: "1. Bescherming\n2. Stevigheid\n3. Beweging\n4. Opslag (calcium)\n5. Aanmaak bloedcellen (beenmerg)", categorie: "Stevigheid" },

    // ── Bloemen en bestuiving ──
    { id: "bi_026", voorkant: "Kenmerken van windbestuiving?", achterkant: "Veel licht stuifmeel\nGrote meeldraden buiten de bloem\nGeen geur of felle kleuren", categorie: "Bloemen" },
    { id: "bi_027", voorkant: "Kenmerken van insectenbestuiving?", achterkant: "Kleurrijke bloemen\nGeur en nectar\nKleverig stuifmeel", categorie: "Bloemen" },
    { id: "bi_028", voorkant: "Verschil geslachtelijke vs. ongeslachtelijke voortplanting?", achterkant: "Geslachtelijk: 2 ouders, DNA-mix, nakomelingen verschillen\nOngeslachtelijk: 1 ouder, DNA-kopie, nakomelingen identiek (klonen)", categorie: "Bloemen" },

    // ── Bloedsomloop ──
    { id: "bi_029", voorkant: "Noem de 4 holtes van het hart", achterkant: "Rechterboezem → Rechterkamer\nLinkerboezem → Linkerkamer", categorie: "Bloedsomloop" },
    { id: "bi_030", voorkant: "Wat doet een slagader?", achterkant: "Vervoert bloed VAN het hart WEG\nDikke, elastische wand\nHoge druk", categorie: "Bloedsomloop" },
    { id: "bi_031", voorkant: "Wat doet een ader?", achterkant: "Vervoert bloed NAAR het hart TOE\nDunnere wand, heeft kleppen\nLage druk", categorie: "Bloedsomloop" },
    { id: "bi_032", voorkant: "Wat doet een haarvat?", achterkant: "Heel dun (één cellaag)\nHier vindt uitwisseling plaats van zuurstof, voedingsstoffen en afvalstoffen", categorie: "Bloedsomloop" },

    // ── Voeding en vertering ──
    { id: "bi_033", voorkant: "Wat doet de dunne darm?", achterkant: "Belangrijkste vertering + opname van voedingsstoffen in het bloed", categorie: "Vertering" },
    { id: "bi_034", voorkant: "Wat doet de maag?", achterkant: "Maagzuur doodt bacteriën en breekt eiwitten af", categorie: "Vertering" },
    { id: "bi_035", voorkant: "Wat doet de dikke darm?", achterkant: "Opname van water, vorming van ontlasting", categorie: "Vertering" },

    // ── Voortplanting ──
    { id: "bi_036", voorkant: "Wat zijn primaire geslachtskenmerken?", achterkant: "De geslachtsorganen waarmee je geboren wordt.\nJongens: penis/teelballen\nMeisjes: vagina/eierstokken", categorie: "Voortplanting" },
    { id: "bi_037", voorkant: "Wat zijn secundaire geslachtskenmerken?", achterkant: "Kenmerken die ontstaan in de puberteit.\nJongens: baardgroei, lagere stem, bredere schouders\nMeisjes: borstontwikkeling, bredere heupen, menstruatie", categorie: "Voortplanting" },
    { id: "bi_038", voorkant: "Wat zijn erfelijke eigenschappen?", achterkant: "Eigenschappen die via DNA van ouders op kinderen worden doorgegeven.\nVoorbeeld: oogkleur, haarkleur, bloedgroep", categorie: "Voortplanting" },
  ],

  quizvragen: [
    // ── Meerkeuze ──
    {
      id: "bi_q001", type: "meerkeuze", categorie: "Ecologie",
      vraag: "Wat maakt een producent?",
      opties: ["Het eet andere dieren", "Het maakt eigen voedsel via fotosynthese", "Het breekt dood materiaal af", "Het leeft als parasiet"],
      antwoord: "Het maakt eigen voedsel via fotosynthese",
      uitleg: "Een producent maakt via fotosynthese eigen voedsel (glucose) uit CO₂, water en zonlicht."
    },
    {
      id: "bi_q002", type: "meerkeuze", categorie: "Ecologie",
      vraag: "Welke reactie hoort bij fotosynthese?",
      opties: ["glucose + O₂ → CO₂ + H₂O", "CO₂ + H₂O + zonlicht → glucose + O₂", "O₂ + glucose → ATP", "H₂O → H₂ + O₂"],
      antwoord: "CO₂ + H₂O + zonlicht → glucose + O₂",
      uitleg: "Bij fotosynthese worden CO₂ en H₂O met zonlicht omgezet in glucose en zuurstof."
    },
    {
      id: "bi_q003", type: "meerkeuze", categorie: "Ecologie",
      vraag: "Welke organismen doen aan verbranding (dissimilatie)?",
      opties: ["Alleen planten", "Alleen dieren", "Alle organismen", "Alleen bacteriën"],
      antwoord: "Alle organismen",
      uitleg: "Fotosynthese is alleen voor planten/algen, maar verbranding vindt plaats in ALLE levende organismen."
    },
    {
      id: "bi_q004", type: "meerkeuze", categorie: "Organen en cellen",
      vraag: "Wat is de juiste volgorde van klein naar groot?",
      opties: ["Orgaan → Cel → Weefsel → Orgaanstelsel", "Cel → Weefsel → Orgaan → Orgaanstelsel", "Weefsel → Cel → Orgaanstelsel → Orgaan", "Cel → Orgaan → Weefsel → Orgaanstelsel"],
      antwoord: "Cel → Weefsel → Orgaan → Orgaanstelsel",
      uitleg: "Cel (kleinste) → Weefsel (groep cellen) → Orgaan (groep weefsels) → Orgaanstelsel (groep organen)."
    },
    {
      id: "bi_q005", type: "meerkeuze", categorie: "Ordening",
      vraag: "Wat ONTBREEKT in een plantaardige cel ten opzichte van sommige dierlijke cellen?",
      opties: ["Celwand", "Chloroplasten", "Centriolen", "Vacuole"],
      antwoord: "Centriolen",
      uitleg: "Plantencellen missen centriolen (en lysosomen). Ze hebben WEL celwand, chloroplasten en een grote vacuole."
    },
    {
      id: "bi_q006", type: "meerkeuze", categorie: "Ordening",
      vraag: "Welke diergroep heeft als jong kieuwen en als volwassene longen?",
      opties: ["Vissen", "Reptielen", "Amfibieën", "Zoogdieren"],
      antwoord: "Amfibieën",
      uitleg: "Amfibieën beginnen met kieuwen (als larve in water) en krijgen later longen."
    },
    {
      id: "bi_q007", type: "meerkeuze", categorie: "Ordening",
      vraag: "Hoeveel poten heeft een insect?",
      opties: ["4", "6", "8", "10"],
      antwoord: "6",
      uitleg: "Insecten: 6 poten, 3 lichaamsdelen. Spinachtigen: 8 poten. Kreeftachtigen: 10 poten."
    },
    {
      id: "bi_q008", type: "meerkeuze", categorie: "Stevigheid",
      vraag: "Welk type gewricht zit in je knie?",
      opties: ["Kogelgewricht", "Scharniergewricht", "Draaigewricht", "Naad"],
      antwoord: "Scharniergewricht",
      uitleg: "Scharniergewricht: kan maar één kant op bewegen (knie, elleboog)."
    },
    {
      id: "bi_q009", type: "meerkeuze", categorie: "Bloedsomloop",
      vraag: "Waar zitten kleppen in?",
      opties: ["Slagaders", "Aderen", "Haarvaten", "Alleen in het hart"],
      antwoord: "Aderen",
      uitleg: "Aderen hebben kleppen om te voorkomen dat bloed terugstroomt (de druk is laag)."
    },
    {
      id: "bi_q010", type: "meerkeuze", categorie: "Bloemen",
      vraag: "Welk kenmerk hoort bij windbestuiving?",
      opties: ["Kleurrijke bloemen", "Kleverig stuifmeel", "Veel licht stuifmeel", "Nectar produceren"],
      antwoord: "Veel licht stuifmeel",
      uitleg: "Windbestuiving: veel licht stuifmeel, geen geur/kleur. Insectenbestuiving: kleur, geur, nectar, kleverig stuifmeel."
    },
    {
      id: "bi_q011", type: "meerkeuze", categorie: "Vertering",
      vraag: "In welk orgaan vindt de meeste vertering en opname plaats?",
      opties: ["Maag", "Slokdarm", "Dunne darm", "Dikke darm"],
      antwoord: "Dunne darm",
      uitleg: "De dunne darm is het belangrijkste orgaan voor vertering en opname van voedingsstoffen."
    },

    // ── Open vragen ──
    {
      id: "bi_q012", type: "open", categorie: "Ecologie",
      vraag: "Welke stof maken planten aan bij fotosynthese naast zuurstof?",
      antwoord: "glucose",
      uitleg: "Bij fotosynthese wordt glucose (suiker) en zuurstof geproduceerd."
    },
    {
      id: "bi_q013", type: "open", categorie: "Bloedsomloop",
      vraag: "Hoe heet het bloedvat dat bloed VAN het hart WEG vervoert?",
      antwoord: "slagader",
      uitleg: "Slagader (arterie) vervoert bloed van het hart weg. Een ader vervoert bloed naar het hart toe."
    },
    {
      id: "bi_q014", type: "open", categorie: "Ordening",
      vraag: "In welk organel vindt fotosynthese plaats?",
      antwoord: "chloroplast",
      uitleg: "Fotosynthese vindt plaats in de chloroplasten (bladgroenkorrels)."
    },

    // ── Juist of onjuist ──
    {
      id: "bi_q015", type: "juistonjuist", categorie: "Ecologie",
      vraag: "Planten doen alleen aan fotosynthese en niet aan verbranding.",
      antwoord: "onjuist",
      uitleg: "Planten doen BEIDE: fotosynthese (om glucose te maken) en verbranding (om energie vrij te maken)."
    },
    {
      id: "bi_q016", type: "juistonjuist", categorie: "Ordening",
      vraag: "Bacteriën hebben geen echte celkern.",
      antwoord: "juist",
      uitleg: "In bacteriële cellen ligt het DNA los in de cel, er is geen afgebakende celkern."
    },
    {
      id: "bi_q017", type: "juistonjuist", categorie: "Stevigheid",
      vraag: "Een kogelgewricht kan alle kanten op bewegen.",
      antwoord: "juist",
      uitleg: "Kogelgewricht (schouder, heup) kan alle kanten op. Een scharniergewricht kan maar één kant op."
    },
    {
      id: "bi_q018", type: "juistonjuist", categorie: "Bloedsomloop",
      vraag: "De linkerkamer pompt zuurstofarm bloed naar de longen.",
      antwoord: "onjuist",
      uitleg: "De RECHTERkamer pompt zuurstofarm bloed naar de longen. De LINKERkamer pompt zuurstofrijk bloed naar het lichaam."
    },
    {
      id: "bi_q019", type: "juistonjuist", categorie: "Bloemen",
      vraag: "Bij ongeslachtelijke voortplanting zijn de nakomelingen identiek aan de ouder.",
      antwoord: "juist",
      uitleg: "Ongeslachtelijke voortplanting: 1 ouder, DNA-kopie → nakomelingen zijn klonen (identiek)."
    },
    {
      id: "bi_q020", type: "juistonjuist", categorie: "Ordening",
      vraag: "Reptielen zijn warmbloedig.",
      antwoord: "onjuist",
      uitleg: "Reptielen zijn koelbloedig. Alleen vogels en zoogdieren zijn warmbloedig."
    },
  ]
};

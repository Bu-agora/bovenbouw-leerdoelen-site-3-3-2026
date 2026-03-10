/* ============================================================
   GESCHIEDENIS — Flashcards & Quizvragen
   Gebaseerd op: Toets vr 13 maart 2026 (Dhr. van Aerde)
   Onderwerpen: Staatsinrichting, Industriële Revolutie,
   WO1, Interbellum, WO2, Koude Oorlog
   ============================================================ */

const GESCHIEDENIS = {
  id: "geschiedenis",
  naam: "Geschiedenis",
  kleur: "#795548",
  icoon: "📜",
  afbeelding: "images/geschiedenis.jpg",

  flashcards: [
    // ── Staatsinrichting van Nederland ──
    { id: "ge_001", voorkant: "Wat is de grondwet?", achterkant: "De allerbelangrijkste wet van Nederland. Alle andere wetten moeten erbij passen. Hierin staan je grondrechten (vrijheid van meningsuiting, godsdienst, recht op onderwijs).", categorie: "Staatsinrichting" },
    { id: "ge_002", voorkant: "Wat doet de Tweede Kamer?", achterkant: "MAAKT nieuwe wetten en controleert de regering. Heeft 150 leden. Gekozen door het volk bij verkiezingen.", categorie: "Staatsinrichting" },
    { id: "ge_003", voorkant: "Wat doet de Eerste Kamer?", achterkant: "KEURT wetten goed of af (alleen ja/nee). Heeft 75 leden. Leden werken bijna vrijwillig.", categorie: "Staatsinrichting" },
    { id: "ge_004", voorkant: "Wat is een coalitie?", achterkant: "De partijen die SAMEN de regering vormen.", categorie: "Staatsinrichting" },
    { id: "ge_005", voorkant: "Wat is de oppositie?", achterkant: "Alle andere partijen die NIET in de regering zitten.", categorie: "Staatsinrichting" },
    { id: "ge_006", voorkant: "Hoe werken verkiezingen in Nederland?", achterkant: "Alle Nederlanders van 18+ stemmen op een partij. De partij met de meeste stemmen krijgt de meeste zetels.", categorie: "Staatsinrichting" },
    { id: "ge_007", voorkant: "Verschil Eerste Kamer vs Tweede Kamer", achterkant: "Tweede Kamer (150 leden): maakt wetten, controleert regering.\nEerste Kamer (75 leden): keurt wetten alleen goed of af.", categorie: "Staatsinrichting" },

    // ── Industriële Revolutie ──
    { id: "ge_008", voorkant: "Wat was de Industriële Revolutie?", achterkant: "Mensen gingen van het land naar fabrieken werken (19e eeuw). Het leven was zwaar: 12 uur per dag, weinig geld, gevaarlijk, kinderen moesten ook werken.", categorie: "Industriële Revolutie" },
    { id: "ge_009", voorkant: "Wat zijn vakbonden?", achterkant: "Groepen arbeiders die SAMEN vochten voor kortere werkdagen en loon bij ziekte.", categorie: "Industriële Revolutie" },
    { id: "ge_010", voorkant: "Wat is het Kinderwetje van Van Houten (1874)?", achterkant: "Wet die bepaalde dat kinderen onder de 12 NIET meer mochten werken in fabrieken.", categorie: "Industriële Revolutie" },
    { id: "ge_011", voorkant: "Wat zijn sociale wetten?", achterkant: "Wetten die arbeiders beschermen: max 8 uur werken, ziektegeld, minimumloon, zwangerschapsverlof.", categorie: "Industriële Revolutie" },
    { id: "ge_012", voorkant: "Wat is socialisme?", achterkant: "Beweging van arme arbeiders die opkwamen voor betere rechten tijdens de Industriële Revolutie.", categorie: "Industriële Revolutie" },

    // ── Eerste Wereldoorlog ──
    { id: "ge_013", voorkant: "Wat is nationalisme?", achterkant: "Heel veel trots voor je eigen land, de wil ervoor te vechten. Oorzaak van WO1.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_014", voorkant: "Wat is militarisme?", achterkant: "Liefde voor het leger, steeds betere wapens willen. Oorzaak van WO1.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_015", voorkant: "Wat zijn bondgenootschappen?", achterkant: "Landen beloven elkaar te helpen → een klein conflict wordt een wereldoorlog.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_016", voorkant: "Wat was de aanleiding van WO1?", achterkant: "Moord op Frans Ferdinand (kroonprins Oostenrijk-Hongarije) in Sarajevo door Gavrilo Princip in 1914.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_017", voorkant: "Wie waren de Centralen in WO1?", achterkant: "Duitsland + Oostenrijk-Hongarije.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_018", voorkant: "Wie waren de Geallieerden in WO1?", achterkant: "Engeland + Frankrijk + Rusland (later ook de VS).", categorie: "Eerste Wereldoorlog" },
    { id: "ge_019", voorkant: "Wat is de loopgravenoorlog?", achterkant: "Soldaten vochten vanuit sleuven in de grond. Verschrikkelijk: modder, ratten, gifgas, nauwelijks vooruitgang.", categorie: "Eerste Wereldoorlog" },
    { id: "ge_020", voorkant: "Wat was het Verdrag van Versailles (1919)?", achterkant: "Straffen voor Duitsland na WO1: enorm veel geld betalen, grond afstaan, klein leger, schuld van de oorlog krijgen. Duitsers waren WOEDEND.", categorie: "Eerste Wereldoorlog" },

    // ── Interbellum ──
    { id: "ge_021", voorkant: "Wat betekent 'interbellum'?", achterkant: "De tijd TUSSEN de twee wereldoorlogen (1918-1939). Inter = tussen, bellum = oorlog.", categorie: "Interbellum" },
    { id: "ge_022", voorkant: "Wat was de Beurskrach van 1929?", achterkant: "Mensen investeerden geleend geld → beurs crashte → iedereen blut → banken failliet → enorme werkloosheid. Verspreidde zich van Amerika naar heel Europa.", categorie: "Interbellum" },
    { id: "ge_023", voorkant: "Wat was het Dawesplan (1924)?", achterkant: "Amerikaans plan: leningen aan Duitsland zodat zij de Versailles-schulden konden betalen. Na de beurskrach werkte dit niet meer.", categorie: "Interbellum" },
    { id: "ge_024", voorkant: "Wat is de NSDAP?", achterkant: "Hitlers partij (Nationaal-Socialistische Duitse Arbeiderspartij). Hitler beloofde Duitsland weer groot te maken en gaf Joden de schuld. In 1933 werd hij leider van Duitsland.", categorie: "Interbellum" },

    // ── Tweede Wereldoorlog ──
    { id: "ge_025", voorkant: "Wat waren de oorzaken van WO2?", achterkant: "Woede over Versailles + de beurskrach + Hitler aan de macht. In 1939 viel Duitsland Polen binnen.", categorie: "Tweede Wereldoorlog" },
    { id: "ge_026", voorkant: "Wat is de Holocaust?", achterkant: "De moord op 6 miljoen Joden door nazi-Duitsland. Joden werden opgepakt, naar concentratiekampen gestuurd en vermoord. Ook Roma, homoseksuelen en gehandicapten.", categorie: "Tweede Wereldoorlog" },
    { id: "ge_027", voorkant: "Wat is verzet (WO2)?", achterkant: "Mensen die IN HET GEHEIM tegen de Duitsers streden: Joden verstoppen, treinen saboteren, illegale kranten drukken.", categorie: "Tweede Wereldoorlog" },
    { id: "ge_028", voorkant: "Wat is collaboratie (WO2)?", achterkant: "Samenwerken MET de Duitsers. Sommige Nederlanders verraadden Joden of werkten voor de bezetter.", categorie: "Tweede Wereldoorlog" },
    { id: "ge_029", voorkant: "Wanneer was Nederland bezet in WO2?", achterkant: "1940–1945. In 1939 begon WO2, in 1945 was het voorbij.", categorie: "Tweede Wereldoorlog" },

    // ── Koude Oorlog ──
    { id: "ge_030", voorkant: "Wat is de Koude Oorlog?", achterkant: "Na WO2 streden de VS en Sovjet-Unie om macht. Ze vochten nooit DIRECT (dat = kernoorlog), maar WEL indirect via andere landen (1945-1991).", categorie: "Koude Oorlog" },
    { id: "ge_031", voorkant: "Kapitalisme vs. Communisme: wat is het verschil?", achterkant: "Kapitalisme (VS): vrijheid, eigen keuzes, ongelijkheid mogelijk.\nCommunisme (Sovjet-Unie): gelijkheid, staat beslist alles, iedereen verdient evenveel.", categorie: "Koude Oorlog" },
    { id: "ge_032", voorkant: "Wat was de Berlijnse Muur (1961-1989)?", achterkant: "Muur door Berlijn om te voorkomen dat Oost-Duitsers vluchtten naar het Westen. Vluchten = neergeschoten. Viel in 1989.", categorie: "Koude Oorlog" },
    { id: "ge_033", voorkant: "Wat is het IJzeren Gordijn?", achterkant: "Denkbeeldige grens door heel Europa: west = kapitalisme, oost = communisme.", categorie: "Koude Oorlog" },
    { id: "ge_034", voorkant: "Wat was de Cubacrisis (1962)?", achterkant: "Rusland zette kernraketten op Cuba (vlak bij de VS). Na 13 dagen haalde Rusland ze weg. Bijna kernoorlog!", categorie: "Koude Oorlog" },
    { id: "ge_035", voorkant: "Wat was de Vietnamoorlog (1955-1975)?", achterkant: "VS vocht in Vietnam tegen het communisme. Verloor. Vietnam werd toch communistisch.", categorie: "Koude Oorlog" },

    // ── Tijdlijn ──
    { id: "ge_036", voorkant: "Tijdlijn: Industriële Revolutie en vroege sociale wetten", achterkant: "1874 – Kinderwetje van Van Houten (kinderen <12 niet werken)", categorie: "Tijdlijn" },
    { id: "ge_037", voorkant: "Tijdlijn: Eerste Wereldoorlog", achterkant: "1914 – WO1 begint (moord Frans Ferdinand)\n1918 – WO1 eindigt\n1919 – Verdrag van Versailles", categorie: "Tijdlijn" },
    { id: "ge_038", voorkant: "Tijdlijn: Interbellum", achterkant: "1924 – Dawesplan\n1929 – Beurskrach\n1933 – Hitler aan de macht (NSDAP)", categorie: "Tijdlijn" },
    { id: "ge_039", voorkant: "Tijdlijn: Tweede Wereldoorlog", achterkant: "1939 – WO2 begint\n1940 – Nederland bezet\n1945 – WO2 eindigt", categorie: "Tijdlijn" },
    { id: "ge_040", voorkant: "Tijdlijn: Koude Oorlog", achterkant: "1961 – Berlijnse Muur gebouwd\n1962 – Cubacrisis\n1989 – Berlijnse Muur valt\n1991 – Einde Koude Oorlog", categorie: "Tijdlijn" },
  ],

  quizvragen: [
    // ── Staatsinrichting ──
    {
      id: "ge_q001", type: "meerkeuze", categorie: "Staatsinrichting",
      vraag: "Hoeveel leden heeft de Tweede Kamer?",
      opties: ["75", "100", "150", "200"],
      antwoord: "150",
      uitleg: "De Tweede Kamer heeft 150 leden. De Eerste Kamer heeft 75 leden."
    },
    {
      id: "ge_q002", type: "meerkeuze", categorie: "Staatsinrichting",
      vraag: "Wat doet de Eerste Kamer met nieuwe wetten?",
      opties: ["Schrijft de wetten", "Keurt wetten goed of af (alleen ja/nee)", "Controleert de regering", "Kiest de minister-president"],
      antwoord: "Keurt wetten goed of af (alleen ja/nee)",
      uitleg: "De Eerste Kamer kan een wet alleen aannemen of verwerpen, niet aanpassen."
    },
    {
      id: "ge_q003", type: "meerkeuze", categorie: "Staatsinrichting",
      vraag: "Wat is een coalitie?",
      opties: ["Alle partijen die niet regeren", "De partijen die samen de regering vormen", "De leden van de Eerste Kamer", "Het kabinet van ministers"],
      antwoord: "De partijen die samen de regering vormen",
      uitleg: "Coalitie = de partijen die SAMEN de regering vormen. De rest is oppositie."
    },

    // ── Industriële Revolutie ──
    {
      id: "ge_q004", type: "meerkeuze", categorie: "Industriële Revolutie",
      vraag: "Wat regelde het Kinderwetje van Van Houten in 1874?",
      opties: ["Kinderen moesten gratis naar school", "Kinderen onder de 12 mochten niet in fabrieken werken", "Vrouwen kregen stemrecht", "De werkdag werd beperkt tot 8 uur"],
      antwoord: "Kinderen onder de 12 mochten niet in fabrieken werken",
      uitleg: "Het Kinderwetje van Van Houten (1874) verbood fabrieksarbeid voor kinderen jonger dan 12 jaar."
    },
    {
      id: "ge_q005", type: "meerkeuze", categorie: "Industriële Revolutie",
      vraag: "Wat zijn vakbonden?",
      opties: ["Wetten die arbeiders beschermen", "Groepen arbeiders die samen vochten voor betere rechten", "Fabrieken van de overheid", "Partijen voor arbeiders"],
      antwoord: "Groepen arbeiders die samen vochten voor betere rechten",
      uitleg: "Vakbonden zijn groepen arbeiders die SAMEN vochten voor kortere werkdagen en loon bij ziekte."
    },

    // ── Eerste Wereldoorlog ──
    {
      id: "ge_q006", type: "meerkeuze", categorie: "Eerste Wereldoorlog",
      vraag: "Wie was de aanleiding van WO1?",
      opties: ["Adolf Hitler", "Napoleon Bonaparte", "Frans Ferdinand", "Gavrilo Princip"],
      antwoord: "Frans Ferdinand",
      uitleg: "De moord op Frans Ferdinand (kroonprins van Oostenrijk-Hongarije) in 1914 was de aanleiding. Gavrilo Princip was de dader."
    },
    {
      id: "ge_q007", type: "meerkeuze", categorie: "Eerste Wereldoorlog",
      vraag: "Wie behoorden tot de Centralen in WO1?",
      opties: ["Engeland + Frankrijk", "Duitsland + Oostenrijk-Hongarije", "VS + Rusland", "Nederland + België"],
      antwoord: "Duitsland + Oostenrijk-Hongarije",
      uitleg: "De Centralen waren Duitsland + Oostenrijk-Hongarije. De Geallieerden waren Engeland + Frankrijk + Rusland (later VS)."
    },
    {
      id: "ge_q008", type: "meerkeuze", categorie: "Eerste Wereldoorlog",
      vraag: "Wat bepaalde het Verdrag van Versailles (1919)?",
      opties: ["Duitsland won de oorlog", "Duitsland moest zwaar gestraft worden (schuld, geld, grond)", "Europa werd verdeeld in twee blokken", "De Volkenbond werd opgericht als vredesorganisatie"],
      antwoord: "Duitsland moest zwaar gestraft worden (schuld, geld, grond)",
      uitleg: "Duitsland moest enorm veel geld betalen, grond afstaan en had een klein leger. Duitsers waren WOEDEND."
    },

    // ── Interbellum ──
    {
      id: "ge_q009", type: "meerkeuze", categorie: "Interbellum",
      vraag: "Wat betekent 'interbellum'?",
      opties: ["Tussen de oorlogen", "Na de oorlog", "De koude oorlog", "De eerste wereldoorlog"],
      antwoord: "Tussen de oorlogen",
      uitleg: "Inter = tussen, bellum = oorlog. Het interbellum is de periode 1918-1939."
    },
    {
      id: "ge_q010", type: "meerkeuze", categorie: "Interbellum",
      vraag: "Wat was het Dawesplan (1924)?",
      opties: ["Een plan om Duitsland te straffen", "Amerikaans plan: leningen aan Duitsland om Versailles-schulden te betalen", "Een vredesverdrag na WO1", "Een handelsplan tussen de VS en Europa"],
      antwoord: "Amerikaans plan: leningen aan Duitsland om Versailles-schulden te betalen",
      uitleg: "Het Dawesplan (1924) gaf Duitsland leningen zodat zij hun schulden uit Versailles konden betalen. Na de beurskrach werkte het niet meer."
    },

    // ── Tweede Wereldoorlog ──
    {
      id: "ge_q011", type: "meerkeuze", categorie: "Tweede Wereldoorlog",
      vraag: "Wat is de Holocaust?",
      opties: ["De invasie van Polen in 1939", "De moord op 6 miljoen Joden door nazi-Duitsland", "De bombardementen op Londen", "De slag om Stalingrad"],
      antwoord: "De moord op 6 miljoen Joden door nazi-Duitsland",
      uitleg: "De Holocaust was de systematische moord op 6 miljoen Joden + Roma, homoseksuelen en gehandicapten."
    },
    {
      id: "ge_q012", type: "meerkeuze", categorie: "Tweede Wereldoorlog",
      vraag: "Wat is collaboratie in WO2?",
      opties: ["Geheim strijden tegen de bezetter", "Samenwerken met de Duitsers", "Vluchten naar Engeland", "Sabotage van treinen"],
      antwoord: "Samenwerken met de Duitsers",
      uitleg: "Collaboratie = samenwerken MET de vijand. Het tegenovergestelde is verzet."
    },

    // ── Koude Oorlog ──
    {
      id: "ge_q013", type: "meerkeuze", categorie: "Koude Oorlog",
      vraag: "Wanneer viel de Berlijnse Muur?",
      opties: ["1945", "1961", "1989", "1991"],
      antwoord: "1989",
      uitleg: "De Berlijnse Muur werd gebouwd in 1961 en viel in 1989. In 1991 eindigde de Koude Oorlog."
    },
    {
      id: "ge_q014", type: "meerkeuze", categorie: "Koude Oorlog",
      vraag: "Wat was de Cubacrisis (1962)?",
      opties: ["Cuba werd communist", "Rusland plaatste kernraketten op Cuba, bijna kernoorlog", "De VS veroverde Cuba", "Cuba vroeg hulp van de VS"],
      antwoord: "Rusland plaatste kernraketten op Cuba, bijna kernoorlog",
      uitleg: "Rusland zette kernraketten op Cuba (vlak bij de VS). Na 13 dagen haalde Rusland ze weg. Bijna kernoorlog!"
    },

    // ── Open vragen ──
    {
      id: "ge_q015", type: "open", categorie: "Tijdlijn",
      vraag: "In welk jaar begon de Eerste Wereldoorlog?",
      antwoord: "1914",
      uitleg: "WO1 begon in 1914 met de moord op Frans Ferdinand, en eindigde in 1918."
    },
    {
      id: "ge_q016", type: "open", categorie: "Tijdlijn",
      vraag: "In welk jaar werd de Berlijnse Muur gebouwd?",
      antwoord: "1961",
      uitleg: "De Berlijnse Muur werd gebouwd in 1961 en viel in 1989."
    },
    {
      id: "ge_q017", type: "open", categorie: "Eerste Wereldoorlog",
      vraag: "Wat was de strijd vanuit gegraven sleuven in WO1 genaamd? (één woord)",
      antwoord: "loopgravenoorlog",
      uitleg: "De loopgravenoorlog: soldaten vochten vanuit sleuven in de grond met modder, ratten en gifgas."
    },
    {
      id: "ge_q018", type: "open", categorie: "Tijdlijn",
      vraag: "In welk jaar werd Hitler leider van Duitsland?",
      antwoord: "1933",
      uitleg: "In 1933 werd Hitler (NSDAP) leider van Duitsland."
    },

    // ── Juist of onjuist ──
    {
      id: "ge_q019", type: "juistonjuist", categorie: "Staatsinrichting",
      vraag: "De Tweede Kamer heeft 75 leden.",
      antwoord: "onjuist",
      uitleg: "De Tweede Kamer heeft 150 leden. De Eerste Kamer heeft 75 leden."
    },
    {
      id: "ge_q020", type: "juistonjuist", categorie: "Koude Oorlog",
      vraag: "Tijdens de Koude Oorlog vochten de VS en Sovjet-Unie nooit direct tegen elkaar.",
      antwoord: "juist",
      uitleg: "Ze vochten nooit DIRECT (dat zou een kernoorlog betekenen), maar WEL indirect via andere landen zoals Vietnam en Korea."
    },
    {
      id: "ge_q021", type: "juistonjuist", categorie: "Tweede Wereldoorlog",
      vraag: "Verzet en collaboratie betekenen hetzelfde.",
      antwoord: "onjuist",
      uitleg: "Verzet = geheim strijden TEGEN de Duitsers. Collaboratie = samenwerken MÉT de Duitsers. Tegenovergesteld!"
    },
    {
      id: "ge_q022", type: "juistonjuist", categorie: "Industriële Revolutie",
      vraag: "Het Kinderwetje van Van Houten verbood fabrieksarbeid voor kinderen jonger dan 12 jaar.",
      antwoord: "juist",
      uitleg: "Correct! Het Kinderwetje van Van Houten (1874) verbood fabrieksarbeid voor kinderen onder de 12."
    },
  ]
};

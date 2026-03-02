const GESCHIEDENIS = {
  id: "geschiedenis",
  naam: "Geschiedenis",
  kleur: "#D4A017",
  icoon: "📜",
  afbeelding: "images/geschiedenis.jpg",

  flashcards: [
    { id: "ges_001", voorkant: "Wat is een primaire bron?", achterkant: "Een bron die gemaakt is TIJDENS of vlak na het historische event door iemand die erbij was.\nBijv: dagboek, foto uit de Tweede Wereldoorlog, originele wet.", categorie: "Bronnenanalyse" },
    { id: "ges_002", voorkant: "Wat is een secundaire bron?", achterkant: "Een bron die LATER is gemaakt, gebaseerd op andere bronnen.\nBijv: een schoolboek, een documentaire, een historisch artikel.", categorie: "Bronnenanalyse" },
    { id: "ges_003", voorkant: "De 4 vragen bij bronnenanalyse", achterkant: "1. Maker — wie heeft de bron gemaakt?\n2. Tijdstip — wanneer is de bron gemaakt?\n3. Doel — waarom is de bron gemaakt?\n4. Type — wat voor soort bron is het?", categorie: "Bronnenanalyse" },
    { id: "ges_004", voorkant: "Wat is het doel van een bron?", achterkant: "Wat wil de maker bereiken met de bron?\nMogelijkheden: informeren, overtuigen, entertainen, herdenken, propaganda.", categorie: "Bronnenanalyse" },
    { id: "ges_005", voorkant: "Wat is een oorzaak in geschiedenis?", achterkant: "Iets dat leidt tot een historisch event of verandering.\n• Directe oorzaak: de onmiddellijke aanleiding\n• Indirecte oorzaak: achterliggende factor die al langer speelt", categorie: "Oorzaak-Gevolg" },
    { id: "ges_006", voorkant: "Wat is een gevolg in geschiedenis?", achterkant: "Wat er veranderde als resultaat van een event.\n• Kortetermijngevolg: direct na het event\n• Langetermijngevolg: pas later merkbaar", categorie: "Oorzaak-Gevolg" },
    { id: "ges_007", voorkant: "Wat is een historisch perspectief?", achterkant: "De manier waarop mensen in het verleden de wereld zagen en begrepen vanuit hun eigen context, tijd en positie.", categorie: "Perspectieven" },
    { id: "ges_008", voorkant: "Waarom kijken historici naar perspectieven?", achterkant: "Om te begrijpen waarom mensen bepaalde keuzes maakten. Mensen in het verleden dachten anders dan wij nu — hun context bepaalde hun kijk.", categorie: "Perspectieven" },
    { id: "ges_009", voorkant: "Wat is BCE / vC?", achterkant: "Before Common Era / voor Christus\nJaren gaan achterwaarts richting het heden:\n500 vC is eerder dan 100 vC.", categorie: "Tijdlijn" },
    { id: "ges_010", voorkant: "Wat is CE / nC?", achterkant: "Common Era / na Christus\nJaren gaan voorwaarts richting heden:\n500 nC is eerder dan 2000 nC.", categorie: "Tijdlijn" },
    { id: "ges_011", voorkant: "Wat is propaganda?", achterkant: "Informatie (tekst, beeld, film) bedoeld om mensen te overtuigen of te manipuleren, vaak eenzijdig en emotioneel.", categorie: "Bronnenanalyse" },
    { id: "ges_012", voorkant: "Hoe herken je propaganda?", achterkant: "• Eenzijdige informatie (één kant belicht)\n• Emotionele taal of beelden\n• Selectieve feiten\n• Overdrijving of simplificatie\n• Duidelijk doel: gedrag of mening beïnvloeden", categorie: "Bronnenanalyse" },
    { id: "ges_013", voorkant: "Wat is continuïteit in geschiedenis?", achterkant: "Wat GELIJK is gebleven ondanks veranderingen. De dingen die niet veranderden tijdens een historisch event.", categorie: "Begrippen" },
    { id: "ges_014", voorkant: "Wat is verandering in geschiedenis?", achterkant: "Wat ANDERS is geworden als gevolg van een event. Het tegenovergestelde van continuïteit.", categorie: "Begrippen" },
    { id: "ges_015", voorkant: "Wat is een historisch tijdvak?", achterkant: "Een periode met een eigen karakter. De 10 tijdvakken (Nederland):\nJagers/boeren → Grieken/Romeinen → Monniken → Ridders → Steden/Staten → Ontdekkers → Regenten/Vorsten → Pruiken → Burgers/Stoommachines → Wereldoorlogen → Televisie/Computer", categorie: "Tijdlijn" },
    { id: "ges_016", voorkant: "Wat is objectiviteit bij bronnen?", achterkant: "Een bron zonder persoonlijke mening of belang beschrijft de werkelijkheid zo neutraal mogelijk. Volkomen objectiviteit bestaat niet — elke bron heeft een perspectief.", categorie: "Bronnenanalyse" },
    { id: "ges_017", voorkant: "Soorten bronnen: beeldende bron", achterkant: "Een bron in de vorm van een afbeelding:\nfoto, schilderij, poster, cartoon, tekening, standbeeld.", categorie: "Bronnenanalyse" },
    { id: "ges_018", voorkant: "Soorten bronnen: schriftelijke bron", achterkant: "Een bron in de vorm van tekst:\nbrief, wet, krant, dagboek, toespraak, verdrag.", categorie: "Bronnenanalyse" },
    { id: "ges_019", voorkant: "Hoe beoordeel je de betrouwbaarheid van een bron?", achterkant: "Kijk naar:\n• Maker (wie, wat is hun belang?)\n• Tijdstip (gelijktijdig of later?)\n• Doel (informeren of overtuigen?)\n• Type (ooggetuige of reconstructie?)", categorie: "Bronnenanalyse" },
    { id: "ges_020", voorkant: "Wat is een tijdlijn?", achterkant: "Een chronologisch overzicht van historische events, van vroeg naar laat geordend.\nHandig voor het plaatsen van events in context.", categorie: "Tijdlijn" },
  ],

  quizvragen: [
    {
      id: "ges_q001", type: "meerkeuze",
      vraag: "Wat is een primaire bron?",
      antwoord: "gemaakt ten tijde van het event", opties: ["gemaakt ten tijde van het event", "gemaakt lang na het event", "altijd objectief", "altijd betrouwbaar"],
      uitleg: "Primaire bronnen zijn gemaakt tijdens of vlak na het event door iemand die erbij was.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q002", type: "meerkeuze",
      vraag: "Welke vraag hoort NIET bij de bronnenanalyse (de 4 vragen)?",
      antwoord: "prijs", opties: ["prijs", "maker", "doel", "tijdstip"],
      uitleg: "De 4 vragen zijn: maker, tijdstip, doel, type. 'Prijs' is geen analysevraag.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q003", type: "juistonjuist",
      vraag: "Propaganda is altijd objectief.",
      antwoord: "onjuist",
      uitleg: "Propaganda is juist NIET objectief: het is eenzijdig en bedoeld om te overtuigen of manipuleren.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q004", type: "meerkeuze",
      vraag: "Wat is een direct gevolg van een historisch event?",
      antwoord: "iets wat direct na het event veranderde", opties: ["iets wat direct na het event veranderde", "een achterliggende oorzaak", "een perspectief", "een tijdvak"],
      uitleg: "Een direct (kortetermijn)gevolg is wat onmiddellijk na het event veranderde.", categorie: "Oorzaak-Gevolg"
    },
    {
      id: "ges_q005", type: "open",
      vraag: "Noem de vier vragen bij bronnenanalyse.",
      antwoord: "maker, tijdstip, doel, type",
      uitleg: "Bij elke bron vraag je: Wie maakte het? Wanneer? Waarom? En wat voor bron is het?", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q006", type: "meerkeuze",
      vraag: "Welk tijdvak ligt VOOR de Middeleeuwen?",
      antwoord: "Oudheid (Grieken en Romeinen)", opties: ["Oudheid (Grieken en Romeinen)", "Renaissance", "Nieuwe Tijd", "Moderne Tijd"],
      uitleg: "Chronologisch: Oudheid → Middeleeuwen → Renaissance/Nieuwe Tijd → Moderne Tijd.", categorie: "Tijdlijn"
    },
    {
      id: "ges_q007", type: "juistonjuist",
      vraag: "BCE-jaren (voor Christus) gaan van groot naar klein richting het heden.",
      antwoord: "juist",
      uitleg: "Ja: 500 vC is eerder dan 100 vC. Het getal wordt kleiner naarmate je dichter bij het jaar 0 komt.", categorie: "Tijdlijn"
    },
    {
      id: "ges_q008", type: "meerkeuze",
      vraag: "Wat is een historisch perspectief?",
      antwoord: "de blik van iemand vanuit hun eigen historische context", opties: ["de blik van iemand vanuit hun eigen historische context", "een tijdlijn van events", "een soort bron", "een gevolg"],
      uitleg: "Perspectief = hoe mensen in het verleden de wereld zagen vanuit hun eigen tijd en situatie.", categorie: "Perspectieven"
    },
    {
      id: "ges_q009", type: "open",
      vraag: "Wat is het verschil tussen een primaire en een secundaire bron?",
      antwoord: "primair is gemaakt tijdens het event, secundair is later gemaakt",
      uitleg: "Primair: gemaakt door ooggetuige of tijdgenoot. Secundair: gemaakt na het event, gebaseerd op primaire bronnen.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q010", type: "meerkeuze",
      vraag: "Een dagboek uit de Tweede Wereldoorlog is een voorbeeld van:",
      antwoord: "een primaire bron", opties: ["een primaire bron", "een secundaire bron", "een tertiaire bron", "geen historische bron"],
      uitleg: "Een dagboek geschreven tijdens de WOII is een primaire bron: gemaakt tijdens het event.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q011", type: "juistonjuist",
      vraag: "Continuïteit in geschiedenis betekent dat iets veranderd is.",
      antwoord: "onjuist",
      uitleg: "Continuïteit = wat GELIJK is gebleven. Verandering = wat anders is geworden.", categorie: "Begrippen"
    },
    {
      id: "ges_q012", type: "meerkeuze",
      vraag: "Wat is het doel van een propagandaposter?",
      antwoord: "mensen overtuigen of manipuleren", opties: ["mensen overtuigen of manipuleren", "neutraal informeren", "feiten documenteren", "educatie"],
      uitleg: "Propaganda is bedoeld om mensen te overtuigen, te motiveren of te manipuleren — niet om neutraal te informeren.", categorie: "Bronnenanalyse"
    },
    {
      id: "ges_q013", type: "open",
      vraag: "Leg in eigen woorden uit wat 'perspectief' betekent in geschiedenis.",
      antwoord: "hoe mensen in het verleden de wereld zagen vanuit hun eigen context",
      uitleg: "Perspectief = de blik van een persoon bepaald door hun tijd, positie, cultuur en ervaringen.", categorie: "Perspectieven"
    },
    {
      id: "ges_q014", type: "meerkeuze",
      vraag: "Een tijdlijn helpt om:",
      antwoord: "events chronologisch te ordenen", opties: ["events chronologisch te ordenen", "oorzaken te analyseren", "perspectieven te vergelijken", "bronnen te beoordelen"],
      uitleg: "Een tijdlijn ordent events in de juiste volgorde van vroeg naar laat.", categorie: "Tijdlijn"
    },
    {
      id: "ges_q015", type: "juistonjuist",
      vraag: "Een schoolboek geschreven in 2020 over de Tweede Wereldoorlog is een primaire bron.",
      antwoord: "onjuist",
      uitleg: "Nee, een schoolboek van 2020 is een SECUNDAIRE bron: het is lang na het event geschreven, gebaseerd op andere bronnen.", categorie: "Bronnenanalyse"
    },
  ]
};

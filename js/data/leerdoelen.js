// Originele leerdoelen uit de .docx bestanden — per vak, per groep
const LEERDOELEN = {

  duits: [
    {
      groep: "Leerdoelen",
      items: [
        "Je kunt de persoonlijke voornaamwoorden naar het Duits vertalen.",
        "Je kunt de persoonlijke voornaamwoorden gebruiken in Duitse zinnen.",
        "Je kunt regelmatige werkwoorden in de tegenwoordige tijd vervoegen. (wohnen, spielen, kommen, heißen, gehen)",
        "Je kunt onregelmatige werkwoorden in de tegenwoordige tijd vervoegen. (haben, sein, werden)",
        "Je kunt woorden uit alledaagse situaties (zie overzicht) vertalen naar het Duits.",
        "Je kunt woorden uit alledaagse situaties (zie overzicht) toepassen in Duitse zinnen.",
        "Je kunt uitleggen wat der, die en das zijn en voor alle drie met 2 regels uitleggen wanneer deze gebruikt worden.",
        "Je kunt eenvoudige teksten lezen en vragen daarbij beantwoorden.",
        "Je kunt een kort verhaaltje over een onderwerp in het Duits schrijven.",
        "Je kunt jezelf in tien zinnen voorstellen in het Duits.",
      ]
    },
    {
      groep: "Woordenschat — thema's",
      items: [
        "Familie: der Vater, die Mutter, die Schwester, der Bruder, die Eltern, die Oma, der Opa, die Tante, der Onkel, der Cousin, die Cousine",
        "School: die Schule, der Lehrer, die Schülerin, die Klasse, die Stunde, die Pause, die Hausaufgabe, das Fach, der Test, das Heft",
        "Wonen: das Haus, die Wohnung, das Zimmer, das Bett, der Tisch, der Stuhl, das Fenster, die Tür, der Garten, die Straße",
        "Eten & drinken: das Brot, das Wasser, der Saft, der Tee, der Kaffee, der Apfel, die Banane, das Gemüse, das Fleisch, die Suppe",
        "Vrije tijd: der Fußball, die Musik, das Spiel, das Buch, das Schwimmen, das Fahrrad, der Urlaub, das Hobby, der Freund, das Wochenende",
        "Kleding: die Hose, das Shirt, das Kleid, die Jacke, der Mantel, die Schuhe, die Farbe, die Größe, tragen, kaufen",
        "Weer: die Sonne, der Regen, der Schnee, der Sturm, warm, kalt, wolkig, windig",
        "Stad & winkels: der Laden, das Geschäft, der Supermarkt, die Bäckerei, die Stadt, der Platz, die Straße, der Markt, das Rathaus, das Kaufhaus",
        "Kleuren & vormen: rot, blau, grün, gelb, schwarz, weiß, grau, groß, klein",
        "Sport & activiteiten: laufen, schwimmen, tanzen, zeichnen, spielen, trainieren, der Ball, das Team, das Tor",
        "Dieren: der Hund, die Katze, das Pferd, der Vogel, der Fisch, die Maus, die Kuh, das Schaf, der Hase, der Bär",
        "Technologie: der Computer, das Handy, das Tablet, die Tastatur, die Maus, der Bildschirm, das Internet, die E-Mail, das Spiel, die App",
      ]
    }
  ],

  biologie: [
    {
      groep: "Ecologie",
      items: [
        "Je kunt de voedselrelaties tussen organismen beschrijven.",
        "Je kunt beschrijven dat bij fotosynthese energierijke stoffen worden gevormd uit energiearme stoffen, en hoe bij verbranding die energie weer vrijkomt. En in welke organismen deze processen plaatsvinden.",
      ]
    },
    {
      groep: "Organen en cellen",
      items: [
        "Uitleggen wat een organisme is en levenskenmerken noemen.",
        "Beschrijven wat een cel, weefsel, orgaan en orgaanstelsel is. Voorbeelden geven van verschillende orgaanstelsels en hoe zij voor elkaar van belang zijn.",
      ]
    },
    {
      groep: "Voortplanting",
      items: [
        "Onderdelen van het voortplantingsstelsel van een man noemen en hun functie.",
        "Onderdelen van het voortplantingsstelsel van een vrouw noemen en hun functie.",
        "Het verschil tussen primaire en secundaire geslachtskenmerken noemen en voorbeelden ervan geven.",
      ]
    },
    {
      groep: "Erfelijkheid",
      items: [
        "Uitleggen wat erfelijke eigenschappen zijn.",
      ]
    },
    {
      groep: "Ordening",
      items: [
        "Onderdelen van een dierlijke cel, plantaardige cel, schimmelcel en bacteriële cel noemen en de verschillen in bouw tussen deze cellen.",
        "Het rijk van de dieren indelen in geleedpotigen en gewervelden en daarbij kenmerken van deze groepen omschrijven. Per groep kun je subgroepen en hun kenmerken noemen.",
        "Het rijk van de planten indelen in kleinere groepen en daarbij hun kenmerken noemen.",
      ]
    },
    {
      groep: "Stevigheid en beweging",
      items: [
        "De botten in een afbeelding van het skelet en de functies van het skelet noemen.",
        "Kraakbeenweefsel en beenweefsel herkennen in een afbeelding en de verschillen benoemen.",
        "Vier beenverbindingen noemen.",
      ]
    },
    {
      groep: "Bloemen, vruchten en zaden",
      items: [
        "De kenmerken van windbestuiving en insectenbestuiving benoemen.",
        "Onderdelen van een zaadplant (blad, stengel, wortels en bloem) herkennen in een afbeelding en hun functie benoemen.",
        "Het verschil tussen geslachtelijke en ongeslachtelijke voortplanting benoemen.",
      ]
    },
    {
      groep: "Bloedsomloop",
      items: [
        "De onderdelen van het hart benoemen.",
        "Kenmerken en verschillen tussen een slagader, ader en haarvat benoemen.",
      ]
    },
    {
      groep: "Voeding en vertering",
      items: [
        "De onderdelen van het spijsverteringsstelsel en hun functie benoemen.",
      ]
    },
  ],

  nask: [
    {
      groep: "1 — Algemeen",
      items: [
        "1.1 Je kunt beschrijven waar natuurwetenschappen over gaan.",
        "1.2 Je kunt met voorbeelden het verschil tussen natuurkunde en scheikunde uitleggen.",
        "1.3 Je kunt uitleggen wat de wetenschappelijke methode is.",
        "1.4 Je kunt beschrijven wat een grootheid en wat een eenheid is.",
        "1.5 Je kunt het volume van een rechthoekig voorwerp berekenen.",
        "1.6 Je kunt rekenen met het metriek stelsel (voor lengte, oppervlakte en volume-eenheden).",
      ]
    },
    {
      groep: "2 — Thema elektriciteit",
      items: [
        "2.1 Je kunt uitleggen hoe je een gesloten stroomkring maakt.",
        "2.2 Je kunt het verschil tussen geleiders en isolatoren beschrijven.",
        "2.3 Je kunt een aantal geleiders en isolatoren benoemen.",
        "2.4 Je kunt uitleggen wat stroomsterkte is en hoe deze gemeten wordt.",
        "2.5 Je kunt een aantal spanningsbronnen benoemen.",
        "2.6 Je kunt de spanning berekenen als je batterijen in serie schakelt.",
        "2.7 Je kunt uitleggen wat spanning is en hoe deze gemeten wordt.",
        "2.8 Je kunt de symbolen benoemen die je gebruikt om een schakelschema te maken.",
        "2.9 Je kunt het verschil uitleggen tussen een serie- en parallelschakeling.",
        "2.10 Je kunt het schakelschema tekenen van eenvoudige serie- en parallelschakelingen.",
        "2.11 Je kunt uitleggen waarom elektrische apparaten bijna altijd parallel geschakeld worden.",
        "2.12 Je kunt de grootte van de stroomsterkte beredeneren in een schakeling.",
        "2.13 Je kunt uitleggen wat het vermogen van een apparaat is.",
        "2.14 Je kunt het vermogen van een apparaat berekenen.",
        "2.15 Je kunt uitleggen waarom een apparaat met een groter vermogen meer elektrische energie verbruikt.",
      ]
    },
    {
      groep: "3 — Thema beweging",
      items: [
        "3.1 Je kunt uitleggen op welke manieren je een beweging kunt vastleggen.",
        "3.2 Je kunt een afstand-tijdtabel invullen.",
        "3.3 Je kunt een afstand-tijddiagram tekenen.",
        "3.4 Je kunt een afstand-tijddiagram aflezen.",
        "3.5 Je kunt de gemiddelde snelheid van een voorwerp berekenen.",
        "3.6 Je kunt snelheid in m/s omrekenen naar km/h en omgekeerd.",
        "3.7 Je kunt de afstand berekenen die een voorwerp in een bepaalde tijd aflegt.",
        "3.8 Je kunt uitleggen wat er gebeurt met de snelheid bij een eenparige, versnelde en vertraagde beweging.",
        "3.9 Je kunt het afstand-tijddiagram van een eenparige, versnelde en vertraagde beweging herkennen en aflezen.",
        "3.10 Je kunt uitleggen wat de remweg is en waarvan de remweg afhangt.",
        "3.11 Je kunt uitleggen wat bedoeld wordt met de reactietijd en de reactie-afstand.",
        "3.12 Je kunt de stopafstand van een auto berekenen.",
      ]
    },
  ],

  engels: [
    {
      groep: "1 — Leesvaardigheid",
      items: [
        "Korte, eenvoudige teksten begrijpen (bijv. e-mails, appjes, advertenties, websites).",
        "De hoofdgedachte uit een tekst halen.",
        "Specifieke informatie vinden in een tekst.",
        "Bekende woorden en eenvoudige zinnen herkennen.",
      ]
    },
    {
      groep: "2 — Luistervaardigheid",
      items: [
        "Eenvoudige gesprekken en korte audio- en videofragmenten begrijpen.",
        "De hoofdzaak van gesproken Engels volgen.",
        "Informatie herkennen zoals tijd, plaats, personen en onderwerp.",
        "Instructies en vragen begrijpen.",
      ]
    },
    {
      groep: "3 — Spreekvaardigheid",
      items: [
        "Eenvoudige gesprekken voeren over vertrouwde onderwerpen (bijv. hobby's, school, familie).",
        "Korte antwoorden geven op vragen.",
        "Jezelf voorstellen en informatie over jezelf geven.",
        "Eenvoudige zinnen gebruiken met correcte uitspraak (begrijpelijk Engels).",
      ]
    },
    {
      groep: "4 — Gespreksvaardigheid (interactie)",
      items: [
        "Reageren op eenvoudige vragen.",
        "Een kort gesprek beginnen en afronden.",
        "Aangeven of je iets wel of niet begrijpt.",
        "Eenvoudige meningen en voorkeuren uitdrukken.",
      ]
    },
    {
      groep: "5 — Schrijfvaardigheid",
      items: [
        "Korte, eenvoudige teksten schrijven (bijv. een e-mail, kaartje of bericht).",
        "Zinnen maken over bekende onderwerpen.",
        "Basisgrammatica toepassen (woordvolgorde, tegenwoordige tijd).",
        "Veelvoorkomende woorden correct spellen.",
      ]
    },
    {
      groep: "6 — Woordenschat",
      items: [
        "Basiswoordenschat rond thema's als: persoonlijke gegevens, school, vrije tijd, eten, wonen, reizen.",
        "Veelvoorkomende vaste uitdrukkingen.",
        "Eenvoudige verbindingswoorden (and, but, because).",
      ]
    },
    {
      groep: "7 — Grammatica",
      items: [
        "Tegenwoordige tijd (present simple).",
        "Verleden tijd (past simple).",
        "Present perfect.",
        "Present continuous.",
        "Past continuous.",
        "Persoonlijke voornaamwoorden.",
        "Meervoudsvormen.",
        "Vraagzinnen en ontkenningen.",
        "Basiszinnen met to be en to have.",
        "Woordvolgorde.",
        "Tellen en klokkijken.",
      ]
    },
    {
      groep: "8 — Cultuur en taalbewustzijn",
      items: [
        "Je kent Engelse en Engelstalige culturen.",
        "Je begrijpt dat Engels wereldwijd wordt gebruikt.",
        "Je leert omgaan met verschillen tussen Nederlands en Engels.",
      ]
    },
  ],

  economie: [
    {
      groep: "Leerdoelen",
      items: [
        "Je kunt met grote getallen en decimalen optellen en aftrekken.",
        "Je kunt een procentuele verandering berekenen.",
        "Je kunt het percentage van deel door het geheel uitrekenen.",
        "Je weet dat je euro's op 2 decimalen achter de komma moet afronden.",
      ]
    },
  ],

  geschiedenis: [
    {
      groep: "Onderbouw",
      items: [
        "Ik kan een historische vraag beantwoorden met behulp van minimaal twee bronnen, waarbij ik in mijn eigen woorden uitleg wat de bronnen zeggen en hoe ze mijn antwoord ondersteunen.",
        "Ik kan bij een bron minstens twee kenmerken (maker, tijd, doel of soort bron) benoemen en uitleggen wat dit zegt over de betrouwbaarheid van de bron.",
        "Ik kan bij een historische gebeurtenis minstens één oorzaak en één gevolg benoemen en uitleggen hoe deze met elkaar samenhangen.",
        "Ik kan belangrijke gebeurtenissen uit de behandelde thema's globaal in de tijd plaatsen en aangeven wat er ervoor en erna gebeurde.",
        "Ik kan zelfstandig aan een challenge werken, waarin ik een historisch onderwerp onderzoek, tussentijds feedback vraag en mijn eindproduct binnen de afgesproken tijd oplever.",
      ]
    },
    {
      groep: "Bovenbouw",
      items: [
        "Ik kan een historische vraag beantwoorden met minimaal twee verschillende bronnen, waarbij ik informatie vergelijk en afweeg om tot een onderbouwde conclusie te komen.",
        "Ik kan de betrouwbaarheid en bruikbaarheid van bronnen beoordelen door maker, doel, tijd en perspectief te analyseren en dit schriftelijk te verantwoorden.",
        "Ik kan meerdere oorzaken en gevolgen van een historische ontwikkeling analyseren en uitleggen hoe deze elkaar beïnvloeden op korte en lange termijn.",
        "Ik kan bij een historisch onderwerp verschillende perspectieven herkennen en uitleggen hoe deze invloed hebben op de manier waarop geschiedenis wordt verteld.",
        "Ik kan een historische opdracht of toets plannen, uitvoeren en afronden, waarbij ik reflecteer op mijn leerproces, mijn brongebruik en de keuzes die ik heb gemaakt.",
      ]
    },
  ],

};

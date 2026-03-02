# Leerdoelen Oefenen — Bovenbouw

Een statische website waarmee leerlingen kunnen oefenen met flashcards en quizzen voor meerdere vakken. Geen installatie of server nodig — werkt direct in de browser.

## Vakken

| Vak | Flashcards | Quizvragen |
|-----|-----------|------------|
| Duits | 20 | 15 |
| Biologie | 20 | 15 |
| NaSk (elektriciteit & beweging) | 27 | 15 |
| Engels | 20 | 15 |
| Economie | 20 | 15 |
| Geschiedenis | 20 | 15 |

## Functies

- **Flashcards** — 3D flip-animatie, kaarten indelen als "gekend" of "nog oefenen", onbekende kaarten herhalen
- **Meerkeuze quiz** — 4 antwoordopties, directe feedback met uitleg
- **Open vragen** — typ je antwoord in, automatisch nagekeken (hoofdletterongevoelig)
- **Juist of Onjuist** — waar/niet-waar vragen
- **Categorie-filters** — oefen gericht op een deelonderwerp
- **Scoregeschiedenis** — beste scores worden lokaal opgeslagen in de browser

## Gebruik

Open `index.html` direct in een browser. Er is geen build-stap, server of installatie nodig.

## Hosten op GitHub Pages

1. Push de repository naar GitHub
2. Ga naar **Settings → Pages**
3. Stel in: **Source → Deploy from branch → `main`, map `/` (root)**
4. De site is beschikbaar op `https://[gebruikersnaam].github.io/[repo-naam]/`

## Afbeeldingen

De map `images/` is leeg in deze repository. Voeg zelf afbeeldingen toe — zie `AFBEELDINGEN.md` voor instructies (dit bestand staat lokaal, niet in de repo).

Zonder afbeeldingen werkt de site gewoon: vakkaarten krijgen dan een gekleurde achtergrond.

## Bestandsstructuur

```
index.html          # Enkel HTML-bestand (SPA)
css/
  main.css          # Layout, navigatie, vak-raster
  flashcard.css     # 3D flip-animatie
  quiz.css          # Quiz-UI en feedbackstijlen
js/
  app.js            # Router, navigatie, vakken-overzicht
  flashcard.js      # Flashcard-logica
  quiz.js           # Quiz-engine
  score.js          # Scores opslaan in localStorage
  data/
    duits.js
    biologie.js
    nask.js
    engels.js
    economie.js
    geschiedenis.js
images/             # Afbeeldingen (zelf toevoegen, zie AFBEELDINGEN.md)
```

## Inhoud aanpassen

Alle flashcards en quizvragen staan in `js/data/`. Elk bestand volgt dit schema:

```javascript
const DUITS = {
  id: "duits",
  naam: "Duits",
  kleur: "#4A90D9",
  icoon: "🇩🇪",
  flashcards: [
    { id: "du_001", voorkant: "...", achterkant: "...", categorie: "..." },
  ],
  quizvragen: [
    {
      id: "du_q001",
      type: "meerkeuze",        // "meerkeuze" | "open" | "juistonjuist"
      vraag: "...",
      antwoord: "...",
      opties: ["...", "...", "...", "..."],  // alleen bij meerkeuze
      uitleg: "...",
      categorie: "...",
    },
  ]
};
```

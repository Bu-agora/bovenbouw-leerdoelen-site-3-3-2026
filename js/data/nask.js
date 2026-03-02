const NASK = {
  id: "nask",
  naam: "NaSk",
  kleur: "#8E44AD",
  icoon: "⚡",
  afbeelding: "images/nask.jpg",

  flashcards: [
    // --- ELEKTRICITEIT ---
    { id: "nask_001", voorkant: "Wat is een gesloten circuit?", achterkant: "Een circuit waarbij de stroom een complete weg heeft van de + pool naar de − pool door een geleider.", categorie: "Elektriciteit" },
    { id: "nask_002", voorkant: "Wat is een geleider?", achterkant: "Een materiaal dat elektrische stroom goed doorlaat.\nVoorbeelden: koper, ijzer, aluminium, grafiet.", categorie: "Elektriciteit" },
    { id: "nask_003", voorkant: "Wat is een isolator?", achterkant: "Een materiaal dat elektrische stroom slecht of niet doorlaat.\nVoorbeelden: rubber, plastic, glas, hout.", categorie: "Elektriciteit" },
    { id: "nask_004", voorkant: "Eenheid van stroomsterkte", achterkant: "Ampère (A)\nGemeten met een amperemeter, geplaatst in serie.", categorie: "Elektriciteit" },
    { id: "nask_005", voorkant: "Eenheid van spanning", achterkant: "Volt (V)\nGemeten met een voltmeter, geplaatst parallel.", categorie: "Elektriciteit" },
    { id: "nask_006", voorkant: "Eenheid van weerstand", achterkant: "Ohm (Ω)\nWet van Ohm: R = U / I", categorie: "Elektriciteit" },
    { id: "nask_007", voorkant: "Formule vermogen", achterkant: "P = U × I\nVermogen (W) = Spanning (V) × Stroomsterkte (A)", categorie: "Elektriciteit" },
    { id: "nask_008", voorkant: "Wat is een serieschakeling?", achterkant: "Alle componenten staan achter elkaar:\n• Zelfde stroomsterkte door elk onderdeel\n• Spanning verdeelt zich over de onderdelen\n• Uitval van 1 onderdeel = hele kring valt uit", categorie: "Elektriciteit" },
    { id: "nask_009", voorkant: "Wat is een parallelschakeling?", achterkant: "Componenten staan naast elkaar (meerdere takken):\n• Zelfde spanning over elk onderdeel\n• Stroom verdeelt zich over de takken\n• Uitval van 1 onderdeel = rest blijft werken", categorie: "Elektriciteit" },
    { id: "nask_010", voorkant: "Schemateken: lamp", achterkant: "Cirkel met een X erin (⊗)\nOf: cirkel met diagonale lijn", categorie: "Schematekens" },
    { id: "nask_011", voorkant: "Schemateken: batterij", achterkant: "Twee verticale lijnen:\nLange dunne lijn = pluspol (+)\nKorte dikke lijn = minpol (−)", categorie: "Schematekens" },
    { id: "nask_012", voorkant: "Schemateken: weerstand", achterkant: "Een rechthoek (□)\nOf: een zigzaglijn (Amerikaans)", categorie: "Schematekens" },
    { id: "nask_013", voorkant: "Wet van Ohm", achterkant: "U = I × R\nSpanning (V) = Stroomsterkte (A) × Weerstand (Ω)", categorie: "Elektriciteit" },
    { id: "nask_014", voorkant: "Wat is kortsluiting?", achterkant: "Stroom neemt een weg met bijna geen weerstand → zeer hoge stroomsterkte → gevaarlijk (brand, schade).", categorie: "Elektriciteit" },
    { id: "nask_015", voorkant: "Wat doet een zekering?", achterkant: "Beschermt het circuit bij te hoge stroomsterkte: de zekering smelt door en verbreekt de kring.", categorie: "Elektriciteit" },
    // --- BEWEGING ---
    { id: "nask_016", voorkant: "Formule voor snelheid", achterkant: "v = s / t\nSnelheid (m/s of km/h) = Afstand (m) / Tijd (s)", categorie: "Beweging" },
    { id: "nask_017", voorkant: "Hoe reken je km/h om naar m/s?", achterkant: "Deel door 3,6\nBijv: 72 km/h ÷ 3,6 = 20 m/s", categorie: "Beweging" },
    { id: "nask_018", voorkant: "Hoe reken je m/s om naar km/h?", achterkant: "Vermenigvuldig met 3,6\nBijv: 15 m/s × 3,6 = 54 km/h", categorie: "Beweging" },
    { id: "nask_019", voorkant: "Wat is eenparige beweging?", achterkant: "Beweging met constante snelheid en rechte lijn.\nOp een weg-tijdgrafiek: een rechte diagonale lijn.", categorie: "Beweging" },
    { id: "nask_020", voorkant: "Wat is versnelde beweging?", achterkant: "De snelheid neemt toe.\nOp een weg-tijdgrafiek: een steeds steiler wordende lijn.", categorie: "Beweging" },
    { id: "nask_021", voorkant: "Wat is vertraagde beweging?", achterkant: "De snelheid neemt af.\nOp een weg-tijdgrafiek: een steeds vlakker wordende lijn.", categorie: "Beweging" },
    { id: "nask_022", voorkant: "Wat is reactietijd?", achterkant: "De tijd tussen het waarnemen van een gevaar en het begin van remmen.\nTypisch: 0,5 – 1 seconde.", categorie: "Beweging" },
    { id: "nask_023", voorkant: "Wat is de remweg?", achterkant: "De afstand die een voertuig aflegt tijdens het remmen (van begin remmen tot stilstand).", categorie: "Beweging" },
    { id: "nask_024", voorkant: "Wat is de stopafstand?", achterkant: "Stopafstand = reactieweg + remweg\nReactieweg = v × reactietijd", categorie: "Beweging" },
    { id: "nask_025", voorkant: "Hoe lees je een weg-tijdgrafiek?", achterkant: "• Steil = hoge snelheid\n• Vlak (horizontaal) = stilstand\n• Rechte lijn = constante snelheid\n• Gebogen lijn = snelheidsverandering", categorie: "Beweging" },
    { id: "nask_026", voorkant: "Bereken: v = 10 m/s, t = 5 s. Wat is de afstand?", achterkant: "s = v × t = 10 × 5 = 50 m", categorie: "Beweging" },
    { id: "nask_027", voorkant: "Eenheden van afstand en tijd", achterkant: "Afstand: meter (m) of kilometer (km)\nTijd: seconde (s), minuut (min) of uur (h)", categorie: "Beweging" },
  ],

  quizvragen: [
    {
      id: "nask_q001", type: "meerkeuze",
      vraag: "Een auto rijdt 90 km/h. Wat is dit in m/s?",
      antwoord: "25 m/s", opties: ["25 m/s", "20 m/s", "30 m/s", "15 m/s"],
      uitleg: "90 ÷ 3,6 = 25 m/s", categorie: "Beweging"
    },
    {
      id: "nask_q002", type: "meerkeuze",
      vraag: "P = U × I staat voor:",
      antwoord: "vermogen = spanning × stroomsterkte", opties: ["vermogen = spanning × stroomsterkte", "snelheid = weg × tijd", "weerstand = spanning / stroom", "spanning = weerstand × stroom"],
      uitleg: "P = U × I: Vermogen (Watt) = Spanning (Volt) × Stroomsterkte (Ampère).", categorie: "Elektriciteit"
    },
    {
      id: "nask_q003", type: "juistonjuist",
      vraag: "Bij een serieschakeling is de stroomsterkte door elk onderdeel gelijk.",
      antwoord: "juist",
      uitleg: "Ja, in een serie-kring stroomt door elk onderdeel dezelfde stroom. De spanning verdeelt zich.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q004", type: "juistonjuist",
      vraag: "Bij een parallelschakeling valt de hele schakeling uit als 1 lamp kapot gaat.",
      antwoord: "onjuist",
      uitleg: "Nee, bij een parallelschakeling heeft elke tak een eigen pad. Als 1 lamp uitvalt blijven de andere werken.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q005", type: "meerkeuze",
      vraag: "Wat is de eenheid van elektrische weerstand?",
      antwoord: "Ohm (Ω)", opties: ["Ohm (Ω)", "Volt (V)", "Ampère (A)", "Watt (W)"],
      uitleg: "Weerstand wordt gemeten in Ohm (Ω). R = U / I.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q006", type: "open",
      vraag: "Bereken de snelheid: een fiets legt 300 m af in 60 seconden.",
      antwoord: "5 m/s",
      uitleg: "v = s / t = 300 / 60 = 5 m/s", categorie: "Beweging"
    },
    {
      id: "nask_q007", type: "meerkeuze",
      vraag: "Wat is de stopafstand van een auto?",
      antwoord: "reactieweg + remweg", opties: ["reactieweg + remweg", "alleen de remweg", "alleen de reactieweg", "rijsnelheid × tijd"],
      uitleg: "Stopafstand = reactieweg (v × reactietijd) + remweg (tijdens remmen).", categorie: "Beweging"
    },
    {
      id: "nask_q008", type: "juistonjuist",
      vraag: "Een amperemeter moet parallel worden geplaatst in een circuit.",
      antwoord: "onjuist",
      uitleg: "Een amperemeter wordt IN SERIE geplaatst. Een voltmeter wordt parallel geplaatst.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q009", type: "meerkeuze",
      vraag: "Welk materiaal is een isolator?",
      antwoord: "rubber", opties: ["rubber", "koper", "ijzer", "aluminium"],
      uitleg: "Rubber is een isolator: het geleidt geen stroom. Koper, ijzer en aluminium zijn geleiders.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q010", type: "open",
      vraag: "Geef de formule voor vermogen.",
      antwoord: "P = U × I",
      uitleg: "Vermogen (P) in Watt = Spanning (U) in Volt × Stroomsterkte (I) in Ampère.", categorie: "Elektriciteit"
    },
    {
      id: "nask_q011", type: "meerkeuze",
      vraag: "Een horizontale lijn op een weg-tijdgrafiek betekent:",
      antwoord: "stilstand", opties: ["stilstand", "constante hoge snelheid", "versnelling", "vertraging"],
      uitleg: "Horizontaal op een weg-tijdgrafiek = geen verandering van positie = stilstand.", categorie: "Beweging"
    },
    {
      id: "nask_q012", type: "juistonjuist",
      vraag: "Als de snelheid verdubbelt, verdubbelt de remweg ook.",
      antwoord: "onjuist",
      uitleg: "Nee! De remweg verviervoudigt bij dubbele snelheid (remweg is evenredig met v²).", categorie: "Beweging"
    },
    {
      id: "nask_q013", type: "meerkeuze",
      vraag: "Welk schemateken stelt een weerstand voor?",
      antwoord: "een rechthoek", opties: ["een rechthoek", "een cirkel met X", "twee lijnen", "een driehoek"],
      uitleg: "Een weerstand wordt weergegeven als een rechthoek in een schakelschema.", categorie: "Schematekens"
    },
    {
      id: "nask_q014", type: "open",
      vraag: "Reken 36 km/h om naar m/s.",
      antwoord: "10 m/s",
      uitleg: "36 ÷ 3,6 = 10 m/s", categorie: "Beweging"
    },
    {
      id: "nask_q015", type: "meerkeuze",
      vraag: "Wat doet een zekering in een elektrisch circuit?",
      antwoord: "beschermt bij te hoge stroomsterkte", opties: ["beschermt bij te hoge stroomsterkte", "vergroot de spanning", "meet de stroom", "slaat energie op"],
      uitleg: "Een zekering smelt door bij te hoge stroom en verbreekt daarmee de kring — dit voorkomt brand.", categorie: "Elektriciteit"
    },
  ]
};

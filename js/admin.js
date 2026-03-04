// =============================================================================
// ADMIN.JS — Beveiligd beheerpaneel
// PIN aanpassen: wijzig de waarde hieronder
// =============================================================================
const ADMIN_PIN = "2012";

let adminIngevoerd = "";
let adminIngelogd = false;
let adminData = null; // bewerkbare kopie van INHOUD

// --- PIN invoer ---
function adminPinInvoer(cijfer) {
  if (adminIngevoerd.length >= 4) return;
  adminIngevoerd += cijfer;
  adminPinTekenen();
  if (adminIngevoerd.length === 4) {
    setTimeout(adminPinControleren, 200);
  }
}

function adminPinWis() {
  adminIngevoerd = adminIngevoerd.slice(0, -1);
  adminPinTekenen();
  document.getElementById("admin-fout").hidden = true;
}

function adminPinTekenen() {
  const dots = document.querySelectorAll("#admin-pin-dots span");
  dots.forEach((d, i) => {
    d.classList.toggle("gevuld", i < adminIngevoerd.length);
  });
}

function adminPinControleren() {
  if (adminIngevoerd === ADMIN_PIN) {
    adminIngelogd = true;
    document.getElementById("admin-login").hidden = true;
    document.getElementById("admin-panel").hidden = false;
    adminLaadData();
    adminRenderEditor();
  } else {
    document.getElementById("admin-fout").hidden = false;
    adminIngevoerd = "";
    adminPinTekenen();
  }
}

function adminUitloggen() {
  adminIngelogd = false;
  adminIngevoerd = "";
  adminData = null;
  document.getElementById("admin-login").hidden = false;
  document.getElementById("admin-panel").hidden = true;
  document.getElementById("admin-fout").hidden = true;
  adminPinTekenen();
  navigeerNaar("#home");
}

// --- Data ---
function adminLaadData() {
  adminData = {};
  ALLE_VAKKEN.forEach(vak => {
    adminData[vak.id] = {
      flashcards: vak.flashcards.map(fc => ({
        v: fc.voorkant,
        a: fc.achterkant,
        cat: fc.categorie
      })),
      vragen: vak.quizvragen.map(q => ({
        type: q.type,
        vraag: q.vraag,
        antwoord: q.antwoord,
        fouten: q.opties ? q.opties.filter(o => o !== q.antwoord) : [],
        uitleg: q.uitleg || "",
        cat: q.categorie
      }))
    };
  });
}

// --- Editor renderen ---
const VAK_META = [
  { id: "duits",       naam: "Duits",       icoon: "🇩🇪" },
  { id: "biologie",    naam: "Biologie",    icoon: "🌿" },
  { id: "nask",        naam: "NaSk",        icoon: "⚡" },
  { id: "engels",      naam: "Engels",      icoon: "🇬🇧" },
  { id: "economie",    naam: "Economie",    icoon: "💶" },
  { id: "geschiedenis",naam: "Geschiedenis",icoon: "📜" },
];

function adminRenderEditor() {
  const container = document.getElementById("admin-editor");
  container.innerHTML = VAK_META.map(v => adminRenderVak(v)).join("");
}

function adminRenderVak(meta) {
  const vak = adminData[meta.id];
  if (!vak) return "";
  return `
    <details class="admin-vak-details" open>
      <summary class="admin-vak-summary">${meta.icoon} ${meta.naam}</summary>
      <div class="admin-vak-inhoud">
        <h3 class="admin-sub-titel">Flashcards (${vak.flashcards.length})</h3>
        <div class="admin-tabel-wrapper">
          <table class="admin-tabel">
            <thead><tr><th>#</th><th>Voorkant (vraag)</th><th>Achterkant (antwoord)</th><th>Categorie</th></tr></thead>
            <tbody>
              ${vak.flashcards.map((fc, i) => `
                <tr>
                  <td class="admin-nr">${i + 1}</td>
                  <td><div class="admin-cel" contenteditable="true"
                    data-vak="${meta.id}" data-deel="flashcards" data-i="${i}" data-veld="v"
                    oninput="adminBewerk(this)">${escHtml(fc.v)}</div></td>
                  <td><div class="admin-cel" contenteditable="true"
                    data-vak="${meta.id}" data-deel="flashcards" data-i="${i}" data-veld="a"
                    oninput="adminBewerk(this)">${escHtml(fc.a)}</div></td>
                  <td><div class="admin-cel" contenteditable="true"
                    data-vak="${meta.id}" data-deel="flashcards" data-i="${i}" data-veld="cat"
                    oninput="adminBewerk(this)">${escHtml(fc.cat)}</div></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>

        <h3 class="admin-sub-titel" style="margin-top:24px">Quizvragen (${vak.vragen.length})</h3>
        <div class="admin-vragen-lijst">
          ${vak.vragen.map((q, i) => adminRenderVraag(meta.id, q, i)).join("")}
        </div>
      </div>
    </details>`;
}

function adminRenderVraag(vakId, q, i) {
  const typeBadge = { meerkeuze: "MK", open: "Open", juistonjuist: "J/O" }[q.type] || q.type;
  const foutenHtml = q.type === "meerkeuze"
    ? `<div class="admin-veld-groep">
        <label>Foute opties (3 stuks, kommagescheiden)</label>
        <div class="admin-cel admin-cel-breed" contenteditable="true"
          data-vak="${vakId}" data-deel="vragen" data-i="${i}" data-veld="fouten"
          oninput="adminBewerk(this)">${escHtml((q.fouten || []).join(", "))}</div>
      </div>` : "";

  return `
    <div class="admin-vraag-kaart">
      <div class="admin-vraag-header">
        <span class="admin-type-badge admin-type-${q.type}">${typeBadge}</span>
        <span class="admin-vraag-nr">Vraag ${i + 1}</span>
      </div>
      <div class="admin-veld-rij">
        <div class="admin-veld-groep admin-veld-breed">
          <label>Vraag / Stelling</label>
          <div class="admin-cel admin-cel-breed" contenteditable="true"
            data-vak="${vakId}" data-deel="vragen" data-i="${i}" data-veld="vraag"
            oninput="adminBewerk(this)">${escHtml(q.vraag)}</div>
        </div>
        <div class="admin-veld-groep">
          <label>Juist antwoord</label>
          <div class="admin-cel" contenteditable="true"
            data-vak="${vakId}" data-deel="vragen" data-i="${i}" data-veld="antwoord"
            oninput="adminBewerk(this)">${escHtml(q.antwoord)}</div>
        </div>
      </div>
      ${foutenHtml}
      <div class="admin-veld-rij">
        <div class="admin-veld-groep admin-veld-breed">
          <label>Uitleg (na het antwoord)</label>
          <div class="admin-cel" contenteditable="true"
            data-vak="${vakId}" data-deel="vragen" data-i="${i}" data-veld="uitleg"
            oninput="adminBewerk(this)">${escHtml(q.uitleg || "")}</div>
        </div>
        <div class="admin-veld-groep">
          <label>Categorie</label>
          <div class="admin-cel" contenteditable="true"
            data-vak="${vakId}" data-deel="vragen" data-i="${i}" data-veld="cat"
            oninput="adminBewerk(this)">${escHtml(q.cat)}</div>
        </div>
      </div>
    </div>`;
}

// --- Bewerkingen bijhouden ---
function adminBewerk(el) {
  const { vak, deel, i, veld } = el.dataset;
  const idx = parseInt(i);
  const waarde = el.innerText;

  if (deel === "flashcards") {
    adminData[vak].flashcards[idx][veld] = waarde;
  } else if (deel === "vragen") {
    if (veld === "fouten") {
      adminData[vak].vragen[idx].fouten = waarde.split(",").map(s => s.trim()).filter(Boolean);
    } else {
      adminData[vak].vragen[idx][veld] = waarde;
    }
  }
}

// --- Download export ---
function adminDownload() {
  const json = JSON.stringify(adminData, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "leerdoelen-export.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- Hulpfunctie ---
function escHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Score tracking using localStorage
const SCORE_KEY = "leerdoelen_scores_v1";

function laadScores() {
  try {
    return JSON.parse(localStorage.getItem(SCORE_KEY)) || {};
  } catch {
    return {};
  }
}

function slaScoreOp(vakId, modus, correct, totaal) {
  const scores = laadScores();
  if (!scores[vakId]) scores[vakId] = {};
  if (!scores[vakId][modus]) {
    scores[vakId][modus] = { gespeeld: 0, totaalCorrect: 0, totaalVragen: 0, beste: 0 };
  }
  const s = scores[vakId][modus];
  s.gespeeld++;
  s.totaalCorrect += correct;
  s.totaalVragen += totaal;
  const pct = totaal > 0 ? Math.round((correct / totaal) * 100) : 0;
  s.beste = Math.max(s.beste, pct);
  localStorage.setItem(SCORE_KEY, JSON.stringify(scores));
}

function getScoreVoorVak(vakId) {
  const scores = laadScores();
  return scores[vakId] || null;
}

function wisAlleScores() {
  localStorage.removeItem(SCORE_KEY);
}

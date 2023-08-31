const scores = [];

function addScore(name, score) {
  scores.push({ name, score });
}

function getScores() {
  return scores;
}

export { addScore, getScores };

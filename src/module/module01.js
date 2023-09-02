const newGame = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: 'ludo',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const postPlayer = async (playerName, playerScores) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bCGtghjEZ8GNT6S5ERzw/scores/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: playerName,
      score: playerScores,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const loadScores = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bCGtghjEZ8GNT6S5ERzw/scores/');
  const updates = await fetch(request);
  const valuesMain = await updates.json();
  valuesMain.result.sort((a, b) => b.score - a.score);
  const scoresList = document.querySelector('#scoresList');
  scoresList.innerHTML = '';
  valuesMain.result.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${e.user} : </span><span> ${e.score}</span>`;
    scoresList.appendChild(li);
  });
};

const clearFields = () => {
  const clear = document.querySelectorAll('input');
  clear.forEach((e) => {
    e.value = '';
  });
};

export {
  newGame,
  postPlayer,
  loadScores,
  clearFields,
};

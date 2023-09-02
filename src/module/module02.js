const updateScores = async () => {
  const newRequest = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bCGtghjEZ8GNT6S5ERzw/scores/');

  const updates = await fetch(newRequest);
  const valuesMain = await updates.json();

  valuesMain.result.sort((a, b) => b.score - a.score);
  const scoresList = document.querySelector('#scoresList');
  scoresList.innerHTML = '';
  valuesMain.result.forEach((event) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${event.user} : </span><span> ${event.score}</span>`;
    scoresList.appendChild(li);
  });
};

const blankInut = () => {
  const blank = document.querySelectorAll('input');

  blank.forEach((event) => {
    event.value = '';
  });
};

export {
  updateScores,
  blankInut,
};

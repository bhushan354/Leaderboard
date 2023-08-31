import './style.css';
import { addScore, getScores } from './module/module.js';

const scoresList = document.getElementById('scoresList');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const submitButton = document.getElementById('submit');
const refreshButton = document.querySelector('.refresh-btn');
function updateScoresList() {
  const scores = getScores();
  scoresList.innerHTML = '';

  scores.forEach((scoreObj) => {
    const li = document.createElement('li');
    li.textContent = `${scoreObj.name}: ${scoreObj.score}`;
    scoresList.appendChild(li);
  });
}

submitButton.addEventListener('click', () => {
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  if (name && score) {
    addScore(name, score);
    nameInput.value = '';
    scoreInput.value = '';
    updateScoresList();
  }
});

refreshButton.addEventListener('click', updateScoresList);

updateScoresList();

import './style.css';
import {
  newGame,
  addPlayer,
} from './module/module01.js';

import {
  updateScores,
  blankInut,
} from './module/module02.js';

document.querySelector('.refresh-btn').addEventListener('click', (e) => {
  e.preventDefault();
  updateScores();
});

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.typeName').value;
  const score = document.querySelector('.typeScore').value;
  addPlayer(name, score);
  blankInut();
});

newGame();

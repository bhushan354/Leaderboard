import './style.css';
import {
  newGame,
  postPlayer,
  loadScores,
  clearFields,
} from './module/module01.js';

document.querySelector('.refresh-btn').addEventListener('click', (e) => {
  e.preventDefault();
  loadScores(); 
});

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.typeName').value;
  const score = document.querySelector('.typeScore').value;
  postPlayer(name, score); 
  clearFields(); 
});

newGame();

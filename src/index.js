import './styles/styles.css';
import Score from './modules/score.js';

let scoreArray = [];
if (JSON.parse(localStorage.getItem('scores'))) {
  scoreArray = JSON.parse(localStorage.getItem('scores'));
} else {
  scoreArray = localStorage.setItem('scores', JSON.stringify([]));
}

const scoreList = document.querySelector('.scoreList');
const nameInput = document.querySelector('.nameInput');
const scoreInput = document.querySelector('.scoreInput');
const submit = document.querySelector('.submit');

const render = () => {
  scoreList.innerHTML = null;
  const local = JSON.parse(localStorage.getItem('scores'));
  local.forEach((elem) => {
    const scoreCard = document.createElement('li');
    scoreCard.classList.add('eachScore');
    scoreCard.innerHTML = `${elem.name}: ${elem.score}`;
    scoreList.appendChild(scoreCard);
  });
};

submit.addEventListener('click', () => {
  const eachScore = new Score(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  scoreArray = JSON.parse(localStorage.getItem('scores'));
  scoreArray.push(eachScore);
  localStorage.setItem('scores', JSON.stringify(scoreArray));
  render();
});

window.addEventListener('load', render());

document.querySelector('.scoreRefresh').addEventListener('click', () => {
  window.location.reload();
  window.localStorage.clear();
});
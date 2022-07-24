'use strict';

const diceImgs = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

let diceValue;
let currentScore = 0;
const rollDiceBtn = document.querySelector('.btn--roll');
const imgElement = document.querySelector('.dice');
const currentScoreOfPlayer1 = document.querySelector('#current--0');
const currentScoreOfPlayer2 = document.querySelector('#current--1');
const Player1 = document.querySelector('.player--0');

const randomDiceIndex = () => Math.floor(Math.random() * diceImgs.length);
const setDiceValue = index => {
  switch (index) {
    case 0:
      diceValue = index + 1;
      break;
    case 1:
      diceValue = index + 1;
      break;
    case 2:
      diceValue = index + 1;
      break;
    case 3:
      diceValue = index + 1;
      break;
    case 4:
      diceValue = index + 1;
      break;
    case 5:
      diceValue = index + 1;
      break;

    default:
      break;
  }
};

const changeDiceImg = () => {
  let index = randomDiceIndex();
  imgElement.src = diceImgs[index];
  setDiceValue(index);
};

const rollDiceFunction = () => {
  changeDiceImg();
  currentScore += diceValue;
  Player1.classList.contains('player--active')
    ? (currentScoreOfPlayer1.textContent = currentScore)
    : (currentScoreOfPlayer2.textContent = currentScore);
};

rollDiceBtn.addEventListener('click', rollDiceFunction);

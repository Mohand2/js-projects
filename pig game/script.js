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
let player1Score = 0;
let player2Score = 0;
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const imgElement = document.querySelector('.dice');
const currentScoreOfPlayer1 = document.querySelector('#current--0');
const currentScoreOfPlayer2 = document.querySelector('#current--1');
const ScoreOfPlayer1 = document.querySelector('#score--0');
const ScoreOfPlayer2 = document.querySelector('#score--1');
const Player1 = document.querySelector('.player--0');
const Player2 = document.querySelector('.player--1');

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

const switchPlayer = () => {
  if (Player1.classList.contains('player--active')) {
    Player1.classList.remove('player--active');
    Player2.classList.add('player--active');
  } else {
    Player1.classList.add('player--active');
    Player2.classList.remove('player--active');
  }
};

const setCurrentScore = () => {
  Player1.classList.contains('player--active')
    ? (currentScoreOfPlayer1.textContent = currentScore)
    : (currentScoreOfPlayer2.textContent = currentScore);
};
const setScore = () => {
  if (Player1.classList.contains('player--active')) {
    player1Score += currentScore;
    ScoreOfPlayer1.textContent = player1Score;
  } else {
    player2Score += currentScore;
    ScoreOfPlayer2.textContent = player2Score;
  }
};

const checkWinner = () => {
  if (player1Score >= 30) console.log('player 1 wins');
  if (player2Score >= 30) console.log('player 2 wins');
};

const rollDiceFunction = () => {
  changeDiceImg();
  if (diceValue !== 1) {
    currentScore += diceValue;
    setCurrentScore();
  } else {
    currentScore = 0;
    setCurrentScore();
    switchPlayer();
  }
};
const holdScore = () => {
  setScore();
  checkWinner();
  currentScore = 0;
  setCurrentScore();
  switchPlayer();
};

rollDiceBtn.addEventListener('click', rollDiceFunction);
holdBtn.addEventListener('click', holdScore);

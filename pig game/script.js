'use strict';

const diceImgs = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const rollDiceBtn = document.querySelector('.btn--roll');
const imgElement = document.querySelector('.dice');
const randomDiceIndex = () => Math.floor(Math.random() * diceImgs.length);
const changeDiceImg = () => (imgElement.src = diceImgs[randomDiceIndex()]);

rollDiceBtn.addEventListener('click', changeDiceImg);

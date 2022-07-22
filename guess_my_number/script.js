'use strict';







const msg = {
  correct: 'Correct',
  higher: 'Higher',
  lower: 'Lower',
  guess: 'Start guessing ...',
};
const getRandomNumber = () => Math.floor(Math.random() * 20) + 1;
const getUserNumberValue = () => document.querySelector('.guess').value;

let number;
function setNumber() {
  number = getRandomNumber();
}
setNumber();

console.log(`Number = ${number}`);
let score = 0;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const userValue = Number(getUserNumberValue());

  if (userValue === number) {
    document.querySelector('.message').textContent = msg.correct;
    score++;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    setNumber();
    console.log(`New number = ${number}`);
  } else if (userValue > number) {
    document.querySelector('.message').textContent = msg.lower;
  } else if (userValue < number) {
    document.querySelector('.message').textContent = msg.higher;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = msg.guess;
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = 0;
  score = 0;
  setNumber();
  console.log(number);

  //   document.querySelector('.highscore').textContent = 0;
});

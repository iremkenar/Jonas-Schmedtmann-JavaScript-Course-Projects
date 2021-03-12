'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const $secretNum = document.querySelector('.number');
let $score = document.querySelector('.score');
let $body = document.querySelector('body');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // convert to number because typeof input is always string
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    //check if there is an input value and convert it to true for if to execute
    displayMessage('No number!🧐');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉🎉');
    $secretNum.textContent = secretNumber;
    $body.style.backgroundColor = '#60b347';
    $secretNum.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is not true
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      $score.textContent = score;
    } else {
      displayMessage('You lost the game🤔');
      $scoreText = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  $score.textContent = score;
  $secretNum.textContent = '?';
  document.querySelector('.guess').value = '';
  $body.style.backgroundColor = '#222';
  $secretNum.style.width = '15rem';
});

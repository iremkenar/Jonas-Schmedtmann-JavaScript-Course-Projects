'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  // convert to number because typeof input is string
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number!🧐';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉🎉';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!📈';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!📉';
  }
});

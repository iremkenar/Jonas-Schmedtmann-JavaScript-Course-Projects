'use strict';

// Selecting Elements
const $score0El = document.querySelector('#score--0');
const $score1El = document.querySelector('#score--1');
const $diceEl = document.querySelector('.dice');
const $btnRoll = document.querySelector('.btn--roll');
const $current0El = document.querySelector('#current--0');
const $current1El = document.querySelector('#current--1');

//Initial conditions
$score0El.textContent = 0;
$score1El.textContent = 0;
$diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling the dice
$btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNum);
  // 2. Display dice
  $diceEl.classList.remove('hidden');
  $diceEl.setAttribute('src', `dice-${diceNum}.png`);
  //or $diceEL.src = `dice-${diceNum}.png`

  // 3. Check for rolled 1
  if (diceNum !== 1) {
    // add diceNum to current score
    currentScore += diceNum;
    $current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
  }
});

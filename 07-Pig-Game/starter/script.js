'use strict';

// Selecting Elements
const $player0El = document.querySelector('.player--0');
const $player1El = document.querySelector('.player--1');
const $score0El = document.querySelector('#score--0');
const $score1El = document.querySelector('#score--1');
const $diceEl = document.querySelector('.dice');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');
const $current0El = document.querySelector('#current--0');
const $current1El = document.querySelector('#current--1');

//Initial conditions
$score0El.textContent = 0;
$score1El.textContent = 0;
$diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//State variable
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  $player0El.classList.toggle('player--active');
  $player1El.classList.toggle('player--active');
};

//Rolling the dice
$btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    $diceEl.classList.remove('hidden');
    $diceEl.setAttribute('src', `dice-${diceNum}.png`);
    //or $diceEL.src = `dice-${diceNum}.png`

    // 3. Check for rolled 1
    if (diceNum !== 1) {
      // add diceNum to current score
      currentScore += diceNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore; // of the active player
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

$btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // scores[1] = scores[1] + currentScore
    // 2. Check if player's score >= 100
    if (scores[activePlayer] >= 20) {
      //  Finish the game
      playing = false;
      $diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

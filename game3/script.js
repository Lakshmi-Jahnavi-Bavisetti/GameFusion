'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Starting conditions
let scores, currentScore, activePlayer, play;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  play = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (play) {
    //1.generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.display it
    diceEl.classList.remove('hidden');
    diceEl.src = `./pictures/dice-${dice}.png`;

    //if it is 1 switch to next player
    if (dice !== 1) {
      //add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  //add current score
  if (play) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score==100
    if (scores[activePlayer] >= 100) {
      play = false;
      diceEl.classList.toggle('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //finish
    else {
      switchPlayer();
    }
  }
  //switch the next player
});
btnNew.addEventListener('click', init);

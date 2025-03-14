'use strict';

// Get the Buttons and set their click operations
const btnNew = document.querySelector('.btn--new');
btnNew.addEventListener('click', newGame);
const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', rollDice);
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', holdScore);

// These values change, so use let
let scoreCurrent = 0;
let currentRoll = 0;
let previousRoll = -1; //Used to handle dice display
let playerNumber = 0;
// Arrays are Constants, we'll manipulate their contents, but not them
const scoreTotal = [0, 0];
const scoreElem = [document.getElementById('current--0'), document.getElementById('current--1')];
const totalElem = [document.getElementById('score--0'), document.getElementById('score--1')];
const playerElem = [document.querySelector('.player--0'), document.querySelector('.player--1')];
const currentElem = [document.getElementById('current--player--0'), document.getElementById('current--player--1')];
const diceElem = [];
//Fill the Dice Array with our dice divs
for (let i = 0; i <= 6; i++) {
  diceElem.push(document.getElementById(`dice--id--${i}`));
}

// Allow for Key Presses
document.addEventListener('keydown', function (event) {
  if (event.key === 'r' || event.key === 'ArrowUp') {
    rollDice();
  } else if (event.key === 'h' || event.key === 'ArrowDown') {
    holdScore();
  } else if (event.key === 'n') {
    newGame();
  }
});

//Start the Game
newGame();

// Start the Game
function newGame() {
  // Reset all scores and displays
  for (let i = 0; i <= 1; i++) {
    scoreTotal[i] = 0;
    scoreElem[i].textContent = 0;
    totalElem[i].textContent = 0;
    playerElem[i].classList.remove('player--winner');
  }

  // Reset the Dice
  if (previousRoll !== -1) {
    diceElem[previousRoll].classList.add('hidden');
    previousRoll = -1;
  }

  // Set player to 1 and then switch them, this sets all the other options we need set.
  playerNumber = 1;
  switchPlayer();

  // Set our Button states
  btnRoll.disable = false;
  btnRoll.classList.remove('btn--disabled');
}

function switchPlayer() {
  // Reset Score and its Display
  scoreCurrent = 0;
  scoreElem[playerNumber].textContent = 0;

  // Disable Active Player decor
  playerElem[playerNumber].classList.remove('player--active');
  currentElem[playerNumber].classList.add('hidden');
  // Swap players by Math
  playerNumber = 1 - playerNumber;

  // Activate current Player decor
  playerElem[playerNumber].classList.add('player--active');
  currentElem[playerNumber].classList.remove('hidden');

  // Disable the Hold Button
  btnHold.disabled = true; //Disable the Hold Button until the dice is rolled.
  btnHold.classList.add('btn--disabled');
}

// Next two functions handle hiding and showing the dice
function displayDice(previousDice, currentDice) {
  if (previousDice !== -1) {
    diceElem[previousDice].classList.add('hidden');
  }
  // Toggle our Blank Die (has a transition effect)
  diceElem[0].classList.remove('hidden');
  // Show our actual die
  diceElem[currentDice].classList.remove('hidden');
  // Hide the Blank Die
  diceElem[0].classList.add('hidden');
}

function rollDice() {
  // Enable the Hold Button
  btnHold.disabled = false;
  btnHold.classList.remove('btn--disabled');

  // Generate roll
  currentRoll = Math.trunc(Math.random() * 6) + 1;
  // Display Die
  displayDice(previousRoll, currentRoll);
  previousRoll = currentRoll;

  // Check for a one
  if (currentRoll !== 1) {
    pushScore(currentRoll);
  } else {
    // Switch Next Player
    switchPlayer();
  }
}

function pushScore(score) {
  // Update the Score
  scoreCurrent += score;
  // Display the Score
  scoreElem[playerNumber].textContent = scoreCurrent;
}

function holdScore() {
  // Record score
  scoreTotal[playerNumber] += scoreCurrent;
  totalElem[playerNumber].textContent = scoreTotal[playerNumber];
  // Hide the die
  diceElem[currentRoll].classList.add('hidden');
  if (scoreTotal[playerNumber] >= 100) {
    // We have a winner
    // Disable button presses
    btnHold.disabled = true;
    btnHold.classList.add('btn--disabled');
    btnRoll.disabled = true;
    btnRoll.classList.add('btn--disabled');
    // Highlight Winner
    playerElem[playerNumber].classList.add('player--winner');
  } else {
    // Change the Player
    switchPlayer();
    btnHold.disabled = true;
    btnHold.classList.add('btn--disabled');
  }
}

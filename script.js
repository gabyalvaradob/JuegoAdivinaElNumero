/**
 * Adivina el número. LOGICA DE PROGRAMACIÓN
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
}

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
  document.getElementById('number-guess').value = '';
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess){
  if (numberGuess == correctNumber) {
    showYouWon();
  } else if (correctNumber < numberGuess) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    console.log('Utiliza un número del 1 al 100 por favor');
  }
};


/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  // *CODE GOES BELOW HERE *
  // Reset el numero escogido por la computadora
  // Borra el historial del usuario
  // Reset el array "guesses"
  // Dejar en blanco el input
  correctNumber = getRandomNumber();
  document.getElementById('result').innerHTML = '';
  guesses = [];
  document.getElementById('number-guess').value = '';
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  let numeroRandom = Math.floor(Math.random()*(1,100)+1);
  return numeroRandom;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.unshift(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = 0; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  while(index < guesses.length) { 
    list += "<li class='list-group-item'>" + "Intentaste con " + guesses[index] + "</li>";
    index+=1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}

//   let index = guesses.length -1; // Esto funciona con .push(guess) en la funcion saveGuessHistory();
//   let list = "<ul class='list-group'>";
//   // *CODE GOES BELOW HERE *
//   while(index >= 0) { 
//     list += "<li class='list-group-item'>" + "Intentaste con " + guesses[index] + "</li>";
//     index-=1;
//   }
//   list += '</ul>';
//   document.getElementById("history").innerHTML = list;
// }

// += concatena strings

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon() {
  const text = "Excelente! Adivinaste! es: " + correctNumber;
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Uff! Menos!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Muy bajo, intenta más alto!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
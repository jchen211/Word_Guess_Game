/* get elements for text*/
var randomWordText = document.getElementById('randomWord');
var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var guessesLeftText = document.getElementById('guesses-left');
var lettersGuessedText = document.getElementById('letters-guessed');

/* create variables */
var wins = 0;
var losses = 0;
var guessLeft = 10;

/* var to store chosen word and wrong guesses */
var wrongGuess = [];
var chosenWord = [];

/* array of words */
var words = ['big bang', 'beast', 'blackpink'];


/* define random word selection and generate underscore for chosen word*/
var chosenWord = words[Math.floor(Math.random() * words.length)];
var letters = [];   

//created loop to go through the words in the array
 for (var i = 0; i < chosenWord.length; i++) {
// a variable for the random word    
      var word = chosenWord[i];
//created another loop to go through the letters in the word
 for (var j = 0; j < chosenWord[i].length; j++) {
//pushes underscores for each letter and space    
  if (word[j] !== " "){
    letters.push('_ ');
  } else {
    letters.push('  ');
      }
    }
    var remainLetters = chosenWord.length;

    randomWordText.textContent = letters.join(' ');
  }

  document.onkeyup = function (event) {
    var userInput = event.key;

    if (chosenWord.indexOf(userInput) === -1) {
        wrongGuess.push(userInput);
        guessLeft--;

        guessesLeftText.textContent = guessLeft;
        lettersGuessedText.textContent = "Guessed Letters: " + wrongGuess;
        guessesLeftText.textContent = guessLeft;


    } else {
      for (var g = 0; g < chosenWord.length; g++) {
        if (chosenWord[g] === userInput) {
          letters[g] = userInput;
          remainLetters--;
        }

        if (remainLetters === 0) {
          alert ("You Got It!");
          wins++;
          guessLeft = 10;
          wrongGuess = [];

        } if (guessLeft === 0) {
            losses--;
            guessLeft = 10;
          }
        }
      }
    randomWordText.textContent = letters.join(' ');
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
  }
  







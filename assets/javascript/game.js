/* get elements */
var randomWordText = document.getElementById('randomWord');
var winsText = document.getElementById('wins');
var lossesText = document.getElementById('losses');
var guessesLeftText = document.getElementById('guesses-left');
var lettersGuessedText = document.getElementById('letters-guessed');

/* create variables */
var wins = 0;
var losses = 0;
var guessLeft = 10;

/* var to store userInput, correct and wrong guesses */
var userInput = [];
var wrongGuess = [];
var correctGuess = [];
var chosenWord = [];

/* array of words */
var words = ['blackpink', 'beast'];


/* define random word selection and generate underscore for chosen word*/
var chosenWord = words[Math.floor(Math.random() * words.length)];
var letters = [];   

 for (var i = 0; i < chosenWord.length; i++) {
    var word = chosenWord[i];
  
    for (var j = 0; j < chosenWord[i].length; j++) {
    
    if (word[j] !== " "){
      letters.push('-');
    }else {
        letters.push(' ');
      }
    }
  }
  



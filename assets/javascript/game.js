var wordGuessText = document.getElementById("word-guess");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = document.getElementById("guess-left");
var lettersGuessedText = document.getElementById("letters-guessed");

var correctLetters =
["a", "b", "c", "e", "g", "i", "k", "l", "n", "p", "s", "t"];

var answers = ['big bang', 'blackpink', 'beast'];

var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessedLetter = [];

document.addEventListener('keyup', function (){
var blankWord = document.getElementById('word-1').hidden=true;
var showB = document.getElementById('letterB').hidden=false;
var showG = document.getElementById('letterG').hidden=false;
var showI = document.getElementById('letterI').hidden=false;
var showA = document.getElementById('letterA').hidden=false;
var showN = document.getElementById('letterN').hidden=false;


document.onkeyup = function(event) {
    var userChoice = event.key;
    guessedLetter.push(userChoice);

    if (correctLetters === answers) {}

guessLeftText = (guessLeft);
lettersGuessedText.textContent = (guessedLetter);
}


},false);


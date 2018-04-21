//Defining Variables

//Possible Keyboard Letters
var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Random Computer Letter
var randLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];

//wins and losses variables
var wins = 0;
var losses = 0;

//header message variables

var nameTag = '"Psychic Game" by Alex Bruner';
var mainMessage = "I'm Thinking of a Letter...";
var lossMessage = "Sorry, the letter was " + '"' + randLetter.toUpperCase() + '"';
var winMessage = "You Might Be Psychic!";

var mainMessageSub = "The Psychic Game";
var lossMessageSub = "You are probably not psychic. But please try again";
var winMessageSub = "Can you guess it right again?";

//remaining and previous guess variables
var remainingGuesses=10;
var prevGuesses = [];

//user guess variable
var userGuess = null;

console.log(randLetter);

//when key is released run the game
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //convert letter to lowercase
  document.querySelector("#messageMain").innerHTML = mainMessage;  //display main message across screen
  document.querySelector("#messageSub").innerHTML = mainMessageSub;  //display main message across screen
  document.querySelector("#nameTag").innerHTML = "";
  
 //if userGuess is a valid entry( and hasn't been guess before)
  if (prevGuesses.indexOf(userGuess) < 0 && possibleLetters.indexOf(userGuess) >=0) {
    prevGuesses[prevGuesses.length]=userGuess;
    //Remaining guesses minu 1
    remainingGuesses--;
    //Display userGuess on Screen
    document.querySelector("#userGuess").innerHTML = "&nbsp;"+ "&nbsp;" + '"' + userGuess.toUpperCase() + '"';
  }

  if (randLetter == userGuess) {
    wins++; //add 1 to wins
    document.querySelector("#messageMain").innerHTML = winMessage; //display win message
    document.querySelector("#messageSub").innerHTML = winMessageSub;
    remainingGuesses = 10 //reset remaining guesses to 10
    prevGuesses = []; //reset previous guesses
    randLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]; //generate a new random letter
    
    console.log(randLetter);
  }

  if (remainingGuesses == 0) {
    losses++; //add 1 to losses
    document.querySelector("#messageMain").innerHTML = lossMessage; //display loss message
    document.querySelector("#messageSub").innerHTML = lossMessageSub;
    remainingGuesses = 10; //reset remaining guesses to 10
    prevGuesses = []; //reset previous guesses
    randLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]; //generate a new random letter
    
    console.log(randLetter);
  }

  //write Previous Guesses to html
  document.querySelector("#remainingGuesses").innerHTML = "&nbsp;" + remainingGuesses;
  //write Previous Guesses to html
  document.querySelector("#prevGuesses").innerHTML = "&nbsp;" + prevGuesses;
  //write Wins to html
  document.querySelector("#wins").innerHTML = "&nbsp;" + wins;
  //write Losses to html
  document.querySelector("#losses").innerHTML = "&nbsp;" + losses;
}
  //reset button - testing


    
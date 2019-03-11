//-----JavaScript Psychic Game-----//

// declare basic variables that tally everything


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

// alphabet variable

var alphabet:Array = ("abcdefghijklmnopqrstuvwxyz").split("");
trace("this is the letter b...", alphabet[1]);
trace(alphabet);

// function genCharArray(charA, charZ) {
//     var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
//     for (; i <= j; ++i) {
//         a.push(String.fromCharCode(i));
//     }
//     return a;
// }
// genCharArray('a', 'z');

// random letter generator

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

// pressing a key
document.onkeypress = function(event) {
    var userGuess = event.key;

    //if it matches the computer's choice, wins will increase wins by 1
    if (userGuess === computerChoice) {
        wins++;
    }
    //if it does not match computer's choice, guessesLeft will decrease by 1
    else {
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
    }

    document.getElementById("wins").innerHtml = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar;

}
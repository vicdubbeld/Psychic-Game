//JavaScript Psychic Game
//==========================================================================

// declare basic variables that tally everything
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// alphabet array (there has to be an easier way)
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// random letter generator
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// checks to see that computer is randomly generating letter
// it is
console.log(computerChoice);

// Functions
//==========================================================================

// updates user's score 
function updateWins() {
    document.querySelector("#winScore").innerHTML = "Wins: " + wins;
}

// updates # of losses
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

// updates # of guesses remaining for the user 
function updateLeft() {
    document.querySelector("#left").innerHTML = "Guesses Left: " + guessesLeft;
}

// restarts # of guesses remaining in round before taking a loss of a point
function restartLeft() {
    document.querySelector("#left").innerHTML = "Guesses Left: " + 10;
}

// updates # of guesses user has had so far
function updateSoFar() {
    document.querySelector("#so-far").innerHTML = "Your Guesses so far: " + guessesSoFar;
}

// updates letter chosen by computer
function updateLetter() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Process
//==========================================================================

// calling functions
updateWins();
updateLosses();
updateLeft();
restartLeft();
updateLetter();
updateSoFar();

// pressing a key
document.onkeypress = function (event) {
    var userGuess = event.key;

    // if it matches the computer's choice, wins will increase wins by 1
    if (userGuess === computerChoice) {
        wins++;
        updateWins();
        guessesSoFar++;
        updateLetter();
        console.log(computerChoice);
        // return;
    }
    else {
        guessesLeft--;
        guessesSoFar++;
        // updateSoFar();
        console.log(computerChoice);

        if (guessesLeft < 1) {
            losses++;
            updateLosses();
            restartLeft();
            // return;
        }
    }

   
    // if it does not match computer's choice, guessesLeft will decrease by 1
    if (userGuess !== computerChoice) {
        // guessesLeft--;
        updateLeft();
        // guessesSoFar++;
        updateSoFar();
        // console.log(computerChoice);
        // if # of guesses remaining reaches zero, then losses increases by one
        if (guessesLeft < 1) {
            // losses++;
            updateLetter();
            restartLeft();
            return;
        }

        // if (guessesLeft === 10) {
        //     losses++;
        //     updateLosses();
        // }
        return;
    }
    // if (guessesLeft === 0) {
    //     document.querySelector("#losses").innerHTML = "Losses: " + losses;
    //     losses++;
    //     updateLosses();
    //     document.querySelector("#so-far").innerHTML = "Your Guesses so far: " + guessesSoFar;
    //     guessesSoFar++;
    //     updateLetter();
    // }
    // else if (guessesLeft < 1) {
    //     alert("You lost!");
    //     location.reload();
    //     updateLetter();
    //     guessesSoFar++;
    //     updateSoFar();

    // }


};
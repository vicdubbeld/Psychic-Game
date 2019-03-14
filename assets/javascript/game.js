//JavaScript Psychic Game
//==========================================================================

// declare basic variables that tally everything
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

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
    document.querySelector("#left").innerHTML = "Guesses Left: " + guessesLeft;
}

// updates user listing letters guessed so far
function updateSoFar() {
   document.querySelector("#so-far").innerHTML = "Your Guesses so far: " + guessesSoFar;
}

// updates letter chosen by computer
function updateLetter() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function resetGuesses () {
    guessesSoFar = [];
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
document.onkeypress = function(event) { var guess = event.key.toLocaleLowerCase();
    guessesSoFar.push(guess);
    // var userGuess = event.key;

    // if it matches the computer's choice, wins will increase wins by 1
    if (guess === computerChoice) {
        wins++;
        updateWins();
        
        updateLetter();
        console.log(computerChoice);
        return;
    }
   
    
    else {
        guessesLeft--;
        
        console.log(computerChoice);

        if (guessesLeft < 1) {
            losses++;
            guessesLeft = 10;
            updateLosses();
            restartLeft();

            
            
        }
        
    }


    // if it does not match computer's choice, guessesLeft will decrease by 1
    if (guess !== computerChoice) {
        updateLeft();
        updateSoFar();
        
        // if # of guesses remaining reaches zero, then losses increases by one
        if (guessesLeft < 1) {
            // losses++;
            updateLetter();
            restartLeft();
            resetGuesses();
            return;
        }
    }
    return;



};
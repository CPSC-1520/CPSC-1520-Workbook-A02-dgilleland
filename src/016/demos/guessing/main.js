let selectedWord = 0; // Start with the first word
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CORRECT = "✓";
const WRONG = "X";

let availableLetters = LETTERS; // this is a copy

/**
 * nextWord - Returns the next word to guess
 * @returns {string} The next word to guess
 */
const nextWord = function() {
    let wordList = document.querySelectorAll('li');
    // TODO: Return the item at the selectedWord index, and also increment the index number.
    let selected = wordList[selectedWord];
    selectedWord++; // Increment my index variable
    if(selectedWord >= wordList.length) {
        // Reset to the start
        selectedWord = 0;
    }
    return selected.innerText;
}

/**
 * fillGameboard - Fills the gameboard with divs for each letter in the word to guess.
 * @returns {void}
 */
const fillGameboard = function() {
    // Grab the next word in the list
    let theWord = nextWord();

    // Replace the .innerHTML of the div.gameboard with a bunch of divs, one for each letter in the word we grabbed.
    let newGameboard = "";
    console.log(theWord.length); // TODO: Remove this line
    for(var index = 0; index < theWord.length; index++) {
        newGameboard += '<div>' + theWord[index] + '</div>';
    }
    document.querySelector('.gameboard').innerHTML = newGameboard;
}

// Add an event handler for the textbox input.
/**
 * guessWord - Responds to the user's guess of a letter to play the game.
 * @param {*} evt 
 */
const guessWord = function(evt) {
    let out = document.getElementById('feedback');
    // grab the text in the textbox
    let letter = evt.target.value.toUpperCase();
    //           \________/
    //             |- The <input> element
    if(isSingleLetter(letter)) {
        // Check if it is a valid input (part of the LETTERS constant)
        if(isGoodLetter(letter)) {
            // Check if the letter has been guessed before
            if (isUnguessedLetter(letter)) {
                playTheGame(letter, out);
            } else {
                // they already used up that letter
                out.innerHTML = '<i>You already guessed that letter</i>';
                out.classList.remove('wrong');
                out.classList.remove('correct');
            }
        } else {
            out.innerHTML = '<u>Only enter letters of the alphabet - not numbers or symbols</u>';
            out.classList.remove('wrong');
            out.classList.remove('correct');
        }
    } else {
        // Tell the user to input only a single character.
        out.innerHTML = '<b>Enter only a single character for your guess</b>';
        out.classList.remove('wrong');     // remove red font color
        out.classList.remove('correct');   // remove green font color
    }
    // Clear the textbox
    evt.target.value = "";
}

// Hook up the event handler to the change event.
document.querySelector('input')
        .addEventListener('change', guessWord);

document.querySelector('form')
        .addEventListener('submit', function(evt) {
            evt.preventDefault();
        })

// Start the game with the first word to guess.
fillGameboard();


//  Utility functions


/**
 * isSingleLetter - Validate that the string is a single character
 * @param {string} text some text that may or may not be a single character
 * @returns true if the text is a single character; false otherwise
 */
function isSingleLetter(text) {
    return text.length == 1;
}

/**
 * isGoodLetter - Validate that the character is in the general list of alphabetic characters
 * @param {singleCharacter} letter some character from some user input
 * @returns true if it is one of the acceptable characters; false otherwise
 */
function isGoodLetter(letter) {
    return LETTERS.indexOf(letter) >= 0;
}

/**
 * isGoodInput - Validate that the character is in the list of remaining letters to be guessed
 * @param {singleCharacter} letter some character from some user input
 * @returns true if the letter is in the list of available letters; otherwise false
 */
function isUnguessedLetter(letter) {
    return availableLetters.indexOf(letter) >= 0;
}

/**
 * playTheGame - Evaluate the user's input to see if they guessed a correct letter on this turn.
 * NOTE: This method assumes correct input.
 * @param {character} letter 
 * @param {feedbackElement} out 
 */
function playTheGame(letter, out) {
    let letterDivs = document.querySelectorAll('.gameboard div');
    let isMatch = false; // start out pessimistic
    for (var index = 0; index < letterDivs.length; index++) {
        // check for a match
        let divToCheck = letterDivs[index];
        let divCharacter = divToCheck.innerText.toUpperCase();
        if (letter === divCharacter) {
            divToCheck.classList.add('reveal');
            isMatch = true;
        }
    }
    // Give feedback if they have made a correct guess
    if (isMatch) {
        out.innerText = CORRECT;
        out.classList.remove('wrong');
        out.classList.add('correct');
    } else {
        out.innerText = WRONG;
        out.classList.add('wrong');
        out.classList.remove('correct');
    }
    // Remove the guessed letter from the available letters
    availableLetters = availableLetters.replace(letter, '');
}

let selectedWord = 0; // Start with the first word
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CORRECT = "✓";
const WRONG = "X";

let availableLetters = LETTERS;

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

const fillGameboard = function() {
    // Grab the next word in the list
    let theWord = nextWord();

    // Replace the .innerHTML of the div.gameboard with a bunch of divs, one for each letter in the word we grabbed.
    let newGameboard = "";
    console.log(theWord.length);
    for(var index = 0; index < theWord.length; index++) {
        newGameboard += '<div>' + theWord[index] + '</div>';
    }
    document.querySelector('.gameboard').innerHTML = newGameboard;
}

// Add an event handler for the textbox input.
const guessWord = function(evt) {
    let out = document.getElementById('feedback');
    // grab the text in the textbox
    let letter = evt.target.value.toUpperCase();
    if(letter.length == 1) {
        // Check if it is a valid input (part of the LETTERS constant)
        if(LETTERS.indexOf(letter) >= 0) {
            // Check if the letter has been guessed before
            if (availableLetters.indexOf(letter) >= 0) {
                // play the game
                // loop through the divs in the gameboard to find matches and apply a css class to the div
                let letterDivs = document.querySelectorAll('.gameboard div');
                let isMatch = false; // start out pessimistic
                for(var index = 0; index < letterDivs.length; index++)
                {
                    // check for a match
                    if(letter === letterDivs[index].innerText.toUpperCase()) {
                        letterDivs[index].classList.add('reveal');
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
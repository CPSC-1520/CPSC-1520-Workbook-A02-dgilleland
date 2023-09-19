/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/

let disclosing = prompt('Enter the name of the disclosing party');
let receiving = prompt('Enter the name of the receiving party');
let date = prompt('Enter the date');


var disclosingElements = document.querySelectorAll('.disclosing-party');
// In the next line of code, I am passing an anonymous function to the forEach method. This is a function that is not named and is only used once. It is a common pattern in JavaScript to use anonymous functions in this way.
disclosingElements.forEach(function(el) {
	el.innerText = disclosing;
});

var receivingElements = document.querySelectorAll('.receiving-party');
receivingElements.forEach(function(el) {
	el.innerText = receiving;
});

// Make a variable called dateElement and assign the results of calling .querySelector() to that variable
let dateElement = document.querySelector('.date');
//                        \ HTMLElement | undefined/
// Store the value of date into the .innerText property of dateElement
dateElement.innerText = date; // Change the innerText

// For giggles and confusion....


const addNumbers = function(first, second) {
	return first + second;
}


stuff = 'JavaScript is quite forgiving...';
alert(stuff);

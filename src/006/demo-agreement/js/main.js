/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/

let disclosing = prompt('Enter the name of the disclosing party');
let receiving = prompt('Enter the name of the receiving party');
let date = prompt('Enter the date');

document.querySelector('.disclosing-party').innerText = disclosing;
document.querySelector('.receiving-party').innerText = receiving;
document.querySelector('.date').innerText = date;
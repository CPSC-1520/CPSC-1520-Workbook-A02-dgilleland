/*
	TASK: prompt for individual names and add them to 
		  a list.  Confirm after each name is entered
		  whether the user would like to enter another
		  name or not.
*/
let outDiv = document.querySelector('div');

let myHTML = '<ul>';

// Add my names
do {
    let aName = prompt('Enter name: ');
    myHTML += '<li>' + aName + '</li>';
} while(confirm('Another name?'));

myHTML += '</ul>';

// display the list
outDiv.innerHTML = myHTML;
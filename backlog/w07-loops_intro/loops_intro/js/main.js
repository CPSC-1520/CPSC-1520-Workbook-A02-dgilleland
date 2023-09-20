var topTen = document.querySelector('.top-ten');
var count = 0;
var list = '<ul>';


// create the li elements for the list
/*
// first with a while loop
while (count < 10) {
	list = list + '<li>' + (count + 1) + '</li>';
	count = count + 1;
}

// second with a do-while loop
do {
	list = list + '<li>' + (count + 1) + '</li>';
	count = count + 1;
} while(count < 10);
*/

// third time with a for loop
for (count = 0; count < 10; count += 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}

list = list + '</ul>';

// display the list
topTen.innerHTML = list;
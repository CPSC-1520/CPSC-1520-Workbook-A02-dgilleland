var topTen = document.querySelector('.top-ten');
var count = 0;
var list = '<ul>';

// create the list
for (count = 0; count < 10; count += 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}

list = list + '</ul>';

// display the list
topTen.innerHTML = list;

// stripe odd li
var items = document.querySelectorAll('li');

for (count = 0; count < items.length; count += 2) {
   items[count].classList.add('stripe');
}
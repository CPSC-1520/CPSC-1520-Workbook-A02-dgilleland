// ENSURE YOU HAVE THE CONSOLE OPEN TO VIEW OUTPUT

// The jQuery function is available by name and the 
// alias $
console.log($ === jQuery); // true

// Use jQuery to find all paragraph elements in the page
console.log($('p'));

// Note that jQuery allows use of most/all CSS1-3 selectors and 
// makes use of a few custom selectors as well

// Select the second paragraph using jQuery pseudo selector and display its text
console.log($('p:eq(1)').text());

// Same as above using CSS selector
console.log($('p:nth-of-type(2)').text());

// Adding event listeners is easy too, one thing to note when using
// jQuery is that looping over elements is implicit.  This means that
// simply selecting for elements will ensure that a function is applied 
// to all elements in the set.

// For example, adding a listener for ALL paragraphs is as follows:
$('p').on('click', function (evt) {
	console.log(evt.target.innerHTML);
});

// Notice there is no loop in the preceding example, neat!

// But, adding event listeners on all paragraphs is not very efficient,
// it would be better to add the listener on a parent element, say 
// the main element.

// First, remove the event listeners from the paragraphs
$('p').off('click');

// Now, delegate from the main
$('main').delegate('p', 'click', function (evt) {
	console.log('Second attempt: ' + evt.target.innerHTML);
});

// This can also be accomplished via the on() function, check the 
// jQuery API documentation for more...








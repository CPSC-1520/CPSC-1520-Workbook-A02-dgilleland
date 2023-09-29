// In loops, a TRUE value always re-enters the loop
let outputDiv = document.querySelector('div');
let list = '<h2>While Loop</h2>';
let count = 0; // count the number of list item

// Demo 1 - While Loop
list += '<ul>';
while (count < 7) { // true enter the loop
    list = list + '<li>Item ' + count + '</li>';
    count = count + 1;
}
list = list + '</ul>';

// Demo 2 - Do-While Loop
list += '<h2>Do-While Loop</h2>';
list += '<ul>';
// What's the value of the count variable now...
do {
    list += '<li>Count = ' + count + '</li>';
    count = count -1; // decrement
} while(count > 0);
list += '</ul>';

// Demo 3 - For Loop (similar to the While Loop)
list += '<h2>For Loop</h2>';
list += '<ol>';
for(count = 5; count < 10; count++) {
    list += '<li>' + count + '</li>';
}
list += '</ol>';

// Put the list HTML inside my output div
outputDiv.innerHTML = list;

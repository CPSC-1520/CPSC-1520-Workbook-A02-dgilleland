/*
  TASK: prompt for individual names and add them to 
      a list.  Confirm after each name is entered
      whether the user would like to enter another
      name or not.
*/
// One way to "pull" items out of the global scope
// is to wrap our code inside of a function
window.onload = function() {
  // Now, my local variables are no longer
  // in the global scope, but are restricted
  // to this function
  let outDiv = document.querySelector('div');

  let myHTML = '<ul>';

  // Add my names
  do {
    let aName = prompt('Enter name: ');
    // Template literals start and end with a backtick
    myHTML += `<li>${aName}</li>`;
    //             \______/
    //               |-  Placeholder
  } while(confirm('Another name?'));
  //      \______________________/
  //         |-   true if OK, otherwise false

  myHTML += '</ul>';

  // display the list
  outDiv.innerHTML = myHTML;
}
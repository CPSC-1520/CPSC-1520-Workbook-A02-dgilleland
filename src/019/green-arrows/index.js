// index.js
const convertResponse = (response) => response.json();
// function(response) {
//     return response.json();
// }
const processJson = function(data) {
    // And then we'll log the data to console, so we can see it
    console.log('the response was converted to JSON');
    console.log(data);
}
const buttonClickHandler = function(evt) {
    // We'll call an API that will give us JSON
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
    fetch(apiUrl)
        .then(convertResponse)
        .then(processJson);
    console.log('Button was clicked!');
}
// Hook up the button to the click handler
document
  .querySelector('#get-fun')
  .addEventListener('click', buttonClickHandler);

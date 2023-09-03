// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

function greetUser(username) {
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + mainTitle.innerHTML;
};
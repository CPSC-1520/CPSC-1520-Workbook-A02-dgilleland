import * as theCode from "./buttonCode.js";
// import { buttonHandler, about } from "./buttonCode.js";
document
    .querySelector('#clickMe')
    .addEventListener('click', theCode.buttonHandler);
// console.log('from main.js', message); // This won't work
console.log(theCode.about);
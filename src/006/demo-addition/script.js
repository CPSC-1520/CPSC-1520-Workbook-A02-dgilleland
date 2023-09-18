// Add in the code from the walk-through and observe the page behaviour.
// 1. Prompt the user for two numbers and add them together. (Assume correct input by the user)
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");
let sum = Number(num1) + parseInt(num2); // two ways to convert strings to numbers

// 2. Place the values in the HTML page using the elements' `id` values to identify the element.
// id="firstNumber"
firstNumber.innerText = num1;
// id="secondNumber"
secondNumber.innerText = num2;
// id="answer"
answer.innerText = sum;

// NOTE: Whenever we interact with the DOM to find an element, we are depending on the HTML to properly identify the element. Effectively, we are always dependent on having some kind of "prior knowledge" of our HTML. This is why we need to be careful when we change our HTML. If we change the `id` of an element, we need to change our JavaScript code to match.
// Most browsers put elements with an `id` into the global scope. This means we can access them directly without having to use `document.getElementById()`. This is why we can access `firstNumber` directly.
// Many developers frown on this practice because it can lead to confusion. It is better to use `document.getElementById()` to make it clear that we are interacting with the DOM.
// Additionally, it's possible to put a hyphen in the `id` value. This is not allowed in JavaScript variable names. So, in this case, we would have to use `document.getElementById()` to access the element.
// Some developers prefer to use hyphens in `id` values of their HTML in order to effectively "block" them from being accessed directly in JavaScript. This is a matter of preference and style.
// See this SO (StackOverflow) post for more information:
//  https://stackoverflow.com/a/10412839/191885

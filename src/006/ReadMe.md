# Intro to Functions in JavaScript ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)  ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

## Understanding Functions

So far, we've been using JavaScript as a simple scripting language. We've been writing code that executes from top to bottom, and we've been using variables to store values. Along the way, we've also been interacting with the DOM of the page, using the `document` object to select elements and update their content.

We're at a point where our code is starting to get a bit long. If we continue programming like this, soon we will find our code getting repetitive, messy and hard to maintain. We need a way to organize our code into reusable blocks. We need a way to make our code more *modular*.

In this and subsequent lessons, we'll learn about functions, which are a way to organize our code into reusable blocks. We'll learn how to define functions, how to call functions, and how to pass data into functions.

What is a function? A function is a block of code that contains a set of instructions to perform some task. In many ways, you've seen functions in action already. When we've used `console.log()`, we've been calling a *function* of the `console` object. When we've used `document.querySelector()`, we've been calling a *function* of the `document` object.

Calling a function is also known as **invoking** a function. Essentially, we are saying to the computer, "Hey, do this thing for me." The function then does its thing, and then returns control back to the code that called it.

We *invoke* the function by using its name followed by parentheses. When we do this, we often have the option to send information into the function. Whatever we place inside the parenthesis is information that we are sending into the function. If we need to send more than one piece of information, we separate each piece of information with a comma.

The term for each item we send in is called an **argument**. We can *pass in* various kinds of items as arguments. The argument can be raw data (such as a number or a string), a variable, an expression, or even another function. Functions capture this information through something called **parameters**.

Frequently, functions will also send information back to us. We refer to this as a **return value**. We can capture the return value of a function by assigning it to a variable. We can also use the return value directly in an expression.

## Demo-Agreement

The web page in the [`demo-agreement`](./demo-agreement) folder is a simple agreement form. It has a few areas that need to be updated with information from the user. We can use JavaScript to update the page with the user's information.

The instructions for the demo are in the [`main.js`](./demo-agreement/js/main.js) file.

----

## Demo-Addition

The web page in the **`demo-addition`** folder displays the results of adding two numbers. In this walkthrough, we will use JavaScript to prompt the user for two numbers, add them together, and display the result on the page along with the numbers supplied by the user.

> **Note:** Do not worry about validation at this point; assume correct input from the user.

> **NOTE:** This example makes use of the `<output>` element in the `index.html` file. Notice also that the elements have `id` attributes. This is so that we can easily access them in JavaScript ***without having to query the DOM***.



----

----

## Resources

Review the following articles:

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Functions - reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

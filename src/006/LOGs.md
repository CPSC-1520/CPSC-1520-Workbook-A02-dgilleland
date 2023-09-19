# Intro to Functions in JavaScript (LOGs)

*At the end of this lesson, you should be able to...*

- [ ] Identify and describe the various types of scope in JavaScript
  - Scope (in JavaScript) refers to the visibility of variables. There are two types of scope: global and local.
- [ ] Explain why it is important to avoid "polluting the global scope"
  - Putting too many variables in the global scope can lead to naming conflicts and other problems.
  - This is especially true when working with other people's code. (For example, if you are using a library that has a variable named `x`, you don't want to use that same name for one of your variables.)
- [ ] Explain how functions provide one mechanism to avoid polluting the global scope
  - Functions are helpful to avoid polluting the global scope. For example, you could put all of your variables inside a function. That way, they are not in the global scope.
  - *Hint: To learn how to use an anonymouse function to hide all your variables, look at IIFE (Immediately Invoked Function Expression).* 
- [ ] Define the term **function** in JavaScript
  - A **function** is a block of code that can be called (invoked) by name. Functions can optionally take parameters and optionally return a value.
- [ ] Identify various built-in functions
  - Some functions are part of the JavaScript language itself. Those include `alert()`, `prompt()`, `confirm()`, `console.log()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`, `encodeURI()`, `decodeURI()`, `encodeURIComponent()`, and `decodeURIComponent()`.
  - Other functions are supplied by the browser. Those include `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`, `document.createElement()`, `document.createTextNode()`, `document.write()`, `window.open()`, `window.close()`, `window.resizeTo()`, `window.moveTo()`, `window.scrollTo()`, `window.scrollBy()`, `window.alert()`, `window.prompt()`, `window.confirm()`, `window.print()`, `window.setTimeout()`, `window.setInterval()`, `window.clearTimeout()`, and `window.clearInterval()`.
- [ ] Use the built-in `alert()` and `prompt()` functions to interact with the user
- [ ] Distinguish between functions that return values and those that don't
- [ ] Identify what is returned when a function does not have an explicit return value.
  - It will return `undefined`.
- [ ] Explain what is meant when we say that functions are "first-class citizens" in JavaScript
  - This means that functions are treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.
- [ ] Describe how to call (invoke) functions in JavaScript
- [ ] List three methods for user interaction that are part of the global object in the browser
  - `alert()`, `prompt()`, and `confirm()`
- [ ] List several methods that are members of the `console` object
  - Members of the `console` object include `.log()`, `.info()`, `.warn()`, `.error()`, `.dir()`, `.clear()`, `.time()`, `.timeEnd()`, `.trace()`, `.assert()`, `.count()`, `.group()`, `.groupCollapsed()`, `.groupEnd()`, `.profile()`, `.profileEnd()`, `.timeStamp()`, `.table()`, `.exception()`, and `.debug()`.
  - One of the newer members is the **`.table()`** method, which displays tabular data in a table format.

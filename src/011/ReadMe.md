# Organizing Functions in JavaScript ![Code](https://img.shields.io/badge/Code%20Status-Walkthrough-blueviolet?logo=Visual%20Studio%20Code&labelColor=indigo)  ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)


> ***FLIPPED LESSON:** Review this lesson before coming to class. Remember to bring your notes and your questions!*

----

- [x] Aiming for DRY code
- [ ] Where to place functions (one script vs many scripts)
- [x] Nesting Functions and Function Scope

----

> *The following is a draft of this lesson topic.*

# Organizing Functions in JavaScript

Welcome to this lesson on organizing functions in JavaScript! By the end of this lesson, you'll have a deeper understanding of how to structure your functions in a clean and efficient manner.

## 1. DRY Code

**DRY** stands for "Don't Repeat Yourself". It's a principle aimed at reducing the repetition of code patterns. 

### Benefits of DRY and Modular Code:

- **Maintainability**: Easier to update and maintain.
- **Readability**: Makes the code more understandable.
- **Reusability**: Allows you to reuse code in different parts of your application.
- **Efficiency**: Reduces the chances of bugs since you're not rewriting the same logic.

## 2. Function Scope in JavaScript

In JavaScript, each function creates its own **scope**. Variables defined inside a function cannot be accessed from outside that function.

```javascript
const outerFunction = function() {
    const outerVar = "I'm outside!";

    const innerFunction = function() {
        console.log(outerVar); // Outputs: "I'm outside!"
    }

    innerFunction();
}

outerFunction();
```

In the example above, `innerFunction` has access to `outerVar` because it's defined in the outer scope. However, if you try to access `outerVar` outside of `outerFunction`, it will throw an error.

## 3. The Role of the Stack in Tracking Function Calls

When a function is called in JavaScript, it's added to a call **stack**. Once the function completes its execution, it's removed from the stack. If a function calls another function, the new function is added to the top of the stack.

This is why when you have a series of nested function calls, the innermost function is executed first, and then the functions that called it are executed in reverse order.

## 4. Nested Functions in JavaScript

A function defined inside another function is called a **nested function**.

### Benefits:

- **Encapsulation**: Helps in encapsulating the logic and keeping it hidden from the outside scope.
- **Access to Outer Function Scope**: Nested functions can access variables from their containing function.

### Drawbacks:

- **Readability**: Can make the code harder to follow if overused.
- **Memory**: Each nested function can increase the memory overhead.

## 5. Closures in JavaScript

A **closure** is a function that has access to the parent scope, even after the parent function has closed.

```javascript
const createGreeting = function(greeting) {
    return function(name) {
        console.log(greeting + ", " + name + "!");
    }
}

const sayHello = createGreeting("Hello");
sayHello("Alice"); // Outputs: "Hello, Alice!"
```

In the example above, even though `createGreeting` has finished executing, the returned function still has access to the `greeting` variable. This is a closure in action!

## Conclusion

Functions are a fundamental part of JavaScript, and understanding how to organize and use them effectively is crucial. Remember to keep your code DRY, be mindful of your function scopes, and leverage the power of closures when needed.

For more in-depth information on functions in JavaScript, please refer to the official documentation: [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

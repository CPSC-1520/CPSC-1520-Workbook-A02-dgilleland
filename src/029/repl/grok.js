const toBool = [() => true, () => false];

/**
 * showMe() is a parameterless function that displays the number of arguments that were acutally passed in when the function was called.
 */
const showMe = function() {
    // Every function has a built-in array-like object called "arguments" that contains all the arguments that were passed in when the function was called.
    console.log(`There are ${arguments.length} items supplied to this function.`);
    for(let index = 0; index < arguments.length; index++)
        console.log(arguments[index].toString());
}

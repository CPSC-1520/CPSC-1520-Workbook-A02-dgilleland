const toBool = [() => true, () => false];

const showMe = function() {
    console.log(`There are ${arguments.length} items supplied to this function.`);
    for(let index = 0; index < arguments.length; index++)
        console.log(arguments[index].toString());
}

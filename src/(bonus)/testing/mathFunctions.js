export const addNumbers = function(numberArray) {
    let sum = 0;
    for (let index = 0; index < numberArray.length; index++) {
        sum += numberArray[index];
    }
    return sum;
}
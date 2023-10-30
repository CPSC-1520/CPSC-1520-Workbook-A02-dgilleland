export const calculate = function(operator, values) {
    let result = values[0];
    for(let index = 1; index < values.length; index++) {
        if(operator === '+') {
            result += values[index];
        } else if(operator === '-') {
            result = result - values[index];
        } else {
            result = result * values[index];
        }
    }
    return result;
}
export const calculate = function(operator, values) {
    let result;
    if(operator === '+') {
        result = values[0];
        for(let index = 1; index < values.length; index++) {
                result += values[index];
        }
    } else if(operator === '-') {
        result = values[0];
        for(let index = 1; index < values.length; index++)
            result = result - values[index];
    } else {
        result = values[0];
        for(let index = 1; index < values.length; index++)
            result = result * values[index];
    }
    return result;
}
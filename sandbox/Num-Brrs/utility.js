export const calculate = function(operator, values) {
    // Guard Clause - Validate my input
    if(operator !== '+' && 
       operator !== '-' && 
       operator !== '*' && 
       operator !== '/')
        throw new Error(`'${operator}' is not a valid math operation`);
    if(values === null || values === undefined || values.constructor.name !== 'Array')
        throw new Error(`'${values}' is not an array of numbers`)
    
    // If it gets this far, then I have good data
    // to work with
    let result = values[0];
    for(let index = 1; index < values.length; index++) {
        if(operator === '+') {
            result += values[index];
        } else if(operator === '-') {
            result = result - values[index];
        } else if(operator === '*') {
            result = result * values[index];
        } else if(operator === '/') {
            result = result / values[index];
        }
    }
    return result;
}
/* The If-Else statement follows this grammar:

if(conditionalExpression)
    statementOrStatementBlock
else
    statementOrStatementBlock

where the "conditionalExpression" is some expression that will result in a true or false value, and the "statementOrStatementBlock" is either a single instruction/statement or a set of statements inside curly braces (statement block).

-----

Relational Operators

==      "is equal to" - equality operator
!=      "is not equal to" - equality operator
===     "is equal to" - identity operator
!==     "is not equal to" - identity operator
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to

*/

// The following is a function with a JSDoc description
/**
 * generateFeedback
 * @param {string} letterGrade value
 * @param {number} pointValue 
 * @returns A string outlining the letter grade and point value.
 */
const generateFeedback = function(letterGrade, pointValue) {
    pointValue = pointValue.toFixed(1);
    return `The letter grade is <b>${letterGrade}</b> with a grade point value of <b>${pointValue}</b>.`;
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const percent = +e.target.elements.percent.value;
    let grade = '';
    // TODO: Convert to letter grade & grade point
    if (percent >= 90 && percent <= 100) {
        grade = generateFeedback('A+', 4.0);
    } else if(percent >= 83 && percent <=89) {
        grade = generateFeedback('A', 4.0);
    } else if(percent >= 80 && percent <= 82) {
        grade = generateFeedback('A-', 3.7);
    } else if(percent >= 77 && percent <= 79) {
        grade = generateFeedback('B+', 3.3);
    } else if (percent >= 73 && percent <= 76) {
        grade = generateFeedback('B', 3.0);
    } else if(percent >= 70 && percent <=72) {
        grade = generateFeedback('B-', 2.7);
    } else if(percent >= 67 && percent <= 69) {
        grade = generateFeedback('C+', 2.3);
    } else if(percent >= 63 && percent <= 66) {
        grade = generateFeedback('C', 2.0);
    } else if (percent >= 60 && percent <= 62) {
        grade = generateFeedback('C-', 1.7);
    } else if(percent >= 55 && percent <=59) {
        grade = generateFeedback('D+', 1.3);
    } else if(percent >= 50 && percent <= 54) {
        grade = generateFeedback('D', 1.0);
    } else if(percent >= 0 && percent <= 49) {
        grade = generateFeedback('F', 0.0);
    }

    document.querySelector('#result').innerHTML = grade;
});
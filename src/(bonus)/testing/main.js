// This file acts as a testing module for the code in other modules.
console.log('Begin testing...');
import { it } from './testingLibrary.js';
import { addNumbers } from './mathFunctions.js';

const sampleBadCode = function() {
    throw new Error('This code is bad!');
}
const sampleGoodCode = function() {
    return;
}
// This demonstrates my `it` function when evaluating some other functions.
// it('should be working with my sampleBadCode function', sampleBadCode);
// it('should be working with my sampleGoodCode function', sampleGoodCode);

it('should add two numbers', function() {
    // Arrange
    const givenNumbers = [1, 2];
    const expected = 3;
    // Act
    const actual = addNumbers(givenNumbers);
    // Assert
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, but got ${actual}`);
    }
})

it('should add four numbers', function() {
    // Arrange
    const givenNumbers = [1, 2, 3, 4];
    const expected = 10;
    // Act
    const actual = addNumbers(givenNumbers);
    // Assert
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, but got ${actual}`);
    }
});
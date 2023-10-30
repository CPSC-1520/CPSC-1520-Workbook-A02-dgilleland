// utility.spec.js
import {it, expect} from 'vitest';
import { calculate } from './utility.js';

it('should add two numbers', () => {
    const actual = calculate('+', [1, 2]);
    expect(actual).toBe(3);
});
it('should add three numbers', () => {
    const actual = calculate('+', [1, 2, 3]);
    expect(actual).toBe(6);
});
it('should subtract two numbers', () => {
    const actual = calculate('-', [1, 2]);
    expect(actual).toBe(-1);
});
it('should multiply three numbers', () => {
    const actual = calculate('*', [4, 2, 3]);
    expect(actual).toBe(24);
});
it('should multiple two numbers', () => {
    const actual = calculate('*', [4, 5]);
    expect(actual).toBe(20);
});
it('should divide two numbers', () => {
    const actual = calculate('/', [1, 2, 5]);
    expect(actual).toBe(0.1);
});
// Unhappy path tests
it('should reject invalid operator', () => {
    // Arrange - Creating a function that can be
    //           passed into my expect() method
    const act = () => calculate('bob', [4, 5, 6]);
    // Assert
    expect(act).toThrowError(`'bob' is not a valid math operation`);
});

it('should reject invalid array', () => {
    const act = () => calculate('+', 'bob');
    expect(act).toThrowError(`'bob' is not an array of numbers`);
});

it('should reject null for the array', () => {
    const act = () => calculate('+', null);
    expect(act).toThrowError(`'null' is not an array of numbers`);
});

it('should reject the array unless it has all numbers', () => {
    const act = () => calculate('+', [1, 3, 5, null]);
    expect(act).toThrowError('the array must only contain numbers');
});

it.todo('should reject an empty array', () => {
    const act = () => calculate('+', []);
    expect(act).toThrowError('the array must have at least one number');
});

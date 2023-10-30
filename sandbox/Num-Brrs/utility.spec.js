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
it.todo('should multiple two numbers', () => {
    const actual = calculate('*', [4, 5]);
    expect(actual).toBe(20);
});
it.todo('should divide two numbers', () => {
    expect(details).toBe('correct');
})
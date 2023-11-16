import { it, expect } from 'vitest';
import toPigLatin from './pigLatin.js';

it('should translate word with consonant cluster', () => {
    const actual = toPigLatin('plant');
    expect(actual).toBe('ant-play');
});

it('should translate word with consonant', () => {
    const actual = toPigLatin('pig');
    expect(actual).toBe('ig-pay');
});

it('should translate word with vowel', () => {
    const actual = toPigLatin('eat');
    expect(actual).toBe('eat-yay');
});

it.each([
    {given: 'eat!', expected: 'eat-yay!'},
    {given: 'meat?', expected: 'eat-may?'},
    {given: 'cheers!', expected: 'eers-chay!'},
])('should preseve punctuation converting $given to $expected', ({given, expected}) => {
    const actual = toPigLatin(given);
    expect(actual).toBe(expected);
});

it.todo('should do something about spaces', () => {
    // TODO: write a test for this
})
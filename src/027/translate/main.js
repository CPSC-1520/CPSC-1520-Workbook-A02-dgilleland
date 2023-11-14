import toPigLatin from './pigLatin.js';

document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        let result = '';
        const english = document.querySelector('textarea');
        const words = english.value.split(' ');
        const tranlations = words.map(toPigLatin);
        result = tranlations.join(' ');
        const output = document.querySelector('output');
        output.textContent = result;
    });
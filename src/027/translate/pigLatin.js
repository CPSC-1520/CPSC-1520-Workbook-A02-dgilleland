const toPigLatin = function (word) {
    // grab any punctuation at the end of the word
    const punctuation = word.match(/[.,!?]/);
    // strip it from the word
    word = word.replace(/[.,!?]/, '');
    // check for a compound consonant at the start of the word
    const consonantCluster = word.match(/^[^aeiou]+/);
    if (consonantCluster) {
        // remove the consonant cluster from the start of the word
        word = word.slice(consonantCluster[0].length);
        // add the consonant cluster to the end of the word
        word += '-' + consonantCluster[0] + 'ay';
    } else {

        // check for a vowel at the start of the word
        const vowel = word.match(/^[aeiou]/);
        if (vowel) {
            // add -yay to the end of the word
            word += '-yay';
        }
    }
    // replace the punctuation
    if (punctuation) {
        word += punctuation[0];
    }
    return word;
}

export default toPigLatin;
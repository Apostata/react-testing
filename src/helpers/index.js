/**
 * Returns the number of matched letters for given guessedWord
 * @function getLetterMatchCount 
 * @param {string} secretWord 
 * @param {string} guessedWord 
 * @return {number} 
 */
export const getLetterMatchCount = (secretWord, guessedWord) => {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedetterSet = new Set(guessedWord.split(''));
    const commonLetter = [...secretLetterSet].filter(letter => guessedetterSet.has(letter));
    return commonLetter.length;

};
const languageStrings = {
    pt_br:{
        congrats: 'Parabéns! Você acertou a palavra secreta!',
        submit: 'Enviar',
        guessPrompt: 'Tente acertar a palavra secreta!',
        guessInputPlaceholder: 'tente uma palavra',
        guessColumnHeader: 'Palavras tentadas',
        guessedWords: 'Tentativas',
        matchingLettersColumnHeader: 'Letras acertadas',
    },
    en: {
        congrats: 'Congratulations! You guessed the word!',
        submit: 'Submit',
        guessPrompt: 'Try to guess the secret word!',
        guessInputPlaceholder: 'enter guess',
        guessColumnHeader: 'Guessed Words',
        guessedWords: 'Guesses',
        matchingLettersColumnHeader: 'Matching Letters',
    },
    emoji: {
        congrats: '🎯🎉',
        submit: '🚀',
        guessPrompt: '🤔🤫🔤',
        guessInputPlaceholder: '⌨️🤔',
        guessedWords: '🤷‍🔤',
        guessColumnHeader: '🤷‍',
        matchingLettersColumnHeader: '✅',
    }
};

export const getStringByLanguage = (langCode, key, string=languageStrings) => {
    if(!string[langCode] || !string[langCode][key]) {
        console.warn(`Couldn't get string [${key}] for [${langCode}]! Fallback to Brasilian Portuguese.`)
        return string['pt_br'][key];
    }
    return string[langCode][key];
};

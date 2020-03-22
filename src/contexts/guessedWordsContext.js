import React from 'react';

const guessedWordsContext = React.createContext();

const useGuessedWords = () =>{
    const context = React.useContext(guessedWordsContext);
    if(!context) throw new Error('useSuccess must be used within a SuccessProvider!');
    return context;
};

const GuessedWordsProvider = props =>{
    const [guessedWords, setGuessedWords] = React.useState([]);
    const value = React.useMemo(()=>[guessedWords, setGuessedWords],[guessedWords]);
    return <guessedWordsContext.Provider value={value} {...props}/>
};

export default {
    useGuessedWords,
    GuessedWordsProvider
};
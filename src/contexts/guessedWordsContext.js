import React from 'react';

const guessedWordsContext = React.createContext();

const useGuessedWords = () =>{
    const context = React.useContext();
    if(!context) throw new Error('useSuccess must be used within a SuccessProvider!');
    return contex;
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
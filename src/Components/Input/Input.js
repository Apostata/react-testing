import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../../contexts/languageContext';
import { getStringByLanguage } from '../../helpers/strings';
import {getLetterMatchCount} from '../../helpers/index';
import successContext from '../../contexts/successContext';
import guessWordsContext from '../../contexts/guessedWordsContext';
import Styles from './Input.scss';

export const Input = props =>{
    const {secretWord} = props; 
    const [currentGuess, setCurrentGuess] = React.useState('');
    const [guessedWords, setGuessedWords] = guessWordsContext.useGuessedWords();
    const [success, setSuccess] =  successContext.useSuccess();
    const language = React.useContext(languageContext);
   
    if(success) return null;

    return (
        <form 
            data-test="input-component"
            className={[Styles.neu_container, Styles.form_inline].join(" ")}
            onSubmit={(e)=>{
                e.preventDefault();
                if(currentGuess === secretWord) setSuccess(true);
                const lettersMatched = getLetterMatchCount(secretWord, currentGuess);
                const newGuessedWord = [...guessedWords, { guessedWord:currentGuess, lettersMatchCount: lettersMatched}];
                setGuessedWords(newGuessedWord);
                setCurrentGuess('')
            }}
        >
            <input 
                type='text'
                className={[Styles.neu_container, Styles.iverted, Styles.ltt_margin].join(" ")}
                data-test="input-field"
                placeholder={getStringByLanguage(language, 'guessInputPlaceholder')}
                value={currentGuess}
                onChange={(e)=>{setCurrentGuess(e.target.value)}}
            />
            <button type="submit" data-test="input-submit">
                {getStringByLanguage(language, 'submit')}
            </button>
        </form>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;
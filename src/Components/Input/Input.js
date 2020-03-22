import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../../contexts/languageContext';
import { getStringByLanguage } from '../../helpers/strings';

import Styles from './Input.scss';

export const Input = props =>{
    const [currentGuess, setCurrentGuess] = React.useState('');
    const language = React.useContext(languageContext);
    return (
        <form 
            data-test="input-component"
            className={[Styles.neu_container, Styles.form_inline].join(" ")}
            onSubmit={(e)=>{
                e.preventDefault();
                // TODO: update GuessedWords
                // TODO: compara com a secretWord
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
    )
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;
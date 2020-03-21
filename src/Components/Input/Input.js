import React from 'react';
import PropTypes from 'prop-types';
import GuessedWords from '../GuessedWords/GuessedWords';

export const Input = props =>{
    const [currentGuess, setCurrentGuess] = React.useState('');

    return (
        <form 
            data-test="input-component"
            className="form-inline"
            placeholder="Adivinhe a palavra secreta!"
            onSubmit={(e)=>{
                e.preventDefault();
                // TODO: update GuessedWords
                // TODO: compara com a secretWord
                setCurrentGuess('')
            }}
        >
            <input 
                type='text'
                data-test="input-field" 
                value={currentGuess}
                onChange={(e)=>{setCurrentGuess(e.target.value)}}
            />
            <button type="submit" data-test="input-submit">Adivinhar</button>
        </form>
    )
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
};

export default Input;
import { actionTypes } from '../actionTypes';
import { getLetterMatchCount } from '../../helpers/index';

/**
 * @function guessWord
 * @returns {object} - Returns a action object with type 'GUESS_WORD';
 */
export const guessWord = (guessedWord) =>{
    return (dispatch, getState) =>{
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);

        dispatch({
            type:actionTypes.GUESS_WORD,
            payload:{
                guessedWord,
                letterMatchCount
            }
        });

        if(guessedWord === secretWord){
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    };
};

export const clearGuesses = () =>{
    console.log('clear gueeses action');
    return { type: actionTypes.CLEAR_GUESSES };
}
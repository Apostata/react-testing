import { actionTypes } from '../../actionTypes';
import { getLetterMatchCount } from '../../../helpers/index';

/**
 * @function guessWord
 * @returns {object} - Returns a action object with type 'GUESS_WORD';
 */
export const guessWord = (guessWord) =>{
    return (dispatch, getState) =>{
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(secretWord, guessWord);

        dispatch({
            type:actionTypes.GUESS_WORD,
            payload:{
                guessWord,
                letterMatchCount
            }
        });

        if(guessWord === secretWord){
            dispatch({type: actionTypes.CORRECT_GUESS});
        }
    };
};
import { actionTypes } from '../../actionTypes';

/**
 * @function correctGuess
 * @returns {object} - Returns a action object with type 'CORRECT_GUESS';
 */
export const correctGuess = () =>{
    return { type: actionTypes.CORRECT_GUESS};
};
import { actionTypes } from '../actionTypes';
/**
 * @function guessWordReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {array} - array of guessed words
 */
const initialState = [];
export default (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];

        case actionTypes.CLEAR_GUESSES:
            return initialState;
            
        default :
            return state;
    }
};
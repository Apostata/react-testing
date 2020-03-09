import { actionTypes } from '../../actionTypes'
/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - Action to be reduced
 * @returns {boolean} - new success state
 */
const initialState = false;
export default (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
};
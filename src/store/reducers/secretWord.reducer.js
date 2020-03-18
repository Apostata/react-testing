import { actionTypes } from '../actionTypes';
/**
 * @function secretWordReducer
 * @param {string} state - state before reducer
 * @param {object} action - action sent to reducer
 * @returns {string} new state
 */
export default (state=null, action) =>{
    switch(action.type){
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
}
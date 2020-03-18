import { actionTypes } from "../actionTypes";
import { correctGuess } from './success.actions';

describe('Success redux action', ()=>{
    it('Should return action with type "CORRECT_GUESS"', ()=>{
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
    });
});
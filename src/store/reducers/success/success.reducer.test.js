import { actionTypes } from '../../actionTypes';
import SuccessReducer from './success.reducer';


describe('Success reducer', () => {
    it('Should return false when no action is passed', ()=>{
        const newState = SuccessReducer(undefined, {});
        expect(newState).toBe(false);
    });

    it('Should return true when action CORRECT_GUESS is passed', ()=>{
        const newState = SuccessReducer(undefined, {type:actionTypes.CORRECT_GUESS});
        expect(newState).toBe(true);
    });
});
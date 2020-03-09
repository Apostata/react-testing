import { initStore } from './configure.store';
import { actionTypes } from './actionTypes';

const actions = {
    [actionTypes.CORRECT_GUESS] : (globaState, value) =>{
        return {
            success: value
        };
    }
};

export const ConfigSuccessStore = (initialState) => {
    initStore({success: initialState }, actions);
}

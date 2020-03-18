import { combineReducers } from 'redux';
import successReducer from './success.reducer';
import guessedWordsReducer from './guessWord.reducer';
import secretWordReducer from './secretWord.reducer';

export default combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer
});
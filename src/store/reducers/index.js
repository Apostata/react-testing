import { combineReducers } from 'redux';
import successReducer from './success/success.reducer';
import guessedWordsReducer from './guessWord/guessWord.reducer';
import secretWordReducer from './secretWord/secretWord.reducer';

export default combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer
});
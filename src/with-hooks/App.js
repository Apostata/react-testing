import React from 'react';
import Styles from './App.scss';
import Actions from '../hooks';

import Congrats from '../Components/Congrats/Congrats';
import Input from '../Components/Input/Input';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import LanguagePicker from '../Components/LanguagePicker/LanguagePicker';

import languageContext from '../contexts/languageContext';

/**
 * @function reducer - to return the updated state based on action
 * @param {object} state - existing state
 * @param {object} action - {type:'action', payload:'to update state'}
 * @returns {object} - updated state 
 */

const initialState = { secretWord: null, language: 'pt_br'};
const reducer = (state, action) =>{
  switch(action.type){
    case 'setSecretWord':
      return {...state, secretWord: action.payload};
    case 'setLanguage':
        return {...state, language: action.payload};
    default:
      throw new Error(`Invalid action Type ${action.type}!`);
  }
};

export const App  = props =>{
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setSecretWord = (secretWord) => 
    dispatch({type:'setSecretWord', payload:secretWord});

  const setLanguage = (language) => 
    dispatch({type:'setLanguage', payload:language});

  React.useEffect(()=>{
    Actions.getSecretWord(setSecretWord);
  },[]);

  let toRender = 
  <div data-test="spinner" className={Styles.loader}>
    Loading...
  </div>
  ;

  if(state.secretWord) toRender =
  <div data-test="app-component">
    <languageContext.Provider value={state.language}>
      <h1 className={Styles.neu_title}>Jotto</h1>
      <LanguagePicker setLanguage={setLanguage}/>
      <Congrats success={true} language={state.language}/>
      <Input secretWord={state.secretWord}/>
      <GuessedWords guessedWords={[{ guessedWord : "train", letterMatchCount: 3 }]}/>
    </languageContext.Provider>
  </div>

  return toRender;
};

export default App;

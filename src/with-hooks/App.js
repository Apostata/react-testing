import React from 'react';
import Styles from './App.scss';
import Actions from '../hooks';

import Congrats from '../Components/Congrats/Congrats';
import Input from '../Components/Input/Input';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
/**
 * @function reducer - to return the updated state based on action
 * @param {object} state - existing state
 * @param {object} action - {type:'action', payload:'to update state'}
 * @returns {object} - updated state 
 */

const initialState = { secretWord: null};
const reducer = (state, action) =>{
  switch(action.type){
    case 'setSecretWord':
      return {...state, secretWord: action.payload};
    default:
      throw new Error(`Invalid action Type ${action.type}!`);
  }
};

export const App  = props =>{
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const setSecretWord = (secretWord) => 
    dispatch({type:'setSecretWord', payload:secretWord})

  React.useEffect(()=>{
    Actions.getSecretWord(setSecretWord)
  },[]);

  let toRender = 
  <div data-test="spinner" className={Styles.loader}>
    Loading...
  </div>
  ;

  if(state.secretWord) toRender =
  <div data-test="app-component">
    <h1 className={Styles.neu_title}>Jotto</h1>
    <Congrats success={true}/>
    <Input secretWord={state.secretWord}/>
    <GuessedWords guessedWords={[{ guessedWord : "train", letterMatchCount: 3 }]}/>
  </div>

  return toRender;
};

export default App;

import React from 'react';
import Congrats from '../Components/Congrats/Congrats';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import Styles from './App.scss';

export const App  = props =>{
  return  (
    <div data-test="app-component">
      {/* <h1 className={Styles.neu_title}>Jotto</h1>
      <Congrats success={true}/>
      <GuessedWords guessedWords={[{ guessedWord : "train", letterMatchCount: 3 }]}/> */}
    </div>
  )
};

export default App;

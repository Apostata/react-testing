import React from 'react';
import Congrats from '../Components/Congrats/Congrats';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import Styles from './App.scss';
const App = props => {
    return  (
      <div>
        <h1 className={Styles.neu_title}>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{ guessedWord : "train", letterMatchCount: 3 }]}/>
      </div>
    )
};

export default App;



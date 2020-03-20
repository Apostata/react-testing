import React, { Component } from 'react';
import Congrats from '../Components/Congrats/Congrats';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import Styles from './App.scss';
export default class App extends Component{
 
  render(){
    return  (
      <div>
        <h1 className={Styles.neu_title}>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={[{ guessedWord : "train", letterMatchCount: 3 }]}/>
      </div>
    )
  } 
}

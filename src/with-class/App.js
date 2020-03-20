import React, { Component, Fragment as F } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from '../store/actions/secretWord.action';

import Input from '../Components/Input/Input';
import Congrats from '../Components/Congrats/Congrats';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import TotalGuesses from '../Components/GuessedWords/TotalGuesses';
import Styles from './App.scss';
export class App extends Component{

  
  componentDidMount(){
    this.props.getSecretWord();
  }

  render(){
    const {success, guessedWords, secretWord} = this.props;
    return  (
      <div data-test="app-component">
        <h1 className={Styles.neu_title}>Jotto</h1>
        <div>{secretWord}</div>
        { success ? <Congrats success={success} secretWord={secretWord} data-test="app-congrats-component"/>: <Input data-test="app-input-component" />}
        {guessedWords.length > 0? 
          <F>
            <GuessedWords guessedWords={guessedWords}/>
            <TotalGuesses total={guessedWords.length} data-test="app-total-guesses" />
          </F>: 
          null
        }
      </div>
    )
  } 
};

const mapStateToProps = ({ success, guessedWords, secretWord}) =>{
  return { success, guessedWords, secretWord };
};

const mapDispatchToProps =  dispatch =>{
  return {
    getSecretWord: ()=> dispatch(getSecretWord())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

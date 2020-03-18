import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../store/actions/guessWord.action';

import Input from '../Components/Input/Input';
import Congrats from '../Components/Congrats/Congrats';
import GuessedWords from '../Components/GuessedWords/GuessedWords';
import Styles from './App.scss';
export class App extends Component{
  componentDidMount(){
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  render(){
    const {success, guessedWords} = this.props;
    return  (
      <div data-test="app-component">
        <h1 className={Styles.neu_title}>Jotto</h1>
        { success ? <Congrats success={success} data-test="app-congrats-component"/>: <Input data-test="app-input-component" />}
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    )
  } 
};

const mapStateToProps = ({ success, guessedWords, secretWord}) =>{
  return { success, guessedWords, secretWord };
};

const mapDispatchToProps = ()=>{
  return {
    guessWord: (word)=> guessWord(word)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

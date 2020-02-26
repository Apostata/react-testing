import React, { Component } from 'react';

export default class App extends Component{
  state = {
    counter: 0,
    message: "O contador está em"
  };

  setCounterState(operation){
    if(operation === 'add'){
      if(this.state.counter === 0) {
        this.setState({
          message: "O contador está em",
          counter: this.state.counter + 1,
        });
        
      } else {
        this.setState({
          counter: this.state.counter + 1,
        });
      }
    } else {
      if(this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      } else {
        this.setState({
          message: "Contador não pode ser menor do que"
        });
      }
    }
  }

  render(){
    const {counter, message} = this.state;
    return  (
      <div className="counter-app" data-test="app-component">
  <h1 data-test="counter-display">{message} {counter}</h1>
        <button data-test="decrement-button" onClick={()=>{this.setCounterState('reduce')}}>Remover do contador</button>
        <button data-test="increment-button" onClick={()=>{this.setCounterState('add')}}>Adicionar ao contador</button>
      </div>
    )
  } 
}

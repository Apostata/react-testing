import React, { useState } from 'react';


const App = props => {
  const [counterState, setCounterState] =  useState(0);
  return (
    <div className="counter-app" data-test="app-component">
      <h1 data-test="counter-display">O contador está em {/*counterState*/}</h1>
      <button data-test="decrement-button" onClick={()=>{/*setCounterState(counterState + 1)*/}}>Remover do contador</button>
      <button data-test="increment-button" onClick={()=>{/*setCounterState(counterState + 1)*/}}>Adicionar ao contador</button>
    </div>
  );
}

export default App;

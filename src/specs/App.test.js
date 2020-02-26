import React from 'react';
import ReactDOM from 'react-dom';
import App from '../with-redux/App';

console.log(process.env.COMPONENTS_PATH);
it('Runs without error', ()=>{ //it() ou test() mesma coisa
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
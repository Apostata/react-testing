
import React from 'react';
import ReactDOM from 'react-dom';
import App from './with-class/App';
import { Provider } from 'react-redux';
import Store from './store/configure.store';

ReactDOM.render(
    <Provider store={Store}><App /></Provider>
    ,document.getElementById('app-root')
);

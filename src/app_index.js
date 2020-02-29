import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/configure.store';

const path = process.env.COMPONENTS_PATH;
import AppH from './with-hooks/App';
import AppC from './with-class/App';
// path === './src/with-class' ? ;

const App = props =>{
    return(
        path === './src/with-class' ? <Provider store={Store}><AppC/></Provider>: <AppH/>
    )
}
 

export default App;
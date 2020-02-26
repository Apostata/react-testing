
const path = process.env.COMPONENTS_PATH;
import AppH from './with-hooks/App';
import AppR from './with-redux/App';
const App = path === './src/with-hooks' ? AppH : AppR;
 

export default App;
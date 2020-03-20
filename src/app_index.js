
const path = process.env.COMPONENTS_PATH;
import AppH from './with-hooks/App';
import AppC from './with-class/App';
const App = path === './src/with-class' ? AppC : AppH;
 

export default App;
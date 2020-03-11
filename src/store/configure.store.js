import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [Thunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//export default createStore(rootReducer);
export default createStoreWithMiddleware(rootReducer);

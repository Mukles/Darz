import RootReaducer from './Reducer/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
const Store = createStore(RootReaducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default Store;

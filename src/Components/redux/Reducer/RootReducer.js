import { ProductReaducer } from './ProductReaducer';
import { combineReducers } from 'redux';

const RootReaducer = combineReducers({
  Product: ProductReaducer
});

export default RootReaducer;
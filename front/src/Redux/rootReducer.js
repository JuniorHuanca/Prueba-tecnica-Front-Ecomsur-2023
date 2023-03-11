import { combineReducers } from 'redux';
import Products from './products';
import Cart from './cart';


const rootReducer = combineReducers({
    Products,
    Cart
});

export default rootReducer;

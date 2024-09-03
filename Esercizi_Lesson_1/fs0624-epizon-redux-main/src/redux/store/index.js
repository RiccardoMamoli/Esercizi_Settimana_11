import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart';
import userReducer from '../reducers/user';
import bookReducer from '../reducers/book';


const mainReducer = combineReducers({

    cart: cartReducer,
    user: userReducer,
    book: bookReducer

})

const store = configureStore({
    reducer:  mainReducer
});

export default store

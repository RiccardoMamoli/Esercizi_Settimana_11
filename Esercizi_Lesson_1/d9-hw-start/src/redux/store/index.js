import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteRedux from "../reducers/favorite";
import listRedux from "../reducers/favList";

const mainReducer = combineReducers({
    favourites : favoriteRedux,
    list: listRedux
})

const store = configureStore({
    reducer: mainReducer,
});

export default store;
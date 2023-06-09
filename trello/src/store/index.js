import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import ListSlice from "./ListSlice";
import CardSlice from "./CardSlice";

const persistConfig = {
    key:'root',
    version:1,
    storage,
}

const reducer = combineReducers(
    {
       listReducer:ListSlice.reducer,
       cardReducer:CardSlice.reducer
    }
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;
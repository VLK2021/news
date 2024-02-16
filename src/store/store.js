import {combineReducers, configureStore} from "@reduxjs/toolkit";

import topNewsUaReducer from './slices/topNewsUa.slice';


const rootReducer = combineReducers({
    topNewsUa: topNewsUaReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
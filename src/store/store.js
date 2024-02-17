import {combineReducers, configureStore} from "@reduxjs/toolkit";

import topNewsUaReducer from './slices/topNewsUa.slice';
import topNewsUsReducer from './slices/topNewsUs.slice';
import topNewsPlReducer from './slices/topNewsPl.slice';


const rootReducer = combineReducers({
    topNewsUa: topNewsUaReducer,
    topNewsUs: topNewsUsReducer,
    topNewsPl: topNewsPlReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
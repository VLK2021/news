import {combineReducers, configureStore} from "@reduxjs/toolkit";

import topNewsUaReducer from './slices/topNewsUa.slice';
import topNewsUsReducer from './slices/topNewsUs.slice';
import topNewsPlReducer from './slices/topNewsPl.slice';
import everythingNewsReducer from './slices/everythingNews.slice';
import searchEverythingNewsReducer from './slices/searchNewsEverything.slice';


const rootReducer = combineReducers({
    topNewsUa: topNewsUaReducer,
    topNewsUs: topNewsUsReducer,
    topNewsPl: topNewsPlReducer,
    everythingNews: everythingNewsReducer,
    searchEverythingNews: searchEverythingNewsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
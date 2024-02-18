import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsService} from "../../services/news.service";


export const getEverythingNews = createAsyncThunk(
    'everythingNewsSlice/getEverythingNews',
    async ({current, page}, {rejectWithValue}) => {
        try {
           return await newsService.getEverything(current, page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getNewsMore = createAsyncThunk(
    'everythingNewsSlice/getNewsMore',
    async ({current, page}, {rejectWithValue, dispatch}) => {
        try {
            const response = await newsService.getEverything(current, page);
            dispatch(addNews({response}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    everythingNews: [],
    page: 1,
    status: null,
    error: '',
}

const everythingNewsSlice = createSlice({
    name: 'everythingNewsSlice',
    initialState,

    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },

        addNews: (state, action) => {
            action.payload.response.articles.map((n) => state.everythingNews.push(n));
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getEverythingNews.pending, (state) => {
                state.status = 'loading..';
            })

            .addCase(getEverythingNews.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.everythingNews = action.payload.articles;
            })

            .addCase(getEverythingNews.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    },
});

const {actions: {changePage, addNews}} = everythingNewsSlice;
const everythingNewsActions = {changePage, addNews};

export {everythingNewsActions};
export default everythingNewsSlice.reducer;
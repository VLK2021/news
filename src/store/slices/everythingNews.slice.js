import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsService} from "../../services/news.service";


export const getEverythingNews = createAsyncThunk(
    'everythingNewsSlice/getEverythingNews',
    async ({current}, {rejectWithValue}) => {
        try {
           return await newsService.getEverything(current);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    everythingNews: [],
    status: null,
    error: '',
}

const everythingNewsSlice = createSlice({
    name: 'everythingNewsSlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getEverythingNews.pending, (state) => {
                state.status = 'loading';
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

export default everythingNewsSlice.reducer;